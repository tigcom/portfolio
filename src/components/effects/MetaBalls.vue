<template>
  <div ref="containerRef" class="meta-balls" :style="{ 'mix-blend-mode': mixBlendMode }" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Camera, Mesh, Program, Renderer, Transform, Triangle, Vec3 } from 'ogl'
import { useThemeVar } from '../../composables/useThemeVar.js'
import { useEffectsEnabled } from '../../composables/useEffectsEnabled.js'

const props = defineProps({
  color: { type: String, default: '' },
  speed: { type: Number, default: 0.3 },
  enableMouseInteraction: { type: Boolean, default: true },
  hoverSmoothness: { type: Number, default: 0.05 },
  animationSize: { type: Number, default: 30 },
  ballCount: { type: Number, default: 15 },
  clumpFactor: { type: Number, default: 1 },
  cursorBallSize: { type: Number, default: 3 },
  cursorBallColor: { type: String, default: '' },
  enableTransparency: { type: Boolean, default: true },
  mixBlendMode: { type: String, default: 'normal' },
})

const containerRef = ref(null)
const { enabled: effectsEnabled } = useEffectsEnabled()

// Themed palette — defaults to the site highlight (lime) instead of the demo
// neon green. Transparent by default so it layers over the hero like the other
// effects (vue-bits defaults to an opaque black backdrop for its standalone demo).
const highlight = useThemeVar('--highlight', '#bcff67')
const resolveColor = () => props.color || highlight.value || '#bcff67'
const resolveCursorColor = () => props.cursorBallColor || highlight.value || '#bcff67'

function parseHexColor(hex) {
  const c = hex.replace('#', '')
  return [parseInt(c.slice(0, 2), 16) / 255, parseInt(c.slice(2, 4), 16) / 255, parseInt(c.slice(4, 6), 16) / 255]
}

function fract(x) {
  return x - Math.floor(x)
}

function hash31(p) {
  const r = [p * 0.1031, p * 0.103, p * 0.0973].map(fract)
  const r_yzx = [r[1], r[2], r[0]]
  const dotVal = r[0] * (r_yzx[0] + 33.33) + r[1] * (r_yzx[1] + 33.33) + r[2] * (r_yzx[2] + 33.33)
  return r.map((val) => fract(val + dotVal))
}

function hash33(v) {
  const p = [v[0] * 0.1031, v[1] * 0.103, v[2] * 0.0973].map(fract)
  const dotVal = p[0] * (p[1] + 33.33) + p[1] * (p[2] + 33.33) + p[2] * (p[0] + 33.33)
  const r = p.map((val) => fract(val + dotVal))
  return r.map((_, i) => fract((r[i % 3] + r[(i + 1) % 3]) * r[(i + 2) % 3]))
}

const vertex = `#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;

float getMetaBallValue(vec2 c, float r, vec2 p) {
  vec2 d = p - c;
  float dist2 = dot(d, d);
  return (r * r) / dist2;
}

void main() {
  vec2 fc = gl_FragCoord.xy;
  float scale = iAnimationSize / iResolution.y;
  vec2 coord = (fc - iResolution.xy * 0.5) * scale;
  vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;

  float m1 = 0.0;
  for (int i = 0; i < 50; i++) {
    if (i >= iBallCount) break;
    m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
  }

  float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
  float total = m1 + m2;

  float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));

  vec3 cFinal = vec3(0.0);
  if (total > 0.0) {
    float alpha1 = m1 / total;
    float alpha2 = m2 / total;
    cFinal = iColor * alpha1 + iCursorColor * alpha2;
  }

  outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
`

let cleanUpAnimation = () => {}
let pause = null
let resume = null
let activeIColorUniform = null
let activeICursorColorUniform = null

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setupAnimation = () => {
  const container = containerRef.value
  if (!container) return

  // Cap dpr at 2 for crisp-but-cheap rendering (matches Antigravity/LiquidEther).
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const renderer = new Renderer({ dpr, alpha: true, premultipliedAlpha: false })
  const gl = renderer.gl
  gl.clearColor(0, 0, 0, props.enableTransparency ? 0 : 1)
  container.appendChild(gl.canvas)

  const camera = new Camera(gl, {
    left: -1,
    right: 1,
    top: 1,
    bottom: -1,
    near: 0.1,
    far: 10,
  })
  camera.position.z = 1

  const geometry = new Triangle(gl)
  const [r1, g1, b1] = parseHexColor(resolveColor())
  const [r2, g2, b2] = parseHexColor(resolveCursorColor())

  const metaBallsUniform = Array.from({ length: 50 }, () => new Vec3())
  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new Vec3() },
      iMouse: { value: new Vec3() },
      iColor: { value: new Vec3(r1, g1, b1) },
      iCursorColor: { value: new Vec3(r2, g2, b2) },
      iAnimationSize: { value: props.animationSize },
      iBallCount: { value: props.ballCount },
      iCursorBallSize: { value: props.cursorBallSize },
      iMetaBalls: { value: metaBallsUniform },
      iClumpFactor: { value: props.clumpFactor },
      enableTransparency: { value: props.enableTransparency },
    },
  })

  activeIColorUniform = program.uniforms.iColor
  activeICursorColorUniform = program.uniforms.iCursorColor

  const scene = new Transform()
  const mesh = new Mesh(gl, { geometry, program })
  mesh.setParent(scene)

  const effectiveBallCount = Math.min(props.ballCount, 50)
  const ballParams = Array.from({ length: effectiveBallCount }, (_, i) => {
    const h1 = hash31(i + 1)
    const h2 = hash33(h1)
    return {
      st: h1[0] * 2 * Math.PI,
      dtFactor: 0.1 * Math.PI + h1[1] * (0.3 * Math.PI),
      baseScale: 5.0 + h1[1] * 5.0,
      toggle: Math.floor(h2[0] * 2),
      radius: 0.5 + h2[2] * 1.5,
    }
  })

  const mouseBallPos = { x: 0, y: 0 }
  let pointerInside = false
  let pointerX = 0
  let pointerY = 0

  function resize() {
    if (!container) return
    const { clientWidth, clientHeight } = container
    renderer.setSize(clientWidth * dpr, clientHeight * dpr)
    gl.canvas.style.width = `${clientWidth}px`
    gl.canvas.style.height = `${clientHeight}px`
    program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, 0)
  }

  // ResizeObserver re-sizes after the hero image loads / layout settles (a
  // window resize event never fires for that).
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)
  resize()

  function handlePointerMove(e) {
    if (!props.enableMouseInteraction) return
    const rect = container.getBoundingClientRect()
    // Listen on window (not the container) so the cursor ball still works when
    // this component sits behind other content or has pointer-events: none.
    pointerInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    if (!pointerInside) return
    pointerX = ((e.clientX - rect.left) / rect.width) * gl.canvas.width
    pointerY = (1 - (e.clientY - rect.top) / rect.height) * gl.canvas.height
  }

  window.addEventListener('pointermove', handlePointerMove)

  const startTime = performance.now()
  let animationFrameId

  function update(time) {
    if (prefersReducedMotion()) {
      // Render a single static frame and stop — reduced-motion users don't get
      // the perpetual physics loop.
      renderer.render({ scene, camera })
      return
    }
    animationFrameId = requestAnimationFrame(update)
    const elapsed = (time - startTime) * 0.001
    program.uniforms.iTime.value = elapsed

    for (let i = 0; i < effectiveBallCount; i++) {
      const { st, dtFactor, baseScale, toggle, radius } = ballParams[i]
      const dt = elapsed * props.speed * dtFactor
      const angle = st + dt
      const x = Math.cos(angle)
      const y = Math.sin(angle + dt * toggle)
      metaBallsUniform[i].set(x * baseScale * props.clumpFactor, y * baseScale * props.clumpFactor, radius)
    }

    const targetX = pointerInside
      ? pointerX
      : gl.canvas.width * 0.5 + Math.cos(elapsed * props.speed) * gl.canvas.width * 0.15
    const targetY = pointerInside
      ? pointerY
      : gl.canvas.height * 0.5 + Math.sin(elapsed * props.speed) * gl.canvas.height * 0.15

    mouseBallPos.x += (targetX - mouseBallPos.x) * props.hoverSmoothness
    mouseBallPos.y += (targetY - mouseBallPos.y) * props.hoverSmoothness
    program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0)

    renderer.render({ scene, camera })
  }

  animationFrameId = requestAnimationFrame(update)

  cleanUpAnimation = () => {
    cancelAnimationFrame(animationFrameId)
    resizeObserver.disconnect()
    window.removeEventListener('pointermove', handlePointerMove)
    if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    activeIColorUniform = null
    activeICursorColorUniform = null
  }

  pause = () => {
    cancelAnimationFrame(animationFrameId)
    if (gl.canvas) gl.canvas.style.display = 'none'
  }

  resume = () => {
    if (gl.canvas) gl.canvas.style.display = ''
    animationFrameId = requestAnimationFrame(update)
  }
}

onMounted(() => {
  if (effectsEnabled.value) setupAnimation()
})
onUnmounted(() => cleanUpAnimation?.())

// Start/stop the WebGL loop when the global effects switch flips.
watch(effectsEnabled, (v) => {
  if (v) {
    if (resume) resume()
    else setupAnimation()
  } else {
    pause?.()
  }
})

// Re-tint the balls when the theme highlight colour changes (only when no
// explicit colour prop was passed).
watch(highlight, () => {
  if (!props.color && activeIColorUniform) {
    const [r, g, b] = parseHexColor(resolveColor())
    activeIColorUniform.value = new Vec3(r, g, b)
  }
  if (!props.cursorBallColor && activeICursorColorUniform) {
    const [r, g, b] = parseHexColor(resolveCursorColor())
    activeICursorColorUniform.value = new Vec3(r, g, b)
  }
})

watch(
  () => props,
  () => {
    if (!effectsEnabled.value) return
    cleanUpAnimation()
    setupAnimation()
  },
  { deep: true }
)
</script>

<style scoped>
.meta-balls {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

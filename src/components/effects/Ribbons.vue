<template>
  <div ref="containerRef" class="ribbons" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl'
import { useThemeVar } from '../../composables/useThemeVar.js'
import { useEffectsEnabled } from '../../composables/useEffectsEnabled.js'

const props = defineProps({
  colors: { type: Array, default: null },
  baseSpring: { type: Number, default: 0.03 },
  baseFriction: { type: Number, default: 0.9 },
  baseThickness: { type: Number, default: 30 },
  offsetFactor: { type: Number, default: 0.05 },
  maxAge: { type: Number, default: 500 },
  pointCount: { type: Number, default: 50 },
  speedMultiplier: { type: Number, default: 0.6 },
  enableFade: { type: Boolean, default: false },
  enableShaderEffect: { type: Boolean, default: false },
  effectAmplitude: { type: Number, default: 2 },
  backgroundColor: { type: Array, default: () => [0, 0, 0, 0] },
})

const containerRef = ref(null)
const { enabled: effectsEnabled } = useEffectsEnabled()

// Themed palette — falls back to the site highlight colour so the ribbon
// matches the portfolio. A single colour = a single ribbon.
const highlight = useThemeVar('--highlight', '#bcff67')
const resolveColors = () => {
  if (props.colors && props.colors.length) return props.colors
  return [highlight.value || '#bcff67']
}

let cleanup = null
let pause = null
let resume = null
let activeColorUniforms = []

const init = () => {
  const container = containerRef.value
  if (!container) return

  const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio || 2, 2), alpha: true, antialias: true })
  const gl = renderer.gl
  if (Array.isArray(props.backgroundColor) && props.backgroundColor.length === 4) {
    gl.clearColor(
      props.backgroundColor[0],
      props.backgroundColor[1],
      props.backgroundColor[2],
      props.backgroundColor[3]
    )
  } else {
    gl.clearColor(0, 0, 0, 0)
  }

  gl.canvas.style.position = 'absolute'
  gl.canvas.style.top = '0'
  gl.canvas.style.left = '0'
  gl.canvas.style.width = '100%'
  gl.canvas.style.height = '100%'
  container.appendChild(gl.canvas)

  const scene = new Transform()
  const lines = []
  activeColorUniforms = []

  const vertex = `
      precision highp float;

      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;

      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;

      varying vec2 vUV;

      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }

      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `

  const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `

  function resize() {
    if (!container) return
    const width = container.clientWidth
    const height = container.clientHeight
    renderer.setSize(width, height)
    lines.forEach((line) => line.polyline.resize())
  }

  window.addEventListener('resize', resize)

  // The page <transition> briefly puts a transform on <main>, making it the
  // containing block for this fixed full-page layer — a window resize event
  // never fires for that. Watch the container directly and re-size once the
  // transform is gone and the layer settles back to viewport size.
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)

  const colors = resolveColors()
  const center = (colors.length - 1) / 2
  colors.forEach((color, index) => {
    const spring = props.baseSpring + (Math.random() - 0.5) * 0.05
    const friction = props.baseFriction + (Math.random() - 0.5) * 0.05
    const thickness = props.baseThickness + (Math.random() - 0.5) * 3
    const mouseOffset = new Vec3(
      (index - center) * props.offsetFactor + (Math.random() - 0.5) * 0.005,
      (Math.random() - 0.5) * 0.02,
      0
    )

    const line = {
      spring,
      friction,
      mouseVelocity: new Vec3(),
      mouseOffset,
      points: [],
      polyline: null,
    }

    const count = props.pointCount
    const points = []
    for (let i = 0; i < count; i++) {
      points.push(new Vec3())
    }
    line.points = points

    line.polyline = new Polyline(gl, {
      points,
      vertex,
      fragment,
      uniforms: {
        uColor: { value: new Color(color) },
        uThickness: { value: thickness },
        uOpacity: { value: 1.0 },
        uTime: { value: 0.0 },
        uEnableShaderEffect: { value: props.enableShaderEffect ? 1.0 : 0.0 },
        uEffectAmplitude: { value: props.effectAmplitude },
        uEnableFade: { value: props.enableFade ? 1.0 : 0.0 },
      },
    })
    line.polyline.mesh.setParent(scene)
    lines.push(line)
    activeColorUniforms.push(line.polyline.mesh.program.uniforms.uColor)
  })

  resize()

  const mouse = new Vec3()
  function updateMouse(e) {
    if (!container) return
    // The layer is a fixed full-viewport background, so its top-left is the
    // viewport origin — read client coords directly instead of forcing a
    // getBoundingClientRect() reflow on every mousemove.
    let x
    let y
    if ('changedTouches' in e && e.changedTouches.length) {
      x = e.changedTouches[0].clientX
      y = e.changedTouches[0].clientY
    } else if (e instanceof MouseEvent) {
      x = e.clientX
      y = e.clientY
    } else {
      x = 0
      y = 0
    }
    const width = container.clientWidth
    const height = container.clientHeight
    mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0)
  }
  // Listen on window (not the container) so the ribbons still track the cursor
  // when used as a pointer-events:none background layer.
  window.addEventListener('mousemove', updateMouse)
  window.addEventListener('touchstart', updateMouse)
  window.addEventListener('touchmove', updateMouse)

  const tmp = new Vec3()
  let frameId
  let lastTime = performance.now()

  function update() {
    frameId = requestAnimationFrame(update)
    const currentTime = performance.now()
    const dt = currentTime - lastTime
    lastTime = currentTime

    lines.forEach((line) => {
      tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring)
      line.mouseVelocity.add(tmp).multiply(line.friction)
      line.points[0].add(line.mouseVelocity)

      for (let i = 1; i < line.points.length; i++) {
        if (isFinite(props.maxAge) && props.maxAge > 0) {
          const segmentDelay = props.maxAge / (line.points.length - 1)
          const alpha = Math.min(1, (dt * props.speedMultiplier) / segmentDelay)
          line.points[i].lerp(line.points[i - 1], alpha)
        } else {
          line.points[i].lerp(line.points[i - 1], 0.9)
        }
      }
      if (line.polyline.mesh.program.uniforms.uTime) {
        line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001
      }
      line.polyline.updateGeometry()
    })

    renderer.render({ scene })
  }
  update()

  cleanup = () => {
    resizeObserver.disconnect()
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', updateMouse)
    window.removeEventListener('touchstart', updateMouse)
    window.removeEventListener('touchmove', updateMouse)
    cancelAnimationFrame(frameId)
    if (gl.canvas && gl.canvas.parentNode === container) {
      container.removeChild(gl.canvas)
    }
    // ogl's Renderer has no dispose(); dropping the context releases the GPU
    // resources the same way three.js' renderer.dispose() does.
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    activeColorUniforms = []
  }

  pause = () => {
    cancelAnimationFrame(frameId)
    if (gl.canvas) gl.canvas.style.display = 'none'
  }

  resume = () => {
    if (gl.canvas) gl.canvas.style.display = ''
    lastTime = performance.now()
    update()
  }
}

onMounted(() => {
  if (effectsEnabled.value) init()
})

onUnmounted(() => cleanup?.())

// Start/stop the WebGL loop when the global effects switch flips.
watch(effectsEnabled, (v) => {
  if (v) {
    if (resume) resume()
    else init()
  } else {
    pause?.()
  }
})

// Re-tint the ribbons when the theme highlight colour changes (only when no
// explicit `colors` prop was passed).
watch(highlight, () => {
  if (props.colors && props.colors.length) return
  const colors = resolveColors()
  activeColorUniforms.forEach((uniform, i) => {
    const color = colors[i % colors.length]
    if (uniform && uniform.value) uniform.value = new Color(color)
  })
})

watch(
  () => [
    props.colors,
    props.baseSpring,
    props.baseFriction,
    props.baseThickness,
    props.offsetFactor,
    props.maxAge,
    props.pointCount,
    props.speedMultiplier,
    props.enableFade,
    props.enableShaderEffect,
    props.effectAmplitude,
    props.backgroundColor,
  ],
  () => {
    if (!effectsEnabled.value) return
    cleanup?.()
    init()
  },
  { deep: true }
)
</script>

<style scoped>
.ribbons {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

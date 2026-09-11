<template>
  <div ref="root" class="dot-field" :class="className">
    <canvas ref="canvas" class="dot-field__canvas" />
    <svg v-if="showGlow" class="dot-field__svg" aria-hidden="true">
      <defs>
        <radialGradient :id="glowId">
          <stop offset="0%" :stop-color="resolvedGlow" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <circle
        ref="glowEl"
        cx="-9999"
        cy="-9999"
        :r="glowRadius"
        :fill="`url(#${glowId})`"
        style="opacity: 0; will-change: opacity"
      />
    </svg>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch, nextTick } from 'vue'
import { useThemeVar } from '../../composables/useThemeVar.js'
import { useEffectsEnabled } from '../../composables/useEffectsEnabled.js'

const TWO_PI = Math.PI * 2

const props = defineProps({
  dotRadius: { type: Number, default: 1.5 },
  dotSpacing: { type: Number, default: 14 },
  cursorRadius: { type: Number, default: 500 },
  cursorForce: { type: Number, default: 0.1 },
  bulgeOnly: { type: Boolean, default: true },
  bulgeStrength: { type: Number, default: 67 },
  glowRadius: { type: Number, default: 160 },
  sparkle: { type: Boolean, default: false },
  waveAmplitude: { type: Number, default: 0 },
  gradientFrom: { type: String, default: '' },
  gradientTo: { type: String, default: '' },
  glowColor: { type: String, default: '' },
  showGlow: { type: Boolean, default: true },
  className: { type: String, default: '' },
})

const root = ref(null)
const canvas = ref(null)
const glowEl = ref(null)
const { enabled: effectsEnabled } = useEffectsEnabled()

const highlightRgb = useThemeVar('--highlight-rgb', '188, 255, 103')
const bg900 = useThemeVar('--bg-900', '#0b0b0d')
const resolvedGlow = ref('#0b0b0d')

const glowId = `dot-field-glow-${Math.random().toString(36).slice(2, 9)}`

let dots = []

const mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 }

let size = { w: 0, h: 0, offsetX: 0, offsetY: 0 }

let glowOpacity = 0
let engagement = 0

let raf = 0
let resizeTimer = null
let speedInterval = null
let frameCount = 0
let ctx = null
let resizeObserver = null
let reducedMotion = false
let gradFrom = 'rgba(188, 255, 103, 0.32)'
let gradTo = 'rgba(188, 255, 103, 0.08)'

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function buildDots(w, h) {
  const step = props.dotRadius + props.dotSpacing
  const cols = Math.floor(w / step)
  const rows = Math.floor(h / step)
  const padX = (w % step) / 2
  const padY = (h % step) / 2
  const nextDots = new Array(rows * cols)

  let idx = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const ax = padX + col * step + step / 2
      const ay = padY + row * step + step / 2
      nextDots[idx++] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay }
    }
  }
  dots = nextDots
}

function updateMouseSpeed() {
  const dx = mouse.prevX - mouse.x
  const dy = mouse.prevY - mouse.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  mouse.speed += (dist - mouse.speed) * 0.5
  if (mouse.speed < 0.001) mouse.speed = 0
  mouse.prevX = mouse.x
  mouse.prevY = mouse.y
}

function onMouseMove(e) {
  mouse.x = e.pageX - size.offsetX
  mouse.y = e.pageY - size.offsetY
}

function doResize() {
  if (!root.value || !canvas.value || !ctx) return
  const rect = root.value.getBoundingClientRect()
  const w = rect.width
  const h = rect.height
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  canvas.value.width = w * dpr
  canvas.value.height = h * dpr
  canvas.value.style.width = `${w}px`
  canvas.value.style.height = `${h}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  size = { w, h, offsetX: rect.left + window.scrollX, offsetY: rect.top + window.scrollY }
  buildDots(w, h)
}

function resize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(doResize, 100)
}

function tick() {
  if (!ctx) return
  frameCount++
  const { w, h } = size
  const t = frameCount * 0.02

  const targetEngagement = Math.min(mouse.speed / 5, 1)
  engagement += (targetEngagement - engagement) * 0.06
  if (engagement < 0.001) engagement = 0

  glowOpacity += (engagement - glowOpacity) * 0.08

  if (glowEl.value) {
    glowEl.value.setAttribute('cx', String(mouse.x))
    glowEl.value.setAttribute('cy', String(mouse.y))
    glowEl.value.style.opacity = String(glowOpacity)
  }

  ctx.clearRect(0, 0, w, h)

  const grad = ctx.createLinearGradient(0, 0, w, h)
  grad.addColorStop(0, gradFrom)
  grad.addColorStop(1, gradTo)
  ctx.fillStyle = grad

  const crSq = props.cursorRadius * props.cursorRadius
  const rad = props.dotRadius / 2

  ctx.beginPath()

  for (let i = 0; i < dots.length; i++) {
    const d = dots[i]
    const dx = mouse.x - d.ax
    const dy = mouse.y - d.ay
    const distSq = dx * dx + dy * dy

    if (distSq < crSq && engagement > 0.01) {
      const dist = Math.sqrt(distSq)
      const angle = Math.atan2(dy, dx)

      if (props.bulgeOnly) {
        const falloff = 1 - dist / props.cursorRadius
        const push = falloff * falloff * props.bulgeStrength * engagement
        d.sx += (d.ax - Math.cos(angle) * push - d.sx) * 0.15
        d.sy += (d.ay - Math.sin(angle) * push - d.sy) * 0.15
      } else {
        const safeDist = Math.max(dist, 0.001)
        const move = (500 / safeDist) * (mouse.speed * props.cursorForce)
        d.vx += Math.cos(angle) * -move
        d.vy += Math.sin(angle) * -move
      }
    } else if (props.bulgeOnly) {
      d.sx += (d.ax - d.sx) * 0.1
      d.sy += (d.ay - d.sy) * 0.1
    }

    if (!props.bulgeOnly) {
      d.vx *= 0.9
      d.vy *= 0.9
      d.x = d.ax + d.vx
      d.y = d.ay + d.vy
      d.sx += (d.x - d.sx) * 0.1
      d.sy += (d.y - d.sy) * 0.1
    }

    let drawX = d.sx
    let drawY = d.sy

    if (props.waveAmplitude > 0) {
      drawY += Math.sin(d.ax * 0.03 + t) * props.waveAmplitude
      drawX += Math.cos(d.ay * 0.03 + t * 0.7) * props.waveAmplitude * 0.5
    }

    if (props.sparkle) {
      const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0
      if (hash % 100 < 3) {
        ctx.moveTo(drawX + rad * 1.8, drawY)
        ctx.arc(drawX, drawY, rad * 1.8, 0, TWO_PI)
      } else {
        ctx.moveTo(drawX + rad, drawY)
        ctx.arc(drawX, drawY, rad, 0, TWO_PI)
      }
    } else {
      ctx.moveTo(drawX + rad, drawY)
      ctx.arc(drawX, drawY, rad, 0, TWO_PI)
    }
  }

  ctx.fill()
  raf = requestAnimationFrame(tick)
}

function setupCanvas() {
  if (!root.value || !canvas.value) return
  ctx = canvas.value.getContext('2d', { alpha: true })
  if (!ctx) return

  doResize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(root.value)
  speedInterval = setInterval(updateMouseSpeed, 20)

  reducedMotion = prefersReducedMotion()
  if (reducedMotion) {
    // Draw a single static frame — no continuous animation.
    tick()
    cancelAnimationFrame(raf)
    return
  }
  raf = requestAnimationFrame(tick)
}

function cleanup() {
  cancelAnimationFrame(raf)
  clearInterval(speedInterval)
  clearTimeout(resizeTimer)
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
}

const updateColors = () => {
  // Green on a near-white background washes out much faster than lime on near-
  // black, so the dot grid needs more alpha in light mode to stay visible.
  const isLight = document.documentElement.getAttribute('data-theme') === 'light'
  const fromAlpha = isLight ? 0.8 : 0.7
  const toAlpha = isLight ? 0.3 : 0.22
  gradFrom = props.gradientFrom || `rgba(${highlightRgb.value}, ${fromAlpha})`
  gradTo = props.gradientTo || `rgba(${highlightRgb.value}, ${toAlpha})`
  resolvedGlow.value = props.glowColor || bg900.value
  // Reduced-motion mode draws a single static frame; re-draw it so a theme
  // change is reflected without needing the continuous RAF loop.
  if (reducedMotion && ctx) {
    tick()
    cancelAnimationFrame(raf)
  }
}

watch(
  [highlightRgb, bg900, () => props.gradientFrom, () => props.gradientTo, () => props.glowColor],
  updateColors,
  { immediate: true }
)

watch(
  () => [props.dotRadius, props.dotSpacing],
  async () => {
    await nextTick()
    if (size.w > 0 && size.h > 0) buildDots(size.w, size.h)
  }
)

onMounted(() => {
  if (effectsEnabled.value) setupCanvas()
})
onBeforeUnmount(cleanup)

// Start/stop the canvas loop when the global effects switch flips.
watch(effectsEnabled, (v) => {
  if (v) setupCanvas()
  else cleanup()
})
</script>

<style scoped>
.dot-field {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.dot-field__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.dot-field__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>

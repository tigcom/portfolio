<template>
  <div
    ref="containerRef"
    class="magnet-lines"
    :style="{
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      width: containerSize,
      height: containerSize,
    }"
  >
    <span
      v-for="i in total"
      :key="i"
      class="magnet-lines__line"
      :style="{
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        '--rotate': `${baseAngle}deg`,
        transform: 'rotate(var(--rotate))',
      }"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, computed, ref } from 'vue'

const props = defineProps({
  rows: { type: Number, default: 9 },
  columns: { type: Number, default: 9 },
  containerSize: { type: String, default: '80vmin' },
  lineColor: { type: String, default: 'rgba(var(--highlight-rgb), 0.26)' },
  lineWidth: { type: String, default: '1px' },
  lineHeight: { type: String, default: '24px' },
  baseAngle: { type: Number, default: -10 },
  className: { type: String, default: '' },
})

const containerRef = ref(null)
let lineItems = []
let pointerPosition = null
let frameId = null

const total = computed(() => props.rows * props.columns)

const measureLines = () => {
  const container = containerRef.value
  if (!container) return

  lineItems = [...container.querySelectorAll('.magnet-lines__line')].map((item) => {
    const rect = item.getBoundingClientRect()
    return {
      item,
      centerX: rect.x + rect.width / 2,
      centerY: rect.y + rect.height / 2,
    }
  })
}

const scheduleRotation = () => {
  if (frameId !== null) return

  frameId = requestAnimationFrame(() => {
    frameId = null
    if (!pointerPosition) return

    lineItems.forEach(({ item, centerX, centerY }) => {
      const angle = Math.atan2(pointerPosition.y - centerY, pointerPosition.x - centerX) * (180 / Math.PI) + 90
      item.style.setProperty('--rotate', `${angle}deg`)
    })
  })
}

const handlePointerMove = (e) => {
  pointerPosition = { x: e.clientX, y: e.clientY }
  scheduleRotation()
}

const handleResize = () => {
  measureLines()
  scheduleRotation()
}

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  measureLines()
  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('resize', handleResize)
})

onUpdated(() => {
  measureLines()
  scheduleRotation()
})

onUnmounted(() => {
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('resize', handleResize)
  if (frameId !== null) cancelAnimationFrame(frameId)
  frameId = null
  lineItems = []
})
</script>

<style scoped>
.magnet-lines {
  display: grid;
  place-items: center;
  pointer-events: none;
}

.magnet-lines__line {
  display: block;
  transform-origin: center;
  will-change: transform;
}
</style>

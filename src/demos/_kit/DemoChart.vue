<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'bars' }, // 'bars' | 'line' | 'ring'
  data: { type: Array, default: () => [] }, // numbers, or single [value] for ring
  labels: { type: Array, default: () => [] },
  height: { type: Number, default: 140 },
})

const max = computed(() => Math.max(...props.data.map(Number), 1))

const barPoints = computed(() => {
  const n = props.data.length || 1
  const gap = 6
  const w = 100 / n
  return props.data.map((v, i) => {
    const h = (Number(v) / max.value) * 100
    return { x: i * w + gap / 2, y: 100 - h, w: w - gap, h }
  })
})

const linePoints = computed(() => {
  const n = props.data.length || 1
  const step = 100 / (n - 1 || 1)
  return props.data
    .map((v, i) => `${i * step},${100 - (Number(v) / max.value) * 100}`)
    .join(' ')
})

const ringDash = computed(() => {
  const v = Math.max(0, Math.min(100, Number(props.data[0] ?? 0)))
  const C = 2 * Math.PI * 40
  return `${(v / 100) * C} ${C}`
})
</script>

<template>
  <div class="demo-chart" :style="{ height: height + 'px' }">
    <svg v-if="type === 'bars'" class="demo-chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect
        v-for="(b, i) in barPoints"
        :key="i"
        :x="b.x" :y="b.y" :width="b.w" :height="b.h"
        rx="1.5"
        fill="var(--demo-accent)"
        :opacity="0.6 + (i / barPoints.length) * 0.4"
      />
    </svg>

    <svg v-else-if="type === 'line'" class="demo-chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline :points="linePoints" fill="none" stroke="var(--demo-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <polygon :points="`0,100 ${linePoints} 100,100`" fill="var(--demo-accent)" opacity="0.12" />
    </svg>

    <svg v-else-if="type === 'ring'" class="demo-chart-ring" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="10" />
      <circle
        cx="50" cy="50" r="40" fill="none" stroke="var(--demo-accent)" stroke-width="10"
        stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="0"
        :style="{ strokeDasharray: ringDash, transform: 'rotate(-90deg)', transformOrigin: 'center' }"
      />
      <text x="50" y="55" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">
        {{ data[0] ?? 0 }}%
      </text>
    </svg>

    <div v-if="labels.length" class="demo-chart-labels">
      <span v-for="(l, i) in labels" :key="i">{{ l }}</span>
    </div>
  </div>
</template>

<style scoped>
.demo-chart { width: 100%; }
.demo-chart-svg { width: 100%; height: 100%; }
.demo-chart-ring { width: 100%; height: 100%; max-width: 160px; }
.demo-chart-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 0.68rem;
  color: rgba(226,232,240,0.5);
}
</style>

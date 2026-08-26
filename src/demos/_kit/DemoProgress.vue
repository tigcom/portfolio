<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  value: { type: Number, default: 0 }, // 0..100
  color: { type: String, default: '' },
})

const pct = computed(() => Math.max(0, Math.min(100, props.value)))
</script>

<template>
  <div class="demo-progress">
    <div class="demo-progress-head">
      <span class="demo-progress-label">{{ label }}</span>
      <span class="demo-progress-value">{{ pct }}%</span>
    </div>
    <div class="demo-progress-track">
      <div
        class="demo-progress-fill"
        :style="{ width: pct + '%', background: color || 'var(--demo-accent)' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.demo-progress { width: 100%; }
.demo-progress-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 0.78rem;
}
.demo-progress-label { color: rgba(226,232,240,0.7); }
.demo-progress-value { color: #fff; font-weight: 600; }

.demo-progress-track {
  height: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  overflow: hidden;
}
.demo-progress-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s ease;
}
</style>

<script setup>
defineProps({
  label: { type: String, default: 'Stat' },
  value: { type: [String, Number], default: '—' },
  delta: { type: String, default: '' },
  trend: { type: String, default: 'up' }, // 'up' | 'down'
  icon: { type: String, default: '' },
})
</script>

<template>
  <div class="demo-stat">
    <div class="demo-stat-head">
      <span class="demo-stat-label">{{ label }}</span>
      <span v-if="icon" class="demo-stat-icon">{{ icon }}</span>
    </div>
    <div class="demo-stat-value">{{ value }}</div>
    <div v-if="delta" class="demo-stat-delta" :class="trend === 'up' ? 'up' : 'down'">
      {{ trend === 'up' ? '▲' : '▼' }} {{ delta }}
    </div>
  </div>
</template>

<style scoped>
.demo-stat {
  padding: 16px 18px;
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
}

.demo-stat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.demo-stat-label {
  font-size: 0.78rem;
  color: rgba(226,232,240,0.6);
  letter-spacing: 0.02em;
}
.demo-stat-icon { font-size: 1rem; }

.demo-stat-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
}

.demo-stat-delta {
  margin-top: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.demo-stat-delta.up { color: #34d399; }
.demo-stat-delta.down { color: #f87171; }
</style>

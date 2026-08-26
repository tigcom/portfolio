<script setup>
import { ref } from 'vue'

defineProps({
  accentColor: { type: String, default: '#6366f1' },
  colorBackground: { type: String, default: 'linear-gradient(135deg, #0f172a, #1e293b)' },
  url: { type: String, default: 'demo.app' },
})

const device = ref('desktop')
const devices = [
  { id: 'desktop', icon: '🖥', label: 'Desktop' },
  { id: 'tablet', icon: '📱', label: 'Tablet' },
  { id: 'mobile', icon: '📲', label: 'Mobile' },
]
</script>

<template>
  <div class="demo-shell" :style="{ '--demo-accent': accentColor, '--demo-bg': colorBackground }">
    <div class="demo-toolbar">
      <div class="demo-browser-dots">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
      </div>
      <div class="demo-browser-url">{{ url }}</div>
      <div class="demo-devices">
        <button
          v-for="d in devices"
          :key="d.id"
          class="demo-device-btn"
          :class="{ active: device === d.id }"
          :title="d.label"
          @click="device = d.id"
        >{{ d.icon }}</button>
      </div>
    </div>

    <div class="demo-frame" :class="`is-${device}`">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.demo-shell {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: #0b0f1a;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 40px 80px rgba(0,0,0,0.55);
}

.demo-toolbar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: #080b12;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.demo-browser-dots { display: flex; gap: 6px; }
.demo-browser-dots .dot { width: 11px; height: 11px; border-radius: 50%; }
.dot-red { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green { background: #28c840; }

.demo-browser-url {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.45);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 999px;
  padding: 5px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.demo-devices { display: flex; gap: 6px; }
.demo-device-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.08);
  background: transparent;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.demo-device-btn:hover { background: rgba(255,255,255,0.06); }
.demo-device-btn.active {
  background: var(--demo-accent);
  border-color: transparent;
}

.demo-frame {
  background: var(--demo-bg);
  min-height: 560px;
  margin: 0 auto;
  transition: max-width 0.35s ease;
  position: relative;
}
.demo-frame.is-desktop { max-width: 100%; }
.demo-frame.is-tablet { max-width: 768px; }
.demo-frame.is-mobile { max-width: 400px; }
</style>

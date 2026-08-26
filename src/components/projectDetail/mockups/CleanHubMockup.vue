<template>
  <div class="cleanhub-mockup">
    <!-- Main browser frame (dashboard) -->
    <div class="main-frame">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="browser-tab">
          <i class="fas fa-broom"></i>
          <span>Clean Hub — Quản lý vệ sinh công nghiệp</span>
        </div>
      </div>
      <div class="main-screen">
        <img :src="main" :alt="title" loading="lazy">
      </div>
    </div>

    <!-- Feature screens grid -->
    <div class="features-grid">
      <div v-for="(f, i) in features" :key="i" class="feature-frame">
        <div class="feature-bar">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <img :src="f" :alt="`Feature ${i + 1}`" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})

const main = computed(() => props.images[0])
const features = computed(() => props.images.slice(1, 7))
</script>

<style scoped>
.cleanhub-mockup {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
}

/* ── Main frame ─────────────────────────────────────────── */
.main-frame {
  background: #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
}

.browser-bar {
  background: #252525;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.browser-dots,
.feature-bar {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.browser-tab {
  background: #1a1a1a;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  gap: 8px;
}

.browser-tab i {
  color: #a7f3d0;
}

.main-screen img {
  width: 100%;
  display: block;
}

/* ── Features grid ──────────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 32px;
}

.feature-frame {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s ease, border-color 0.35s ease;
}

.feature-frame:hover {
  transform: translateY(-8px);
  border-color: rgba(167, 243, 208, 0.4);
}

.feature-bar {
  background: #222;
  padding: 8px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.feature-bar .dot {
  width: 8px;
  height: 8px;
}

.feature-frame img {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
}

@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

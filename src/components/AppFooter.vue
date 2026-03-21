<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-cta" ref="ctaEl">
        <!-- LightPillar background effect -->
        <LightPillar :topColor="pillarTopColor" :bottomColor="pillarBottomColor" :intensity="pillarIntensity"
          :rotationSpeed="0.8" :glowAmount="0.002" :pillarWidth="3.3" :pillarHeight="0.4" :noiseIntensity="0"
          :pillarRotation="25" :interactive="true" :resolutionScale="100" :targetFPS="60" mixBlendMode="screen" />

        <!-- Content overlay (must be above the canvas) -->
        <div class="footer-cta-content">
          <div class="availability-badge">
            <span class="availability-dot"></span>
            {{ t('contact.letsWork') }} {{ t('contact.together') }}
          </div>
          <h2>{{ t('contact.letsWork') }}<br>{{ t('contact.together') }}.</h2>
          <router-link to="/contact" class="btn btn-outline">{{ t('nav.contact') }}</router-link>
          <div class="social-links" style="justify-content:center; margin-top:32px;">
            <a href="https://github.com/tigcom" class="social-link" aria-label="GitHub" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/phuc-khang-5744b62a4/" class="social-link" aria-label="LinkedIn"
              target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">© 2026 Phuc Khang. All rights reserved.</p>
        <nav class="footer-nav">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <router-link to="/about">{{ t('nav.about') }}</router-link>
          <router-link to="/projects">{{ t('nav.projects') }}</router-link>
          <router-link to="/contact">{{ t('nav.contact') }}</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../data/translations.js'
import LightPillar from '../LightPillar.vue'
const { t } = useLang()
gsap.registerPlugin(ScrollTrigger)

const ctaEl = ref(null)

// === Theme-aware colors for LightPillar ===
const currentTheme = ref(document.documentElement.getAttribute('data-theme') || 'dark')

// Watch for theme changes via MutationObserver
let themeObserver = null
onMounted(() => {
  gsap.from(ctaEl.value, {
    scrollTrigger: { trigger: ctaEl.value, start: 'top 88%' },
    y: 50, opacity: 0, duration: 0.9, ease: 'power3.out'
  })

  // Observe theme changes on <html> element
  themeObserver = new MutationObserver(() => {
    currentTheme.value = document.documentElement.getAttribute('data-theme') || 'dark'
  })
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })
})

onUnmounted(() => {
  themeObserver?.disconnect()
})

// Dark: green glow on dark bg (#121116)
// Light: gray glow (#c1c3cb) on dark bg (#121116), text black
const pillarTopColor = computed(() =>
  currentTheme.value === 'light' ? '#c1c3cb' : '#48FF28'
)
const pillarBottomColor = computed(() =>
  currentTheme.value === 'light' ? '#c1c3cb' : '#9EF19E'
)
const pillarIntensity = computed(() =>
  currentTheme.value === 'light' ? 0.8 : 0.7
)
</script>

<style scoped>
#footer {
  border-top: 1px solid var(--border);
  padding-top: 80px;
  position: relative;
  z-index: 1;
}

.footer-cta {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 32px;
  margin-bottom: 40px;
  background: #121116;
  position: relative;
  overflow: hidden;
}

/* Content wrapper sits above the WebGL canvas */
.footer-cta-content {
  position: relative;
  z-index: 2;
  padding: 80px 40px;
}

.footer-cta h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 32px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
}

.footer-copyright {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.footer-nav {
  display: flex;
  gap: 20px;
}

.footer-nav a {
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: var(--text-primary);
}

</style>

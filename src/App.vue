<template>
  <div class="app-wrapper">
    <!-- Cursor glow - color adapts to theme -->
    <div class="cursor-glow" ref="cursorGlow"></div>

    <!-- Page Loader -->
    <PageLoader v-if="showLoader" @loaded="onLoaded" />

    <!-- Navbar -->
    <AppNavbar v-if="!showLoader" />

    <!-- Route content with page transition -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <AppFooter v-if="!showLoader" />

    <!-- Scroll to top -->
    <button
      class="scroll-top-btn"
      :class="{ visible: showScrollTop }"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageLoader from './components/PageLoader.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

gsap.registerPlugin(ScrollTrigger)

const showLoader = ref(true)
const showScrollTop = ref(false)
const cursorGlow = ref(null)

// ====== Theme bootstrap (before first render) ======
// Reads saved theme so there's no flash of wrong theme
;(function applyInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme') || 'dark'
  document.documentElement.setAttribute('data-theme', saved)
})()

function onLoaded() {
  showLoader.value = false
}

function scrollToTop() {
  gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power3.inOut' })
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 400
}

// ====== Cursor glow — smooth lag follow ======
let mouseX = 0, mouseY = 0, cx = 0, cy = 0
let rafId = null

function trackMouse(e) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function animateCursor() {
  if (cursorGlow.value) {
    cx += (mouseX - cx) * 0.07
    cy += (mouseY - cy) * 0.07
    cursorGlow.value.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`
  }
  rafId = requestAnimationFrame(animateCursor)
}

// ====== GSAP ScrollTrigger refresh on route change ======
import { useRouter } from 'vue-router'
const router = useRouter()
router.afterEach(() => {
  setTimeout(() => ScrollTrigger.refresh(), 120)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('mousemove', trackMouse, { passive: true })
  animateCursor()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('mousemove', trackMouse)
  cancelAnimationFrame(rafId)
})
</script>

<style>
/* ====== THEME-AWARE CURSOR GLOW ====== */
[data-theme="dark"] .cursor-glow {
  background: radial-gradient(circle, rgba(181, 255, 109, 0.06) 0%, transparent 60%);
}
[data-theme="light"] .cursor-glow {
  background: radial-gradient(circle, rgba(74, 124, 47, 0.07) 0%, transparent 60%);
}

/* ====== THEME-AWARE SCROLLBAR ====== */
[data-theme="light"] ::-webkit-scrollbar-track { background: #f8f8f6; }
[data-theme="light"] ::-webkit-scrollbar-thumb { background: #c8c8c0; }
[data-theme="light"] ::-webkit-scrollbar-thumb:hover { background: #4a7c2f; }

/* ====== PAGE TRANSITION ====== */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease !important;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ====== THEME RIPPLE OVERLAY ====== */
.theme-ripple {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: scale(0);
  will-change: transform, opacity;
}

/* ====== LIGHT THEME — COMPONENT OVERRIDES ====== */
[data-theme="light"] .footer-cta {
  background: var(--bg-800);
  box-shadow: var(--shadow-sm);
}

[data-theme="light"] .hero-stat-card {
  box-shadow: var(--shadow-md);
}

[data-theme="light"] .expertise-card:hover,
[data-theme="light"] .pd-result-card:hover {
  box-shadow: var(--shadow-sm);
}

[data-theme="light"] .testi-card {
  box-shadow: var(--shadow-sm);
}

[data-theme="light"] .process-card {
  box-shadow: var(--shadow-sm);
}

[data-theme="light"] .contact-info-card {
  box-shadow: var(--shadow-sm);
}

/* Light mode: hero highlight stays green (darker for accessibility) */
[data-theme="light"] .hero-highlight {
  color: var(--highlight);
}

/* Light theme scrollbar */
[data-theme="light"] body {
  background-color: var(--bg-900);
}

/* Fix shimmer for light mode */
[data-theme="light"] .shimmer {
  background: linear-gradient(90deg, var(--text-secondary) 0%, var(--text-primary) 50%, var(--text-secondary) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

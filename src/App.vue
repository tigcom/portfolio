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

    <AppFooter v-if="!showLoader" />

    <!-- Scroll to top -->
    <button class="scroll-top-btn" :class="{ visible: showScrollTop }" @click="scrollToTop" aria-label="Scroll to top">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor"
        stroke-width="2.5" viewBox="0 0 24 24">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import PageLoader from './components/PageLoader.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

gsap.registerPlugin(ScrollTrigger)

const showLoader = ref(true)
const showScrollTop = ref(false)
const cursorGlow = ref(null)

  // ====== Theme bootstrap (before first render) ======
  ; (function applyInitialTheme() {
    const saved = localStorage.getItem('portfolio-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', saved)
  })()

// ====== Lenis instance (module-level so router can reach it) ======
let lenis = null

function onLoaded() {
  showLoader.value = false
}

function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
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

function handleLenisScroll({ scroll }) {
  showScrollTop.value = scroll > 400
}

// ====== GSAP ScrollTrigger refresh + scroll-to-top on route change ======
import { useRouter } from 'vue-router'
const router = useRouter()
router.afterEach(() => {
  lenis?.scrollTo(0, { immediate: true })
  setTimeout(() => ScrollTrigger.refresh(), 150)
})

onMounted(() => {
  // ── Lenis smooth scroll ────────────────────────────────────────────────
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8,
    infinite: false,
  })

  // Sync Lenis with GSAP's ticker so ScrollTrigger plays nice
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Let ScrollTrigger know where we are on each scroll event
  lenis.on('scroll', ScrollTrigger.update)
  lenis.on('scroll', handleLenisScroll)

  // ── Cursor glow ────────────────────────────────────────────────────────
  document.addEventListener('mousemove', trackMouse, { passive: true })
  animateCursor()

  // ── Frame Shadow Animation ──────────────────────────────────────────────
  // Tạo 1 timeline duy nhất bao quát toàn bộ tiến trình cuộn trang
  const shadowTl = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      invalidateOnRefresh: true,
    }
  })

  // 1. Phân đoạn đầu: Hiện bóng trên (0% -> 10% quá trình cuộn)
  shadowTl.fromTo('#app',
    { '--f-top': '0px', '--f-top-blur': '0px' },
    { '--f-top': '100px', '--f-top-blur': '50px', duration: 1 }
  )

  // 2. Phân đoạn giữa: Giữ nguyên trạng thái (10% -> 90%)
  shadowTl.to({}, { duration: 8 })

  // 3. Phân đoạn cuối: Ẩn bóng dưới (90% -> 100%)
  shadowTl.to('#app',
    { '--f-bottom': '0px', '--f-bottom-blur': '0px', duration: 1 },
    '>' // Tiếp nối ngay sau phần giữ nguyên
  )
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
  gsap.ticker.remove((time) => lenis?.raf(time * 1000))
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
[data-theme="light"] ::-webkit-scrollbar-track {
  background: #f8f8f6;
}

[data-theme="light"] ::-webkit-scrollbar-thumb {
  background: #c8c8c0;
}

[data-theme="light"] ::-webkit-scrollbar-thumb:hover {
  background: #4a7c2f;
}

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

/* ====== THEME-AWARE FRAME SHADOW ====== */
#app::after {
  content: "";
  position: fixed;
  inset: 0;
  box-shadow:
    inset 0 var(--f-top, 0px) var(--f-top-blur, 0px) -50px var(--frame-shadow-color),
    inset 0 var(--f-bottom, -100px) var(--f-bottom-blur, 50px) -50px var(--frame-shadow-color);
  pointer-events: none;
  z-index: 90;
}

[data-theme="light"] {
  --frame-shadow-color: rgb(255, 255, 255);
}

[data-theme="dark"] {
  --frame-shadow-color: rgb(0, 0, 0);
}


/* ====== LIGHT THEME — COMPONENT OVERRIDES ====== */
[data-theme="light"] .footer-cta {
  background: #121116;
  box-shadow: none;
  border-color: rgba(255, 255, 255, 0.06);
}

[data-theme="light"] .footer-cta-content h2 {
  color: #0b0b0b;
}

[data-theme="light"] .footer-cta-content .availability-badge {
  color: var(--highlight);
}

[data-theme="light"] .footer-cta-content .btn-outline {
  border-color: #0b0b0b;
  color: #0b0b0b;
}

[data-theme="light"] .footer-cta-content .btn-outline:hover {
  background: #0b0b0b;
  color: #f7f7fe;
}

[data-theme="light"] .footer-cta-content .social-link {
  border-color: var(--highlight);
  color: var(--highlight);
}

[data-theme="light"] .footer-cta-content .social-link:hover {
  border-color: var(--highlight-dark);
  color: var(--highlight-dark);
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

<template>
  <div class="app-wrapper">

    <!-- Cursor glow - color adapts to theme -->
    <div class="cursor-glow" ref="cursorGlow" v-if="!isBare"></div>

    <!-- Page Loader — client-only on purpose. Rendered into the SSG output it
         becomes a fixed full-viewport overlay baked into all 49 pre-rendered
         pages, and only JS can take it away: a 404'd hashed chunk or a
         hydration error left the visitor on a black screen with no way out. -->
    <ClientOnly>
      <PageLoader v-if="showLoader" @loaded="onLoaded" />
    </ClientOnly>

    <!-- Navbar -->
    <AppNavbar v-if="!showLoader && !isBare" />

    <!-- Route content with page transition -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <AppFooter v-if="!showLoader && !isBare" />

    <!-- Mobile Bottom Navigation -->
    <MobileBottomNav v-if="!showLoader && !isBare" />

    <!-- AI Chatbot -->
    <ChatBot v-if="!showLoader && !isBare" />

    <!-- Floating Menu (replaces scroll-top-btn and chatbot trigger) -->
    <FloatingMenu v-if="!showLoader && !isBare" />
  </div>
</template>

<script setup>

import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import PageLoader from './components/PageLoader.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
import ChatBot from './components/ChatBot.vue'
import FloatingMenu from './components/FloatingMenu.vue'

useHead({
  title: 'Phuc Khang — Creative Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Phuc Khang, a Full-Stack Developer & Creative Developer.' },
    { property: 'og:title', content: 'Phuc Khang — Creative Developer' },
    { property: 'og:description', content: 'Portfolio of Phuc Khang, a Full-Stack Developer & Creative Developer.' },
    { property: 'og:type', content: 'website' }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const showLoader = ref(true)
const showScrollTop = ref(false)
const cursorGlow = ref(null)

  // ====== Theme bootstrap (before first render) ======
  ; (function applyInitialTheme() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') || 'dark'
      document.documentElement.setAttribute('data-theme', saved)
    }
  })()

// ====== Lenis instance (module-level so router can reach it) ======
let lenis = null

function onLoaded() {
  showLoader.value = false
}

function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
}

// Let a child (e.g. the project-detail TOC) hand us a scroll target, so it
// goes through Lenis instead of a bare window.scrollTo that fights its RAF loop.
// `lock` giữ nguyên mục tiêu suốt animation (input người dùng không kéo tuột),
// `onComplete` cho bên gọi biết đã tới nơi thật sự thay vì đoán bằng timeout.
// `force` là bắt buộc khi đi kèm `lock`: Lenis bỏ qua lời gọi scrollTo lúc đang
// bị khoá, nên nếu không có nó thì cú snap chồng lên cú snap đang chạy sẽ bị nuốt
// trong khi bên gọi vẫn tưởng là đã đặt được đích.
function scrollToY(event) {
  const { y, lock, duration, onComplete } = event?.detail ?? {}
  if (typeof y !== 'number') return
  if (lenis) {
    lenis.scrollTo(y, {
      duration: duration ?? 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lock: !!lock,
      force: true,
      onComplete: () => onComplete?.(),
    })
  } else {
    window.scrollTo({ top: y, behavior: 'smooth' })
    onComplete?.()
  }
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

function updateBottomFrameShadow(scrollY) {
  if (typeof document === 'undefined') return
  const app = document.getElementById('app')
  if (!app) return
  const y = typeof scrollY === 'number' ? scrollY : (window.scrollY || document.documentElement.scrollTop || 0)
  const isMarketplace = route.path === '/marketplace'
  const isAtTop = y <= 15
  app.classList.toggle('hide-bottom-frame-shadow', isMarketplace && isAtTop)
}

function handleLenisScroll({ scroll }) {
  showScrollTop.value = scroll > 400
  updateBottomFrameShadow(scroll)
}

// ====== GSAP ScrollTrigger refresh + scroll-to-top on route change ======
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const isBare = computed(() => route.meta.bare)

// Bare demo routes render a full-bleed standalone site — strip the portfolio
// chrome. The frame shadow lives on #app, so toggle a class the CSS can target.
watch(isBare, (bare) => {
  if (typeof document !== 'undefined') {
    const app = document.getElementById('app')
    if (app) app.classList.toggle('is-bare', !!bare)
  }
}, { immediate: true })
router.afterEach(() => {
  lenis?.scrollTo(0, { immediate: true })
  setTimeout(() => ScrollTrigger.refresh(), 150)
  setTimeout(() => updateBottomFrameShadow(0), 50)
})

onMounted(() => {
  // ── Lenis smooth scroll ────────────────────────────────────────────────
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8,
    infinite: false,
    // Let horizontal gestures over a scrollable child (the Blossom galleries)
    // reach that element instead of being swallowed by page smoothing.
    // Vertical gestures still fall through to Lenis.
    allowNestedScroll: true,
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
  
  window.addEventListener('request-scroll-to-top', scrollToTop)
  window.addEventListener('request-scroll-to', scrollToY)
  window.addEventListener('scroll', onNativeScroll, { passive: true })
  updateBottomFrameShadow(window.scrollY || 0)
})

function onNativeScroll() {
  updateBottomFrameShadow()
}

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
  gsap.ticker.remove((time) => lenis?.raf(time * 1000))
  document.removeEventListener('mousemove', trackMouse)
  cancelAnimationFrame(rafId)
  window.removeEventListener('request-scroll-to-top', scrollToTop)
  window.removeEventListener('request-scroll-to', scrollToY)
  window.removeEventListener('scroll', onNativeScroll)
})
</script>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow-x: clip;
  width: 100%;
}

@media (max-width: 600px) {
  .app-wrapper {
    padding-bottom: 72px; /* Prevent MobileBottomNav from covering the footer */
  }
}
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
/* Bare demo routes: strip the fixed frame shadow for a standalone site */
#app.is-bare::after {
  display: none;
}
#app::after {
  content: "";
  position: fixed;
  inset: 0;
  box-shadow:
    inset 0 var(--f-top, 0px) var(--f-top-blur, 0px) -50px var(--frame-shadow-color),
    inset 0 var(--f-bottom, -100px) var(--f-bottom-blur, 50px) -50px var(--frame-shadow-color);
  pointer-events: none;
  z-index: 90;
  transition: box-shadow 0.45s cubic-bezier(0.42, 0, 0.58, 1);
}

/* Ẩn viền mờ đáy khi ở trang marketplace tại frame hero chưa scroll */
#app.hide-bottom-frame-shadow::after {
  box-shadow:
    inset 0 var(--f-top, 0px) var(--f-top-blur, 0px) -50px var(--frame-shadow-color),
    inset 0 0 0 0 transparent !important;
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

/* ====== LIGHT THEME — TIC FACTORY DETAIL ====== */
/* The prev/next cards sit on --bg-800, which is pure white in light mode, so
   they read as flat against the page. Same elevation cue the other light-mode
   cards get (cf. .pd-result-card, .process-card above). */
[data-theme="light"] .nav-card {
  box-shadow: var(--shadow-sm);
}
</style>

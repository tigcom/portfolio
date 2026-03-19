<template>
  <header id="navbar" :class="{ scrolled: isScrolled, hidden: isHidden }">
    <nav class="nav-inner">
      <router-link to="/" class="nav-logo">MD</router-link>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" :class="{ active: isActive(link.path) }">
            <span class="link-text-top">{{ t(link.label) }}</span>
            <span class="link-text-bottom">{{ t(link.label) }}</span>
          </router-link>
        </li>
      </ul>

      <div class="nav-actions">
        <!-- Language Toggle -->
        <button class="nav-lang-btn" @click="setLang(state.lang === 'en' ? 'vi' : 'en')" :title="state.lang === 'en' ? 'Tiếng Việt' : 'English'">
          {{ state.lang === 'en' ? 'EN' : 'VI' }}
        </button>

        <!-- Theme toggle with animated icon swap -->
        <button
          class="nav-theme-btn"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light Mode' : 'Dark Mode'"
        >
          <!-- Moon icon (shown in dark mode) -->
          <svg v-if="isDark" class="theme-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
          <!-- Sun icon (shown in light mode) -->
          <svg v-else class="theme-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { useLang } from '../data/translations.js'

const { state, t, setLang } = useLang()
const route = useRoute()
const isScrolled = ref(false)
const isHidden = ref(false)
const isDark = ref(true)

const navLinks = [
  { path: '/',         label: 'nav.home' },
  { path: '/about',    label: 'nav.about' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/contact',  label: 'nav.contact' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// =============================================
// THEME TOGGLE — GSAP Circular Reveal
// =============================================
function toggleTheme(event) {
  const nextTheme = isDark.value ? 'light' : 'dark'
  const isGoingLight = nextTheme === 'light'

  // Create ripple element at click position
  const ripple = document.createElement('div')
  ripple.className = 'theme-ripple'
  const size = Math.hypot(window.innerWidth, window.innerHeight) * 2.2
  const x = event.clientX
  const y = event.clientY

  Object.assign(ripple.style, {
    width:  `${size}px`,
    height: `${size}px`,
    left:   `${x - size / 2}px`,
    top:    `${y - size / 2}px`,
    background: isGoingLight ? '#f8f8f6' : '#0a0a0a',
  })
  document.body.appendChild(ripple)

  // GSAP: expand circle, swap theme at midpoint, collapse
  const tl = gsap.timeline({
    onComplete: () => ripple.remove()
  })

  tl.to(ripple, {
    scale: 1,
    duration: 0.55,
    ease: 'power3.out',
    onComplete: () => {
      // Apply new theme at peak coverage
      document.documentElement.setAttribute('data-theme', nextTheme)
      isDark.value = !isDark.value
      localStorage.setItem('portfolio-theme', nextTheme)
    }
  })
  .to(ripple, {
    opacity: 0,
    duration: 0.35,
    ease: 'power2.in',
  }, '+=0.05')

  // Rotate theme button icon with GSAP
  gsap.fromTo('.theme-icon',
    { rotate: 0, scale: 1 },
    { rotate: 360, scale: 0, duration: 0.3, ease: 'power3.in',
      onComplete: () => {
        gsap.fromTo('.theme-icon',
          { rotate: -90, scale: 0 },
          { rotate: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
        )
      }
    }
  )
}

// =============================================
// NAVBAR SCROLL BEHAVIOR
// =============================================
let lastScroll = 0
function handleScroll() {
  const current = window.scrollY
  isScrolled.value = current > 60
  if (current > 120) {
    isHidden.value = current > lastScroll
  } else {
    isHidden.value = false
  }
  lastScroll = current
}

// =============================================
// INIT
// =============================================
onMounted(() => {
  // Restore theme from localStorage
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)
  isDark.value = savedTheme === 'dark'

  // Entrance animation
  gsap.fromTo('#navbar',
    { yPercent: -100, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
  )
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 16px var(--container-px);
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 580px;
  background: var(--backdrop);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 8px 16px;
  pointer-events: all;
  box-shadow: var(--shadow-sm);
}

#navbar.scrolled .nav-inner {
  background: var(--backdrop-scrolled);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-md);
}

#navbar.hidden .nav-inner {
  transform: translateY(-110%);
  opacity: 0;
  pointer-events: none;
}

.nav-logo {
  font-family: var(--font-clash);
  font-size: 1.5rem; font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -1px;
}
.nav-logo:hover { color: var(--highlight); }

.nav-links {
  display: flex; align-items: center;
  gap: 24px; list-style: none;
}
.nav-links a {
  color: var(--text-secondary);
  font-size: 0.875rem; font-weight: 500;
  display: inline-flex; flex-direction: column;
  overflow: hidden; height: 1.2em;
}
.link-text-top, .link-text-bottom {
  display: block;
  transform: translateY(0);
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1) !important;
  line-height: 1.2;
}
.nav-links a:hover .link-text-top,
.nav-links a.active .link-text-top {
  transform: translateY(-100%) !important;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-lang-btn {
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s;
}

.nav-lang-btn:hover {
  border-color: var(--highlight);
  color: var(--highlight);
}

/* Theme Toggle Button */
.nav-theme-btn {
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--text-secondary);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.nav-theme-btn:hover {
  border-color: var(--highlight);
  color: var(--highlight);
}

.theme-icon {
  display: block;
  flex-shrink: 0;
}

/* Active dot under logo */
.nav-active-indicator {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--highlight);
  position: absolute;
  bottom: -6px; left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 600px) {
  .nav-links { display: none; }
  .nav-inner { max-width: calc(100% - 32px); }
}
</style>

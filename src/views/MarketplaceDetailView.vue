<template>
  <main class="mpd-view" v-if="template">

    <!-- Back link -->
    <div class="container mpd-back">
      <router-link to="/marketplace" class="mpd-back-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span>{{ t('marketplace.backToMarketplace') }}</span>
      </router-link>
    </div>

    <!-- ── Hero ──────────────────────────────────────────── -->
    <section class="mpd-hero">
      <div class="container">
        <div class="mpd-hero-grid">

          <!-- Left: info -->
          <div class="mpd-hero-content">
            <div class="mpd-meta" ref="metaEl">
              <span class="mpd-num">{{ template.num }}</span>
              <span class="mpd-category">{{ template.category }} · {{ template.year }}</span>
            </div>

            <h1 class="mpd-title" ref="titleEl">{{ template.title }}</h1>
            <p class="mpd-subtitle" ref="subtitleEl">{{ template.subtitle }}</p>

            <div class="mpd-tags" ref="tagsEl">
              <span v-for="tag in template.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <div class="mpd-hero-btns" ref="btnsEl">
              <router-link
                v-if="template.type === 'app'"
                :to="`/marketplace/${template.slug}/demo`"
                class="btn btn-primary"
              >
                <span>{{ t('marketplace.viewDemo') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </router-link>
              <span class="demo-badge-hero">
                <span class="demo-dot"></span>
                {{ t('marketplace.demoBadge') }}
              </span>
            </div>
          </div>

          <!-- Right: preview -->
          <div class="mpd-hero-preview" ref="heroPreviewEl">
            <!-- Demo (mini-app): live screenshot, click to open -->
            <router-link
              v-if="template.type === 'app'"
              :to="`/marketplace/${template.slug}/demo`"
              class="preview-shot"
            >
              <img
                class="preview-shot-img"
                :src="`/demos/${template.slug}/thumb.jpg`"
                :alt="template.title"
                loading="eager"
              />
              <span class="preview-shot-shade"></span>
              <span class="preview-shot-overlay">
                <span class="preview-shot-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor"
                    stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 4l14 8-14 8V4z" />
                  </svg>
                </span>
                <span class="preview-shot-label">{{ t('marketplace.viewDemo') }}</span>
              </span>
            </router-link>

            <!-- Mockup (legacy single-screen) -->
            <div v-else class="preview-wrapper">
              <div class="preview-grid-overlay"></div>
              <div class="preview-glow-hero"></div>
              <div class="mockup-container">
                <component :is="mockupComponent" v-if="mockupComponent" />
                <div v-else class="mockup-placeholder">
                  <div class="placeholder-icon">{{ categoryIcon }}</div>
                  <div class="placeholder-label">{{ template.title }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Overview ───────────────────────────────────────── -->
    <section class="mpd-section">
      <div class="container">
        <div class="mpd-content-grid">
          <div class="mpd-text-block" ref="overviewEl">
            <div class="section-label-mp">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              </svg>
              {{ t('marketplace.overview') }}
            </div>
            <p class="mpd-body-text">{{ template.overview }}</p>
          </div>
          <div class="mpd-text-block" ref="aboutEl">
            <div class="section-label-mp">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              {{ t('marketplace.about') }}
            </div>
            <p class="mpd-body-text">{{ template.about }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Features ───────────────────────────────────────── -->
    <section class="mpd-features-section" ref="featuresEl">
      <div class="container">
        <div class="features-header">
          <div class="section-label-mp">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            {{ t('marketplace.features') }}
          </div>
          <h2 class="features-title">{{ t('marketplace.featuresLabel') }}</h2>
        </div>

        <div class="features-grid">
          <div
            class="feature-item"
            v-for="(feature, i) in template.features"
            :key="i"
            ref="featureItems"
            @mouseenter="onFeatureHover($event)"
            @mouseleave="onFeatureLeave($event)"
          >
            <div class="feature-check">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <span class="feature-text">{{ feature }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Stats ──────────────────────────────────────────── -->
    <section class="mpd-stats-section" ref="statsEl">
      <div class="container">
        <div class="mpd-stats-grid">
          <div class="mpd-stat" v-for="s in templateStats" :key="s.label">
            <div class="mpd-stat-val">{{ s.val }}</div>
            <div class="mpd-stat-label">{{ state.lang === 'vi' ? s.labelVi : s.labelEn }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Prev / Next navigation ─────────────────────────── -->
    <section class="mpd-nav-section" ref="navEl">
      <div class="container">
        <div class="mpd-nav-grid">
          <router-link
            v-if="template.prevSlug"
            :to="`/marketplace/${template.prevSlug}`"
            class="mpd-nav-link mpd-nav-prev"
            @mouseenter="onNavHover($event)"
            @mouseleave="onNavLeave($event)"
          >
            <div class="nav-arrow">←</div>
            <div class="nav-info">
              <span class="nav-dir">{{ t('marketplace.previous') }}</span>
              <span class="nav-title">{{ getTranslated(template.prevTitle) }}</span>
            </div>
          </router-link>

          <div v-else class="mpd-nav-spacer"></div>

          <router-link
            v-if="template.nextSlug"
            :to="`/marketplace/${template.nextSlug}`"
            class="mpd-nav-link mpd-nav-next"
            @mouseenter="onNavHover($event)"
            @mouseleave="onNavLeave($event)"
          >
            <div class="nav-info nav-info-right">
              <span class="nav-dir">{{ t('marketplace.next') }}</span>
              <span class="nav-title">{{ getTranslated(template.nextTitle) }}</span>
            </div>
            <div class="nav-arrow">→</div>
          </router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getTemplateBySlug, templates } from '../data/templates.js'
import { useLang } from '../data/translations.js'

// Mockup components (legacy single-screen render — only furniture remains)
import FurnitureMockup from '../components/marketplace/mockups/FurnitureMockup.vue'

gsap.registerPlugin(ScrollTrigger)

const { state, t } = useLang()
const route = useRoute()

// ─── Template data ────────────────────────────────────────────────────────────
const template = computed(() => getTemplateBySlug(route.params.slug, state.lang))

// ─── Helpers ─────────────────────────────────────────────────────────────────
const getTranslated = (obj) =>
  obj && typeof obj === 'object' ? (obj[state.lang] ?? obj.en ?? obj) : obj

// ─── Mockup component map ─────────────────────────────────────────────────────
const mockupMap = {
  'furniture-showcase': FurnitureMockup,
}

const mockupComponent = computed(() => mockupMap[route.params.slug] || null)

// ─── Category icon fallback ───────────────────────────────────────────────────
const categoryIconMap = {
  saas: '📊',
  fintech: '💳',
  ai: '🤖',
  ecommerce: '🛒',
  healthcare: '⚕️',
  'real-estate': '🏠',
  education: '📚',
  food: '🍜',
  travel: '✈️',
  fitness: '💪',
  'dev-tools': '🛠️',
  creative: '🎨',
  branding: '🪑',
}

const categoryIcon = computed(() => {
  const raw = templates.find(t => t.slug === route.params.slug)
  return categoryIconMap[raw?.category] || '🌐'
})

// ─── Stats ────────────────────────────────────────────────────────────────────
const templateStats = [
  { val: '100%', labelEn: 'Responsive Design', labelVi: 'Thiết kế Responsive' },
  { val: '< 2s', labelEn: 'Load Time', labelVi: 'Thời gian tải' },
  { val: '∞', labelEn: 'Customizable', labelVi: 'Tùy chỉnh' },
  { val: '24h', labelEn: 'Support', labelVi: 'Hỗ trợ' },
]

// ─── Template refs ────────────────────────────────────────────────────────────
const metaEl = ref(null)
const titleEl = ref(null)
const subtitleEl = ref(null)
const tagsEl = ref(null)
const btnsEl = ref(null)
const heroPreviewEl = ref(null)
const overviewEl = ref(null)
const aboutEl = ref(null)
const featuresEl = ref(null)
const featureItems = ref([])
const statsEl = ref(null)
const navEl = ref(null)

// ─── Feature hover ────────────────────────────────────────────────────────────
function onFeatureHover(e) {
  const item = e.currentTarget
  gsap.to(item, { x: 4, duration: 0.25, ease: 'power2.out' })
  gsap.to(item.querySelector('.feature-check'), { scale: 1.15, duration: 0.25, ease: 'power2.out' })
}

function onFeatureLeave(e) {
  const item = e.currentTarget
  gsap.to(item, { x: 0, duration: 0.25, ease: 'power2.out' })
  gsap.to(item.querySelector('.feature-check'), { scale: 1, duration: 0.25, ease: 'power2.out' })
}

// ─── Nav link hover ───────────────────────────────────────────────────────────
function onNavHover(e) {
  const link = e.currentTarget
  gsap.to(link, { y: -4, duration: 0.3, ease: 'power2.out' })
}

function onNavLeave(e) {
  const link = e.currentTarget
  gsap.to(link, { y: 0, duration: 0.3, ease: 'power2.out' })
}

// ─── ScrollTrigger cleanup ────────────────────────────────────────────────────
const _sts = []

function initAnimations() {
  // Kill existing
  _sts.forEach(st => st.kill())
  _sts.length = 0
  ScrollTrigger.refresh()

  // ── 1. Hero entrance ──────────────────────────────────────────────────────
  const heroTl = gsap.timeline({ delay: 0.08, defaults: { ease: 'power3.out' } })

  if (metaEl.value) {
    heroTl.fromTo(metaEl.value,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5 }
    )
  }

  if (titleEl.value) {
    heroTl.fromTo(titleEl.value,
      { opacity: 0, y: 40, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.85 },
      0.2
    )
  }

  if (subtitleEl.value) {
    heroTl.fromTo(subtitleEl.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.5
    )
  }

  if (tagsEl.value) {
    heroTl.fromTo(
      tagsEl.value.querySelectorAll('.tag'),
      { opacity: 0, y: 12, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.06 },
      0.65
    )
  }

  if (btnsEl.value) {
    heroTl.fromTo(btnsEl.value,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.8
    )
  }

  if (heroPreviewEl.value) {
    heroTl.fromTo(heroPreviewEl.value,
      { opacity: 0, x: 60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
      0.15
    )

    // Parallax on scroll
    _sts.push(
      ScrollTrigger.create({
        trigger: heroPreviewEl.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          gsap.set(heroPreviewEl.value, {
            y: self.progress * 60,
          })
        },
      })
    )
  }

  // ── 2. Overview & About reveal ────────────────────────────────────────────
  ;[overviewEl.value, aboutEl.value].forEach((el) => {
    if (!el) return
    gsap.set(el, { opacity: 0, y: 40 })
    _sts.push(
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' })
        },
      })
    )
  })

  // ── 3. Features staggered reveal ─────────────────────────────────────────
  if (featuresEl.value) {
    const items = featuresEl.value.querySelectorAll('.feature-item')
    gsap.set(items, { opacity: 0, x: -30 })

    _sts.push(
      ScrollTrigger.create({
        trigger: featuresEl.value,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: 'power3.out',
          })
        },
      })
    )
  }

  // ── 4. Stats counter animation ────────────────────────────────────────────
  if (statsEl.value) {
    const statItems = statsEl.value.querySelectorAll('.mpd-stat')
    gsap.set(statItems, { opacity: 0, y: 24, scale: 0.96 })

    _sts.push(
      ScrollTrigger.create({
        trigger: statsEl.value,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(statItems, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
          })
        },
      })
    )
  }

  // ── 5. Nav section reveal ─────────────────────────────────────────────────
  if (navEl.value) {
    const navLinks = navEl.value.querySelectorAll('.mpd-nav-link')
    gsap.set(navLinks, { opacity: 0, y: 24 })

    _sts.push(
      ScrollTrigger.create({
        trigger: navEl.value,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(navLinks, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
          })
        },
      })
    )
  }
}

onMounted(() => {
  initAnimations()
})

// Re-run animations when route changes (slug changes)
watch(() => route.params.slug, () => {
  // Small delay to let Vue update the DOM
  setTimeout(initAnimations, 80)
})

onUnmounted(() => {
  _sts.forEach(st => st.kill())
  _sts.length = 0
})
</script>

<style scoped>
/* ── Page layout ─────────────────────────────────────────────────────────── */
.mpd-view {
  padding-top: 120px;
  padding-bottom: 100px;
}

/* ── Back link ───────────────────────────────────────────────────────────── */
.mpd-back {
  margin-bottom: 40px;
}

.mpd-back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.mpd-back-link:hover { color: var(--text-primary); }

/* ── Hero ────────────────────────────────────────────────────────────────── */
.mpd-hero {
  padding-bottom: 80px;
}

.mpd-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.mpd-hero-content { }

.mpd-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.mpd-num {
  font-family: var(--font-clash);
  font-size: 0.72rem;
  color: var(--highlight);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.mpd-category {
  font-size: 0.72rem;
  color: var(--text-secondary);
  text-transform: capitalize;
}

.mpd-title {
  font-family: var(--font-clash);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 600;
  line-height: 1.15;
  margin: 0 0 16px;
}

.mpd-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 0 0 24px;
}

.mpd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.tag {
  font-size: 0.72rem;
  padding: 5px 14px;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-family: var(--font-satoshi);
  font-weight: 500;
}

.mpd-hero-btns {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-badge-hero {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 8px 16px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.demo-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse-dot 1.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

/* ── Hero Preview ────────────────────────────────────────────────────────── */
.mpd-hero-preview {
  will-change: transform;
}

.preview-wrapper {
  position: relative;
  background: var(--bg-800);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
  padding: 24px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
}

.preview-glow-hero {
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  top: 25%;
  left: 25%;
  opacity: 0.1;
  filter: blur(50px);
  pointer-events: none;
  background: var(--highlight);
}

.mockup-container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.mockup-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 60px 20px;
}

.placeholder-icon { font-size: 4rem; }
.placeholder-label {
  font-family: var(--font-clash);
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
}

/* ── Demo preview shot (mini-app) ────────────────────────────────────────── */
.preview-shot {
  position: relative;
  display: block;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  text-decoration: none;
  will-change: transform;
}

.preview-shot-img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.preview-shot-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(5, 5, 7, 0.62) 0%, rgba(5, 5, 7, 0.08) 55%, transparent 100%);
  transition: background 0.4s;
}

.preview-shot-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.preview-shot-play {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--highlight);
  color: var(--highlight-text);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.42);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.preview-shot-label {
  font-family: var(--font-clash);
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}

.preview-shot:hover .preview-shot-img { transform: scale(1.04); }
.preview-shot:hover .preview-shot-shade {
  background: linear-gradient(to top, rgba(5, 5, 7, 0.8) 0%, rgba(5, 5, 7, 0.2) 60%, rgba(5, 5, 7, 0.1) 100%);
}
.preview-shot:hover .preview-shot-play { transform: scale(1.1); }

/* ── Section label ───────────────────────────────────────────────────────── */
.section-label-mp {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--highlight);
  margin-bottom: 14px;
}

/* ── Content sections ────────────────────────────────────────────────────── */
.mpd-section {
  padding: 60px 0;
  border-top: 1px solid var(--border);
}

.mpd-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.mpd-text-block { }

.mpd-body-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* ── Features ────────────────────────────────────────────────────────────── */
.mpd-features-section {
  padding: 60px 0;
  border-top: 1px solid var(--border);
}

.features-header {
  margin-bottom: 40px;
}

.features-title {
  font-family: var(--font-clash);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 600;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  cursor: default;
  will-change: transform;
}

.feature-check {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--highlight-glow);
  color: var(--highlight);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.feature-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* ── Stats ───────────────────────────────────────────────────────────────── */
.mpd-stats-section {
  padding: 60px 0;
  border-top: 1px solid var(--border);
}

.mpd-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
}

.mpd-stat {
  padding: 32px 24px;
  text-align: center;
  border-right: 1px solid var(--border);
}

.mpd-stat:last-child { border-right: none; }

.mpd-stat-val {
  font-family: var(--font-clash);
  font-size: 2rem;
  font-weight: 600;
  color: var(--highlight);
  margin-bottom: 6px;
}

.mpd-stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* ── Prev/Next navigation ────────────────────────────────────────────────── */
.mpd-nav-section {
  padding: 60px 0 0;
  border-top: 1px solid var(--border);
}

.mpd-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.mpd-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, background 0.2s;
  will-change: transform;
}

.mpd-nav-link:hover {
  border-color: var(--border-strong);
  background: var(--bg-800);
}

.mpd-nav-next {
  justify-content: flex-end;
  text-align: right;
}

.mpd-nav-spacer { }

.nav-arrow {
  font-size: 1.5rem;
  color: var(--highlight);
  flex-shrink: 0;
}

.nav-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-info-right { align-items: flex-end; }

.nav-dir {
  font-size: 0.72rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
}

.nav-title {
  font-family: var(--font-clash);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* ── Responsive — Tablet ─────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .mpd-hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .mpd-content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .mpd-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .mpd-stat:nth-child(2) { border-right: none; }
  .mpd-stat:nth-child(3) { border-top: 1px solid var(--border); }
  .mpd-stat:nth-child(4) { border-top: 1px solid var(--border); }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Responsive — Mobile ─────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .mpd-view {
    padding-top: 96px;
    padding-bottom: 72px;
  }

  .mpd-title { font-size: clamp(1.8rem, 7vw, 2.4rem); }
  .mpd-subtitle { font-size: 0.9rem; }

  .preview-wrapper {
    padding: 16px;
    min-height: 280px;
    border-radius: 16px;
  }

  .preview-shot { border-radius: 16px; }

  .mpd-nav-grid {
    grid-template-columns: 1fr;
  }

  .mpd-nav-next {
    justify-content: flex-start;
    text-align: left;
  }

  .nav-info-right { align-items: flex-start; }

  .mpd-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ── Responsive — Small phones ───────────────────────────────────────────── */
@media (max-width: 420px) {
  .mpd-view { padding-top: 88px; }
  .mpd-title { font-size: clamp(1.5rem, 8vw, 2rem); }
  .mpd-hero-btns { flex-direction: column; align-items: flex-start; }
  .mpd-stats-grid { grid-template-columns: 1fr 1fr; }
}
</style>

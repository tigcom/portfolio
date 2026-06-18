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
                to="/contact"
                class="btn-collaborate"
                @mouseenter="onCollaborateBtnHover"
                @mouseleave="onCollaborateBtnLeave"
              >
                <span>{{ t('marketplace.collaborateBtn') }}</span>
                <span class="btn-ripple" ref="collaborateRipple"></span>
              </router-link>
              <span class="demo-badge-hero">
                <span class="demo-dot"></span>
                {{ t('marketplace.demoBadge') }}
              </span>
            </div>
          </div>

          <!-- Right: preview -->
          <div class="mpd-hero-preview" ref="heroPreviewEl">
            <div class="preview-wrapper" :style="{ background: template.colorBackground }">
              <div class="preview-grid-overlay"></div>
              <div class="preview-glow-hero" :style="{ background: template.accentColor }"></div>
              <!-- Mockup component -->
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
            <div class="feature-check" :style="{ color: template.accentColor }">
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
            <div class="mpd-stat-val" :style="{ color: template.accentColor }">{{ s.val }}</div>
            <div class="mpd-stat-label">{{ state.lang === 'vi' ? s.labelVi : s.labelEn }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Collaborate CTA ────────────────────────────────── -->
    <section class="mpd-cta-section" ref="ctaEl">
      <div class="container">
        <div class="mpd-cta-card" :style="{ '--accent': template.accentColor }">
          <!-- Animated background -->
          <div class="cta-bg-shape cta-bg-1"></div>
          <div class="cta-bg-shape cta-bg-2"></div>
          <div class="cta-bg-grid"></div>

          <div class="cta-content">
            <div class="cta-icon">🤝</div>
            <h2 class="cta-title">{{ t('marketplace.collaborate') }}</h2>
            <p class="cta-desc">{{ t('marketplace.collaborateDesc') }}</p>
            <router-link
              to="/contact"
              class="cta-collaborate-btn"
              ref="ctaCollaborateBtn"
              @mouseenter="onCtaHover"
              @mouseleave="onCtaLeave"
            >
              {{ t('marketplace.collaborateBtn') }}
            </router-link>
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

// Mockup components
import HRMockup from '../components/marketplace/mockups/HRMockup.vue'
import FurnitureMockup from '../components/marketplace/mockups/FurnitureMockup.vue'
import LMSMockup from '../components/marketplace/mockups/LMSMockup.vue'
import RestaurantMockup from '../components/marketplace/mockups/RestaurantMockup.vue'
import RealEstateMockup from '../components/marketplace/mockups/RealEstateMockup.vue'
import CorporateMockup from '../components/marketplace/mockups/CorporateMockup.vue'
import EcommerceMockup from '../components/marketplace/mockups/EcommerceMockup.vue'
import MedicalMockup from '../components/marketplace/mockups/MedicalMockup.vue'

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
  'hr-management': HRMockup,
  'furniture-showcase': FurnitureMockup,
  'online-learning': LMSMockup,
  'restaurant-fnb': RestaurantMockup,
  'real-estate': RealEstateMockup,
  'corporate-agency': CorporateMockup,
  'ecommerce-shop': EcommerceMockup,
  'medical-clinic': MedicalMockup,
}

const mockupComponent = computed(() => mockupMap[route.params.slug] || null)

// ─── Category icon fallback ───────────────────────────────────────────────────
const categoryIconMap = {
  enterprise: '🏢',
  branding: '🪑',
  education: '📚',
  hospitality: '🍜',
  'real-estate': '🏠',
  corporate: '💼',
  ecommerce: '🛒',
  healthcare: '⚕️',
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
const ctaEl = ref(null)
const ctaCollaborateBtn = ref(null)
const navEl = ref(null)
const collaborateRipple = ref(null)

// ─── Button hover effects ─────────────────────────────────────────────────────
function onCollaborateBtnHover(e) {
  const btn = e.currentTarget
  gsap.killTweensOf(btn)
  gsap.timeline()
    .to(btn, { scale: 1.05, duration: 0.18, ease: 'power2.out' })
    .to(btn, { scale: 0.98, duration: 0.12, ease: 'power2.inOut' })
    .to(btn, { scale: 1.02, duration: 0.2, ease: 'back.out(2)' })
}

function onCollaborateBtnLeave(e) {
  const btn = e.currentTarget
  gsap.to(btn, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })
}

function onCtaHover() {
  const el = ctaCollaborateBtn.value?.$el || ctaCollaborateBtn.value
  if (!el) return
  gsap.killTweensOf(el)
  gsap.timeline()
    .to(el, { scale: 1.06, duration: 0.2, ease: 'power2.out' })
    .to(el, { scale: 0.97, duration: 0.15, ease: 'power2.inOut' })
    .to(el, { scale: 1.0, duration: 0.25, ease: 'back.out(2.5)' })
}

function onCtaLeave() {
  const el = ctaCollaborateBtn.value?.$el || ctaCollaborateBtn.value
  if (!el) return
  gsap.to(el, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })
}

// ─── Feature hover ────────────────────────────────────────────────────────────
function onFeatureHover(e) {
  const item = e.currentTarget
  gsap.to(item, { x: 8, duration: 0.3, ease: 'power2.out' })
  gsap.to(item.querySelector('.feature-check'), { scale: 1.3, duration: 0.3, ease: 'back.out(2)' })
}

function onFeatureLeave(e) {
  const item = e.currentTarget
  gsap.to(item, { x: 0, duration: 0.3, ease: 'power2.out' })
  gsap.to(item.querySelector('.feature-check'), { scale: 1, duration: 0.3, ease: 'power2.out' })
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
    gsap.set(statItems, { opacity: 0, y: 30, scale: 0.9 })

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
            duration: 0.7,
            stagger: 0.1,
            ease: 'back.out(1.4)',
          })
        },
      })
    )
  }

  // ── 5. CTA card reveal ────────────────────────────────────────────────────
  if (ctaEl.value) {
    const card = ctaEl.value.querySelector('.mpd-cta-card')
    gsap.set(card, { opacity: 0, y: 50, scale: 0.96 })

    _sts.push(
      ScrollTrigger.create({
        trigger: ctaEl.value,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
          })
        },
      })
    )

    // Animate CTA background shapes
    const shapes = ctaEl.value.querySelectorAll('.cta-bg-shape')
    if (shapes.length >= 2) {
      gsap.to(shapes[0], {
        x: 40,
        y: -30,
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(shapes[1], {
        x: -30,
        y: 40,
        scale: 0.8,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      })
    }
  }

  // ── 6. Nav section reveal ─────────────────────────────────────────────────
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

.btn-collaborate {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--highlight);
  color: var(--highlight-text);
  padding: 13px 30px;
  border-radius: 100px;
  font-family: var(--font-satoshi);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  overflow: hidden;
  will-change: transform;
}

.btn-ripple {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.15);
  border-radius: 100px;
  transform: scale(0);
  opacity: 0;
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
  color: rgba(255,255,255,0.6);
  text-align: center;
}

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
  margin-bottom: 6px;
}

.mpd-stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* ── CTA card ────────────────────────────────────────────────────────────── */
.mpd-cta-section {
  padding: 60px 0;
  border-top: 1px solid var(--border);
}

.mpd-cta-card {
  position: relative;
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  padding: 64px 48px;
  text-align: center;
}

.cta-bg-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
}

.cta-bg-1 {
  width: 400px;
  height: 400px;
  background: var(--highlight-glow);
  top: -150px;
  left: -100px;
  filter: blur(80px);
}

.cta-bg-2 {
  width: 300px;
  height: 300px;
  background: rgba(124, 106, 247, 0.06);
  bottom: -100px;
  right: -80px;
  filter: blur(60px);
}

.cta-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.cta-title {
  font-family: var(--font-clash);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 600;
  margin: 0 0 16px;
}

.cta-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 36px;
}

.cta-collaborate-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--highlight);
  color: var(--highlight-text);
  padding: 14px 36px;
  border-radius: 100px;
  font-family: var(--font-satoshi);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  will-change: transform;
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

  .mpd-cta-card {
    padding: 40px 24px;
    border-radius: 16px;
  }

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

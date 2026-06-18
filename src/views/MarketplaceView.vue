<template>
  <main class="marketplace-view">
    <!-- Cursor follow dot -->
    <div class="cursor-dot" ref="cursorDot"></div>

    <div class="container">

      <!-- ── Header ─────────────────────────────────────── -->
      <section class="mp-header">
        <div class="mp-badge" ref="badgeEl">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <span class="shimmer">{{ t('marketplace.badge') }}</span>
        </div>

        <h1 class="mp-title" ref="titleEl">
          <span v-for="(word, wi) in titleWords" :key="wi" class="title-word">
            <span class="title-word-inner">{{ word }}</span>
          </span>
        </h1>

        <p class="mp-subtitle" ref="subtitleEl">{{ t('marketplace.subtitle') }}</p>

        <!-- Filter tabs -->
        <div class="filter-tabs" ref="filterTabsEl">
          <button
            v-for="f in filters"
            :key="f.value"
            class="filter-tab"
            :class="{ active: activeFilter === f.value }"
            @click="setFilter(f.value)"
          >{{ f.label }}</button>
        </div>
      </section>

      <!-- ── Templates Grid ──────────────────────────────── -->
      <section class="templates-grid" ref="gridEl" @mouseleave="onCardLeave">
        <router-link
          v-for="(tpl, i) in filteredTemplates"
          :key="tpl.slug"
          :to="`/marketplace/${tpl.slug}`"
          class="template-card"
          :class="{ 'card-stagger': i % 2 === 1 }"
          @mouseenter="onCardHover(i)"
          @mousemove="onCardMouseMove($event, i)"
        >
          <!-- Preview area -->
          <div class="card-preview" :style="{ background: tpl.colorBackground }">
            <!-- Animated grid overlay -->
            <div class="preview-grid"></div>
            <!-- Accent glow -->
            <div class="preview-glow" :style="{ background: tpl.accentColor }"></div>
            <!-- Template number -->
            <div class="preview-num">{{ tpl.num }}</div>
            <!-- Demo badge -->
            <div class="demo-badge">
              <span class="demo-dot"></span>
              {{ t('marketplace.demoBadge') }}
            </div>
            <!-- Category pill -->
            <div class="category-pill">{{ tpl.category }}</div>
            <!-- Floating accent shapes -->
            <div class="shape shape-1" :style="{ borderColor: tpl.accentColor }"></div>
            <div class="shape shape-2" :style="{ background: tpl.accentColor }"></div>
          </div>

          <!-- Info -->
          <div class="card-info">
            <div class="card-meta">
              <span class="card-num">{{ tpl.num }}</span>
              <span class="card-year">{{ tpl.year }}</span>
            </div>
            <h3 class="card-title">{{ getTranslated(tpl.title) }}</h3>
            <p class="card-subtitle">{{ getTranslated(tpl.subtitle) }}</p>
            <div class="card-tags">
              <span v-for="tag in tpl.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="card-cta">
              <span class="view-link">{{ t('marketplace.viewTemplate') }} →</span>
            </div>
          </div>
        </router-link>

        <!-- Empty state -->
        <p v-if="filteredTemplates.length === 0" class="empty-state">
          {{ state.lang === 'vi' ? 'Chưa có mẫu trong danh mục này.' : 'No templates in this category yet.' }}
        </p>
      </section>

      <!-- ── Stats bar ───────────────────────────────────── -->
      <section class="stats-bar" ref="statsEl">
        <div class="stat-item" v-for="s in statsData" :key="s.label">
          <div class="stat-val" ref="statValEls">{{ s.display }}</div>
          <div class="stat-label">{{ state.lang === 'vi' ? s.labelVi : s.labelEn }}</div>
        </div>
      </section>

      <!-- ── CTA ─────────────────────────────────────────── -->
      <section class="mp-cta" ref="ctaEl">
        <div class="cta-inner">
          <!-- Morphing background shapes -->
          <div class="cta-shape cta-shape-1"></div>
          <div class="cta-shape cta-shape-2"></div>

          <p class="cta-label" ref="ctaLabelEl">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            {{ t('marketplace.ctaLabel') }}
          </p>
          <h2 class="cta-heading" ref="ctaHeadingEl">{{ t('marketplace.ctaHeading') }}</h2>
          <router-link
            to="/contact"
            class="cta-btn"
            ref="ctaBtn"
            @mouseenter="onCtaBtnHover"
            @mouseleave="onCtaBtnLeave"
          >
            <span class="cta-btn-text">{{ t('marketplace.ctaBtn') }}</span>
            <span class="cta-btn-ripple" ref="ctaBtnRipple"></span>
          </router-link>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { templates } from '../data/templates.js'
import { useLang } from '../data/translations.js'

gsap.registerPlugin(ScrollTrigger)

const { state, t } = useLang()

// ─── Helpers ────────────────────────────────────────────────────────────────
const getTranslated = (obj) =>
  obj && typeof obj === 'object' ? (obj[state.lang] ?? obj.en ?? obj) : obj

// ─── Title words ─────────────────────────────────────────────────────────────
const titleWords = computed(() => t('marketplace.title').split(' '))

// ─── Filters ─────────────────────────────────────────────────────────────────
const activeFilter = ref('all')

const filters = computed(() => [
  { value: 'all', label: t('marketplace.filterAll') },
  { value: 'enterprise', label: t('marketplace.filterEnterprise') },
  { value: 'branding', label: t('marketplace.filterBranding') },
  { value: 'education', label: t('marketplace.filterEducation') },
  { value: 'hospitality', label: t('marketplace.filterHospitality') },
  { value: 'real-estate', label: t('marketplace.filterRealEstate') },
  { value: 'corporate', label: t('marketplace.filterCorporate') },
  { value: 'ecommerce', label: t('marketplace.filterEcommerce') },
  { value: 'healthcare', label: t('marketplace.filterHealthcare') },
])

const filteredTemplates = computed(() => {
  if (activeFilter.value === 'all') return templates
  return templates.filter(t => t.category === activeFilter.value)
})

function setFilter(value) {
  activeFilter.value = value
}

// ─── Stats ───────────────────────────────────────────────────────────────────
const statsData = [
  { display: '8+', labelEn: 'Template Categories', labelVi: 'Danh mục mẫu' },
  { display: '100%', labelEn: 'Custom Tailored', labelVi: 'Tùy chỉnh hoàn toàn' },
  { display: '24h', labelEn: 'Response Time', labelVi: 'Thời gian phản hồi' },
  { display: '∞', labelEn: 'Possibilities', labelVi: 'Khả năng' },
]

// ─── Template refs ────────────────────────────────────────────────────────────
const badgeEl = ref(null)
const titleEl = ref(null)
const subtitleEl = ref(null)
const filterTabsEl = ref(null)
const gridEl = ref(null)
const statsEl = ref(null)
const ctaEl = ref(null)
const ctaBtn = ref(null)
const ctaLabelEl = ref(null)
const ctaHeadingEl = ref(null)
const ctaBtnRipple = ref(null)
const cursorDot = ref(null)

// ─── Cursor follow ────────────────────────────────────────────────────────────
let cursorRaf = null
let targetX = 0, targetY = 0

function onMouseMove(e) {
  targetX = e.clientX
  targetY = e.clientY
}

function animateCursorDot() {
  if (cursorDot.value) {
    gsap.to(cursorDot.value, {
      x: targetX,
      y: targetY,
      duration: 0.15,
      ease: 'power2.out',
      overwrite: true,
    })
  }
  cursorRaf = requestAnimationFrame(animateCursorDot)
}

// ─── Card hover effects ───────────────────────────────────────────────────────
const hoveredCard = ref(-1)

function onCardHover(index) {
  hoveredCard.value = index
  const cards = gridEl.value?.querySelectorAll('.template-card')
  if (!cards?.length) return

  cards.forEach((card, i) => {
    const preview = card.querySelector('.card-preview')
    const title = card.querySelector('.card-title')
    const viewLink = card.querySelector('.view-link')
    const glow = card.querySelector('.preview-glow')
    const shape1 = card.querySelector('.shape-1')
    const shape2 = card.querySelector('.shape-2')

    if (i === index) {
      gsap.to(preview, { scale: 1.03, duration: 0.6, ease: 'power3.out' })
      gsap.to(title, { color: 'var(--highlight)', duration: 0.3, ease: 'power2.out' })
      gsap.to(card, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      gsap.to(viewLink, { x: 6, color: 'var(--highlight)', duration: 0.3, ease: 'power2.out' })
      gsap.to(glow, { opacity: 0.25, scale: 1.4, duration: 0.6, ease: 'power3.out' })
      gsap.to(shape1, { rotate: 45, scale: 1.2, duration: 0.6, ease: 'back.out(1.7)' })
      gsap.to(shape2, { rotate: -30, scale: 0.8, duration: 0.6, ease: 'back.out(1.7)' })
    } else {
      gsap.to(preview, { scale: 1, duration: 0.5, ease: 'power3.out' })
      gsap.to(title, { color: 'var(--text-primary)', duration: 0.3, ease: 'power2.out' })
      gsap.to(card, { opacity: 0.38, duration: 0.4, ease: 'power2.out' })
      gsap.to(viewLink, { x: 0, color: 'var(--text-secondary)', duration: 0.3, ease: 'power2.out' })
      gsap.to(glow, { opacity: 0.08, scale: 1, duration: 0.5, ease: 'power3.out' })
      gsap.to(shape1, { rotate: 0, scale: 1, duration: 0.5, ease: 'power3.out' })
      gsap.to(shape2, { rotate: 0, scale: 1, duration: 0.5, ease: 'power3.out' })
    }
  })
}

function onCardMouseMove(e, index) {
  if (hoveredCard.value !== index) return
  const cards = gridEl.value?.querySelectorAll('.template-card')
  if (!cards?.[index]) return
  const card = cards[index]
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  gsap.to(card, {
    rotateY: x * 4,
    rotateX: -y * 4,
    duration: 0.4,
    ease: 'power2.out',
    transformPerspective: 800,
  })
}

function onCardLeave() {
  hoveredCard.value = -1
  const cards = gridEl.value?.querySelectorAll('.template-card')
  if (!cards?.length) return

  cards.forEach((card) => {
    const preview = card.querySelector('.card-preview')
    const title = card.querySelector('.card-title')
    const viewLink = card.querySelector('.view-link')
    const glow = card.querySelector('.preview-glow')
    const shape1 = card.querySelector('.shape-1')
    const shape2 = card.querySelector('.shape-2')

    gsap.to(preview, { scale: 1, duration: 0.5, ease: 'power3.out' })
    gsap.to(title, { color: 'var(--text-primary)', duration: 0.3, ease: 'power2.out' })
    gsap.to(card, { opacity: 1, rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power3.out' })
    gsap.to(viewLink, { x: 0, color: 'var(--text-secondary)', duration: 0.3, ease: 'power2.out' })
    gsap.to(glow, { opacity: 0.08, scale: 1, duration: 0.5, ease: 'power3.out' })
    gsap.to(shape1, { rotate: 0, scale: 1, duration: 0.5, ease: 'power3.out' })
    gsap.to(shape2, { rotate: 0, scale: 1, duration: 0.5, ease: 'power3.out' })
  })
}

// ─── CTA button magnetic effect ───────────────────────────────────────────────
function onCtaBtnHover(e) {
  const el = ctaBtn.value?.$el || ctaBtn.value
  if (!el) return
  gsap.killTweensOf(el)
  gsap.timeline()
    .to(el, { scale: 1.06, duration: 0.2, ease: 'power2.out' })
    .to(el, { scale: 0.98, duration: 0.12, ease: 'power2.inOut' })
    .to(el, { scale: 1.02, duration: 0.2, ease: 'back.out(2)' })
}

function onCtaBtnLeave() {
  const el = ctaBtn.value?.$el || ctaBtn.value
  if (!el) return
  gsap.to(el, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })
}

// ─── Filter change animation ──────────────────────────────────────────────────
watch(filteredTemplates, () => {
  nextTick(() => {
    const cards = gridEl.value?.querySelectorAll('.template-card')
    if (!cards?.length) return
    gsap.killTweensOf(cards)
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
    )
  })
})

// ─── ScrollTrigger cleanup ────────────────────────────────────────────────────
const _sts = []

onMounted(() => {
  // ── Cursor dot ────────────────────────────────────────────────────────────
  document.addEventListener('mousemove', onMouseMove, { passive: true })
  animateCursorDot()

  // ── 1. Header entrance timeline ───────────────────────────────────────────
  const tl = gsap.timeline({ delay: 0.06, defaults: { ease: 'power3.out' } })

  tl.fromTo(badgeEl.value,
    { opacity: 0, x: -20, scale: 0.9 },
    { opacity: 1, x: 0, scale: 1, duration: 0.55 }
  )
  .fromTo(
    titleEl.value.querySelectorAll('.title-word-inner'),
    { yPercent: 120, skewY: 6 },
    { yPercent: 0, skewY: 0, duration: 0.9, stagger: 0.1 },
    0.2
  )
  .fromTo(subtitleEl.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.65 },
    0.65
  )
  .fromTo(
    filterTabsEl.value.querySelectorAll('.filter-tab'),
    { opacity: 0, y: 14, scale: 0.92 },
    { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.07 },
    0.85
  )

  // ── 2. Badge shimmer pulse ────────────────────────────────────────────────
  gsap.to(badgeEl.value, {
    boxShadow: '0 0 20px rgba(188,255,103,0.2)',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1,
  })

  // ── 3. Cards reveal on scroll ─────────────────────────────────────────────
  const cards = gridEl.value?.querySelectorAll('.template-card')
  if (cards?.length) {
    gsap.set(cards, { opacity: 0, y: 80, scale: 0.94 })

    _sts.push(
      ScrollTrigger.create({
        trigger: gridEl.value,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: { each: 0.13, from: 'start' },
            ease: 'power3.out',
          })
        },
      })
    )
  }

  // ── 4. Stats bar reveal ───────────────────────────────────────────────────
  if (statsEl.value) {
    const statItems = statsEl.value.querySelectorAll('.stat-item')
    gsap.set(statItems, { opacity: 0, y: 30 })

    _sts.push(
      ScrollTrigger.create({
        trigger: statsEl.value,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(statItems, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'back.out(1.4)',
          })
        },
      })
    )
  }

  // ── 5. CTA section reveal ─────────────────────────────────────────────────
  if (ctaEl.value) {
    const ctaChildren = [ctaLabelEl.value, ctaHeadingEl.value, ctaBtn.value?.$el || ctaBtn.value]
    gsap.set(ctaChildren.filter(Boolean), { opacity: 0, y: 32 })

    _sts.push(
      ScrollTrigger.create({
        trigger: ctaEl.value,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(ctaChildren.filter(Boolean), {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: 'power3.out',
          })
        },
      })
    )

    // CTA morphing shapes animation
    const shapes = ctaEl.value.querySelectorAll('.cta-shape')
    gsap.to(shapes[0], {
      x: 30,
      y: -20,
      scale: 1.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to(shapes[1], {
      x: -20,
      y: 30,
      scale: 0.85,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1,
    })
  }
})

onUnmounted(() => {
  _sts.forEach(st => st.kill())
  _sts.length = 0
  document.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(cursorRaf)
})
</script>

<style scoped>
/* ── Page layout ─────────────────────────────────────────────────────────── */
.marketplace-view {
  padding-top: 140px;
  padding-bottom: 100px;
}

/* ── Cursor dot ──────────────────────────────────────────────────────────── */
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--highlight);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  will-change: transform;
  transform: translate(-50%, -50%);
}

/* ── Header ──────────────────────────────────────────────────────────────── */
.mp-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 88px;
}

.mp-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--highlight-glow);
  color: var(--highlight);
  border-radius: 100px;
  padding: 7px 18px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin-bottom: 24px;
  border: 1px solid rgba(188, 255, 103, 0.15);
  will-change: box-shadow;
}

.mp-title {
  font-family: var(--font-clash);
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1.12;
  font-weight: 600;
  margin: 0 0 22px;
}

.title-word {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  margin-right: 0.26em;
}

.title-word:last-child { margin-right: 0; }

.title-word-inner { display: block; }

.mp-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.72;
  margin: 0 0 36px;
}

/* ── Filter tabs ─────────────────────────────────────────────────────────── */
.filter-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 8px 22px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-satoshi);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
}

.filter-tab:hover {
  border-color: var(--border-strong);
  color: var(--text-primary);
  transform: translateY(-1px);
}

.filter-tab.active {
  background: var(--highlight);
  border-color: var(--highlight);
  color: var(--highlight-text);
  font-weight: 600;
}

/* ── Templates Grid ──────────────────────────────────────────────────────── */
.templates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 70px;
  row-gap: 0;
  align-items: start;
}

.card-stagger { margin-top: 56px; }

/* ── Template Card ───────────────────────────────────────────────────────── */
.template-card {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  will-change: opacity, transform;
  transform-style: preserve-3d;
}

/* Preview area */
.card-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 22px;
  border: 1px solid var(--border);
  will-change: transform;
}

/* Grid overlay */
.preview-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Accent glow blob */
.preview-glow {
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  opacity: 0.08;
  filter: blur(40px);
  will-change: opacity, transform;
  transition: none;
}

/* Template number */
.preview-num {
  position: absolute;
  bottom: 16px;
  left: 20px;
  font-family: var(--font-clash);
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255,255,255,0.06);
  line-height: 1;
  user-select: none;
}

/* Demo badge */
.demo-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 100px;
  padding: 5px 12px;
  font-size: 0.68rem;
  font-weight: 600;
  color: #fff;
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

/* Category pill */
.category-pill {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 100px;
  padding: 4px 12px;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  text-transform: capitalize;
}

/* Floating shapes */
.shape {
  position: absolute;
  will-change: transform;
}

.shape-1 {
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-radius: 12px;
  bottom: 20px;
  right: 20px;
  opacity: 0.3;
}

.shape-2 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 50%;
  right: 80px;
  opacity: 0.4;
}

/* ── Card Info ───────────────────────────────────────────────────────────── */
.card-info { padding: 0 2px; }

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-num {
  font-family: var(--font-clash);
  font-size: 0.72rem;
  color: var(--highlight);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.card-year {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.card-title {
  font-family: var(--font-clash);
  font-size: 1.35rem;
  font-weight: 500;
  margin: 0 0 7px;
  line-height: 1.3;
  will-change: color;
}

.card-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0 0 14px;
  line-height: 1.55;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.tag {
  font-size: 0.7rem;
  padding: 4px 12px;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-family: var(--font-satoshi);
  font-weight: 500;
}

.card-cta { }

.view-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  will-change: transform, color;
  display: inline-block;
}

/* ── Stats bar ───────────────────────────────────────────────────────────── */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 100px;
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
}

.stat-item {
  padding: 32px 24px;
  text-align: center;
  border-right: 1px solid var(--border);
}

.stat-item:last-child { border-right: none; }

.stat-val {
  font-family: var(--font-clash);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--highlight);
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* ── CTA section ─────────────────────────────────────────────────────────── */
.mp-cta {
  margin-top: 100px;
  padding: 0 0 20px;
  border-top: 1px solid var(--border);
}

.cta-inner {
  position: relative;
  text-align: center;
  padding: 88px 32px 20px;
  overflow: hidden;
}

/* Morphing background shapes */
.cta-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
}

.cta-shape-1 {
  width: 300px;
  height: 300px;
  background: var(--highlight-glow);
  top: -80px;
  left: -60px;
  filter: blur(60px);
}

.cta-shape-2 {
  width: 200px;
  height: 200px;
  background: rgba(124, 106, 247, 0.06);
  bottom: -40px;
  right: -40px;
  filter: blur(50px);
}

.cta-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--highlight);
  margin-bottom: 20px;
}

.cta-heading {
  font-family: var(--font-clash);
  font-size: clamp(2rem, 4.5vw, 3.8rem);
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 40px;
}

.cta-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--highlight);
  color: var(--highlight-text);
  padding: 14px 34px;
  border-radius: 100px;
  font-family: var(--font-satoshi);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;
  will-change: transform;
}

.cta-btn-text { position: relative; z-index: 1; }

.cta-btn-ripple {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.15);
  border-radius: 100px;
  transform: scale(0);
  opacity: 0;
}

/* ── Empty state ─────────────────────────────────────────────────────────── */
.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--text-secondary);
  padding: 72px 0;
  font-size: 0.95rem;
}

/* ── Responsive — Tablet ─────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .templates-grid {
    column-gap: 28px;
    row-gap: 32px;
  }

  .card-stagger { margin-top: 40px; }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item:nth-child(2) { border-right: none; }
  .stat-item:nth-child(3) { border-top: 1px solid var(--border); }
  .stat-item:nth-child(4) { border-top: 1px solid var(--border); }
}

/* ── Responsive — Mobile ─────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .marketplace-view {
    padding-top: 96px;
    padding-bottom: 72px;
  }

  .mp-header {
    max-width: 100%;
    margin-bottom: 52px;
    padding: 0 4px;
  }

  .mp-title { font-size: clamp(1.9rem, 8vw, 2.8rem); }
  .mp-subtitle { font-size: 0.9rem; margin-bottom: 28px; }

  .filter-tabs {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .filter-tabs::-webkit-scrollbar { display: none; }

  .filter-tab {
    flex-shrink: 0;
    padding: 7px 18px;
    font-size: 0.82rem;
  }

  .templates-grid {
    grid-template-columns: 1fr;
    row-gap: 44px;
  }

  .card-stagger { margin-top: 0; }

  .card-preview { border-radius: 16px; }
  .card-title { font-size: 1.2rem; }
  .card-subtitle { font-size: 0.82rem; }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 60px;
  }

  .stat-val { font-size: 1.8rem; }

  .mp-cta { margin-top: 72px; }
  .cta-inner { padding: 52px 8px 0; }
  .cta-heading { font-size: clamp(1.7rem, 7vw, 2.8rem); margin-bottom: 28px; }
  .cta-btn { padding: 12px 26px; font-size: 0.92rem; }

  .cursor-dot { display: none; }
}

/* ── Responsive — Small phones ───────────────────────────────────────────── */
@media (max-width: 420px) {
  .marketplace-view { padding-top: 88px; }
  .mp-title { font-size: clamp(1.65rem, 9vw, 2rem); }
  .mp-badge { font-size: 0.65rem; padding: 6px 14px; }
  .card-tags { gap: 4px; }
  .tag { font-size: 0.65rem; padding: 3px 10px; }
  .stats-bar { grid-template-columns: 1fr 1fr; }
}
</style>

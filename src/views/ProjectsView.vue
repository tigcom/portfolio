<template>
  <main class="projects-view">
    <div class="container">

      <!-- ── Header ─────────────────────────────────────── -->
      <section class="projects-header">
        <div class="projects-badge" ref="badgeEl">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <span class="shimmer">{{ t('nav.projects') }}</span>
        </div>

        <h1 class="projects-title" ref="titleEl">
          <span v-for="(word, wi) in titleWords" :key="wi" class="title-word"><span class="title-word-inner">{{ word
              }}</span></span>
        </h1>

        <p class="projects-subtitle" ref="subtitleEl">
          {{ t('home.selectedProjectsDesc') }}
        </p>

        <!-- Filter tabs -->
        <div class="filter-tabs" ref="filterTabsEl">
          <button v-for="f in filters" :key="f.value" class="filter-tab" :class="{ active: activeFilter === f.value }"
            @click="setFilter(f.value)">{{ f.label }}</button>
        </div>
      </section>

      <!-- ── Projects Grid ───────────────────────────────── -->
      <section class="projects-grid" ref="gridEl" @mouseleave="onCardLeave">
        <router-link v-for="(project, i) in filteredProjects" :key="project.slug"
          :to="`/projects/${project.slug}`" class="project-card"
          :class="{ 'card-stagger': i % 2 === 1 }"
          @mouseenter="onCardHover(i)">
          <!-- Image -->
          <div class="card-img-wrapper" :class="specialCardClasses(project)"
            :style="{ backgroundColor: projectBg(project) }">
            <template v-if="project.slug === 'company-clean-hub'">
              <div class="phone-stack">
                <div v-for="(src, pi) in phoneThumbs(project)" :key="pi" class="phone"
                  :class="{ 'phone--back': pi === 1 }">
                  <img :src="src" :alt="getTranslated(project.title)" class="card-img" loading="lazy" />
                  <span class="phone-notch"></span>
                  <span class="phone-home"></span>
                  <span class="phone-btn phone-btn--power"></span>
                  <span class="phone-btn phone-btn--vol-up"></span>
                  <span class="phone-btn phone-btn--vol-down"></span>
                </div>
              </div>
            </template>
            <img v-else :src="project.img" :alt="getTranslated(project.title)" class="card-img" loading="lazy" />
          </div>

          <!-- Info -->
          <div class="card-info">
            <div class="card-meta">
              <span class="card-num">{{ project.num }}</span>
              <span class="card-year">{{ project.year }}</span>
            </div>
            <h3 class="card-title">{{ getTranslated(project.title) }}</h3>
            <p class="card-subtitle">{{ getTranslated(project.subtitle) }}</p>
            <div class="card-tags">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </router-link>

        <!-- Empty state -->
        <p v-if="filteredProjects.length === 0" class="empty-state">
          {{ state.lang === 'vi' ? 'Chưa có dự án trong danh mục này.' : 'No projects in this category yet.' }}
        </p>
      </section>

      <!-- ── CTA ─────────────────────────────────────────── -->
      <section class="projects-cta" ref="ctaEl">
        <p class="cta-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          {{ t('contact.getInTouch') }}
        </p>
        <h2 class="cta-heading">
          {{ state.lang === 'vi'
            ? 'Hãy cùng tạo ra ý tưởng lớn tiếp theo.'
            : "Let's create your next big idea." }}
        </h2>
        <router-link to="/contact" class="cta-btn" ref="ctaBtn" @mouseenter="onCtaHover">
          {{ t('contact.sendMessage') }} ↗
        </router-link>
      </section>

    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, getProjectBgColor } from '../data/projects.js'
import { useLang } from '../data/translations.js'

gsap.registerPlugin(ScrollTrigger)

const { state, t } = useLang()

// ─── Helpers ────────────────────────────────────────────────────────────────
const getTranslated = (obj) =>
  obj && typeof obj === 'object' ? (obj[state.lang] ?? obj.en ?? obj) : obj

// ─── Theme-aware thumbnail background ───────────────────────────────────────
const currentTheme = ref(document.documentElement.getAttribute('data-theme') || 'dark')
const projectBg = (project) => getProjectBgColor(project, currentTheme.value)

// ─── Special case projects (K+ / Company Clean Hub) — extra image padding ───
const SPECIAL_SLUGS = ['kplus-digital-banking', 'company-clean-hub']

const specialCardClasses = (project) => {
  if (!SPECIAL_SLUGS.includes(project.slug)) return ''
  return project.slug === 'company-clean-hub'
    ? 'card-img--special card-img--phone'
    : 'card-img--special'
}

// Ảnh màn hình cho mockup 2 điện thoại (Clean Hub)
const phoneThumbs = (project) => {
  if (project.slug !== 'company-clean-hub') return []
  return [
    project.img,
    '/image/projects/company-clean-hub/thumbnail2.png',
  ]
}

// ─── Title words for word-by-word reveal ────────────────────────────────────
const titleWords = computed(() => t('home.selectedProjects').split(' '))

// ─── Filters ────────────────────────────────────────────────────────────────
const FRONTEND_TAGS = ['Vue', 'React', 'Next.js', 'Angular', 'Nuxt', 'Svelte']

const activeFilter = ref('all')

const filters = computed(() => [
  { value: 'all', label: state.lang === 'vi' ? 'Tất cả' : 'All' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'backend', label: 'Backend' },
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  if (activeFilter.value === 'fullstack')
    return projects.filter(p => p.tags.some(tag => FRONTEND_TAGS.some(f => tag.includes(f))))
  return projects.filter(p => !p.tags.some(tag => FRONTEND_TAGS.some(f => tag.includes(f))))
})

function setFilter(value) {
  activeFilter.value = value
}

// ─── Template refs ───────────────────────────────────────────────────────────
const badgeEl = ref(null)
const titleEl = ref(null)
const subtitleEl = ref(null)
const filterTabsEl = ref(null)
const gridEl = ref(null)
const ctaEl = ref(null)
const ctaBtn = ref(null)

// ─── GSAP hover effects for project cards ───────────────────────────────────
const hoveredCard = ref(-1)

function onCtaHover() {
  const el = ctaBtn.value?.$el || ctaBtn.value
  if (!el) return
  gsap.killTweensOf(el)
  gsap.timeline()
    .to(el, { scale: 1.05, duration: 0.2, ease: 'power2.out' })
    .to(el, { scale: 0.97, duration: 0.15, ease: 'power2.inOut' })
    .to(el, { scale: 1.0, duration: 0.25, ease: 'back.out(2.5)' })
}

function onCardHover(index) {
  hoveredCard.value = index
  const cards = gridEl.value?.querySelectorAll('.project-card')
  if (!cards?.length) return

  cards.forEach((card, i) => {
    const wrapper = card.querySelector('.card-img-wrapper')
    const title = card.querySelector('.card-title')

    if (i === index) {
      // Hovered card: zoom image (via --card-zoom so the border scales too)
      gsap.to(wrapper, { '--card-zoom': 1.05, duration: 0.55, ease: 'cubic-bezier(0.45, 0, 0.55, 1)' })
      gsap.to(title, { color: 'var(--highlight)', duration: 0.28, ease: 'power2.out' })
      gsap.to(card, { opacity: 1, duration: 0.4, ease: 'cubic-bezier(0.25, 0.8, 0.25, 1)' })
    } else {
      // Other cards: reset image + dim
      gsap.to(wrapper, { '--card-zoom': 1, duration: 0.55, ease: 'cubic-bezier(0.45, 0, 0.55, 1)' })
      gsap.to(title, { color: 'var(--text-primary)', duration: 0.28, ease: 'power2.out' })
      gsap.to(card, { opacity: 0.38, duration: 0.4, ease: 'cubic-bezier(0.25, 0.8, 0.25, 1)' })
    }
  })
}

function onCardLeave() {
  hoveredCard.value = -1
  const cards = gridEl.value?.querySelectorAll('.project-card')
  if (!cards?.length) return

  cards.forEach((card) => {
    const wrapper = card.querySelector('.card-img-wrapper')
    const title = card.querySelector('.card-title')

    // Reset all cards to normal state
    gsap.to(wrapper, { '--card-zoom': 1, duration: 0.55, ease: 'cubic-bezier(0.45, 0, 0.55, 1)' })
    gsap.to(title, { color: 'var(--text-primary)', duration: 0.28, ease: 'power2.out' })
    gsap.to(card, { opacity: 1, duration: 0.4, ease: 'cubic-bezier(0.25, 0.8, 0.25, 1)' })
  })
}

// ─── Animate cards in when filter changes ───────────────────────────────────
watch(filteredProjects, () => {
  nextTick(() => {
    const cards = gridEl.value?.querySelectorAll('.project-card')
    if (!cards?.length) return
    gsap.killTweensOf(cards)
    gsap.fromTo(
      cards,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: 'power3.out' }
    )
  })
})

// ─── ScrollTrigger cleanup ───────────────────────────────────────────────────
const _sts = []
let themeObserver = null

onMounted(() => {
  // ── 0. Track theme changes for thumbnail backgrounds ────────────────────
  themeObserver = new MutationObserver(() => {
    currentTheme.value = document.documentElement.getAttribute('data-theme') || 'dark'
  })
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  // ── 1. Header entrance timeline ──────────────────────────────────────────
  const tl = gsap.timeline({ delay: 0.08, defaults: { ease: 'power3.out' } })

  tl.fromTo(
    badgeEl.value,
    { opacity: 0, x: -18 },
    { opacity: 1, x: 0, duration: 0.5 }
  )
    .fromTo(
      titleEl.value.querySelectorAll('.title-word-inner'),
      { yPercent: 115, skewY: 5 },
      { yPercent: 0, skewY: 0, duration: 0.85, stagger: 0.11 },
      0.22
    )
    .fromTo(
      subtitleEl.value,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.68
    )
    .fromTo(
      filterTabsEl.value.querySelectorAll('.filter-tab'),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.09 },
      0.85
    )

  // ── 2. Project cards reveal on scroll ────────────────────────────────────
  const cards = gridEl.value?.querySelectorAll('.project-card')
  if (cards?.length) {
    gsap.set(cards, { opacity: 0, y: 64 })

    _sts.push(
      ScrollTrigger.create({
        trigger: gridEl.value,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.82,
            stagger: {
              each: 0.12,
              from: 'start',
            },
            ease: 'power3.out',
          })
        },
      })
    )
  }

  // ── 3. CTA section reveal ────────────────────────────────────────────────
  if (ctaEl.value) {
    gsap.set(Array.from(ctaEl.value.children), { opacity: 0, y: 28 })

    _sts.push(
      ScrollTrigger.create({
        trigger: ctaEl.value,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(Array.from(ctaEl.value.children), {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.13,
            ease: 'power3.out',
          })
        },
      })
    )
  }
})

onUnmounted(() => {
  themeObserver?.disconnect()
  _sts.forEach(st => st.kill())
  _sts.length = 0
})
</script>

<style scoped>
/* ── Page layout ────────────────────────────────────────────────────────── */
.projects-view {
  padding-top: 140px;
  padding-bottom: 100px;
}

/* ── Header ─────────────────────────────────────────────────────────────── */
.projects-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 88px;
}

/* Badge / label pill */
.projects-badge {
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
  border: 1px solid rgba(181, 255, 109, 0.15);
}

/* Big title */
.projects-title {
  font-family: var(--font-clash);
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1.12;
  font-weight: 600;
  margin: 0 0 22px;
  /* words flow inline, wrapping naturally */
}

/* Each word is a clip container */
.title-word {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  margin-right: 0.26em;
}

.title-word:last-child {
  margin-right: 0;
}

.title-word-inner {
  display: block;
  /* GSAP will animate yPercent & skewY on this element */
}

/* Subtitle */
.projects-subtitle {
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
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.filter-tab:hover {
  border-color: var(--border-strong);
  color: var(--text-primary);
}

.filter-tab.active {
  background: var(--highlight);
  border-color: var(--highlight);
  color: var(--highlight-text);
  font-weight: 600;
}

/* ── Projects Grid ───────────────────────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 70px;
  row-gap: 0;
  align-items: start;
}

/* Right-column cards are pushed down to create masonry feel */
.card-stagger {
  margin-top: 56px;
}

/* ── Project Card ────────────────────────────────────────────────────────── */
.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  will-change: opacity, transform;
  /* GSAP handles all hover effects */
}

/* Image container */
.card-img-wrapper {
  position: relative;
  --card-zoom: 1;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 22px;
  border: 1px solid var(--border);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  will-change: transform;
  transform: scale(var(--card-zoom, 1));
}

/* ── Special case cards (K+ / Company Clean Hub) ─────────────────────────── */
/* Container: padding + lớp khung nằm phía sau ảnh */
.card-img--special {
  position: relative;
  padding: 46px;
}

/* Lớp khung trắng (border) — nằm phía sau ảnh */
.card-img--special::before {
  content: '';
  position: absolute;
  inset: 40px;                 /* = padding 46px − border 6px */
  border: 6px solid rgba(250, 250, 250, 0.804);
  border-radius: 20px;         /* = 14px ảnh + 6px border */
  pointer-events: none;
  transform: scale(var(--card-zoom, 1));
}

/* Ảnh: bỏ border, giữ bo góc + bóng + backdrop blur */
.card-img--special .card-img {
  position: relative;
  border: none;
  border-radius: 14px;
  filter: drop-shadow(18px 18px 13px rgba(0, 0, 0, 0.305));
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Clean Hub: ảnh mobile → mockup iPhone */
.card-img--phone {
  padding: 32px; /* giảm padding để máy to hơn (mặc định 46px) */
}

.card-img--phone::before {
  display: none;
}

.card-img--phone .phone-stack {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  transform: scale(var(--card-zoom, 1));
}

.card-img--phone .phone {
  position: relative;
  height: 100%;
  aspect-ratio: 392 / 846;
  flex-shrink: 0;
  padding: 3px;                 /* viền đen mỏng (bezel) */
  background: #0b0d10;
  border: 2px solid #aeb4bc;    /* viền bạc kim loại */
  border-radius: 25px;          /* = 20px màn hình + 3px + 2px */
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.45);
}

.card-img--phone .phone--back {
  transform: translateY(14px);
}

.card-img--phone .card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
  border-radius: 20px;
  filter: none;
}

/* Notch (dynamic island) + chấm camera */
.card-img--phone .phone-notch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 14px;
  background: #000;
  border-radius: 999px;
}
.card-img--phone .phone-notch::after {
  content: '';
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1a2030;
}

/* Home indicator (thanh swipe trắng) */
.card-img--phone .phone-home {
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 999px;
}

/* Nút nguồn + âm lượng (trồi ra ngoài viền) */
.card-img--phone .phone-btn {
  position: absolute;
  width: 3px;
  background: #aeb4bc;
  border-radius: 2px;
}
.card-img--phone .phone-btn--power {
  right: -6px;
  top: 32%;
  height: 46px;
}
.card-img--phone .phone-btn--vol-up {
  left: -6px;
  top: 18%;
  height: 28px;
}
.card-img--phone .phone-btn--vol-down {
  left: -6px;
  top: 27%;
  height: 28px;
}

/* Remove CSS hover rule - GSAP handles this */



/* Remove CSS hover rule - GSAP handles this */

/* ── Card Info ───────────────────────────────────────────────────────────── */
.card-info {
  padding: 0 2px;
}

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
  /* GSAP handles color animation */
}

/* Remove CSS hover rule - GSAP handles this */

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

/* ── CTA section ─────────────────────────────────────────────────────────── */
.projects-cta {
  margin-top: 130px;
  text-align: center;
  padding: 88px 32px 20px;
  border-top: 1px solid var(--border);
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
  transition: transform 0.3s ease, background 0.3s ease;
}

.cta-btn:hover {
  transform: scale(1.04);
  background: var(--highlight-dark);
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
  .projects-grid {
    column-gap: 28px;
    row-gap: 32px;
  }

  .card-stagger {
    margin-top: 40px;
  }
}

/* ── Responsive — Mobile ─────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .projects-view {
    padding-top: 96px;
    padding-bottom: 72px;
  }

  .projects-header {
    max-width: 100%;
    margin-bottom: 52px;
    padding: 0 4px;
  }

  .projects-title {
    font-size: clamp(1.9rem, 8vw, 2.8rem);
    justify-content: flex-start;
  }

  .projects-subtitle {
    font-size: 0.9rem;
    margin-bottom: 28px;
  }

  /* Filter tabs: full-width scroll on mobile */
  .filter-tabs {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .filter-tabs::-webkit-scrollbar {
    display: none;
  }

  .filter-tab {
    flex-shrink: 0;
    padding: 7px 18px;
    font-size: 0.82rem;
  }

  /* Single column grid */
  .projects-grid {
    grid-template-columns: 1fr;
    row-gap: 44px;
  }

  .card-stagger {
    margin-top: 0;
  }

  .card-img-wrapper {
    border-radius: 16px;
  }

  .card-img--special {
    padding: 32px;
  }

  .card-img--special::before {
    inset: 26px; /* = 32px padding − 6px border */
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-subtitle {
    font-size: 0.82rem;
  }

  /* CTA */
  .projects-cta {
    margin-top: 72px;
    padding: 52px 8px 0;
  }

  .cta-heading {
    font-size: clamp(1.7rem, 7vw, 2.8rem);
    margin-bottom: 28px;
  }

  .cta-btn {
    padding: 12px 26px;
    font-size: 0.92rem;
  }
}

/* ── Responsive — Small phones ───────────────────────────────────────────── */
@media (max-width: 420px) {
  .projects-view {
    padding-top: 88px;
  }

  .projects-title {
    font-size: clamp(1.65rem, 9vw, 2rem);
  }

  .projects-badge {
    font-size: 0.65rem;
    padding: 6px 14px;
  }

  .card-tags {
    gap: 4px;
  }

  .tag {
    font-size: 0.65rem;
    padding: 3px 10px;
  }
}
</style>

<template>
  <div class="tic-detail-wrapper">
    <article class="tic-detail-article">

      <!-- 1. Top Breadcrumb & Year Row -->
      <div class="top-meta-bar">
        <nav class="breadcrumb" :aria-label="t('common.backToProjects')">
          <router-link to="/" :aria-label="t('nav.home')">
            <i class="fas fa-home" aria-hidden="true"></i>
          </router-link>
          <i class="fas fa-chevron-right sep" aria-hidden="true"></i>
          <router-link to="/projects">{{ t('nav.projects') }}</router-link>
          <i class="fas fa-chevron-right sep" aria-hidden="true"></i>
          <span class="current">{{ project.shortTitle || project.title }}</span>
        </nav>
        <div class="year-pill">{{ project.year }}</div>
      </div>

      <!-- 2. Full Width Top Cover Banner Image -->
      <header class="cover-banner-header">
        <!-- The banner shows only the middle 50% of the capture's height.
             Cropping here with object-fit keeps the source file whole, so the
             lightbox (doc.images[0]) still opens the full image. -->
        <div
          class="cover-banner-wrap"
          :style="{ aspectRatio: coverAspect }"
          role="button"
          tabindex="0"
          :aria-label="`${project.title} — ${t('common.viewHighRes')}`"
          @click="openLightbox(0)"
          @keydown.enter.prevent="openLightbox(0)"
          @keydown.space.prevent="openLightbox(0)"
        >
          <img
            :src="project.heroImg"
            :alt="project.title"
            class="cover-img"
            :style="{ objectPosition: coverFocus }"
            :width="heroSize.w"
            :height="heroSize.h"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <!-- 3. Title Row (Title Left + Live Demo Button Right) -->
        <div class="title-action-row">
          <h1 class="project-title">{{ project.title }}</h1>
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-live-demo"
          >
            <span>{{ t('common.checkItOut') }}</span>
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <!-- 4. Intro Description & Roles/Client Meta Grid -->
        <div class="intro-meta-grid">
          <p class="intro-desc">{{ project.overview }}</p>
          <dl class="meta-details-col">
            <div class="meta-row">
              <dt class="meta-label">{{ t('common.role' ) }}:</dt>
              <dd class="meta-val">{{ project.role }}</dd>
            </div>
            <div class="meta-row">
              <dt class="meta-label">{{ t('common.client') }}:</dt>
              <dd class="meta-val">{{ project.client }}</dd>
            </div>
          </dl>
        </div>

        <!-- 5. Category Tech Tags Row -->
        <ul class="tags-row">
          <li v-for="tag in project.techStack" :key="tag" class="tag-pill">{{ tag }}</li>
        </ul>
      </header>

      <!-- 6. Main 2-Column Content Layout -->
      <div class="main-docs-layout">
        <!-- Left Main Content Column -->
        <div class="docs-main-column">

          <!-- Sections are driven entirely by project.sections so the headings
               and the table of contents can never disagree. -->
          <section
            v-for="section in doc.sections"
            :id="section.id"
            :key="section.id"
            class="docs-section"
          >
            <h2 class="section-h2">{{ sectionTitle(section) }}</h2>
            <p class="section-text">{{ section.body }}</p>
            <DocFigure
              :images="section.images"
              :label="t('common.viewHighRes')"
              @open="openLightbox"
            />

            <template v-for="child in section.children" :key="child.id">
              <h3 :id="child.id" class="section-h3">{{ child.heading }}</h3>
              <p class="section-text">{{ child.body }}</p>
              <DocFigure
                :images="child.images"
                :label="t('common.viewHighRes')"
                @open="openLightbox"
              />
            </template>
          </section>

          <!-- Bottom Previous / Next Project Navigation Cards -->
          <nav class="project-bottom-nav">
            <router-link :to="`/projects/${project.prevSlug}`" class="nav-card prev">
              <div class="nav-label">
                <i class="fas fa-chevron-left" aria-hidden="true"></i>
                {{ t('common.previousPage') }}
              </div>
              <div class="nav-title">{{ project.prevTitle }}</div>
            </router-link>
            <router-link :to="`/projects/${project.nextSlug}`" class="nav-card next">
              <div class="nav-label">
                {{ t('common.nextPage') }}
                <i class="fas fa-chevron-right" aria-hidden="true"></i>
              </div>
              <div class="nav-title">{{ project.nextTitle }}</div>
            </router-link>
          </nav>
        </div>

        <!-- Right Sticky Sidebar Column (Table of Contents) -->
        <aside class="docs-sidebar-column">
          <TicFactoryToc :items="tocItems" />
        </aside>
      </div>

    </article>

    <!-- Lightbox Modal for Full Resolution View -->
    <GalleryLightbox
      :index="lightboxIndex"
      :images="doc.images"
      :title="project.shortTitle || project.title"
      @close="closeLightbox"
      @prev="prevImage"
      @next="nextImage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLang } from '../../data/translations.js'
import TicFactoryToc from './TicFactoryToc.vue'
import DocFigure from './DocFigure.vue'
import GalleryLightbox from './gallery/GalleryLightbox.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const { t } = useLang()

/** `01 — Heading` for numbered sections, plain heading for sub-sections. */
const sectionTitle = (section) => (section.num ? `${section.num} — ${section.heading}` : section.heading)

/* ─────────────────────────────────────────────────────────────────────────
   KNOB 1 — cover banner crop.
   COVER_SHOWN  — fraction of the capture's height the banner shows.
                  0.5 = current. 1 would show the whole capture.
   COVER_FOCUS_Y — where that window sits vertically, 0% = top of the capture,
                  50% = dead centre, 100% = bottom. Lower it to raise the
                  visible slice.
   ───────────────────────────────────────────────────────────────────────── */
const COVER_SHOWN = 0.5
const COVER_FOCUS_Y = 38

const heroSize = computed(() => props.project.heroImgSize || { w: 1864, h: 999 })

/**
 * Aspect ratio for the cover banner. Declaring it up front (rather than
 * letting the image size itself) reserves the box before the capture loads,
 * which is what stops the whole article shifting down on first paint.
 */
const coverAspect = computed(() => {
  const { w, h } = heroSize.value
  return `${w} / ${h * COVER_SHOWN}`
})

/** Which band of the capture the banner window shows. */
const coverFocus = computed(() => `50% ${COVER_FOCUS_Y}%`)

/**
 * Single walk over the section tree that produces both the annotated headings
 * and the lightbox list. Because one pass assigns every `lbIndex` while it
 * builds the array, the two can't fall out of sync the way hand-written
 * indices did.
 */
const doc = computed(() => {
  const images = [props.project.heroImg]

  const walk = (list) => (list || []).map(section => ({
    ...section,
    images: (section.images || []).map(img => {
      // Full-page captures are excluded: GalleryLightbox caps at 84vh, so a
      // 10115px-tall image would render ~142px wide. Worse than not zooming.
      const zoomable = img.lightbox !== false
      const lbIndex = zoomable ? images.length : null
      if (zoomable) images.push(img.src)
      return { ...img, lbIndex }
    }),
    children: walk(section.children)
  }))

  return { images, sections: walk(props.project.sections) }
})

const tocItems = computed(() => {
  const items = []
  const flatten = (list) => list.forEach(section => {
    items.push({ id: section.id, title: sectionTitle(section), level: section.level })
    flatten(section.children)
  })
  flatten(doc.value.sections)
  return items
})

const lightboxIndex = ref(null)

const openLightbox = (idx) => {
  lightboxIndex.value = idx
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + doc.value.images.length) % doc.value.images.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % doc.value.images.length
}
</script>

<style scoped>
.tic-detail-wrapper {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}

/* 1. Top Metadata Bar */
.top-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 0.88rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}

.breadcrumb a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb a:hover {
  color: var(--text-primary);
}

.breadcrumb a:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 3px;
  border-radius: 4px;
}

.breadcrumb .sep {
  font-size: 0.7rem;
  opacity: 0.4;
}

.breadcrumb .current {
  color: var(--text-primary);
  font-weight: 600;
}

.year-pill {
  border: 1px solid var(--border-strong);
  background: var(--bg-800);
  color: var(--highlight-ink);
  font-size: 0.8rem;
  padding: 2px 10px;
  border-radius: 4px;
  font-family: monospace;
}

/* 2. Full Width Top Cover Banner Header */
.cover-banner-header {
  margin-bottom: 48px;
}

.cover-banner-wrap {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-700);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  cursor: zoom-in;
  margin-bottom: 24px;
}

.cover-banner-wrap:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 3px;
}

/* Fills the banner box and crops from the centre, so the visible slice is the
   middle band of the capture. */
.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* 3. Title Row */
.title-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.project-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.btn-live-demo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--highlight-ink);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.btn-live-demo:hover {
  background: var(--highlight-ink);
  border-color: var(--highlight-ink);
  color: var(--highlight-text);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--highlight-rgb), 0.4);
}

.btn-live-demo:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 3px;
}

.btn-live-demo:active {
  transform: translateY(0);
}

/* 4. Intro Description & Meta Grid */
.intro-meta-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  margin-bottom: 24px;
}

.intro-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

.meta-details-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  margin: 0;
}

.meta-row {
  display: flex;
  gap: 8px;
}

.meta-label {
  font-weight: 600;
  color: var(--text-secondary);
  min-width: 60px;
}

.meta-val {
  color: var(--text-primary);
  margin: 0;
}

/* 5. Tags Row */
.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-pill {
  font-size: 0.8rem;
  padding: 4px 14px;
  border-radius: 20px;
  background: var(--bg-800);
  color: var(--highlight-ink);
  border: 1px solid var(--border);
}

/* 6. Main 2-Column Docs Layout */
.main-docs-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 48px;
  align-items: stretch;
  position: relative;
}

.docs-sidebar-column {
  position: sticky;
  top: 100px;
  align-self: start;
  height: fit-content;
  z-index: 10;
}

.docs-main-column {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.docs-section {
  scroll-margin-top: 100px;
}

.section-h2 {
  font-size: clamp(1.35rem, 2.4vw, 1.65rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.section-h3 {
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  font-weight: 600;
  color: var(--highlight-ink);
  margin-top: 36px;
  margin-bottom: 10px;
  scroll-margin-top: 100px;
}

.section-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

/* Bottom Project Pagination Cards */
.project-bottom-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.nav-card {
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--bg-800);
  border: 1px solid var(--border);
  text-decoration: none;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.nav-card:hover {
  background: var(--bg-700);
  border-color: var(--highlight);
  transform: translateY(-2px);
}

.nav-card:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 3px;
}

.nav-card:active {
  transform: translateY(0);
}

.nav-card.next {
  text-align: right;
}

.nav-label {
  font-size: 0.8rem;
  color: var(--highlight-ink);
  font-weight: 600;
  margin-bottom: 4px;
}

.nav-title {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

@media (prefers-reduced-motion: reduce) {
  .btn-live-demo:hover,
  .nav-card:hover {
    transform: none;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .main-docs-layout {
    grid-template-columns: 1fr;
  }
  .docs-sidebar-column {
    display: none;
  }
  .intro-meta-grid {
    grid-template-columns: 1fr;
  }
  .title-action-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

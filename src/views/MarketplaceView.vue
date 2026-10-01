<template>
  <main class="marketplace-fullscreen-view">

    <!-- ══════════════════════════════════════════════════════════════════════ -->
    <!-- ── SECTION 1: GLOBE EXPRESS HERO SHOWCASE (100vw × 100vh) ─────────── -->
    <!-- ══════════════════════════════════════════════════════════════════════ -->
    <section class="hero-showcase-viewport" ref="heroViewportEl">

      <!-- ── SLIDER CARDS LAYER: Cùng cấp bậc, định vị tuyệt đối bởi GSAP ─── -->
      <div class="slider-cards-viewport" ref="cardsViewportEl">
        <div
          v-for="(tpl, idx) in activeList"
          :key="tpl.slug"
          :ref="el => setCardRef(el, idx)"
          class="slider-card"
          :style="{
            backgroundImage: `url(${getThumbUrl(tpl)})`,
            backgroundColor: tpl.colorBackground || '#0b0b10'
          }"
          @click="onCardClick(idx)"
        >
          <!-- Gradient scrim để đảm bảo text luôn đọc rõ trên ảnh nền -->
          <div class="slider-card-scrim"></div>
          <div class="slider-card-vignette"></div>

          <!-- Thông tin hiển thị khi thẻ đang là thumbnail ở góc dưới bên phải -->
          <div class="slider-card-thumb-content" :ref="el => setThumbInfoRef(el, idx)">
            <div class="thumb-top-meta">
              <span class="thumb-num-pill">{{ tpl.num }}</span>
              <span class="thumb-cat-pill">{{ tpl.category }}</span>
            </div>
            <div class="thumb-bottom-meta">
              <h4 class="thumb-card-title">{{ getTranslated(tpl.title) }}</h4>
              <p class="thumb-card-brand">{{ tpl.brand || tpl.category }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── DOUBLE BUFFER DETAILS (details-even & details-odd) ─────────────── -->
      <!-- Cơ chế Double Buffer triệt tiêu hoàn toàn giật chữ khi chuyển slide -->
      <div class="showcase-details-panel" id="details-even" ref="detailsEvenEl">
        <div class="details-content-inner" v-if="evenData">
          <div class="showcase-actions-group">
            <router-link :to="`/marketplace/${evenData.slug}`" class="action-btn-details">
              <span>{{ t('marketplace.viewTemplate') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <div class="showcase-details-panel" id="details-odd" ref="detailsOddEl">
        <div class="details-content-inner" v-if="oddData">
          <div class="showcase-actions-group">
            <router-link :to="`/marketplace/${oddData.slug}`" class="action-btn-details">
              <span>{{ t('marketplace.viewTemplate') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
        </div>
      </div>



      <!-- Bottom Scroll Cue -->
      <div class="showcase-scroll-cue" @click="scrollToGridSection">
        <span class="scroll-cue-text">{{ state.lang === 'vi' ? 'Cuộn để xem tất cả' : 'Scroll to explore' }}</span>
        <div class="scroll-cue-icon">
          <span class="scroll-cue-dot"></span>
        </div>
      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════════════ -->
    <!-- ── SECTION 2: ALL TEMPLATES GRID EXPLORER (Bảng Lưới Chi Tiết) ────── -->
    <!-- ══════════════════════════════════════════════════════════════════════ -->
    <section class="all-templates-section" ref="gridSectionEl">
      <div class="container">

        <!-- Grid Header -->
        <div class="grid-section-header">
          <div class="section-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <span class="shimmer">{{ state.lang === 'vi' ? 'Bộ sưu tập đầy đủ' : 'Complete Collection' }}</span>
          </div>
          <h2 class="grid-section-title">
            {{ state.lang === 'vi' ? 'Khám Phá Toàn Bộ Mẫu Web' : 'Explore All Templates' }}
          </h2>
          <p class="grid-section-desc">
            {{ t('marketplace.subtitle') }}
          </p>
        </div>

        <!-- 3-Column Grid Explorer (Matching uploaded design layout) -->
        <div class="templates-grid-container">
          <div
            v-for="tpl in activeList"
            :key="tpl.slug"
            class="ui-card-item"
          >
            <!-- Top Thumbnail Area -->
            <div class="card-thumb-area">
              <img
                :src="getThumbUrl(tpl)"
                :alt="getTranslated(tpl.title)"
                class="card-thumb-img"
                loading="lazy"
              />

              <!-- Top-Right Badge (Light / Dark) -->
              <div
                class="card-theme-badge"
                :class="isLightTheme(tpl) ? 'badge-light' : 'badge-dark'"
              >
                {{ isLightTheme(tpl) ? 'Light' : 'Dark' }}
              </div>

              <!-- Hover Action Overlay -->
              <div class="card-hover-overlay">
                <router-link :to="`/marketplace/${tpl.slug}/demo`" class="card-action-btn btn-demo">
                  <span>{{ t('marketplace.viewDemo') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </router-link>
                <router-link :to="`/marketplace/${tpl.slug}`" class="card-action-btn btn-details">
                  <span>{{ t('marketplace.viewTemplate') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </router-link>
              </div>
            </div>

            <!-- Bottom Card Content Area -->
            <div class="card-content-area">
              <!-- Category Pill -->
              <div class="card-cat-pill">
                {{ getCategoryLabel(tpl.category) }}
              </div>

              <!-- Title -->
              <h3 class="card-title">{{ getTranslated(tpl.title) }}</h3>

              <!-- Style / Subtitle -->
              <p class="card-subtitle">{{ tpl.style || getTranslated(tpl.subtitle) }}</p>

              <!-- Colors Palette Row -->
              <div class="card-colors-row">
                <span class="colors-label">Colors:</span>
                <div class="colors-dots">
                  <span
                    v-for="(c, idx) in getTemplateColors(tpl)"
                    :key="idx"
                    class="color-dot"
                    :style="{ backgroundColor: c }"
                    :title="c"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p v-if="activeList.length === 0" class="empty-state">
          {{ state.lang === 'vi' ? 'Chưa có mẫu trong danh mục này.' : 'No templates in this category yet.' }}
        </p>

        <!-- Stats Bar -->
        <section class="stats-bar-container" ref="statsEl">
          <div class="stat-cell" v-for="s in statsData" :key="s.labelEn">
            <div class="stat-number">{{ s.display }}</div>
            <div class="stat-caption">{{ state.lang === 'vi' ? s.labelVi : s.labelEn }}</div>
          </div>
        </section>

        <!-- Call to Action Banner -->
        <section class="mp-cta-container" ref="ctaEl">
          <div class="cta-card">
            <div class="cta-glow cta-glow-1"></div>
            <div class="cta-glow cta-glow-2"></div>

            <p class="cta-label-pill">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
              {{ t('marketplace.ctaLabel') }}
            </p>
            <h2 class="cta-title">{{ t('marketplace.ctaHeading') }}</h2>
            <router-link to="/contact" class="cta-action-btn">
              <span class="cta-action-text">{{ t('marketplace.ctaBtn') }}</span>
            </router-link>
          </div>
        </section>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { templates } from '../data/templates.js'
import { getCategoryList } from '../data/categories.js'
import { useLang } from '../data/translations.js'
import { useIsMobile } from '../composables/useIsMobile.js'

gsap.registerPlugin(ScrollTrigger)

const { state, t } = useLang()
const { isMobile } = useIsMobile()

// ─── Helpers ────────────────────────────────────────────────────────────────
const getTranslated = (obj) =>
  obj && typeof obj === 'object' ? (obj[state.lang] ?? obj.en ?? obj) : obj

const getThumbUrl = (tpl) => {
  if (!tpl) return ''
  return `/demos/${tpl.slug}/thumb.jpg`
}

const isLightTheme = (tpl) => {
  if (!tpl) return true
  const bg = (tpl.colorBackground || '').toLowerCase()
  return bg === '#ffffff' || bg === '#fff' || bg === '#faf5ff' || bg === '#f5f5f5' || bg === '#fffaf0'
}

const templatePaletteMap = {
  'saas-analytics-dashboard': ['#0066ff', '#8b5cf6', '#10b981', '#ffffff'],
  'sales-crm-platform': ['#2563eb', '#3b82f6', '#10b981', '#ffffff'],
  'fintech-crypto-dashboard': ['#10b981', '#3b82f6', '#09090b', '#ffffff'],
  'digital-banking-app': ['#0ea5e9', '#6366f1', '#0f172a', '#ffffff'],
  'crypto-wallet': ['#8b5cf6', '#ec4899', '#09090b', '#ffffff'],
  'cex-trading-platform': ['#22c55e', '#ef4444', '#0f172a', '#ffffff'],
  'ai-image-generator': ['#a855f7', '#ec4899', '#3b82f6', '#ffffff'],
  'ai-writing-assistant': ['#6366f1', '#a855f7', '#f8fafc', '#ffffff'],
  'ai-chatbot-platform': ['#06b6d4', '#3b82f6', '#09090b', '#ffffff'],
  'luxury-ecommerce': ['#18181b', '#d4af37', '#f4f4f5', '#ffffff'],
  'health-wellness-app': ['#10b981', '#06b6d4', '#f0fdf4', '#ffffff'],
  'real-estate-luxury': ['#0077b6', '#0284c7', '#f5f5f4', '#ffffff'],
  'educational-platform': ['#f472b6', '#2dd4bf', '#10b981', '#ffffff'],
  'restaurant-food': ['#ff6b35', '#ef4444', '#fff7ed', '#ffffff'],
  'travel-tourism': ['#0080ff', '#0d9488', '#f0f9ff', '#ffffff'],
  'fitness-gym-app': ['#ff6b35', '#84cc16', '#0a0a0a', '#ffffff'],
  'developer-tools': ['#39ff14', '#3b82f6', '#0d0d0d', '#ffffff'],
  'creative-agency-portfolio': ['#ff0000', '#facc15', '#ffffff', '#000000']
}

const getTemplateColors = (tpl) => {
  if (!tpl) return ['#3b82f6', '#8b5cf6', '#10b981', '#ffffff']
  if (templatePaletteMap[tpl.slug]) return templatePaletteMap[tpl.slug]
  if (tpl.colors && Array.isArray(tpl.colors)) return tpl.colors
  return [tpl.accentColor || '#3b82f6', '#8b5cf6', '#10b981', '#ffffff']
}

const categoryLabelMap = {
  saas: 'SaaS',
  fintech: 'Fintech',
  ai: 'AI',
  ecommerce: 'E-Commerce',
  healthcare: 'Health & Wellness',
  'real-estate': 'Real Estate',
  education: 'Education',
  food: 'Food & Dining',
  travel: 'Travel & Tourism',
  fitness: 'Fitness',
  'dev-tools': 'DevTools',
  creative: 'Creative Agency'
}

const categoryLabelMapVi = {
  saas: 'SaaS',
  fintech: 'Fintech',
  ai: 'AI',
  ecommerce: 'Thương mại điện tử',
  healthcare: 'Y tế & Sức khỏe',
  'real-estate': 'Bất động sản',
  education: 'Giáo dục',
  food: 'Ẩm thực & Nhà hàng',
  travel: 'Du lịch & Trải nghiệm',
  fitness: 'Thể hình & Gym',
  'dev-tools': 'Công cụ Dev',
  creative: 'Creative Agency'
}

const getCategoryLabel = (catKey) => {
  if (!catKey) return 'Category'
  const map = state.lang === 'vi' ? categoryLabelMapVi : categoryLabelMap
  return map[catKey] || catKey.toUpperCase()
}

// ─── Filters & List ─────────────────────────────────────────────────────────
const activeFilter = ref('all')
const isAnimating = ref(false)

const filters = computed(() => {
  const used = new Set(templates.map(tpl => tpl.category))
  const cats = getCategoryList(state.lang).filter(c => used.has(c.value))
  return [{ value: 'all', label: t('marketplace.filterAll') }, ...cats]
})

const activeList = computed(() => {
  if (activeFilter.value === 'all') return templates
  return templates.filter(t => t.category === activeFilter.value)
})

// ─── Globe Express Ring Buffer State ─────────────────────────────────────────
// order lưu mảng các index tương ứng với các card trong activeList
// order[0] luôn là card Active (FullScreen Background)
// order[1], order[2]... là các card xếp hàng trong Dock (Thumbnail Track)
const order = ref([])
const detailsEven = ref(true)

const evenData = ref(null)
const oddData = ref(null)

const currentActiveIndex = computed(() => {
  if (!order.value.length) return 0
  return order.value[0]
})

const currentNumFormatted = computed(() => {
  const n = currentActiveIndex.value + 1
  return n < 10 ? `0${n}` : `${n}`
})

const totalCountFormatted = computed(() => {
  const n = activeList.value.length
  return n < 10 ? `0${n}` : `${n}`
})

// ─── DOM References ─────────────────────────────────────────────────────────
const heroViewportEl = ref(null)
const cardsViewportEl = ref(null)
const detailsEvenEl = ref(null)
const detailsOddEl = ref(null)
const paginationEl = ref(null)
const progressFillEl = ref(null)

const gridSectionEl = ref(null)
const statsEl = ref(null)
const ctaEl = ref(null)

const cardEls = []
const thumbInfoEls = []

function setCardRef(el, idx) {
  if (el) cardEls[idx] = el
}

function setThumbInfoRef(el, idx) {
  if (el) thumbInfoEls[idx] = el
}

// ─── Layout Coordinate Calculation ──────────────────────────────────────────
function getLayoutConfig() {
  const width = window.innerWidth
  const height = window.innerHeight

  const isMobile = width < 768
  const isTablet = width >= 768 && width < 1024

  const cardWidth = isMobile ? 120 : isTablet ? 145 : 170
  const cardHeight = isMobile ? 180 : isTablet ? 215 : 255
  const gap = isMobile ? 12 : 16

  // Đặt dock ở góc dưới bên phải màn hình
  const visibleCardsInDock = isMobile ? 1.4 : isTablet ? 2.2 : 3.2
  const offsetLeft = width - (cardWidth + gap) * visibleCardsInDock - (isMobile ? 16 : 40)
  const offsetTop = height - cardHeight - (isMobile ? 80 : 50)

  return { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop, isMobile }
}

// ─── Initialize / Render Layout ─────────────────────────────────────────────
function initSlider(resetOrder = true) {
  if (!activeList.value.length) return

  if (resetOrder || order.value.length !== activeList.value.length) {
    order.value = activeList.value.map((_, i) => i)
  }

  const { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop } = getLayoutConfig()
  const activeIdx = order.value[0]
  const restIndices = order.value.slice(1)

  // Cập nhật Details
  detailsEven.value = true
  evenData.value = activeList.value[activeIdx]
  oddData.value = activeList.value[activeIdx]

  nextTick(() => {
    // 1. Setup Card Active (Fullscreen)
    if (cardEls[activeIdx]) {
      gsap.set(cardEls[activeIdx], {
        x: 0,
        y: 0,
        width: width,
        height: height,
        borderRadius: 0,
        zIndex: 5,
        opacity: 1,
        scale: 1,
        cursor: 'default',
      })
    }
    if (thumbInfoEls[activeIdx]) {
      gsap.set(thumbInfoEls[activeIdx], { opacity: 0 })
    }

    // 2. Setup Cards in Dock
    restIndices.forEach((tplIdx, i) => {
      const el = cardEls[tplIdx]
      if (el) {
        gsap.set(el, {
          x: offsetLeft + i * (cardWidth + gap),
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          borderRadius: 16,
          zIndex: 20 + i,
          opacity: 1,
          scale: 1,
          cursor: 'pointer',
        })
      }
      if (thumbInfoEls[tplIdx]) {
        gsap.set(thumbInfoEls[tplIdx], { opacity: 1 })
      }
    })

    // 3. Setup Details
    if (detailsEvenEl.value) {
      gsap.set(detailsEvenEl.value, { opacity: 1, y: 0, zIndex: 30 })
    }
    if (detailsOddEl.value) {
      gsap.set(detailsOddEl.value, { opacity: 0, y: 50, zIndex: 25 })
    }

    // 4. Update Progress Bar
    updateProgressBar()
  })
}

function updateProgressBar() {
  if (!progressFillEl.value || !activeList.value.length) return
  const progressRatio = (currentActiveIndex.value + 1) / activeList.value.length
  gsap.to(progressFillEl.value, {
    scaleX: progressRatio,
    transformOrigin: 'left center',
    duration: 0.5,
    ease: 'power2.out',
  })
}

// ─── Step Next: Thuật toán Globe Express nguyên bản ─────────────────────────
function nextSlide() {
  if (isAnimating.value || activeList.value.length <= 1) return
  isAnimating.value = true

  const { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop } = getLayoutConfig()

  // Xoay vòng mảng thứ tự: [0, 1, 2, 3] -> [1, 2, 3, 0]
  const currentActive = order.value[0]
  const nextActive = order.value[1]
  const rest = order.value.slice(2)

  order.value.push(order.value.shift())

  // Đổi Double Buffer Details
  detailsEven.value = !detailsEven.value
  const activeDetailsEl = detailsEven.value ? detailsEvenEl.value : detailsOddEl.value
  const inactiveDetailsEl = detailsEven.value ? detailsOddEl.value : detailsEvenEl.value

  if (detailsEven.value) {
    evenData.value = activeList.value[nextActive]
  } else {
    oddData.value = activeList.value[nextActive]
  }

  // Animation Details
  if (inactiveDetailsEl) {
    gsap.to(inactiveDetailsEl, {
      opacity: 0,
      y: -30,
      duration: 0.35,
      ease: 'power2.in',
    })
  }

  if (activeDetailsEl) {
    gsap.set(activeDetailsEl, { zIndex: 30 })
    gsap.fromTo(
      activeDetailsEl,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'sine.inOut' }
    )
  }

  // 1. Thẻ cũ (currentActive): hạ z-index xuống 10, scale nhẹ rồi mờ dần
  if (cardEls[currentActive]) {
    gsap.set(cardEls[currentActive], { zIndex: 10 })
    gsap.to(cardEls[currentActive], {
      scale: 1.12,
      opacity: 0.4,
      duration: 0.85,
      ease: 'sine.inOut',
    })
  }

  // 2. Thẻ mới (nextActive) đang ở đầu dock: ẩn thumbnail info, phóng to toàn màn hình!
  if (thumbInfoEls[nextActive]) {
    gsap.to(thumbInfoEls[nextActive], { opacity: 0, duration: 0.25 })
  }

  if (cardEls[nextActive]) {
    gsap.set(cardEls[nextActive], { zIndex: 18, cursor: 'default' })
    gsap.to(cardEls[nextActive], {
      x: 0,
      y: 0,
      width: width,
      height: height,
      borderRadius: 0,
      opacity: 1,
      duration: 0.85,
      ease: 'sine.inOut',
      onComplete: () => {
        // Khi thẻ mới đã phủ kín toàn màn hình:
        // Đưa thẻ cũ về vị trí cuối cùng trong dock
        const lastDockIndex = order.value.length - 2
        if (cardEls[currentActive]) {
          gsap.set(cardEls[currentActive], {
            x: offsetLeft + lastDockIndex * (cardWidth + gap),
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            borderRadius: 16,
            scale: 1,
            opacity: 1,
            zIndex: 20 + lastDockIndex,
            cursor: 'pointer',
          })
        }
        if (thumbInfoEls[currentActive]) {
          gsap.set(thumbInfoEls[currentActive], { opacity: 1 })
        }
        isAnimating.value = false
      }
    })
  }

  // 3. Các thẻ còn lại trong dock: trượt sang trái một nhịp!
  rest.forEach((tplIdx, i) => {
    const el = cardEls[tplIdx]
    if (el) {
      gsap.set(el, { zIndex: 20 + i })
      gsap.to(el, {
        x: offsetLeft + i * (cardWidth + gap),
        y: offsetTop,
        duration: 0.8,
        ease: 'sine.inOut',
      })
    }
  })

  updateProgressBar()
}

// ─── Step Prev: Đảo ngược vòng lặp ──────────────────────────────────────────
function prevSlide() {
  if (isAnimating.value || activeList.value.length <= 1) return
  isAnimating.value = true

  const { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop } = getLayoutConfig()

  // Đảo ngược mảng thứ tự: [0, 1, 2, 3] -> [3, 0, 1, 2]
  const lastItem = order.value[order.value.length - 1]
  const currentActive = order.value[0]
  const rest = order.value.slice(1, -1)

  order.value.unshift(order.value.pop())

  // Đổi Double Buffer Details
  detailsEven.value = !detailsEven.value
  const activeDetailsEl = detailsEven.value ? detailsEvenEl.value : detailsOddEl.value
  const inactiveDetailsEl = detailsEven.value ? detailsOddEl.value : detailsEvenEl.value

  if (detailsEven.value) {
    evenData.value = activeList.value[lastItem]
  } else {
    oddData.value = activeList.value[lastItem]
  }

  if (inactiveDetailsEl) {
    gsap.to(inactiveDetailsEl, {
      opacity: 0,
      y: 30,
      duration: 0.35,
      ease: 'power2.in',
    })
  }

  if (activeDetailsEl) {
    gsap.set(activeDetailsEl, { zIndex: 30 })
    gsap.fromTo(
      activeDetailsEl,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'sine.inOut' }
    )
  }

  // Đặt thẻ lastItem ở ngoài rìa trái hoặc phóng to từ dock
  if (cardEls[lastItem]) {
    gsap.set(cardEls[lastItem], {
      zIndex: 18,
      cursor: 'default',
    })
    if (thumbInfoEls[lastItem]) {
      gsap.to(thumbInfoEls[lastItem], { opacity: 0, duration: 0.25 })
    }
    gsap.to(cardEls[lastItem], {
      x: 0,
      y: 0,
      width: width,
      height: height,
      borderRadius: 0,
      opacity: 1,
      duration: 0.85,
      ease: 'sine.inOut',
      onComplete: () => {
        isAnimating.value = false
      }
    })
  }

  // Đưa currentActive cũ thành thumbnail đầu tiên trong dock
  if (cardEls[currentActive]) {
    gsap.set(cardEls[currentActive], { zIndex: 12 })
    gsap.to(cardEls[currentActive], {
      x: offsetLeft,
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      borderRadius: 16,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'sine.inOut',
      onComplete: () => {
        if (thumbInfoEls[currentActive]) {
          gsap.set(thumbInfoEls[currentActive], { opacity: 1 })
        }
      }
    })
  }

  // Các thẻ khác trượt sang phải
  rest.forEach((tplIdx, i) => {
    const el = cardEls[tplIdx]
    if (el) {
      gsap.set(el, { zIndex: 22 + i })
      gsap.to(el, {
        x: offsetLeft + (i + 1) * (cardWidth + gap),
        y: offsetTop,
        duration: 0.8,
        ease: 'sine.inOut',
      })
    }
  })

  updateProgressBar()
}

// ─── Click Thumbnail in Dock ────────────────────────────────────────────────
function onCardClick(targetIndex) {
  if (isAnimating.value) return
  // Nếu là card đang fullscreen thì không làm gì
  if (targetIndex === order.value[0]) return

  // Tìm vị trí của card này trong mảng order
  const posInOrder = order.value.indexOf(targetIndex)
  if (posInOrder === 1) {
    // Là card kế tiếp: gọi nextSlide()
    nextSlide()
  } else if (posInOrder > 1) {
    // Xoay mảng đưa card này lên vị trí thứ 1 rồi gọi nextSlide()
    while (order.value[1] !== targetIndex) {
      order.value.push(order.value.splice(1, 1)[0])
    }
    nextSlide()
  }
}

// ─── Category Filter Switch ─────────────────────────────────────────────────
function setCategoryFilter(val) {
  if (activeFilter.value === val || isAnimating.value) return
  activeFilter.value = val
  cardEls.length = 0
  thumbInfoEls.length = 0
  nextTick(() => {
    initSlider(true)
  })
}

// ─── Snap giữa 2 view ───────────────────────────────────────────────────────
// Trang chỉ có ĐÚNG HAI vị trí đứng hợp lệ: đỉnh View 1 (scrollY = 0) và mép
// trên View 2 (scrollY = v2Top). Mọi vị trí nằm giữa là trạng thái "lửng" — ở
// đó màn hình bị cắt nửa hero nửa lưới — và phải được đẩy đi nốt.
//
// Cơ chế: theo dõi VỊ TRÍ cuộn chứ không bắt sự kiện wheel/touch. Cách này đúng
// với mọi nguồn cuộn (lăn chuột, vuốt, kéo thanh cuộn, bàn phím) và không giành
// giật sự kiện với Lenis — `preventDefault` ở listener wheel KHÔNG chặn được
// Lenis vì Lenis tự chạy virtual scroll, còn gọi `lenis.scrollTo` trần thì bị
// quán tính lăn chuột ghi đè giữa chừng (đó là lý do bản cũ bị bật ngược về 0).
const SNAP_DURATION = 0.9
const SNAP_GUARD_MS = 1500 // lưới an toàn, KHÔNG phải cơ chế chính
let snapTarget = null       // đích đang bay tới (0 | v2Top), null khi rảnh
let snapGuard = null
let settledView = 1         // view đang đứng
let settledY = 0            // scrollY lúc dừng hợp lệ gần nhất

function getView2Top() {
  // rect + scrollY thay vì offsetTop: offsetTop phụ thuộc offsetParent nên dễ
  // sai nếu cấu trúc bọc ngoài đổi.
  if (!gridSectionEl.value) return window.innerHeight
  return Math.round(gridSectionEl.value.getBoundingClientRect().top + window.scrollY)
}

// Ở màn hẹp, CSS bỏ hẳn View 1 nên chỉ còn một view duy nhất — mọi logic snap
// phải tắt, nếu không `v2Top ≈ 0` sẽ khiến bất kỳ cú cuộn nào cũng bị coi là
// "lệch khỏi view" và nhảy loạn.
function isSnapActive() {
  return !isMobile.value
}

function goToView(viewNum) {
  if (!isSnapActive()) return
  const targetY = viewNum === 1 ? 0 : getView2Top()

  snapTarget = targetY
  settledView = viewNum

  // Nếu vì lý do nào đó không có ai xử lý sự kiện bên dưới, khoá snap lại vẫn
  // phải được mở, nếu không cơ chế sẽ đứng im vĩnh viễn.
  clearTimeout(snapGuard)
  snapGuard = setTimeout(() => {
    if (snapTarget === targetY) snapTarget = null
  }, SNAP_GUARD_MS)

  window.dispatchEvent(
    new CustomEvent('request-scroll-to', {
      detail: {
        y: targetY,
        // `lock` khoá input của Lenis suốt animation và tự mở khi xong — nhờ đó
        // quán tính lăn chuột không kéo tuột chuyển động đi.
        lock: true,
        duration: SNAP_DURATION,
        onComplete: () => {
          if (snapTarget !== targetY) return
          snapTarget = null
          clearTimeout(snapGuard)
          // Ghi vị trí THỰC TẾ lúc dừng, không phải đích: nếu lệch nhau vài
          // phần mười px thì lần kiểm tra sau vẫn thấy "chưa nhích" và không
          // tự kích hoạt lại, gây rung.
          settledY = window.scrollY || document.documentElement.scrollTop || 0
        },
      },
    })
  )
}

function scrollToGridSection() {
  goToView(2)
}

function handleScroll() {
  if (!isSnapActive()) return
  const v2Top = getView2Top()
  if (!v2Top) return
  const scrollY = window.scrollY || document.documentElement.scrollTop || 0

  // Đang bay tới đích: để yên cho animation chạy hết (onComplete mở khoá).
  if (snapTarget !== null) return

  // Chưa nhích khỏi chỗ vừa dừng → vẫn đứng nguyên ở view cũ. Ngưỡng 1px ở đây
  // tách hẳn khỏi ngưỡng "đã tới đích" — nhờ vậy lệch đúng 1px vẫn kích hoạt.
  if (Math.abs(scrollY - settledY) < 1) return

  // Trong lòng View 2, kể cả đúng mép trên → cuộn tự do xem hết lưới.
  if (scrollY >= v2Top - 1) {
    settledView = 2
    settledY = scrollY
    return
  }

  // Còn lại: vừa rời khỏi view đang đứng và rơi vào khoảng giữa → đi nốt sang
  // view kia, để màn hình không dừng ở trạng thái nửa hero nửa lưới.
  goToView(settledView === 1 ? 2 : 1)
}

// ─── Keyboard Listeners ──────────────────────────────────────────────────────
function handleKeyDown(e) {
  // Mũi tên là phím điều hướng slider, nhưng chỉ khi slider đang là thứ người
  // dùng nhìn thấy. Nếu để chúng cuộn trang ở View 1 thì mỗi lần bấm mũi tên để
  // xem mẫu kế tiếp sẽ kéo theo cả cú snap xuống View 2. Ở màn hẹp slider bị ẩn
  // hẳn nên mũi tên trả về hành vi cuộn trang mặc định.
  const inHero = isSnapActive() &&
    (window.scrollY || document.documentElement.scrollTop || 0) < getView2Top() - 1
  if (!inHero) return

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    nextSlide()
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    prevSlide()
  }
}

function handleResize() {
  if (isAnimating.value) return
  // Màn hẹp không dựng slider (hero bị ẩn). Khi giãn ra khỏi breakpoint, biến
  // isMobile đổi trước nên lần resize này sẽ dựng lại đúng.
  if (!isSnapActive()) return
  initSlider(false)
}

// ─── Stats Data ──────────────────────────────────────────────────────────────
const statsData = [
  { display: '18+', labelEn: 'Ready-to-use Demos', labelVi: 'Web mẫu hoàn chỉnh' },
  { display: '100%', labelEn: 'Custom Tailored', labelVi: 'Tùy chỉnh toàn diện' },
  { display: '24h', labelEn: 'Response Time', labelVi: 'Thời gian phản hồi' },
  { display: '∞', labelEn: 'Scalability & Growth', labelVi: 'Khả năng mở rộng' },
]

// ─── Lifecycle & ScrollTrigger ───────────────────────────────────────────────
const _sts = []

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, { passive: true })

  snapTarget = null
  settledView = 1
  settledY = 0

  // Màn hẹp: hero bị ẩn nên bỏ luôn việc dựng và định vị slider.
  if (isSnapActive()) {
    nextTick(() => {
      initSlider(true)
    })
  }

  // Stats bar reveal
  if (statsEl.value) {
    const cells = statsEl.value.querySelectorAll('.stat-cell')
    _sts.push(
      ScrollTrigger.create({
        trigger: statsEl.value,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            cells,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' }
          )
        },
      })
    )
  }

  // CTA reveal
  if (ctaEl.value) {
    _sts.push(
      ScrollTrigger.create({
        trigger: ctaEl.value,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ctaEl.value.querySelector('.cta-card'),
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }
          )
        },
      })
    )
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  clearTimeout(snapGuard)
  snapTarget = null
  _sts.forEach(st => st.kill())
  _sts.length = 0
})
</script>

<style scoped>
/* ══════════════════════════════════════════════════════════════════════════ */
/* ── GLOBAL LAYOUT & FULLSCREEN VIEWPORT ─────────────────────────────────── */
/* ══════════════════════════════════════════════════════════════════════════ */
.marketplace-fullscreen-view {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: #050507;
  color: var(--text-primary);
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* ── SECTION 1: HERO SHOWCASE VIEWPORT (100vw × 100vh) ───────────────────── */
/* ══════════════════════════════════════════════════════════════════════════ */
.hero-showcase-viewport {
  position: relative;
  width: 100vw;
  height: 100vh;
  /* `min-height: min(700px, 100dvh)`: đặt sàn 700px cho màn hình thấp, nhưng
     KHÔNG được vượt quá chiều cao thật của viewport — nếu vượt (điện thoại
     ～664px), View 1 sẽ cao hơn màn hình và để lộ một mẩu View 2 ở đáy, phá vỡ
     đúng cái quy tắc "mỗi lần chỉ thấy một view" mà snap đang giữ. */
  min-height: min(700px, 100dvh);
  overflow: hidden;
}

/* ── SLIDER CARDS VIEWPORT & CARDS (Globe Express Absolute Ring Buffer) ───── */
.slider-cards-viewport {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-card {
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  will-change: transform, width, height, border-radius;
  user-select: none;
  transition: box-shadow 0.25s, outline 0.25s;
}

.slider-card:hover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 0 2px var(--highlight);
}

/* Scrim & Vignette chỉ dành cho card fullscreen active, ẩn hoàn toàn trên thumbnail dock */
.slider-card-scrim,
.slider-card-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.slider-card:not([style*="width: 100%"]):not([style*="width:100%"]) .slider-card-scrim,
.slider-card:not([style*="width: 100%"]):not([style*="width:100%"]) .slider-card-vignette {
  display: none !important;
  opacity: 0 !important;
}

.slider-card-scrim {
  background: linear-gradient(
    90deg,
    rgba(5, 5, 7, 0.45) 0%,
    rgba(5, 5, 7, 0.2) 50%,
    rgba(5, 5, 7, 0.35) 100%
  );
}

.slider-card-vignette {
  background: radial-gradient(circle at 65% 50%, transparent 50%, rgba(5, 5, 7, 0.4) 100%);
}

/* Thumbnail Info (chỉ hiện khi thẻ nằm trong Dock) — Sáng rõ không mờ tối */
.slider-card-thumb-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.15) 0%,
    transparent 45%,
    rgba(0, 0, 0, 0.45) 100%
  );
  pointer-events: none;
}

.thumb-top-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.thumb-num-pill {
  font-family: var(--font-clash);
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 8px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.thumb-cat-pill {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--highlight);
  background: rgba(0, 0, 0, 0.6);
  padding: 2px 8px;
  border-radius: 100px;
}

.thumb-bottom-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.thumb-card-title {
  font-family: var(--font-clash);
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}

.thumb-card-brand {
  font-size: 0.72rem;
  color: var(--text-secondary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ── DOUBLE BUFFER DETAILS (details-even & details-odd) ─────────────────────── */
.showcase-details-panel {
  position: absolute;
  left: 48px;
  bottom: 40px;
  top: auto;
  transform: none;
  max-width: 320px;
  z-index: 30;
  pointer-events: none;
}

.details-content-inner {
  display: flex;
  flex-direction: column;
  pointer-events: auto;
}

.details-meta-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.category-indicator {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--highlight);
  background: var(--highlight-glow);
  padding: 4px 12px;
  border-radius: 100px;
  border: 1px solid rgba(188, 255, 103, 0.25);
}

.meta-dot {
  color: var(--border-strong);
  font-size: 0.8rem;
}

.brand-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
}

.style-badge {
  font-size: 0.72rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.07);
  padding: 3px 10px;
  border-radius: 100px;
  border: 1px solid var(--border);
}

.title-mask-container {
  overflow: hidden;
  margin-bottom: 16px;
}

.showcase-display-title {
  font-family: var(--font-clash);
  font-size: clamp(2.4rem, 4.6vw, 4.2rem);
  font-weight: 600;
  line-height: 1.08;
  margin: 0;
  letter-spacing: -0.015em;
  color: #fff;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
}

.showcase-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  line-height: 1.45;
  margin: 0 0 16px;
}

.showcase-overview {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.showcase-tags-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.tag-bubble {
  font-size: 0.74rem;
  font-family: var(--font-satoshi);
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
}

/* Action Buttons */
.showcase-actions-group {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.action-btn-live-demo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--highlight);
  color: var(--highlight-text);
  font-family: var(--font-satoshi);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0 8px 25px -4px rgba(188, 255, 103, 0.5);
  transition: transform 0.3s var(--ease-out-expo), background-color 0.3s var(--ease-out-expo),
    box-shadow 0.3s var(--ease-out-expo);
}

.action-btn-live-demo:hover {
  transform: translateY(-2px) scale(1.02);
  background: var(--highlight-dark);
  box-shadow: 0 12px 30px -4px rgba(188, 255, 103, 0.7);
}

.live-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #000;
  animation: pulse-dot 1.5s infinite;
}

@keyframes pulse-dot {
  0% { transform: scale(0.9); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.8; }
}

.action-btn-details {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-strong);
  color: var(--highlight);
  font-family: var(--font-satoshi);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 24px;
  border-radius: 100px;
  text-decoration: none;
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 0.25s var(--ease-out-expo), border-color 0.25s var(--ease-out-expo),
    color 0.25s var(--ease-out-expo);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.action-btn-details span {
  color: var(--highlight);
}

.action-btn-details svg {
  stroke: var(--highlight);
}

.action-btn-details:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.35);
}

.action-btn-request {
  display: inline-flex;
  align-items: center;
  color: var(--text-secondary);
  font-family: var(--font-satoshi);
  font-weight: 500;
  font-size: 0.9rem;
  padding: 14px 18px;
  text-decoration: none;
  transition: color 0.2s;
}

.action-btn-request:hover {
  color: var(--highlight);
}

/* ── CONTROLS & PAGINATION DOCK ───────────────────────────────────────────── */
.slider-pagination-dock {
  position: absolute;
  left: 60px;
  bottom: 40px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 24px;
}

.pagination-arrows {
  display: flex;
  align-items: center;
  gap: 12px;
}

.arrow-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(18, 18, 24, 0.85);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border-strong);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.25s var(--ease-out-expo), border-color 0.25s var(--ease-out-expo),
    color 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);
}

.arrow-btn:hover:not(:disabled) {
  background: var(--highlight);
  border-color: var(--highlight);
  color: var(--highlight-text);
  transform: scale(1.06);
}

.arrow-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-progress-track {
  width: 200px;
}

.progress-sub-background {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  overflow: hidden;
}

.progress-sub-foreground {
  height: 100%;
  width: 100%;
  background: var(--highlight);
  transform: scaleX(0.1);
  transform-origin: left center;
}

.pagination-slide-counter {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-family: var(--font-clash);
  font-weight: 600;
  font-size: 1rem;
}

.slide-num-current {
  color: #fff;
  font-size: 1.3rem;
}

.slide-num-divider {
  color: var(--text-tertiary);
  font-size: 0.85rem;
}

.slide-num-total {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

/* Bottom Scroll Cue */
.showcase-scroll-cue {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 35;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.showcase-scroll-cue:hover {
  opacity: 1;
}

.scroll-cue-text {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.scroll-cue-icon {
  width: 16px;
  height: 26px;
  border-radius: 100px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  position: relative;
  display: flex;
  justify-content: center;
}

.scroll-cue-dot {
  position: absolute;
  top: 4px;
  width: 3px;
  height: 6px;
  border-radius: 100px;
  background: var(--highlight);
  animation: scroll-bob 1.8s infinite;
}

@keyframes scroll-bob {
  0% { transform: translateY(0); opacity: 1; }
  60% { transform: translateY(8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* ── SECTION 2: ALL TEMPLATES GRID EXPLORER ──────────────────────────────── */
/* ══════════════════════════════════════════════════════════════════════════ */
.all-templates-section {
  position: relative;
  z-index: 10;
  padding: 100px 0 120px;
  background: var(--bg-900);
  border-top: 1px solid var(--border);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 40px;
}

.grid-section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 60px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--highlight-glow);
  color: var(--highlight);
  border-radius: 100px;
  padding: 5px 16px;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 18px;
  border: 1px solid rgba(188, 255, 103, 0.2);
}

.grid-section-title {
  font-family: var(--font-clash);
  font-size: clamp(2rem, 3.6vw, 3rem);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
  /* Cân lại số chữ mỗi dòng, tránh để rớt một từ lẻ xuống dòng cuối
     ("Khám Phá Toàn Bộ Mẫu / Web"). */
  text-wrap: balance;
}

.grid-section-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* 3-Column Grid Explorer (Responsive Theme Compatible) */
.templates-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 28px;
  margin-bottom: 90px;
}

.ui-card-item {
  display: flex;
  flex-direction: column;
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  /* Một nhịp duy nhất cho toàn bộ chuyển động hover — nâng thẻ, zoom ảnh và
     fade overlay đều lấy từ hai biến này. Trước đây ba phần chạy ba mốc lệch
     nhau (0.45s / 0.65s / 0.4s) với easing Material nên nhìn rời rạc; và cả ba
     đều không chạy vì bị rule `transition: … !important` toàn cục đè mất. */
  --card-hover-dur: 0.45s;
  --card-hover-ease: var(--ease-out-expo);
  transition:
    transform var(--card-hover-dur) var(--card-hover-ease),
    box-shadow var(--card-hover-dur) var(--card-hover-ease),
    border-color var(--card-hover-dur) var(--card-hover-ease),
    background-color var(--card-hover-dur) var(--card-hover-ease);
}

.ui-card-item:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-strong);
}

/* Card Top Thumbnail Area */
.card-thumb-area {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-700);
}

.card-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--card-hover-dur) var(--card-hover-ease);
}

.ui-card-item:hover .card-thumb-img {
  transform: scale(1.04);
}

/* Theme Badge (Light / Dark) */
.card-theme-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.card-theme-badge.badge-light {
  background: #ffffff;
  color: #0f172a;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.card-theme-badge.badge-dark {
  background: #09090b;
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

/* Hover Action Overlay */
.card-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  opacity: 0;
  transition: opacity var(--card-hover-dur) var(--card-hover-ease);
  z-index: 3;
}

.ui-card-item:hover .card-hover-overlay {
  opacity: 1;
}

.card-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s var(--card-hover-ease), background-color 0.3s var(--card-hover-ease);
}

.card-action-btn.btn-demo {
  background: var(--highlight);
  color: var(--highlight-text);
  box-shadow: 0 4px 16px rgba(var(--highlight-rgb), 0.35);
}

.card-action-btn.btn-demo:hover {
  transform: scale(1.05);
}

.card-action-btn.btn-details {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
}

.card-action-btn.btn-details:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

/* Card Bottom Content Area */
.card-content-area {
  padding: 22px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
}

/* Category Pill */
.card-cat-pill {
  display: inline-flex;
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(245, 158, 11, 0.16);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.28);
}

/* Title */
.card-title {
  font-family: var(--font-clash);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 2px 0 0;
  line-height: 1.25;
}

/* Subtitle / Style */
.card-subtitle {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.45;
  margin: 0;
}

/* Colors Palette Row */
.card-colors-row {
  display: flex;
  align-items: center;
  gap: 10px;
  /* `auto` neo dãy màu xuống đáy thẻ; nếu chỉ dùng margin cố định thì trong một
     hàng, thẻ có tiêu đề dài 2 dòng sẽ đẩy dãy màu lệch xuống so với thẻ bên cạnh. */
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid var(--border);
}

.colors-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.colors-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid var(--border-strong);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
}

.color-dot:hover {
  transform: scale(1.2);
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--text-secondary);
}

/* ── Stats Bar ────────────────────────────────────────────────────────────── */
.stats-bar-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 24px;
  margin-bottom: 90px;
}

.stat-cell {
  text-align: center;
}

.stat-number {
  font-family: var(--font-clash);
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--highlight);
  margin-bottom: 6px;
}

.stat-caption {
  font-size: 0.84rem;
  color: var(--text-secondary);
}

/* ── CTA Banner ───────────────────────────────────────────────────────────── */
.mp-cta-container {
  margin-bottom: 40px;
}

.cta-card {
  position: relative;
  text-align: center;
  padding: 70px 40px;
  background: linear-gradient(135deg, rgba(20, 20, 30, 0.9) 0%, rgba(10, 10, 16, 0.9) 100%);
  border: 1px solid var(--border-strong);
  border-radius: 28px;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.cta-glow-1 {
  background: var(--highlight);
  opacity: 0.12;
  top: -150px;
  left: 20%;
}

.cta-glow-2 {
  background: #a855f7;
  opacity: 0.1;
  bottom: -150px;
  right: 20%;
}

.cta-label-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--highlight);
  background: var(--highlight-glow);
  padding: 5px 16px;
  border-radius: 100px;
  border: 1px solid rgba(188, 255, 103, 0.2);
  margin-bottom: 20px;
}

.cta-title {
  font-family: var(--font-clash);
  font-size: clamp(2rem, 3.4vw, 2.8rem);
  font-weight: 600;
  color: #fff;
  max-width: 580px;
  margin: 0 auto 30px;
  line-height: 1.2;
}

.cta-action-btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 36px;
  background: var(--highlight);
  color: var(--highlight-text);
  font-family: var(--font-satoshi);
  font-weight: 700;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0 10px 30px -4px rgba(188, 255, 103, 0.5);
  transition: transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo),
    background-color 0.3s var(--ease-out-expo);
}

.cta-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 35px -4px rgba(188, 255, 103, 0.7);
}

/* ══════════════════════════════════════════════════════════════════════════ */
/* ── RESPONSIVE ADAPTATIONS ──────────────────────────────────────────────── */
/* ══════════════════════════════════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .showcase-details-panel {
    left: 30px;
    bottom: 30px;
    top: auto;
    max-width: 300px;
  }
  .slider-pagination-dock {
    left: 30px;
    bottom: 30px;
  }
  /* 3 cột ở cỡ này chỉ còn ~296px/thẻ, chữ bắt đầu chật → xuống 2 cột.
     (Trước đây các media query trỏ vào `.templates-asym-grid`, một class đã bị
     xoá khỏi template, nên lưới giữ nguyên 3 cột suốt xuống tới mobile.) */
  .templates-grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 20px;
  }
}

@media (max-width: 768px) {
  /* Màn hẹp: bỏ hẳn View 1 (khung hero fullscreen). Không đủ chỗ cho slider ảnh
     lớn + dock thumbnail, và cũng không còn ý nghĩa với cơ chế snap 2 view — nên
     trang chỉ còn lưới. JS tắt snap tương ứng qua useIsMobile.js, dùng CHUNG
     breakpoint 768px này. */
  .hero-showcase-viewport {
    display: none;
  }
  .showcase-details-panel {
    left: 20px;
    right: auto;
    bottom: 24px;
    top: auto;
    max-width: 280px;
  }
  .showcase-display-title {
    font-size: 2.2rem;
  }
  .showcase-subtitle {
    font-size: 1rem;
  }
  .showcase-overview {
    display: none;
  }
  .slider-pagination-dock {
    left: 20px;
    bottom: 24px;
    gap: 16px;
  }
  .pagination-progress-track {
    width: 120px;
  }
  .container {
    padding: 0 20px;
  }
  .templates-grid-container {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 60px;
  }
  .grid-section-header {
    margin-bottom: 40px;
  }
  .stats-bar-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px;
  }
}
</style>

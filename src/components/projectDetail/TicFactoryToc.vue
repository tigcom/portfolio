<template>
  <nav ref="containerRef" class="tic-toc-container" :aria-label="t('common.onThisPage')">
    <!-- Header -->
    <div class="toc-header">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="toc-icon" aria-hidden="true">
        <line x1="21" y1="6" x2="3" y2="6"></line>
        <line x1="15" y1="12" x2="3" y2="12"></line>
        <line x1="17" y1="18" x2="3" y2="18"></line>
      </svg>
      <span class="toc-title">{{ t('common.onThisPage') }}</span>
    </div>

    <!-- TOC Navigation — container is the offsetParent for both indicator & items -->
    <div class="toc-nav-wrapper">
      <!-- 1. Guide rail. Both layers below are full-width bars clipped to a
           stroked SVG path, so the line bends in step with the indent level
           instead of running dead straight through the sub-items. Two masks
           because the rail and the indicator are different widths. -->
      <div class="rail-layer rail-layer--rail" :style="railMaskStyle" aria-hidden="true">
        <div class="toc-rail"></div>
      </div>

      <!-- 2. Glow behind the active line. Same path, stroked in soft rings so
           the bloom bends with the rail too. Locked to the indicator. -->
      <div
        v-if="GLOW_BLUR"
        class="rail-layer rail-layer--glow"
        :style="glowMaskStyle"
        aria-hidden="true"
      >
        <div ref="glowRef" class="magic-glow"></div>
      </div>

      <!-- 3. Magic Line Indicator. Positioned by translateY and shaped by
           scaleY, animated through the Web Animations API so no stylesheet
           rule can silently kill the glide. -->
      <div class="rail-layer rail-layer--line" :style="lineMaskStyle" aria-hidden="true">
        <div ref="indicatorRef" class="magic-line"></div>
      </div>

      <!-- 3. Menu items (same offsetParent as indicator) -->
      <a
        v-for="(item, idx) in items"
        :key="item.id"
        :ref="el => setItemRef(el, idx)"
        :href="`#${item.id}`"
        class="toc-item"
        :class="{ 'is-active': activeId === item.id, 'level-2': item.level === 2 }"
        :aria-current="activeId === item.id ? 'true' : null"
        @click.prevent="scrollToSection(item.id)"
      >
        {{ item.title }}
      </a>
    </div>

    <!-- Social Share -->
    <div class="toc-share-block">
      <p class="share-label">{{ t('common.shareProject') }}</p>
      <div class="share-icons">
        <button type="button" :title="t('common.shareTwitter')" :aria-label="t('common.shareTwitter')" class="share-btn" @click="shareTwitter">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </button>
        <button type="button" :title="t('common.shareLinkedIn')" :aria-label="t('common.shareLinkedIn')" class="share-btn" @click="shareLinkedIn">
          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
        </button>
        <button type="button" :title="t('common.shareEmail')" :aria-label="t('common.shareEmail')" class="share-btn" @click="shareEmail">
          <i class="fas fa-envelope" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="share-btn"
          :class="{ 'is-copied': copied }"
          :title="copied ? t('common.linkCopied') : t('common.copyLink')"
          :aria-label="copied ? t('common.linkCopied') : t('common.copyLink')"
          @click="copyLink"
        >
          <i :class="copied ? 'fas fa-check' : 'fas fa-share-alt'" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useLang } from '../../data/translations.js'

const props = defineProps({
  items: { type: Array, default: () => [] }
})

const { t } = useLang()

const INDICATOR_MS = 300
const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)'
/** "You are here" line, px from the top of the viewport. */
const READ_LINE = 120
/** Matches .docs-section / .section-h3 scroll-margin-top. */
const ANCHOR_PAD = 90
/** Gutter kept around the active row when auto-scrolling the TOC. */
const PAD = 28
/** Ignore scrollspy while a click's smooth scroll is still settling. */
const CLICK_LOCK_MS = 900

/** Rail centreline for a level-1 item, in px from the wrapper's left edge. */
const RAIL_X = 0.75
/** How far the rail steps in for a level-2 item. Mirrors the 16px → 28px
 *  text padding jump so the line always sits alongside its own items. */
const RAIL_STEP = 12
/** Length of the diagonal that joins the two rail heights. */
const DIAG = 12
/** Mask container width: the outermost rail position plus the step. */
const MASK_W = RAIL_X * 2 + RAIL_STEP + 1
const RAIL_W = 1.5
const LINE_W = 2.5

/* ─────────────────────────────────────────────────────────────────────────
   KNOB 2 — glow around the active line.
   The bloom is a gaussian-blurred stroke inside the mask, so it bends with
   the rail for free. Raise GLOW_BLUR for a softer, wider halo; raise
   GLOW_ALPHA in the stylesheet for a brighter one. Set GLOW_BLUR = 0 to
   turn the glow off.
   ───────────────────────────────────────────────────────────────────────── */
const GLOW_BLUR = 3.5
const GLOW_STROKE = 4
/** Slack each side so the bloom is not clipped by the mask container. */
const MASK_PAD = Math.ceil(GLOW_STROKE / 2 + GLOW_BLUR * 1.5)

const activeId = ref('')
const copied = ref(false)
const containerRef = ref(null)
const indicatorRef = ref(null)
const glowRef = ref(null)
const itemEls = ref([])

const railMaskStyle = ref({})
const lineMaskStyle = ref({})
const glowMaskStyle = ref({})

/**
 * SVG data URI that strokes `d` so a full-width bar can be clipped to it.
 * Pass several rings to build a soft glow: each is the same path stroked
 * wider and fainter, and the overlapping alphas accumulate into a falloff.
 */
const maskFor = (d, w, h, strokeWidth, blur = 0) => {
  const stroke =
    `<path d="${d}" fill="none" stroke="black" stroke-width="${strokeWidth}"` +
    ` stroke-linecap="round" stroke-linejoin="round"/>`
  const defs = blur
    ? `<defs><filter id="b" x="-80%" y="-20%" width="260%" height="140%">` +
      `<feGaussianBlur stdDeviation="${blur}"/></filter></defs>`
    : ''
  const blurred = blur ? `<g filter="url(#b)">${stroke}</g>` : stroke
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    defs + blurred +
    `</svg>`
  const url = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
  return {
    // Shifted left by the bloom's own slack so the halo is not cut off at the
    // container edge; the path x values carry the matching offset.
    left: `${-MASK_PAD}px`,
    width: `${w}px`,
    height: `${h}px`,
    maskImage: url,
    WebkitMaskImage: url,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%'
  }
}

/**
 * Build the guide-rail path from the items' own geometry.
 *
 * Each item contributes a vertical run at its level's x. Where consecutive
 * runs sit at different x, DIAG is split across the boundary so the join is a
 * diagonal rather than a step — the "kink" at the sub-menu.
 */
function buildMasks() {
  const geoms = props.items.map((item, i) => {
    const el = itemEls.value[i]
    if (!el) return null
    return {
      // +MASK_PAD: the mask container is pulled left by its slack, so path
      // coordinates shift right by the same amount to keep the rail put.
      x: (item.level === 2 ? RAIL_X + RAIL_STEP : RAIL_X) + MASK_PAD,
      top: el.offsetTop,
      bottom: el.offsetTop + el.offsetHeight
    }
  }).filter(Boolean)

  const wrapper = containerRef.value?.querySelector('.toc-nav-wrapper')
  if (!geoms.length || !wrapper) return

  const w = MASK_W + MASK_PAD * 2
  const h = wrapper.offsetHeight

  const runs = geoms.map((g, i) => {
    const prev = geoms[i - 1]
    const next = geoms[i + 1]
    // Never eat more than half the run, or a short item's run inverts.
    const room = Math.min(DIAG, g.bottom - g.top) / 2
    return {
      x: g.x,
      top: g.top + (prev && prev.x !== g.x ? room : 0),
      bottom: g.bottom - (next && next.x !== g.x ? room : 0)
    }
  })

  let d = `M${runs[0].x} ${runs[0].top}`
  runs.forEach((run, i) => {
    if (i > 0) d += ` L${run.x} ${run.top}`
    d += ` L${run.x} ${run.bottom}`
  })

  railMaskStyle.value = maskFor(d, w, h, RAIL_W)
  lineMaskStyle.value = maskFor(d, w, h, LINE_W)
  glowMaskStyle.value = GLOW_BLUR ? maskFor(d, w, h, GLOW_STROKE, GLOW_BLUR) : {}
}

const setItemRef = (el, idx) => {
  if (el) itemEls.value[idx] = el
}

const reduceMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const scrollY = () =>
  typeof window === 'undefined' ? 0 : (window.scrollY ?? document.documentElement.scrollTop)

/* ── Measurement ─────────────────────────────────────────────────────────── */

// Document-space tops of every anchor, in document order. Re-measured whenever
// the article reflows (images decoding, fonts loading, language switching).
let anchors = []

function measure() {
  if (typeof document === 'undefined') return
  anchors = props.items
    .map(item => {
      const el = document.getElementById(item.id)
      return el ? { id: item.id, top: el.getBoundingClientRect().top + scrollY() } : null
    })
    .filter(Boolean)
  // The rail path is drawn from the items' own box geometry, so it has to be
  // rebuilt wherever the measurements are.
  buildMasks()
}

/* ── The magic line ──────────────────────────────────────────────────────── */

let lastY = 0
let lastH = 0
let placed = false
let anims = []

/**
 * Drive one bar to (y, h). Position comes from translateY and the morph from
 * scaleY rather than animating `height` — height would trigger layout every
 * frame. scaleY is anchored at transform-origin: top, so the visual top edge
 * is exactly `y` and the visual height is `h * scale`.
 */
function driveBar(el, y, h, fromY, fromH, animate) {
  if (!el) return null

  el.style.height = `${h}px`
  el.style.opacity = '1'

  const startScale = h > 0 ? Math.max(fromH / h, 0.01) : 1
  const endTransform = `translateY(${y}px) scaleY(1)`

  if (!animate || reduceMotion() || typeof el.animate !== 'function') {
    el.style.transform = endTransform
    return null
  }
  // cancel() + animate() in the same frame — no paint between, so no flicker.
  return el.animate(
    [
      { transform: `translateY(${fromY}px) scaleY(${startScale})` },
      { transform: endTransform }
    ],
    { duration: INDICATOR_MS, easing: EASE, fill: 'forwards' }
  )
}

/**
 * Move the indicator (and its glow, which must stay locked to it) to the
 * active item.
 */
function moveIndicator(animate = true) {
  const indicator = indicatorRef.value
  if (!indicator) return

  const idx = props.items.findIndex(i => i.id === activeId.value)
  const el = idx > -1 ? itemEls.value[idx] : null

  if (!el) {
    indicator.style.opacity = '0'
    if (glowRef.value) glowRef.value.style.opacity = '0'
    return
  }

  const y = el.offsetTop
  const h = el.offsetHeight
  const fromY = placed ? lastY : y
  const fromH = placed ? lastH : h

  anims.forEach(a => a.cancel())
  anims = [
    driveBar(indicatorRef.value, y, h, fromY, fromH, animate),
    driveBar(glowRef.value, y, h, fromY, fromH, animate)
  ].filter(Boolean)

  lastY = y
  lastH = h
  placed = true
}

/** Keep the active row inside the TOC's own scroll box. */
function keepActiveVisible() {
  const box = containerRef.value
  const idx = props.items.findIndex(i => i.id === activeId.value)
  const el = idx > -1 ? itemEls.value[idx] : null
  if (!box || !el) return

  const b = box.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  const behavior = reduceMotion() ? 'auto' : 'smooth'

  if (r.top - PAD < b.top) {
    box.scrollTo({ top: box.scrollTop + (r.top - b.top) - PAD, behavior })
  } else if (r.bottom + PAD > b.bottom) {
    box.scrollTo({ top: box.scrollTop + (r.bottom - b.bottom) + PAD, behavior })
  }
}

/* ── Scrollspy ───────────────────────────────────────────────────────────── */

let ticking = false
let lockUntil = 0

function sync() {
  if (!anchors.length || performance.now() < lockUntil) return

  const y = scrollY()
  const line = y + READ_LINE

  // The active heading is the last one to have passed the read line. That is a
  // total order — unlike an IntersectionObserver band, it cannot oscillate, and
  // it never falls behind a section that is thousands of pixels tall.
  let current = anchors[0].id
  for (const anchor of anchors) {
    if (anchor.top <= line) current = anchor.id
    else break
  }

  // Short sections at the end of the page may never reach the read line.
  const doc = document.documentElement
  if (y + window.innerHeight >= doc.scrollHeight - 4) {
    current = anchors[anchors.length - 1].id
  }

  if (current !== activeId.value) {
    activeId.value = current
    moveIndicator()
    keepActiveVisible()
  }
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    sync()
  })
}

function onResize() {
  measure()
  moveIndicator(false)
  sync()
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  activeId.value = id
  moveIndicator()
  keepActiveVisible()
  // Don't let sync() fight the smooth scroll on the way down.
  lockUntil = performance.now() + CLICK_LOCK_MS

  const y = el.getBoundingClientRect().top + scrollY() - ANCHOR_PAD
  // App.vue owns the Lenis instance; window.scrollTo would fight its RAF loop.
  window.dispatchEvent(new CustomEvent('request-scroll-to', { detail: { y } }))
}

/* ── Share ───────────────────────────────────────────────────────────────── */

const shareUrl = () => (typeof location === 'undefined' ? '' : location.href)

const shareTwitter = () => {
  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl())}`, '_blank', 'noopener')
}

const shareLinkedIn = () => {
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl())}`, '_blank', 'noopener')
}

const shareEmail = () => {
  location.href = `mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(shareUrl())}`
}

let copyTimer = null
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl())
    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copied.value = false }, 2000)
  } catch {
    copied.value = false
  }
}

/* ── Lifecycle ───────────────────────────────────────────────────────────── */

let resizeObserver = null
const onImageLoad = () => { measure(); sync() }

onMounted(async () => {
  if (typeof window === 'undefined') return
  await nextTick()

  measure()
  if (props.items.length) activeId.value = anchors[0]?.id || props.items[0].id
  moveIndicator(false)
  sync()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)

  // Headings shift while images decode; re-measure so the read line stays true.
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => { measure(); sync() })
    const article = document.querySelector('.tic-detail-article')
    if (article) resizeObserver.observe(article)
  }

  document.fonts?.ready.then(() => { measure(); sync() })
  document.querySelectorAll('.docs-main-column img').forEach(img => {
    if (!img.complete) img.addEventListener('load', onImageLoad, { once: true, passive: true })
  })
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  anims.forEach(a => a.cancel())
  clearTimeout(copyTimer)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})

// A language switch rewrites every heading, so item heights change.
watch(() => props.items, () => {
  nextTick(() => { measure(); moveIndicator(false); sync() })
})
</script>

<style scoped>
/* ─── Container ─── */
.tic-toc-container {
  position: sticky;
  top: 100px;
  width: 100%;
  max-width: 280px;
  max-height: calc(100vh - 130px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 8px 0 24px;
  user-select: none;
}
.tic-toc-container::-webkit-scrollbar { display: none; }

/* ─── Header ─── */
.toc-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  padding-left: 2px;
}
.toc-icon { color: var(--highlight); }
.toc-title {
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 1px;
}

/* ─── Nav Wrapper — shared offsetParent for rail, indicator, items ─── */
.toc-nav-wrapper {
  position: relative; /* THIS is the offsetParent */
}

/* ─── Masked rail layers ───
   Each layer is a full-width bar clipped by an SVG mask whose path bends at
   each indent change. Clipping the bar (rather than drawing the line directly)
   is what lets the indicator run along the bent rail instead of cutting
   straight across it. */
.rail-layer {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}
.rail-layer--rail { z-index: 1; }
.rail-layer--glow { z-index: 2; }
.rail-layer--line { z-index: 3; }

/* ─── Guide rail (the masked bar itself) ─── */
.toc-rail {
  width: 100%;
  height: 100%;
  background: var(--border-strong);
}

/* ─── Magic Line Indicator ─── */
.magic-line {
  width: 100%;
  height: 0;
  opacity: 0;
  background: var(--highlight);
  transform-origin: top;  /* scaleY grows downward from the item's top edge */
  will-change: transform;
  /* No CSS transition here on purpose — the glide is driven by WAAPI in
     moveIndicator(), which no stylesheet rule can override. */
}

/* ─── Glow — the falloff lives in the mask, so this stays a flat bar ───
   Alpha here is the bloom's overall strength (KNOB 2's other half).
   The path mask only shapes the bloom side-to-side, so the bar's own square
   ends would cut the halo off flat; this gradient fades them out. It composes
   with the parent layer's mask rather than replacing it. */
.magic-glow {
  width: 100%;
  height: 0;
  opacity: 0;
  background: rgba(var(--highlight-rgb), 0.85);
  transform-origin: top;
  will-change: transform;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%);
}

/* ─── TOC Items ─── */
.toc-item {
  display: block;
  position: relative;
  padding: 8px 0 8px 16px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s ease;
}
.toc-item.level-2 {
  padding-left: 28px;
  font-size: 0.82rem;
}
.toc-item:hover {
  color: var(--text-primary);
}
.toc-item:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 2px;
  border-radius: 4px;
}
.toc-item:active {
  color: var(--highlight-ink);
}
.toc-item.is-active {
  color: var(--highlight-ink);
  font-weight: 600;
}

/* ─── Share Block ─── */
.toc-share-block {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}
.share-label {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}
.share-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.share-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.2s ease, transform 0.2s ease;
}
.share-btn:hover {
  color: var(--highlight);
  transform: translateY(-2px);
}
.share-btn:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 2px;
}
.share-btn:active {
  transform: translateY(0);
}
.share-btn:disabled,
.share-btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.share-btn.is-copied {
  color: var(--highlight-ink);
}

@media (prefers-reduced-motion: reduce) {
  .share-btn:hover {
    transform: none;
  }
}
</style>

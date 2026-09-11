<template>
  <div class="pg-orbit">
    <!-- Desktop: draggable 3D ring carousel (perspective + preserve-3d). -->
    <div
      class="pg-orbit__stage"
      @pointerdown="onDown"
      @pointermove="onMove"
      @pointerup="onUp"
      @pointercancel="onUp"
    >
      <div class="pg-orbit__ring" :style="{ transform: `rotateX(3deg) rotateY(-4deg)` }">
        <button
          v-for="(card, s) in cards"
          :key="s"
          class="pg-orbit__card"
          :style="cardStyle(card)"
          :tabindex="card.clickable ? 0 : -1"
          :aria-label="`Zoom ${title} — screen ${s + 1}`"
          @click="onCardClick(s, card.clickable)"
        >
          <img :src="card.src" :alt="`${title} — screen ${s + 1}`" loading="lazy" />
        </button>
      </div>
    </div>

    <!-- Mobile: infinite marquee (track duplicated for a seamless loop). -->
    <div class="pg-orbit__marquee" aria-label="Project screenshots">
      <div class="pg-orbit__track">
        <button
          v-for="(img, i) in images"
          :key="`a-${i}`"
          class="pg-orbit__mcard"
          :aria-label="`Zoom ${title} — screen ${i + 1}`"
          @click="$emit('open', i)"
        >
          <img :src="img" :alt="`${title} — screen ${i + 1}`" loading="lazy" />
        </button>
        <button
          v-for="(img, i) in images"
          :key="`b-${i}`"
          class="pg-orbit__mcard"
          aria-hidden="true"
          tabindex="-1"
          @click="$emit('open', i)"
        >
          <img :src="img" alt="" loading="lazy" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})

const emit = defineEmits(['open'])

/* ── 3D ring carousel ─────────────────────────────────────────────
   Faithful port of tasteskill.dev's hero carousel. Each image sits on
   a ring in 3D space; `rotation` (0..1) is the drag offset. The visible
   arc is the front 72% of the ring — everything behind is faded out and
   pushed back on the Z axis, so the front card reads large & sharp while
   the neighbours fall away behind it.                            */
const rotation = ref(0)

const cards = computed(() => {
  const n = props.images.length || 1
  // Magic constants from the source: c is the arc curvature, p the exit
  // ramp, m the total span, f/g the segment boundaries along the arc.
  const c = (Math.PI / 2) * 90
  const p = 240
  const m = 280 + c + 240
  const f = 280 / m
  const g = (280 + c) / m

  return props.images.map((src, s) => {
    const a = (s / n + rotation.value) % 1 // position on the ring
    const o = a > 0 && a < 0.72            // inside the front arc?
    const l = o ? a / 0.72 : 0             // 0..1 across the arc
    // Fade the cards in/out at the arc edges (u = edge fade factor).
    const u = Math.min(
      Math.min(1, Math.max(0, l / 0.06)),
      Math.min(1, Math.max(0, (1 - l) / 0.08))
    )
    // x = "front-ness": 0 at the edges, ~1 dead centre (sine bell).
    const x = o
      ? Math.sin((l < f ? l / (2 * f) : 0.5 + (l - f) / (2 * (1 - f))) * Math.PI)
      : 0

    let nx, ny
    if (l < f) {
      nx = -10
      ny = -300 + (l / f) * 280
    } else if (l < g) {
      const e = (180 + ((l - f) / (g - f)) * 90) * (Math.PI / 180)
      nx = 80 + 90 * Math.cos(e)
      ny = -20 - 90 * Math.sin(e)
    } else {
      nx = 80 + ((l - g) / (1 - g)) * p
      ny = 70
    }

    return {
      src,
      z: Math.round(20 + 80 * x),
      opacity: o ? u * (0.4 + 0.6 * x) : 0,
      transform: `translate3d(calc(-50% + ${nx}%), calc(-50% + ${ny}%), ${-1000 + 1280 * x}px) rotateX(${4 - 2 * x}deg) rotateY(${-3 + 6 * l}deg) rotateZ(0deg) scale(${0.44 + 0.74 * x})`,
      clickable: x > 0.72,
    }
  })
})

const cardStyle = (card) => ({
  zIndex: card.z,
  opacity: card.opacity,
  transform: card.transform,
  pointerEvents: card.clickable ? 'auto' : 'none',
})

/* ── Drag to spin + slow idle auto-rotate ───────────────────────── */
const dragging = ref(false)
const hovered = ref(false)
let didDrag = false
let startX = 0
let startY = 0

function onDown(e) {
  dragging.value = true
  didDrag = false
  startX = e.clientX
  startY = e.clientY
  e.currentTarget.setPointerCapture?.(e.pointerId)
}

function onMove(e) {
  if (!dragging.value) return
  const dx = e.clientX - startX
  const dy = e.clientY - startY
  if (Math.abs(dx) + Math.abs(dy) > 4) didDrag = true
  const t = dy + 0.25 * dx
  rotation.value = (rotation.value + 0.0008 * t + 1) % 1
  startX = e.clientX
  startY = e.clientY
}

function onUp() {
  dragging.value = false
}

function onCardClick(s, clickable) {
  if (didDrag || !clickable) return
  emit('open', s)
}

/* Slow idle spin so the 3D depth reads even before the visitor drags;
   pauses on hover and while dragging. */
let rafId = null
let last = 0

function tick(t) {
  rafId = requestAnimationFrame(tick)
  if (dragging.value || hovered.value) {
    last = 0
    return
  }
  const dt = last ? (t - last) / 1000 : 0
  last = t
  if (dt > 0) rotation.value = (rotation.value + 0.018 * dt) % 1
}

onMounted(() => {
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* ══════════════════════════════════════════════════════════════
   ORBIT — a 3D ring of screenshots. The front card is large and
   sharp; neighbours rotate and fall away behind it. Drag to spin,
   click the front card to zoom. Mobile swaps to a marquee.
   ══════════════════════════════════════════════════════════════ */
.pg-orbit__stage {
  position: relative;
  /* The source carousel lives in a ~612px column (half of the hero grid),
     so its `w-[62%]` cards are only ~379px wide. Match that scope instead
     of stretching full-bleed, or the cards read ~2× too big. */
  max-width: 620px;
  /* Left-align the carousel to the container's text edge instead of
     dead-centering it in the full-bleed wrapper. */
  margin-left: max(var(--container-px), calc((100% - var(--container-max)) / 2 + var(--container-px)));
  margin-right: auto;
  height: clamp(340px, 48vh, 520px);
  perspective: 3400px;
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
}

.pg-orbit__stage:active {
  cursor: grabbing;
}

.pg-orbit__ring {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
}

.pg-orbit__card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 62%;
  overflow: hidden;
  border-radius: 18px;
  padding: 0;
  cursor: zoom-in;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.5);
  will-change: transform, opacity;
}

/* Natural aspect ratio (like the source's `h-auto w-full`) — no fixed
   aspect-ratio and no object-fit: cover, so the full screenshot is shown
   at its own proportions instead of being cropped/zoomed into a 16:10 box. */
.pg-orbit__card img {
  display: block;
  width: 100%;
  height: auto;
}

/* ── Mobile marquee ─────────────────────────────────────────── */
.pg-orbit__marquee {
  display: none;
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
}

.pg-orbit__track {
  display: flex;
  width: max-content;
  gap: 12px;
  animation: pg-orbit-scroll 28s linear infinite;
  will-change: transform;
}

.pg-orbit__track:hover {
  animation-play-state: paused;
}

.pg-orbit__mcard {
  flex: none;
  width: min(72vw, 320px);
  overflow: hidden;
  border-radius: 14px;
  padding: 0;
  cursor: zoom-in;
  box-shadow: var(--shadow-lg);
}

.pg-orbit__mcard img {
  display: block;
  width: 100%;
  height: auto;
}

@keyframes pg-orbit-scroll {
  to { transform: translateX(-50%); }
}

/* Desktop → mobile hand-off. */
@media (max-width: 860px) {
  .pg-orbit__stage { display: none; }
  .pg-orbit__marquee { display: block; }
}

@media (prefers-reduced-motion: reduce) {
  .pg-orbit__track { animation: none; }
  .pg-orbit__card { transition: none; }
}
</style>

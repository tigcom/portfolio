<template>
  <div class="pg-coverflow">
    <BlossomCarousel ref="carouselRef" as="ul" class="pg-coverflow__viewport">
      <li
        v-for="(img, i) in images"
        :key="i"
        data-blossom-slide
        class="pg-coverflow__slide"
        :class="{ 'is-active': i === activeIndex }"
      >
        <div class="pg-coverflow__stage">
          <button
            class="pg-coverflow__card"
            :aria-label="`Zoom ${title} — screen ${i + 1}`"
            @click="$emit('open', i)"
          >
            <img :src="img" :alt="`${title} — screen ${i + 1}`" loading="lazy" />
            <span class="pg-coverflow__num">{{ pad(i + 1) }}</span>
          </button>
        </div>
      </li>
    </BlossomCarousel>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { BlossomCarousel } from '@blossom-carousel/vue'

defineProps({
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})

defineEmits(['open'])

const pad = (n) => String(n).padStart(2, '0')

/* Track which slide sits at the centre so the cursor can differ:
   magnifier on the centred card, grab hand on the side cards. */
const carouselRef = ref(null)
const activeIndex = ref(0)

function updateActive() {
  const el = carouselRef.value?.$el
  if (!el) return
  const slides = el.querySelectorAll('[data-blossom-slide]')
  if (!slides.length) return
  const rect = el.getBoundingClientRect()
  const center = rect.left + rect.width / 2
  let best = 0
  let bestDist = Infinity
  slides.forEach((slide, i) => {
    const r = slide.getBoundingClientRect()
    const d = Math.abs(r.left + r.width / 2 - center)
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  activeIndex.value = best
}

onMounted(() => {
  const el = carouselRef.value?.$el
  if (el) {
    el.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    updateActive()
  }
})

onUnmounted(() => {
  const el = carouselRef.value?.$el
  el?.removeEventListener('scroll', updateActive)
  window.removeEventListener('resize', updateActive)
})
</script>

<style scoped>
/* ══════════════════════════════════════════════════════════════
   COVER-FLOW — canonical Blossom "cover flow": an inline-block row
   of tracks; each track carries an absolutely-positioned stage that
   slides (translateX) while its card yaws (rotateY). The view-timeline
   inset keeps the card flat through a centre dead-zone and spins it
   as it swings out to the sides.
   ══════════════════════════════════════════════════════════════ */
.pg-coverflow__viewport {
  --cf-card-w: min(74vw, 1000px);

  display: block;
  white-space: nowrap;
  transform-style: preserve-3d;
  /* Half-viewport minus half-card on each side → lets the first and last
     cards scroll into the centre like every other card. */
  padding-inline: calc(50% - var(--cf-card-w) / 2);
  padding-block: 24px;
  scroll-snap-type: x mandatory;
}

/* Track — inline-block spine the stage is centred on. */
.pg-coverflow__slide {
  display: inline-block;
  position: relative;
  width: var(--cf-card-w);
  aspect-ratio: 16 / 9;
  margin-inline: 10px;
  transform-style: preserve-3d;
  scroll-snap-align: center;
  view-timeline: --cf inline;
}

/* Stage — absolute layer that slides + zooms across the track. */
.pg-coverflow__stage {
  perspective: 500px;
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: pg-cf-slide linear both;
  animation-timeline: --cf;
  animation-range: contain;
}

.pg-coverflow__card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg-900);
  box-shadow: var(--shadow-lg);
  /* Side cards: grab hand (drag to spin the cover flow). */
  cursor: grab;
  overflow: hidden;
  animation: pg-cf-rotate linear both;
  animation-timeline: --cf;
  animation-range: contain;
}

/* Centred card: magnifying glass (click to zoom) + accent ring. */
.pg-coverflow__slide.is-active .pg-coverflow__card {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg stroke='%23000' stroke-width='4'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/g%3E%3Cg stroke='%23fff' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/g%3E%3C/svg%3E") 16 16, zoom-in;
  box-shadow: 0 0 0 3px var(--highlight), var(--shadow-lg);
}

.pg-coverflow__card img {
  display: block;
  width: 100%;
  height: 100%;
  /* Fill the card width and top-align so the top of tall screenshots/flows
     touches the top of the frame. */
  object-fit: cover;
  object-position: top;
}

.pg-coverflow__num {
  position: absolute;
  top: 12px;
  left: 14px;
  font-family: var(--font-clash);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  background: var(--backdrop);
  padding: 2px 7px;
  border-radius: 4px;
}

/* Stage slides toward the next/prev position and zooms the centred card;
   the card yaws away from centre. translateX/scale kept modest for big cards. */
@keyframes pg-cf-slide {
  0%   { transform: translateX(15%); }
  50%  { transform: translateX(0) scale(1.1); }
  100% { transform: translateX(-15%); }
}

@keyframes pg-cf-rotate {
  0%   { transform: rotateY(-55deg); }
  50%  { transform: rotateY(0deg); }
  100% { transform: rotateY(55deg); }
}

@media (max-width: 768px) {
  .pg-coverflow__viewport {
    --cf-card-w: 78vw;
    padding-block: 24px 16px;
  }
  .pg-coverflow__slide {
    margin-inline: 6px;
  }
}
</style>

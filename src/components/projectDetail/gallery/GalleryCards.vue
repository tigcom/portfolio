<template>
  <div class="pg-cards">
    <BlossomCarousel ref="carouselRef" as="ul" class="pg-cards__viewport">
      <li
        v-for="(img, i) in images"
        :key="i"
        data-blossom-slide
        class="pg-cards__slide"
        :class="{ 'is-active': i === activeIndex }"
      >
        <button
          class="pg-cards__card"
          :aria-label="`Zoom ${title} — screen ${i + 1}`"
          @click="$emit('open', i)"
        >
          <img :src="img" :alt="`${title} — screen ${i + 1}`" loading="lazy" />
          <span class="pg-cards__num">{{ pad(i + 1) }}</span>
        </button>
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

/* Track which slide sits at the centre so we can ring it with the highlight. */
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
   SLIDESHOW — one card per screen; the card pans a little
   (subtle parallax) as the slide scrolls through. The centred
   slide gets a highlight ring (gap keeps it from being covered).
   ══════════════════════════════════════════════════════════════ */
.pg-cards__viewport {
  --cards-w: min(74vw, 1000px);

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  column-gap: 20px;
  scroll-snap-type: x mandatory;
  width: 100%;
  padding-inline: calc(50% - var(--cards-w) / 2);
  padding-block: 24px;
}

.pg-cards__slide {
  width: var(--cards-w);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  scroll-snap-align: center;

  view-timeline: --cards inline;
}

.pg-cards__slide.is-active {
  box-shadow: 0 0 0 3px var(--highlight), var(--shadow-lg);
}

.pg-cards__card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: var(--bg-900);
  cursor: zoom-in;

  animation: pg-cards-parallax linear both;
  animation-timeline: --cards;
  animation-range: cover;
}

.pg-cards__card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.pg-cards__num {
  position: absolute;
  top: 14px;
  left: 16px;
  font-family: var(--font-clash);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  background: var(--backdrop);
  padding: 2px 7px;
  border-radius: 4px;
}

@keyframes pg-cards-parallax {
  0%   { transform: translateX(-15%); }
  50%  { transform: translateX(0%); }
  100% { transform: translateX(15%); }
}

@media (max-width: 768px) {
  .pg-cards__viewport {
    --cards-w: 72vw;
  }
}
</style>

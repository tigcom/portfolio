<template>
  <div class="pg-cards">
    <BlossomCarousel ref="carouselRef" as="ul" class="pg-cards__viewport">
      <li
        v-for="(img, i) in images"
        :key="i"
        data-blossom-slide
        class="pg-cards__slide"
        :class="{
          'is-active': i === activeIndex,
          'is-left': i < activeIndex,
          'is-right': i > activeIndex,
        }"
      >
        <div class="pg-cards__frame">
          <button
            class="pg-cards__card"
            :aria-label="`Zoom ${title} — screen ${i + 1}`"
            @click="$emit('open', i)"
          >
            <img :src="img" :alt="`${title} — screen ${i + 1}`" loading="lazy" />
            <span class="pg-cards__num">{{ pad(i + 1) }}</span>
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
   slide gets a highlight ring; the side cards lean back, shrink
   and tuck behind it. The depth transform lives on the inner
   `.frame` (NOT the slide) so BlossomCarousel still measures each
   slide at its true centre and the snap stays accurate.
   ══════════════════════════════════════════════════════════════ */
.pg-cards__viewport {
  --cards-w: min(74vw, 1000px);

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  scroll-snap-type: x mandatory;
  width: 100%;
  padding-inline: calc(50% - var(--cards-w) / 2);
  padding-block: 24px;
}

.pg-cards__slide {
  position: relative;
  width: var(--cards-w);
  aspect-ratio: 16 / 9;
  scroll-snap-align: center;

  view-timeline: --cards inline;
}

.pg-cards__slide.is-active {
  z-index: 1;
}

/* Frame carries the visual card (rounded + clipped) and the depth transform. */
.pg-cards__frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out !important;
}

.pg-cards__slide.is-active .pg-cards__frame {
  box-shadow: 0 0 0 4px var(--highlight), var(--shadow-lg);
}

/* Depth: side cards lean away — near edge (toward centre) stays large (~80%)
   while the far edge recedes (~40%). translateX pulls them in to tuck behind
   the centre card (~7% overlap). */
.pg-cards__slide.is-left .pg-cards__frame {
  transform: translateX(30%) perspective(800px) rotateY(-32deg) scale(0.55);
}

.pg-cards__slide.is-right .pg-cards__frame {
  transform: translateX(-30%) perspective(800px) rotateY(32deg) scale(0.55);
}

/* Non-focused slides: frosted glass — blur + darken + grain. */
.pg-cards__slide:not(.is-active) .pg-cards__card {
  filter: blur(4px) brightness(0.55) saturate(0.85);
}

.pg-cards__frame::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0;
  mix-blend-mode: overlay;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out !important;
}

.pg-cards__slide:not(.is-active) .pg-cards__frame::after {
  opacity: 0.15;
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
  transition: filter 0.5s ease-in-out !important;

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

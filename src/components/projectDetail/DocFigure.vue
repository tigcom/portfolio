<template>
  <!--
    One full-width documentation figure. The page deliberately shows tall
    full-page captures at natural aspect ratio, so an explicit width/height on
    the <img> is what reserves the box before decode — without it the document
    keeps growing while images stream in and the TOC's active row drifts.
  -->
  <figure
    v-for="img in images"
    :key="img.src"
    class="natural-image-wrap"
    :class="{ 'is-zoomable': img.lbIndex !== null }"
    :role="img.lbIndex !== null ? 'button' : null"
    :tabindex="img.lbIndex !== null ? 0 : null"
    :aria-label="img.lbIndex !== null ? `${alt} — ${label}` : null"
    @click="onActivate(img, $event)"
    @keydown.enter.prevent="onActivate(img, $event)"
    @keydown.space.prevent="onActivate(img, $event)"
  >
    <img
      :src="img.src"
      :alt="img.alt"
      :width="img.w"
      :height="img.h"
      class="natural-full-img"
      loading="lazy"
      decoding="async"
    />
    <figcaption v-if="img.caption" class="image-caption">{{ img.caption }}</figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  /** Section images, each already carrying an `lbIndex` (or null when the
   *  capture is too tall to be useful in the lightbox). */
  images: { type: Array, default: () => [] },
  /** Localized label for the zoom affordance, e.g. "View at full resolution". */
  label: { type: String, default: '' }
})

const emit = defineEmits(['open'])

const onActivate = (img, event) => {
  if (img.lbIndex === null) return
  // Ignore key repeats bubbling from the inner <img>.
  if (event.type === 'keydown' && event.target !== event.currentTarget) return
  emit('open', img.lbIndex)
}
</script>

<style scoped>
.natural-image-wrap {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-700);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  margin-bottom: 20px;
  cursor: default;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease;
}

.natural-image-wrap.is-zoomable {
  cursor: zoom-in;
}

.natural-image-wrap.is-zoomable:hover {
  transform: translateY(-2px);
  border-color: var(--highlight);
}

.natural-image-wrap.is-zoomable:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 3px;
}

.natural-image-wrap.is-zoomable:active {
  transform: translateY(0);
}

.natural-full-img {
  width: 100%;
  height: auto;
  display: block;
}

.image-caption {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--text-secondary);
  padding: 10px 14px;
  margin: 0;
}

@media (prefers-reduced-motion: reduce) {
  .natural-image-wrap.is-zoomable:hover,
  .natural-image-wrap.is-zoomable:active {
    transform: none;
  }
}
</style>

<template>
  <div class="pg" :data-variant="variant">
    <component
      :is="styleComponent"
      v-if="styleComponent && images.length"
      :images="images"
      :title="title"
      @open="openLightbox"
    />

    <GalleryLightbox
      :index="lightboxIndex"
      :images="images"
      :title="title"
      @close="closeLightbox"
      @prev="prevImage"
      @next="nextImage"
    />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import GalleryLightbox from './gallery/GalleryLightbox.vue'
import GalleryCoverFlow from './gallery/GalleryCoverFlow.vue'
import GalleryFlipbook from './gallery/GalleryFlipbook.vue'
import GalleryCards from './gallery/GalleryCards.vue'

/**
 * Gallery styles, keyed by the `galleryLayout` value in projects.json.
 * Each style owns its own layout and CSS; they all share the lightbox below.
 */
const STYLES = {
  'cover-flow': GalleryCoverFlow,
  flipbook: GalleryFlipbook,
  cards: GalleryCards,
}

const props = defineProps({
  variant: { type: String, default: 'thumbnails' },
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})

const styleComponent = computed(() => STYLES[props.variant] ?? null)

if (import.meta.env.DEV) {
  watchEffect(() => {
    if (props.variant && !STYLES[props.variant]) {
      console.warn(
        `[ProjectGallery] Unknown variant "${props.variant}". ` +
          `Expected one of: ${Object.keys(STYLES).join(', ')}.`
      )
    }
  })
}

/* ── Lightbox state (shared by every style) ────────────────────────────── */
const lightboxIndex = ref(null)

const openLightbox = (i) => {
  lightboxIndex.value = i
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.images.length) % props.images.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.images.length
}
</script>

<style scoped>
.pg {
  /* Full-bleed: escape the 1240px .container so the gallery spans the viewport. */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0;
}
</style>

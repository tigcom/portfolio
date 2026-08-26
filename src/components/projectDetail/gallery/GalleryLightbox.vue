<template>
  <Teleport to="body">
    <Transition name="pg-lightbox">
      <div
        v-if="index !== null"
        class="pg-lightbox"
        data-lenis-prevent
        @click.self="$emit('close')"
      >
        <div class="pg-lightbox-stage">
          <button class="pg-lightbox-close" @click="$emit('close')" aria-label="Close">
            <i class="fas fa-xmark"></i>
          </button>

          <button
            v-if="images.length > 1"
            class="pg-lightbox-nav prev"
            @click.stop="$emit('prev')"
            aria-label="Previous"
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <img
            :src="images[index]"
            :alt="`${title} — screen ${index + 1}`"
            class="pg-lightbox-img"
          />

          <button
            v-if="images.length > 1"
            class="pg-lightbox-nav next"
            @click.stop="$emit('next')"
            aria-label="Next"
          >
            <i class="fas fa-chevron-right"></i>
          </button>

          <div class="pg-lightbox-footer">{{ pad(index + 1) }} / {{ pad(images.length) }}</div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  /** Index of the image being shown, or null when closed. */
  index: { type: Number, default: null },
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})

const emit = defineEmits(['close', 'prev', 'next'])

const pad = (n) => String(n).padStart(2, '0')

/* Lock page scroll while the overlay is open. */
watch(
  () => props.index,
  (i) => {
    document.body.style.overflow = i === null ? '' : 'hidden'
  }
)

function onKey(e) {
  if (props.index === null) return
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowLeft') emit('prev')
  else if (e.key === 'ArrowRight') emit('next')
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.pg-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(5, 5, 7, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: zoom-out;
}

.pg-lightbox-stage {
  position: relative;
  max-width: min(1100px, 92vw);
}

.pg-lightbox-img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 84vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  cursor: default;
}

.pg-lightbox-close {
  position: absolute;
  top: -18px;
  right: -18px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: var(--bg-800);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  z-index: 3;
  transition: background 0.25s, color 0.25s, border-color 0.25s;
}

.pg-lightbox-close:hover {
  background: var(--highlight);
  color: var(--bg-900);
  border-color: var(--highlight);
}

.pg-lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: var(--bg-800);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  z-index: 3;
  transition: background 0.25s, color 0.25s;
}

.pg-lightbox-nav.prev { left: -64px; }
.pg-lightbox-nav.next { right: -64px; }

.pg-lightbox-nav:hover {
  background: var(--highlight);
  color: var(--bg-900);
}

.pg-lightbox-footer {
  position: absolute;
  bottom: -34px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-clash);
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
  letter-spacing: 1px;
}

/* Transition */
.pg-lightbox-enter-active,
.pg-lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.pg-lightbox-enter-active .pg-lightbox-stage,
.pg-lightbox-leave-active .pg-lightbox-stage {
  transition: transform 0.25s ease;
}

.pg-lightbox-enter-from,
.pg-lightbox-leave-to {
  opacity: 0;
}

.pg-lightbox-enter-from .pg-lightbox-stage,
.pg-lightbox-leave-to .pg-lightbox-stage {
  transform: scale(0.94);
}

@media (max-width: 768px) {
  .pg-lightbox-nav.prev { left: 10px; }
  .pg-lightbox-nav.next { right: 10px; }
  .pg-lightbox { padding: 24px; }
  .pg-lightbox-footer { bottom: -28px; }
}
</style>

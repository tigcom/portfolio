<template>
  <figure
    ref="cardRef"
    class="tilted-card"
    :style="{ height: containerHeight, width: containerWidth }"
    @mousemove="handleMouse"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="showMobileWarning" class="tilted-card__warning">
      This effect is not optimized for mobile. Check on desktop.
    </div>

    <div class="tilted-card__inner" :style="{ width: imageWidth, height: imageHeight, borderRadius: radius }">
      <img
        :src="imageSrc"
        :alt="altText"
        :class="{ 'tilted-card__img': true, 'tilted-card__img--auto': imageHeight === 'auto' }"
      />

      <div v-if="displayOverlayContent" class="tilted-card__overlay">
        <slot name="overlay" />
      </div>
    </div>

    <figcaption
      v-if="showTooltip && captionText"
      ref="captionRef"
      class="tilted-card__caption"
    >
      {{ captionText }}
    </figcaption>
  </figure>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  imageSrc: { type: String, required: true },
  altText: { type: String, default: 'Tilted card image' },
  captionText: { type: String, default: '' },
  containerHeight: { type: String, default: '100%' },
  containerWidth: { type: String, default: '100%' },
  imageHeight: { type: String, default: '100%' },
  imageWidth: { type: String, default: '100%' },
  scaleOnHover: { type: Number, default: 1.06 },
  rotateAmplitude: { type: Number, default: 12 },
  showMobileWarning: { type: Boolean, default: false },
  showTooltip: { type: Boolean, default: false },
  displayOverlayContent: { type: Boolean, default: false },
  radius: { type: String, default: '15px' },
})

const cardRef = ref(null)
const captionRef = ref(null)

let rotXTo = null
let rotYTo = null
let scaleTo = null
let captionXTo = null
let captionYTo = null

const handleMouse = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const offsetX = e.clientX - rect.left - rect.width / 2
  const offsetY = e.clientY - rect.top - rect.height / 2

  const rotationX = (offsetY / (rect.height / 2)) * -props.rotateAmplitude
  const rotationY = (offsetX / (rect.width / 2)) * props.rotateAmplitude

  rotXTo?.(rotationX)
  rotYTo?.(rotationY)

  // 👉 THÊM ĐOẠN NÀY ĐỂ DI CHUYỂN TOOLTIP THEO CHUỘT
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  captionXTo?.(x)
  captionYTo?.(y)
}

const handleMouseEnter = () => {
  scaleTo?.(props.scaleOnHover)
  if (captionRef.value) gsap.to(captionRef.value, { opacity: 1, duration: 0.3 })
}

const handleMouseLeave = () => {
  scaleTo?.(1)
  rotXTo?.(0)
  rotYTo?.(0)
  if (captionRef.value) gsap.to(captionRef.value, { opacity: 0, duration: 0.3 })
}

onMounted(() => {
  if (!cardRef.value) return
  const inner = cardRef.value.querySelector('.tilted-card__inner')
  if (inner) {
    rotXTo = gsap.quickTo(inner, 'rotationX', { duration: 0.5, ease: 'power3.out' })
    rotYTo = gsap.quickTo(inner, 'rotationY', { duration: 0.5, ease: 'power3.out' })
    scaleTo = gsap.quickTo(inner, 'scale', { duration: 0.4, ease: 'power3.out' })
  }

  // 👉 THÊM KHỞI TẠO QUICKTO CHO CAPTION
  if (captionRef.value) {
    captionXTo = gsap.quickTo(captionRef.value, 'x', { duration: 0.2, ease: 'power3.out' })
    captionYTo = gsap.quickTo(captionRef.value, 'y', { duration: 0.2, ease: 'power3.out' })
  }
})

onBeforeUnmount(() => {
  rotXTo = rotYTo = scaleTo = captionXTo = captionYTo = null
})
</script>

<style scoped>
.tilted-card {
  position: relative;
  perspective: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

.tilted-card__warning {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-secondary);
  z-index: 5;
}

.tilted-card__inner {
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  will-change: transform;
  box-shadow: var(--shadow-lg);
}

.tilted-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}

/* Natural-height mode: show the full image at its own aspect ratio instead of
   cropping into a fixed box. Used for full-bleed hero screenshots. */
.tilted-card__img--auto {
  height: auto;
  object-fit: fill;
}

.tilted-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  transform: translateZ(30px);
  display: flex;
}

.tilted-card__caption {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  background: #fff;
  padding: 4px 10px;
  font-size: 10px;
  color: #2d2d2d;
  opacity: 0;
  z-index: 3;
  pointer-events: none;
}
</style>

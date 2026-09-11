<template>
  <div
    ref="divRef"
    class="spotlight-card"
    @mousemove="handleMouseMove"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="spotlight-card__glow"
      :style="{
        opacity,
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
      }"
    />
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  className: { type: String, default: '' },
  spotlightColor: { type: String, default: 'rgba(var(--highlight-rgb), 0.32)' },
})

const divRef = ref(null)
const isFocused = ref(false)
const position = ref({ x: 0, y: 0 })
const opacity = ref(0)

const handleMouseMove = (e) => {
  if (!divRef.value || isFocused.value) return
  const rect = divRef.value.getBoundingClientRect()
  position.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
}

const handleFocus = () => {
  isFocused.value = true
  opacity.value = 0.85
}

const handleBlur = () => {
  isFocused.value = false
  opacity.value = 0
}

const handleMouseEnter = () => {
  opacity.value = 0.85
}

const handleMouseLeave = () => {
  opacity.value = 0
}
</script>

<style scoped>
.spotlight-card {
  position: relative;
  border-radius: 24px;
  border: 1px solid var(--border);
  overflow: hidden;
}

/* The glow layer only ever animates opacity — it never carries a theme colour
   (its `background` is a radial gradient), so we force our own transition to
   override the global `* { transition: ... !important }` rule in main.css. */
.spotlight-card__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out !important;
}
</style>

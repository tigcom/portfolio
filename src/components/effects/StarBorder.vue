<template>
  <component
    :is="as"
    class="starborder"
    v-bind="restAttrs"
  >
    <span
      class="starborder__streak starborder__streak--bottom"
      :style="{ background: streakBg, animationDuration: speed }"
    />
    <span
      class="starborder__streak starborder__streak--top"
      :style="{ background: streakBg, animationDuration: speed }"
    />
    <span class="starborder__content"><slot /></span>
  </component>
</template>

<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  as: { type: String, default: 'button' },
  customClass: { type: String, default: '' },
  color: { type: String, default: 'var(--highlight)' },
  speed: { type: String, default: '6s' },
  radius: { type: String, default: '100px' },
  thickness: { type: String, default: '2px' },
})

const restAttrs = useAttrs()

const streakBg = computed(() => `radial-gradient(circle, ${props.color}, transparent 10%)`)
</script>

<style scoped>
/* A thin animated frame wrapper — the shooting-star streaks glide along the
   top & bottom edges behind whatever sits in the slot. The real visual
   (button, card) is provided by the slot, so this stays theme-agnostic. */
.starborder {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: v-bind('radius');
  border: none;
  background: transparent;
  /* The vertical padding is the channel the shooting-star streaks glide in,
     so they stay visible instead of being hidden behind the opaque slot. */
  padding: v-bind('thickness') 0;
}

.starborder__content {
  position: relative;
  z-index: 10;
  display: block;
}

.starborder__streak {
  position: absolute;
  z-index: 0;
  width: 300%;
  height: 50%;
  border-radius: 50%;
  opacity: 0.9;
  pointer-events: none;
}

.starborder__streak--bottom {
  right: -250%;
  bottom: -11px;
  animation: star-movement-bottom linear infinite alternate;
}

.starborder__streak--top {
  top: -10px;
  left: -250%;
  animation: star-movement-top linear infinite alternate;
}

@keyframes star-movement-bottom {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(-100%, 0%);
    opacity: 0;
  }
}

@keyframes star-movement-top {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(100%, 0%);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .starborder__streak {
    animation: none;
  }
}
</style>

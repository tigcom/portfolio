<template>
  <div class="page-loader" ref="loaderEl">
    <div class="loader-logo">MD</div>
    <div class="loader-bar-wrapper">
      <div class="loader-bar" ref="barEl"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['loaded'])
const loaderEl = ref(null)
const barEl = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('loaded')
    }
  })

  tl.to(barEl.value, {
    width: '100%',
    duration: 1.2,
    ease: 'power2.inOut'
  })
  .to(loaderEl.value, {
    yPercent: -100,
    duration: 0.7,
    ease: 'power3.inOut',
    delay: 0.15
  })
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  background: var(--bg-950);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}
.loader-logo {
  font-family: var(--font-clash);
  font-size: 3rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -2px;
}
.loader-bar-wrapper {
  width: 200px; height: 2px;
  background: var(--bg-700);
  border-radius: 2px; overflow: hidden;
}
.loader-bar {
  height: 100%; width: 0%;
  background: var(--highlight);
  border-radius: 2px;
}
</style>

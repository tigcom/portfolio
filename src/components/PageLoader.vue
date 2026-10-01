<template>
  <div class="page-loader" ref="loaderEl">
    <div class="loader-logo">PK</div>
    <div class="loader-bar-wrapper">
      <div class="loader-bar" ref="barEl"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['loaded'])
const loaderEl = ref(null)
const barEl = ref(null)

// The curtain covers the whole viewport at z-index 9999, so anything that stops
// it from being dismissed traps the visitor on a black screen. The GSAP
// timeline is the happy path, not the contract: a stalled ticker (heavy WebGL
// on a slow device), a killed timeline or a boot error must all still let the
// page through.
const ANIM_MS = 1200 + 150 + 700
const FAILSAFE_MS = ANIM_MS + 450

let dismissed = false
let failsafeId = null
let tl = null

function finish() {
  if (dismissed) return
  dismissed = true
  clearTimeout(failsafeId)
  emit('loaded')
}

onMounted(() => {
  failsafeId = setTimeout(finish, FAILSAFE_MS)
  window.addEventListener('error', finish)
  window.addEventListener('unhandledrejection', finish)

  if (!barEl.value || !loaderEl.value) {
    finish()
    return
  }

  tl = gsap.timeline({ onComplete: finish })

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

onUnmounted(() => {
  clearTimeout(failsafeId)
  window.removeEventListener('error', finish)
  window.removeEventListener('unhandledrejection', finish)
  tl?.kill()
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

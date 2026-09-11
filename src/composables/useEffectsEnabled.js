import { ref } from 'vue'

// Global "effects" switch — mirrors the theme toggle (App.vue / AppNavbar.vue):
// a module-level singleton ref so every effect component shares the same flag,
// persisted to localStorage and reflected as `data-effects="off"` on <html>.
const enabled = ref(true)
let bootstrapped = false

function bootstrap() {
  if (bootstrapped || typeof window === 'undefined') return
  bootstrapped = true
  enabled.value = localStorage.getItem('portfolio-effects') !== 'off'
  apply()
}

function apply() {
  if (enabled.value) {
    document.documentElement.removeAttribute('data-effects')
  } else {
    document.documentElement.setAttribute('data-effects', 'off')
  }
}

function setEffectsEnabled(value) {
  enabled.value = !!value
  localStorage.setItem('portfolio-effects', value ? 'on' : 'off')
  apply()
}

function toggleEffects() {
  setEffectsEnabled(!enabled.value)
}

bootstrap()

export function useEffectsEnabled() {
  return { enabled, setEffectsEnabled, toggleEffects }
}

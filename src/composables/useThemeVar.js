import { ref, onMounted, onBeforeUnmount } from 'vue'

// Resolve a CSS custom property (e.g. '--highlight') to its computed string and
// keep it reactive when the theme toggles `data-theme` on <html> (see App.vue /
// AppNavbar.vue). Resolves synchronously so canvas / three.js consumers can use
// the value before the component mounts.
export function useThemeVar(name, fallback = '') {
  const value = ref(fallback)
  let observer = null

  const resolve = () => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    if (v) value.value = v
  }

  resolve()

  onMounted(() => {
    observer = new MutationObserver(resolve)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return value
}

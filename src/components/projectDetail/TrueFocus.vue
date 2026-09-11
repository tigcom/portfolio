<template>
  <component
    :is="tag"
    ref="containerRef"
    class="tfocus"
    :style="rootStyle"
  >
    <span
      v-for="(word, index) in words"
      :key="index"
      :ref="el => setWordRef(el, index)"
      class="tfocus__word"
      :style="wordStyle(index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    >{{ word }}</span>

    <span class="tfocus__rect" :style="rectStyle" aria-hidden="true">
      <span class="tfocus__corner tfocus__corner--tl"></span>
      <span class="tfocus__corner tfocus__corner--tr"></span>
      <span class="tfocus__corner tfocus__corner--bl"></span>
      <span class="tfocus__corner tfocus__corner--br"></span>
    </span>
  </component>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  sentence: { type: String, default: 'True Focus' },
  separator: { type: String, default: ' ' },
  manualMode: { type: Boolean, default: false },
  blurAmount: { type: Number, default: 5 },
  borderColor: { type: String, default: 'var(--highlight)' },
  glowColor: { type: String, default: 'var(--highlight)' },
  animationDuration: { type: Number, default: 0.5 },
  pauseBetweenAnimations: { type: Number, default: 1 },
  justify: { type: String, default: 'center' }, // 'center' | 'right' | 'left'
  tag: { type: String, default: 'div' },
})

const words = computed(() => props.sentence.split(props.separator).filter(Boolean))

const containerRef = ref(null)
const wordRefs = ref([])
const currentIndex = ref(0)
const lastActiveIndex = ref(0)
const focusRect = ref({ x: 0, y: 0, width: 0, height: 0 })

const justifyContent = computed(() =>
  props.justify === 'right' ? 'flex-end' : props.justify === 'left' ? 'flex-start' : 'center'
)

/* CSS custom props flow down to the scoped rules (transition duration + the
   bracket border/glow colours), so they can be driven by the props. */
const rootStyle = computed(() => ({
  '--tf-duration': `${props.animationDuration}s`,
  '--tf-border': props.borderColor,
  '--tf-glow': props.glowColor,
  justifyContent: justifyContent.value,
}))

const wordStyle = (index) => ({
  filter: index === currentIndex.value ? 'blur(0px)' : `blur(${props.blurAmount}px)`,
})

const rectStyle = computed(() => ({
  left: `${focusRect.value.x}px`,
  top: `${focusRect.value.y}px`,
  width: `${focusRect.value.width}px`,
  height: `${focusRect.value.height}px`,
}))

function setWordRef(el, index) {
  if (el) wordRefs.value[index] = el
}

async function measure(index) {
  await nextTick()
  const container = containerRef.value
  const word = wordRefs.value[index]
  if (!container || !word) return
  const pr = container.getBoundingClientRect()
  const wr = word.getBoundingClientRect()
  focusRect.value = {
    x: wr.left - pr.left,
    y: wr.top - pr.top,
    width: wr.width,
    height: wr.height,
  }
}

watch(
  [currentIndex, words],
  () => {
    const n = words.value.length
    if (!n) return
    // Language switch can shrink the word count (e.g. "Giao diện" → "Interface").
    if (currentIndex.value >= n) currentIndex.value = 0
    if (!wordRefs.value[currentIndex.value]) return
    measure(currentIndex.value)
  },
  { immediate: true }
)

function handleMouseEnter(index) {
  if (!props.manualMode) return
  lastActiveIndex.value = currentIndex.value
  currentIndex.value = index
}
function handleMouseLeave() {
  if (!props.manualMode) return
  currentIndex.value = lastActiveIndex.value
}

let interval = null
function startInterval() {
  if (interval) clearInterval(interval)
  if (props.manualMode) return
  const n = words.value.length
  if (n <= 1) return // a single word can't cycle
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % n
  }, (props.animationDuration + props.pauseBetweenAnimations) * 1000)
}

watch(
  [() => props.manualMode, () => props.animationDuration, () => props.pauseBetweenAnimations, words],
  startInterval,
  { immediate: true }
)

onMounted(async () => {
  await nextTick()
  if (wordRefs.value[0]) measure(0)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.tfocus {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3em;
}

/* Font family / weight / size / colour inherit from the heading (h2) so the
   effect matches the site typography instead of imposing a fixed size. */
.tfocus__word {
  transition: filter var(--tf-duration, 0.5s) ease !important;
  will-change: filter;
}

.tfocus__rect {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  /* `!important` overrides the global `* { transition: ... !important }` theme
     rule in main.css. Positioning uses left/top (not transform) so it also
     avoids the `[style*="transform"] { transition: none !important }` rule. */
  transition:
    left var(--tf-duration, 0.5s) ease,
    top var(--tf-duration, 0.5s) ease,
    width var(--tf-duration, 0.5s) ease,
    height var(--tf-duration, 0.5s) ease !important;
  will-change: left, top, width, height;
}

.tfocus__corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 3px solid var(--tf-border, #fff);
  border-radius: 3px;
  filter: drop-shadow(0 0 4px var(--tf-glow, rgba(0, 255, 0, 0.6)));
}

.tfocus__corner--tl { top: -10px; left: -10px; border-right: 0; border-bottom: 0; }
.tfocus__corner--tr { top: -10px; right: -10px; border-bottom: 0; border-left: 0; }
.tfocus__corner--bl { bottom: -10px; left: -10px; border-top: 0; border-right: 0; }
.tfocus__corner--br { right: -10px; bottom: -10px; border-top: 0; border-left: 0; }
</style>

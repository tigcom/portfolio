<template>
  <button
    ref="buttonEl"
    type="button"
    class="page-mascot"
    :style="rootStyle"
    :aria-label="ariaLabel"
    @click="boop"
  >
    <span ref="squashEl" class="page-mascot__squash">
      <span class="page-mascot__lean" :style="leanStyle">
        <span class="page-mascot__layer" :style="directionsStyle" />
        <span class="page-mascot__layer" :style="reactionsStyle" />
      </span>
    </span>
  </button>
</template>

<script setup>
/**
 * Port cua `Mascot` (page-mascot) tu React sang Vue 3.
 * Nguon goc: ~/.claude/skills/page-mascot/mascot.tsx — MIT, Kamran Ahmed.
 *
 * Nhan vat la 2 sprite sheet luoi 3x3 (huong dau + bieu cam). Component doi o
 * bang cach dich `background-position`, khong xoay than/than giu co dinh.
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  /** Duong dan sheet 9 huong dau (luoi 3x3). */
  directions: { type: String, required: true },
  /** Duong dan sheet 9 bieu cam (luoi 3x3). */
  reactions: { type: String, required: true },
  /** Canh vuong, px. */
  size: { type: Number, default: 140 },
  /** Ten nhan vat, dung cho aria-label mac dinh. */
  label: { type: String, default: 'mascot' },
  /** Ghi de aria-label. Rong thi dung mac dinh theo `label`. */
  ariaLabel: { type: String, default: '' }
})

const DIRECTIONS = [
  'up-left', 'up', 'up-right',
  'left', 'center', 'right',
  'down-left', 'down', 'down-right'
]

const REACTIONS = [
  'blink', 'heart', 'sparkle',
  'surprised', 'wink', 'bashful',
  'sleepy', 'dizzy', 'delighted'
]

// Vong tron 8 huong theo chieu kim dong ho, khop voi atan2 khi truc y huong xuong:
// 0: phai (3h), 1: duoi-phai (4h30), 2: duoi (6h), 3: duoi-trai (7h30),
// 4: trai (9h), 5: tren-trai (10h30), 6: tren (12h), 7: tren-phai (1h30).
const CLOCKWISE = [
  'right',
  'down-right',
  'down',
  'down-left',
  'left',
  'up-left',
  'up',
  'up-right'
]
const SECTOR = (Math.PI * 2) / CLOCKWISE.length
const HYSTERESIS = 0.03

// 9 o huong chi cho 8 nac roi rac, nen con tro di lien tuc ma dau nhan vat van
// nhay tung bac 45 do. Lop nghieng nay chay lien tuc de lap day khoang giua:
// vector don vi huong ve con tro, nhan voi do "voi" tang dan theo khoang cach.
const LEAN_REACH = 520 // px: xa hon muc nay thi do nghieng bao hoa
const LEAN_SHIFT = 0.08 // phan canh, dich chuyen toi da
const LEAN_TILT = 3.6 // do, nghieng dau toi da

function wrap(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle))
}

const PAYOFFS = ['heart', 'sparkle', 'delighted']
const BOOP_PAYOFF = 120
const BOOP_END = 560
const SQUASH_MS = 420
const DIZZY_AFTER = 4
const DIZZY_WINDOW = 1600
const DIZZY_END = 1100

const SQUASH = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' }
]

// background-size 300% khien moi o la mot buoc 0/50/100% gon tren ca hai truc.
function cell3x3(index) {
  return {
    backgroundSize: '300% 300%',
    backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`
  }
}

const buttonEl = ref(null)
const squashEl = ref(null)
const direction = ref('center')
const reaction = ref(null)
/** Vector don vi [-1,1] huong ve con tro, da nhan do voi khoang cach. */
const lean = ref({ x: 0, y: 0 })

let sector = -1
let pointer = null
let timers = []
let reducedMotion = false
const boops = { count: 0, at: 0 }

const ariaLabel = computed(() => props.ariaLabel || `Boop the ${props.label}`)
const rootStyle = computed(() => ({ width: `${props.size}px`, height: `${props.size}px` }))
const deadZone = computed(() => Math.max(14, props.size * 0.3))
// Ra khoi vung chet phai xa hon luc vao: con tro dung quanh ria ma mot nguong
// duy nhat thi nhan vat rung qua lai giua 'center' va mot huong.
const deadZoneExit = computed(() => deadZone.value * 1.18)

const leanStyle = computed(() => {
  const shift = props.size * LEAN_SHIFT
  const x = lean.value.x * shift
  const y = lean.value.y * shift
  // Nghieng dau quanh truc ngang: con tro ben phai thi dau nga sang phai.
  const tilt = lean.value.x * LEAN_TILT
  return {
    transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg)`
  }
})

const directionsStyle = computed(() => ({
  backgroundImage: `url(${props.directions})`,
  ...cell3x3(DIRECTIONS.indexOf(direction.value)),
  opacity: reaction.value ? 0 : 1
}))

const reactionsStyle = computed(() => ({
  backgroundImage: `url(${props.reactions})`,
  ...cell3x3(REACTIONS.indexOf(reaction.value ?? 'blink')),
  opacity: reaction.value ? 1 : 0
}))

// Do nghieng tang dan theo khoang cach roi bao hoa, nen con tro o gan thi nhan
// vat chi hoi ngan ve phia do, con o xa thi nghieng han. Tra ve vector don vi.
function leanVector(dx, dy) {
  const distance = Math.hypot(dx, dy)
  if (distance < 1) return { x: 0, y: 0 }
  const reach = Math.min(1, distance / LEAN_REACH)
  return { x: (dx / distance) * reach, y: (dy / distance) * reach }
}

function updateLean(dx, dy) {
  lean.value = reducedMotion ? { x: 0, y: 0 } : leanVector(dx, dy)
}

function aim() {
  const button = buttonEl.value
  if (!button || !pointer) return

  const box = button.getBoundingClientRect()
  const dx = pointer.x - (box.left + box.width / 2)
  const dy = pointer.y - (box.top + box.height / 2)
  const distance = Math.hypot(dx, dy)

  // 1. Nghieng nguoi theo con tro, chay ca khi dang o vung chet: do nghieng
  //    khong phu thuoc vao o sprite nao dang hien.
  updateLean(dx, dy)

  // 2. Chuot o sat tam rua (trong deadZone) -> Nhin thang truc dien vao nguoi dung
  if (distance < (sector === -1 ? deadZoneExit.value : deadZone.value)) {
    sector = -1
    direction.value = 'center'
    return
  }

  // 3. Goc luong giac atan2 tu rua den chuot (radian [-PI, PI])
  const angle = Math.atan2(dy, dx)

  // 4. Giu nguyen sector hien tai neu chuot chua vuot nguong SECTOR/2 + HYSTERESIS (tranh rung giat)
  if (sector !== -1 && Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS) {
    return
  }

  // 5. Tinh sector 360 deg theo mảng CLOCKWISE (8 huong chuan)
  sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length
  direction.value = CLOCKWISE[sector]
}

function onPointerMove(event) {
  pointer = { x: event.clientX, y: event.clientY }
  aim()
}

function boop() {
  timers.forEach(clearTimeout)
  timers = []

  const later = (ms, next) => {
    timers.push(setTimeout(() => { reaction.value = next }, ms))
  }

  const now = Date.now()
  boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1
  boops.at = now

  if (boops.count >= DIZZY_AFTER) {
    boops.count = 0
    reaction.value = 'dizzy'
    later(DIZZY_END, null)
  } else {
    reaction.value = 'blink'
    later(BOOP_PAYOFF, PAYOFFS[(boops.count - 1) % PAYOFFS.length])
    later(BOOP_END, null)
  }

  if (reducedMotion) return

  // Easing dat tren tung keyframe va hieu ung chay linear: dat easing len hieu ung
  // se dien giai lai moi offset va don het cu nay len dau.
  squashEl.value?.animate(SQUASH, { duration: SQUASH_MS, easing: 'linear' })
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Khong co tro chinh xac thi nhan vat dung yen o o 'center'.
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('scroll', aim, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('scroll', aim)
  timers.forEach(clearTimeout)
  timers = []
})
</script>

<style scoped>
.page-mascot {
  position: relative;
  display: block;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background: transparent;
  appearance: none;
  cursor: pointer;
  user-select: none;
  /* Cho phep bam xuyen qua cac khung chua co pointer-events: none. */
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
}

.page-mascot:focus-visible {
  outline: 2px solid var(--highlight);
  outline-offset: 4px;
  border-radius: 14px;
}

.page-mascot__squash {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-origin: 50% 78%;
}

.page-mascot__lean {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  /* Truc quay dat o vai: dau nga theo con tro chu khong xoay ca than. */
  transform-origin: 50% 85%;
  will-change: transform;
  transition: transform 160ms var(--ease-out-expo);
}

@media (prefers-reduced-motion: reduce) {
  .page-mascot__lean {
    transition: none;
  }
}

.page-mascot__layer {
  position: absolute;
  inset: 0;
  background-size: 300% 300%;
  background-repeat: no-repeat;
}
</style>

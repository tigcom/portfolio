<template>
  <div
    class="corner-nav-shell"
    :class="{
      'is-expanded': isExpanded,
      'is-hidden': !visible
    }"
    @mouseenter="isExpanded = true"
    @mouseleave="onMouseLeaveShell"
  >
    <!-- Nền góc 1/4 hình tròn - Không shadow, chia cánh hoa bằng đường line -->
    <div class="corner-nav-backdrop">
      <!-- SVG Nan quạt: 5 cánh hoa + nan phân cách + cung bao nhuỵ.
           Toàn bộ toạ độ sinh từ `petals` / `petalDividers` trong script để mọi
           cung dùng chung một bán kính với nền quạt (xem chú thích ở script). -->
      <svg class="radial-petals-svg" viewBox="0 0 130 130" fill="none">
        <!-- 5 cánh hoa dạng mảnh quạt Sector -->
        <g class="petal-sectors-group">
          <path
            v-for="(sector, idx) in petals"
            :key="idx"
            :d="sector.d"
            class="petal-sector-path"
            :class="{
              'is-hovered': hoveredIndex === idx,
              'is-active': isActive(navItems[idx]?.path)
            }"
            @mouseenter="hoveredIndex = idx"
            @mouseleave="hoveredIndex = null"
            @click="navigateTo(navItems[idx]?.path)"
          />
        </g>

        <!-- Cung bao nhuỵ (bán kính R_IN). Viền ngoài KHÔNG vẽ ở đây: nền quạt đã
             tự vẽ viền ở đúng r = R_OUT bằng `border-radius` + `border-right/bottom`,
             thêm cung nữa chỉ tạo ra một đường trùng. -->
        <path :d="nucleusArc" stroke="var(--border-strong)" stroke-width="1" />

        <!-- Nan quạt phân cách rõ ràng giữa 5 cánh hoa -->
        <line
          v-for="(divider, idx) in petalDividers"
          :key="`divider-${idx}`"
          :x1="divider.x1"
          :y1="divider.y1"
          :x2="divider.x2"
          :y2="divider.y2"
          stroke="var(--border-strong)"
          stroke-width="1.2"
        />
      </svg>
    </div>

    <!-- Nút trung tâm tại đỉnh góc -->
    <div class="corner-hub" :title="t('nav.openMenu')" @click.stop="toggleExpand">
      <svg
        v-if="!isExpanded"
        class="hub-icon-menu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      >
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="14" y2="12" />
        <line x1="4" y1="18" x2="18" y2="18" />
      </svg>
      <span v-else class="hub-logo">PK</span>
    </div>

    <!-- Nhóm các Icon điều hướng đại diện cho từng cánh hoa (Không nút tròn, không zoom) -->
    <nav class="petal-items-group" aria-label="Quick Navigation">
      <router-link
        v-for="(item, idx) in navItems"
        :key="item.path"
        :to="item.path"
        class="petal-btn"
        :class="{
          active: isActive(item.path),
          'is-hovered': hoveredIndex === idx
        }"
        :style="{
          left: `${item.x}px`,
          top: `${item.y}px`,
          '--delay': `${idx * 0.02}s`
        }"
        :title="t(item.label)"
        @mouseenter="hoveredIndex = idx"
        @mouseleave="hoveredIndex = null"
        @click="closeExpand"
      >
        <!-- Icon cánh hoa -->
        <span class="petal-icon-box">
          <!-- Home -->
          <svg v-if="item.icon === 'home'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>

          <!-- About -->
          <svg v-else-if="item.icon === 'user'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          <!-- Marketplace -->
          <svg v-else-if="item.icon === 'grid'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>

          <!-- Projects -->
          <svg v-else-if="item.icon === 'layers'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>

          <!-- Contact -->
          <svg v-else-if="item.icon === 'mail'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </span>

        <!-- Tooltip nổi hiện tên khi hover vào cánh hoa -->
        <span class="petal-tooltip">{{ t(item.label) }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLang } from '../data/translations.js'

defineProps({
  visible: {
    type: Boolean,
    default: true
  }
})

const { t } = useLang()
const route = useRoute()
const router = useRouter()
const isExpanded = ref(false)
const hoveredIndex = ref(null)

// ─── Hình học quạt 1/4 ───────────────────────────────────────────────────────
// Nền quạt là hộp 130×130 với `border-radius: 0 0 100% 0`, nghĩa là bán kính
// thật của vòng tròn là 130. MỌI cung SVG phải dùng đúng bán kính đó — nếu vẽ
// ở bán kính nhỏ hơn, mép ngoài của cánh sẽ hụt vào trong và tạo ra một vòng
// không hover được (rơi xuống chính thẻ <svg>).
const R_OUT = 130
const R_IN = 28
const R_MID = (R_IN + R_OUT) / 2
const PETAL_COUNT = 5
const A_START = 90 // độ; hệ toạ độ SVG có y hướng xuống
const A_STEP = 90 / PETAL_COUNT
const DEG = Math.PI / 180

const pt = (r, deg) => ({
  x: +(r * Math.cos(deg * DEG)).toFixed(2),
  y: +(r * Math.sin(deg * DEG)).toFixed(2),
})
const fmt = ({ x, y }) => `${x} ${y}`

// Cờ `sweep` của cung SVG quyết định trình duyệt chọn tâm nào trong hai tâm khả
// dĩ của một cung khi biết hai đầu mút và bán kính. Chọn sai tâm thì cung vẫn
// "hợp lệ" nhưng võng ngược vào trong, cắt ngang các cánh hoa.
// Quy tắc ở hệ toạ độ này: đi từ góc LỚN xuống góc NHỎ cần sweep=0, ngược lại 1.
const petals = Array.from({ length: PETAL_COUNT }, (_, i) => {
  const a0 = A_START - i * A_STEP // mép trên của cánh (góc lớn)
  const a1 = a0 - A_STEP // mép dưới của cánh (góc nhỏ)
  return {
    d: [
      `M ${fmt(pt(R_OUT, a0))}`,
      `A ${R_OUT} ${R_OUT} 0 0 0 ${fmt(pt(R_OUT, a1))}`,
      `L ${fmt(pt(R_IN, a1))}`,
      `A ${R_IN} ${R_IN} 0 0 1 ${fmt(pt(R_IN, a0))}`,
      'Z',
    ].join(' '),
    x: pt(R_MID, (a0 + a1) / 2).x,
    y: pt(R_MID, (a0 + a1) / 2).y,
  }
})

// 4 nan quạt phân cách, chạy hết từ nhụy ra tới mép ngoài
const petalDividers = Array.from({ length: PETAL_COUNT - 1 }, (_, i) => {
  const a = A_START - (i + 1) * A_STEP
  const inner = pt(R_IN, a)
  const outer = pt(R_OUT, a)
  return { x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y }
})

// Cung bao nhuỵ
const nucleusArc = `M ${fmt(pt(R_IN, A_START))} A ${R_IN} ${R_IN} 0 0 0 ${fmt(pt(R_IN, A_START - 90))}`

// Icon đặt tại tâm mỗi cánh hoa
const navItems = [
  { path: '/', label: 'nav.home', icon: 'home' },
  { path: '/about', label: 'nav.about', icon: 'user' },
  { path: '/marketplace', label: 'nav.marketplace', icon: 'grid' },
  { path: '/projects', label: 'nav.projects', icon: 'layers' },
  { path: '/contact', label: 'nav.contact', icon: 'mail' }
].map((item, i) => ({ ...item, x: petals[i].x, y: petals[i].y }))

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function navigateTo(path) {
  if (!path) return
  router.push(path)
  closeExpand()
}

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function closeExpand() {
  isExpanded.value = false
  hoveredIndex.value = null
}

function onMouseLeaveShell() {
  isExpanded.value = false
  hoveredIndex.value = null
}

function handleClickOutside(e) {
  if (!isExpanded.value) return
  const shell = document.querySelector('.corner-nav-shell')
  if (shell && !shell.contains(e.target)) {
    closeExpand()
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* ── KHỐI GỐC 1/4 TRÒN CỐ ĐỊNH TẠI GÓC TRÊN TRÁI ──────────────────────────── */
.corner-nav-shell {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 105;
  width: 44px;
  height: 44px;
  pointer-events: auto;
  user-select: none;
  /* Cắt vùng nhận chuột (mouseenter/mouseleave) theo đúng hình quạt thay vì để
     nguyên hộp vuông 130×130 — nếu không, rê chuột vào góc vô hình ngoài cung
     vẫn giữ menu mở và click ở đó bị nuốt mất. `border-radius` ảnh hưởng tới
     hit-testing của chính phần tử này; KHÔNG đặt `overflow: hidden` vì sẽ cắt tooltip. */
  border-radius: 0 0 100% 0;
  /* Transitions với cubic-bezier in-out ease mượt mà */
  transition:
    width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width, height, transform, opacity;
  box-shadow: none !important;
}

.corner-nav-shell.is-expanded {
  width: 130px;
  height: 130px;
}

.corner-nav-shell.is-hidden {
  opacity: 0;
  pointer-events: none !important;
  transform: scale(0.65) translate(-15px, -15px);
}

/* ── NỀN GÓC 1/4 GLASSMORPHISM (KHÔNG SHADOW) ────────────────────────────── */
.corner-nav-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 100% 0;
  background: var(--bg-800);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-right: 1px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  box-shadow: none !important;
  overflow: hidden;
  transition:
    background 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* SVG Nan quạt cánh hoa */
.radial-petals-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 130px;
  height: 130px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.corner-nav-shell.is-expanded .radial-petals-svg {
  opacity: 1;
  pointer-events: auto;
}

/* Các cánh hoa Sector (SVG Path) */
.petal-sector-path {
  fill: transparent;
  stroke: transparent;
  cursor: pointer;
  transition: fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.petal-sector-path.is-active {
  fill: var(--highlight-glow);
}

.petal-sector-path.is-hovered {
  fill: var(--highlight-glow);
  stroke: var(--highlight);
  stroke-width: 1.2px;
}

/* ── NÚT TÂM TẠI ĐỈNH GÓC (CENTER HUB) ───────────────────────────────────── */
.corner-hub {
  position: absolute;
  top: 0;
  left: 0;
  /* Khi thu gọn (shell 44×44) hub phủ trọn nửa quạt để cả nửa quạt là nút bấm.
     Khi mở rộng, hub thu về đúng bán kính nhuỵ (R_IN = 28) — để nguyên 44×44 thì
     nó chặn mất vùng bán kính tới ~62 của các cánh hoa (đo bằng elementFromPoint). */
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  cursor: pointer;
  z-index: 5;
  /* Hit area theo đúng hình quạt 1/4 bán kính bằng cạnh hộp, và cắt luôn phần
     con tràn ra ngoài cung. */
  border-radius: 0 0 100% 0;
  overflow: hidden;
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1), height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.corner-nav-shell.is-expanded .corner-hub {
  width: 28px;
  height: 28px;
}

.hub-icon-menu {
  transform: translate(-3px, -3px);
  color: var(--text-primary);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.corner-nav-shell:hover .hub-icon-menu {
  color: var(--highlight);
  transform: translate(-3px, -3px) rotate(90deg);
}

.hub-logo {
  font-family: var(--font-clash, sans-serif);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--highlight);
  transform: translate(-5px, -5px);
}

/* ── CÁC ICON CÁNH HOA (PETAL NAV ITEMS) ────────────────────────────────────── */
.petal-items-group {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Luôn trong suốt với chuột, KỂ CẢ khi mở rộng. Lớp này là hộp 130×130 nằm
     trên lớp SVG; nếu cho nó `auto` thì nó nuốt hết sự kiện và chỉ còn icon
     28×28 ở giữa nhận được hover. Chỉ `.petal-btn` con được nhận chuột. */
  pointer-events: none;
}

/* Nút Icon: Trực tiếp icon, không viền tròn, không zoom */
.petal-btn {
  position: absolute;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 0;
  color: var(--text-secondary);
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  box-shadow: none !important;
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, color;
}

.corner-nav-shell.is-expanded .petal-btn {
  opacity: 1;
  pointer-events: auto;
  transition-delay: var(--delay);
}

.petal-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  /* CẤM ZOOM ICON THEO YÊU CẦU */
  transform: none !important;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Trạng thái Active */
.petal-btn.active {
  color: var(--highlight);
}

/* Trạng thái Hover: Highlight màu rực rỡ, KHÔNG ZOOM ICON */
.petal-btn.is-hovered,
.petal-btn:hover {
  color: var(--highlight);
  background: transparent !important;
  box-shadow: none !important;
  transform: translate(-50%, -50%) !important;
}

.petal-btn:hover .petal-icon-box {
  transform: none !important;
}

/* ── TOOLTIP HIỆN TÊN TRANG KHI HOVER (KHÔNG SHADOW) ────────────────────────── */
.petal-tooltip {
  position: absolute;
  left: calc(100% + 6px);
  top: 50%;
  transform: translateY(-50%) translateX(-4px);
  background: var(--bg-800);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  box-shadow: none !important;
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.petal-btn.is-hovered .petal-tooltip,
.petal-btn:hover .petal-tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(3px);
}
</style>

<template>
  <Transition name="menu-fade">
    <div class="floating-menu" :class="{ 'is-open': isOpen, 'is-dimmed': isDimmed }" v-show="!isChatOpen">
      <!-- Sub-buttons list -->
      <div class="menu-items">
        <!-- Toggle Effects Button -->
        <button class="menu-item tooltip-left" @click="handleToggleEffects" :data-tooltip="effectsEnabled ? t('nav.disableEffects') : t('nav.enableEffects')">
          <svg v-if="effectsEnabled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20"/><path d="M8.5 8.5 6 11l2.5 2.5"/><path d="M15.5 15.5 18 13l-2.5-2.5"/><path d="M11 6h2"/><path d="M11 18h2"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </button>

        <!-- Scroll to Top Button -->
        <button v-show="showScrollTop" class="menu-item tooltip-left" @click="scrollToTop" data-tooltip="Lên đầu trang">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
        </button>
        
        <!-- Chatbot Button -->
        <button class="menu-item tooltip-left" @click="toggleChat" data-tooltip="Trò chuyện AI">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>

      <!-- Main Trigger — nhan vat mascot thay cho icon luoi -->
      <div class="mascot-slot">
        <PageMascot
          :directions="mascot.directions"
          :reactions="mascot.reactions"
          :size="76"
          :aria-label="t('nav.openMenu')"
          @click="handleMainClick"
        />
      </div>
    </div>
  </Transition>

  <!-- Toast Notification -->
  <Teleport to="body">
    <div class="toast-notification" :class="{ 'toast-visible': isToastVisible }">
      <div class="toast-content">
        <!-- Icon based on effect state -->
        <svg v-if="toastState" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m15 9-6 6"/><path d="m9 9 6 6"/><circle cx="12" cy="12" r="10"/></svg>
        <span>{{ toastMsg }}</span>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import PageMascot from './PageMascot.vue'
import { useEffectsEnabled } from '../composables/useEffectsEnabled.js'
import { useChatState } from '../composables/useChatState.js'
import { useLang } from '../data/translations.js'

// Doi nhan vat chi can doi 2 duong dan nay. File nam trong public/mascots/.
// Tang `v` moi lan build lai atlas, neu khong trinh duyet se dung ban webp cu.
const mascot = {
  directions: '/mascots/turtle-directions.webp?v=fixed_v4',
  reactions: '/mascots/turtle-reactions.webp?v=fixed_v4'
}

const { t } = useLang()
const { isChatOpen } = useChatState()
const { enabled: effectsEnabled, toggleEffects } = useEffectsEnabled()

const isOpen = ref(false)
const isDimmed = ref(false)
const showScrollTop = ref(false)
const toastMsg = ref('')
const toastState = ref(false)
const isToastVisible = ref(false)

let toastTimer = null
let dimTimer = null

function resetDimTimer() {
  if (dimTimer) clearTimeout(dimTimer)
  if (typeof window !== 'undefined' && window.innerWidth <= 600 && !isOpen.value) {
    dimTimer = setTimeout(() => {
      if (!isOpen.value) {
        isDimmed.value = true
      }
    }, 5000)
  } else {
    isDimmed.value = false
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    isDimmed.value = false
    if (dimTimer) clearTimeout(dimTimer)
  } else {
    resetDimTimer()
  }
})

function handleMainClick() {
  if (window.innerWidth <= 600 && isDimmed.value) {
    isDimmed.value = false
    resetDimTimer()
    return
  }
  isOpen.value = !isOpen.value
}

function onScroll() {
  showScrollTop.value = window.scrollY > 300
}

function closeMenuOutside(e) {
  if (isOpen.value && !e.target.closest('.floating-menu')) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', closeMenuOutside)
  window.addEventListener('resize', resetDimTimer, { passive: true })
  resetDimTimer()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', closeMenuOutside)
  window.removeEventListener('resize', resetDimTimer)
  if (dimTimer) clearTimeout(dimTimer)
  if (toastTimer) clearTimeout(toastTimer)
})

function handleToggleEffects() {
  toggleEffects()
  isOpen.value = false
  
  toastState.value = effectsEnabled.value
  toastMsg.value = effectsEnabled.value ? t('nav.effectsEnabledMsg') : t('nav.effectsDisabledMsg')
  isToastVisible.value = true
  
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    isToastVisible.value = false
  }, 2500)
}

function scrollToTop() {
  window.dispatchEvent(new CustomEvent('request-scroll-to-top'))
  isOpen.value = false
}

function toggleChat() {
  isChatOpen.value = true
  isOpen.value = false
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.floating-menu {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
  /* Khung vuong bang dung co nhan vat luc dong. */
  width: 76px;
  height: 76px;
  pointer-events: none;
  transition: transform 0.4s var(--ease-out-expo), opacity 0.4s var(--ease-out-expo);
}

.menu-items {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%) translateY(24px) scale(0.9);
  transform-origin: bottom center;
  transition: opacity var(--dur-ui) var(--ease-out-expo),
              transform var(--dur-ui) var(--ease-out-expo);
}

.floating-menu.is-open .menu-items {
  opacity: 1;
  pointer-events: all;
  /* Nhac cum nut len tren nhan vat: 76px chieu cao + 12px khe ho = -88px */
  transform: translateX(-50%) translateY(-88px) scale(1);
}

.mascot-slot {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 2; /* nut con truot ra tu phia sau nhan vat */
  width: 76px;
  height: 76px;
  margin-left: -38px;
  transform-origin: 50% 100%;
  transition: filter var(--dur-ui) var(--ease-out-expo);
}

.mascot-slot:hover {
  filter: drop-shadow(0 4px 12px rgba(188, 255, 103, 0.25));
}

.menu-item {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--bg-800);
  border: 1px solid var(--border);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  box-shadow: var(--shadow-sm);
}

.menu-item:hover {
  background: var(--highlight);
  border-color: var(--highlight);
  color: var(--bg-900);
  transform: scale(1.1);
}

/* Tooltip implementation */
.tooltip-left::after {
  content: attr(data-tooltip);
  position: absolute;
  right: calc(100% + 12px);
  background: var(--bg-800);
  color: var(--text-primary);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateX(10px);
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);
}

.tooltip-left:hover::after {
  opacity: 1;
  transform: translateX(0);
}

/* Toast (Desktop default) */
.toast-notification {
  position: fixed;
  top: 32px;
  right: 32px;
  left: auto;
  transform: translateX(30px);
  background: var(--bg-800);
  color: var(--text-primary);
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toast-content svg {
  color: var(--highlight);
}

.toast-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .floating-menu {
    bottom: 96px; /* Above bottom nav */
    right: 16px;
  }
  
  .floating-menu.is-dimmed {
    transform: translateX(44px);
    opacity: 0.4;
  }
  
  .tooltip-left::after {
    display: none; /* Hide tooltips on touch devices */
  }
  
  .toast-notification {
    top: 24px;
    left: 50%;
    right: auto;
    transform: translate(-50%, -20px);
  }
  
  .toast-visible {
    transform: translate(-50%, 0);
  }
}
</style>

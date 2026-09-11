<template>
  <nav class="mobile-bottom-nav">
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="nav-item"
      :class="{ active: isActive(link.path) }"
    >
      <div class="nav-icon-container">
        <!-- SVG Icon based on path -->
        <svg v-if="link.path === '/about'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>

        <svg v-else-if="link.path === '/projects'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
        </svg>

        <svg v-else-if="link.path === '/marketplace'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>

        <svg v-else-if="link.path === '/contact'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </div>
      
      <span class="nav-label" v-if="isActive(link.path)">
        {{ t(link.label) }}
      </span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useLang } from '../data/translations.js'

const { t } = useLang()
const route = useRoute()

const links = [
  { path: '/about', label: 'nav.about' },
  { path: '/marketplace', label: 'nav.marketplace' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/contact', label: 'nav.contact' },
]

function isActive(path) {
  return route.path.startsWith(path)
}
</script>

<style scoped>
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 600px) {
  .mobile-bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    background: var(--bg-900);
    border-top: 1px solid var(--border);
    z-index: 99;
    justify-content: space-around;
    align-items: center;
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    flex: 1;
    height: 100%;
    min-width: 0;
  }

  .nav-icon-container {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-item svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .nav-label {
    font-size: 0.65rem;
    font-weight: 600;
    margin-top: 4px;
    color: var(--highlight);
    opacity: 0;
    transform: translateY(10px);
    animation: slideUpFade 0.3s forwards;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;
  }

  /* Trạng thái active: Icon to hơn, màu sáng, đẩy lên chút */
  .nav-item.active {
    color: var(--highlight);
    flex: 1.3;
  }

  .nav-item.active .nav-icon-container {
    transform: translateY(-2px);
  }

  .nav-item.active svg {
    width: 24px;
    height: 24px;
  }

  @keyframes slideUpFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>

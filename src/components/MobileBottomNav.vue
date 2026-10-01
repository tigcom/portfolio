<template>
  <nav class="mobile-bottom-nav">
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="nav-item"
      :class="{ 
        active: isActive(link.path),
        'nav-item--home': link.path === '/' 
      }"
    >
      <div class="nav-icon-container" :class="{ 'home-logo-wrap': link.path === '/' }">
        <!-- SVG Icon based on path -->
        <template v-if="link.path === '/'">
           <span class="home-logo-text">PK</span>
        </template>

        <svg v-else-if="link.path === '/about'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
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
      
      <span class="nav-label" v-if="isActive(link.path) && link.path !== '/'">
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
  { path: '/', label: 'nav.home' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/contact', label: 'nav.contact' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
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
    overflow: visible;
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

  .nav-item:not(.nav-item--home).active .nav-icon-container {
    transform: translateY(-2px);
  }

  .nav-item.active svg {
    width: 24px;
    height: 24px;
  }

  /* --- Home Logo Styling (Neumorphic Inset / 3D Chìm Lõm) --- */
  .nav-item--home {
    flex: 1.25;
    position: relative;
    overflow: visible;
  }

  .home-logo-wrap {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* Nền là màu nền thanh nav để tạo cảm giác lõm thẳng vào bề mặt */
    background: var(--bg-900);
    /* Chữ đổi thành màu xanh highlight */
    color: var(--highlight);
    display: flex;
    align-items: center;
    justify-content: center;
    /* Nhô lên khỏi viền ~35% đường kính nút (~17.5px) */
    transform: translateY(-27px);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
    border: 1.5px solid var(--border-strong);
    
    /* Neumorphism 3D Chìm (Sunken Well - Dark Mode default):
       - Bóng tối lún sâu vào góc trên-trái
       - Vệt sáng phản xạ ở thành đáy góc dưới-phải
       - Bóng nổi ngoài nhẹ nâng mép viền
    */
    box-shadow:
      inset 3px 3px 6px rgba(0, 0, 0, 0.65),
      inset 1px 1px 2px rgba(0, 0, 0, 0.75),
      inset -2px -2px 5px rgba(255, 255, 255, 0.08),
      0 3px 8px rgba(0, 0, 0, 0.35);
    z-index: 10;
  }

  /* Neumorphism 3D Chìm cho Light Mode: Độ lõm rõ nét, mềm mại */
  :global([data-theme="light"]) .home-logo-wrap {
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow:
      inset 3px 3px 6px rgba(0, 0, 0, 0.14),
      inset 1.5px 1.5px 3px rgba(0, 0, 0, 0.18),
      inset -3px -3px 6px rgba(255, 255, 255, 0.95),
      inset -1px -1px 2px rgba(255, 255, 255, 0.8),
      0 2px 6px rgba(0, 0, 0, 0.04);
  }

  /* Trạng thái chạm ngón tay (Tap / Active press): Lòng nút lún sâu hơn */
  .nav-item--home:active .home-logo-wrap {
    transform: translateY(-25px) scale(0.96);
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.75),
      inset -2px -2px 4px rgba(255, 255, 255, 0.06);
  }
  :global([data-theme="light"]) .nav-item--home:active .home-logo-wrap {
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.2),
      inset -2px -2px 4px rgba(255, 255, 255, 0.85);
  }

  /* Trạng thái trang chủ đang Active: Viền và lòng đĩa bừng sáng hào quang xanh dịu */
  .nav-item--home.active .home-logo-wrap {
    border-color: var(--highlight);
    box-shadow:
      inset 3px 3px 6px rgba(0, 0, 0, 0.6),
      inset -2px -2px 5px rgba(255, 255, 255, 0.08),
      inset 0 0 12px var(--highlight-glow),
      0 0 0 3px var(--highlight-glow),
      0 4px 12px rgba(0, 0, 0, 0.3);
  }
  :global([data-theme="light"]) .nav-item--home.active .home-logo-wrap {
    border-color: var(--highlight);
    box-shadow:
      inset 3px 3px 6px rgba(0, 0, 0, 0.12),
      inset -3px -3px 6px rgba(255, 255, 255, 0.95),
      inset 0 0 10px var(--highlight-glow),
      0 0 0 3px var(--highlight-glow),
      0 2px 6px rgba(0, 0, 0, 0.06);
  }

  .home-logo-text {
    font-family: var(--font-clash);
    font-size: 1.18rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1;
    user-select: none;
    color: var(--highlight);
    /* Chữ màu xanh phát sáng nhẹ nhàng trong lòng hốc lõm */
    text-shadow: 0 0 8px var(--highlight-glow);
    transition: text-shadow 0.3s ease, transform 0.2s ease;
  }

  .nav-item--home.active .home-logo-text {
    text-shadow: 0 0 12px var(--highlight);
  }

  @keyframes slideUpFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>

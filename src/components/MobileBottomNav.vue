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

  /* --- Home Logo Styling (Neumorphic Soft UI - 3D Dịu Nhẹ) --- */
  .nav-item--home {
    flex: 1.25;
    position: relative;
    overflow: visible;
  }

  .home-logo-wrap {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: var(--highlight-text);
    display: flex;
    align-items: center;
    justify-content: center;
    /* Nhô lên khỏi viền ~35% đường kính nút (~17.5px) */
    transform: translateY(-27px);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
    
    /* Neumorphic Soft Surface: Chuyển sắc mịn màng, bề mặt matte dịu mắt */
    background: linear-gradient(145deg, var(--highlight) 0%, var(--highlight-dark) 100%);
    
    /* Neumorphism Dual Shadow: Hiệu ứng dập nổi mềm mại đặc trưng (Soft Emboss) */
    box-shadow:
      /* Vòng đệm êm ái cùng màu nền nav */
      0 0 0 3px var(--bg-900),
      /* Ánh sáng dịu nhẹ hắt từ góc trên-trái */
      -3px -3px 8px rgba(255, 255, 255, 0.25),
      /* Vùng bóng đổ mềm mại ở góc dưới-phải */
      4px 6px 14px rgba(0, 0, 0, 0.16),
      /* Nội giáng êm dịu tạo độ phồng tự nhiên của khối */
      inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.38),
      inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.14),
      /* Hào quang màu dịu */
      0 3px 10px var(--highlight-glow);
    z-index: 10;
  }

  /* Trạng thái nhấn (Tap / Active press): Hiệu ứng lún chìm mềm mại đặc trưng Neumorphism (Soft Inset) */
  .nav-item--home:active .home-logo-wrap {
    transform: translateY(-25px) scale(0.96);
    box-shadow:
      0 0 0 3px var(--bg-900),
      /* Chuyển thành bóng chìm lõm vào lòng nút */
      inset 2px 2px 4px rgba(0, 0, 0, 0.2),
      inset -2px -2px 4px rgba(255, 255, 255, 0.25),
      0 2px 6px rgba(0, 0, 0, 0.1);
  }

  /* Trạng thái trang chủ đang Active: Nhô nhẹ thêm 1 chút và tỏa sáng êm dịu */
  .nav-item--home.active .home-logo-wrap {
    transform: translateY(-29px) scale(1.04);
    box-shadow:
      0 0 0 3px var(--bg-900),
      0 0 0 3.5px var(--highlight-glow),
      -4px -4px 10px rgba(255, 255, 255, 0.3),
      5px 8px 16px rgba(0, 0, 0, 0.2),
      inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.45),
      inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.15),
      0 4px 14px var(--highlight-glow);
  }

  .home-logo-text {
    font-family: var(--font-clash);
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1;
    user-select: none;
    /* Bóng chữ dịu nhẹ, không gắt */
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
  }

  @keyframes slideUpFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>

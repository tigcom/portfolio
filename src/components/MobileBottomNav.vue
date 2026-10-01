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

  /* --- Home Logo Styling (Nổi 35% trên viền & Hiệu ứng 3D khối cao cấp) --- */
  .nav-item--home {
    flex: 1.25;
    position: relative;
    overflow: visible;
  }

  .home-logo-wrap {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    color: var(--highlight-text);
    display: flex;
    align-items: center;
    justify-content: center;
    /* Nhô lên khỏi đường viền trên 35% đường kính (~18px nổi lên trên navbar) */
    transform: translateY(-28px);
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
    
    /* Mặt cong 3D: Nguồn sáng xiên từ góc trên bên trái tạo khối cầu căng bóng */
    background: radial-gradient(circle at 34% 24%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 36%, transparent 66%),
                linear-gradient(165deg, var(--highlight) 0%, var(--highlight-dark) 100%);
    
    /* Đổ bóng đa tầng 3D thực thể (chuẩn Tier 0, spread âm, không bệt màu):
       1. Vệt sáng viền trên sắc nét (specular rim light)
       2. Vùng tối lún đáy tạo độ dày vật lý (bottom inner shadow)
       3. Vòng đệm cutout 4px ngăn cách nền thanh nav
       4. Viền vi sai phân tách viền thanh nav
       5. Bóng tiếp xúc gần sắc bén (contact shadow)
       6. Bóng nổi sâu tạo chiều không gian 3D (ambient depth)
       7. Hào quang phát sáng dịu nhẹ (accent glow)
    */
    box-shadow:
      inset 0 2px 2.5px rgba(255, 255, 255, 0.65),
      inset 0 -3px 5px rgba(0, 0, 0, 0.26),
      0 0 0 4px var(--bg-900),
      0 0 0 5px var(--border-strong),
      0 4px 8px -2px rgba(0, 0, 0, 0.32),
      0 12px 24px -4px rgba(0, 0, 0, 0.42),
      0 6px 18px 0 var(--highlight-glow);
    z-index: 10;
  }

  /* Hiệu ứng lún nút vật lý 3D khi chạm ngón tay (Tap / Active state) */
  .nav-item--home:active .home-logo-wrap {
    transform: translateY(-24px) scale(0.95);
    box-shadow:
      inset 0 1.5px 2px rgba(0, 0, 0, 0.32),
      inset 0 -1.5px 3px rgba(255, 255, 255, 0.3),
      0 0 0 4px var(--bg-900),
      0 0 0 5px var(--border),
      0 2px 4px -1px rgba(0, 0, 0, 0.25),
      0 6px 12px -2px rgba(0, 0, 0, 0.3);
  }

  /* Khi trang hiện tại là Home (active route): Đẩy cao hơn một chút, bừng sáng hào quang */
  .nav-item--home.active .home-logo-wrap {
    transform: translateY(-30px) scale(1.06);
    box-shadow:
      inset 0 2.5px 3px rgba(255, 255, 255, 0.8),
      inset 0 -3px 5px rgba(0, 0, 0, 0.26),
      0 0 0 4px var(--bg-900),
      0 0 0 5.5px var(--highlight),
      0 6px 12px -2px rgba(0, 0, 0, 0.35),
      0 16px 28px -4px rgba(0, 0, 0, 0.45),
      0 8px 24px 2px var(--highlight-glow);
  }

  .home-logo-text {
    font-family: var(--font-clash);
    font-size: 1.18rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1;
    user-select: none;
    filter: drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.26));
  }

  @keyframes slideUpFade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>

<template>
  <div class="restaurant-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>saigon-kitchen.com</span>
        </div>
      </div>

      <div class="site-layout">
        <!-- Nav -->
        <nav class="site-nav">
          <div class="brand">🍜 SAIGON KITCHEN</div>
          <div class="nav-links">
            <span>Menu</span>
            <span>About</span>
            <span>Gallery</span>
            <span class="reserve-btn">Reserve a Table</span>
          </div>
        </nav>

        <!-- Hero -->
        <section class="hero">
          <div class="hero-bg">
            <div class="food-pattern"></div>
            <div class="hero-overlay"></div>
          </div>
          <div class="hero-content">
            <div class="hero-tag">🌟 Authentic Vietnamese Cuisine</div>
            <h1 class="hero-title">A Taste of<br><span class="accent">Saigon</span><br>in Every Bite</h1>
            <div class="hero-actions">
              <button class="btn-reserve">Book a Table</button>
              <button class="btn-menu">View Menu →</button>
            </div>
          </div>
          <!-- Rating card -->
          <div class="rating-card">
            <div class="rating-stars">★★★★★</div>
            <div class="rating-val">4.9</div>
            <div class="rating-count">2,400+ reviews</div>
          </div>
        </section>

        <!-- Menu strip -->
        <section class="menu-strip">
          <div class="menu-header">
            <span class="menu-title">Today's Specials</span>
            <div class="menu-tabs">
              <span class="tab active">Mains</span>
              <span class="tab">Starters</span>
              <span class="tab">Drinks</span>
            </div>
          </div>
          <div class="menu-items">
            <div class="menu-item" v-for="item in menuItems" :key="item.name">
              <div class="item-img" :style="{ background: item.bg }">
                <span class="item-emoji">{{ item.emoji }}</span>
              </div>
              <div class="item-info">
                <div class="item-name">{{ item.name }}</div>
                <div class="item-desc">{{ item.desc }}</div>
              </div>
              <div class="item-price">{{ item.price }}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { name: 'Phở Bò Đặc Biệt', desc: 'Beef broth, rice noodles, herbs', price: '$14', bg: 'linear-gradient(135deg, #3d1a00, #5c2800)', emoji: '🍜' },
  { name: 'Bánh Mì Thịt Nướng', desc: 'Grilled pork, pickled veggies', price: '$9', bg: 'linear-gradient(135deg, #2d1500, #4a2200)', emoji: '🥖' },
  { name: 'Cơm Tấm Sườn', desc: 'Broken rice, grilled pork chop', price: '$12', bg: 'linear-gradient(135deg, #1a0a00, #3d1a00)', emoji: '🍚' },
]
</script>

<style scoped>
.restaurant-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #1a0a00;
  border: 1px solid rgba(255,107,53,0.15);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #120700;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(255,107,53,0.1);
}

.browser-dots { display: flex; gap: 6px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.browser-url {
  flex: 1;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 280px;
}

.site-layout { display: flex; flex-direction: column; }

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: rgba(0,0,0,0.5);
  border-bottom: 1px solid rgba(255,107,53,0.1);
}

.brand { font-size: 12px; font-weight: 700; color: #ff6b35; letter-spacing: 1px; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 10px;
  color: rgba(255,255,255,0.5);
}

.reserve-btn {
  background: #ff6b35;
  color: #fff;
  padding: 5px 12px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 10px;
}

.hero {
  position: relative;
  height: 220px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-bg { position: absolute; inset: 0; }

.food-pattern {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #5c2800 70%, #2d1000 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 20px;
}

.hero-tag {
  font-size: 9px;
  color: #ff6b35;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-weight: 600;
}

.hero-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 14px;
}

.accent { color: #ff6b35; }

.hero-actions { display: flex; gap: 8px; align-items: center; }

.btn-reserve {
  background: #ff6b35;
  color: #fff;
  border: none;
  padding: 7px 14px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

.btn-menu {
  background: transparent;
  color: rgba(255,255,255,0.7);
  border: none;
  font-size: 10px;
  cursor: pointer;
}

.rating-card {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: rgba(26,10,0,0.9);
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 10px;
  padding: 10px 14px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.rating-stars { font-size: 12px; color: #fbbf24; margin-bottom: 3px; }
.rating-val { font-size: 20px; font-weight: 700; color: #fff; }
.rating-count { font-size: 9px; color: rgba(255,255,255,0.4); }

.menu-strip {
  padding: 14px 20px;
  background: #120700;
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.menu-title { font-size: 11px; font-weight: 600; color: #ff6b35; text-transform: uppercase; letter-spacing: 1px; }

.menu-tabs { display: flex; gap: 6px; }
.tab {
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 100px;
  color: rgba(255,255,255,0.4);
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
}
.tab.active {
  background: rgba(255,107,53,0.15);
  border-color: rgba(255,107,53,0.3);
  color: #ff6b35;
}

.menu-items { display: flex; flex-direction: column; gap: 6px; }

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 8px 10px;
}

.item-img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.item-emoji { font-size: 18px; }

.item-info { flex: 1; }
.item-name { font-size: 10px; font-weight: 600; color: #fff; margin-bottom: 2px; }
.item-desc { font-size: 9px; color: rgba(255,255,255,0.4); }

.item-price { font-size: 12px; font-weight: 700; color: #ff6b35; }
</style>

<template>
  <div class="furniture-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>woodcraft-studio.com</span>
        </div>
      </div>

      <div class="site-layout">
        <!-- Navbar -->
        <nav class="site-nav">
          <div class="brand">WOODCRAFT</div>
          <div class="nav-links">
            <span>Collections</span>
            <span>About</span>
            <span>Showroom</span>
            <span class="nav-cta">Contact Us</span>
          </div>
        </nav>

        <!-- Hero -->
        <section class="hero-section">
          <div class="hero-bg">
            <div class="wood-texture"></div>
            <div class="hero-overlay"></div>
          </div>
          <div class="hero-content">
            <div class="hero-badge">Est. 2010 · Handcrafted</div>
            <h1 class="hero-title">Timeless<br><span class="accent">Furniture</span><br>Crafted for Life</h1>
            <p class="hero-desc">Premium wood furniture designed to last generations.</p>
            <div class="hero-btns">
              <button class="btn-primary-wood">Explore Collection</button>
              <button class="btn-ghost-wood">Our Story →</button>
            </div>
          </div>
          <!-- Floating product card -->
          <div class="floating-card">
            <div class="product-preview">
              <div class="product-img-placeholder">
                <div class="chair-svg">
                  <div class="chair-back"></div>
                  <div class="chair-seat"></div>
                  <div class="chair-legs">
                    <div class="leg"></div>
                    <div class="leg"></div>
                    <div class="leg"></div>
                    <div class="leg"></div>
                  </div>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">Nordic Oak Chair</div>
                <div class="product-price">$480</div>
                <div class="product-rating">★★★★★ <span>4.9</span></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Products strip -->
        <section class="products-strip">
          <div class="strip-header">
            <span class="strip-label">Featured Collection</span>
            <span class="strip-link">View all →</span>
          </div>
          <div class="products-row">
            <div class="product-card" v-for="p in products" :key="p.name">
              <div class="product-card-img" :style="{ background: p.bg }">
                <div class="product-shape" :style="{ borderColor: p.color }"></div>
              </div>
              <div class="product-card-info">
                <div class="product-card-name">{{ p.name }}</div>
                <div class="product-card-price">{{ p.price }}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  { name: 'Walnut Dining Table', price: '$1,200', bg: 'linear-gradient(135deg, #3d2b1f, #5c3d2e)', color: '#d4a574' },
  { name: 'Linen Sofa Set', price: '$2,400', bg: 'linear-gradient(135deg, #2d2520, #4a3830)', color: '#c4a882' },
  { name: 'Oak Bookshelf', price: '$680', bg: 'linear-gradient(135deg, #1a1510, #2d2218)', color: '#b8956a' },
  { name: 'Rattan Armchair', price: '$390', bg: 'linear-gradient(135deg, #2a1f15, #3d2d20)', color: '#d4a574' },
]
</script>

<style scoped>
.furniture-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #1a1208;
  border: 1px solid rgba(212,165,116,0.15);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #120d05;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(212,165,116,0.1);
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
  max-width: 300px;
}

.site-layout { display: flex; flex-direction: column; }

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: rgba(0,0,0,0.4);
  border-bottom: 1px solid rgba(212,165,116,0.1);
}

.brand {
  font-size: 14px;
  font-weight: 700;
  color: #d4a574;
  letter-spacing: 3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 11px;
  color: rgba(255,255,255,0.5);
}

.nav-cta {
  background: #d4a574;
  color: #1a1208;
  padding: 5px 14px;
  border-radius: 100px;
  font-weight: 600;
  color: #1a0a00;
}

.hero-section {
  position: relative;
  height: 240px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.wood-texture {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #2d1b0e 0%, #4a2c17 40%, #6b3f1f 70%, #3d2010 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 24px;
  max-width: 55%;
}

.hero-badge {
  font-size: 9px;
  color: #d4a574;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-weight: 600;
}

.hero-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 8px;
}

.accent { color: #d4a574; }

.hero-desc {
  font-size: 10px;
  color: rgba(255,255,255,0.6);
  margin: 0 0 14px;
  line-height: 1.5;
}

.hero-btns { display: flex; gap: 8px; align-items: center; }

.btn-primary-wood {
  background: #d4a574;
  color: #1a0a00;
  border: none;
  padding: 7px 16px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

.btn-ghost-wood {
  background: transparent;
  color: rgba(255,255,255,0.7);
  border: none;
  font-size: 10px;
  cursor: pointer;
}

.floating-card {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}

.product-preview {
  background: rgba(26,18,8,0.9);
  border: 1px solid rgba(212,165,116,0.2);
  border-radius: 12px;
  padding: 12px;
  width: 140px;
  backdrop-filter: blur(10px);
}

.product-img-placeholder {
  width: 100%;
  height: 80px;
  background: linear-gradient(135deg, #3d2b1f, #5c3d2e);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.chair-svg {
  position: relative;
  width: 50px;
  height: 60px;
}

.chair-back {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 28px;
  background: #d4a574;
  border-radius: 4px 4px 0 0;
  opacity: 0.8;
}

.chair-seat {
  position: absolute;
  top: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 10px;
  background: #c4956a;
  border-radius: 3px;
}

.chair-legs {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.leg {
  width: 4px;
  height: 20px;
  background: #b8956a;
  border-radius: 2px;
}

.product-info { }
.product-name { font-size: 10px; font-weight: 600; color: #fff; margin-bottom: 3px; }
.product-price { font-size: 12px; font-weight: 700; color: #d4a574; margin-bottom: 3px; }
.product-rating { font-size: 9px; color: #fbbf24; }
.product-rating span { color: rgba(255,255,255,0.5); }

.products-strip {
  padding: 16px 24px;
  background: #120d05;
}

.strip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.strip-label { font-size: 11px; font-weight: 600; color: #d4a574; letter-spacing: 1px; text-transform: uppercase; }
.strip-link { font-size: 10px; color: rgba(255,255,255,0.4); cursor: pointer; }

.products-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(212,165,116,0.1);
}

.product-card-img {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-shape {
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-radius: 4px;
  opacity: 0.6;
}

.product-card-info {
  padding: 6px 8px;
  background: rgba(255,255,255,0.03);
}

.product-card-name { font-size: 9px; color: rgba(255,255,255,0.7); margin-bottom: 2px; }
.product-card-price { font-size: 10px; font-weight: 700; color: #d4a574; }
</style>

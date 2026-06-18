<template>
  <div class="ecommerce-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>shopnova.com/collections</span>
        </div>
      </div>

      <div class="site-layout">
        <!-- Nav -->
        <nav class="site-nav">
          <div class="brand">✦ SHOPNOVA</div>
          <div class="nav-center">
            <div class="search-bar">
              <span>🔍</span>
              <span class="placeholder">Search products...</span>
            </div>
          </div>
          <div class="nav-actions">
            <span class="nav-icon">❤️</span>
            <span class="nav-icon">👤</span>
            <div class="cart-btn">
              <span>🛒</span>
              <span class="cart-count">3</span>
            </div>
          </div>
        </nav>

        <!-- Category bar -->
        <div class="category-bar">
          <span class="cat active">All</span>
          <span class="cat">Electronics</span>
          <span class="cat">Fashion</span>
          <span class="cat">Home & Living</span>
          <span class="cat">Beauty</span>
          <span class="cat">Sports</span>
        </div>

        <!-- Main content -->
        <div class="main-content">
          <!-- Sidebar filters -->
          <aside class="filters">
            <div class="filter-group">
              <div class="filter-title">Price Range</div>
              <div class="price-slider">
                <div class="slider-track">
                  <div class="slider-fill"></div>
                </div>
                <div class="price-labels">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>
            </div>
            <div class="filter-group">
              <div class="filter-title">Brand</div>
              <div class="checkbox-list">
                <div class="checkbox-item" v-for="b in brands" :key="b">
                  <div class="checkbox" :class="{ checked: b === 'Apple' }"></div>
                  <span>{{ b }}</span>
                </div>
              </div>
            </div>
            <div class="filter-group">
              <div class="filter-title">Rating</div>
              <div class="rating-filter" v-for="r in [5,4,3]" :key="r">
                <span class="stars">{{ '★'.repeat(r) }}{{ '☆'.repeat(5-r) }}</span>
                <span class="rating-count">& up</span>
              </div>
            </div>
          </aside>

          <!-- Products grid -->
          <div class="products-area">
            <div class="products-header">
              <span class="results-count">Showing 1-12 of 248 results</span>
              <select class="sort-select">
                <option>Sort: Featured</option>
              </select>
            </div>
            <div class="products-grid">
              <div class="product-card" v-for="p in products" :key="p.name">
                <div class="product-img" :style="{ background: p.bg }">
                  <span class="product-emoji">{{ p.emoji }}</span>
                  <div class="product-badge" v-if="p.badge">{{ p.badge }}</div>
                  <button class="wishlist-btn">♡</button>
                </div>
                <div class="product-info">
                  <div class="product-name">{{ p.name }}</div>
                  <div class="product-rating">{{ '★'.repeat(p.rating) }} <span class="review-count">({{ p.reviews }})</span></div>
                  <div class="product-pricing">
                    <span class="current-price">{{ p.price }}</span>
                    <span class="original-price" v-if="p.original">{{ p.original }}</span>
                  </div>
                  <button class="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const brands = ['Apple', 'Samsung', 'Sony', 'Nike']

const products = [
  { name: 'Wireless Headphones Pro', price: '$89', original: '$129', badge: '-31%', rating: 5, reviews: '2.4k', bg: 'linear-gradient(135deg, #1a0f2e, #2d1b4e)', emoji: '🎧' },
  { name: 'Smart Watch Series X', price: '$199', original: null, badge: 'New', rating: 4, reviews: '856', bg: 'linear-gradient(135deg, #0f0f1a, #1a1a2e)', emoji: '⌚' },
  { name: 'Minimalist Sneakers', price: '$65', original: '$95', badge: '-32%', rating: 5, reviews: '1.2k', bg: 'linear-gradient(135deg, #1a1a2e, #2d2d4e)', emoji: '👟' },
  { name: 'Portable Speaker', price: '$45', original: null, badge: null, rating: 4, reviews: '432', bg: 'linear-gradient(135deg, #0f1a2e, #1a2d4e)', emoji: '🔊' },
]
</script>

<style scoped>
.ecommerce-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #0f0f1a;
  border: 1px solid rgba(168,85,247,0.15);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #080810;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.browser-dots { display: flex; gap: 6px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.browser-url {
  flex: 1;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 11px;
  color: rgba(255,255,255,0.3);
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
  padding: 10px 16px;
  background: rgba(0,0,0,0.4);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  gap: 12px;
}

.brand { font-size: 13px; font-weight: 800; color: #a855f7; letter-spacing: 2px; white-space: nowrap; }

.nav-center { flex: 1; }

.search-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 100px;
  padding: 5px 12px;
  font-size: 10px;
  color: rgba(255,255,255,0.3);
}

.nav-actions { display: flex; align-items: center; gap: 8px; }
.nav-icon { font-size: 14px; cursor: pointer; }

.cart-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #a855f7;
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 11px;
  cursor: pointer;
}

.cart-count {
  background: #fff;
  color: #a855f7;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 700;
}

.category-bar {
  display: flex;
  gap: 0;
  padding: 0 16px;
  background: rgba(0,0,0,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  overflow-x: auto;
}

.cat {
  padding: 8px 14px;
  font-size: 10px;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
}

.cat.active {
  color: #a855f7;
  border-bottom-color: #a855f7;
}

.main-content {
  display: flex;
  height: 320px;
}

.filters {
  width: 130px;
  background: rgba(0,0,0,0.2);
  border-right: 1px solid rgba(255,255,255,0.05);
  padding: 12px;
  flex-shrink: 0;
  overflow: hidden;
}

.filter-group { margin-bottom: 14px; }

.filter-title {
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
}

.price-slider { }

.slider-track {
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px;
  margin-bottom: 4px;
  position: relative;
}

.slider-fill {
  position: absolute;
  left: 10%;
  right: 30%;
  height: 100%;
  background: #a855f7;
  border-radius: 2px;
}

.price-labels {
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  color: rgba(255,255,255,0.4);
}

.checkbox-list { display: flex; flex-direction: column; gap: 5px; }

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 9px;
  color: rgba(255,255,255,0.5);
}

.checkbox {
  width: 12px;
  height: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 3px;
  flex-shrink: 0;
}

.checkbox.checked {
  background: #a855f7;
  border-color: #a855f7;
}

.rating-filter {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
}

.stars { font-size: 9px; color: #fbbf24; }
.rating-count { font-size: 8px; color: rgba(255,255,255,0.4); }

.products-area {
  flex: 1;
  padding: 10px 12px;
  overflow: hidden;
}

.products-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.results-count { font-size: 9px; color: rgba(255,255,255,0.4); }

.sort-select {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 9px;
  color: rgba(255,255,255,0.5);
  cursor: pointer;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}

.product-img {
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-emoji { font-size: 28px; }

.product-badge {
  position: absolute;
  top: 4px;
  left: 4px;
  background: #a855f7;
  color: #fff;
  font-size: 7px;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 3px;
}

.wishlist-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0,0,0,0.5);
  border: none;
  color: rgba(255,255,255,0.6);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-info {
  padding: 6px 8px;
  background: rgba(255,255,255,0.03);
}

.product-name { font-size: 8px; font-weight: 600; color: #fff; margin-bottom: 2px; line-height: 1.3; }
.product-rating { font-size: 8px; color: #fbbf24; margin-bottom: 3px; }
.review-count { color: rgba(255,255,255,0.35); }

.product-pricing { display: flex; align-items: center; gap: 4px; margin-bottom: 5px; }
.current-price { font-size: 10px; font-weight: 700; color: #a855f7; }
.original-price { font-size: 8px; color: rgba(255,255,255,0.3); text-decoration: line-through; }

.add-to-cart {
  width: 100%;
  background: rgba(168,85,247,0.15);
  border: 1px solid rgba(168,85,247,0.3);
  color: #a855f7;
  border-radius: 4px;
  padding: 4px;
  font-size: 8px;
  font-weight: 600;
  cursor: pointer;
}
</style>

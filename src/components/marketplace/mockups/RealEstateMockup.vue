<template>
  <div class="realestate-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>propfinder.vn/listings</span>
        </div>
      </div>

      <div class="site-layout">
        <!-- Nav -->
        <nav class="site-nav">
          <div class="brand">🏠 PropFinder</div>
          <div class="nav-links">
            <span>Buy</span>
            <span>Rent</span>
            <span>Sell</span>
            <span>Agents</span>
            <span class="list-btn">List Property</span>
          </div>
        </nav>

        <!-- Search hero -->
        <section class="search-hero">
          <div class="hero-bg"></div>
          <div class="hero-content">
            <h1 class="hero-title">Find Your <span class="accent">Dream Home</span></h1>
            <div class="search-box">
              <div class="search-tabs">
                <span class="stab active">Buy</span>
                <span class="stab">Rent</span>
                <span class="stab">New Projects</span>
              </div>
              <div class="search-inputs">
                <div class="search-input">
                  <span>📍</span>
                  <span class="placeholder">Location, district...</span>
                </div>
                <div class="search-input">
                  <span>🏠</span>
                  <span class="placeholder">Property type</span>
                </div>
                <div class="search-input">
                  <span>💰</span>
                  <span class="placeholder">Price range</span>
                </div>
                <button class="search-btn">Search</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Listings -->
        <section class="listings-section">
          <div class="listings-header">
            <span class="listings-count">1,248 properties found</span>
            <div class="view-toggle">
              <span class="vtab active">⊞ Grid</span>
              <span class="vtab">≡ List</span>
              <span class="vtab">🗺 Map</span>
            </div>
          </div>
          <div class="listings-grid">
            <div class="listing-card" v-for="prop in properties" :key="prop.name">
              <div class="listing-img" :style="{ background: prop.bg }">
                <div class="listing-badge">{{ prop.badge }}</div>
                <div class="listing-price">{{ prop.price }}</div>
                <div class="building-icon">🏢</div>
              </div>
              <div class="listing-info">
                <div class="listing-name">{{ prop.name }}</div>
                <div class="listing-loc">📍 {{ prop.location }}</div>
                <div class="listing-specs">
                  <span>🛏 {{ prop.beds }}</span>
                  <span>🚿 {{ prop.baths }}</span>
                  <span>📐 {{ prop.area }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const properties = [
  { name: 'Vinhomes Grand Park', location: 'District 9, HCM', price: '$180,000', badge: 'New', beds: '3', baths: '2', area: '85m²', bg: 'linear-gradient(135deg, #0a1628, #1a2f4a)' },
  { name: 'Masteri Thao Dien', location: 'District 2, HCM', price: '$320,000', badge: 'Hot', beds: '2', baths: '2', area: '72m²', bg: 'linear-gradient(135deg, #0d2137, #1a3a5c)' },
  { name: 'The Sun Avenue', location: 'District 2, HCM', price: '$250,000', badge: 'Sale', beds: '3', baths: '2', area: '95m²', bg: 'linear-gradient(135deg, #0a1628, #162840)' },
]
</script>

<style scoped>
.realestate-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #0a1628;
  border: 1px solid rgba(56,189,248,0.15);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #060e1a;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(56,189,248,0.1);
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
  padding: 10px 20px;
  background: rgba(0,0,0,0.4);
  border-bottom: 1px solid rgba(56,189,248,0.1);
}

.brand { font-size: 12px; font-weight: 700; color: #38bdf8; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 10px;
  color: rgba(255,255,255,0.5);
}

.list-btn {
  background: #38bdf8;
  color: #0a1628;
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 10px;
}

.search-hero {
  position: relative;
  padding: 24px 20px;
  background: linear-gradient(135deg, #0a1628, #1a2f4a);
}

.hero-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 14px;
  text-align: center;
}

.accent { color: #38bdf8; }

.search-box {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(56,189,248,0.2);
  border-radius: 12px;
  overflow: hidden;
}

.search-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.stab {
  padding: 7px 14px;
  font-size: 10px;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
}

.stab.active {
  background: rgba(56,189,248,0.1);
  color: #38bdf8;
  border-bottom: 2px solid #38bdf8;
}

.search-inputs {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 8px;
  gap: 6px;
}

.search-input {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 10px;
  color: rgba(255,255,255,0.3);
}

.search-btn {
  background: #38bdf8;
  color: #0a1628;
  border: none;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.listings-section {
  padding: 12px 20px;
  background: #060e1a;
}

.listings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.listings-count { font-size: 10px; color: rgba(255,255,255,0.5); }

.view-toggle { display: flex; gap: 4px; }
.vtab {
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 4px;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
}
.vtab.active { background: rgba(56,189,248,0.15); color: #38bdf8; }

.listings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.listing-card {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}

.listing-img {
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.building-icon { font-size: 28px; opacity: 0.6; }

.listing-badge {
  position: absolute;
  top: 6px;
  left: 6px;
  background: #38bdf8;
  color: #0a1628;
  font-size: 8px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}

.listing-price {
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: rgba(0,0,0,0.7);
  color: #38bdf8;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}

.listing-info {
  padding: 8px;
  background: rgba(255,255,255,0.03);
}

.listing-name { font-size: 9px; font-weight: 600; color: #fff; margin-bottom: 2px; }
.listing-loc { font-size: 8px; color: rgba(255,255,255,0.4); margin-bottom: 5px; }

.listing-specs {
  display: flex;
  gap: 6px;
  font-size: 8px;
  color: rgba(255,255,255,0.5);
}
</style>

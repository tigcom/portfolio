<template>
  <div class="traveloka-mockup">
    <!-- Header/Navigation -->
    <div class="mockup-header">
      <div class="mockup-logo">Traveloka</div>
      <div class="mockup-nav">
        <span class="active">Flights</span>
        <span>Hotels</span>
        <span>Tours</span>
        <span>Buses</span>
      </div>
    </div>

    <!-- Search Section -->
    <div class="mockup-search">
      <div class="search-grid">
        <div class="search-item">
          <label>From</label>
          <div class="search-input">SGN (Ho Chi Minh City)</div>
        </div>
        <div class="search-item">
          <label>To</label>
          <div class="search-input">HAN (Ha Noi)</div>
        </div>
        <div class="search-item">
          <label>Departure Date</label>
          <div class="search-input">Thu, 19 Mar 2026</div>
        </div>
        <div class="search-item">
          <label>Passengers</label>
          <div class="search-input">1 Adult, Economy</div>
        </div>
      </div>
      <button class="search-btn">Search Flights</button>
    </div>

    <!-- Results Simulation -->
    <div class="mockup-results">
      <div class="result-card" v-for="i in 2" :key="i">
        <div class="airline-info">
          <div class="airline-logo">✈️</div>
          <div>
            <div class="airline-name">Vietnam Airlines</div>
            <div class="flight-type">Direct</div>
          </div>
        </div>
        <div class="flight-time">
          <div>
            <div class="time">08:00</div>
            <div class="city">SGN</div>
          </div>
          <div class="duration">
            <div class="line"></div>
            <span>2h 10m</span>
          </div>
          <div>
            <div class="time">10:10</div>
            <div class="city">HAN</div>
          </div>
        </div>
        <div class="flight-price">
          <div class="price">1,250,000 VND</div>
          <button class="select-btn">Select</button>
        </div>
      </div>
    </div>

    <!-- Feature Overlay (Optional) -->
    <div class="mockup-overlay">
      <div class="badge">Microservices Integrated</div>
      <div class="badge">Core Banking Ready</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Simple entrance animation
  gsap.from('.traveloka-mockup', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.from('.result-card', {
    opacity: 0,
    x: -20,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.4,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.traveloka-mockup {
  background: #f8faff;
  border-radius: 16px;
  padding: 24px;
  color: #1c1c1c;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.mockup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.mockup-logo {
  font-weight: 800;
  font-size: 1.2rem;
  color: #0194f3;
}

.mockup-nav {
  display: flex;
  gap: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #687176;
}

.mockup-nav span.active {
  color: #0194f3;
  border-bottom: 2px solid #0194f3;
}

.mockup-search {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.search-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.search-item label {
  display: block;
  font-size: 0.7rem;
  color: #687176;
  margin-bottom: 4px;
}

.search-input {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 8px;
  border: 1px solid #e6eaed;
  border-radius: 6px;
  background: #f7f9fa;
}

.search-btn {
  width: 100%;
  background: #ff5e1f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

.mockup-results {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-card {
  background: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6eaed;
}

.airline-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.airline-logo {
  font-size: 1.2rem;
}

.airline-name {
  font-size: 0.8rem;
  font-weight: 700;
}

.flight-type {
  font-size: 0.65rem;
  color: #687176;
}

.flight-time {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.time {
  font-weight: 700;
  font-size: 0.9rem;
}

.city {
  font-size: 0.65rem;
  color: #687176;
}

.duration {
  width: 60px;
}

.line {
  height: 1px;
  background: #d1d5db;
  position: relative;
}

.line::after {
  content: '';
  position: absolute;
  right: 0;
  top: -2px;
  width: 5px;
  height: 5px;
  background: #d1d5db;
  border-radius: 50%;
}

.duration span {
  font-size: 0.6rem;
  color: #687176;
}

.price {
  color: #ff5e1f;
  font-weight: 800;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.select-btn {
  background: #0194f3;
  color: white;
  border: none;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

.mockup-overlay {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
}

.badge {
  background: rgba(1, 148, 243, 0.1);
  color: #0194f3;
  font-size: 0.55rem;
  padding: 2px 8px;
  border-radius: 100px;
  border: 1px solid rgba(1, 148, 243, 0.2);
  font-weight: 600;
}

@media (max-width: 480px) {
  .search-grid {
    grid-template-columns: 1fr;
  }
  
  .flight-time {
    display: none;
  }
}
</style>

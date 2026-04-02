<template>
  <div class="traveloka-mockup" v-reveal>
    <div class="mockup-container">
      <!-- Tablet/Web Frame -->
      <div class="web-frame" v-reveal data-delay="0.2">
        <div class="web-header">
          <div class="dots"><span></span><span></span><span></span></div>
          <div class="url">traveloka.com/flight/search</div>
        </div>
        <div class="web-content">
          <img src="/image/projects/traveloka-clone/flight ls.png" alt="Flight Search Results" class="main-web-img">
        </div>
      </div>

      <!-- Mobile App Frame (Overlapping) -->
      <div class="mobile-frame" v-reveal data-delay="0.5">
        <div class="mobile-screen">
          <div class="status-bar">
            <span>9:41</span>
            <div class="icons">📶🔋</div>
          </div>
          <img src="/image/projects/traveloka-clone/login.jpg" alt="Mobile Login" class="mobile-img">
        </div>
      </div>

      <!-- Floating Feature Cards -->
      <div class="floating-card booking-card" v-reveal data-delay="0.8">
        <img src="/image/projects/traveloka-clone/bookls.png" alt="Booking List">
        <div class="card-info">
          <span class="tag">Real-time</span>
          <span class="label">Booking Management</span>
        </div>
      </div>

      <div class="floating-card support-card" v-reveal data-delay="1.0">
        <img src="/image/projects/traveloka-clone/supoort.jpg" alt="Support Center">
        <div class="card-info">
          <span class="tag">System</span>
          <span class="label">Customer Support</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// v-reveal directive is handled globally by ProjectDetailView
</script>

<style scoped>
.traveloka-mockup {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  position: relative;
}

.mockup-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}

/* Web Frame */
.web-frame {
  width: 80%;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: translateX(-40px) rotateY(5deg);
}

.web-header {
  background: #f1f3f4;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.dots { display: flex; gap: 6px; }
.dots span { width: 8px; height: 8px; border-radius: 50%; background: #ccc; }
.url { font-size: 11px; color: #999; background: #fff; padding: 4px 40px; border-radius: 4px; }

.web-content { width: 100%; overflow: hidden; }
.main-web-img { width: 100%; display: block; }

/* Mobile Frame */
.mobile-frame {
  position: absolute;
  right: 10%;
  bottom: 40px;
  width: 260px;
  height: 520px;
  background: #1a1a1a;
  border-radius: 36px;
  padding: 10px;
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.4);
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: rotateZ(-2deg);
}

.mobile-screen {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
}

.status-bar {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #fff;
  position: absolute;
  top: 0; width: 100%;
  z-index: 2;
}

.mobile-img { width: 100%; height: 100%; object-fit: cover; }

/* Floating Cards */
.floating-card {
  position: absolute;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 5;
  transition: transform 0.3s ease;
}

.floating-card img { width: 100%; display: block; }

.card-info { padding: 10px; display: flex; flex-direction: column; gap: 4px; }
.tag { font-size: 9px; font-weight: 700; color: #0194f3; text-transform: uppercase; }
.label { font-size: 11px; font-weight: 600; color: #333; }

.booking-card { width: 220px; left: 5%; bottom: 60px; transform: rotate(3deg); }
.support-card { width: 200px; right: 5%; top: 60px; transform: rotate(-4deg); }

.floating-card:hover { transform: translateY(-10px) scale(1.05) rotate(0); z-index: 20; }

@media (max-width: 1024px) {
  .web-frame { width: 100%; transform: none; }
  .mobile-frame, .floating-card { display: none; }
  .traveloka-mockup { padding: 40px 0; }
}
</style>

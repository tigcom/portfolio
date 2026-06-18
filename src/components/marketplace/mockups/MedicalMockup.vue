<template>
  <div class="medical-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>medcare-clinic.com/book</span>
        </div>
      </div>

      <div class="site-layout">
        <!-- Nav -->
        <nav class="site-nav">
          <div class="brand">⚕️ MedCare</div>
          <div class="nav-links">
            <span>Departments</span>
            <span>Doctors</span>
            <span>Services</span>
            <span>Patient Portal</span>
            <span class="book-btn">Book Appointment</span>
          </div>
        </nav>

        <!-- Hero -->
        <section class="hero">
          <div class="hero-bg"></div>
          <div class="hero-content">
            <div class="hero-badge">🏥 Trusted Healthcare Since 2005</div>
            <h1 class="hero-title">Your Health,<br>Our <span class="accent">Priority</span></h1>
            <p class="hero-desc">Expert care from 50+ specialists across 12 departments.</p>
            <div class="hero-actions">
              <button class="btn-book">Book Appointment</button>
              <button class="btn-emergency">🚨 Emergency: 115</button>
            </div>
          </div>
          <!-- Quick booking card -->
          <div class="booking-card">
            <div class="booking-title">Quick Appointment</div>
            <div class="booking-field">
              <span class="field-label">Department</span>
              <div class="field-select">General Medicine ▾</div>
            </div>
            <div class="booking-field">
              <span class="field-label">Doctor</span>
              <div class="field-select">Dr. Nguyen Van A ▾</div>
            </div>
            <div class="booking-field">
              <span class="field-label">Date</span>
              <div class="field-select">June 20, 2025 ▾</div>
            </div>
            <div class="time-slots">
              <div class="time-slot" v-for="t in timeSlots" :key="t.time" :class="{ available: t.available, selected: t.selected }">
                {{ t.time }}
              </div>
            </div>
            <button class="confirm-btn">Confirm Booking</button>
          </div>
        </section>

        <!-- Doctors strip -->
        <section class="doctors-strip">
          <div class="strip-header">
            <span class="strip-title">Our Specialists</span>
            <span class="strip-link">View all doctors →</span>
          </div>
          <div class="doctors-row">
            <div class="doctor-card" v-for="doc in doctors" :key="doc.name">
              <div class="doctor-avatar" :style="{ background: doc.bg }">{{ doc.initials }}</div>
              <div class="doctor-name">{{ doc.name }}</div>
              <div class="doctor-spec">{{ doc.specialty }}</div>
              <div class="doctor-rating">★ {{ doc.rating }}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeSlots = [
  { time: '9:00', available: true, selected: false },
  { time: '9:30', available: true, selected: true },
  { time: '10:00', available: false, selected: false },
  { time: '10:30', available: true, selected: false },
  { time: '11:00', available: true, selected: false },
  { time: '11:30', available: false, selected: false },
]

const doctors = [
  { name: 'Dr. Minh Tuan', specialty: 'Cardiology', initials: 'MT', bg: 'linear-gradient(135deg, #001a1a, #004d4d)', rating: '4.9' },
  { name: 'Dr. Thu Hoa', specialty: 'Neurology', initials: 'TH', bg: 'linear-gradient(135deg, #001a2e, #003d5c)', rating: '4.8' },
  { name: 'Dr. Van Long', specialty: 'Orthopedics', initials: 'VL', bg: 'linear-gradient(135deg, #1a001a, #4d004d)', rating: '4.9' },
  { name: 'Dr. Kim Anh', specialty: 'Pediatrics', initials: 'KA', bg: 'linear-gradient(135deg, #001a0a, #004d1a)', rating: '5.0' },
]
</script>

<style scoped>
.medical-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #001a1a;
  border: 1px solid rgba(45,212,191,0.15);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #001010;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(45,212,191,0.1);
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
  padding: 10px 20px;
  background: rgba(0,0,0,0.4);
  border-bottom: 1px solid rgba(45,212,191,0.1);
}

.brand { font-size: 13px; font-weight: 700; color: #2dd4bf; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 10px;
  color: rgba(255,255,255,0.45);
}

.book-btn {
  background: #2dd4bf;
  color: #001a1a;
  padding: 5px 12px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 10px;
}

.hero {
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #001a1a 0%, #003333 50%, #004d4d 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  flex: 1;
}

.hero-badge {
  font-size: 9px;
  color: #2dd4bf;
  margin-bottom: 8px;
  font-weight: 600;
}

.hero-title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 8px;
}

.accent { color: #2dd4bf; }

.hero-desc {
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  margin: 0 0 12px;
}

.hero-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }

.btn-book {
  background: #2dd4bf;
  color: #001a1a;
  border: none;
  padding: 7px 14px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

.btn-emergency {
  background: rgba(248,113,113,0.15);
  border: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  padding: 6px 12px;
  border-radius: 100px;
  font-size: 9px;
  font-weight: 600;
  cursor: pointer;
}

.booking-card {
  position: relative;
  z-index: 2;
  background: rgba(0,26,26,0.9);
  border: 1px solid rgba(45,212,191,0.2);
  border-radius: 12px;
  padding: 12px;
  width: 180px;
  flex-shrink: 0;
  backdrop-filter: blur(10px);
}

.booking-title {
  font-size: 11px;
  font-weight: 600;
  color: #2dd4bf;
  margin-bottom: 10px;
}

.booking-field { margin-bottom: 7px; }

.field-label {
  display: block;
  font-size: 8px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 3px;
}

.field-select {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(45,212,191,0.15);
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 9px;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
}

.time-slots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}

.time-slot {
  padding: 4px;
  border-radius: 4px;
  font-size: 8px;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.5);
}

.time-slot.available { border-color: rgba(45,212,191,0.2); color: rgba(255,255,255,0.7); }
.time-slot.selected { background: #2dd4bf; color: #001a1a; font-weight: 700; border-color: #2dd4bf; }
.time-slot:not(.available):not(.selected) { opacity: 0.3; cursor: not-allowed; }

.confirm-btn {
  width: 100%;
  background: #2dd4bf;
  color: #001a1a;
  border: none;
  border-radius: 6px;
  padding: 6px;
  font-size: 9px;
  font-weight: 700;
  cursor: pointer;
}

.doctors-strip {
  padding: 12px 20px;
  background: #001010;
}

.strip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.strip-title { font-size: 11px; font-weight: 600; color: #2dd4bf; text-transform: uppercase; letter-spacing: 1px; }
.strip-link { font-size: 9px; color: rgba(255,255,255,0.4); cursor: pointer; }

.doctors-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.doctor-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(45,212,191,0.1);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.doctor-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #2dd4bf;
  margin: 0 auto 6px;
  border: 1px solid rgba(45,212,191,0.2);
}

.doctor-name { font-size: 9px; font-weight: 600; color: #fff; margin-bottom: 2px; }
.doctor-spec { font-size: 8px; color: rgba(255,255,255,0.4); margin-bottom: 3px; }
.doctor-rating { font-size: 9px; color: #fbbf24; }
</style>

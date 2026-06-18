<template>
  <div class="corporate-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>nexus-agency.com</span>
        </div>
      </div>

      <div class="site-layout">
        <!-- Nav -->
        <nav class="site-nav">
          <div class="brand"><span class="brand-dot">◆</span> NEXUS</div>
          <div class="nav-links">
            <span>Services</span>
            <span>Work</span>
            <span>About</span>
            <span>Blog</span>
            <span class="contact-btn">Let's Talk →</span>
          </div>
        </nav>

        <!-- Hero -->
        <section class="hero">
          <div class="hero-bg">
            <div class="grid-pattern"></div>
            <div class="glow-orb orb1"></div>
            <div class="glow-orb orb2"></div>
          </div>
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-dot"></span>
              Available for new projects
            </div>
            <h1 class="hero-title">We Build<br><span class="accent">Digital Products</span><br>That Matter</h1>
            <p class="hero-desc">Strategy, design, and engineering for ambitious brands.</p>
            <div class="hero-actions">
              <button class="btn-primary-corp">Start a Project</button>
              <button class="btn-ghost-corp">View Our Work</button>
            </div>
          </div>
          <!-- Stats -->
          <div class="hero-stats">
            <div class="stat" v-for="s in heroStats" :key="s.label">
              <div class="stat-val">{{ s.val }}</div>
              <div class="stat-lbl">{{ s.label }}</div>
            </div>
          </div>
        </section>

        <!-- Services -->
        <section class="services-section">
          <div class="services-label">WHAT WE DO</div>
          <div class="services-grid">
            <div class="service-card" v-for="svc in services" :key="svc.title">
              <div class="service-icon">{{ svc.icon }}</div>
              <div class="service-title">{{ svc.title }}</div>
              <div class="service-desc">{{ svc.desc }}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const heroStats = [
  { val: '120+', label: 'Projects' },
  { val: '8yr', label: 'Experience' },
  { val: '98%', label: 'Satisfaction' },
]

const services = [
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, user-centered interfaces' },
  { icon: '⚡', title: 'Web Development', desc: 'Fast, scalable web applications' },
  { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android native apps' },
  { icon: '📊', title: 'Digital Strategy', desc: 'Data-driven growth plans' },
]
</script>

<style scoped>
.corporate-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #0b0b0d;
  border: 1px solid rgba(188,255,103,0.12);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #080809;
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
  max-width: 280px;
}

.site-layout { display: flex; flex-direction: column; }

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.brand {
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.brand-dot { color: #bcff67; font-size: 10px; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 10px;
  color: rgba(255,255,255,0.45);
}

.contact-btn {
  background: #bcff67;
  color: #0b0b0d;
  padding: 5px 12px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 10px;
}

.hero {
  position: relative;
  padding: 28px 20px 20px;
  overflow: hidden;
}

.hero-bg { position: absolute; inset: 0; }

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
}

.orb1 {
  width: 200px;
  height: 200px;
  background: rgba(188,255,103,0.08);
  top: -50px;
  right: 10%;
}

.orb2 {
  width: 150px;
  height: 150px;
  background: rgba(124,106,247,0.06);
  bottom: -30px;
  left: 20%;
}

.hero-content { position: relative; z-index: 2; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(188,255,103,0.08);
  border: 1px solid rgba(188,255,103,0.2);
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 9px;
  color: #bcff67;
  margin-bottom: 12px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
}

.hero-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 8px;
}

.accent { color: #bcff67; }

.hero-desc {
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  margin: 0 0 14px;
}

.hero-actions { display: flex; gap: 8px; align-items: center; }

.btn-primary-corp {
  background: #bcff67;
  color: #0b0b0d;
  border: none;
  padding: 7px 14px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

.btn-ghost-corp {
  background: transparent;
  color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 6px 12px;
  border-radius: 100px;
  font-size: 10px;
  cursor: pointer;
}

.hero-stats {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 20px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.stat { }
.stat-val { font-size: 16px; font-weight: 700; color: #bcff67; }
.stat-lbl { font-size: 9px; color: rgba(255,255,255,0.4); }

.services-section {
  padding: 14px 20px;
  background: rgba(0,0,0,0.3);
}

.services-label {
  font-size: 8px;
  color: rgba(255,255,255,0.25);
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.service-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 10px;
}

.service-icon { font-size: 16px; margin-bottom: 5px; }
.service-title { font-size: 10px; font-weight: 600; color: #fff; margin-bottom: 3px; }
.service-desc { font-size: 8px; color: rgba(255,255,255,0.4); line-height: 1.4; }
</style>

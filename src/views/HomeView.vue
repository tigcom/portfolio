<template>
  <main class="home-view">

    <!-- ====== HERO ====== -->
    <section class="home-hero section" ref="heroSection">
      <div class="container">
        <div class="home-hero-inner">
          <!-- Content -->
          <div class="home-hero-content">
            <div class="hero-label" ref="heroLabel">
              <span class="status-dot"></span>
              <span>{{ t('home.heroLabel') }}</span>
            </div>
            <h1 class="home-hero-title" ref="heroTitle">
              <span class="title-line">{{ t('home.heroTitleLine1') }}</span>
              <span class="title-line hero-highlight">{{ t('home.heroTitleHighlight') }}</span>
              <span class="title-line">{{ t('home.heroTitleLine3') }}</span>
              <span class="title-line">{{ t('home.heroTitleLine4') }}</span>
            </h1>
            <p class="home-hero-desc" ref="heroDesc">
              {{ t('home.heroDesc') }}
            </p>
            <div class="home-hero-btns" ref="heroBtns">
              <router-link to="/projects" class="btn btn-outline">{{ t('home.viewProjects') }}</router-link>
              <router-link to="/about" class="btn btn-ghost">{{ t('home.knowMe') }}</router-link>
            </div>
          </div>

          <!-- Visual -->
          <div class="home-hero-visual" ref="heroVisual">
            <div class="hero-card-stack">
              <div class="hero-card hero-card--main">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=85" alt="Workspace" class="hero-card-img">
                <div class="hero-card-overlay">
                  <span class="hero-card-tag">Full-Stack Dev</span>
                </div>
              </div>
              <div class="hero-stat-card hero-stat-card--1">
                <div class="hero-stat-icon">🎓</div>
                <div><div class="hero-stat-num">9/10</div><div class="hero-stat-label">{{ t('home.gpa') }}</div></div>
              </div>
              <div class="hero-stat-card hero-stat-card--2">
                <div class="hero-stat-icon">⚡</div>
                <div><div class="hero-stat-num">3+</div><div class="hero-stat-label">{{ t('home.excellentSems') }}</div></div>
              </div>
              <div class="hero-stat-card hero-stat-card--3">
                <div class="hero-stat-icon">🏢</div>
                <div><div class="hero-stat-num">Kien Long</div><div class="hero-stat-label">{{ t('home.bankExp') }}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-indicator-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- ====== MARQUEE ====== -->
    <div class="marquee-section">
      <div class="marquee-fade-left"></div>
      <div class="marquee-fade-right"></div>
      <div class="marquee-track">
        <span v-for="(badge, i) in [...techBadges, ...techBadges]" :key="i" class="tech-badge">
          <span class="tech-badge-icon">{{ badge.icon }}</span> {{ badge.name }}
        </span>
      </div>
    </div>

    <!-- ====== SELECTED PROJECTS ====== -->
    <section class="section selected-projects-section">
      <div class="container">
        <div class="section-label" v-reveal>
          <StarIcon />
          <span class="shimmer">Selected Projects</span>
        </div>
        <div class="sp-header">
          <h2 class="section-heading" v-reveal>Here's a curated selection showcasing my expertise and the achieved results.</h2>
        </div>
      </div>

      <div class="sp-list">
        <router-link
          v-for="project in featuredProjects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="sp-item"
          v-reveal
        >
          <div class="sp-item-left">
            <span class="sp-num">{{ project.num }}</span>
            <div class="sp-item-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.subtitle.split(' - ')[0] }} · {{ project.year }}</p>
            </div>
          </div>
          <div class="sp-item-img">
            <img :src="project.img" :alt="project.title">
          </div>
          <div class="sp-item-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="sp-item-arrow">
            <ArrowIcon />
          </div>
        </router-link>
      </div>

      <div class="container" style="display:flex; justify-content:center; margin-top:48px;">
        <router-link to="/projects" class="btn btn-outline">View All Projects</router-link>
      </div>
    </section>

    <!-- ====== EXPERTISE ====== -->
    <section class="section expertise-section">
      <div class="container">
        <div class="section-label" v-reveal><StarIcon /><span class="shimmer">Areas of Expertise</span></div>
        <h2 class="section-heading" v-reveal>What I do best</h2>
        <div class="expertise-grid">
          <div v-for="(exp, i) in expertise" :key="exp.title" class="expertise-card" v-reveal :data-delay="i * 0.1">
            <div class="expertise-num">{{ exp.num }}</div>
            <div class="expertise-icon">{{ exp.icon }}</div>
            <h3>{{ exp.title }}</h3>
            <p>{{ exp.desc }}</p>
            <div class="expertise-tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== TESTIMONIALS ====== -->
    <section class="section testimonials-section">
      <div class="container">
        <div class="section-label" v-reveal><StarIcon /><span class="shimmer">What others say</span></div>
        <h2 class="section-heading" v-reveal>I've worked with some amazing people over the years.</h2>
      </div>
      <div class="testimonials-wrapper">
        <div class="testi-row testi-row--ltr">
          <div v-for="(t, i) in [...testimonials.slice(0,4), ...testimonials.slice(0,4)]" :key="i" class="testi-card">
            <p class="testi-text">"{{ t.text }}"</p>
            <div class="testi-author">
              <div class="testi-avatar">{{ t.initials }}</div>
              <div><strong>{{ t.name }}</strong><span>{{ t.role }}</span></div>
            </div>
          </div>
        </div>
        <div class="testi-row testi-row--rtl">
          <div v-for="(t, i) in [...testimonials.slice(4), ...testimonials.slice(4)]" :key="i" class="testi-card">
            <p class="testi-text">"{{ t.text }}"</p>
            <div class="testi-author">
              <div class="testi-avatar">{{ t.initials }}</div>
              <div><strong>{{ t.name }}</strong><span>{{ t.role }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'
import { useLang } from '../data/translations.js'

const { t } = useLang()
gsap.registerPlugin(ScrollTrigger)

// Inline icon components
const StarIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`
}
const ArrowIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`
}

// v-reveal directive (scroll reveal)
const vReveal = {
  mounted(el) {
    gsap.set(el, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    })
  }
}

// Data
const featuredProjects = projects.slice(0, 4)

const techBadges = [
  { icon: '☕', name: 'Java' }, { icon: '🍃', name: 'Spring Boot' },
  { icon: '🐘', name: 'Hibernate/JPA' }, { icon: '⚙️', name: 'Microservices' },
  { icon: '📡', name: 'Kafka' }, { icon: '🔄', name: 'gRPC/Dubbo' },
  { icon: '🟢', name: 'Vue 3' }, { icon: '🅰️', name: 'Angular' },
  { icon: '🐳', name: 'Docker' }, { icon: '🗄️', name: 'MySQL/SQL Server' },
  { icon: '⚡', name: 'Redis' }, { icon: '🔒', name: 'OAuth2/JWT' },
]

const expertise = [
  { num: '01', icon: '⚙️', title: 'Backend Development', desc: 'Xây dựng hệ thống Microservices mạnh mẽ với Spring Boot, tối ưu hóa hiệu năng và khả năng mở rộng.', tags: ['Java', 'Spring Boot', 'Kafka'] },
  { num: '02', icon: '💻', title: 'Full-Stack Integration', desc: 'Kết nối liền mạch giữa Backend Microservices và Frontend hiện đại (Vue.js/Angular).', tags: ['Vue', 'Angular', 'REST API'] },
  { num: '03', icon: '🛡️', title: 'Security & Observability', desc: 'Triển khai bảo mật JWT/OAuth2 và giám sát hệ thống với Prometheus, Grafana, OpenTelemetry.', tags: ['Spring Security', 'Monitoring', 'Tracing'] },
  { num: '04', icon: '🐳', title: 'DevOps & Infrastructure', desc: 'Quản lý cấu hình và triển khai ứng dụng mượt mà với Docker, Docker Compose và HashiCorp Vault.', tags: ['Docker', 'Vault', 'CI/CD'] },
]

const testimonials = [
  { initials: 'VN', name: 'Vritika Naik', role: 'Regional Head @GirlScript', text: 'I am amazed at ability to create intriguing designs. Work ethics are immaculate. Deliveries always executed before time.' },
  { initials: 'AR', name: 'Amrit Raj', role: 'Senior Developer @Ignite', text: 'Design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences and creativity.' },
  { initials: 'DW', name: 'Divya Walia', role: 'Java Developer @Nagarro', text: 'Has consistently demonstrated strong technical skills and a collaborative attitude, playing a pivotal role in building the application.' },
  { initials: 'EM', name: 'Elavarasan M.', role: 'Tech Lead @Ignite', text: 'Keen observational skills and ability to ask relevant questions that elevate the entire team\'s performance.' },
  { initials: 'PK', name: 'Praveen Kumar', role: 'Full Stack Dev | YouTuber', text: 'Not only a great designer but also a community guy. One of the best folks for development and design combined.' },
  { initials: 'AT', name: 'Aman Tyagi', role: 'UI/UX Designer @BrainAlive', text: 'He\'s a fun and knowledgeable person. Innovative and very creative UI/UX Designer as well as an excellent developer.' },
  { initials: 'TN', name: 'Trusha Neogi', role: 'UX Intern @Hexcoderz', text: 'Not only an exceptional UI/UX designer but also a proficient developer. Projects indicate how good the UX skills are.' },
  { initials: 'AS', name: 'Ankita Sahu', role: 'Google Crowdsource', text: 'Has been a great mentor and shown exemplary leadership skills. Web dev and UI/UX skills are just outstanding.' },
]

// Refs
const heroSection = ref(null)
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroDesc = ref(null)
const heroBtns = ref(null)
const heroVisual = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } })

  // Hero entrance
  tl.fromTo(heroLabel.value, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6 }, 0)
  tl.fromTo(heroTitle.value.querySelectorAll('.title-line'),
    { yPercent: 110, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.08, duration: 0.85 }, 0.2
  )
  tl.fromTo(heroDesc.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
  tl.fromTo(heroBtns.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.85)
  tl.fromTo(heroVisual.value, { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1 }, 0.25)
  tl.fromTo('.hero-stat-card',
    { opacity: 0, scale: 0.6, y: 20 },
    { opacity: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.5, ease: 'back.out(1.7)' }, 0.95
  )

  // Stat cards float
  gsap.to('.hero-stat-card--1', { y: -10, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.hero-stat-card--2', { y: 8, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })
  gsap.to('.hero-stat-card--3', { y: -6, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
})
</script>

<style scoped>
/* Hero */
.home-hero {
  min-height: 100vh;
  display: flex; align-items: center;
  padding-top: 100px;
  position: relative; overflow: hidden;
}
.home-hero::before {
  content: '';
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 900px; height: 900px;
  background: radial-gradient(circle, rgba(181,255,109,0.04) 0%, transparent 60%);
  pointer-events: none;
}
.home-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center; width: 100%;
}
.hero-label {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(181,255,109,0.07);
  border: 1px solid rgba(181,255,109,0.2);
  border-radius: 100px; padding: 6px 16px;
  font-size: 0.8rem; color: var(--highlight);
  margin-bottom: 24px;
}
.status-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--highlight); position: relative;
}
.status-dot::before {
  content: ''; position: absolute; inset: -3px;
  border-radius: 50%; background: var(--highlight);
  opacity: 0.4; animation: ping 1.5s infinite;
}
.home-hero-title {
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  line-height: 1.1; margin-bottom: 24px;
}
.title-line { display: block; overflow: hidden; }
.home-hero-desc {
  font-size: 1.05rem; max-width: 480px;
  margin-bottom: 36px; line-height: 1.8;
}
.home-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

/* Hero Visual */
.home-hero-visual { position: relative; }
.hero-card-stack {
  position: relative; width: 100%; aspect-ratio: 4/3;
}
.hero-card {
  position: relative; border-radius: 24px;
  overflow: hidden; border: 1px solid var(--border);
}
.hero-card--main { width: 100%; height: 100%; }
.hero-card-img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; transition: transform 0.6s;
}
.hero-card--main:hover .hero-card-img { transform: scale(1.03); }
.hero-card-overlay { position: absolute; bottom: 16px; left: 16px; }
.hero-card-tag {
  background: var(--backdrop);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  border-radius: 100px;
  padding: 6px 14px; font-size: 0.8rem;
}
.hero-stat-card {
  position: absolute;
  display: flex; align-items: center; gap: 12px;
  background: var(--bg-800);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  border-radius: 16px; padding: 14px 18px;
  z-index: 2; box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
.hero-stat-icon { font-size: 1.4rem; }
.hero-stat-num {
  font-family: var(--font-clash);
  font-size: 1.4rem; font-weight: 600;
  color: var(--text-primary); line-height: 1;
}
.hero-stat-label { font-size: 0.7rem; color: var(--text-secondary); margin-top: 2px; }
.hero-stat-card--1 { top: -20px; right: -20px; }
.hero-stat-card--2 { bottom: 20%; left: -24px; }
.hero-stat-card--3 { bottom: -16px; right: 10%; }

/* Scroll indicator */
.scroll-indicator {
  position: absolute; bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column;
  align-items: center; gap: 8px;
  color: var(--text-secondary); font-size: 0.75rem;
}
.scroll-indicator-line {
  width: 1px; height: 48px;
  background: linear-gradient(to bottom, var(--highlight), transparent);
  animation: scroll-pulse 1.5s ease-in-out infinite;
}
@keyframes scroll-pulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.4; transform: scaleY(0.5); }
}

/* Selected Projects */
.sp-header { max-width: 600px; margin-bottom: 48px; }
.sp-list { width: 100%; max-width: var(--container-max); margin: 0 auto; padding: 0 var(--container-px); }
.sp-item {
  display: flex; align-items: center; gap: 24px;
  padding: 28px 0; border-bottom: 1px solid var(--border);
  text-decoration: none; position: relative; overflow: hidden;
  transition: padding-left 0.4s cubic-bezier(0.4,0,0.2,1);
}
.sp-item::before {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 1px; background: var(--highlight);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.sp-item:hover::before { transform: scaleX(1); }
.sp-item:hover { padding-left: 8px; }
.sp-item-left { display: flex; align-items: center; gap: 20px; flex: 1; }
.sp-num { font-family: var(--font-clash); font-size: 0.85rem; color: var(--text-secondary); width: 28px; }
.sp-item-info h3 { font-size: 1.4rem; font-weight: 500; transition: color 0.3s; }
.sp-item:hover .sp-item-info h3 { color: var(--highlight); }
.sp-item-info p { font-size: 0.85rem; }
.sp-item-img {
  width: 100px; height: 64px;
  border-radius: 12px; overflow: hidden; flex-shrink: 0;
  opacity: 0; transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.sp-item:hover .sp-item-img { opacity: 1; transform: scale(1); }
.sp-item-img img { width: 100%; height: 100%; object-fit: cover; }
.sp-item-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.sp-item-arrow {
  color: var(--text-secondary); flex-shrink: 0;
  transition: transform 0.3s, color 0.3s;
}
.sp-item:hover .sp-item-arrow { transform: rotate(45deg); color: var(--highlight); }

/* Expertise */
.expertise-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.expertise-card {
  border: 1px solid var(--border);
  border-radius: 24px; padding: 32px;
  transition: border-color 0.3s, background 0.3s;
}
.expertise-card:hover {
  border-color: var(--highlight);
  background: var(--highlight-glow);
}
.expertise-num { font-family: var(--font-clash); font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 16px; }
.expertise-icon { font-size: 2rem; margin-bottom: 16px; }
.expertise-card h3 { font-size: 1.3rem; margin-bottom: 12px; }
.expertise-card p { font-size: 0.9rem; margin-bottom: 20px; }
.expertise-tags { display: flex; flex-wrap: wrap; gap: 8px; }

/* Testimonials */
.testimonials-wrapper {
  overflow: hidden; margin-top: 48px;
  padding: 16px 0; display: flex; flex-direction: column; gap: 16px;
}
.testi-row { display: flex; gap: 16px; width: max-content; }
.testi-row--ltr { animation: marquee-scroll 40s linear infinite; }
.testi-row--rtl { animation: marquee-scroll 40s linear infinite reverse; }
.testi-row:hover { animation-play-state: paused; }
.testi-card {
  flex-shrink: 0; width: 320px;
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 20px; padding: 24px;
  transition: border-color 0.3s;
}
.testi-card:hover { border-color: var(--highlight); }
.testi-text { font-size: 0.875rem; line-height: 1.7; margin-bottom: 20px; }
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--bg-600); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 700; color: var(--highlight);
  flex-shrink: 0;
}
.testi-author strong { display: block; font-size: 0.85rem; color: var(--text-primary); }
.testi-author span { font-size: 0.75rem; color: var(--text-secondary); }

@media (max-width: 900px) {
  .home-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .expertise-grid { grid-template-columns: 1fr; }
  .hero-stat-card--1 { right: -8px; }
  .hero-stat-card--2 { display: none; }
}
@media (max-width: 640px) {
  .sp-item-img, .sp-item-tags { display: none; }
}
</style>

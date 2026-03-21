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
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=85" alt="Workspace"
                  class="hero-card-img">
                <div class="hero-card-overlay">
                  <span class="hero-card-tag">Full-Stack Dev</span>
                </div>
              </div>
              <div class="hero-stat-card hero-stat-card--1">
                <div class="hero-stat-icon"><i class="fas fa-graduation-cap"></i></div>
                <div>
                  <div class="hero-stat-num">3.8/4</div>
                  <div class="hero-stat-label">{{ t('home.gpa') }}</div>
                </div>
              </div>
              <div class="hero-stat-card hero-stat-card--2">
                <div class="hero-stat-icon"><i class="fas fa-bolt"></i></div>
                <div>
                  <div class="hero-stat-num">3+</div>
                  <div class="hero-stat-label">{{ t('home.excellentSems') }}</div>
                </div>
              </div>
              <div class="hero-stat-card hero-stat-card--3">
                <div class="hero-stat-icon"><i class="fas fa-university"></i></div>
                <div>
                  <div class="hero-stat-num">Kien Long</div>
                  <div class="hero-stat-label">{{ t('home.bankExp') }}</div>
                </div>
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
          <span class="tech-badge-icon"><i :class="badge.icon"></i></span> {{ badge.name }}
        </span>
      </div>
    </div>

    <!-- ====== SELECTED PROJECTS ====== -->
    <section class="section selected-projects-section">
      <div class="container">
        <!-- Header -->
        <div class="sp-header">
          <div class="section-label" ref="spLabel">
            <StarIcon /><span class="shimmer">{{ t('home.selectedProjects') }}</span>
          </div>
          <h2 class="sp-title" ref="spTitle">{{ t('home.selectedProjectsDesc') }}</h2>
        </div>

        <!-- 2-column card grid -->
        <div class="sp-grid" ref="spGrid" @mouseleave="onCardLeave">
          <router-link v-for="(project, i) in featuredProjects" :key="project.slug"
            :to="FEATURE_PROJECT_DETAILS_ENABLED ? `/projects/${project.slug}` : ''" class="sp-card" :class="{
              'sp-card--stagger': i % 2 === 1,
              'sp-card--disabled': !FEATURE_PROJECT_DETAILS_ENABLED
            }" @mouseenter="onCardHover(i)" @click="!FEATURE_PROJECT_DETAILS_ENABLED && $event.preventDefault()">
            <!-- Image -->
            <div class="sp-card-img-wrap " :style="{ backgroundColor: project.colorBackgound }">
              <img :src="project.img" :alt="project.title[state.lang]" class="sp-card-img" loading="lazy" />
            </div>

            <!-- Info -->
            <div class="sp-card-info">
              <div class="sp-card-meta">
                <div>
                  <h3 class="sp-card-title">{{ project.title[state.lang] }}</h3>
                  <p class="sp-card-subtitle">{{ project.subtitle[state.lang] }}</p>

                </div>
                <span class="sp-year">{{ project.year }}</span>
              </div>

            </div>
          </router-link>
        </div>

        <!-- View All button -->
        <div class="sp-footer">
          <router-link to="/projects" class="view-all-btn" ref="viewAllBtn" @mouseenter="onBtnHover">
            <span class="btn-inner">
              <span class="btn-label-default">{{ t('home.viewAllProjects') }}</span>
              <span class="btn-label-hover" aria-hidden="true">{{ t('home.viewAllProjects') }}</span>
            </span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ====== EXPERTISE ====== -->
    <section class="section expertise-section">
      <div class="container">
        <div class="section-label" v-reveal>
          <StarIcon /><span class="shimmer">{{ t('home.areasOfExpertise') }}</span>
        </div>
        <h2 class="section-heading" v-reveal>{{ t('home.whatIDoBest') }}</h2>
        <div class="expertise-grid">
          <div v-for="(exp, i) in expertise" :key="exp.title" class="expertise-card" v-reveal :data-delay="i * 0.1">
            <div class="expertise-num">{{ exp.num }}</div>
            <div class="expertise-icon"><i :class="exp.icon"></i></div>
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
        <div class="section-label" v-reveal>
          <StarIcon /><span class="shimmer">{{ t('home.whatOthersSay') }}</span>
        </div>
        <h2 class="section-heading" v-reveal>{{ t('home.amazingPeople') }}</h2>
      </div>
      <div class="testimonials-wrapper">
        <div class="testi-row testi-row--ltr">
          <div v-for="(t, i) in [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)]" :key="i" class="testi-card">
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
import { projects, FEATURE_PROJECT_DETAILS_ENABLED } from '../data/projects.js'
import { useLang } from '../data/translations.js'

const { state, t } = useLang()
gsap.registerPlugin(ScrollTrigger)

// Inline icon components
const StarIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`
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
  { icon: 'fab fa-java', name: 'Java' }, { icon: 'fas fa-leaf', name: 'Spring Boot' },
  { icon: 'fas fa-database', name: 'Hibernate/JPA' }, { icon: 'fas fa-microchip', name: 'Microservices' },
  { icon: 'fas fa-stream', name: 'Kafka' }, { icon: 'fas fa-sync', name: 'gRPC/Dubbo' },
  { icon: 'fab fa-vuejs', name: 'Vue 3' }, { icon: 'fab fa-angular', name: 'Angular' },
  { icon: 'fab fa-docker', name: 'Docker' }, { icon: 'fas fa-server', name: 'MySQL/SQL' },
  { icon: 'fas fa-bolt', name: 'Redis' }, { icon: 'fas fa-key', name: 'OAuth2/JWT' },
]

const expertise = [
  { num: '01', icon: 'fas fa-server', title: 'Backend Development', desc: 'Xây dựng hệ thống Microservices mạnh mẽ với Spring Boot, tối ưu hóa hiệu năng và khả năng mở rộng.', tags: ['Java', 'Spring Boot', 'Kafka'] },
  { num: '02', icon: 'fas fa-laptop-code', title: 'Full-Stack Integration', desc: 'Kết nối liền mạch giữa Backend Microservices và Frontend hiện đại (Vue.js/Angular).', tags: ['Vue', 'Angular', 'REST API'] },
  { num: '03', icon: 'fas fa-shield-alt', title: 'Security & Observability', desc: 'Triển khai bảo mật JWT/OAuth2 và giám sát hệ thống với Prometheus, Grafana, OpenTelemetry.', tags: ['Spring Security', 'Monitoring', 'Tracing'] },
  { num: '04', icon: 'fab fa-docker', title: 'DevOps & Infrastructure', desc: 'Quản lý cấu hình và triển khai ứng dụng mượt mà với Docker, Docker Compose và HashiCorp Vault.', tags: ['Docker', 'Vault', 'CI/CD'] },
]

const testimonials = [
  { initials: 'GV', name: 'Giảng viên FPT', role: 'FPT Polytechnic', text: 'Phúc Khang là một sinh viên xuất sắc, khả năng tự học và nắm bắt công nghệ mới rất nhanh. GPA 9.0 là minh chứng cho sự nỗ lực của em.' },
  { initials: 'ĐN', name: 'Đồng nghiệp Kien Long', role: 'Java Developer', text: 'Khang làm việc rất trách nhiệm, các service trong hệ thống Internet Banking do Khang đảm nhiệm luôn ổn định và đạt hiệu năng tốt.' },
  { initials: 'BB', name: 'Bạn cùng team DATN', role: 'Full-Stack Developer', text: 'Tư duy hệ thống của Khang rất tốt, đặc biệt là phần kiến trúc Microservices. Rất vui khi được cùng thực hiện đồ án tốt nghiệp với bạn.' },
  { initials: 'KH', name: 'Khách hàng Freelance', role: 'Project Owner', text: 'Giao diện website Khang làm rất hiện đại, hiệu ứng mượt mà và đúng yêu cầu. Khả năng tích hợp Backend của bạn rất chuyên nghiệp.' },
  { initials: 'ĐN', name: 'Trưởng nhóm Backend', role: 'Senior Developer', text: 'Khang có khả năng giải quyết vấn đề logic rất tốt, các luồng API phức tạp đều được bạn xử lý gọn gàng và dễ bảo trì.' },
  { initials: 'GV', name: 'Giảng viên hướng dẫn', role: 'Software Major', text: 'Đồ án tốt nghiệp của Khang đạt độ hoàn thiện cao, quy trình triển khai Microservices và Docker rất chuẩn chỉ.' },
  { initials: 'BB', name: 'Bạn học FPT', role: 'Mobile Developer', text: 'Luôn ngưỡng mộ cách Khang quản lý thời gian để vừa học vừa đi làm cộng tác viên tại ngân hàng mà vẫn giữ được thành tích top đầu.' },
  { initials: 'KH', name: 'Đối tác dự án', role: 'Tech Lead', text: 'Phúc Khang là một Full-Stack Developer có tiềm năng lớn, thái độ cầu tiến và luôn chủ động trong công việc.' },
]

// Hover dimming state  (-1 = nothing hovered)
const hoveredCard = ref(-1)

// GSAP hover effects
function onCardHover(index) {
  hoveredCard.value = index
  const spCards = spGrid.value?.querySelectorAll('.sp-card')
  if (!spCards?.length) return

  spCards.forEach((card, i) => {
    const img = card.querySelector('.sp-card-img')

    if (i === index) {
      // Hovered card: zoom image
      gsap.to(img, { scale: 1.05, duration: 0.55, ease: 'cubic-bezier(0.45, 0, 0.55, 1)' })
      gsap.to(card, { opacity: 1, duration: 0.4, ease: 'cubic-bezier(0.25, 0.8, 0.25, 1)' })
    } else {
      // Other cards: dim
      gsap.to(img, { scale: 1, duration: 0.55, ease: 'cubic-bezier(0.45, 0, 0.55, 1)' })
      gsap.to(card, { opacity: 0.38, duration: 0.4, ease: 'cubic-bezier(0.25, 0.8, 0.25, 1)' })
    }
  })
}

function onCardLeave() {
  hoveredCard.value = -1
  const spCards = spGrid.value?.querySelectorAll('.sp-card')
  if (!spCards?.length) return

  spCards.forEach((card) => {
    const img = card.querySelector('.sp-card-img')
    // Reset all cards to normal state
    gsap.to(img, { scale: 1, duration: 0.55, ease: 'cubic-bezier(0.45, 0, 0.55, 1)' })
    gsap.to(card, { opacity: 1, duration: 0.4, ease: 'cubic-bezier(0.25, 0.8, 0.25, 1)' })
  })
}

// Refs
const heroSection = ref(null)
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroDesc = ref(null)
const heroBtns = ref(null)
const heroVisual = ref(null)
const spLabel = ref(null)
const spTitle = ref(null)
const spGrid = ref(null)
const viewAllBtn = ref(null)

// ── View-All button: wave scale + text swap ──────────────────────────────
function onBtnHover() {
  const el = viewAllBtn.value?.$el
  if (!el) return
  gsap.killTweensOf(el)
  gsap.timeline()
    .to(el, { scale: 1.07, duration: 0.2, ease: 'power2.out' })
    .to(el, { scale: 0.96, duration: 0.16, ease: 'power2.inOut' })
    .to(el, { scale: 1.0, duration: 0.24, ease: 'back.out(2.5)' })
}

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } })

  // ── Hero entrance ──────────────────────────────────────────────────────
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

  // ── Stat cards float ───────────────────────────────────────────────────
  gsap.to('.hero-stat-card--1', { y: -10, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.hero-stat-card--2', { y: 8, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })
  gsap.to('.hero-stat-card--3', { y: -6, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })

  // ── Selected Projects: header reveal ──────────────────────────────────
  ScrollTrigger.create({
    trigger: spLabel.value,
    start: 'top 88%',
    once: true,
    onEnter: () => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(spLabel.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 })
        .fromTo(spTitle.value, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.65 }, 0.2)
    }
  })

  // ── Selected Projects: cards staggered reveal ─────────────────────────
  const spCards = spGrid.value?.querySelectorAll('.sp-card')
  if (spCards?.length) {
    gsap.set(spCards, { opacity: 0, y: 64 })
    ScrollTrigger.create({
      trigger: spGrid.value,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(spCards, {
          opacity: 1, y: 0,
          duration: 0.85,
          stagger: { each: 0.13, from: 'start' },
          ease: 'power3.out',
          // Sau khi xong, xóa inline style của GSAP để CSS class
          // (sp-card--dimmed opacity) có thể hoạt động bình thường
          onComplete: () => gsap.set(spCards, { clearProps: 'opacity,transform' }),
        })
      }
    })
  }
})
</script>

<style scoped>
/* Hero */
.home-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
}

.home-hero::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(181, 255, 109, 0.04) 0%, transparent 60%);
  pointer-events: none;
}

.home-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(181, 255, 109, 0.07);
  border: 1px solid rgba(181, 255, 109, 0.2);
  border-radius: 100px;
  padding: 6px 16px;
  font-size: 0.8rem;
  color: var(--highlight);
  margin-bottom: 24px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--highlight);
  position: relative;
}

.status-dot::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: var(--highlight);
  opacity: 0.4;
  animation: ping 1.5s infinite;
}

.home-hero-title {
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  line-height: 1.1;
  margin-bottom: 24px;
}

.title-line {
  display: block;
  overflow: hidden;
}

.home-hero-desc {
  font-size: 1.05rem;
  max-width: 480px;
  margin-bottom: 36px;
  line-height: 1.8;
}

.home-hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Hero Visual */
.home-hero-visual {
  position: relative;
}

.hero-card-stack {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
}

.hero-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.hero-card--main {
  width: 100%;
  height: 100%;
}

.hero-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s;
}

.hero-card--main:hover .hero-card-img {
  transform: scale(1.03);
}

.hero-card-overlay {
  position: absolute;
  bottom: 16px;
  left: 16px;
}

.hero-card-tag {
  background: var(--backdrop);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 0.8rem;
}

.hero-stat-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-800);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 14px 18px;
  z-index: 2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.hero-stat-icon {
  font-size: 1.4rem;
}

.hero-stat-num {
  font-family: var(--font-clash);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1;
}

.hero-stat-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

.hero-stat-card--1 {
  top: -20px;
  right: -20px;
}

.hero-stat-card--2 {
  bottom: 20%;
  left: -24px;
}

.hero-stat-card--3 {
  bottom: -16px;
  right: 10%;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.scroll-indicator-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--highlight), transparent);
  animation: scroll-pulse 1.5s ease-in-out infinite;
}

@keyframes scroll-pulse {

  0%,
  100% {
    opacity: 1;
    transform: scaleY(1);
  }

  50% {
    opacity: 0.4;
    transform: scaleY(0.5);
  }
}

/* ── Selected Projects ───────────────────────────────────────────────── */
.sp-header {
  max-width: 640px;
  margin-bottom: 56px;
}

.sp-title {
  font-family: var(--font-clash);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 500;
  margin-top: 14px;
  line-height: 1.3;
}

/* 2-column card grid with masonry stagger */
.sp-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 0px;
  align-items: start;
}

.sp-card--stagger {
  margin-top: 56px;
}

/* Base card — GSAP controls hover effects now */
.sp-card {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  will-change: opacity, transform;
  /* Remove CSS transitions - GSAP handles all animations */
}

.sp-card--disabled {
  cursor: default !important;
}

/* Remove dimmed class - GSAP handles this now */



/* Image wrapper */
.sp-card-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 20px;
  background: #c7d2ff;
  margin-bottom: 20px;
  border: 1px solid var(--border);
}

.sp-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  will-change: transform;
  /* Remove CSS transition - GSAP handles image scaling */
}

/* Remove hover rule - GSAP handles this now */

/* Card info */
.sp-card-info {
  padding: 0 2px;
}

.sp-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.sp-num {
  font-family: var(--font-clash);
  font-size: 0.72rem;
  color: var(--highlight);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.sp-year {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.sp-card-title {
  font-family: var(--font-clash);
  font-size: 1.35rem;
  font-weight: 500;
  margin: 0 0 7px;
  line-height: 1.3;
}

.sp-card-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0 0 14px;
  line-height: 1.55;
}

.sp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* ── View All button ──────────────────────────────────────────────────── */
.sp-footer {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 44px;
  border-radius: 100px;
  border: 1.5px solid var(--border-strong);
  text-decoration: none;
  color: var(--text-primary);
  background: transparent;
  font-family: var(--font-satoshi);
  font-weight: 600;
  font-size: 1rem;
  overflow: hidden;
  position: relative;
  will-change: transform;
  transition: border-color 0.35s ease, background 0.35s ease, color 0.35s ease;
}

.view-all-btn:hover {
  background: var(--highlight);
  border-color: var(--highlight);
  color: var(--highlight-text);
}

/* Text-swap container: clips to show exactly one line */
.btn-inner {
  display: block;
  position: relative;
  overflow: hidden;
  height: 1.25em;
}

.btn-label-default,
.btn-label-hover {
  display: block;
  transition: transform 0.46s cubic-bezier(0.76, 0, 0.24, 1);
  white-space: nowrap;
}

/* Second label starts below, hidden by overflow:hidden */
.btn-label-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(120%);
}

/* On hover: first label exits up, second enters from below */
.view-all-btn:hover .btn-label-default {
  transform: translateY(-120%);
}

.view-all-btn:hover .btn-label-hover {
  transform: translateY(0);
}

/* Expertise */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.expertise-card {
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 32px;
  transition: border-color 0.3s, background 0.3s;
}

.expertise-card:hover {
  border-color: var(--highlight);
  background: var(--highlight-glow);
}

.expertise-num {
  font-family: var(--font-clash);
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.expertise-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.expertise-card h3 {
  font-size: 1.3rem;
  margin-bottom: 12px;
}

.expertise-card p {
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Testimonials */
.testimonials-wrapper {
  overflow: hidden;
  margin-top: 48px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.testi-row {
  display: flex;
  gap: 16px;
  width: max-content;
}

.testi-row--ltr {
  animation: marquee-scroll 40s linear infinite;
}

.testi-row--rtl {
  animation: marquee-scroll 40s linear infinite reverse;
}

.testi-row:hover {
  animation-play-state: paused;
}

.testi-card {
  flex-shrink: 0;
  width: 320px;
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  transition: border-color 0.3s;
}

.testi-card:hover {
  border-color: var(--highlight);
}

.testi-text {
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testi-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-600);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--highlight);
  flex-shrink: 0;
}

.testi-author strong {
  display: block;
  font-size: 0.85rem;
  color: var(--text-primary);
}

.testi-author span {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .home-hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }

  .hero-stat-card--1 {
    right: -8px;
  }

  .hero-stat-card--2 {
    display: none;
  }

  .sp-grid {
    column-gap: 28px;
    row-gap: 32px;
  }

  .sp-card--stagger {
    margin-top: 40px;
  }
}

@media (max-width: 640px) {
  .sp-grid {
    grid-template-columns: 1fr;
    row-gap: 44px;
  }

  .sp-card--stagger {
    margin-top: 0;
  }

  .sp-card-title {
    font-size: 1.2rem;
  }

  .view-all-btn {
    padding: 12px 32px;
    font-size: 0.92rem;
  }

  .sp-footer {
    margin-top: 44px;
  }
}
</style>

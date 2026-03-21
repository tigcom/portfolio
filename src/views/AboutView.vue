<template>
  <main class="about-view">

    <!-- HERO -->
    <section class="about-hero section">
      <div class="container">
        <div class="ab-hero-inner">
          <!-- Image Column -->
          <div class="ab-hero-img-col" ref="imgColEl">
            <div class="ab-hero-img-wrapper">
              <img :src="myImage" alt="Phuc Khang" class="ab-hero-img">
              <!-- Rotating CTA -->
              <div class="about-cta-wrap">
                <a :href="myResume" download="Phuc_Khang_CV.pdf" class="about-cta-circle">
                  <svg viewBox="0 0 200 200" class="about-cta-svg">
                    <path id="aboutCurvePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none" />
                    <text>
                      <textPath href="#aboutCurvePath">VIEW RESUME • DOWNLOAD CV • CONTACT ME •&nbsp;</textPath>
                    </text>
                  </svg>
                  <div class="cta-arrow">
                    <i class="fas fa-arrow-up icon-arrow"></i>
                    <i class="fa-solid fa-fan icon-fan"></i>
                  </div>
                </a>
              </div>
              <!-- Experience badge -->
              <div class="ab-exp-badge">
                <span class="ab-exp-num">2+</span>
                <span class="ab-exp-text">{{ t('about.yearExpShort') }}</span>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="ab-hero-content" ref="contentEl">
            <div class="section-label" ref="labelEl">
              <StarIcon /><span class="shimmer">{{ t('about.aboutMe') }}</span>
            </div>
            <h1 ref="titleEl">{{ t('about.im') }} <span class="hero-highlight">Phúc Khang</span>, {{
              t('about.creativeDev') }}.</h1>
            <p ref="descEl">{{ t('about.bio') }}</p>
            <div class="ab-stats" ref="statsEl">
              <div v-for="stat in stats" :key="stat.label" class="ab-stat">
                <span class="ab-stat-num">{{ stat.value }}</span>
                <span class="ab-stat-label">{{ t(stat.label) }}</span>
              </div>
            </div>
            <div class="ab-hero-btns" ref="btnsEl">
              <router-link to="/contact" class="btn btn-outline">{{ t('nav.contact') }}</router-link>
              <div class="social-links">
                <a href="https://github.com/tigcom" class="social-link" aria-label="GitHub" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/phuc-khang-5744b62a4/" class="social-link" aria-label="LinkedIn"
                  target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-section">
      <div class="marquee-fade-left"></div>
      <div class="marquee-fade-right"></div>
      <div class="marquee-track">
        <span v-for="(b, i) in [...techBadges, ...techBadges]" :key="i" class="tech-badge">
          <span class="tech-badge-icon"><i :class="b.icon"></i></span> {{ b.name }}
        </span>
      </div>
    </div>

    <!-- EXPERIENCE ACCORDION -->
    <section class="section experience-section">
      <div class="container">
        <div class="section-label" v-reveal>
          <StarIcon /><span class="shimmer">{{ t('about.experience') }}</span>
        </div>
        <h2 class="section-heading" v-reveal>{{ t('about.workHistory') }}</h2>
        <div class="accordion-list">
          <div v-for="(job, i) in experience" :key="i" class="accordion-item" :class="{ open: openAccordion === i }"
            v-reveal>
            <button class="accordion-header" @click="toggleAccordion(i, $event)">
              <div class="acc-left">
                <span class="acc-num">{{ job.num }}</span>
                <div>
                  <h3>{{ job.company }}</h3>
                  <p>{{ job.role[state.lang] }}</p>
                </div>
              </div>
              <div class="acc-right">
                <span class="acc-period">{{ job.period }}</span>
                <i class="fas fa-chevron-down acc-chevron"></i>
              </div>
            </button>
            <div class="accordion-body" :ref="el => accBodies[i] = el">
              <p>{{ job.desc[state.lang] }}</p>
              <div class="acc-tags"><span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWARDS -->
    <section class="section awards-section">
      <div class="container">
        <div class="section-label" v-reveal>
          <StarIcon /><span class="shimmer">{{ t('about.education') }}</span>
        </div>
        <h2 class="section-heading" v-reveal>{{ t('about.education') }}</h2>
        <div class="awards-list">
          <div v-for="(award, i) in awards" :key="i" class="award-item" v-reveal>
            <div class="award-left">
              <span class="award-num">{{ award.num }}</span>
              <div>
                <h4>{{ award.title[state.lang] }}</h4>
                <p>{{ award.org[state.lang] }}</p>
                <!-- Link cho giải thưởng số 02 -->

              </div>
              <a v-if="award.num === '02'"
                href="https://caodang.fpt.edu.vn/tin-tuc-poly/sinh-vien-fpt-polytechnic-tp-hcm-xay-dung-thanh-cong-website-bang-javascript-du-moi-hoc-nam-nhat.html"
                target="_blank" class="award-feature-link">
                {{ t('about.readArticle') || 'Read Article' }}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor"
                  stroke-width="2" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
            <span class="award-year">{{ award.year }}</span>
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
import myImage from '../assets/khang.png'
import myResume from '../assets/CV_EN-1 (2).pdf'
import { useLang } from '../data/translations.js'

const { state, t } = useLang()
gsap.registerPlugin(ScrollTrigger)

const StarIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>` }

const vReveal = {
  mounted(el) {
    gsap.set(el, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    })
  }
}

const techBadges = [
  { icon: 'fab fa-java', name: 'Java' }, { icon: 'fas fa-leaf', name: 'Spring Boot' },
  { icon: 'fas fa-database', name: 'Hibernate/JPA' }, { icon: 'fas fa-microchip', name: 'Microservices' },
  { icon: 'fas fa-stream', name: 'Kafka' }, { icon: 'fas fa-sync', name: 'gRPC/Dubbo' },
  { icon: 'fab fa-vuejs', name: 'Vue 3' }, { icon: 'fab fa-angular', name: 'Angular' },
  { icon: 'fab fa-docker', name: 'Docker' }, { icon: 'fas fa-server', name: 'MySQL/SQL' },
  { icon: 'fas fa-bolt', name: 'Redis' }, { icon: 'fas fa-key', name: 'OAuth2/JWT' },
]

const stats = [
  { value: '3.8/4', label: 'about.gpaAchievement' },
  { value: '3', label: 'about.excellentSems' },
  { value: '5+', label: 'about.coreServices' },
  { value: '2+', label: 'about.yearExpShort' },
]

const experience = [
  {
    num: '01', company: 'Kien Long Bank',
    role: { en: 'Java Developer Collaborator', vi: 'Cộng tác viên Phát triển Java' },
    period: '03/2025 — Present',
    desc: {
      en: 'Participated in building an Internet Banking system based on Microservices architecture. Responsible for the Loan Service (Loan application, approval, disbursement, monthly installment calculation) and Notification Service.',
      vi: 'Tham gia xây dựng hệ thống Internet Banking dựa trên kiến trúc Microservices. Chịu trách nhiệm chính trong phân hệ Loan Service (Xử lý đơn vay, giải ngân, tính toán kỳ hạn) và Notification Service.'
    },
    tags: ['Spring Boot 3.x', 'Microservices', 'Kafka', 'Temporal', 'Resilience4j']
  },
  {
    num: '02', company: 'Graduation Project (DATN)',
    role: { en: 'Full-Stack Developer', vi: 'Nhà phát triển Full-Stack' },
    period: '05/2025 — 09/2025',
    desc: {
      en: 'Built an airline and tour booking platform (Traveloka Clone). Designed the booking flow, real-time seat holding, and integrated a simulated payment gateway.',
      vi: 'Xây dựng nền tảng đặt vé máy bay và tour du lịch (Traveloka Clone). Thiết kế luồng đặt vé, giữ chỗ thời gian thực và tích hợp cổng thanh toán mô phỏng.'
    },
    tags: ['Spring Boot', 'Vue.js', 'Redis', 'Socket.io', 'Docker']
  },
  {
    num: '03', company: 'Personal Projects',
    role: { en: 'Java Backend Developer', vi: 'Nhà phát triển Backend Java' },
    period: '2024 — 2025',
    desc: {
      en: 'Developed clone projects like Phong Vu Shop (Java 5) and Youtube (Java 4), focusing on MVC architecture, security, and data processing.',
      vi: 'Phát triển các dự án mô phỏng như Phong Vu Shop Clone (Java 5) và Youtube Clone (Java 4), tập trung vào kiến trúc MVC, bảo mật và xử lý dữ liệu.'
    },
    tags: ['Java Servlet', 'JSP', 'Thymeleaf', 'SQL Server']
  },
]

const awards = [
  {
    num: '01',
    title: { en: 'Software Development Major', vi: 'Chuyên ngành Phát triển Phần mềm' },
    org: { en: 'FPT Polytechnic HCMC', vi: 'FPT Polytechnic TP.HCM' },
    year: '2023 — 2025'
  },
  {
    num: '02',
    title: { en: 'Featured on School Newspaper', vi: 'Hạng mục sản phẩm SV' },
    org: { en: 'FPT Education Media', vi: 'Truyền thông hệ giáo dục FPT' },
    year: '2024'
  },
  {
    num: '03',
    title: { en: 'Excellent Student Award', vi: 'Sinh viên Xuất sắc' },
    org: { en: '3 Semesters Achievement', vi: 'Thành tích 3 học kỳ liên tiếp' },
    year: '2024'
  },
  {
    num: '04',
    title: { en: 'GPA 9.0/10', vi: 'Điểm trung bình 9.0/10' },
    org: { en: 'Academic Excellence', vi: 'Học lực Xuất sắc' },
    year: '2025'
  },
]

// Accordion
const openAccordion = ref(0)
const accBodies = ref([])

function toggleAccordion(i, e) {
  const body = accBodies.value[i]
  if (!body) return

  if (openAccordion.value === i) {
    openAccordion.value = null
    gsap.to(body, { maxHeight: 0, duration: 0.4, ease: 'power2.inOut' })
    gsap.to(e.currentTarget.querySelector('.acc-chevron'), { rotation: 0, duration: 0.3 })
  } else {
    if (openAccordion.value !== null && accBodies.value[openAccordion.value]) {
      gsap.to(accBodies.value[openAccordion.value], { maxHeight: 0, duration: 0.35 })
      const prevBtn = document.querySelectorAll('.accordion-header')[openAccordion.value]
      if (prevBtn) gsap.to(prevBtn.querySelector('.acc-chevron'), { rotation: 0, duration: 0.3 })
    }
    openAccordion.value = i
    gsap.to(body, { maxHeight: body.scrollHeight + 60, duration: 0.5, ease: 'power3.out' })
    gsap.to(e.currentTarget.querySelector('.acc-chevron'), { rotation: 180, duration: 0.4 })
  }
}

// Refs
const imgColEl = ref(null), contentEl = ref(null), labelEl = ref(null)
const titleEl = ref(null), descEl = ref(null), statsEl = ref(null), btnsEl = ref(null)

onMounted(() => {
  // Init first accordion open
  if (accBodies.value[0]) {
    accBodies.value.forEach((b, i) => {
      if (b) b.style.maxHeight = i === 0 ? b.scrollHeight + 'px' : '0px'
    })
    const firstBtn = document.querySelector('.accordion-header .acc-chevron')
    if (firstBtn) gsap.set(firstBtn, { rotation: 180 })
  }

  // Hero entrance
  const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } })
  tl.fromTo(imgColEl.value, { opacity: 0, x: -60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1 }, 0)
  tl.fromTo(labelEl.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 }, 0.3)
  tl.fromTo(titleEl.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
  tl.fromTo(descEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.65)
  tl.fromTo(statsEl.value.querySelectorAll('.ab-stat'),
    { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0.85
  )
  tl.fromTo(btnsEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 1.05)

  // Rotating CTA
  gsap.to('.about-cta-svg', { rotation: 360, duration: 15, repeat: -1, ease: 'linear', transformOrigin: 'center' })
})
</script>

<style scoped>
.about-hero {
  padding-top: 100px !important;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.ab-hero-inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
}

.ab-hero-img-wrapper {
  position: relative;
}

.ab-hero-img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 28px;
}

.about-cta-wrap {
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 120px;
  height: 120px;
}

.about-cta-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: px solid var(--border);
  background: var(--bg-800);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  text-decoration: none;
}

.about-cta-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  padding: 10px;
}

.about-cta-svg text {
  font-size: 22px;
  fill: var(--text-secondary);
  font-family: var(--font-satoshi);
  letter-spacing: 2px;
}

.cta-arrow {
  font-size: 1.2rem;
  color: var(--text-primary);
  z-index: 1;
  transform: rotate(180deg);
  transition: all 0.s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--border);
  width: 80px;
  height: 80px;
}

.icon-fan {
  display: none;
}

.about-cta-circle:hover .icon-arrow {
  display: none;
}

.about-cta-circle:hover .icon-fan {
  display: block;
}

.about-cta-circle:hover .cta-arrow {
  animation: spin 0.25s linear infinite;
  filter: blur(0.2px);
  border: 0px;
  color: var(--highlight);
}

@keyframes spin {
  from {
    transform: rotate(360deg) scale(3);
  }

  to {
    transform: rotate(-0deg)scale(2.5);
  }
}

.ab-exp-badge {
  position: absolute;
  top: 24px;
  left: -20px;
  background: var(--highlight);
  color: var(--bg-900);
  border-radius: 16px;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 24px rgba(181, 255, 109, 0.3);
}

.ab-exp-num {
  font-family: var(--font-clash);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.ab-exp-text {
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  margin-top: 4px;
}

.ab-hero-content h1 {
  font-size: clamp(2.5rem, 4.5vw, 4rem);
  margin: 16px 0 20px;
}

.ab-hero-content p {
  max-width: none;
  margin-bottom: 36px;
}

.ab-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 36px;
}

.ab-stat {
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
}

.ab-stat-num {
  display: block;
  font-family: var(--font-clash);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--highlight);
}

.ab-stat-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.ab-hero-btns {
  display: flex;
  align-items: center;
  gap: 20px;
}

.accordion-list {
  display: flex;
  flex-direction: column;
}

.accordion-item {
  border-top: 1px solid var(--border);
}

.accordion-item:last-child {
  border-bottom: 1px solid var(--border);
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-satoshi);
  transition: color 0.3s;
}

.accordion-header:hover,
.accordion-item.open .accordion-header {
  color: var(--highlight);
}

.acc-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.acc-num {
  font-family: var(--font-clash);
  font-size: 0.8rem;
  color: var(--text-secondary);
  width: 28px;
}

.acc-left h3 {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
}

.acc-left p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: left;
}

.acc-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.acc-period {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.acc-chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.accordion-item.open .acc-chevron {
  color: var(--highlight);
}

.accordion-body {
  overflow: hidden;
  max-height: 0;
}

.accordion-body p {
  padding: 0 0 8px 48px;
  font-size: 0.9rem;
  line-height: 1.8;
}

.acc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 0 28px 48px;
}

.awards-list {
  display: flex;
  flex-direction: column;
}

.award-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  transition: padding-left 0.3s;
}

.award-item:first-child {
  border-top: 1px solid var(--border);
}

.award-item:hover {
  padding-left: 8px;
}

.award-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.award-num {
  font-family: var(--font-clash);
  font-size: 0.8rem;
  color: var(--text-secondary);
  width: 28px;
}

.award-left h4 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.award-left p {
  font-size: 0.85rem;
}

.award-feature-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--highlight);
  margin-top: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 4px 10px;
  background: var(--highlight-glow);
  border-radius: 6px;
  border: 1px solid transparent;
}

.award-feature-link:hover {
  border-color: var(--highlight);
  transform: translateX(4px);
}

.award-feature-link svg {
  transition: transform 0.3s ease;
}

.award-feature-link:hover svg {
  transform: translate(2px, -2px);
}

.award-year {
  font-size: 0.85rem;
  color: var(--text-secondary);
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .ab-hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .ab-stats {
    grid-template-columns: 1fr 1fr;
  }

  .ab-exp-badge {
    left: 8px;
  }
}

@media (max-width: 480px) {
  .ab-stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

<template>
  <main class="about-view">

    <!-- HERO -->
    <section class="about-hero section">
      <div class="container">
        <div class="ab-hero-inner">
          <!-- Image Column -->
          <div class="ab-hero-img-col" ref="imgColEl">
            <div class="ab-hero-img-wrapper">
              <img :src="myImage" alt="Minh Dev" class="ab-hero-img">
              <!-- Rotating CTA -->
              <div class="about-cta-wrap">
                <a href="#" class="about-cta-circle">
                  <svg viewBox="0 0 200 200" class="about-cta-svg">
                    <path id="aboutCurvePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none"/>
                    <text>
                      <textPath href="#aboutCurvePath">VIEW RESUME • DOWNLOAD CV • CONTACT ME •&nbsp;</textPath>
                    </text>
                  </svg>
                  <div class="cta-arrow">↗</div>
                </a>
              </div>
              <!-- Experience badge -->
              <div class="ab-exp-badge">
                <span class="ab-exp-num">5+</span>
                <span class="ab-exp-text">Years of Experience</span>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="ab-hero-content" ref="contentEl">
            <div class="section-label" ref="labelEl"><StarIcon /><span class="shimmer">About Me</span></div>
            <h1 ref="titleEl">Mình là <span class="hero-highlight">Phúc Khang</span>, Full-Stack Developer.</h1>
            <p ref="descEl">Với tư duy lập trình hệ thống và kinh nghiệm thực chiến về Microservices, mình tập trung vào việc xây dựng các ứng dụng web hiệu năng cao, bảo mật và dễ mở rộng. Hiện tại, mình đang đóng góp vào các dự án tài chính tại ngân hàng Kiên Long và không ngừng nâng cao kỹ năng Full-Stack của bản thân.</p>
            <div class="ab-stats" ref="statsEl">
              <div v-for="stat in stats" :key="stat.label" class="ab-stat">
                <span class="ab-stat-num">{{ stat.value }}</span>
                <span class="ab-stat-label">{{ stat.label }}</span>
              </div>
            </div>
            <div class="ab-hero-btns" ref="btnsEl">
              <router-link to="/contact" class="btn btn-outline">Let's Talk</router-link>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://github.com/thanhlam2802" class="social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
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
          <span class="tech-badge-icon">{{ b.icon }}</span> {{ b.name }}
        </span>
      </div>
    </div>

    <!-- EXPERIENCE ACCORDION -->
    <section class="section experience-section">
      <div class="container">
        <div class="section-label" v-reveal><StarIcon /><span class="shimmer">Experience</span></div>
        <h2 class="section-heading" v-reveal>Work History</h2>
        <div class="accordion-list">
          <div v-for="(job, i) in experience" :key="i" class="accordion-item" :class="{ open: openAccordion === i }" v-reveal>
            <button class="accordion-header" @click="toggleAccordion(i, $event)">
              <div class="acc-left">
                <span class="acc-num">{{ job.num }}</span>
                <div><h3>{{ job.company }}</h3><p>{{ job.role }}</p></div>
              </div>
              <div class="acc-right">
                <span class="acc-period">{{ job.period }}</span>
                <svg class="acc-chevron" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </button>
            <div class="accordion-body" :ref="el => accBodies[i] = el">
              <p>{{ job.desc }}</p>
              <div class="acc-tags"><span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESIGN PROCESS (Horizontal Scroll) -->
    <section class="section process-section">
      <div class="container">
        <div class="section-label" v-reveal><StarIcon /><span class="shimmer">My Process</span></div>
        <h2 class="section-heading" v-reveal>How I Work</h2>
      </div>
      <div class="process-scroll-wrapper" ref="processWrapperEl">
        <div class="process-cards-track" ref="processTrackEl">
          <div v-for="step in processSteps" :key="step.num" class="process-card">
            <div class="process-card-num">{{ step.num }}</div>
            <div class="process-card-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AWARDS -->
    <section class="section awards-section">
      <div class="container">
        <div class="section-label" v-reveal><StarIcon /><span class="shimmer">Recognition</span></div>
        <h2 class="section-heading" v-reveal>Awards &amp; Recognition</h2>
        <div class="awards-list">
          <div v-for="(award, i) in awards" :key="i" class="award-item" v-reveal>
            <div class="award-left">
              <span class="award-num">{{ award.num }}</span>
              <div><h4>{{ award.title }}</h4><p>{{ award.org }}</p></div>
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
  { icon: '☕', name: 'Java' }, { icon: '🍃', name: 'Spring Boot' },
  { icon: '🐘', name: 'Hibernate/JPA' }, { icon: '⚙️', name: 'Microservices' },
  { icon: '📡', name: 'Kafka' }, { icon: '🔄', name: 'gRPC/Dubbo' },
  { icon: '🟢', name: 'Vue 3' }, { icon: '🅰️', name: 'Angular' },
  { icon: '🐳', name: 'Docker' }, { icon: '🗄️', name: 'MySQL/SQL Server' },
  { icon: '⚡', name: 'Redis' }, { icon: '🔒', name: 'OAuth2/JWT' },
]

const stats = [
  { value: '9/10', label: 'GPA Achievement' },
  { value: '3', label: 'Excellent Semesters' },
  { value: '5+', label: 'Core Services Built' },
  { value: '1', label: 'Year Experience' },
]

const experience = [
  {
    num: '01', company: 'OneShield Software', role: 'Software Engineer',
    period: '2022 — Present',
    desc: 'Building scalable insurance platform frontend applications using Angular, TypeScript, and modern design systems. Collaborating with cross-functional teams on enterprise-grade solutions.',
    tags: ['Angular', 'TypeScript', 'CSS3', 'Agile']
  },
  {
    num: '02', company: 'Ignite Solutions', role: 'UI/UX Developer',
    period: '2021 — 2022',
    desc: 'Designed and developed high-impact web applications for enterprise clients, focusing on responsive design and intuitive user experiences with measurable business outcomes.',
    tags: ['React', 'Figma', 'Node.js', 'REST APIs']
  },
  {
    num: '03', company: 'GirlScript Foundation', role: 'Frontend Developer',
    period: '2020 — 2021',
    desc: 'Contributed to the open-source GirlScript website and designed UI components for the community platform, gaining experience in collaborative development.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Open Source']
  },
  {
    num: '04', company: 'Freelance', role: 'Creative Developer',
    period: '2019 — Present',
    desc: 'Working with global brands and startups to create stunning websites, mobile apps, and digital experiences. Specializing in GSAP animations and interactive designs.',
    tags: ['Vue', 'Next.js', 'GSAP', 'Webflow']
  },
]

const processSteps = [
  { num: '01', icon: '🔍', title: 'Discovery', desc: 'Deep dive into the project goals, user needs, and business requirements to set the right foundation.' },
  { num: '02', icon: '🎨', title: 'Design', desc: 'Craft pixel-perfect wireframes and prototypes in Figma, validating with real users before development.' },
  { num: '03', icon: '⚙️', title: 'Develop', desc: 'Write clean, maintainable code with performance and accessibility baked in from the start.' },
  { num: '04', icon: '🧪', title: 'Test', desc: 'Rigorous QA across devices and browsers to ensure a flawless experience everywhere.' },
  { num: '05', icon: '🚀', title: 'Launch', desc: 'Deploy with CI/CD pipelines, monitor analytics, and iterate based on real user feedback.' },
]

const awards = [
  { num: '01', title: 'Best UI/UX Design Award', org: 'Product Hunt Makers', year: '2024' },
  { num: '02', title: 'Top Contributor Recognition', org: 'GirlScript Foundation', year: '2023' },
  { num: '03', title: 'Open Source Hero', org: 'GitHub Community', year: '2022' },
  { num: '04', title: 'Best Landing Page', org: 'CSS Design Awards', year: '2022' },
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
const processWrapperEl = ref(null), processTrackEl = ref(null)

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

  // Horizontal process scroll (desktop)
  const isDesktop = window.innerWidth >= 1024
  if (isDesktop && processWrapperEl.value && processTrackEl.value) {
    const trackWidth = processTrackEl.value.scrollWidth
    const wrapperWidth = processWrapperEl.value.offsetWidth
    gsap.to(processTrackEl.value, {
      x: -(trackWidth - wrapperWidth + 80),
      ease: 'none',
      scrollTrigger: {
        trigger: processWrapperEl.value,
        start: 'top top',
        end: `+=${trackWidth}`,
        scrub: 1, pin: true
      }
    })
  }
})
</script>

<style scoped>
/* Hero */
.about-hero { padding-top: 100px !important; min-height: 100vh; display: flex; align-items: center; }
.ab-hero-inner { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: center; width: 100%; }

/* Image col */
.ab-hero-img-wrapper { position: relative; }
.ab-hero-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; border-radius: 28px; }

.about-cta-wrap {
  position: absolute; bottom: -24px; right: -24px;
  width: 120px; height: 120px;
}
.about-cta-circle {
  width: 120px; height: 120px; border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-800);
  display: flex; align-items: center; justify-content: center;
  position: relative; cursor: pointer;
  text-decoration: none;
}
.about-cta-svg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
}
.about-cta-svg text {
  font-size: 22px;
  fill: var(--text-secondary);
  font-family: var(--font-satoshi);
  letter-spacing: 2px;
}
.cta-arrow {
  font-size: 1.2rem; color: var(--text-primary); z-index: 1;
}
.ab-exp-badge {
  position: absolute; top: 24px; left: -20px;
  background: var(--highlight); color: var(--bg-900);
  border-radius: 16px; padding: 12px 18px;
  display: flex; flex-direction: column; align-items: center;
  box-shadow: 0 8px 24px rgba(181,255,109,0.3);
}
.ab-exp-num { font-family: var(--font-clash); font-size: 2rem; font-weight: 700; line-height: 1; }
.ab-exp-text { font-size: 0.7rem; font-weight: 600; text-align: center; margin-top: 4px; }

/* Content */
.ab-hero-content h1 { font-size: clamp(2.5rem, 4.5vw, 4rem); margin: 16px 0 20px; }
.ab-hero-content p { max-width: none; margin-bottom: 36px; }
.ab-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 36px; }
.ab-stat { text-align: center; border: 1px solid var(--border); border-radius: 16px; padding: 16px; }
.ab-stat-num { display: block; font-family: var(--font-clash); font-size: 1.8rem; font-weight: 600; color: var(--highlight); }
.ab-stat-label { font-size: 0.75rem; color: var(--text-secondary); }
.ab-hero-btns { display: flex; align-items: center; gap: 20px; }

/* Accordion */
.accordion-list { display: flex; flex-direction: column; }
.accordion-item { border-top: 1px solid var(--border); }
.accordion-item:last-child { border-bottom: 1px solid var(--border); }

.accordion-header {
  width: 100%; display: flex; justify-content: space-between;
  align-items: center; padding: 28px 0;
  background: transparent; border: none; cursor: pointer;
  font-family: var(--font-satoshi); transition: color 0.3s;
}
.accordion-header:hover, .accordion-item.open .accordion-header { color: var(--highlight); }
.acc-left { display: flex; align-items: center; gap: 20px; }
.acc-num { font-family: var(--font-clash); font-size: 0.8rem; color: var(--text-secondary); width: 28px; }
.acc-left h3 { font-size: 1.2rem; font-weight: 500; text-align: left; }
.acc-left p { font-size: 0.85rem; color: var(--text-secondary); text-align: left; }
.acc-right { display: flex; align-items: center; gap: 16px; }
.acc-period { font-size: 0.85rem; color: var(--text-secondary); }
.acc-chevron { flex-shrink: 0; color: var(--text-secondary); transition: color 0.3s; }
.accordion-item.open .acc-chevron { color: var(--highlight); }

.accordion-body { overflow: hidden; max-height: 0; }
.accordion-body p { padding: 0 0 8px 48px; font-size: 0.9rem; line-height: 1.8; }
.acc-tags { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px 0 28px 48px; }

/* Process scroll */
.process-scroll-wrapper { overflow: hidden; padding: 24px 0; margin-top: 32px; }
.process-cards-track {
  display: flex; gap: 24px;
  padding: 0 var(--container-px);
  width: max-content;
}
.process-card {
  width: 300px; flex-shrink: 0;
  border: 1px solid var(--border);
  border-radius: 24px; padding: 32px;
  background: var(--bg-800);
  transition: border-color 0.3s;
}
.process-card:hover { border-color: var(--highlight); }
.process-card-num { font-family: var(--font-clash); font-size: 0.75rem; color: var(--highlight); margin-bottom: 16px; }
.process-card-icon { font-size: 2rem; margin-bottom: 16px; }
.process-card h3 { font-size: 1.2rem; margin-bottom: 12px; }
.process-card p { font-size: 0.875rem; line-height: 1.7; }

/* Awards */
.awards-list { display: flex; flex-direction: column; }
.award-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 28px 0; border-bottom: 1px solid var(--border);
  transition: padding-left 0.3s;
}
.award-item:first-child { border-top: 1px solid var(--border); }
.award-item:hover { padding-left: 8px; }
.award-left { display: flex; align-items: center; gap: 20px; }
.award-num { font-family: var(--font-clash); font-size: 0.8rem; color: var(--text-secondary); width: 28px; }
.award-left h4 { font-size: 1.1rem; font-weight: 500; margin-bottom: 4px; }
.award-left p { font-size: 0.85rem; }
.award-year { font-size: 0.85rem; color: var(--text-secondary); flex-shrink: 0; }

@media (max-width: 968px) {
  .ab-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .ab-stats { grid-template-columns: 1fr 1fr; }
  .ab-exp-badge { left: 8px; }
}
@media (max-width: 480px) {
  .ab-stats { grid-template-columns: 1fr 1fr; }
}
</style>

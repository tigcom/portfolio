<template>
  <main class="project-detail-view" v-if="project">

    <!-- Back -->
    <div class="container pd-back">
      <router-link to="/projects" class="pd-back-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        Back to Projects
      </router-link>
    </div>

    <!-- Hero -->
    <section class="pd-hero">
      <div class="container">
        <div class="pd-hero-inner">
          <div class="pd-hero-info" ref="infoEl">
            <div class="section-label" ref="labelEl"><StarIcon /><span class="shimmer">Case Study</span></div>
            <h1 ref="titleEl">{{ project.title }}</h1>
            <p ref="descEl">{{ project.subtitle }}</p>
            <div class="pd-meta-row" ref="metaEl">
              <div class="pd-meta-item"><span class="pd-meta-label">Year</span><span class="pd-meta-value">{{ project.year }}</span></div>
              <div class="pd-meta-item"><span class="pd-meta-label">Category</span><span class="pd-meta-value">{{ project.category }}</span></div>
              <div class="pd-meta-item"><span class="pd-meta-label">Role</span><span class="pd-meta-value">{{ project.role }}</span></div>
            </div>
            <div class="pd-links" ref="linksEl">
              <a v-if="project.githubLink" :href="project.githubLink" class="btn btn-outline" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
              <a v-if="project.liveLink" :href="project.liveLink" class="btn btn-ghost" target="_blank">Live Demo →</a>
            </div>
          </div>

          <div class="pd-hero-visual" ref="visualEl">
            <div class="pd-hero-img-wrapper">
              <img :src="project.heroImg" :alt="project.title" class="pd-hero-img">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech strip -->
    <div class="pd-tech-strip">
      <div class="container">
        <div class="pd-tech-list">
          <span v-for="tech in project.techStack" :key="tech" class="pd-tech-badge">{{ tech }}</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="pd-content">
      <div class="container">

        <!-- UI Mockup Integration -->
        <div v-if="['clean-hub', 'banking-system', 'traveloka-clone'].includes(project.slug)" class="pd-mockup-section" ref="fullImgEl">
            <h2 class="section-subtitle">
                {{ project.slug === 'clean-hub' ? 'Giao diện quản trị hệ thống' : project.slug === 'banking-system' ? 'Giao diện Internet Banking' : 'Giao diện Booking Super App' }}
            </h2>
            <CleanHubMockup v-if="project.slug === 'clean-hub'" />
            <BankingMockup v-if="project.slug === 'banking-system'" />
            <TravelokaMockup v-if="project.slug === 'traveloka-clone'" />
        </div>

        <!-- Full image (For other projects) -->
        <div v-else class="pd-full-img-block" ref="fullImgEl">
          <img :src="project.heroImg" :alt="project.title" class="pd-full-img">
        </div>

        <!-- Two col -->
        <div class="pd-two-col" ref="twoColEl">
          <div class="pd-col">
            <h2>Overview</h2>
            <div v-html="project.overview"></div>
          </div>
          <div class="pd-col">
            <h2>Problem Statement</h2>
            <div v-html="project.problem"></div>
          </div>
        </div>

        <!-- Process -->
        <div class="pd-process-block" ref="processEl">
          <h2>My Process</h2>
          <div class="pd-process-steps">
            <div v-for="(step, idx) in project.processSteps" :key="idx" class="pd-process-step">
              <div class="pd-step-num">{{ String(idx + 1).padStart(2, '0') }}</div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <div class="pd-gallery" ref="galleryEl">
          <div class="pd-gallery-grid">
            <div class="pd-gallery-item pd-gallery-item--tall">
              <img :src="project.galleryImgs[0]" alt="Gallery 1">
            </div>
            <div class="pd-gallery-col">
              <div class="pd-gallery-item"><img :src="project.galleryImgs[1]" alt="Gallery 2"></div>
              <div class="pd-gallery-item"><img :src="project.galleryImgs[2]" alt="Gallery 3"></div>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div class="pd-results-block" ref="resultsEl">
          <h2>Key Results</h2>
          <div class="pd-results-grid">
            <div v-for="result in project.results" :key="result.label" class="pd-result-card">
              <div class="pd-result-num" :data-target="result.value" :data-suffix="result.suffix" ref="counterRefs">0{{ result.suffix }}</div>
              <p>{{ result.label }}</p>
            </div>
          </div>
        </div>

        <!-- Prev/Next nav -->
        <div class="pd-nav">
          <router-link :to="`/projects/${project.prevSlug}`" class="pd-nav-item pd-nav-prev">
            <span class="pd-nav-direction">← Previous</span>
            <span class="pd-nav-name">{{ project.prevTitle }}</span>
          </router-link>
          <router-link :to="`/projects/${project.nextSlug}`" class="pd-nav-item pd-nav-next">
            <span class="pd-nav-direction">Next →</span>
            <span class="pd-nav-name">{{ project.nextTitle }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getProjectBySlug } from '../data/projects.js'
import CleanHubMockup from '../components/projectDetail/mockups/CleanHubMockup.vue'
import BankingMockup from '../components/projectDetail/mockups/BankingMockup.vue'
import TravelokaMockup from '../components/projectDetail/mockups/TravelokaMockup.vue'

gsap.registerPlugin(ScrollTrigger)

const StarIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>` }

const route = useRoute()
const project = ref(null)

// Refs
const labelEl = ref(null), titleEl = ref(null), descEl = ref(null)
const metaEl = ref(null), linksEl = ref(null), visualEl = ref(null)
const fullImgEl = ref(null), twoColEl = ref(null), processEl = ref(null)
const galleryEl = ref(null), resultsEl= ref(null)

function loadProject() {
  project.value = getProjectBySlug(route.params.slug)
}

function initAnimations() {
  ScrollTrigger.getAll().forEach(st => st.kill())

  const tl = gsap.timeline({ delay: 0.05, defaults: { ease: 'power3.out' } })
  tl.fromTo(labelEl.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 })
  tl.fromTo(titleEl.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '<0.1')
  tl.fromTo(descEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '<0.2')
  tl.fromTo(metaEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '<0.1')
  tl.fromTo(linksEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '<0.1')
  tl.fromTo(visualEl.value, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1 }, 0.25)

  // Tech badges
  tl.fromTo('.pd-tech-badge', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, 1.0)

  // Scroll animations
  const revealFrom = (el, from) => {
    if (!el) return
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 87%', once: true },
      duration: 0.9, ease: 'power3.out', ...from
    })
  }
  revealFrom(fullImgEl.value, { opacity: 0, y: 50 })
  revealFrom(processEl.value, { opacity: 0, y: 40 })
  revealFrom(galleryEl.value, { opacity: 0, y: 40 })

  // Two col
  if (twoColEl.value) {
    twoColEl.value.querySelectorAll('.pd-col').forEach((col, i) => {
      gsap.from(col, {
        scrollTrigger: { trigger: col, start: 'top 88%', once: true },
        x: i === 0 ? -40 : 40, opacity: 0, duration: 0.9, ease: 'power3.out'
      })
    })
  }

  // Process steps stagger
  gsap.from('.pd-process-step', {
    scrollTrigger: { trigger: '.pd-process-steps', start: 'top 85%', once: true },
    y: 40, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out'
  })

  // Gallery
  gsap.from('.pd-gallery-item', {
    scrollTrigger: { trigger: '.pd-gallery', start: 'top 85%', once: true },
    y: 60, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out'
  })

  // Counters
  document.querySelectorAll('.pd-result-num').forEach(el => {
    const target = parseFloat(el.dataset.target)
    const suffix = el.dataset.suffix || ''
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target, duration: 1.8, ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.val) + suffix }
        })
      }
    })
  })

  // Result cards
  gsap.from('.pd-result-card', {
    scrollTrigger: { trigger: '.pd-results-grid', start: 'top 85%', once: true },
    y: 40, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out'
  })

  // Full image parallax
  if (fullImgEl.value) {
    const parallaxEl = fullImgEl.value.querySelector('.pd-full-img') || fullImgEl.value;
    gsap.to(parallaxEl, {
      yPercent: -10, ease: 'none',
      scrollTrigger: { trigger: fullImgEl.value, start: 'top bottom', end: 'bottom top', scrub: true }
    })
  }
}

onMounted(async () => {
  loadProject()
  await nextTick()
  initAnimations()
})

watch(() => route.params.slug, async () => {
  loadProject()
  await nextTick()
  initAnimations()
})
</script>

<style scoped>
.pd-back { padding-top: 110px; padding-bottom: 32px; }
.pd-back-link {
  display: inline-flex; align-items: center; gap: 8px;
  color: var(--text-secondary); font-size: 0.875rem;
  transition: color 0.3s, gap 0.3s;
}
.pd-back-link:hover { color: var(--text-primary); gap: 12px; }

.pd-hero { padding-bottom: 0; }
.pd-hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center; padding-bottom: 80px;
}
h1 { font-size: clamp(3rem, 6vw, 5.5rem); margin: 16px 0 20px; }
p { font-size: 1rem; line-height: 1.8; max-width: 480px; margin-bottom: 32px; }
.pd-meta-row { display: flex; gap: 40px; margin-bottom: 36px; }
.pd-meta-label {
  display: block; font-size: 0.75rem; color: var(--text-secondary);
  margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;
}
.pd-meta-value { display: block; font-size: 0.95rem; font-weight: 500; }
.pd-links { display: flex; gap: 16px; }

.pd-hero-img-wrapper { border-radius: 24px; overflow: hidden; border: 1px solid var(--border); }
.pd-hero-img { width: 100%; aspect-ratio: 16/10; object-fit: cover; }

.pd-tech-strip { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 24px 0; }
.pd-tech-list { display: flex; gap: 12px; flex-wrap: wrap; }
.pd-tech-badge {
  background: var(--bg-800); border: 1px solid var(--border);
  border-radius: 100px; padding: 8px 16px; font-size: 0.85rem;
  transition: border-color 0.3s, color 0.3s;
}
.pd-tech-badge:hover { border-color: var(--highlight); color: var(--highlight); }

.pd-content { padding: 80px 0; }

.pd-mockup-section { margin-bottom: 80px; }
.section-subtitle { font-size: 1.4rem; margin-bottom: 24px; color: var(--text-secondary); }

.pd-full-img-block { border-radius: 24px; overflow: hidden; margin-bottom: 80px; }
.pd-full-img { width: 100%; aspect-ratio: 16/7; object-fit: cover; }
.pd-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-bottom: 80px; }
.pd-col h2 { font-size: 1.8rem; margin-bottom: 20px; }

.pd-process-block { margin-bottom: 80px; }
.pd-process-block h2 { font-size: 1.8rem; margin-bottom: 48px; }
.pd-process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.pd-process-step { padding-top: 24px; border-top: 1px solid var(--border); }
.pd-step-num { font-family: var(--font-clash); font-size: 0.75rem; color: var(--highlight); margin-bottom: 16px; }
.pd-process-step h4 { font-size: 1rem; margin-bottom: 12px; font-family: var(--font-satoshi); font-weight: 600; }
.pd-process-step p { font-size: 0.875rem; line-height: 1.7; max-width: none; margin-bottom: 0; }

.pd-gallery { margin-bottom: 80px; }
.pd-gallery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; height: 500px; }
.pd-gallery-item { border-radius: 16px; overflow: hidden; }
.pd-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.pd-gallery-item:hover img { transform: scale(1.03); }
.pd-gallery-item--tall { height: 100%; }
.pd-gallery-col { display: flex; flex-direction: column; gap: 16px; }
.pd-gallery-col .pd-gallery-item { flex: 1; }

.pd-results-block { margin-bottom: 80px; }
.pd-results-block h2 { font-size: 1.8rem; margin-bottom: 40px; }
.pd-results-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.pd-result-card {
  border: 1px solid var(--border); border-radius: 20px;
  padding: 32px 24px; text-align: center; transition: border-color 0.3s, background 0.3s;
}
.pd-result-card:hover { border-color: var(--highlight); background: var(--highlight-glow); }
.pd-result-num {
  font-family: var(--font-clash); font-size: 2.5rem; font-weight: 600;
  color: var(--highlight); line-height: 1; margin-bottom: 12px;
}
.pd-result-card p { font-size: 0.85rem; max-width: none; margin-bottom: 0; }

.pd-nav { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; border-top: 1px solid var(--border); padding-top: 48px; }
.pd-nav-item {
  display: flex; flex-direction: column; gap: 8px;
  text-decoration: none; padding: 24px;
  border: 1px solid var(--border); border-radius: 16px; transition: border-color 0.3s, background 0.3s;
}
.pd-nav-item:hover { border-color: var(--highlight); background: var(--highlight-glow); }
.pd-nav-direction { font-size: 0.8rem; color: var(--text-secondary); }
.pd-nav-name {
  font-size: 1.2rem; font-family: var(--font-clash); font-weight: 500; transition: color 0.3s;
}
.pd-nav-item:hover .pd-nav-name { color: var(--highlight); }
.pd-nav-next { text-align: right; }

@media (max-width: 900px) {
  .pd-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .pd-two-col { grid-template-columns: 1fr; }
  .pd-process-steps { grid-template-columns: 1fr 1fr; }
  .pd-results-grid { grid-template-columns: 1fr 1fr; }
  .pd-gallery-grid { height: auto; }
  .pd-gallery-item--tall { height: 300px; }
}
@media (max-width: 640px) {
  .pd-process-steps { grid-template-columns: 1fr; }
  .pd-nav { grid-template-columns: 1fr; }
}
</style>

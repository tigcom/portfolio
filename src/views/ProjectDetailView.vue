<template>
  <main class="project-detail-view" v-if="project">

    <!-- Back -->
    <div class="container pd-back">
      <router-link to="/projects" class="pd-back-link">
        <i class="fas fa-arrow-left"></i>
        <span>{{ t('common.backToProjects') }}</span>
      </router-link>
    </div>

    <!-- Hero -->
    <section class="pd-hero section">
      <div class="container">
        <div class="pd-hero-grid">
          <div class="pd-hero-content">
            <div class="pd-meta" ref="metaEl">
              <span class="pd-num">{{ project.num }}</span>
              <span class="pd-category">{{ project.category }} · {{ project.year }}</span>
            </div>
            <h1 class="pd-title" ref="titleEl">{{ project.title }}</h1>
            <p class="pd-subtitle" ref="subtitleEl">{{ project.subtitle }}</p>
            
            <div class="pd-info-grid" ref="infoEl">
              <div class="pd-info-item">
                <span class="label">{{ t('common.role') }}</span>
                <span class="val">{{ project.role }}</span>
              </div>
              <div class="pd-info-item">
                <span class="label">Tech Stack</span>
                <div class="pd-tech-tags">
                  <span v-for="t in project.techStack" :key="t" class="tag">{{ t }}</span>
                </div>
              </div>
            </div>

            <div class="pd-hero-btns" ref="btnsEl">
              <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="btn btn-outline">
                {{ t('common.github') }}
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div class="pd-hero-img-wrapper" ref="heroImgEl">
            <img :src="project.heroImg" :alt="project.title" class="pd-hero-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="pd-content-section section">
      <div class="container">
        <div class="pd-content-grid">
          <div class="pd-text-block" v-reveal>
            <h2 class="section-subtitle">{{ t('common.overview') }}</h2>
            <p>{{ project.overview }}</p>
          </div>
          <div class="pd-text-block" v-reveal>
            <h2 class="section-subtitle">{{ t('common.problem') }}</h2>
            <p>{{ project.problem }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- UI Mockup Integration -->
    <div class="pd-mockup-section" ref="fullImgEl">
        <div class="container">
            <h2 class="section-subtitle" style="text-align: center; margin-bottom: 40px;">
                {{ t('common.interface') }}
            </h2>
            
            <!-- Banking -->
            <BankingMockup v-if="project.slug === 'internet-banking' || project.slug === 'banking-system'" />
            
            <!-- Traveloka -->
            <TravelokaMockup v-else-if="project.slug === 'traveloka-clone'" />
            
            <!-- E-commerce (Sixdo, Phong Vu) -->
            <DesktopMockup 
                v-else-if="['sixdo-ecommerce', 'phong-vu-clone'].includes(project.slug)"
                :mainImg="project.galleryImgs[0]"
                :secondaryImg1="project.galleryImgs[1]"
                :secondaryImg2="project.galleryImgs[2]"
                :title="project.title"
            />

            <!-- Youtube Clone -->
            <DesktopMockup 
                v-else-if="project.slug === 'youtube-clone'"
                :mainImg="project.galleryImgs[1]"
                :secondaryImg1="project.galleryImgs[0]"
                :secondaryImg2="project.galleryImgs[2]"
                :title="project.title"
            />

            <!-- Motorbike (Window Mockup placeholder - using Desktop for now) -->
            <DesktopMockup 
                v-else-if="project.slug === 'motorbike-sales-system'"
                :mainImg="project.galleryImgs[0]"
                :secondaryImg1="project.galleryImgs[1]"
                :secondaryImg2="project.galleryImgs[3]"
                :title="project.title"
            />
        </div>
    </div>

    <!-- Process -->
    <section class="pd-process-section section">
      <div class="container">
        <h2 class="section-heading" v-reveal>{{ t('common.process') }}</h2>
        <div class="pd-process-steps">
          <div v-for="(step, i) in project.processSteps" :key="i" class="pd-step" v-reveal :data-delay="i * 0.1">
            <span class="step-num">0{{ i + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="pd-results-section section">
      <div class="container">
        <div class="pd-results-grid">
          <div v-for="res in project.results" :key="res.label" class="pd-result-card" v-reveal>
            <div class="pd-result-val">{{ res.value }}{{ res.suffix }}</div>
            <div class="pd-result-label">{{ res.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="pd-nav section">
      <div class="container">
        <div class="pd-nav-inner">
          <router-link :to="`/projects/${project.prevSlug}`" class="pd-nav-btn prev">
            <span class="label"><i class="fas fa-arrow-left"></i> {{ t('common.previous') }}</span>
            <span class="title">{{ project.prevTitle }}</span>
          </router-link>
          <router-link :to="`/projects/${project.nextSlug}`" class="pd-nav-btn next">
            <span class="label">{{ t('common.next') }} <i class="fas fa-arrow-right"></i></span>
            <span class="title">{{ project.nextTitle }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getProjectBySlug } from '../data/projects.js'
import { useLang } from '../data/translations.js'

import BankingMockup from '../components/projectDetail/mockups/BankingMockup.vue'
import TravelokaMockup from '../components/projectDetail/mockups/TravelokaMockup.vue'
import DesktopMockup from '../components/projectDetail/mockups/DesktopMockup.vue'

const { state, t } = useLang()
const route = useRoute()
gsap.registerPlugin(ScrollTrigger)

const project = computed(() => getProjectBySlug(route.params.slug, state.lang))

const vReveal = {
  mounted(el) {
    const delay = parseFloat(el.dataset.delay || 0)
    gsap.set(el, { opacity: 0, y: 30 })
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' })
    })
  }
}

// Refs
const metaEl = ref(null), titleEl = ref(null), subtitleEl = ref(null), infoEl = ref(null), btnsEl = ref(null), heroImgEl = ref(null)

const initAnims = () => {
  const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } })
  tl.fromTo(metaEl.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 }, 0)
  tl.fromTo(titleEl.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.15)
  tl.fromTo(subtitleEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
  tl.fromTo(infoEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.45)
  tl.fromTo(btnsEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.6)
  tl.fromTo(heroImgEl.value, { opacity: 0, scale: 0.95, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, 0.2)
}

onMounted(() => {
  initAnims()
})

// Re-init animation when slug changes
watch(() => route.params.slug, () => {
  setTimeout(initAnims, 100)
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.project-detail-view { padding-top: 100px; }
.pd-back { padding-bottom: 20px; }
.pd-back-link { display: inline-flex; align-items: center; gap: 8px; color: var(--text-secondary); text-decoration: none; font-size: 0.85rem; transition: color 0.3s; }
.pd-back-link:hover { color: var(--highlight); }
.pd-hero { padding-top: 40px !important; }
.pd-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.pd-num { font-family: var(--font-clash); color: var(--highlight); font-size: 0.9rem; margin-right: 12px; }
.pd-category { font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; }
.pd-title { font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; margin: 16px 0 20px; }
.pd-subtitle { font-size: 1.2rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 40px; }
.pd-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 48px; border-top: 1px solid var(--border); padding-top: 32px; }
.pd-info-item .label { display: block; font-size: 0.75rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 8px; letter-spacing: 1px; }
.pd-info-item .val { font-size: 1rem; color: var(--text-primary); }
.pd-tech-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.pd-hero-img-wrapper { border-radius: 32px; overflow: hidden; border: 1px solid var(--border); box-shadow: var(--shadow-lg); }
.pd-hero-img { width: 100%; display: block; }
.pd-content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
.pd-text-block h2 { margin-bottom: 24px; }
.pd-text-block p { line-height: 1.8; color: var(--text-secondary); }
.pd-mockup-section { padding: 80px 0; background: var(--bg-800); margin: 80px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.pd-process-steps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; margin-top: 48px; }
.pd-step { position: relative; padding-left: 40px; }
.step-num { position: absolute; left: 0; top: 0; font-family: var(--font-clash); color: var(--highlight); font-size: 0.8rem; }
.pd-step h3 { font-size: 1.3rem; margin-bottom: 12px; }
.pd-step p { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; }
.pd-results-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.pd-result-card { text-align: center; border: 1px solid var(--border); padding: 32px 20px; border-radius: 24px; background: var(--bg-800); }
.pd-result-val { font-family: var(--font-clash); font-size: 2.5rem; color: var(--highlight); margin-bottom: 8px; }
.pd-result-label { font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; }
.pd-nav { border-top: 1px solid var(--border); padding: 80px 0 !important; }
.pd-nav-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.pd-nav-btn { display: flex; flex-direction: column; text-decoration: none; padding: 40px; border: 1px solid var(--border); border-radius: 24px; transition: all 0.4s; }
.pd-nav-btn:hover { border-color: var(--highlight); background: var(--highlight-glow); }
.pd-nav-btn .label { font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 12px; }
.pd-nav-btn .title { font-size: 1.5rem; font-weight: 500; color: var(--text-primary); }
.pd-nav-btn.next { text-align: right; }
@media (max-width: 1024px) { .pd-hero-grid { grid-template-columns: 1fr; gap: 48px; } .pd-content-grid { grid-template-columns: 1fr; gap: 48px; } .pd-results-grid { grid-template-columns: 1fr 1fr; } .pd-process-steps { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .pd-process-steps { grid-template-columns: 1fr; } .pd-results-grid { grid-template-columns: 1fr; } .pd-nav-inner { grid-template-columns: 1fr; } }
</style>

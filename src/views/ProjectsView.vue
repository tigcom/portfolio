<template>
  <main class="projects-view">

    <!-- Hover image follower -->
    <div
      class="project-hover-img"
      ref="hoverImgEl"
      :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }"
    >
      <img :src="hoverSrc" alt="" ref="hoverImgTag">
    </div>

    <!-- Page hero -->
    <section class="page-hero section">
      <div class="container">
        <div class="section-label" ref="labelEl">
          <StarIcon /><span class="shimmer">My Work</span>
        </div>
        <h1 class="page-hero-title" ref="titleEl">
          <span class="title-word">Creating</span>
          <span class="title-word">next level</span>
          <span class="title-word hero-highlight">digital products</span>
        </h1>
      </div>
    </section>

    <!-- Filter tabs -->
    <div class="container">
      <div class="filter-tabs" ref="filterTabsEl">
        <button
          v-for="tab in filterOptions"
          :key="tab.value"
          class="filter-tab"
          :class="{ active: activeFilter === tab.value }"
          @click="setFilter(tab.value)"
        >{{ tab.label }}</button>
      </div>
    </div>

    <!-- Projects list -->
    <section class="projects-list-section section">
      <div class="container">
        <TransitionGroup name="project-list" tag="div" class="projects-list">
          <a
            v-for="project in filteredProjects"
            :key="project.slug"
            href="#"
            class="project-list-item"
            @click.prevent="navigate(project.slug)"
            @mouseenter="onItemEnter($event, project.img)"
            @mouseleave="onItemLeave"
          >
            <div class="project-list-meta">
              <span class="project-list-num">{{ project.num }}</span>
            </div>
            <div class="project-list-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.subtitle }}</p>
            </div>
            <div class="project-list-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="project-list-year">{{ project.year }}</div>
            <div class="project-list-arrow"><ArrowIcon /></div>
          </a>
        </TransitionGroup>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

// Icon components
const StarIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>` }
const ArrowIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>` }

// Filter
const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Development', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Dev & Design', value: 'both' },
]
const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

function setFilter(val) {
  activeFilter.value = val
}

// Navigate
function navigate(slug) {
  router.push(`/projects/${slug}`)
}

// Hover image follower
const hoverImgEl = ref(null)
const hoverImgTag = ref(null)
const hoverSrc = ref('')
const mouse = ref({ x: 0, y: 0 })
let isHovering = false

document.addEventListener('mousemove', (e) => {
  mouse.value.x = e.clientX
  mouse.value.y = e.clientY
})

function onItemEnter(e, imgSrc) {
  hoverSrc.value = imgSrc
  isHovering = true
  gsap.to(hoverImgEl.value, {
    opacity: 1, scale: 1, rotate: -2, duration: 0.35, ease: 'power3.out'
  })
}

function onItemLeave() {
  isHovering = false
  gsap.to(hoverImgEl.value, {
    opacity: 0, scale: 0.8, duration: 0.25, ease: 'power2.in'
  })
}

// Refs
const labelEl = ref(null)
const titleEl = ref(null)
const filterTabsEl = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.05, defaults: { ease: 'power3.out' } })
  tl.fromTo(labelEl.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 })
  tl.fromTo(titleEl.value.querySelectorAll('.title-word'),
    { yPercent: 110, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.07, duration: 0.9 }, '<0.1'
  )
  tl.fromTo(filterTabsEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '<0.2')
  tl.fromTo('.project-list-item',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: 'power2.out' }, 0.75
  )
})
</script>

<style scoped>
.page-hero { padding-top: 140px !important; }
.page-hero-title {
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 1.0; margin-top: 16px;
}
.title-word { display: block; overflow: hidden; }

/* Filter */
.filter-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 0; }
.filter-tab {
  background: transparent; border: 1px solid var(--border);
  border-radius: 100px; padding: 8px 20px;
  color: var(--text-secondary); font-size: 0.85rem; font-weight: 500;
  cursor: pointer; font-family: var(--font-satoshi); transition: all 0.3s;
}
.filter-tab:hover { border-color: var(--text-secondary); color: var(--text-primary); }
.filter-tab.active {
  background: var(--text-primary); border-color: var(--text-primary); color: var(--bg-900);
}

/* Hover image */
.project-hover-img {
  position: fixed;
  width: 280px; height: 180px;
  border-radius: 16px; overflow: hidden;
  pointer-events: none; z-index: 200;
  opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(-3deg);
}
.project-hover-img img { width: 100%; height: 100%; object-fit: cover; }

/* Project list */
.projects-list-section { padding-top: 32px !important; }
.projects-list { width: 100%; }
.project-list-item {
  display: flex; align-items: center; gap: 24px;
  padding: 28px 0; border-bottom: 1px solid var(--border);
  text-decoration: none; position: relative;
  transition: padding-left 0.4s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
}
.project-list-item::before {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 1px; background: var(--highlight);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); z-index: 1;
}
.project-list-item:hover::before { transform: scaleX(1); }
.project-list-item:hover { padding-left: 12px; background: rgba(181,255,109,0.02); }
.project-list-meta { flex-shrink: 0; width: 40px; }
.project-list-num { font-family: var(--font-clash); font-size: 0.8rem; color: var(--text-secondary); }
.project-list-info { flex: 1; }
.project-list-info h3 {
  font-size: 1.6rem; font-weight: 500; margin-bottom: 4px; transition: color 0.3s;
}
.project-list-item:hover .project-list-info h3 { color: var(--highlight); }
.project-list-info p { font-size: 0.85rem; }
.project-list-tags { display: flex; gap: 8px; flex-wrap: wrap; flex-shrink: 0; }
.project-list-year { font-size: 0.85rem; color: var(--text-secondary); width: 48px; text-align: right; flex-shrink: 0; }
.project-list-arrow { color: var(--text-secondary); flex-shrink: 0; transition: transform 0.3s, color 0.3s; }
.project-list-item:hover .project-list-arrow { transform: rotate(45deg); color: var(--highlight); }

/* TransitionGroup */
.project-list-enter-active { transition: all 0.4s ease; }
.project-list-leave-active { transition: all 0.2s ease; position: absolute; pointer-events: none; }
.project-list-enter-from { opacity: 0; transform: translateY(20px); }
.project-list-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 768px) {
  .project-list-tags, .project-list-year { display: none; }
  .project-list-info h3 { font-size: 1.2rem; }
  .project-hover-img { display: none; }
}
</style>

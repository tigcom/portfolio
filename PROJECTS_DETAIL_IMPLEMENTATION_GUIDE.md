# 🎨 Projects & Project Detail - Vue.js + GSAP Implementation Guide

> **Mục đích:** Hướng dẫn chi tiết để rebuild lại Projects Page và Project Detail Page bằng Vue.js + GSAP, đạt 100% độ chính xác về layout, animation, và UX. Chỉ thay đổi nội dung (dữ liệu), giữ nguyên cấu trúc.

---

## 📑 Table of Contents

1. [Project Structure](#project-structure)
2. [Vue Components Architecture](#vue-components-architecture)
3. [Pages Implementation](#pages-implementation)
4. [CSS Styling](#css-styling)
5. [GSAP Animations](#gsap-animations)
6. [Data Models](#data-models)
7. [Responsive Design](#responsive-design)
8. [Performance Optimization](#performance-optimization)

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── PageLoader.vue
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── CursorGlow.vue
│   ├── projects/
│   │   ├── ProjectsPage.vue
│   │   ├── ProjectHeroSection.vue
│   │   ├── FilterTabs.vue
│   │   ├── ProjectsList.vue
│   │   ├── ProjectListItem.vue
│   │   └── HoverImageFollower.vue
│   └── projectDetail/
│       ├── ProjectDetailPage.vue
│       ├── PDHeroSection.vue
│       ├── PDTechStrip.vue
│       ├── PDOverviewSection.vue
│       ├── PDGallerySection.vue
│       ├── PDResultsSection.vue
│       └── PDNavigation.vue
├── stores/
│   └── projectStore.ts
├── types/
│   └── project.ts
├── styles/
│   ├── variables.css
│   ├── base.css
│   └── shared.css
└── views/
    ├── Projects.vue
    └── ProjectDetail.vue
```

---

## 🧩 Vue Components Architecture

### **1. PageLoader Component**

```vue
<template>
  <div id="page-loader" v-if="isLoading" class="page-loader">
    <div class="loader-logo">MD</div>
    <div class="loader-bar-wrapper">
      <div class="loader-bar" ref="loaderBar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import gsap from 'gsap'

const isLoading = ref(true)
const loaderBar = ref<HTMLElement | null>(null)

const props = defineProps({
  duration: {
    type: Number,
    default: 1.0
  }
})

const emit = defineEmits<{
  complete: []
}>()

onMounted(() => {
  if (!loaderBar.value) return

  const tl = gsap.timeline({
    onComplete: () => {
      isLoading.value = false
      emit('complete')
    }
  })

  // Loader bar animation
  tl.to(loaderBar.value, { 
    width: '100%', 
    duration: props.duration, 
    ease: 'power2.inOut' 
  })
  
  // Slide out
  .to(document.getElementById('page-loader'), { 
    yPercent: -100, 
    duration: 0.65, 
    ease: 'power3.inOut',
    delay: 0.1 
  })
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  background: var(--bg-900);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.loader-logo {
  font-family: var(--font-clash);
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.loader-bar-wrapper {
  width: 120px;
  height: 2px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

.loader-bar {
  width: 0;
  height: 100%;
  background: var(--highlight);
}
</style>
```

---

### **2. Navbar Component**

```vue
<template>
  <header id="navbar" :class="{ scrolled, hidden }">
    <nav class="nav-inner">
      <router-link to="/" class="nav-logo">MD</router-link>
      
      <ul class="nav-links">
        <li>
          <router-link to="/">
            <span class="link-text-top">Home</span>
            <span class="link-text-bottom">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span class="link-text-top">About</span>
            <span class="link-text-bottom">About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects" :class="{ active: $route.path === '/projects' }">
            <span class="link-text-top">Projects</span>
            <span class="link-text-bottom">Projects</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <span class="link-text-top">Contact</span>
            <span class="link-text-bottom">Contact</span>
          </router-link>
        </li>
      </ul>

      <button class="nav-theme-btn" @click="toggleTheme" aria-label="Toggle theme">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" 
             stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const hidden = ref(false)
let lastScroll = 0

onMounted(() => {
  // Navbar entrance animation
  gsap.from('#navbar', {
    yPercent: -100,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    delay: 0.3
  })

  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const current = window.scrollY
  
  if (current > 80) {
    scrolled.value = true
    
    if (current > lastScroll) {
      hidden.value = true
    } else {
      hidden.value = false
    }
  } else {
    scrolled.value = false
    hidden.value = false
  }
  
  lastScroll = current
}

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark-mode')
}
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
}

#navbar.scrolled .nav-inner {
  background: rgba(5, 5, 5, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

#navbar.hidden {
  transform: translateY(-100%);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  max-width: 1400px;
  margin: 0 auto;
  transition: background 0.3s, border 0.3s;
}

.nav-logo {
  font-family: var(--font-clash);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  color: var(--text-primary);
  font-size: 0.95rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.link-text-top,
.link-text-bottom {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:hover .link-text-top {
  transform: translateY(-100%);
}

.nav-links a:hover .link-text-bottom {
  transform: translateY(-100%);
}

.nav-links a.active .link-text-top {
  color: var(--highlight);
}

.nav-theme-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  transition: color 0.3s;
}

.nav-theme-btn:hover {
  color: var(--highlight);
}
</style>
```

---

## 📄 Pages Implementation

### **Projects Page - Main Component**

```vue
<!-- views/Projects.vue -->

<template>
  <div class="projects-page">
    <page-loader @complete="onLoaderComplete" />
    
    <navbar />
    <cursor-glow />

    <main>
      <!-- PAGE HERO -->
      <projects-hero-section />

      <!-- FILTER TABS -->
      <div class="container">
        <filter-tabs 
          :items="categories"
          :active-filter="activeFilter"
          @filter-change="activeFilter = $event"
        />
      </div>

      <!-- PROJECTS LIST -->
      <section class="projects-list-section section">
        <div class="container">
          <projects-list 
            :items="filteredProjects"
            :active-filter="activeFilter"
          />
        </div>
        <hover-image-follower ref="hoverFollower" />
      </section>
    </main>

    <footer-component />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import PageLoader from '@/components/shared/PageLoader.vue'
import Navbar from '@/components/shared/Navbar.vue'
import CursorGlow from '@/components/shared/CursorGlow.vue'
import FooterComponent from '@/components/shared/Footer.vue'
import ProjectsHeroSection from '@/components/projects/ProjectHeroSection.vue'
import FilterTabs from '@/components/projects/FilterTabs.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import HoverImageFollower from '@/components/projects/HoverImageFollower.vue'
import { useProjectStore } from '@/stores/projectStore'

const store = useProjectStore()
const activeFilter = ref('all')
const hoverFollower = ref()

const categories = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'design', label: 'Design' },
  { id: 'both', label: 'Dev & Design' }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return store.projects
  }
  return store.projects.filter(p => p.category === activeFilter.value)
})

const onLoaderComplete = () => {
  initPageAnimations()
}

const initPageAnimations = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('#navbar', { yPercent: -100 }, { yPercent: 0, duration: 0.6 }, 0)
  
  tl.fromTo('.filter-tabs', 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 0.5 }, 
    0.8
  )

  tl.fromTo('.project-list-item',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: 'power2.out' },
    1.0
  )
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  background: var(--bg-primary);
}

.projects-list-section {
  padding-top: 32px !important;
}
</style>
```

---

### **HoverImageFollower Component**

```vue
<template>
  <div class="project-hover-img" ref="hoverImg">
    <img :src="hoverImgSrc" alt="" class="project-hover-img__img" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const hoverImg = ref<HTMLElement | null>(null)
const hoverImgSrc = ref('')

onMounted(() => {
  if (!hoverImg.value) return

  let mouseX = 0
  let mouseY = 0

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
    
    if (hoverImg.value) {
      hoverImg.value.style.left = mouseX + 'px'
      hoverImg.value.style.top = mouseY + 'px'
    }
  }

  const projectItems = document.querySelectorAll('.project-list-item')

  projectItems.forEach(item => {
    const imgSrc = item.getAttribute('data-img')
    if (!imgSrc) return

    item.addEventListener('mouseenter', () => {
      hoverImgSrc.value = imgSrc
      
      if (hoverImg.value) {
        hoverImg.value.classList.add('visible')
        gsap.to(hoverImg.value, {
          opacity: 1,
          scale: 1,
          rotate: -2,
          duration: 0.4,
          ease: 'power3.out'
        })
      }
    })

    item.addEventListener('mouseleave', () => {
      if (hoverImg.value) {
        gsap.to(hoverImg.value, {
          opacity: 0,
          scale: 0.8,
          rotate: -3,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            if (hoverImg.value) {
              hoverImg.value.classList.remove('visible')
            }
          }
        })
      }
    })
  })

  document.addEventListener('mousemove', handleMouseMove)

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
})
</script>

<style scoped>
.project-hover-img {
  position: fixed;
  width: 280px;
  height: 180px;
  pointer-events: none;
  z-index: 200;
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8) rotate(-3deg);
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.project-hover-img.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) rotate(-2deg);
}

.project-hover-img__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .project-hover-img {
    display: none;
  }
}
</style>
```

---

### **FilterTabs Component**

```vue
<template>
  <div class="filter-tabs">
    <button
      v-for="cat in items"
      :key="cat.id"
      :class="['filter-tab', { active: activeFilter === cat.id }]"
      @click="handleFilterClick(cat.id)"
    >
      {{ cat.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

interface Category {
  id: string
  label: string
}

defineProps<{
  items: Category[]
  activeFilter: string
}>()

const emit = defineEmits<{
  filterChange: [filter: string]
}>()

const handleFilterClick = (filterId: string) => {
  if (filterId === activeFilter) return

  emit('filterChange', filterId)

  // Animate items out/in
  const items = document.querySelectorAll('.project-list-item:not(.hidden)')
  
  gsap.to(items, {
    opacity: 0,
    y: 20,
    duration: 0.25,
    stagger: 0.03
  })
}
</script>

<style scoped>
.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 0;
}

.filter-tab {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 8px 20px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--font-satoshi);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-tab:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.filter-tab.active {
  background: var(--text-primary);
  border-color: var(--text-primary);
  color: var(--bg-900);
}
</style>
```

---

### **ProjectsList Component**

```vue
<template>
  <div class="projects-list">
    <project-list-item
      v-for="(project, idx) in items"
      :key="project.id"
      :project="project"
      :index="idx"
      @mouseenter="onItemHover"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectListItem from './ProjectListItem.vue'
import type { Project } from '@/types/project'

defineProps<{
  items: Project[]
  activeFilter: string
}>()

const emit = defineEmits<{
  itemHover: [img: string]
}>()

const onItemHover = (img: string) => {
  emit('itemHover', img)
}
</script>

<style scoped>
.projects-list {
  width: 100%;
}
</style>
```

---

### **ProjectListItem Component**

```vue
<template>
  <router-link 
    :to="`/project/${project.id}`"
    class="project-list-item"
    :data-img="project.heroImage"
    :data-category="project.category"
  >
    <!-- Meta number -->
    <div class="project-list-meta">
      <span class="project-list-num">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <!-- Info -->
    <div class="project-list-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.subtitle }}</p>
    </div>

    <!-- Tags -->
    <div class="project-list-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>

    <!-- Year -->
    <div class="project-list-year">{{ project.year }}</div>

    <!-- Arrow -->
    <div class="project-list-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
           stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project'

interface Props {
  project: Project
  index: number
}

defineProps<Props>()
</script>

<style scoped>
.project-list-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  position: relative;
  transition: padding-left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

/* Glow background on hover */
.project-list-item::after {
  content: '';
  position: absolute;
  inset: 0 -24px;
  background: var(--highlight-glow);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.project-list-item:hover::after {
  opacity: 1;
}

/* Underline expand */
.project-list-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--highlight);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.project-list-item:hover::before {
  transform: scaleX(1);
}

.project-list-item:hover {
  padding-left: 12px;
}

.project-list-meta {
  flex-shrink: 0;
  width: 40px;
}

.project-list-num {
  font-family: var(--font-clash);
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.project-list-info {
  flex: 1;
}

.project-list-info h3 {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 4px;
  transition: color 0.3s;
}

.project-list-item:hover .project-list-info h3 {
  color: var(--highlight);
}

.project-list-info p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.project-list-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.tag {
  background: var(--bg-800);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 4px 12px;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.project-list-year {
  font-size: 0.85rem;
  color: var(--text-secondary);
  flex-shrink: 0;
  width: 48px;
  text-align: right;
}

.project-list-arrow {
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: transform 0.3s, color 0.3s;
}

.project-list-item:hover .project-list-arrow {
  transform: rotate(45deg);
  color: var(--highlight);
}

@media (max-width: 768px) {
  .project-list-tags {
    display: none;
  }

  .project-list-year {
    display: none;
  }

  .project-list-info h3 {
    font-size: 1.2rem;
  }
}
</style>
```

---

## 📋 PROJECT DETAIL PAGE IMPLEMENTATION

### **ProjectDetailPage Component**

```vue
<!-- views/ProjectDetail.vue -->

<template>
  <div class="project-detail-page">
    <page-loader @complete="onLoaderComplete" />
    <navbar />
    <cursor-glow />

    <main v-if="project">
      <!-- Back Link -->
      <section class="pd-hero">
        <div class="container">
          <div class="pd-back">
            <router-link to="/projects" class="pd-back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" 
                   stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Projects
            </router-link>
          </div>

          <!-- Hero Content -->
          <div class="pd-hero-inner">
            <!-- Left: Info -->
            <div class="pd-hero-info">
              <div class="section-label" id="pd-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                     stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                </svg>
                <span class="shimmer">Case Study</span>
              </div>

              <h1 id="pd-title">{{ project.title }}</h1>
              <p id="pd-desc">{{ project.description }}</p>

              <!-- Meta Info -->
              <div class="pd-meta-row" id="pd-meta">
                <div class="pd-meta-item">
                  <span class="pd-meta-label">Year</span>
                  <span class="pd-meta-value">{{ project.year }}</span>
                </div>
                <div class="pd-meta-item">
                  <span class="pd-meta-label">Category</span>
                  <span class="pd-meta-value">{{ project.category }}</span>
                </div>
                <div class="pd-meta-item">
                  <span class="pd-meta-label">Role</span>
                  <span class="pd-meta-value">{{ project.role }}</span>
                </div>
              </div>

              <!-- CTA Links -->
              <div class="pd-links" id="pd-links">
                <a v-if="project.githubLink" :href="project.githubLink" class="btn btn-outline" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                       stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
                <a v-if="project.liveLink" :href="project.liveLink" class="btn btn-ghost" target="_blank">
                  Live Demo →
                </a>
              </div>
            </div>

            <!-- Right: Hero Image -->
            <div class="pd-hero-visual" id="pd-visual">
              <div class="pd-hero-img-wrapper">
                <img :src="project.heroImage" :alt="project.title" class="pd-hero-img">
                <div class="pd-img-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Strip -->
      <div class="pd-tech-strip">
        <div class="container">
          <div class="pd-tech-list">
            <span v-for="tech in project.technologies" :key="tech" class="pd-tech-badge">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="pd-content">
        <div class="container">
          <!-- Overview Image -->
          <div class="pd-full-img-block" data-reveal="fade">
            <img :src="project.overviewImage" :alt="`${project.title} Overview`" class="pd-full-img">
          </div>

          <!-- Two Column: Overview + Problem -->
          <div class="pd-two-col" data-reveal="up">
            <div class="pd-col">
              <h2>Overview</h2>
              <div v-html="project.overview"></div>
            </div>
            <div class="pd-col">
              <h2>Problem Statement</h2>
              <div v-html="project.problemStatement"></div>
            </div>
          </div>

          <!-- Process Steps -->
          <div class="pd-process-block" data-reveal="up">
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
          <div class="pd-gallery" data-reveal="up">
            <div class="pd-gallery-grid">
              <div class="pd-gallery-item pd-gallery-item--tall">
                <img :src="project.galleryImages[0]" :alt="`Gallery 1`">
              </div>
              <div class="pd-gallery-col">
                <div v-for="(img, idx) in project.galleryImages.slice(1, 3)" :key="idx" class="pd-gallery-item">
                  <img :src="img" :alt="`Gallery ${idx + 2}`">
                </div>
              </div>
            </div>
          </div>

          <!-- Results -->
          <div class="pd-results-block" data-reveal="up">
            <h2>Key Results</h2>
            <div class="pd-results-grid">
              <div v-for="result in project.keyResults" :key="result.id" class="pd-result-card">
                <div class="pd-result-num" :data-target="result.value" :data-suffix="result.suffix">
                  0
                </div>
                <p>{{ result.label }}</p>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <pd-navigation :current-project="project" />
        </div>
      </div>
    </main>

    <footer-component />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageLoader from '@/components/shared/PageLoader.vue'
import Navbar from '@/components/shared/Navbar.vue'
import CursorGlow from '@/components/shared/CursorGlow.vue'
import FooterComponent from '@/components/shared/Footer.vue'
import PDNavigation from '@/components/projectDetail/PDNavigation.vue'
import { useProjectStore } from '@/stores/projectStore'
import type { Project } from '@/types/project'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const store = useProjectStore()
const project = ref<Project | null>(null)

onMounted(() => {
  const projectId = route.params.id as string
  project.value = store.getProjectById(projectId) || null
})

watch(project, (newProject) => {
  if (newProject) {
    // Initialize animations when project is loaded
    setTimeout(initAnimations, 100)
  }
})

const onLoaderComplete = () => {
  initHeroAnimations()
}

const initHeroAnimations = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('#navbar', { yPercent: -100 }, { yPercent: 0, duration: 0.5 }, 0)
  tl.fromTo('.pd-back-link', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 }, 0.2)
  tl.to('#pd-label', { opacity: 1, x: 0, duration: 0.5 }, 0.3)
  tl.to('#pd-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }, 0.4)
  tl.to('#pd-desc', { opacity: 1, y: 0, duration: 0.6 }, 0.6)
  tl.to('#pd-meta', { opacity: 1, y: 0, duration: 0.5 }, 0.7)
  tl.to('#pd-links', { opacity: 1, y: 0, duration: 0.5 }, 0.8)
  tl.to('#pd-visual', { opacity: 1, x: 0, duration: 1.0, ease: 'power4.out' }, 0.3)
  tl.fromTo('.pd-tech-badge', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, 1.0)
}

const initAnimations = () => {
  initScrollReveals()
  initImageParallax()
  initGalleryItems()
  initCounters()
  initResultCards()
}

const initScrollReveals = () => {
  const items = document.querySelectorAll('[data-reveal]')

  items.forEach(el => {
    const type = (el as HTMLElement).dataset.reveal

    gsap.set(el, {
      opacity: 0,
      y: type === 'up' ? 50 : 0,
      x: type === 'left' ? -50 : type === 'right' ? 50 : 0
    })

    ScrollTrigger.create({
      trigger: el,
      start: 'top 87%',
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, x: 0, duration: 0.9, ease: 'power3.out' })
      }
    })
  })
}

const initImageParallax = () => {
  const fullImg = document.querySelector('.pd-full-img') as HTMLElement
  if (!fullImg) return

  gsap.to(fullImg, {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.pd-full-img-block',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

const initGalleryItems = () => {
  gsap.from('.pd-gallery-item', {
    scrollTrigger: { trigger: '.pd-gallery', start: 'top 85%' },
    y: 60,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: 'power3.out'
  })
}

const initCounters = () => {
  const counters = document.querySelectorAll('.pd-result-num[data-target]')

  counters.forEach(counter => {
    const target = parseFloat((counter as HTMLElement).dataset.target || '0')
    const suffix = (counter as HTMLElement).dataset.suffix || ''

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = Math.round(obj.val) + suffix
          }
        })
      }
    })
  })
}

const initResultCards = () => {
  gsap.from('.pd-result-card', {
    scrollTrigger: { trigger: '.pd-results-grid', start: 'top 85%' },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
  })
}
</script>

<style scoped>
.project-detail-page {
  min-height: 100vh;
  background: var(--bg-primary);
}

.pd-hero {
  padding-top: 120px;
  padding-bottom: 0;
}

.pd-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-bottom: 80px;
}

#pd-label {
  opacity: 0;
  transform: translateX(-20px);
}

#pd-title {
  font-size: clamp(3rem, 6vw, 5.5rem);
  margin: 16px 0 20px;
  opacity: 0;
  transform: translateY(30px);
}

#pd-desc {
  font-size: 1rem;
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(20px);
}

.pd-meta-row {
  display: flex;
  gap: 40px;
  margin-bottom: 36px;
  opacity: 0;
  transform: translateY(20px);
}

.pd-meta-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pd-meta-value {
  display: block;
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

.pd-links {
  display: flex;
  gap: 16px;
  opacity: 0;
  transform: translateY(20px);
}

.pd-hero-visual {
  opacity: 0;
  transform: translateX(40px);
}

.pd-hero-img-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.pd-hero-img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  display: block;
}

.pd-img-decoration {
  position: absolute;
  inset: -2px;
  border-radius: 26px;
  border: 2px solid var(--border);
  pointer-events: none;
}

.pd-back {
  margin-bottom: 40px;
}

.pd-back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: color 0.3s, gap 0.3s;
  text-decoration: none;
}

.pd-back-link:hover {
  color: var(--text-primary);
  gap: 12px;
}
</style>
```

---

## 🎨 CSS Styling

### **Main Stylesheet Variables**

```css
/* styles/variables.css */

:root {
  /* Colors */
  --bg-900: #050505;
  --bg-800: #0a0a0a;
  --bg-primary: #0f0f0f;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --border: #242424;
  --highlight: #00d9ff;
  --highlight-glow: rgba(0, 217, 255, 0.1);

  /* Fonts */
  --font-clash: 'Clash Display', system-ui;
  --font-satoshi: 'Satoshi', 'Inter', system-ui;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;

  /* Breakpoints */
  --break-sm: 480px;
  --break-md: 768px;
  --break-lg: 1024px;
  --break-xl: 1280px;
}

/* Dark mode override */
.dark-mode {
  --bg-primary: #f5f5f5;
  --text-primary: #050505;
  --text-secondary: #606060;
  --border: #e0e0e0;
  --highlight: #0066cc;
}
```

---

### **Base & Shared Styles**

```css
/* styles/base.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-satoshi);
  scroll-behavior: smooth;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}

.section {
  padding: 80px 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-clash);
  font-weight: 600;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

p {
  line-height: 1.8;
  margin-bottom: 16px;
}

a {
  transition: color 0.3s;
  color: var(--text-primary);
  text-decoration: none;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--highlight);
  color: var(--highlight);
}

.btn-outline:hover {
  background: var(--highlight);
  color: var(--bg-900);
}

.btn-ghost {
  background: transparent;
  border: 1px solid var(--text-secondary);
  color: var(--text-secondary);
}

.btn-ghost:hover {
  border-color: var(--highlight);
  color: var(--highlight);
}

/* Cursor Glow */
.cursor-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  filter: blur(40px);
  display: none; /* Show on desktop only */
}

@media (min-width: 1024px) {
  .cursor-glow {
    display: block;
  }
}

/* Shimmer effect */
.shimmer {
  position: relative;
  background: linear-gradient(100deg, var(--text-primary) 0%, var(--highlight) 50%, var(--text-primary) 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 200% 0; }
  50% { background-position: -200% 0; }
}
```

---

## 📊 Data Models

### **Project Type Definition**

```typescript
// types/project.ts

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  heroImage: string
  overviewImage: string
  galleryImages: string[]
  category: 'development' | 'design' | 'both'
  tags: string[]
  technologies: string[]
  year: number
  role: string
  year: number

  // Content sections
  overview: string // HTML content
  problemStatement: string // HTML content
  
  // Process steps
  processSteps: ProcessStep[]
  
  // Results
  keyResults: KeyResult[]

  // Links
  githubLink?: string
  liveLink?: string

  // Navigation
  nextProjectId?: string
  prevProjectId?: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface KeyResult {
  id: string
  value: number
  suffix: string
  label: string
}
```

---

### **Project Store (Pinia)**

```typescript
// stores/projectStore.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>([
    {
      id: 'aora',
      title: 'Aora',
      subtitle: 'React Native Video Sharing App',
      description: 'A full-stack React Native video sharing app...',
      heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=85',
      overviewImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85',
      galleryImages: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
        'https://images.unsplash.com/photo-1573655349936-de6bed86f839?w=600&q=80',
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80'
      ],
      category: 'development',
      tags: ['React Native', 'Mobile'],
      technologies: ['React Native', 'Expo', 'Appwrite', 'NativeWind', 'JavaScript', 'Tailwind CSS'],
      year: 2024,
      role: 'Full Stack Dev',
      overview: '<p>Aora is a video-sharing mobile application...</p>',
      problemStatement: '<p>Content creators needed a dedicated platform...</p>',
      processSteps: [
        { title: 'Research & Discovery', description: '...' },
        { title: 'Design & Prototype', description: '...' },
        { title: 'Development', description: '...' },
        { title: 'Testing & Launch', description: '...' }
      ],
      keyResults: [
        { id: 'downloads', value: 5000, suffix: '+', label: 'Downloads in first week' },
        { id: 'rating', value: 98, suffix: '%', label: 'App Store rating' },
        { id: 'loadtime', value: 120, suffix: 'ms', label: 'Average load time' },
        { id: 'compatibility', value: 100, suffix: '%', label: 'Cross-platform compatibility' }
      ],
      githubLink: '#',
      liveLink: '#',
      nextProjectId: 'code-screenshot',
      prevProjectId: 'ontrack'
    }
    // ... more projects
  ])

  const getProjectById = (id: string) => {
    return projects.value.find(p => p.id === id)
  }

  const getFilteredProjects = (category: string) => {
    if (category === 'all') return projects.value
    return projects.value.filter(p => p.category === category)
  }

  return {
    projects,
    getProjectById,
    getFilteredProjects
  }
})
```

---

## 🎬 GSAP Animations - Detailed Breakdown

### **Page Load Timeline**

```typescript
// Global animation initialization

const initPageLoader = () => {
  const loader = document.getElementById('page-loader')
  const loaderBar = document.querySelector('.loader-bar')

  const tl = gsap.timeline({
    onComplete: () => {
      loader!.style.display = 'none'
      initPageEntranceAnimation()
    }
  })

  // Step 1: Fill bar
  tl.to(loaderBar, {
    width: '100%',
    duration: 1.0,
    ease: 'power2.inOut'
  })

  // Step 2: Slide up
  .to(loader, {
    yPercent: -100,
    duration: 0.65,
    ease: 'power3.inOut',
    delay: 0.1
  })
}

const initPageEntranceAnimation = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Navbar slide down
  tl.fromTo('#navbar', 
    { yPercent: -100 }, 
    { yPercent: 0, duration: 0.6 }, 
    0
  )

  // Label fade in
  tl.fromTo('#page-label',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5 },
    0.3
  )

  // Title words reveal
  tl.fromTo('.page-hero-title .title-word',
    { yPercent: 110, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.07, duration: 0.9 },
    0.4
  )

  // Filter tabs
  tl.fromTo('#filterTabs',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5 },
    0.8
  )

  // Project items
  tl.fromTo('.project-list-item',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: 'power2.out' },
    1.0
  )
}
```

### **Scroll Trigger Reveals**

```typescript
// ScrollTrigger for content reveals

const initScrollReveals = () => {
  gsap.registerPlugin(ScrollTrigger)

  const items = document.querySelectorAll('[data-reveal]')

  items.forEach(el => {
    const type = el.getAttribute('data-reveal')
    
    gsap.set(el, {
      opacity: 0,
      y: type === 'up' ? 50 : type === 'down' ? -50 : 0,
      x: type === 'left' ? -50 : type === 'right' ? 50 : 0
    })

    ScrollTrigger.create({
      trigger: el,
      start: 'top 87%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.9,
          ease: 'power3.out'
        })
      }
    })
  })
}
```

### **Counter Animation**

```typescript
const initCounters = () => {
  const counters = document.querySelectorAll('.pd-result-num[data-target]')

  counters.forEach(counter => {
    const targetValue = parseFloat(counter.dataset.target!)
    const suffix = counter.dataset.suffix || ''

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        const animObj = { val: 0 }
        
        gsap.to(animObj, {
          val: targetValue,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = Math.round(animObj.val) + suffix
          }
        })
      }
    })
  })
}
```

### **Parallax Effect**

```typescript
const initParallax = () => {
  const img = document.querySelector('.pd-hero-img')
  
  gsap.to(img, {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.pd-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true // Smooth scrubbing
    }
  })

  // Full image parallax
  const fullImg = document.querySelector('.pd-full-img')
  
  gsap.to(fullImg, {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.pd-full-img-block',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}
```

---

## 📱 Responsive Design

### **Media Query Breakpoints**

```css
/* Desktop (1024px and up) - Primary design */
@media (min-width: 1024px) {
  .pd-hero-inner {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  .pd-process-steps {
    grid-template-columns: repeat(4, 1fr);
  }

  .pd-results-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .project-hover-img {
    display: block;
  }
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .pd-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .pd-process-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .pd-results-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-list-tags {
    display: none;
  }

  .project-list-year {
    display: none;
  }
}

/* Mobile (480px - 767px) */
@media (max-width: 767px) {
  .container {
    padding: 0 16px;
  }

  .section {
    padding: 40px 0;
  }

  .pd-process-steps {
    grid-template-columns: 1fr;
  }

  .pd-results-grid {
    grid-template-columns: 1fr;
  }

  .pd-gallery-grid {
    grid-template-columns: 1fr;
    height: auto;
  }

  .project-hover-img {
    display: none;
  }

  h2 {
    font-size: 1.4rem;
  }
}

/* Small Mobile (< 480px) */
@media (max-width: 479px) {
  .nav-links {
    gap: 20px;
    font-size: 0.85rem;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  .pd-meta-row {
    gap: 20px;
  }
}
```

---

## ⚡ Performance Optimization

### **Vue 3 Performance Tips**

```typescript
// 1. Lazy Load Components
import { defineAsyncComponent } from 'vue'

const HoverImageFollower = defineAsyncComponent(() =>
  import('@/components/projects/HoverImageFollower.vue')
)

// 2. Computed Properties for Filtering
const filteredProjects = computed(() => {
  return store.projects.filter(p => p.category === activeFilter.value)
})

// 3. Event Delegation
const handleProjectClick = (e: Event) => {
  const target = e.target as HTMLElement
  const item = target.closest('.project-list-item')
  if (item) {
    // Handle click
  }
}

// 4. Debounce Scroll Events
import { debounce } from 'lodash-es'

const handleScroll = debounce(() => {
  // Handle scroll
}, 100)

// 5. Memory Cleanup
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
```

### **GSAP Performance**

```typescript
// Use gsap.context for cleanup
const ctx = gsap.context(() => {
  // All animations within context
  gsap.to('.element', { /* ... */ })
  
  return () => {
    // Cleanup function
    ctx.revert()
  }
})

// Kill unused ScrollTriggers
window.addEventListener('beforeunload', () => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
```

---

## 🚀 Implementation Checklist

- [ ] Set up Vue 3 project with TypeScript
- [ ] Install dependencies: `gsap`, `pinia`, `vue-router`
- [ ] Create component structure
- [ ] Implement CSS variables and base styles
- [ ] Create data models and store
- [ ] Build Projects Page components
- [ ] Implement Projects page animations
- [ ] Build Project Detail Page
- [ ] Implement Detail page animations
- [ ] Add responsive design
- [ ] Test on mobile/tablet/desktop
- [ ] Optimize performance
- [ ] Enable lazy loading
- [ ] Add proper error handling
- [ ] Test animations smoothness
- [ ] Verify accessibility

---

## 📚 Component Integration Order

```
1. Set up global styles & variables
2. Create shared components (Navbar, Footer, etc.)
3. Create Projects page components
4. Integrate GSAP animations for Projects page
5. Create Project Detail components
6. Integrate GSAP animations for Detail page
7. Set up routing
8. Add store/state management
9. Test all animations and interactions
10. Optimize and deploy
```

---

## 🎯 Key Principles to Follow

1. **Separation of Concerns**: Keep components focused and reusable
2. **Data-Driven**: Use props and emit for parent-child communication
3. **Performance**: Use `computed` for filtering, lazy load components
4. **Accessibility**: Maintain semantic HTML, proper keyboard navigation
5. **Responsive**: Follow mobile-first approach
6. **Animation Timing**: Keep animations under 1.2s for UX
7. **Naming Convention**: Use kebab-case for components, camelCase for variables
8. **Type Safety**: Use TypeScript interfaces for all data models

---

**File này sẽ giúp bất kỳ developer nào rebuild Projects và Project Detail Page đạt 100% độ chính xác!**

<template>
  <main
    class="demo-standalone"
    v-if="template"
    :style="{ '--demo-accent': template.accentColor, '--demo-bg': template.colorBackground }"
  >
    <!-- Escape hatch back to the template detail (the only portfolio affordance) -->
    <router-link
      :to="`/marketplace/${template.slug}`"
      class="demo-exit"
      :title="t('marketplace.backToMarketplace')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="m15 18-6-6 6-6"/>
      </svg>
      <span>{{ t('marketplace.backToMarketplace') }}</span>
    </router-link>

    <!-- Multi-page app demo: chrome (sidebar + topbar) is provided by the layout. -->
    <DemoAppLayout
      v-if="!isLanding"
      :brand="brand"
      :title="activeTitle"
      :pages="pages"
      :active="currentPath"
      :base-path="basePath"
    >
      <component :is="pageComp" v-if="pageComp" />
      <div v-else class="demo-empty">{{ emptyText }}</div>
    </DemoAppLayout>

    <!-- Landing demo: the page is fully self-contained (its own nav + footer). -->
    <component v-else-if="pageComp" :is="pageComp" />
    <div v-else class="demo-empty">{{ emptyText }}</div>
  </main>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { getTemplateBySlug } from '../data/templates.js'
import { getDemoPage } from '../demos/registry.js'
import { useLang } from '../data/translations.js'
import DemoAppLayout from '../demos/_kit/DemoAppLayout.vue'

const route = useRoute()
const { state, t } = useLang()

const template = computed(() => getTemplateBySlug(route.params.slug, state.lang))
const pages = computed(() => template.value.pages || [])
const brand = computed(() => template.value.brand || template.value.title)

const currentPath = computed(() => {
  const p = route.params.page
  return pages.value.some(x => x.path === p) ? p : (pages.value[0]?.path || 'home')
})

const isLanding = computed(() => pages.value.length <= 1)
const basePath = computed(() => `/marketplace/${route.params.slug}/demo`)
const activeTitle = computed(() => pages.value.find(x => x.path === currentPath.value)?.label || brand.value)

const pageComp = computed(() => {
  const loader = getDemoPage(route.params.slug, currentPath.value)
  return loader ? defineAsyncComponent(loader) : null
})

const emptyText = computed(() =>
  state.lang === 'vi'
    ? 'Demo đang được xây dựng — gửi prompt để dựng màn hình này.'
    : 'Demo coming soon — send the prompt to build this screen.'
)
</script>

<style scoped>
.demo-standalone {
  position: relative;
  min-height: 100vh;
  background: var(--demo-bg);
  color: #e2e8f0;
}

.demo-exit {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}
.demo-exit:hover {
  background: rgba(15, 23, 42, 0.92);
}

.demo-empty {
  padding: 64px 24px;
  text-align: center;
  color: rgba(226, 232, 240, 0.55);
  font-size: 0.9rem;
}
</style>

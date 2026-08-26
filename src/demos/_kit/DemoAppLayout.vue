<script setup>
import DemoSidebar from './DemoSidebar.vue'
import DemoTopbar from './DemoTopbar.vue'

defineProps({
  brand: { type: String, default: 'App' },
  title: { type: String, default: 'Overview' },
  pages: { type: Array, default: () => [] },
  active: { type: String, default: '' },
  basePath: { type: String, default: '' },
})
</script>

<template>
  <div class="demo-app">
    <DemoSidebar :brand="brand" :pages="pages" :active="active" :basePath="basePath" />
    <div class="demo-app-main">
      <DemoTopbar :title="title" />
      <div class="demo-app-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-app {
  display: flex;
  min-height: 100vh;
  color: #e2e8f0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

.demo-app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.demo-app-content {
  flex: 1;
  padding: 22px;
  overflow: auto;
}
</style>

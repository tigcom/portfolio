<script setup>
defineProps({
  brand: { type: String, default: 'Brand' },
  navItems: { type: Array, default: () => [] },
  cta: { type: String, default: 'Get Started' },
})
</script>

<template>
  <div class="demo-landing">
    <header class="demo-landing-nav">
      <div class="demo-landing-brand">{{ brand }}</div>
      <nav class="demo-landing-links">
        <a v-for="(n, i) in navItems" :key="i" href="javascript:;" class="demo-landing-link">{{ n }}</a>
      </nav>
      <a href="javascript:;" class="demo-landing-cta">{{ cta }}</a>
    </header>
    <div class="demo-landing-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.demo-landing {
  min-height: 100vh;
  color: #e2e8f0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  display: flex;
  flex-direction: column;
}

.demo-landing-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 26px;
  background: rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(14px);
}

.demo-landing-brand {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}

.demo-landing-links {
  display: flex;
  gap: 20px;
  margin-left: auto;
}
.demo-landing-link {
  font-size: 0.85rem;
  color: rgba(226,232,240,0.75);
  text-decoration: none;
  transition: color 0.2s;
}
.demo-landing-link:hover { color: #fff; }

.demo-landing-cta {
  padding: 9px 18px;
  border-radius: 999px;
  background: var(--demo-accent);
  color: #0b0f1a;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
}

.demo-landing-content { flex: 1; }
</style>

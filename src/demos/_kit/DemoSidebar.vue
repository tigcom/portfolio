<script setup>
defineProps({
  brand: { type: String, default: 'App' },
  pages: { type: Array, default: () => [] },
  active: { type: String, default: '' },
  basePath: { type: String, default: '' },
})
</script>

<template>
  <aside class="demo-sidebar">
    <div class="demo-sidebar-brand">{{ brand }}</div>
    <nav class="demo-sidebar-nav">
      <router-link
        v-for="p in pages"
        :key="p.path"
        :to="`${basePath}/${p.path}`"
        class="demo-sidebar-link"
        :class="{ active: active === p.path }"
      >{{ p.label }}</router-link>
    </nav>
    <div class="demo-sidebar-foot">
      <div class="demo-sidebar-user">
        <div class="demo-sidebar-avatar">PK</div>
        <span>Phuc Khang</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.demo-sidebar {
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 18px 14px;
  background: rgba(8, 11, 20, 0.9);
  border-right: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
  color: #e2e8f0;
}

.demo-sidebar-brand {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  padding: 0 8px 18px;
  color: #fff;
}

.demo-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.demo-sidebar-link {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.85rem;
  color: rgba(226,232,240,0.7);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.demo-sidebar-link:hover { background: rgba(255,255,255,0.05); color: #fff; }
.demo-sidebar-link.active {
  background: var(--demo-accent);
  color: #0b0f1a;
  font-weight: 600;
}

.demo-sidebar-foot {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.demo-sidebar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  color: rgba(226,232,240,0.8);
}
.demo-sidebar-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--demo-accent);
  color: #0b0f1a;
  font-size: 0.7rem;
  font-weight: 700;
}
</style>

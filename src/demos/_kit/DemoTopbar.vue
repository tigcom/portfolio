<script setup>
defineProps({
  title: { type: String, default: 'Overview' },
})
</script>

<template>
  <header class="demo-topbar">
    <div class="demo-topbar-title">{{ title }}</div>
    <div class="demo-topbar-right">
      <div class="demo-search">
        <span class="demo-search-icon">🔍</span>
        <input class="demo-search-input" type="text" placeholder="Search…" />
      </div>
      <button class="demo-topbar-btn" title="Notifications">🔔</button>
    </div>
  </header>
</template>

<style scoped>
.demo-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  background: rgba(8, 11, 20, 0.85);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
}

.demo-topbar-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
}

.demo-topbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
}
.demo-search-icon { font-size: 0.75rem; }
.demo-search-input {
  background: transparent;
  border: none;
  outline: none;
  color: #e2e8f0;
  font-size: 0.8rem;
  width: 140px;
}
.demo-search-input::placeholder { color: rgba(226,232,240,0.4); }

.demo-topbar-btn {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  font-size: 0.9rem;
}
</style>

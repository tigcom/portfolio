<script setup>
defineProps({
  text: { type: String, default: '' },
  variant: { type: String, default: 'accent' }, // accent | success | danger | neutral
})
</script>

<template>
  <span class="demo-badge" :class="`is-${variant}`">{{ text }}</span>
</template>

<style scoped>
.demo-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.is-accent { background: var(--demo-accent); color: #0b0f1a; }
.is-success { background: rgba(52,211,153,0.15); color: #34d399; }
.is-danger { background: rgba(248,113,113,0.15); color: #f87171; }
.is-neutral { background: rgba(255,255,255,0.08); color: rgba(226,232,240,0.8); }
</style>

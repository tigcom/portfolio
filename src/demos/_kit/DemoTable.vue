<script setup>
defineProps({
  columns: { type: Array, default: () => [] }, // [{ key, label }]
  rows: { type: Array, default: () => [] },    // array of objects
})
</script>

<template>
  <div class="demo-table-wrap">
    <table class="demo-table">
      <thead>
        <tr>
          <th v-for="c in columns" :key="c.key">{{ c.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, ri) in rows" :key="ri">
          <td v-for="c in columns" :key="c.key">{{ row[c.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.demo-table-wrap {
  overflow-x: auto;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
}

.demo-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}

.demo-table th {
  text-align: left;
  padding: 12px 16px;
  color: rgba(226,232,240,0.5);
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.demo-table td {
  padding: 13px 16px;
  color: rgba(226,232,240,0.9);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.demo-table tbody tr:last-child td { border-bottom: none; }
.demo-table tbody tr:hover td { background: rgba(255,255,255,0.03); }
</style>

<script setup>
// Lightweight inline SVG icon set (Lucide-style strokes). Replaces emoji icons
// so demo screens look professional and inherit `currentColor` for theming.
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 24 },
})
</script>

<template>
  <svg
    :width="size" :height="size" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'chart'">
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 3 5-6" />
    </template>
    <template v-else-if="name === 'dash'">
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </template>
    <template v-else-if="name === 'plug'">
      <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 0 1-12 0V8z" />
    </template>
    <template v-else-if="name === 'team'">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </template>
    <template v-else-if="name === 'bell'">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </template>
    <template v-else-if="name === 'up'">
      <path d="M12 19V5" /><path d="m5 12 7-7 7 7" />
    </template>
    <template v-else-if="name === 'down'">
      <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="M20 6 9 17l-5-5" />
    </template>
    <template v-else-if="name === 'play'">
      <polygon points="6 3 20 12 6 21 6 3" />
    </template>
    <template v-else-if="name === 'star'">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </template>
    <template v-else-if="name === 'gauge'">
      <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </template>
    <template v-else-if="name === 'lock'">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </template>
    <template v-else-if="name === 'sync'">
      <path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 3v6h-6" />
    </template>
    <template v-else-if="name === 'spark'">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </template>
    <template v-else-if="name === 'logo'">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 8h8v8H8z" />
    </template>
    <template v-else-if="name === 'arrow'">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </template>
    <template v-else-if="name === 'bars'">
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </template>
    <template v-else-if="name === 'dollar'">
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </template>
    <template v-else-if="name === 'check-circle'">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </template>
    <template v-else-if="name === 'calendar'">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </template>
    <template v-else-if="name === 'plus'">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </template>
    <template v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </template>
    <template v-else-if="name === 'zap'">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </template>
    <template v-else-if="name === 'heart'">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </template>
    <template v-else-if="name === 'map-pin'">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </template>
    <template v-else-if="name === 'phone'">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </template>
    <template v-else-if="name === 'image'">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </template>
    <template v-else-if="name === 'bag'">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </template>
    <template v-else-if="name === 'user'">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </template>
    <template v-else-if="name === 'card'">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </template>
    <template v-else-if="name === 'send'">
      <path d="m22 2-7 20-4-9-9-4 20-7z" />
    </template>
    <template v-else-if="name === 'wallet'">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </template>
    <template v-else-if="name === 'fingerprint'">
      <path d="M2 12a10 10 0 0 1 20 0" />
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M8 12a4 4 0 0 1 8 0" />
      <path d="M12 12v2" />
    </template>
    <template v-else-if="name === 'apple'">
      <path d="M16.4 12.9c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.4zM14.4 5.6c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5 1 .1 2-.5 2.5-1.2z" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="10" />
    </template>
  </svg>
</template>

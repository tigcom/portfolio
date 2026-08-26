// src/demos/registry.js
// Auto-discovers demo pages via Vite glob so adding a new demo never touches
// main.js or this file. Convention:
//   src/demos/<slug>/pages/<page>.vue   (page filename === `pages[].path` in templates.json)
//   src/demos/_kit/                     shared kit, ignored by the glob below.

const pageModules = import.meta.glob('./*/pages/*.vue')

// key: './saas-analytics-dashboard/pages/dashboard.vue' → 'saas-analytics-dashboard/dashboard'
const demoPages = Object.fromEntries(
  Object.entries(pageModules).map(([key, loader]) => {
    const parts = key.split('/') // ['', '<slug>', 'pages', '<page>.vue']
    const slug = parts[1]
    const page = parts[3].replace(/\.vue$/, '')
    return [`${slug}/${page}`, loader]
  })
)

export function getDemoPage(slug, page) {
  return demoPages[`${slug}/${page}`] || null
}

export function hasDemo(slug) {
  return Object.keys(demoPages).some(k => k.startsWith(`${slug}/`))
}

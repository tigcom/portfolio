// src/data/categories.js
// Marketplace category registry — single source of truth for category labels & order.
// Listing filter + detail badge derive from this (no more hardcoded filter arrays).

export const categories = {
  saas: { en: 'SaaS', vi: 'SaaS', order: 1 },
  fintech: { en: 'Fintech', vi: 'Fintech', order: 2 },
  ai: { en: 'AI', vi: 'AI', order: 3 },
  ecommerce: { en: 'E-commerce', vi: 'Thương mại điện tử', order: 4 },
  healthcare: { en: 'Healthcare', vi: 'Y tế', order: 5 },
  'real-estate': { en: 'Real Estate', vi: 'Bất động sản', order: 6 },
  education: { en: 'Education', vi: 'Giáo dục', order: 7 },
  food: { en: 'Food & Restaurant', vi: 'Ẩm thực', order: 8 },
  travel: { en: 'Travel', vi: 'Du lịch', order: 9 },
  fitness: { en: 'Fitness', vi: 'Thể hình', order: 10 },
  'dev-tools': { en: 'DevTools', vi: 'Công cụ Dev', order: 11 },
  creative: { en: 'Creative', vi: 'Sáng tạo', order: 12 },
  branding: { en: 'Branding', vi: 'Thương hiệu', order: 13 },
}

export function getCategoryLabel(id, lang = 'vi') {
  return categories[id]?.[lang] || id
}

export function getCategoryList(lang = 'vi') {
  return Object.entries(categories)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([value, c]) => ({ value, label: c[lang] || c.en }))
}

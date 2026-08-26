// src/data/templates.js
// Centralized template data wrapper — reads from templates.json
import templatesData from './templates.json'

export const templates = templatesData

export function getTemplateBySlug(slug, lang = 'vi') {
  const foundIndex = templates.findIndex(t => t.slug === slug)
  const index = foundIndex === -1 ? 0 : foundIndex
  const template = templates[index]

  // Circular prev/next computed from array order — no hand-wired links in JSON
  const prev = templates[(index - 1 + templates.length) % templates.length]
  const next = templates[(index + 1) % templates.length]

  // Local helper to translate fields
  const translate = (obj) =>
    obj && typeof obj === 'object' && !Array.isArray(obj) && obj[lang]
      ? obj[lang]
      : obj

  return {
    ...template,
    title: translate(template.title),
    subtitle: translate(template.subtitle),
    overview: translate(template.overview),
    about: translate(template.about),
    features: translate(template.features),
    pages: (template.pages || []).map(p => ({
      ...p,
      label: lang === 'vi' ? (p.labelVi || p.labelEn) : (p.labelEn || p.labelVi),
    })),
    prevSlug: prev.slug,
    prevTitle: translate(prev.title),
    nextSlug: next.slug,
    nextTitle: translate(next.title),
  }
}

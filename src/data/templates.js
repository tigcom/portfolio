// src/data/templates.js
// Centralized template data wrapper — reads from templates.json
import templatesData from './templates.json'

export const templates = templatesData

export function getTemplateBySlug(slug, lang = 'vi') {
  const template = templates.find(t => t.slug === slug) || templates[0]

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
    prevTitle: translate(template.prevTitle),
    nextTitle: translate(template.nextTitle),
  }
}

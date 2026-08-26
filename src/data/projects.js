// src/data/projects.js
// Centralized project data wrapper — reads from projects.json
import projectsData from './projects.json';

export const projects = projectsData;

export function getProjectBySlug(slug, lang = 'vi') {
    const project = projects.find(p => p.slug === slug) || projects[0]
    
    // Local helper to translate fields
    const translate = (obj) => (obj && typeof obj === 'object' && obj[lang]) ? obj[lang] : obj;

    return {
        ...project,
        title: translate(project.title),
        subtitle: translate(project.subtitle),
        role: translate(project.role),
        overview: translate(project.overview),
        problem: translate(project.problem),
        prevTitle: translate(project.prevTitle),
        nextTitle: translate(project.nextTitle),
        processSteps: project.processSteps.map(s => ({
            title: translate(s.title),
            description: translate(s.description)
        })),
        results: project.results.map(r => ({
            ...r,
            label: translate(r.label)
        }))
    }
}

// Resolve the thumbnail background color for a given theme ('light' | 'dark').
// Accepts the new { light, dark } object form and falls back to legacy string values.
export function getProjectBgColor(project, theme = 'dark') {
    const bg = project?.colorBackgound
    if (!bg) return undefined
    if (typeof bg === 'string') return bg
    return bg[theme] ?? bg.light ?? bg.dark ?? undefined
}

// src/data/projects.js
// Centralized project data wrapper — reads from projects.json
import projectsData from './projects.json';

export const projects = projectsData;

// Biến tạm thời để bật/tắt tính năng xem chi tiết dự án
export const FEATURE_PROJECT_DETAILS_ENABLED = true;

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

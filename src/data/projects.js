// src/data/projects.js
// Centralized project data wrapper — reads from projects.json
import projectsData from './projects.json';

export const projects = projectsData;

export function getProjectBySlug(slug, lang = 'vi') {
    const project = projects.find(p => p.slug === slug) || projects[0]
    
    // Local helper to translate fields
    const translate = (obj) => (obj && typeof obj === 'object' && obj[lang]) ? obj[lang] : obj;

    // Detail sections nest: a level-2 sub-section lives inside its parent's
    // `children`, so the table of contents is derived from this same tree and
    // can never drift out of sync with the headings on the page.
    const localizeSection = (section) => ({
        ...section,
        heading: translate(section.heading),
        body: translate(section.body),
        images: (section.images || []).map(img => ({
            ...img,
            alt: translate(img.alt),
            caption: translate(img.caption)
        })),
        children: (section.children || []).map(localizeSection)
    })

    return {
        ...project,
        title: translate(project.title),
        subtitle: translate(project.subtitle),
        shortTitle: translate(project.shortTitle),
        client: translate(project.client),
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
        })),
        // Only the dedicated TIC Factory layout has sections; other projects
        // leave this empty and keep rendering the standard layout.
        sections: (project.sections || []).map(localizeSection)
    }
}

// Resolve the thumbnail background color (always uses light accent background).
export function getProjectBgColor(project) {
    const bg = project?.colorBackgound
    if (!bg) return undefined
    if (typeof bg === 'string') return bg
    return bg.light ?? bg.dark ?? undefined
}

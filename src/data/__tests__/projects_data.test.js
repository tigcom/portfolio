import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import projectsData from '../projects.json';

/**
 * Gallery styles implemented by ProjectGallery.vue. Keep in sync with the
 * STYLES map there — an unknown galleryLayout renders nothing.
 */
const GALLERY_STYLES = ['cover-flow', 'flipbook', 'cards', 'orbit-3d'];

describe('Projects gallery data', () => {
  it('exposes galleryImgs as a non-empty array of string paths', () => {
    projectsData.forEach(project => {
      expect(Array.isArray(project.galleryImgs), `${project.slug} galleryImgs`).toBe(true);
      expect(project.galleryImgs.length, `${project.slug} galleryImgs`).toBeGreaterThan(0);
      project.galleryImgs.forEach(img => {
        expect(typeof img, `${project.slug} gallery entry`).toBe('string');
      });
    });
  });

  it('only uses galleryLayout values that ProjectGallery can render', () => {
    projectsData
      .filter(project => project.galleryLayout)
      .forEach(project => {
        expect(GALLERY_STYLES, `${project.slug} galleryLayout`).toContain(project.galleryLayout);
      });
  });

  it('gives a carousel to the image-heavy projects and a mockup to the rest', () => {
    const withCarousel = projectsData
      .filter(project => project.galleryLayout)
      .map(project => project.slug)
      .sort();

    expect(withCarousel).toEqual([
      'company-clean-hub',
      'internet-banking',
      'kplus-digital-banking',
    ]);

    // Every carousel project should have enough images to be worth scrolling.
    projectsData
      .filter(project => project.galleryLayout)
      .forEach(project => {
        expect(project.galleryImgs.length, `${project.slug} image count`).toBeGreaterThanOrEqual(7);
      });
  });
});

describe('Internet Banking Project Data', () => {
  it('has comprehensive content sections', () => {
    const ibProject = projectsData.find(p => p.slug === 'internet-banking');
    expect(ibProject).toBeDefined();
    expect(ibProject.processSteps.length).toBeGreaterThanOrEqual(4);
  });
});

describe('Detail Sections (Tic Factory & PCCC)', () => {
  const sectionProjects = projectsData.filter(p => p.sections && p.sections.length > 0);

  it('is the only projects carrying section data', () => {
    const withSections = projectsData.filter(p => p.sections).map(p => p.slug).sort();
    expect(withSections).toEqual(['pccc-nguyen-hung', 'renew-ticfactory']);
  });

  it('nests level-2 sections inside their parent and keeps ids unique', () => {
    sectionProjects.forEach(project => {
      const ids = [];
      const walk = (list, depth) => {
        expect(Array.isArray(list), 'level 1 is an array').toBe(true);
        list.forEach(section => {
          expect(section.id, 'id present').toBeTruthy();
          expect(ids, `${project.slug}: duplicate id ${section.id}`).not.toContain(section.id);
          ids.push(section.id);
          expect(section.level, `${project.slug}: ${section.id} level matches depth`).toBe(depth);
          if (depth === 2) expect(section.num, `${project.slug}: ${section.id} has no num`).toBeUndefined();
          walk(section.children || [], depth + 1);
        });
      };
      walk(project.sections, 1);
      expect(ids.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('gives every section and image bilingual heading, body, alt', () => {
    sectionProjects.forEach(project => {
      const bilingual = (value, what) => {
        expect(value, `${what} missing`).toBeTruthy();
        expect(value.en, `${what}.en`).toBeTruthy();
        expect(value.vi, `${what}.vi`).toBeTruthy();
      };
      const walk = (list) => list.forEach(section => {
        bilingual(section.heading, `${project.slug}: ${section.id}.heading`);
        bilingual(section.body, `${project.slug}: ${section.id}.body`);
        (section.images || []).forEach(img => {
          bilingual(img.alt, `${project.slug}: ${section.id} ${img.src}.alt`);
        });
        walk(section.children || []);
      });
      walk(project.sections);
    });
  });

  it('points every image at a file that exists, with real dimensions', () => {
    sectionProjects.forEach(project => {
      const walk = (list) => list.forEach(section => {
        (section.images || []).forEach(img => {
          const file = path.join(process.cwd(), 'public', img.src);
          expect(fs.existsSync(file), `${img.src} not found on disk`).toBe(true);
          expect(img.w, `${img.src} width`).toBeGreaterThan(0);
          expect(img.h, `${img.src} height`).toBeGreaterThan(0);
        });
        walk(section.children || []);
      });
      walk(project.sections);
    });
  });
});

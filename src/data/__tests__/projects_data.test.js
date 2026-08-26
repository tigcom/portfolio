import { describe, it, expect } from 'vitest';
import projectsData from '../projects.json';

/**
 * Gallery styles implemented by ProjectGallery.vue. Keep in sync with the
 * STYLES map there — an unknown galleryLayout renders nothing.
 */
const GALLERY_STYLES = ['cover-flow', 'flipbook', 'cards'];

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

import { describe, it, expect } from 'vitest';
import projectsData from '../projects.json';

describe('Internet Banking Project Data', () => {
  it('should have flexible gallery structure with type and src for internet-banking', () => {
    const ibProject = projectsData.find(p => p.slug === 'internet-banking');
    expect(ibProject).toBeDefined();
    
    // Check if galleryImgs is an array of objects (it should fail now as it is currently array of strings)
    expect(Array.isArray(ibProject.galleryImgs)).toBe(true);
    ibProject.galleryImgs.forEach(img => {
      expect(typeof img).toBe('object');
      expect(img).toHaveProperty('src');
      expect(img).toHaveProperty('type');
      expect(['bento', 'scrollable']).toContain(img.type);
    });
  });

  it('should have comprehensive content sections', () => {
    const ibProject = projectsData.find(p => p.slug === 'internet-banking');
    expect(ibProject.processSteps.length).toBeGreaterThanOrEqual(4);
  });
});

import { describe, expect, it } from 'vitest';
import { caseStudies, experience, metrics, profile, projects, skills } from './profile';

const ids = (items: { id: string }[]) => items.map((item) => item.id);

describe('site content', () => {
  it('uses unique ids so React keys and anchors never collide', () => {
    for (const list of [caseStudies, projects, experience]) {
      expect(new Set(ids(list)).size).toBe(list.length);
    }
  });

  it('links only to absolute https URLs or site-relative paths', () => {
    const hrefs = [
      profile.linkedin,
      profile.github,
      ...projects.flatMap((project) => project.links.map((link) => link.href)),
      ...projects.flatMap((project) => (project.image ? [project.image.src] : [])),
    ];
    for (const href of hrefs) {
      expect(href).toMatch(/^(https:\/\/|\/)/);
    }
  });

  it('gives every project image meaningful alt text', () => {
    for (const project of projects) {
      if (project.image) expect(project.image.alt.length).toBeGreaterThan(20);
    }
  });

  it('lists projects newest first', () => {
    const years = projects.map((project) => project.year);
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });

  it('has no empty sections', () => {
    expect(metrics.length).toBeGreaterThan(0);
    expect(skills.every((group) => group.items.length > 0)).toBe(true);
    expect(experience.every((role) => role.highlights.length > 0)).toBe(true);
  });

  it('has a valid contact email', () => {
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

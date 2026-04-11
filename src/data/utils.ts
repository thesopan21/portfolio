/**
 * Data Utilities
 * 
 * Centralized data fetching and filtering utilities.
 * This abstraction layer makes it easy to swap data sources
 * (static files → CMS → API) without changing component code.
 */

import type {
  Experience,
  ExperienceFilters,
  Project,
  ProjectFilters,
  QueryOptions,
  Skill,
  SkillFilters,
  SkillGroup
} from '@/types/data';

// Import data sources (will be replaced with CMS/API calls)
import { experience } from './experience';
import { projects } from './projects';
import { skillCategories, skills } from './skills';

// =============================================================================
// PROJECT UTILITIES
// =============================================================================

/**
 * Get all projects with optional filtering and sorting
 */
export function getProjects(
  filters?: ProjectFilters,
  options?: QueryOptions
): Project[] {
  let filtered = [...projects];

  // Apply filters
  if (filters) {
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }
    if (filters.featured !== undefined) {
      filtered = filtered.filter((p) => p.featured === filters.featured);
    }
    if (filters.year) {
      filtered = filtered.filter((p) => p.year === filters.year);
    }
    if (filters.status) {
      filtered = filtered.filter((p) => p.status === filters.status);
    }
    if (filters.technologies && filters.technologies.length > 0) {
      filtered = filtered.filter((p) =>
        filters.technologies!.some((tech) =>
          p.technologies.some((pt) =>
            pt.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }
  }

  // Apply sorting
  if (options?.sortBy) {
    filtered.sort((a, b) => {
      const aValue = a[options.sortBy as keyof Project];
      const bValue = b[options.sortBy as keyof Project];

      if (aValue === undefined || bValue === undefined) return 0;

      const order = options.sortOrder === 'asc' ? 1 : -1;
      return aValue > bValue ? order : -order;
    });
  } else {
    // Default: featured first, then by year descending
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.year - a.year;
    });
  }

  // Apply pagination
  if (options?.limit) {
    const start = options.offset || 0;
    filtered = filtered.slice(start, start + options.limit);
  }

  return filtered;
}

/**
 * Get a single project by ID or slug
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id || p.slug === id);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(limit?: number): Project[] {
  return getProjects({ featured: true }, { limit });
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(
  category: Project['category'],
  limit?: number
): Project[] {
  return getProjects({ category }, { limit });
}

/**
 * Get projects by technology
 */
export function getProjectsByTechnology(
  technology: string,
  limit?: number
): Project[] {
  return getProjects({ technologies: [technology] }, { limit });
}

/**
 * Get all unique technologies used across projects
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((p) => p.technologies.forEach((tech) => techSet.add(tech)));
  return Array.from(techSet).sort();
}

/**
 * Get all unique project categories
 */
export function getProjectCategories(): Array<Project['category']> {
  const categories = new Set(projects.map((p) => p.category));
  return Array.from(categories);
}

/**
 * Get projects count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  return projects.reduce(
    (acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
}

// =============================================================================
// EXPERIENCE UTILITIES
// =============================================================================

/**
 * Get all experience entries with optional filtering
 */
export function getExperience(
  filters?: ExperienceFilters,
  options?: QueryOptions
): Experience[] {
  let filtered = [...experience];

  // Apply filters
  if (filters) {
    if (filters.current !== undefined) {
      filtered = filtered.filter((e) => e.current === filters.current);
    }
    if (filters.employmentType) {
      filtered = filtered.filter((e) => e.employmentType === filters.employmentType);
    }
  }

  // Sort by start date (most recent first)
  filtered.sort((a, b) => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return bDate.getTime() - aDate.getTime();
  });

  // Apply pagination
  if (options?.limit) {
    const start = options.offset || 0;
    filtered = filtered.slice(start, start + options.limit);
  }

  return filtered;
}

/**
 * Get current/active positions
 */
export function getCurrentExperience(): Experience[] {
  return getExperience({ current: true });
}

/**
 * Get total years of experience
 */
export function getTotalYearsOfExperience(): number {
  const sortedExp = [...experience].sort((a, b) => {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  if (sortedExp.length === 0) return 0;

  const firstJob = new Date(sortedExp[0].startDate);
  const now = new Date();

  const years = (now.getTime() - firstJob.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.round(years * 10) / 10; // Round to 1 decimal
}

/**
 * Format date range for display
 */
export function formatExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.endDate ? new Date(exp.endDate) : new Date();

  const startStr = start.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  const endStr = exp.current
    ? 'Present'
    : end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  // Calculate duration
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let duration = '';
  if (years > 0) duration += `${years} yr${years > 1 ? 's' : ''}`;
  if (remainingMonths > 0) {
    if (duration) duration += ' ';
    duration += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  }

  return `${startStr} - ${endStr} · ${duration}`;
}

// =============================================================================
// SKILL UTILITIES
// =============================================================================

/**
 * Get all skills with optional filtering
 */
export function getSkills(filters?: SkillFilters): Skill[] {
  let filtered = [...skills];

  if (filters) {
    if (filters.category) {
      filtered = filtered.filter((s) => s.category === filters.category);
    }
    if (filters.minLevel) {
      filtered = filtered.filter((s) => s.level && s.level >= filters.minLevel!);
    }
  }

  // Sort by level (highest first), then by name
  filtered.sort((a, b) => {
    if (a.level && b.level) {
      if (a.level !== b.level) return b.level - a.level;
    }
    return a.name.localeCompare(b.name);
  });

  return filtered;
}

/**
 * Get skills grouped by category
 */
export function getSkillsByCategory(): SkillGroup[] {
  return skillCategories.map((category) => ({
    category,
    label: getCategoryLabel(category),
    skills: getSkills({ category }),
  }));
}

/**
 * Get user-friendly category label
 */
function getCategoryLabel(category: Skill['category']): string {
  const labels: Record<Skill['category'], string> = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    mobile: 'Mobile Development',
    devops: 'DevOps & Cloud',
    design: 'Design & UI/UX',
    tools: 'Tools & Platforms',
    'soft-skills': 'Soft Skills',
    other: 'Other',
  };
  return labels[category] || category;
}

/**
 * Get top skills (by level)
 */
export function getTopSkills(limit = 6): Skill[] {
  return getSkills()
    .filter((s) => s.level)
    .sort((a, b) => (b.level || 0) - (a.level || 0))
    .slice(0, limit);
}

// =============================================================================
// SEARCH UTILITIES
// =============================================================================

/**
 * Search across projects, skills, and experience
 */
export function searchPortfolio(query: string): {
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
} {
  const lowerQuery = query.toLowerCase();

  return {
    projects: projects.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.technologies.some((t) => t.toLowerCase().includes(lowerQuery)) ||
        p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    ),
    skills: skills.filter((s) => s.name.toLowerCase().includes(lowerQuery)),
    experience: experience.filter(
      (e) =>
        e.company.toLowerCase().includes(lowerQuery) ||
        e.position.toLowerCase().includes(lowerQuery) ||
        e.technologies.some((t) => t.toLowerCase().includes(lowerQuery))
    ),
  };
}

// =============================================================================
// STATS UTILITIES
// =============================================================================

/**
 * Get portfolio statistics
 */
export function getPortfolioStats() {
  return {
    totalProjects: projects.length,
    featuredProjects: projects.filter((p) => p.featured).length,
    totalSkills: skills.length,
    yearsOfExperience: getTotalYearsOfExperience(),
    technologies: getAllTechnologies().length,
  };
}

// =============================================================================
// CMS ADAPTER (Future Implementation)
// =============================================================================

/**
 * Example of how to create a CMS adapter
 * 
 * export async function getProjectsFromCMS(filters?: ProjectFilters) {
 *   const response = await fetch('/api/projects', {
 *     method: 'POST',
 *     body: JSON.stringify(filters),
 *   });
 *   return response.json();
 * }
 * 
 * Then update getProjects to use:
 * if (process.env.USE_CMS === 'true') {
 *   return getProjectsFromCMS(filters);
 * }
 * return getProjectsStatic(filters);
 */

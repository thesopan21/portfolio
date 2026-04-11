/**
 * Portfolio Data - Central Export
 * 
 * All portfolio data and utilities exported from one place.
 * This makes it easy to import data throughout the application.
 * 
 * Usage:
 * import { projects, getProjects, skills } from '@/data';
 */

// Core Data
export { experience, getCurrentExperience, getTotalYearsOfExperience } from "./experience";
export { featuredProjectCount, getProjectBySlug, projectCount, projects } from "./projects";
export { getSkillsByCategory, getTopSkills, skillCategories, skills } from "./skills";
export { socialLinks } from "./social-links";

// Data Utilities (for querying and filtering)
export {
  formatExperienceDuration, getAllTechnologies,
  // Experience utilities
  getExperience, getFeaturedProjects, getPortfolioStats, getProjectById, getProjectCategories,
  getProjectCountByCategory,
  // Project utilities
  getProjects, getProjectsByCategory,
  getProjectsByTechnology,
  // Skill utilities
  getSkills,
  getSkillsByCategory as getSkillsByCategoryFiltered,

  // Search & Stats
  searchPortfolio
} from "./utils";

// Re-export types for convenience
export type {
  Experience, ExperienceFilters, Project, ProjectFilters, QueryOptions, Skill, SkillFilters, SkillGroup,
  SocialLink
} from "@/types/data";


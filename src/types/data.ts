/**
 * Portfolio Data Types
 * 
 * These types define the structure of all portfolio data.
 * Designed to be CMS-agnostic for easy migration to headless CMS.
 */

// =============================================================================
// BASE TYPES
// =============================================================================

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  slug?: string;
  published?: boolean;
}

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

// =============================================================================
// PROJECT TYPES
// =============================================================================

export type ProjectCategory = "web" | "mobile" | "design" | "ai" | "other";
export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectLink {
  type: "demo" | "github" | "figma" | "app-store" | "play-store" | "custom";
  url: string;
  label?: string;
}

export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[]; // Additional images
  tags: string[];
  technologies: string[];
  links?: ProjectLink[]; // More flexible than separate demoUrl/githubUrl
  demoUrl?: string; // Backward compatibility
  githubUrl?: string; // Backward compatibility
  category: ProjectCategory;
  year: number;
  featured?: boolean;
  status?: ProjectStatus;
  challenges?: string;
  solutions?: string;
  metrics?: ProjectMetric[];
  seo?: SEOMetadata;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

// =============================================================================
// EXPERIENCE TYPES
// =============================================================================

export type EmploymentType = "full-time" | "part-time" | "contract" | "freelance" | "internship";

export interface Experience extends BaseEntity {
  company: string;
  position: string;
  description: string;
  startDate: string; // YYYY-MM format
  endDate?: string; // YYYY-MM format
  current?: boolean;
  employmentType?: EmploymentType;
  location?: string;
  remote?: boolean;
  technologies: string[];
  achievements?: string[]; // Bullet points of achievements
  logo?: string;
  companyUrl?: string;
}

// =============================================================================
// SKILL TYPES
// =============================================================================

export type SkillCategory = "frontend" | "backend" | "mobile" | "devops" | "design" | "tools" | "soft-skills" | "other";
export type SkillLevel = 1 | 2 | 3 | 4 | 5; // 1=Beginner, 5=Expert

export interface Skill extends BaseEntity {
  name: string;
  category: SkillCategory;
  level?: SkillLevel; // 1-5 rating
  yearsOfExperience?: number;
  icon?: string;
  color?: string; // For visual grouping
  order?: number; // For custom ordering
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

// =============================================================================
// TESTIMONIAL TYPES
// =============================================================================

export interface Testimonial extends BaseEntity {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating?: number; // 1-5
  date?: string;
  relationship?: string; // e.g., "Worked together at Company X"
  linkedinUrl?: string;
}

// =============================================================================
// SOCIAL LINK TYPES
// =============================================================================

export type SocialPlatform = "github" | "linkedin" | "twitter" | "email" | "website" | "dribbble" | "behance" | "medium" | "youtube" | "instagram";

export interface SocialLink {
  platform: SocialPlatform | string;
  url: string;
  icon?: string;
  label?: string;
  primary?: boolean; // Highlight primary contact methods
}

// =============================================================================
// EDUCATION TYPES
// =============================================================================

export interface Education extends BaseEntity {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  gpa?: string;
  description?: string;
  achievements?: string[];
  logo?: string;
}

// =============================================================================
// CERTIFICATION TYPES
// =============================================================================

export interface Certification extends BaseEntity {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}

// =============================================================================
// BLOG POST TYPES (Future)
// =============================================================================

export interface BlogPost extends BaseEntity {
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  readTime?: number; // in minutes
  publishedAt?: string;
  views?: number;
  seo?: SEOMetadata;
}

// =============================================================================
// CONTACT FORM TYPES
// =============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string;
  phone?: string;
}

// =============================================================================
// PORTFOLIO CONFIG TYPES
// =============================================================================

export interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    location?: string;
    availability?: "available" | "busy" | "unavailable";
    email: string;
    phone?: string;
    resume?: string;
  };
  seo: SEOMetadata;
  features: {
    blog?: boolean;
    testimonials?: boolean;
    analytics?: boolean;
    contactForm?: boolean;
  };
}

// =============================================================================
// QUERY & FILTER TYPES (for data utilities)
// =============================================================================

export interface QueryOptions {
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface ProjectFilters {
  category?: ProjectCategory;
  featured?: boolean;
  year?: number;
  technologies?: string[];
  status?: ProjectStatus;
}

export interface SkillFilters {
  category?: SkillCategory;
  minLevel?: SkillLevel;
}

export interface ExperienceFilters {
  current?: boolean;
  employmentType?: EmploymentType;
}

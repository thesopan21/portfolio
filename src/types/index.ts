// Global type definitions

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// Re-export data types for convenience
export type {
  Experience, Project, Skill, SocialLink, Testimonial
} from "./data";


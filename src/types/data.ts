export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "design" | "other";
  year: number;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  technologies: string[];
  logo?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level?: number; // 0-100
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

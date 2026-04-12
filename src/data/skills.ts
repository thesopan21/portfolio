import type { Skill, SkillCategory } from "@/types/data";

/**
 * Portfolio Skills Data
 * 
 * Rate skills honestly (1-5):
 * 1 = Beginner (basic understanding)
 * 2 = Intermediate (can work with supervision)
 * 3 = Competent (can work independently)
 * 4 = Advanced (can mentor others)
 * 5 = Expert (deep expertise, thought leader)
 */

export const skills: Skill[] = [
  // Frontend Development
  {
    id: "react-nextjs",
    name: "React & Next.js",
    category: "frontend",
    level: 5,
    yearsOfExperience: 5,
    icon: "react",
    color: "#61DAFB",
    published: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    level: 5,
    yearsOfExperience: 3,
    icon: "tailwind",
    color: "#06B6D4",
    published: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 5,
    yearsOfExperience: 4,
    icon: "typescript",
    color: "#3178C6",
    published: false,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    level: 5,
    yearsOfExperience: 6,
    icon: "javascript",
    color: "#F7DF1E",
    published: false,
  },

  // Backend Development
  {
    id: "nodejs-go",
    name: "Node.js / Go",
    category: "backend",
    level: 4,
    yearsOfExperience: 4,
    icon: "nodejs",
    color: "#339933",
    published: true,
  },
  {
    id: "postgresql-redis",
    name: "PostgreSQL / Redis",
    category: "backend",
    level: 4,
    yearsOfExperience: 3,
    icon: "postgresql",
    color: "#4169E1",
    published: true,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend",
    level: 4,
    yearsOfExperience: 3,
    icon: "mongodb",
    color: "#47A248",
    published: false,
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "backend",
    level: 4,
    yearsOfExperience: 2,
    icon: "prisma",
    color: "#2D3748",
    published: false,
  },

  // Mobile Development
  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    level: 5,
    yearsOfExperience: 3,
    icon: "react",
    color: "#61DAFB",
    published: true,
  },
  {
    id: "expo",
    name: "Expo",
    category: "mobile",
    level: 4,
    yearsOfExperience: 2,
    icon: "expo",
    published: false,
  },

  // DevOps & Cloud
  {
    id: "git",
    name: "Git",
    category: "devops",
    level: 5,
    yearsOfExperience: 6,
    icon: "git",
    color: "#F05032",
    published: true,
  },
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    level: 4,
    yearsOfExperience: 2,
    icon: "docker",
    color: "#2496ED",
    published: true,
  },
  {
    id: "aws",
    name: "AWS",
    category: "devops",
    level: 3,
    yearsOfExperience: 2,
    icon: "aws",
    color: "#FF9900",
    published: false,
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "devops",
    level: 4,
    yearsOfExperience: 2,
    icon: "github",
    published: true,
  },

  // Design & Tools
  {
    id: "figma",
    name: "Figma",
    category: "design",
    level: 5,
    yearsOfExperience: 3,
    icon: "figma",
    color: "#F24E1E",
    published: true,
  },
  {
    id: "photoshop",
    name: "Photoshop",
    category: "design",
    level: 3,
    yearsOfExperience: 4,
    icon: "photoshop",
    published: false,
  },
];

// Skill categories with labels
export const skillCategories: SkillCategory[] = [
  "frontend",
  "backend",
  "mobile",
  "devops",
  "design",
  "tools",
];

// Helper functions
export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter((skill) => skill.category === category);

export const getTopSkills = (limit: number = 6): Skill[] =>
  skills
    .filter((skill) => skill.level && skill.level >= 4)
    .sort((a, b) => (b.level || 0) - (a.level || 0))
    .slice(0, limit);

export const getTotalSkills = (): number => skills.length;

export const getSkillByName = (name: string): Skill | undefined =>
  skills.find((skill) => skill.name.toLowerCase() === name.toLowerCase());

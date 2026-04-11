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
    id: "react",
    name: "React",
    category: "frontend",
    level: 5,
    yearsOfExperience: 5,
    icon: "react",
    color: "#61DAFB",
    published: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 5,
    yearsOfExperience: 3,
    icon: "nextjs",
    color: "#000000",
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
    published: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    level: 5,
    yearsOfExperience: 6,
    icon: "javascript",
    color: "#F7DF1E",
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
    id: "html",
    name: "HTML5",
    category: "frontend",
    level: 5,
    yearsOfExperience: 6,
    icon: "html5",
    published: true,
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    level: 5,
    yearsOfExperience: 6,
    icon: "css3",
    published: true,
  },
  {
    id: "redux",
    name: "Redux",
    category: "frontend",
    level: 4,
    yearsOfExperience: 3,
    icon: "redux",
    color: "#764ABC",
    published: true,
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    level: 3,
    yearsOfExperience: 2,
    icon: "vuejs",
    color: "#4FC08D",
    published: true,
  },

  // Backend Development
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: 4,
    yearsOfExperience: 4,
    icon: "nodejs",
    color: "#339933",
    published: true,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
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
    published: true,
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "backend",
    level: 4,
    yearsOfExperience: 2,
    icon: "prisma",
    color: "#2D3748",
    published: true,
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "backend",
    level: 3,
    yearsOfExperience: 2,
    icon: "graphql",
    color: "#E10098",
    published: true,
  },
  {
    id: "rest-api",
    name: "REST APIs",
    category: "backend",
    level: 5,
    yearsOfExperience: 5,
    published: true,
  },

  // Mobile Development
  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    level: 4,
    yearsOfExperience: 2,
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
    published: true,
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
    level: 3,
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
    published: true,
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "devops",
    level: 4,
    yearsOfExperience: 3,
    icon: "vercel",
    published: true,
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
    level: 4,
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
    published: true,
  },

  // Tools & Platforms
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    level: 5,
    yearsOfExperience: 6,
    icon: "vscode",
    published: true,
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    level: 4,
    yearsOfExperience: 4,
    icon: "postman",
    published: true,
  },
  {
    id: "jira",
    name: "Jira",
    category: "tools",
    level: 4,
    yearsOfExperience: 3,
    icon: "jira",
    published: true,
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

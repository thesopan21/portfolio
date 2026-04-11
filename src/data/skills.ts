import type { Skill } from "@/types/data";

export const skills: Skill[] = [
  // Frontend
  {
    id: "1",
    name: "React",
    category: "frontend",
    level: 5,
    icon: "react",
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    level: 5,
    icon: "nextjs",
  },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    level: 4,
    icon: "typescript",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    category: "frontend",
    level: 5,
    icon: "tailwind",
  },

  // Backend
  {
    id: "5",
    name: "Node.js",
    category: "backend",
    level: 4,
    icon: "nodejs",
  },
  {
    id: "6",
    name: "PostgreSQL",
    category: "backend",
    level: 3,
    icon: "postgresql",
  },

  // Tools
  {
    id: "7",
    name: "Git",
    category: "tools",
    level: 4,
    icon: "git",
  },
  {
    id: "8",
    name: "Docker",
    category: "tools",
    level: 3,
    icon: "docker",
  },
];

export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((skill) => skill.category === category);

export const skillCategories = [
  "frontend",
  "backend",
  "tools",
  "other",
] as const;

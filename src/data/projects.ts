import type { Project } from "@/types/data";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with admin dashboard",
    longDescription:
      "Built a complete e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image: "/projects/ecommerce.jpg",
    tags: ["Featured", "Full-Stack"],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project",
    category: "web",
    year: 2024,
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management application",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Real-time"],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://tasks.example.com",
    category: "web",
    year: 2024,
  },
  // Add more projects...
];

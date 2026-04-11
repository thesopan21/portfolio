import type { Project } from "@/types/data";

/**
 * Portfolio Projects Data
 * 
 * Add your projects here. Each project should include:
 * - Compelling description and images
 * - Technologies used
 * - Links to demo/code
 * - Clear categorization
 * 
 * TIP: Set `featured: true` for your best work
 */

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with admin dashboard, real-time inventory, and payment integration",
    longDescription:
      "Built a complete e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe. Features include real-time inventory updates, order tracking, admin analytics dashboard, and responsive design for mobile shopping.",
    image: "/projects/ecommerce.jpg",
    gallery: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
    tags: ["Featured", "Full-Stack", "E-Commerce"],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    links: [
      { type: "demo", url: "https://demo.example.com", label: "Live Demo" },
      { type: "github", url: "https://github.com/yourusername/ecommerce-platform" },
    ],
    category: "web",
    year: 2024,
    featured: true,
    status: "completed",
    challenges: "Handling real-time inventory updates across multiple concurrent users while maintaining data consistency.",
    solutions: "Implemented optimistic locking and WebSocket connections for live updates, with fallback polling for older browsers.",
    metrics: [
      { label: "Users", value: "10K+", description: "Active monthly users" },
      { label: "Performance", value: "95+", description: "Lighthouse score" },
      { label: "Uptime", value: "99.9%", description: "System availability" },
    ],
    published: true,
  },
  {
    id: "task-management-app",
    slug: "task-management-app",
    title: "Task Management App",
    description: "Real-time collaborative task management application with team workspaces",
    longDescription:
      "A Trello-inspired task management application with real-time collaboration features. Teams can create boards, add tasks, assign members, and track progress. Built with WebSockets for instant updates across all connected clients.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Real-time", "Collaboration"],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/yourusername/task-app",
    category: "web",
    year: 2024,
    status: "completed",
    metrics: [
      { label: "Teams", value: "500+", description: "Active teams using the platform" },
      { label: "Response Time", value: "<100ms", description: "Average real-time update latency" },
    ],
    published: true,
  },
  {
    id: "ai-content-generator",
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using GPT-4 for marketing copy and blog posts",
    image: "/projects/ai-tool.jpg",
    tags: ["AI", "SaaS", "Automation"],
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase", "Stripe"],
    demoUrl: "https://ai-content.example.com",
    category: "ai",
    year: 2024,
    featured: true,
    status: "in-progress",
    challenges: "Managing API costs while providing a responsive user experience and maintaining content quality.",
    solutions: "Implemented request caching, rate limiting, and tiered subscription plans with usage quotas.",
    published: true,
  },
  {
    id: "fitness-tracking-mobile",
    slug: "fitness-tracking-mobile",
    title: "Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with workout plans and nutrition logging",
    image: "/projects/fitness-app.jpg",
    tags: ["Mobile", "Health", "React Native"],
    technologies: ["React Native", "Expo", "Firebase", "TypeScript", "Redux Toolkit"],
    links: [
      { type: "app-store", url: "https://apps.apple.com/app/fitness-tracker" },
      { type: "play-store", url: "https://play.google.com/store/apps/fitness-tracker" },
    ],
    category: "mobile",
    year: 2023,
    status: "completed",
    metrics: [
      { label: "Downloads", value: "50K+", description: "Total app downloads" },
      { label: "Rating", value: "4.8★", description: "Average user rating" },
    ],
    published: true,
  },
  {
    id: "portfolio-design-system",
    slug: "design-system",
    title: "Design System",
    description: "Comprehensive design system and component library for a SaaS product",
    image: "/projects/design-system.jpg",
    tags: ["Design", "Components", "Documentation"],
    technologies: ["React", "Storybook", "Tailwind CSS", "Radix UI", "TypeScript"],
    demoUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/yourusername/design-system",
    links: [
      { type: "demo", url: "https://design-system.example.com" },
      { type: "figma", url: "https://figma.com/design-system" },
    ],
    category: "design",
    year: 2023,
    featured: true,
    status: "completed",
    published: true,
  },
  {
    id: "analytics-dashboard",
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets and data visualization",
    image: "/projects/analytics.jpg",
    tags: ["Dashboard", "Data Viz", "Real-time"],
    technologies: ["Next.js", "Chart.js", "PostgreSQL", "WebSockets", "TailwindCSS"],
    category: "web",
    year: 2023,
    status: "completed",
    published: true,
  },
];

// Helper function to get a project by slug (useful for dynamic routes)
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug || p.id === slug);
};

// Export count for easy access
export const projectCount = projects.length;
export const featuredProjectCount = projects.filter((p) => p.featured).length;

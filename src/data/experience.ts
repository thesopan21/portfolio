import type { Experience } from "@/types/data";

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    position: "Senior Full-Stack Developer",
    description:
      "Led development of microservices architecture serving 100k+ users. Mentored junior developers and drove technical decisions.",
    startDate: "2022-01",
    current: true,
    technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    id: "2",
    company: "Startup XYZ",
    position: "Frontend Developer",
    description:
      "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.",
    startDate: "2020-06",
    endDate: "2021-12",
    technologies: ["React", "TypeScript", "Redux", "Styled Components"],
  },
  // Add more experiences...
];

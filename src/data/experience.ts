import type { Experience } from "@/types/data";

/**
 * Work Experience Timeline
 * 
 * List your professional experience in reverse chronological order.
 * Use YYYY-MM format for dates (e.g., "2024-01" for January 2024).
 * 
 * Tips:
 * - Focus on achievements and impact, not just responsibilities
 * - Use metrics where possible (users served, performance improvements, etc.)
 * - Highlight technologies used in each role
 */

export const experience: Experience[] = [
  {
    id: "tech-company-senior",
    slug: "tech-company-senior-fullstack",
    company: "Tech Company Inc.",
    position: "Senior Full-Stack Developer",
    description:
      "Led development of microservices architecture serving 100k+ users. Spearheaded migration from monolith to microservices, reducing deployment time by 70%. Mentored team of 5 junior developers and drove technical decisions for the engineering team.",
    startDate: "2022-01",
    current: true,
    employmentType: "full-time",
    location: "San Francisco, CA",
    remote: true,
    technologies: [
      "Next.js",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "TypeScript",
      "GraphQL",
    ],
    achievements: [
      "Architected and led migration from monolith to microservices, improving deployment frequency from monthly to daily",
      "Reduced API response time by 60% through database optimization and caching strategies",
      "Established code review processes and coding standards, improving code quality and team velocity",
      "Mentored 5 junior developers, with 3 promoted to mid-level positions",
      "Led implementation of CI/CD pipeline, reducing deployment time from 2 hours to 15 minutes",
    ],
    logo: "/logos/tech-company.png",
    companyUrl: "https://techcompany.example.com",
    published: true,
  },
  {
    id: "startup-xyz-frontend",
    slug: "startup-xyz-frontend-developer",
    company: "Startup XYZ",
    position: "Frontend Developer",
    description:
      "Built responsive web applications using React and TypeScript for a fast-growing SaaS startup. Collaborated closely with design team to implement pixel-perfect UIs and smooth user experiences. Contributed to the company's Series A funding success.",
    startDate: "2020-06",
    endDate: "2021-12",
    employmentType: "full-time",
    location: "New York, NY",
    remote: false,
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Styled Components",
      "Jest",
      "React Testing Library",
      "Webpack",
    ],
    achievements: [
      "Built and launched 3 major product features that increased user engagement by 40%",
      "Implemented comprehensive component library used across 5+ products",
      "Improved application performance by 50% through code splitting and lazy loading",
      "Increased test coverage from 30% to 85%, reducing production bugs by 60%",
      "Collaborated with design team to create and maintain design system",
    ],
    logo: "/logos/startup-xyz.png",
    published: true,
  },
  {
    id: "freelance-web-developer",
    slug: "freelance-web-developer",
    company: "Self-Employed",
    position: "Freelance Web Developer",
    description:
      "Delivered custom web solutions for small businesses and startups. Specialized in e-commerce, landing pages, and web applications. Managed full project lifecycle from requirements gathering to deployment and maintenance.",
    startDate: "2019-01",
    endDate: "2020-05",
    employmentType: "freelance",
    location: "Remote",
    remote: true,
    technologies: [
      "React",
      "Node.js",
      "WordPress",
      "Shopify",
      "MySQL",
      "AWS",
      "HTML/CSS",
      "JavaScript",
    ],
    achievements: [
      "Successfully delivered 15+ projects for clients across various industries",
      "Maintained 5-star rating with 100% client satisfaction",
      "Built e-commerce solutions generating $500K+ in revenue for clients",
      "Established efficient project management and communication workflows",
    ],
    published: true,
  },
  {
    id: "digital-agency-intern",
    slug: "digital-agency-web-developer-intern",
    company: "Digital Agency Co.",
    position: "Web Developer Intern",
    description:
      "Assisted in developing client websites and marketing campaigns. Learned modern web development practices and agile methodologies. Contributed to multiple high-profile client projects.",
    startDate: "2018-06",
    endDate: "2018-12",
    employmentType: "internship",
    location: "Austin, TX",
    remote: false,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"],
    achievements: [
      "Contributed to 10+ client websites during 6-month internship",
      "Received stellar performance review and full-time offer (declined for school)",
      "Implemented responsive designs that improved mobile traffic by 35%",
    ],
    published: true,
  },
];

// Helper functions
export const getCurrentExperience = (): Experience[] =>
  experience.filter((exp) => exp.current);

export const getTotalYearsOfExperience = (): number => {
  if (experience.length === 0) return 0;

  const sortedExp = [...experience].sort((a, b) => {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const firstJob = new Date(sortedExp[0].startDate);
  const now = new Date();

  const years = (now.getTime() - firstJob.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(years);
};

export const experienceCount = experience.length;

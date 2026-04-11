import type { Education } from "@/types/data";

/**
 * Education History
 * 
 * List your educational background including:
 * - Degrees and certifications
 * - Universities and institutions
 * - Achievements and honors
 */

export const education: Education[] = [
  {
    id: "university-bs-cs",
    slug: "university-computer-science",
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2015-09",
    endDate: "2019-05",
    gpa: "3.8",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and web development. Member of Computer Science Club and Hackathon Team.",
    achievements: [
      "Dean's List all semesters",
      "Winner of University Hackathon 2018",
      "Teaching Assistant for Data Structures course",
      "Research project on Machine Learning applications",
    ],
    logo: "/logos/university.png",
    published: true,
  },
  {
    id: "bootcamp-fullstack",
    slug: "coding-bootcamp-fullstack",
    institution: "Coding Bootcamp",
    degree: "Certificate",
    field: "Full-Stack Web Development",
    startDate: "2018-01",
    endDate: "2018-06",
    description:
      "Intensive 6-month program covering modern web development stack. Built 10+ projects including full-stack applications.",
    achievements: [
      "Top performer in cohort",
      "Final project featured in bootcamp showcase",
    ],
    published: true,
  },
];

export const educationCount = education.length;

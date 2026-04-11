import type { Certification } from "@/types/data";

/**
 * Professional Certifications
 * 
 * List your professional certifications and credentials.
 * Include verification links where possible.
 */

export const certifications: Certification[] = [
  {
    id: "aws-solutions-architect",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    issueDate: "2023-06",
    expiryDate: "2026-06",
    credentialId: "ABC123XYZ",
    credentialUrl: "https://aws.amazon.com/verification",
    logo: "/logos/aws.png",
    published: true,
  },
  {
    id: "google-mobile-web-specialist",
    name: "Google Mobile Web Specialist",
    issuer: "Google",
    issueDate: "2022-03",
    expiryDate: "2025-03",
    credentialId: "DEF456ABC",
    credentialUrl: "https://google.com/certification/verification",
    logo: "/logos/google.png",
    published: true,
  },
  {
    id: "meta-frontend-developer",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (via Coursera)",
    issueDate: "2021-11",
    credentialUrl: "https://coursera.org/verify/professional-cert/ABC123",
    logo: "/logos/meta.png",
    published: true,
  },
];

export const certificationCount = certifications.length;

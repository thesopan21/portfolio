import type { Testimonial } from "@/types/data";

/**
 * Testimonials & Recommendations
 * 
 * Showcase feedback from colleagues, clients, and managers.
 * Ask permission before using someone's testimonial!
 */

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "John Smith",
    role: "Engineering Manager",
    company: "Tech Company Inc.",
    content:
      "Outstanding developer who consistently delivers high-quality code. Their ability to break down complex problems and mentor junior developers has been invaluable to our team. Led our microservices migration which was a huge success.",
    image: "/testimonials/john-smith.jpg",
    rating: 5,
    date: "2024-01",
    relationship: "Direct manager at Tech Company Inc.",
    linkedinUrl: "https://linkedin.com/in/johnsmith",
    published: true,
  },
  {
    id: "testimonial-2",
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "Startup XYZ",
    content:
      "A pleasure to work with! Great attention to detail and always willing to collaborate on finding the best solution. The components they built were pixel-perfect and highly reusable.",
    image: "/testimonials/sarah-johnson.jpg",
    rating: 5,
    date: "2021-11",
    relationship: "Collaborated on multiple projects at Startup XYZ",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    published: true,
  },
  {
    id: "testimonial-3",
    name: "Michael Chen",
    role: "Founder",
    company: "E-commerce Startup",
    content:
      "Delivered our e-commerce platform ahead of schedule and within budget. Very professional, communicative, and technically skilled. Would definitely work together again!",
    rating: 5,
    date: "2020-03",
    relationship: "Client for freelance e-commerce project",
    published: true,
  },
  {
    id: "testimonial-4",
    name: "Emily Davis",
    role: "Senior Developer",
    company: "Tech Company Inc.",
    content:
      "Fantastic mentor and teammate. Always takes time to explain concepts thoroughly and write clean, well-documented code. Made significant improvements to our codebase and development practices.",
    image: "/testimonials/emily-davis.jpg",
    rating: 5,
    date: "2023-08",
    relationship: "Colleague at Tech Company Inc.",
    linkedinUrl: "https://linkedin.com/in/emilydavis",
    published: true,
  },
];

export const testimonialCount = testimonials.length;

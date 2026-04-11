"use client";

import { projects } from "@/data";
import { ProjectCard } from "@/features/projects";

export default function Projects() {
  // Show only featured projects or first 6
  const displayProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in web
          development and design.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

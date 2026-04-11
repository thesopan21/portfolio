import { cn } from "@/lib/utils";
import type { Project } from "@/types/data";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.description}</p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-700"
            >
              View Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

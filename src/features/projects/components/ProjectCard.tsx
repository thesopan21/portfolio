'use client';

import { fadeInUp, hoverLift } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const {
    title,
    description,
    image,
    tags,
    technologies,
    demoUrl,
    githubUrl,
    category,
    year,
  } = project;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={hoverLift}
      className={cn(
        'group relative',
        'bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden',
        'border border-white/20 backdrop-blur-xl',
        'shadow-xl hover:shadow-2xl',
        'transition-all duration-300',
        'flex flex-col h-full',
        'hover:border-purple-500/30'
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg',
                    'bg-white/10 backdrop-blur-sm',
                    'border border-white/20',
                    'text-white font-medium text-sm',
                    'hover:bg-white/20',
                    'transition-colors duration-200'
                  )}
                  aria-label={`View ${title} on GitHub`}
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </motion.button>
              </Link>
            )}

            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg',
                    'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm',
                    'shadow-lg shadow-purple-500/25',
                    'hover:shadow-xl hover:shadow-purple-500/40',
                    'transition-shadow duration-200'
                  )}
                  aria-label={`View ${title} live demo`}
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  Live Demo
                </motion.button>
              </Link>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm text-white text-xs font-semibold shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
              {year}
            </span>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'px-2.5 py-1 rounded-md text-xs font-medium',
                  'bg-white/5 text-gray-300',
                  'border border-white/10',
                  'transition-colors duration-200',
                  'hover:border-purple-500/50 hover:bg-white/10'
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Category indicator (subtle left border) */}
      <div
        className={cn(
          'absolute left-0 top-0 bottom-0 w-1',
          category === 'web' && 'bg-blue-500',
          category === 'mobile' && 'bg-purple-500',
          category === 'design' && 'bg-pink-500',
          category === 'other' && 'bg-gray-500'
        )}
      />
    </motion.article>
  );
}

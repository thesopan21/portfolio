'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard } from '@/features/projects';
import { projects } from '@/data/projects';
import type { Project } from '@/types/data';
import { cn } from '@/lib/utils';
import {
  staggerContainer,
  fadeInUp,
  scrollViewport,
} from '@/lib/animations';

const categories = ['all', 'web', 'mobile', 'design', 'other'] as const;
type Category = typeof categories[number];

const categoryLabels: Record<Category, string> = {
  all: 'All Projects',
  web: 'Web Apps',
  mobile: 'Mobile',
  design: 'Design',
  other: 'Other',
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Filter projects by category
  const filteredProjects = projects.filter((project) =>
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  // Sort to show featured first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year; // Then by year
  });

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A selection of projects I&apos;ve built, ranging from web applications
            to mobile experiences. Each project showcases different technologies
            and problem-solving approaches.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-6 py-2.5 rounded-lg font-medium text-sm',
                'border-2 transition-all duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                  : 'bg-surface text-foreground border-border hover:border-primary/50 hover:bg-surface-hover'
              )}
            >
              {categoryLabels[category]}
              <span className="ml-2 text-xs opacity-75">
                ({category === 'all' ? projects.length : projects.filter(p => p.category === category).length})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {sortedProjects.length > 0 ? (
          <motion.div
            key={activeCategory} // Re-trigger animation on category change
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {sortedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* View More CTA (optional) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more projects or collaborate?
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'inline-flex items-center gap-2 px-8 py-3 rounded-lg',
              'bg-surface border-2 border-border',
              'text-foreground font-medium',
              'hover:border-primary/50 hover:bg-surface-hover',
              'transition-colors duration-300'
            )}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

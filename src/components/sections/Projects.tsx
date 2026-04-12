'use client';

import { projects } from '@/data/projects';
import { ProjectCard } from '@/features/projects';
import {
  fadeInUp,
  scrollViewport,
  staggerContainer,
} from '@/lib/animations';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
      className="relative py-20 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className=" mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20 uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            A selection of projects I&apos;ve built, ranging from mobile applications
            to web experiences. Each project showcases different technologies
            and problem-solving approaches.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-6 py-2.5 rounded-lg font-medium text-xs uppercase tracking-wider',
                'border transition-all duration-300',
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-purple-500/50 hover:bg-white/10'
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
            <p className="text-gray-400 text-lg">
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

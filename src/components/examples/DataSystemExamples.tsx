/**
 * Example: Using the Portfolio Data System
 * 
 * This file demonstrates how to use the data utilities
 * in real components with various filtering and querying scenarios.
 */

'use client';

import {
  formatExperienceDuration,
  getAllTechnologies,
  getCurrentExperience,
  getExperience,
  getFeaturedProjects,
  getPortfolioStats,
  getProjectCountByCategory,
  // Utilities
  getProjects,
  getProjectsByCategory,
  getProjectsByTechnology,
  getSkills,
  getSkillsByCategory,
  getTopSkills,
  getTotalYearsOfExperience,
  // Data
  projects,
  searchPortfolio
} from '@/data';

// =============================================================================
// EXAMPLE 1: Featured Projects Component
// =============================================================================

export function FeaturedProjectsExample() {
  // Get top 3 featured projects
  const featuredProjects = getFeaturedProjects(3);

  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// EXAMPLE 2: Filterable Projects Component
// =============================================================================

export function FilterableProjectsExample() {
  const [category, setCategory] = React.useState<string>('all');

  // Get projects with filtering
  const filteredProjects = category === 'all'
    ? getProjects()
    : getProjectsByCategory(category as any);

  // Get counts for each category
  const counts = getProjectCountByCategory();

  return (
    <section>
      <div className="filters">
        <button onClick={() => setCategory('all')}>
          All ({projects.length})
        </button>
        <button onClick={() => setCategory('web')}>
          Web ({counts.web || 0})
        </button>
        <button onClick={() => setCategory('mobile')}>
          Mobile ({counts.mobile || 0})
        </button>
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id}>{project.title}</div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// EXAMPLE 3: Skills by Category Component
// =============================================================================

export function SkillsByCategoryExample() {
  const skillGroups = getSkillsByCategory();

  return (
    <section>
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h3>{group.label}</h3>
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <div key={skill.id} className="skill-badge">
                <span>{skill.name}</span>
                <span className="level">
                  {'★'.repeat(skill.level || 0)}
                  {'☆'.repeat(5 - (skill.level || 0))}
                </span>
                {skill.yearsOfExperience && (
                  <span className="years">{skill.yearsOfExperience} yrs</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

// =============================================================================
// EXAMPLE 4: Top Skills Highlight
// =============================================================================

export function TopSkillsExample() {
  const topSkills = getTopSkills(6);

  return (
    <div className="top-skills">
      <h3>Core Competencies</h3>
      <div className="skills">
        {topSkills.map((skill) => (
          <div
            key={skill.id}
            className="skill-item"
            style={{ borderColor: skill.color }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// EXAMPLE 5: Experience Timeline Component
// =============================================================================

export function ExperienceTimelineExample() {
  const allExperience = getExperience();
  const yearsOfExperience = getTotalYearsOfExperience();

  return (
    <section>
      <h2>Work Experience ({yearsOfExperience}+ years)</h2>

      <div className="timeline">
        {allExperience.map((exp) => (
          <article key={exp.id} className="timeline-item">
            <div className="company">
              {exp.logo && <img src={exp.logo} alt={exp.company} />}
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
            </div>

            <div className="duration">
              {formatExperienceDuration(exp)}
            </div>

            <p>{exp.description}</p>

            {exp.achievements && (
              <ul className="achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}

            <div className="technologies">
              {exp.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// EXAMPLE 6: Current Position Banner
// =============================================================================

export function CurrentPositionExample() {
  const currentJobs = getCurrentExperience();

  if (currentJobs.length === 0) return null;

  const current = currentJobs[0]; // Most recent

  return (
    <div className="current-position-banner">
      <span className="badge">Currently</span>
      <span className="position">{current.position}</span>
      <span className="at">at</span>
      <span className="company">{current.company}</span>
    </div>
  );
}

// =============================================================================
// EXAMPLE 7: Technology Filter Component
// =============================================================================

export function ProjectsByTechnologyExample() {
  const [selectedTech, setSelectedTech] = React.useState<string>('');

  // Get all unique technologies
  const allTechs = getAllTechnologies();

  // Get projects filtered by technology
  const filteredProjects = selectedTech
    ? getProjectsByTechnology(selectedTech)
    : projects;

  return (
    <section>
      <h2>Filter by Technology</h2>

      <select
        value={selectedTech}
        onChange={(e) => setSelectedTech(e.target.value)}
      >
        <option value="">All Technologies</option>
        {allTechs.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>

      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// EXAMPLE 8: Search Functionality
// =============================================================================

export function PortfolioSearchExample() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState({
    projects: [],
    skills: [],
    experience: [],
  });

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.length > 2) {
      const searchResults = searchPortfolio(searchQuery);
      setResults(searchResults as any);
    } else {
      setResults({ projects: [], skills: [], experience: [] });
    }
  };

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search projects, skills, experience..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {query && (
        <div className="search-results">
          {results.projects.length > 0 && (
            <div>
              <h3>Projects ({results.projects.length})</h3>
              {results.projects.map((project: any) => (
                <div key={project.id}>{project.title}</div>
              ))}
            </div>
          )}

          {results.skills.length > 0 && (
            <div>
              <h3>Skills ({results.skills.length})</h3>
              {results.skills.map((skill: any) => (
                <div key={skill.id}>{skill.name}</div>
              ))}
            </div>
          )}

          {results.experience.length > 0 && (
            <div>
              <h3>Experience ({results.experience.length})</h3>
              {results.experience.map((exp: any) => (
                <div key={exp.id}>{exp.company} - {exp.position}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// EXAMPLE 9: Stats Dashboard Component
// =============================================================================

export function PortfolioStatsExample() {
  const stats = getPortfolioStats();

  return (
    <div className="stats-dashboard">
      <div className="stat-card">
        <div className="stat-value">{stats.totalProjects}</div>
        <div className="stat-label">Projects Built</div>
      </div>

      <div className="stat-card">
        <div className="stat-value">{stats.yearsOfExperience}+</div>
        <div className="stat-label">Years Experience</div>
      </div>

      <div className="stat-card">
        <div className="stat-value">{stats.technologies}</div>
        <div className="stat-label">Technologies</div>
      </div>

      <div className="stat-card">
        <div className="stat-value">{stats.totalSkills}</div>
        <div className="stat-label">Skills Mastered</div>
      </div>
    </div>
  );
}

// =============================================================================
// EXAMPLE 10: Advanced Filtering
// =============================================================================

export function AdvancedFilteringExample() {
  // Get projects with multiple filters and sorting
  const recentWebProjects = getProjects(
    {
      category: 'web',
      featured: true,
    },
    {
      limit: 5,
      sortBy: 'year',
      sortOrder: 'desc',
    }
  );

  // Get high-level frontend skills
  const expertFrontendSkills = getSkills({
    category: 'frontend',
    minLevel: 4,
  });

  // Get recent experience
  const recentExperience = getExperience(
    undefined,
    { limit: 3 }
  );

  return (
    <div>
      <section>
        <h2>Recent Featured Web Projects</h2>
        {recentWebProjects.map((p) => (
          <div key={p.id}>{p.title} ({p.year})</div>
        ))}
      </section>

      <section>
        <h2>Expert Frontend Skills</h2>
        {expertFrontendSkills.map((s) => (
          <div key={s.id}>{s.name} - Level {s.level}</div>
        ))}
      </section>

      <section>
        <h2>Recent Experience</h2>
        {recentExperience.map((e) => (
          <div key={e.id}>{e.company}</div>
        ))}
      </section>
    </div>
  );
}

/**
 * Summary of Benefits:
 * 
 * ✅ Type-safe - TypeScript catches errors at compile time
 * ✅ Reusable - Import utilities anywhere in your app
 * ✅ Consistent - All data accessed through same patterns
 * ✅ Flexible - Easy filtering, sorting, and querying
 * ✅ Maintainable - Update data in one place
 * ✅ Scalable - Ready to migrate to CMS when needed
 * ✅ Testable - Utilities can be easily unit tested
 */

// Note: Add React import for useState
import React from 'react';

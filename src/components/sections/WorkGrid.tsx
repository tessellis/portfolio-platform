'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allCategories } from '@/lib/constants';
import { ProjectCategory } from '@/types/project';
import { MDXFile, WorkFrontmatter } from '@/lib/mdx';
import styles from './WorkGrid.module.css';

interface WorkGridProps {
  projects: MDXFile<WorkFrontmatter>[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.frontmatter.categories.includes(activeFilter));

  return (
    <div>
      <div className={styles.filterBar}>
        <button
          className={`${styles.filterPill} ${activeFilter === 'All' ? styles.active : ''}`}
          onClick={() => setActiveFilter('All')}
        >
          All
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            className={`${styles.filterPill} ${activeFilter === category ? styles.active : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className={styles.card}>
            <div className={styles.thumbnail} />
            <div className={styles.cardContent}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.description}</p>
              <div className={styles.tags}>
                {project.frontmatter.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className={styles.empty}>No projects match this filter yet.</p>
      )}
    </div>
  );
}
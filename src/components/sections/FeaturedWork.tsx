import Link from 'next/link';
import { projects } from '@/lib/projects';
import styles from './FeaturedWork.module.css';

export function FeaturedWork() {
  const featuredProjects = projects.filter((p) => p.featured || p.slug === 'project-two' || p.slug === 'project-three').slice(0, 3);

  return (
    <section className={`${styles.work} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Featured work</h2>
          <Link href="/work" className={styles.viewAll}>
            View all projects →
          </Link>
        </div>

        <div className={styles.bento}>
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`${styles.card} ${project.featured ? styles.featuredCard : ''}`}
            >
              <div className={styles.thumbnail} />
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
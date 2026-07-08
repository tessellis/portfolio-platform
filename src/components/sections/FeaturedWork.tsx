import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects';
import styles from './FeaturedWork.module.css';

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();

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
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`${styles.card} ${index === 0 ? styles.featuredCard : ''}`}
            >
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
      </div>
    </section>
  );
}
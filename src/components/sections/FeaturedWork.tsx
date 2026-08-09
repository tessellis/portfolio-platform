import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProjects } from '@/lib/projects';
import styles from './FeaturedWork.module.css';

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();
  const [primary, secondary] = featuredProjects;

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
          {primary && (
            <Link
              href={`/work/${primary.slug}`}
              className={`${styles.card} ${styles.primaryCard} glass-panel`}
            >
              {primary.frontmatter.heroImage ? (
                <div className={styles.thumbnailWrap}>
                  <Image
                    src={primary.frontmatter.heroImage}
                    alt={primary.frontmatter.title}
                    fill
                    className={styles.thumbnail}
                  />
                </div>
              ) : (
                <div className={styles.thumbnailPlaceholder} />
              )}
              <div className={styles.cardContent}>
                <h3>{primary.frontmatter.title}</h3>
                <p>{primary.frontmatter.description}</p>
                <div className={styles.tags}>
                  {primary.frontmatter.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )}

          {secondary && (
            <Link
              href={`/work/${secondary.slug}`}
              className={`${styles.card} ${styles.secondaryCard} glass-panel`}
            >
              {secondary.frontmatter.heroImage ? (
                <div className={styles.thumbnailWrap}>
                  <Image
                    src={secondary.frontmatter.heroImage}
                    alt={secondary.frontmatter.title}
                    fill
                    className={styles.thumbnail}
                  />
                </div>
              ) : (
                <div className={styles.thumbnailPlaceholder} />
              )}
              <div className={styles.cardContent}>
                <h3>{secondary.frontmatter.title}</h3>
                <p>{secondary.frontmatter.description}</p>
                <div className={styles.tags}>
                  {secondary.frontmatter.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
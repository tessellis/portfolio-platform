import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects';
import { FeaturedWorkBento } from './FeaturedWorkBento';
import styles from './FeaturedWork.module.css';

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();
  const [primary, secondary] = featuredProjects;

  return (
    <section className={styles.work}>
      <svg
        className={styles.wave}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,64 C280,120 480,0 720,32 C960,64 1160,112 1440,48 L1440,120 L0,120 Z" />
      </svg>

      <div className="container">
        <div className={styles.header}>
          <h2>Featured work</h2>
          <Link href="/work" className={styles.viewAll}>
            View all projects →
          </Link>
        </div>

        <FeaturedWorkBento primary={primary} secondary={secondary} />
      </div>
    </section>
  );
}
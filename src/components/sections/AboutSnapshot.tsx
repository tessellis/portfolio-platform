import Link from 'next/link';
import styles from './AboutSnapshot.module.css';

export function AboutSnapshot() {
  return (
    <section className={`${styles.about} section`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h2>About me</h2>
          <p>
            Placeholder bio paragraph. A few sentences about who I am,
            what I care about as a developer, and what drives my work.
            This section will break up the
            more technical parts of the landing page.
          </p>
          <Link href="/about" className={styles.link}>
            Read more →
          </Link>
        </div>
        <div className={styles.visual} />
      </div>
    </section>
  );
}
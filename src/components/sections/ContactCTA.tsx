import Link from 'next/link';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  return (
    <section className={`${styles.cta} section`}>
      <div className={`container ${styles.inner} glass-panel ${styles.panel}`}>
        <h2>Let&apos;s work together</h2>
        <p>Open to full-time roles and collaborations. Reach out anytime.</p>
        <Link href="/contact" className={styles.button}>
          Get in touch
        </Link>
      </div>
    </section>
  );
}
import Link from 'next/link';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  return (
    <section className={styles.panel}>
      <div className={`container ${styles.row}`}>
        <div className={styles.text}>
          <h2>Let&apos;s work together</h2>
          <p>Open to full-time roles and collaborations. Reach out anytime.</p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.button}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

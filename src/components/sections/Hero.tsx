import Link from 'next/link';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <p className={styles.eyebrow}>Full stack developer & UX engineer</p>
        <h1 className={styles.headline}>Tess Ellis</h1>
        <p className={styles.subhead}>
          I build fast, accessible, considered web experiences — from design
          systems to backend architecture.
        </p>
        <div className={styles.actions}>
          <Link href="/work" className={styles.primaryBtn}>
            View my work
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
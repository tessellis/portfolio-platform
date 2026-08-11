import Link from 'next/link';
import styles from './AboutSnapshot.module.css';

const facts = [
  { label: 'Based in', value: 'Portland, OR' },
  { label: 'Focus', value: 'Full-stack + UX' },
  { label: 'Currently', value: 'Open to full-time roles' },
];

export function AboutSnapshot() {
  return (
    <section className={styles.panel}>
      <svg
        className={styles.waveBottom}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,64 C280,120 480,0 720,32 C960,64 1160,112 1440,48 L1440,120 L0,120 Z" />
      </svg>

      <div className="container">
        <div className={styles.card}>
          <div className={styles.grid}>
            <div className={styles.text}>
              <h2>About me</h2>
              <p>
                I&apos;m a full-stack developer and UX engineer who cares
                about the details most people skip — the token system behind
                a color palette, the timing curve on a hover state.
              </p>
              <p>
                I like building things that feel considered from end to end:
                clean architecture underneath, thoughtful interaction on top.
              </p>
              <Link href="/about" className={styles.link}>
                Read more →
              </Link>
            </div>

            <div className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.factItem}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
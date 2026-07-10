import styles from './ResumeCTA.module.css';

export function ResumeCTA() {
  return (
    <section className={`${styles.cta} section`}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2>Want the full picture?</h2>
          <p>Download my resume for a complete summary of my experience.</p>
        </div>
        <a href="/resume.pdf" download className={styles.button}>
          Download resume
        </a>
      </div>
    </section>
  );
}
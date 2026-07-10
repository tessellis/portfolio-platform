import styles from './BioSection.module.css';

export function BioSection() {
  return (
    <section className={`${styles.bio} section`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual} />
        <div className={styles.text}>
          <h1>About me</h1>
          <p>
            Placeholder opening paragraph. Who you are, what drew you to
            software engineering, and what kind of problems you like solving.
          </p>
          <p>
            Placeholder second paragraph. More about your approach to
            building things — the intersection of design and engineering,
            attention to detail, whatever is true and specific to you.
          </p>
          <p>
            Placeholder third paragraph. A more personal note — interests
            outside of code, what youre up to now, what youre looking for next.
          </p>
        </div>
      </div>
    </section>
  );
}
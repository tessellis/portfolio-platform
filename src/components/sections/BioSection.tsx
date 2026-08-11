import Image from 'next/image';
import styles from './BioSection.module.css';

export function BioSection() {
  return (
    <section className={`${styles.bio} section`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <Image
            src="/about.jpg"
            alt="Tess Ellis"
            fill
            sizes="(min-width: 640px) 320px, 100vw"
            draggable={false}
            className={styles.visualImg}
          />
        </div>
        <div className={styles.text}>
          <h1>About me</h1>
          <p>
            Placeholder opening paragraph. Who you are, what drew you to
            software engineering, and what kind of problems you like solving.
          </p>
          <p>
            Placeholder second paragraph. More about my approach to
            building things — the intersection of design and engineering,
            attention to detail, whatever is true and specific to you.
          </p>
          <p>
            Placeholder third paragraph. A more personal note — interests
            outside of code, what I am up to now, what I am looking for next.
          </p>
        </div>
      </div>
    </section>
  );
}
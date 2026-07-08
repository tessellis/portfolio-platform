import { WorkGrid } from '@/components/sections/WorkGrid';
import { getAllProjects } from '@/lib/projects';
import styles from './page.module.css';

export default function Work() {
  const projects = getAllProjects();

  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Work</h1>
          <p>A complete record of projects I&apos;ve built — full stack, UX, AI, and more.</p>
        </div>
        <WorkGrid projects={projects} />
      </div>
    </section>
  );
}
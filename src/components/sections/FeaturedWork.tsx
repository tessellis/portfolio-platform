import Link from 'next/link';
import styles from './FeaturedWork.module.css';

const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'A short one-line description of the flagship project goes here.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'A short one-line description of this project.',
    tags: ['React', 'Node.js'],
    featured: false,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'A short one-line description of this project.',
    tags: ['Python', 'TensorFlow'],
    featured: false,
  },
];

export function FeaturedWork() {
  return (
    <section className={`${styles.work} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Featured work</h2>
          <Link href="/work" className={styles.viewAll}>
            View all projects →
          </Link>
        </div>

        <div className={styles.bento}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`${styles.card} ${project.featured ? styles.featuredCard : ''}`}
            >
              <div className={styles.thumbnail} />
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
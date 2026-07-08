import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'Figma', 'Docker', 'Vercel'],
  },
];

export function Skills() {
  return (
    <section className={`${styles.skills} section`}>
      <div className="container">
        <h2>Skills & stack</h2>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <div className={styles.pillRow}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
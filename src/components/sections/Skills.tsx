import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'CSS/Design Systems', 'Framer Motion', 'React Native'],
  },
  {
    category: 'Backend & Cloud',
    items: ['Node.js', 'PostgreSQL', 'Flask','Prisma', 'REST APIs', 'AWS', 'GCP'],
  },
  {
    category: 'Data & IoT',
    items: ['IoT', 'Sensor Data', 'Data Visualization', 'Sonification'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Docker', 'Vercel'],
  },
];

export function Skills() {
  return (
    <section className={`${styles.skills} section`}>
      <div className={`container glass-panel ${styles.panel}`}>
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
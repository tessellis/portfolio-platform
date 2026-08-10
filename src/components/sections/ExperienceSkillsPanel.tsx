'use client';

import Link from 'next/link';
import { useInViewOnce } from '@/lib/useInViewOnce';
import styles from './ExperienceSkillsPanel.module.css';

const experience = [
  {
    role: 'Lead Software Engineer',
    org: 'OPEnS Lab',
    dates: '2025 — 2026',
    summary: 'Led development of an open-source IoT data visualization platform.',
  },
  {
    role: 'Placeholder Role',
    org: 'Placeholder Company',
    dates: '2024 — 2025',
    summary: 'One-line summary of what you did in this role.',
  },
];

const skillGroups = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'] },
  { category: 'Tools & Other', items: ['Git', 'Figma', 'Docker', 'Vercel'] },
];

export function ExperienceSkillsPanel() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.1);

  return (
    <section ref={ref} className={`${styles.panel} ${inView ? styles.inView : ''}`}>
      <div className={`container ${styles.grid2}`}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h2>Experience</h2>
            <Link href="/about" className={styles.viewAll}>
              Full resume →
            </Link>
          </div>

          <ol className={styles.timeline}>
            {experience.map((item) => (
              <li key={item.role} className={styles.item}>
                <div className={styles.dot} />
                <div>
                  <div className={styles.itemHeader}>
                    <h3>{item.role}</h3>
                    <span className={styles.dates}>{item.dates}</span>
                  </div>
                  <p className={styles.org}>{item.org}</p>
                  <p className={styles.summary}>{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={`${styles.card} ${styles.cardSkills}`}>
          <h2>Skills & stack</h2>
          <div className={styles.skillsGrid}>
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
      </div>
    </section>
  );
}
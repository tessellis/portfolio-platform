'use client';

import Link from 'next/link';
import { useInViewOnce } from '@/lib/useInViewOnce';
import { publications } from '@/lib/publications';
import { SparkleMark } from '@/components/ui/SparkleMark';
import { ExternalLinkMark } from '@/components/ui/ExternalLinkMark';
import styles from './ExperienceSkillsPanel.module.css';

const experience = [
  {
    role: 'Lead Software Engineer',
    org: 'OPEnS Lab',
    dates: '2025 — 2026',
    summary: 'Lead software engineering and technical operations for OPEnS Lab (Openly Published Environmental Sensing Lab) at Oregon State University.',
  },
  {
    role: 'Independent Spanish Tutor',
    org: 'Preply',
    dates: '2020 — 2026',
    summary: 'Awarded Preply\'s Super Tutor Badge for three consecutive years, an award given to Preply\'s top tutors',
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
      <div className={`container ${styles.stack}`}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h2>
              <SparkleMark className={styles.mark} />
              Experience
            </h2>
            <Link href="/about" className={styles.viewAll}>
              Full resume →
            </Link>
          </div>

          <ol className={styles.timeline}>
            {experience.map((item, index) => (
              <li
                key={item.role}
                className={styles.item}
                style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
              >
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

        <div className={styles.bottomRow}>
          <div className={`${styles.card} ${styles.compactCard}`}>
            <div className={styles.header}>
              <h2>
                <SparkleMark className={styles.mark} />
                Publications
              </h2>
              <Link href="/about#publications" className={styles.viewAll}>
                See all →
              </Link>
            </div>
            <ul className={styles.pubList}>
              {publications.map((pub) => (
                <li key={pub.title} className={styles.pubItem}>
                  <a
                    href={pub.url}
                    className={styles.pubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.pubTitle}>{pub.title}</span>
                    <ExternalLinkMark className={styles.pubIcon} />
                  </a>
                  <p className={styles.pubMeta}>
                    <span className={styles.pubVenue}>{pub.venue}</span>, {pub.date}
                  </p>
                  <p className={styles.pubAbstract}>{pub.abstract}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} ${styles.compactCard}`}>
            <h2>
              <SparkleMark className={styles.mark} />
              Skills & stack
            </h2>
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
      </div>
    </section>
  );
}

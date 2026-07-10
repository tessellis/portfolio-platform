'use client';

import { useState } from 'react';
import { experience, education } from '@/lib/about';
import styles from './FullTimeline.module.css';

export function FullTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <h2>Experience</h2>
        <ol className={styles.timeline}>
          {experience.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <li key={item.role} className={styles.item}>
                <div className={styles.dot} />
                <button
                  className={styles.itemHeader}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                >
                  <div>
                    <h3>{item.role}</h3>
                    <p className={styles.org}>{item.org}</p>
                  </div>
                  <span className={styles.dates}>{item.dates}</span>
                </button>

                <p className={styles.summary}>{item.summary}</p>

                <div className={`${styles.details} ${isExpanded ? styles.detailsOpen : ''}`}>
                  <ul className={styles.bullets}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className={styles.toggleLabel}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              </li>
            );
          })}
        </ol>

        <h2 className={styles.educationTitle}>Education</h2>
        <ol className={styles.timeline}>
          {education.map((item) => (
            <li key={item.degree} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.itemHeader}>
                <div>
                  <h3>{item.degree}</h3>
                  <p className={styles.org}>{item.school}</p>
                </div>
                <span className={styles.dates}>{item.dates}</span>
              </div>
              <p className={styles.summary}>{item.details}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
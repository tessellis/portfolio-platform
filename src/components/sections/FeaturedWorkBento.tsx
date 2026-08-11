'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useInViewOnce } from '@/lib/useInViewOnce';
import { MDXFile, WorkFrontmatter } from '@/lib/mdx';
import styles from './FeaturedWork.module.css';

interface FeaturedWorkBentoProps {
  primary?: MDXFile<WorkFrontmatter>;
  secondary?: MDXFile<WorkFrontmatter>;
}

export function FeaturedWorkBento({ primary, secondary }: FeaturedWorkBentoProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.15);

  return (
    <div ref={ref} className={`${styles.bento} ${inView ? styles.inView : ''}`}>
      {primary && (
        <Link
          href={`/work/${primary.slug}`}
          className={`${styles.card} ${styles.primaryCard} glass-panel`}
        >
          {primary.frontmatter.heroImage ? (
            <div className={styles.thumbnailWrap}>
              <Image
                src={primary.frontmatter.heroImage}
                alt={primary.frontmatter.title}
                fill
                draggable={false}
                className={styles.thumbnail}
              />
            </div>
          ) : (
            <div className={styles.thumbnailPlaceholder} />
          )}
          <div className={styles.cardContent}>
            <h3>{primary.frontmatter.title}</h3>
            <p>{primary.frontmatter.description}</p>
            <div className={styles.tags}>
              {primary.frontmatter.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      )}

      {secondary && (
        <Link
          href={`/work/${secondary.slug}`}
          className={`${styles.card} ${styles.secondaryCard} glass-panel`}
        >
          {secondary.frontmatter.heroImage ? (
            <div className={styles.thumbnailWrap}>
              <Image
                src={secondary.frontmatter.heroImage}
                alt={secondary.frontmatter.title}
                fill
                draggable={false}
                className={styles.thumbnail}
              />
            </div>
          ) : (
            <div className={styles.thumbnailPlaceholder} />
          )}
          <div className={styles.cardContent}>
            <h3>{secondary.frontmatter.title}</h3>
            <p>{secondary.frontmatter.description}</p>
            <div className={styles.tags}>
              {secondary.frontmatter.tags.slice(0, 2).map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
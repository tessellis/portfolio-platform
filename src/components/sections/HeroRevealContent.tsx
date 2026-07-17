'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { useThemeRevealKey } from '@/lib/useThemeRevealKey';
import { HeroPuzzleIcon } from './HeroPuzzleIcon';

const name = 'Tess Ellis';
const eyebrowText = 'Lead Full-Stack Software Engineer';

export function HeroRevealContent() {
  const themeKey = useThemeRevealKey();

  return (
    <div key={themeKey} className={`container ${styles.contentRow}`}>
      <div className={styles.iconWrap}>
        <HeroPuzzleIcon />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          {eyebrowText.split(' ').map((word, i) => (
            <span
              key={i}
              className={styles.eyebrowWord}
              style={
                {
                  '--flash-color': `var(--flash-${i % 6})`,
                  '--delay': `${i * 70}ms`,
                } as React.CSSProperties
              }
            >
              {word}
              {'\u00A0'}
            </span>
          ))}
        </p>

        <h1 className={styles.headline}>
          {Array.from(name).map((char, i) =>
            char === ' ' ? (
              <span key={i} className={styles.space} />
            ) : (
              <span
                key={i}
                className={styles.letter}
                style={
                  {
                    '--flash-color': `var(--flash-${i % 6})`,
                    '--delay': `${i * 55}ms`,
                  } as React.CSSProperties
                }
              >
                {char}
              </span>
            )
          )}
        </h1>

        <p className={styles.subhead}>
          I build fast, accessible, considered web experiences — from design
          systems to backend architecture.
        </p>

        <div className={styles.actions}>
          <Link href="/work" className={styles.primaryBtn}>
            View my work
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
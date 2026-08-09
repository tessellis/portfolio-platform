'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useThemeRevealKey } from '@/lib/useThemeRevealKey';
import { HeroPuzzleIcon } from './HeroPuzzleIcon';

const name = 'Tess Ellis';
const eyebrowText = 'Full stack developer & UX engineer';
const MAX_INTRO_SCALE = 2.1;
const VIEWPORT_FIT_RATIO = 0.9;
const SHRINK_DELAY = 1400;
const SHRINK_DURATION = 900;
const COLORIZE_DELAY = 3300; // matches buttons + icon bounce timing

export function HeroRevealContent() {
  const themeKey = useThemeRevealKey();
  const titleRef = useRef<HTMLDivElement>(null);
  const [morphStyle, setMorphStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    if (!titleEl) return;

    let frameId: number | null = null;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      frameId = requestAnimationFrame(() => {
        setMorphStyle({ opacity: 1, transform: 'none' });
      });

      return () => {
        if (frameId !== null) cancelAnimationFrame(frameId);
      };
    }

    const lastRect = titleEl.getBoundingClientRect();
    const maxAllowedWidth = window.innerWidth * VIEWPORT_FIT_RATIO;
    const fitScale = maxAllowedWidth / lastRect.width;
    const introScale = Math.min(MAX_INTRO_SCALE, fitScale);

    const firstWidth = lastRect.width * introScale;
    const firstHeight = lastRect.height * introScale;
    const firstCenterX = window.innerWidth / 2;
    const firstCenterY = window.innerHeight / 2;
    const firstLeft = firstCenterX - firstWidth / 2;
    const firstTop = firstCenterY - firstHeight / 2;

    const dx = firstLeft - lastRect.left;
    const dy = firstTop - lastRect.top;

    frameId = requestAnimationFrame(() => {
      setMorphStyle({
        opacity: 1,
        transform: `translate(${dx}px, ${dy}px) scale(${introScale})`,
        transformOrigin: 'top left',
        transition: 'none',
      });
    });

    const shrinkTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        setMorphStyle({
          opacity: 1,
          transform: 'translate(0, 0) scale(1)',
          transformOrigin: 'top left',
          transition: `transform ${SHRINK_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        });
      });
    }, SHRINK_DELAY);

    return () => {
      clearTimeout(shrinkTimer);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [themeKey]);

  return (
    <div key={themeKey} className={`container ${styles.contentRow}`}>
      <div className={styles.iconWrap}>
        <HeroPuzzleIcon />
      </div>

      <div className={styles.content}>
        <div ref={titleRef} className={styles.titleBlock} style={morphStyle}>
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
                      '--colorize-delay': `${COLORIZE_DELAY + i * 45}ms`,
                    } as React.CSSProperties
                  }
                >
                  {char}
                </span>
              )
            )}
          </h1>
        </div>

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
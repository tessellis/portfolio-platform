'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSparkles.module.css';
import { useThemeRevealKey } from '@/lib/useThemeRevealKey';

const sparkles = [
  { top: '12%', left: '6%',  size: 20, speed: 0.15, delay: 1.3,  color: 0 },
  { top: '18%', left: '90%', size: 16, speed: 0.32, delay: 1.35, color: 1 },
  { top: '30%', left: '18%', size: 12, speed: 0.22, delay: 1.4,  color: 2 },
  { top: '38%', left: '82%', size: 22, speed: 0.1,  delay: 1.45, color: 3 },
  { top: '50%', left: '94%', size: 14, speed: 0.28, delay: 1.5,  color: 4 },
  { top: '58%', left: '4%',  size: 18, speed: 0.18, delay: 1.55, color: 5 },
  { top: '68%', left: '60%', size: 12, speed: 0.35, delay: 1.6,  color: 0 },
  { top: '75%', left: '10%', size: 16, speed: 0.24, delay: 1.65, color: 1 },
  { top: '82%', left: '75%', size: 20, speed: 0.12, delay: 1.7,  color: 2 },
  { top: '90%', left: '30%', size: 14, speed: 0.3,  delay: 1.75, color: 3 },
  { top: '45%', left: '50%', size: 10, speed: 0.4,  delay: 1.8,  color: 4 },
  { top: '8%',  left: '45%', size: 12, speed: 0.2,  delay: 1.85, color: 5 },
];

export function HeroSparkles() {
  const themeKey = useThemeRevealKey();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;

    function update() {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translateY(${y * sparkles[i].speed}px)`;
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [themeKey]);

  return (
    <div key={themeKey} className={styles.field} aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={styles.sparkleWrap}
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
        >
          <span
            className={styles.sparkle}
            style={
              {
                animationDelay: `${s.delay}s`,
                '--flash-color': `var(--flash-${s.color})`,
              } as React.CSSProperties
            }
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
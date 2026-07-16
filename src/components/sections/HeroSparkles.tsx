'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSparkles.module.css';

const sparkles = [
  { top: '15%', left: '8%', size: 22, speed: 0.15, delay: 1.2 },
  { top: '22%', left: '88%', size: 16, speed: 0.3, delay: 1.3 },
  { top: '55%', left: '92%', size: 20, speed: 0.1, delay: 1.4 },
  { top: '72%', left: '6%', size: 18, speed: 0.25, delay: 1.5 },
  { top: '42%', left: '50%', size: 14, speed: 0.35, delay: 1.6 },
  { top: '85%', left: '70%', size: 16, speed: 0.2, delay: 1.7 },
];

export function HeroSparkles() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
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
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.field} aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={styles.sparkle}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
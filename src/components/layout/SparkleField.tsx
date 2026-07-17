'use client';

import { useEffect, useRef, useMemo, useState } from 'react';
import styles from './SparkleField.module.css';
import { useThemeRevealKey } from '@/lib/useThemeRevealKey';
import { generateSparkles } from '@/lib/generateSparkles';

const SPARKLE_COUNT = 70;

export function SparkleField() {
  const themeKey = useThemeRevealKey();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const sparkles = useMemo(() => generateSparkles(SPARKLE_COUNT), []);
  const [fieldHeight, setFieldHeight] = useState<number | null>(null);

  // Measure the real page height so sparkle top% values resolve against
  // actual content — avoids the inset:0-on-auto-height circular reference
  useEffect(() => {
    function measure() {
      setFieldHeight(document.body.scrollHeight);
    }

    measure();

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(document.body);
    window.addEventListener('resize', measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [themeKey]);

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
  }, [themeKey, sparkles]);

  if (fieldHeight === null) return null;

  return (
    <div
      key={themeKey}
      className={styles.field}
      style={{ height: fieldHeight }}
      aria-hidden="true"
    >
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
                    d="M12 2C12.8 7 15 9.5 21.5 11.8C15.3 12.6 12.8 15 12.2 22C11.3 15.2 9 12.8 2.3 12.2C8.7 11 11 8.5 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
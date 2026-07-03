'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import styles from './ThemeToggle.module.css';

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) return <div className={styles.placeholder} />;

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀︎' : '☾'}
    </button>
  );
}
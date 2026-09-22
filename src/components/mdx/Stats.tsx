import type { ReactNode } from 'react';
import styles from './Stats.module.css';

export function Stats({ children }: { children: ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}

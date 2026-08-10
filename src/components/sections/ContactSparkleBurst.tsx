import styles from './ContactSparkleBurst.module.css';

const burst = [
  { angle: -60, distance: 70, size: 18, color: 0, delay: 0.35 },
  { angle: -20, distance: 90, size: 14, color: 1, delay: 0.4 },
  { angle: 25, distance: 85, size: 16, color: 2, delay: 0.45 },
  { angle: 65, distance: 75, size: 12, color: 3, delay: 0.5 },
  { angle: 130, distance: 80, size: 15, color: 4, delay: 0.4 },
  { angle: -130, distance: 85, size: 13, color: 5, delay: 0.45 },
];

export function ContactSparkleBurst({ active }: { active: boolean }) {
  return (
    <div className={styles.field} aria-hidden="true">
      {burst.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = Math.cos(rad) * s.distance;
        const y = Math.sin(rad) * s.distance;

        return (
          <span
            key={i}
            className={`${styles.sparkle} ${active ? styles.active : ''}`}
            style={
              {
                '--tx': `${x}px`,
                '--ty': `${y}px`,
                '--flash-color': `var(--flash-${s.color})`,
                width: s.size,
                height: s.size,
                animationDelay: `${s.delay}s`,
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
        );
      })}
    </div>
  );
}
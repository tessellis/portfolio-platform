import Image from 'next/image';
import { WashiTape } from './WashiTape';
import styles from './Polaroid.module.css';

export function Polaroid({
  src,
  alt,
  rotation,
  tapeColor,
  className,
  placeholderLabel,
}: {
  src?: string;
  alt: string;
  rotation: number;
  tapeColor?: string;
  className?: string;
  placeholderLabel?: string;
}) {
  return (
    <div
      className={`${styles.frame} ${className ?? ''}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {tapeColor && <WashiTape color={tapeColor} className={styles.tape} />}
      <div className={styles.photo}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="340px"
            className={styles.img}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>{placeholderLabel ?? alt}</span>
          </div>
        )}
      </div>
    </div>
  );
}

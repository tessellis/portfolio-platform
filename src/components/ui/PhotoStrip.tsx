import Image from 'next/image';
import { WashiTape } from './WashiTape';
import styles from './PhotoStrip.module.css';

export function PhotoStrip({
  photos,
  rotation,
  tapeColor,
  className,
}: {
  photos: { src: string; alt: string }[];
  rotation: number;
  tapeColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`${styles.strip} ${className ?? ''}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {tapeColor && <WashiTape color={tapeColor} className={styles.tape} />}
      {photos.map((photo) => (
        <div key={photo.src} className={styles.cell}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="220px"
            className={styles.img}
          />
        </div>
      ))}
    </div>
  );
}

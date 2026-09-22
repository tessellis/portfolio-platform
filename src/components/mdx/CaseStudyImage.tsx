import Image from 'next/image';
import styles from './CaseStudyImage.module.css';

export function CaseStudyImage({
  src,
  alt,
  caption,
  ratio = '16 / 9',
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.imageWrap} style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className={styles.image}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

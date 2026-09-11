import Image from 'next/image';
import styles from './ImageSticker.module.css';

export function ImageSticker({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      className={`${styles.img} ${className ?? ''}`}
    />
  );
}

'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import type { TouchEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInViewOnce } from '@/lib/useInViewOnce';
import { aboutPanels } from '@/lib/aboutPanels';
import { Polaroid } from '@/components/ui/Polaroid';
import { PhotoStrip } from '@/components/ui/PhotoStrip';
import { ImageSticker } from '@/components/ui/ImageSticker';
import styles from './AboutCollage.module.css';

export function AboutCollage() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.15);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const total = aboutPanels.length;

  const goTo = useCallback(
    (next: number) => {
      const wrapped = ((next % total) + total) % total;
      setDirection(next > index ? 1 : next < index ? -1 : 1);
      setIndex(wrapped);
    },
    [index, total],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  }

  const panel = aboutPanels[index];

  return (
    <section className={styles.panel}>
      <div className={`container ${styles.outer}`}>
        <div
          ref={ref}
          className={`${styles.collageWrap} ${inView ? styles.inView : ''}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={goPrev}
            aria-label="Previous panel"
          >
            ←
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={goNext}
            aria-label="Next panel"
          >
            →
          </button>

          <div
            key={index}
            className={`${styles.slideContent} ${direction === 1 ? styles.slideInRight : styles.slideInLeft}`}
          >
            <div className={styles.card}>
              <h2>{panel.heading}</h2>
              <p>{panel.paragraph}</p>
              <Link href="/about" className={styles.link}>
                Read more →
              </Link>
            </div>

            {/* ===== top-left corner ===== */}
            {panel.photoStrip ? (
              <div
                className={`${styles.piece} ${styles.cutout}`}
                style={panel.photoStripPosition}
              >
                <PhotoStrip
                  photos={panel.photoStrip}
                  rotation={panel.photoStripRotation ?? -6}
                  tapeColor="var(--flash-2)"
                />
              </div>
            ) : (
              panel.photoLeft && (
                <div className={`${styles.piece} ${styles.polaroidLeft}`}>
                  <Polaroid
                    src={panel.photoLeft.src}
                    alt={panel.photoLeft.alt}
                    rotation={-7}
                    tapeColor="var(--flash-2)"
                    placeholderLabel={panel.photoLeft.placeholderLabel}
                  />
                </div>
              )
            )}

            {panel.photoLeft?.cutoutSrc && (
              <div
                className={`${styles.piece} ${styles.cutout}`}
                style={panel.photoLeft.cutoutPosition}
              >
                <Image
                  src={panel.photoLeft.cutoutSrc}
                  alt={panel.photoLeft.cutoutAlt ?? ''}
                  width={panel.photoLeft.cutoutWidth ?? 600}
                  height={panel.photoLeft.cutoutHeight ?? 1000}
                  className={styles.cutoutImg}
                />
              </div>
            )}

            <div className={`${styles.piece} ${styles.starNearLeftPolaroid}`}>
              <ImageSticker src={panel.stickers.starNearLeftPolaroid} width={438} height={500} />
            </div>

            {/* ===== bottom-left corner ===== */}
            <div className={`${styles.piece} ${styles.starOrange}`}>
              <ImageSticker src={panel.stickers.starOrange} width={455} height={500} />
            </div>

            <div className={`${styles.piece} ${styles.flowerBottomLeft}`}>
              <ImageSticker src={panel.stickers.flowerBottomLeft} width={487} height={500} />
            </div>

            {/* ===== top-right corner ===== */}
            <div className={`${styles.piece} ${styles.starPink}`}>
              <ImageSticker src={panel.stickers.starPink} width={379} height={500} />
            </div>

            <div className={`${styles.piece} ${styles.starRed}`}>
              <ImageSticker src={panel.stickers.starRed} width={500} height={474} />
            </div>

            {/* ===== bottom-right corner ===== */}
            <div className={`${styles.piece} ${styles.polaroidRight}`}>
              <Polaroid
                src={panel.photoRight.src}
                alt={panel.photoRight.alt}
                rotation={5}
                tapeColor="var(--flash-5)"
                placeholderLabel={panel.photoRight.placeholderLabel}
              />
            </div>

            {panel.photoRight.cutoutSrc && (
              <div
                className={`${styles.piece} ${styles.cutout}`}
                style={panel.photoRight.cutoutPosition}
              >
                <Image
                  src={panel.photoRight.cutoutSrc}
                  alt={panel.photoRight.cutoutAlt ?? ''}
                  width={panel.photoRight.cutoutWidth ?? 700}
                  height={panel.photoRight.cutoutHeight ?? 800}
                  className={styles.cutoutImg}
                />
              </div>
            )}

            <div className={`${styles.piece} ${styles.starWhiteRight1}`}>
              <ImageSticker src={panel.stickers.starWhiteRight1} width={465} height={500} />
            </div>

            <div className={`${styles.piece} ${styles.starWhiteRight2}`}>
              <ImageSticker src={panel.stickers.starWhiteRight2} width={342} height={500} />
            </div>
          </div>

          <div className={styles.dots}>
            {aboutPanels.map((p, i) => (
              <button
                key={p.heading}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.heading}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

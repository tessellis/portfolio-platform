import styles from './Hero.module.css';
import { HeroRevealContent } from './HeroRevealContent';

export function Hero() {
  return (
    <section className={`${styles.hero} grain`} data-hero>
      <HeroRevealContent />
    </section>
  );
}
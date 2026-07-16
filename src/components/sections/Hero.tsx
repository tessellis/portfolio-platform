import styles from './Hero.module.css';
import { HeroSparkles } from './HeroSparkles';
import { HeroRevealContent } from './HeroRevealContent';

export function Hero() {
  return (
    <section className={`${styles.hero} grain`} data-hero>
      <HeroSparkles />
      <HeroRevealContent />
    </section>
  );
}
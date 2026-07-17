function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export interface SparkleConfig {
  top: string;
  left: string;
  size: number;
  speed: number;
  delay: number;
  color: number;
}

export function generateSparkles(count: number): SparkleConfig[] {
  const sparkles: SparkleConfig[] = [];

  for (let i = 0; i < count; i++) {
    const topPct = (i / count) * 100 + seededRandom(i * 3.1) * (100 / count) * 0.6;
    const leftPct = seededRandom(i * 7.7) * 90 + 4;
    const size = 11 + seededRandom(i * 2.3) * 13;
    const speed = 0.1 + seededRandom(i * 5.9) * 0.32;
    const delay = seededRandom(i * 4.1) * 0.3;
    const color = i % 6;

    sparkles.push({
      top: `${topPct.toFixed(1)}%`,
      left: `${leftPct.toFixed(1)}%`,
      size: Math.round(size),
      speed: Number(speed.toFixed(2)),
      delay: Number(delay.toFixed(2)),
      color,
    });
  }

  return sparkles;
}
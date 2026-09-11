'use client';

import { useMediaQuery } from '@/lib/useMediaQuery';
import { AboutSnapshot } from './AboutSnapshot';
import { AboutCollage } from './AboutCollage';

const DESKTOP_QUERY = '(min-width: 900px)';

export function AboutSection() {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  return isDesktop ? <AboutCollage /> : <AboutSnapshot />;
}

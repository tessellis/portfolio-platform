import { Hero } from '@/components/sections/Hero';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Skills } from '@/components/sections/Skills';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutSnapshot />
      <ExperienceTimeline />
      <Skills />
      <ContactCTA />
    </>
  );
}
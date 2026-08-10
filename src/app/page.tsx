import { Hero } from '@/components/sections/Hero';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { ExperienceSkillsPanel } from '@/components/sections/ExperienceSkillsPanel';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ExperienceSkillsPanel />
      <AboutSnapshot />
      <ContactCTA />
    </>
  );
}
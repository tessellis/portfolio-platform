import { Hero } from '@/components/sections/Hero';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { ExperienceSkillsPanel } from '@/components/sections/ExperienceSkillsPanel';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ExperienceSkillsPanel />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
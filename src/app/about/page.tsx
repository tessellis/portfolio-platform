import { BioSection } from '@/components/sections/BioSection';
import { FullTimeline } from '@/components/sections/FullTimeline';
import { ResumeCTA } from '@/components/sections/ResumeCTA';

export default function About() {
  return (
    <>
      <BioSection />
      <FullTimeline />
      <ResumeCTA />
    </>
  );
}
import { SEO } from '@/src/components/SEO';
import { Hero } from '@/src/components/sections/Hero';
import { SocialProof } from '@/src/components/sections/SocialProof';
import { Projects } from '@/src/components/sections/Projects';
import { Services } from '@/src/components/sections/Services';
import { Method } from '@/src/components/sections/Method';
import { Manifesto } from '@/src/components/sections/Manifesto';
import { About } from '@/src/components/sections/About';
import { Contact } from '@/src/components/sections/Contact';
import { AnimatedSection } from '@/src/components/ui/AnimatedSection';

export function Home() {
  return (
    <>
      <SEO 
        title="Double Pixel - Web Design & Digital Strategy"
        description="Creiamo esperienze digitali per raccontare, coinvolgere e convertire."
      />
      <Hero />
      <AnimatedSection><SocialProof /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><Services /></AnimatedSection>
      <AnimatedSection><Method /></AnimatedSection>
      <AnimatedSection><Manifesto /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
    </>
  );
}

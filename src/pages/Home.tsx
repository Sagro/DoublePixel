import { Hero } from '@/src/components/sections/Hero';
import { SocialProof } from '@/src/components/sections/SocialProof';
import { Projects } from '@/src/components/sections/Projects';
import { Services } from '@/src/components/sections/Services';
import { Method } from '@/src/components/sections/Method';
import { Manifesto } from '@/src/components/sections/Manifesto';
import { About } from '@/src/components/sections/About';
import { Contact } from '@/src/components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Projects />
      <Services />
      <Method />
      <Manifesto />
      <About />
      <Contact />
    </>
  );
}

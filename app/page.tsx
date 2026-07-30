import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Technologies from '@/components/home/Technologies';
import CTA from '@/components/shared/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Projects />
      <Technologies />
      <CTA />
    </>
  );
}

import { constructMetadata } from '@/lib/seo';
import AboutHero from '@/components/about/AboutHero';
import WhoWeAre from '@/components/about/WhoWeAre';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import Team from '@/components/about/Team';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'About Us | BKP Developers',
  description: 'Learn about BKP Developers, our mission, vision, core values, and the dedicated team of professionals driving digital transformation.',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <Team />
      <CTA />
    </>
  );
}

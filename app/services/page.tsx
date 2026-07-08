import { constructMetadata } from '@/lib/seo';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/home/Services';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'Our Services | BKP Developers',
  description: 'Explore our comprehensive range of software development services including web development, mobile apps, UI/UX design, AI solutions, and more.',
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="pt-10">
        <ServicesList />
      </div>
      <CTA />
    </>
  );
}

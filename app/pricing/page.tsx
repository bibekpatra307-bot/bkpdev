import { constructMetadata } from '@/lib/seo';
import PricingHero from '@/components/pricing/PricingHero';
import PricingCards from '@/components/pricing/PricingCards';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'Pricing | BKP Developers',
  description: 'Transparent and flexible pricing plans for our software development and design services.',
});

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <CTA />
    </>
  );
}

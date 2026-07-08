import { constructMetadata } from '@/lib/seo';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioList from '@/components/portfolio/PortfolioList';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'Our Portfolio | BKP Developers',
  description: 'View our successful projects and case studies showcasing our expertise in software development, design, and digital marketing.',
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioList />
      <CTA />
    </>
  );
}

import { constructMetadata } from '@/lib/seo';
import CareerHero from '@/components/career/CareerHero';
import Openings from '@/components/career/Openings';

export const metadata = constructMetadata({
  title: 'Careers | BKP Developers',
  description: 'Join BKP Developers and work on exciting software projects. View our open positions.',
});

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <Openings />
    </>
  );
}

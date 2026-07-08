import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { BarChart } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'SEO & Digital Marketing | BKP Developers',
  description: 'Data-driven SEO and digital marketing strategies to boost your online presence.',
});

export default function SEODigitalMarketing() {
  return (
    <>
      <ServiceDetail
        title="SEO & Digital Marketing"
        description="Amplify your brand's voice and reach your target audience. Our data-driven digital marketing and SEO strategies are designed to increase your online visibility, drive qualified traffic, and maximize ROI."
        icon={<BarChart className="w-8 h-8" />}
        features={[
          'Search Engine Optimization (SEO)',
          'Pay-Per-Click (PPC) Advertising',
          'Social Media Marketing & Management',
          'Content Marketing & Strategy',
          'Email Marketing Campaigns',
          'Web Analytics & Performance Reporting'
        ]}
        image="https://picsum.photos/seed/seo/800/600"
      />
      <CTA />
    </>
  );
}

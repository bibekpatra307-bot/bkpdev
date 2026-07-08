import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Monitor } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'Website Development | BKP Developers',
  description: 'Custom, responsive, and high-performance website development services.',
});

export default function WebsiteDevelopment() {
  return (
    <>
      <ServiceDetail
        title="Website Development"
        description="We build fast, secure, and highly scalable websites tailored to your specific business needs. From corporate websites to complex web applications, our expert team uses the latest technologies to deliver exceptional web experiences."
        icon={<Monitor className="w-8 h-8" />}
        features={[
          'Custom Web Application Development',
          'Responsive & Mobile-First Design',
          'Frontend & Backend Development',
          'CMS Integration (WordPress, Contentful, etc.)',
          'Performance Optimization & Security',
          'Ongoing Maintenance & Support'
        ]}
        image="https://picsum.photos/seed/webdev/800/600"
      />
      <CTA />
    </>
  );
}

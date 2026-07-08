import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Cpu } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'AI & Software Solutions | BKP Developers',
  description: 'Innovative AI integrations and custom enterprise software solutions.',
});

export default function AISoftwareSolutions() {
  return (
    <>
      <ServiceDetail
        title="AI & Software Solutions"
        description="Leverage the power of Artificial Intelligence and custom software to automate workflows, gain insights, and solve complex business challenges. We build intelligent systems that scale with your enterprise."
        icon={<Cpu className="w-8 h-8" />}
        features={[
          'Custom Enterprise Software Development',
          'AI/ML Model Integration',
          'Business Process Automation',
          'Natural Language Processing (NLP) Tools',
          'Predictive Analytics Dashboards',
          'Legacy System Modernization'
        ]}
        image="https://picsum.photos/seed/aisoftware/800/600"
      />
      <CTA />
    </>
  );
}

import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { LifeBuoy } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'Maintenance & Support | BKP Developers',
  description: 'Reliable software maintenance and support services to keep your digital assets running smoothly.',
});

export default function MaintenanceAndSupport() {
  return (
    <>
      <ServiceDetail
        title="Maintenance & Support"
        description="Ensure your digital platforms remain secure, up-to-date, and perform flawlessly with our comprehensive maintenance and support services. We provide ongoing assistance so you can focus on your core business."
        icon={<LifeBuoy className="w-8 h-8" />}
        features={[
          '24/7 Monitoring & Support',
          'Security Audits & Updates',
          'Performance Optimization',
          'Bug Fixing & Troubleshooting',
          'Feature Enhancements',
          'Database Backup & Recovery'
        ]}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
      />
      <CTA />
    </>
  );
}

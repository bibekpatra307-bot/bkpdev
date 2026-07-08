import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Smartphone } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'Mobile App Development | BKP Developers',
  description: 'Native and cross-platform mobile app development services for iOS and Android.',
});

export default function MobileAppDevelopment() {
  return (
    <>
      <ServiceDetail
        title="Mobile App Development"
        description="Transform your ideas into powerful mobile experiences. We design and develop native and cross-platform mobile applications for iOS and Android that are user-friendly, feature-rich, and highly performant."
        icon={<Smartphone className="w-8 h-8" />}
        features={[
          'iOS App Development (Swift)',
          'Android App Development (Kotlin)',
          'Cross-Platform Apps (React Native, Flutter)',
          'UI/UX Design for Mobile',
          'App Testing & Quality Assurance',
          'App Store & Play Store Deployment'
        ]}
        image="https://picsum.photos/seed/mobileapp/800/600"
      />
      <CTA />
    </>
  );
}

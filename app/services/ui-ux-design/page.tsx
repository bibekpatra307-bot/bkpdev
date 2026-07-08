import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { PenTool } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'UI/UX Design | BKP Developers',
  description: 'Beautiful, intuitive, and user-centered UI/UX design services.',
});

export default function UIUXDesign() {
  return (
    <>
      <ServiceDetail
        title="UI/UX Design"
        description="We create stunning, user-centered designs that enhance user engagement and satisfaction. Our design process focuses on understanding your users to deliver intuitive interfaces and seamless experiences."
        icon={<PenTool className="w-8 h-8" />}
        features={[
          'User Research & Persona Development',
          'Wireframing & Prototyping',
          'User Interface (UI) Design',
          'User Experience (UX) Strategy',
          'Usability Testing & Optimization',
          'Interactive Animations & Micro-interactions'
        ]}
        image="https://picsum.photos/seed/uiux/800/600"
      />
      <CTA />
    </>
  );
}

import { constructMetadata } from '@/lib/seo';
import ServiceDetail from '@/components/services/ServiceDetail';
import { ShoppingCart } from 'lucide-react';
import CTA from '@/components/shared/CTA';

export const metadata = constructMetadata({
  title: 'E-commerce Solutions | BKP Developers',
  description: 'Scalable and secure e-commerce solutions to grow your online sales.',
});

export default function EcommerceSolutions() {
  return (
    <>
      <ServiceDetail
        title="E-commerce Solutions"
        description="Build a robust online store that drives sales and growth. We provide end-to-end e-commerce solutions, from custom storefront design to secure payment gateway integrations and inventory management."
        icon={<ShoppingCart className="w-8 h-8" />}
        features={[
          'Custom E-commerce Platform Development',
          'Shopify & WooCommerce Setup',
          'Secure Payment Gateway Integration',
          'Inventory & Order Management Systems',
          'Mobile Commerce Optimization',
          'Conversion Rate Optimization (CRO)'
        ]}
        image="https://picsum.photos/seed/ecommerce/800/600"
      />
      <CTA />
    </>
  );
}

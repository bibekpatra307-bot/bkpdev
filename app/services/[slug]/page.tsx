import { notFound } from 'next/navigation';
import servicesData from '@/lib/services.json';
import { constructMetadata } from '@/lib/seo';
import ServiceShowcaseHero from '@/components/services/showcase/ServiceShowcaseHero';
import LivePreviewGallery from '@/components/services/showcase/LivePreviewGallery';
import DesignStyles from '@/components/services/showcase/DesignStyles';
import TechStack from '@/components/services/showcase/TechStack';
import ServiceFeatures from '@/components/services/showcase/ServiceFeatures';
import WorkProcess from '@/components/services/showcase/WorkProcess';
import ClientBenefits from '@/components/services/showcase/ClientBenefits';
import ServicePricing from '@/components/services/showcase/ServicePricing';
import FinalCTA from '@/components/services/showcase/FinalCTA';

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    const formattedName = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return constructMetadata({
      title: `${formattedName} | BKP Developers`,
      description: `Premium ${formattedName} services. Explore our portfolio, features, and pricing for world-class digital solutions.`,
    });
  }

  return constructMetadata({
    title: `${service.name} | BKP Developers`,
    description: `Premium ${service.name} services in the ${service.category} category. Explore our portfolio, features, and pricing.`,
  });
}

function determineCategory(slug: string): string {
  if (slug.includes('web') || slug.includes('ecommerce')) return "Web Development";
  if (slug.includes('mobile') || slug.includes('app')) return "Mobile Development";
  if (slug.includes('ui') || slug.includes('ux') || slug.includes('design')) return "UI/UX";
  if (slug.includes('ai') || slug.includes('software')) return "AI Services";
  if (slug.includes('seo') || slug.includes('marketing')) return "Digital Marketing";
  if (slug.includes('interior') || slug.includes('3d')) return "Interior Design";
  return "Software Development";
}

export default async function ServiceShowcasePage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  
  let serviceName = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  let category = determineCategory(params.slug);
  
  const service = servicesData.find((s) => s.slug === params.slug);
  if (service) {
    serviceName = service.name;
    category = service.category;
  }

  // Handle special cases from header and homepage navigation mapping
  if (params.slug === 'e-commerce-solutions') serviceName = 'E-commerce Solutions';
  if (params.slug === 'ui-ux-design') serviceName = 'UI/UX Design';
  if (params.slug === 'seo-digital-marketing') serviceName = 'SEO & Digital Marketing';

  return (
    <main className="min-h-screen bg-[#0a0a0e] text-slate-50 overflow-hidden pt-20">
      <ServiceShowcaseHero title={serviceName} category={category} />
      <LivePreviewGallery category={category} serviceName={serviceName} />
      <DesignStyles />
      <TechStack />
      <ServiceFeatures />
      <WorkProcess />
      <ClientBenefits />
      <ServicePricing serviceName={serviceName} />
      <FinalCTA />
    </main>
  );
}

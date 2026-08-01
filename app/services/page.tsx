import { constructMetadata } from '@/lib/seo';
import servicesData from '@/lib/services.json';
import Link from 'next/link';
import CTA from '@/components/shared/CTA';

export const dynamic = 'force-dynamic';

export const metadata = constructMetadata({
  title: 'Our Services | BKP Developers',
  description: 'Explore our world-class digital services including Web Development, Mobile Apps, AI Solutions, UI/UX Design, and more.',
});

export default function ServicesPage() {
  // Group services by category
  const groupedServices = servicesData.reduce((acc: any, service: any) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#0a0a0e] text-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">World-Class Services</h1>
          <p className="text-xl text-slate-400">Discover our comprehensive suite of digital solutions engineered for growth, performance, and scale.</p>
        </div>

        <div className="space-y-24">
          {Object.entries(groupedServices).map(([category, services]: [string, any]) => (
            <div key={category}>
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {services.map((service: any) => (
                  <Link 
                    key={service.slug} 
                    href={`/services/${service.slug}`}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800 hover:border-blue-500/50 transition-all group"
                  >
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 mb-2">{service.name}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2">Premium {service.name.toLowerCase()} solutions tailored for you.</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <CTA />
      </div>
    </main>
  );
}

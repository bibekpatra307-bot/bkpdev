'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Monitor, Smartphone, PenTool, ShoppingCart, Cpu, BarChart, LifeBuoy } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Website Development',
    description: 'Modern, responsive and fast websites tailored to your business.',
    path: '/services/website-development',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Mobile App Development',
    description: 'Android & iOS apps that deliver seamless experiences.',
    path: '/services/mobile-app-development',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <PenTool className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly designs that enhance user experience.',
    path: '/services/ui-ux-design',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'E-commerce Solutions',
    description: 'Powerful e-commerce websites to boost your online sales.',
    path: '/services/e-commerce-solutions',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'AI & Software Solutions',
    description: 'Smart AI solutions and custom software for your business.',
    path: '/services/ai-software-solutions',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: <BarChart className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'SEO & Digital Marketing',
    description: 'Rank higher, reach more customers and grow your brand.',
    path: '/services/seo-digital-marketing',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <LifeBuoy className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Maintenance & Support',
    description: 'Reliable software maintenance and support services to keep your digital assets running smoothly.',
    path: '/services/maintenance-support',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-6 md:py-16">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 px-2">
          <p className="text-[11px] md:text-xs font-bold text-primary-600 tracking-wider uppercase mb-2">Our Services</p>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2 md:mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-sm md:text-lg text-slate-600">
            We provide end-to-end IT services to help your business grow, scale and succeed in the digital world.
          </p>
        </div>

        <div className="relative -mx-2 overflow-hidden py-2">
          <div className="animate-infinite-scroll flex w-max flex-nowrap gap-3 pr-3 motion-reduce:animate-none">
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % services.length) * 0.05 }}
                className="w-[260px] flex-none sm:w-[290px] md:w-[320px] lg:w-[340px]"
              >
                <Link href={service.path} className="block h-full group">
                  <div className="relative flex h-full min-h-[168px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl md:min-h-[180px] md:p-5">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="flex items-center gap-3">
                      <div className={`relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-xl ${service.bgColor} ${service.color} transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12`}>
                        {service.icon}
                      </div>
                      <h3 className="relative z-10 text-base font-bold text-slate-900 transition-colors group-hover:text-primary-600 md:text-lg">
                        {service.title}
                      </h3>
                    </div>
                    <p className="relative z-10 mb-3 mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <div className="relative z-10 mt-auto flex items-center text-xs font-medium text-primary-600">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

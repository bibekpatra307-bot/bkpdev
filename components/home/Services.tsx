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
    <section className="bg-white relative py-[clamp(2.5rem,6vw,6rem)]">
      <div className="max-w-7xl mx-auto px-[clamp(1rem,2vw,2rem)]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-[clamp(1.5rem,4vw,4rem)] px-2">
          <p className="text-[clamp(0.65rem,1vw,0.75rem)] font-bold text-primary-600 tracking-[0.18em] uppercase mb-2">Our Services</p>
          <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-heading font-bold text-slate-900 mb-2 md:mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-[clamp(0.95rem,1.8vw,1.125rem)] text-slate-600">
            We provide end-to-end IT services to help your business grow, scale and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(0.9rem,2vw,2rem)]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.path} className="block group">
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-[clamp(1rem,2vw,2.2rem)] hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                   
                  {/* Hover Background Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className={`w-[clamp(3rem,5vw,4rem)] h-[clamp(3rem,5vw,4rem)] rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center mb-[clamp(0.75rem,2vw,1.5rem)] relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                   
                  <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold text-slate-900 mb-3 relative z-10 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                   
                  <p className="text-[clamp(0.9rem,1.6vw,1rem)] text-slate-600 mb-3 md:mb-6 relative z-10">
                    {service.description}
                  </p>
                   
                  <div className="flex items-center text-primary-600 font-medium text-[clamp(0.7rem,1vw,0.875rem)] relative z-10">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

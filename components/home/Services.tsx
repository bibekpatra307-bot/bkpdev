'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Monitor, Smartphone, PenTool, ShoppingCart, Cpu, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Website Development',
    description: 'Modern, responsive and fast websites tailored to your business.',
    path: '/services/website-development',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Android & iOS apps that deliver seamless experiences.',
    path: '/services/mobile-app-development',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly designs that enhance user experience.',
    path: '/services/ui-ux-design',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'E-commerce Solutions',
    description: 'Powerful e-commerce websites to boost your online sales.',
    path: '/services/e-commerce-solutions',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI & Software Solutions',
    description: 'Smart AI solutions and custom software for your business.',
    path: '/services/ai-software-solutions',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'SEO & Digital Marketing',
    description: 'Rank higher, reach more customers and grow your brand.',
    path: '/services/seo-digital-marketing',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-lg text-slate-600">
            We provide end-to-end IT services to help your business grow, scale and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.path} className="block group">
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  
                  {/* Hover Background Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className={`w-16 h-16 rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 relative z-10">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-medium text-sm relative z-10">
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

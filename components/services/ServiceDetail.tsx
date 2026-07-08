'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

export default function ServiceDetail({ title, description, icon, features, image }: ServiceDetailProps) {
  return (
    <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary-600">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mb-8">
              {icon}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What we offer:</h3>
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/30"
            >
              Request a Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-white border border-slate-200 p-2">
               <div className="relative w-full h-full rounded-2xl overflow-hidden">
                 <Image
                   src={image}
                   alt={title}
                   fill
                   className="object-cover"
                   unoptimized
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

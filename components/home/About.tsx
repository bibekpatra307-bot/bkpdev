'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Building The Future <br />
              <span className="text-primary-600">With Technology</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              BKP Developers is a leading software development company delivering innovative, reliable and high-quality digital solutions. We transform ideas into powerful digital products that drive growth and success.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Dedicated & Experienced Team',
                'On-Time Delivery',
                'Quality & Performance Focused'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/30"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
               {/* Using placeholder until actual image is available */}
               <Image
                 src="https://picsum.photos/seed/bkp-about/800/600"
                 alt="BKP Developers Office"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 unoptimized
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               
               {/* Logo Overlay */}
               <div className="absolute bottom-8 left-8 flex items-center gap-3">
                 <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                   <span className="text-xl font-bold text-primary-600">BKP</span>
                 </div>
                 <div>
                   <p className="text-white font-bold text-lg leading-tight">BKP DEVELOPERS</p>
                   <p className="text-white/80 text-sm">Innovate. Develop. Deliver.</p>
                 </div>
               </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:10px_10px] opacity-20 z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:10px_10px] opacity-20 z-[-1]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0f1c]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-900/20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              ABOUT BKP DEVELOPERS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6"
            >
              Building The Future <br />
              <span className="text-primary-500">With Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              BKP Developers is a leading software development company delivering innovative, reliable and high-quality digital solutions. We transform ideas into powerful digital products that drive growth and success.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-800">
               <Image
                 src="https://picsum.photos/seed/bkp-office/800/600"
                 alt="BKP Developers Office"
                 fill
                 className="object-cover opacity-60 mix-blend-overlay"
                 unoptimized
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1c]/90 via-primary-900/40 to-transparent"></div>
               
               {/* Logo Overlay */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                 <div className="text-5xl font-heading font-bold text-white tracking-tight flex items-center mb-2 drop-shadow-xl">
                   <span className="text-primary-500">BKP</span>
                 </div>
                 <p className="text-white font-bold text-xl drop-shadow-md">BKP DEVELOPERS</p>
                 <p className="text-white/80 text-sm drop-shadow-md">Innovate. Develop. Deliver.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from 'motion/react';
import HeroVisual from './HeroVisual';
import HeroSearch from './HeroSearch';

export default function Hero() {
  return (
    <section className="relative md:min-h-screen flex flex-col items-center justify-center overflow-visible bg-[#0a0a0e] pt-12 pb-12 md:pt-28 md:pb-32">
      <HeroVisual />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          {/* AI Service Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-50 mb-7 w-full md:mb-10"
          >
            <HeroSearch />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-xl text-sm font-medium leading-7 tracking-wide text-slate-300 md:text-base md:leading-8"
          >
            BKP Developers is a leading software development company delivering innovative, reliable and high-quality digital solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

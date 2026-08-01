"use client";

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0  opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Need a Custom Solution?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 mb-12"
        >
          Let's Build Something Amazing Together.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
            Book Free Consultation
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-colors">
            Contact Now
          </Link>
          <Link href="#pricing" className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full font-semibold transition-colors">
            Get Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

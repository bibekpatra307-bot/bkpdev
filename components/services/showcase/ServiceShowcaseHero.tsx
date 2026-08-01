"use client";

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Play, Code, Monitor, Smartphone, Palette, LineChart } from 'lucide-react';
import Link from 'next/link';

const categoryIcons: Record<string, any> = {
  "Web Development": Monitor,
  "Mobile Development": Smartphone,
  "UI/UX": Palette,
  "AI Services": Sparkles,
  "Digital Marketing": LineChart,
  default: Code,
};

export default function ServiceShowcaseHero({ title, category }: { title: string, category: string }) {
  const Icon = categoryIcons[category] || categoryIcons.default;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0a0a0e]"></div>
      
      {/* Floating Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
      />

      <div className="absolute inset-0  opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8"
        >
          <Icon className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-slate-300">{category} Solutions</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8"
        >
          <span className="block">{title}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Reimagined.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
        >
          World-class engineering meets premium design. We craft high-performance, scalable, and visually stunning digital experiences tailored specifically for your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#portfolio" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95">
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-full font-semibold backdrop-blur-md transition-all hover:border-slate-600">
            View Pricing
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/5 border border-transparent text-slate-300 hover:text-white rounded-full font-semibold transition-all">
            Contact Sales
          </Link>
        </motion.div>
      </div>
      
      {/* Bottom fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0e] to-transparent pointer-events-none"></div>
    </section>
  );
}

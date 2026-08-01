"use client";

import { motion } from 'motion/react';

// Using simple stylized text blocks to represent tech since we don't have SVGs readily available
const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "Firebase", "Express", "MongoDB", "PostgreSQL", "GraphQL", 
  "GitHub", "Vercel", "Cloudflare", "AWS", "OpenAI", "Google Gemini"
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#0a0a0e] border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Powered by Modern Technology</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">We use enterprise-grade tools to ensure your product is fast, secure, and scalable.</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0e] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0e] to-transparent z-10"></div>
        
        <motion.div 
          className="flex whitespace-nowrap gap-6 py-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Double the array for seamless looping */}
          {[...techStack, ...techStack].map((tech, idx) => (
            <div 
              key={idx} 
              className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-lg flex items-center justify-center min-w-[160px]"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

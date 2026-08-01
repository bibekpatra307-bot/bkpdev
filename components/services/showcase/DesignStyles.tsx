"use client";

import { motion } from 'motion/react';
import { Layers, Box, Cpu, Moon, Sparkles, Layout, PenTool, Fingerprint, Hexagon, Zap } from 'lucide-react';

const styles = [
  { name: "Minimal & Clean", icon: Layers, desc: "Whitespace-driven, highly readable interfaces." },
  { name: "Luxury / Premium", icon: Sparkles, desc: "High-contrast, elegant typography, rich textures." },
  { name: "Glassmorphism", icon: Box, desc: "Frosted glass effects with vivid background blurs." },
  { name: "Corporate / Enterprise", icon: Layout, desc: "Structured, accessible, and data-dense layouts." },
  { name: "Modern Dark Mode", icon: Moon, desc: "Deep blacks, vibrant accents, eye-friendly contrast." },
  { name: "SaaS Dashboard", icon: LineChartIcon, desc: "Component-based, highly functional data views." },
  { name: "Creative / Agency", icon: PenTool, desc: "Unconventional layouts, scroll animations, bold colors." },
  { name: "AI Startup", icon: Cpu, desc: "Neon glows, terminal-inspired fonts, futuristic vibes." },
  { name: "Neumorphism", icon: Hexagon, desc: "Soft extruded shapes and subtle inner shadows." },
  { name: "Apple Inspired", icon: Fingerprint, desc: "Large typography, smooth scrolling, hardware focus." }
];

function LineChartIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

export default function DesignStyles() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Available Design Styles</h2>
          <p className="text-slate-400 text-lg">We adapt our visual language to match your brand's unique identity and target audience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {styles.map((style, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-400 text-slate-400 transition-colors">
                <style.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">{style.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{style.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

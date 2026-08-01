"use client";

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Fast Delivery",
  "Premium Quality",
  "Clean Code",
  "Lifetime Support",
  "Affordable Pricing",
  "Modern UI",
  "Scalable Architecture",
  "High Performance"
];

export default function ClientBenefits() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Choose Us</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="px-6 py-4 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-3 hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-default"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

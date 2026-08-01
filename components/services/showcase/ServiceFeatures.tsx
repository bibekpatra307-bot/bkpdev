"use client";

import { motion } from 'motion/react';
import { Smartphone, Search, Zap, LayoutDashboard, Brain, Lock, Cloud, CreditCard, BarChart, Shield, Database, Maximize } from 'lucide-react';

const features = [
  { name: "Responsive Design", icon: Smartphone, desc: "Flawless experience across all devices and screen sizes." },
  { name: "SEO Friendly", icon: Search, desc: "Optimized architecture for maximum search engine visibility." },
  { name: "Lightning Fast", icon: Zap, desc: "Optimized assets and edge caching for sub-second loads." },
  { name: "Admin Dashboard", icon: LayoutDashboard, desc: "Custom control panels to manage your data effortlessly." },
  { name: "AI Integration", icon: Brain, desc: "Smart features powered by OpenAI and Google Gemini." },
  { name: "Authentication", icon: Lock, desc: "Secure user login with OAuth and multi-factor support." },
  { name: "Cloud Hosting", icon: Cloud, desc: "Scalable infrastructure deployed on Vercel or AWS." },
  { name: "Payment Gateway", icon: CreditCard, desc: "Seamless Stripe integration for subscriptions and e-commerce." },
  { name: "Analytics", icon: BarChart, desc: "Real-time user insights and performance tracking." },
  { name: "Security", icon: Shield, desc: "Enterprise-grade protection against vulnerabilities." },
  { name: "CMS", icon: Database, desc: "Easy content management without touching code." },
  { name: "Scalable Architecture", icon: Maximize, desc: "Built to handle millions of users as you grow." }
];

export default function ServiceFeatures() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium Features Included</h2>
          <p className="text-xl text-slate-400 max-w-2xl">Every project comes packed with enterprise-grade capabilities out of the box.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

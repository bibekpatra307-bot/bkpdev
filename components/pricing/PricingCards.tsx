"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TIERS = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for startups and small businesses looking to establish a digital presence.",
    features: [
      "Responsive Website (Up to 5 Pages)",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "Mobile-First Design",
      "1 Month Free Support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Comprehensive solutions for growing businesses needing advanced functionality.",
    features: [
      "Custom Web Application",
      "CMS Integration",
      "E-commerce Capabilities (Up to 50 products)",
      "Advanced SEO Setup",
      "Analytics Dashboard",
      "3 Months Free Support"
    ],
    buttonText: "Start Building",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale digital transformation with custom architecture and AI integration.",
    features: [
      "Full-Stack Web & Mobile App",
      "AI & Machine Learning Integration",
      "Cloud Infrastructure Setup",
      "Automated Workflows & CI/CD",
      "Dedicated Project Manager",
      "24/7 Priority Support"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function PricingCards() {
  const [highlighted, setHighlighted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // We defer the setHighlighted to avoid synchronously triggering it during render/hydration
    let timeout: NodeJS.Timeout;
    const checkHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#pricing') {
        timeout = setTimeout(() => {
          setHighlighted(true);
          setTimeout(() => setHighlighted(false), 3000);
        }, 100);
      }
    };
    checkHash();
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div 
      className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 ${
        highlighted ? 'scale-[1.02]' : ''
      }`}
    >
      {TIERS.map((tier, idx) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
            tier.popular 
              ? 'bg-slate-900 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)] md:-translate-y-4' 
              : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
          } ${highlighted && tier.popular ? 'ring-4 ring-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.3)]' : ''}`}
        >
          {tier.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full tracking-wide">
              Most Popular
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
            <p className="text-slate-400 text-sm h-10">{tier.description}</p>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">{tier.price}</span>
              {tier.price !== "Custom" && <span className="text-slate-500 font-medium">/project</span>}
            </div>
          </div>

          <ul className="flex-1 space-y-4 mb-8">
            {tier.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-3">
                <Check className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-blue-400' : 'text-slate-500'}`} />
                <span className="text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => router.push('/contact')}
            className={`w-full py-3.5 rounded-xl font-medium transition-colors ${
              tier.popular
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            {tier.buttonText}
          </button>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function ServicePricing({ serviceName }: { serviceName: string }) {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      delivery: "1-2 Weeks",
      desc: `Perfect starting point for your ${serviceName} needs.`,
      features: ["Standard Design", "Core Functionality", "Responsive Layout", "Basic SEO", "1 Month Support"],
      popular: false
    },
    {
      name: "Professional",
      price: "₹2,499",
      delivery: "3-4 Weeks",
      desc: "Advanced features and premium design for growing businesses.",
      features: ["Premium Custom Design", "Advanced Functionality", "CMS Integration", "Analytics Setup", "3 Months Support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      delivery: "TBD",
      desc: "Full-scale solution with custom architecture and AI integration.",
      features: ["World-Class Architecture", "AI Integration", "Custom Workflows", "Dedicated Manager", "24/7 Priority Support"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Choose the perfect plan for your {serviceName} project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-4 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-slate-900 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)] md:-translate-y-4' 
                  : 'bg-slate-900/50 border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500 font-medium">/project</span>}
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Delivery: <span className="text-slate-200">{plan.delivery}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact"
                className={`w-full py-3.5 rounded-xl font-medium text-center transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

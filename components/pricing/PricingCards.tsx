'use client';

import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses and startups.',
    price: '$499',
    duration: '/project',
    features: [
      { name: 'Custom Website Design', included: true },
      { name: 'Responsive Layout', included: true },
      { name: 'Up to 5 Pages', included: true },
      { name: 'Basic SEO Setup', included: true },
      { name: 'E-commerce Integration', included: false },
      { name: 'Custom App Development', included: false },
      { name: 'Priority Support', included: false },
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses needing more features.',
    price: '$1,299',
    duration: '/project',
    features: [
      { name: 'Custom Website Design', included: true },
      { name: 'Responsive Layout', included: true },
      { name: 'Up to 15 Pages', included: true },
      { name: 'Advanced SEO Setup', included: true },
      { name: 'E-commerce Integration', included: true },
      { name: 'Custom App Development', included: false },
      { name: 'Priority Support', included: true },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations requiring custom solutions.',
    price: 'Custom',
    duration: '',
    features: [
      { name: 'Custom Website Design', included: true },
      { name: 'Responsive Layout', included: true },
      { name: 'Unlimited Pages', included: true },
      { name: 'Advanced SEO Setup', included: true },
      { name: 'E-commerce Integration', included: true },
      { name: 'Custom App Development', included: true },
      { name: 'Priority Support', included: true },
    ],
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <section className="py-24 bg-white relative -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 lg:p-10 border ${
                plan.popular 
                  ? 'bg-slate-900 border-slate-800 shadow-2xl shadow-primary-900/20 transform lg:-translate-y-4' 
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg shadow-primary-600/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-bold font-heading ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className={`text-sm font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.duration}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary-400' : 'text-primary-600'}`} />
                    ) : (
                      <X className="w-5 h-5 shrink-0 text-slate-300" />
                    )}
                    <span className={`text-sm ${
                      plan.popular 
                        ? (feature.included ? 'text-slate-300' : 'text-slate-600')
                        : (feature.included ? 'text-slate-700' : 'text-slate-400')
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`block w-full py-4 px-6 rounded-full text-center font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-600/25'
                    : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                }`}
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

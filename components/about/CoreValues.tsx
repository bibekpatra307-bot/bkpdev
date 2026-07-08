'use client';

import { motion } from 'motion/react';
import { Lightbulb, ShieldCheck, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to deliver creative and effective solutions.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Integrity',
    description: 'We believe in transparency, honesty, and ethical practices in everything we do.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Collaboration',
    description: 'We work closely with our clients and each other to achieve shared success.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality',
    description: 'We maintain high standards in our work to ensure the best outcomes.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Growth',
    description: 'We are committed to continuous learning and growing together.',
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">OUR CORE VALUES</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-600 mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

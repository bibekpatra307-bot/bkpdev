'use client';

import { motion } from 'motion/react';
import { Users, Briefcase, Calendar, Star } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '100+',
    label: 'Happy Clients',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: '250+',
    label: 'Projects Completed',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    value: '4+',
    label: 'Years Experience',
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: '99%',
    label: 'Client Satisfaction',
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0f1c] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900/50 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center justify-center text-center ${index !== 0 ? 'pl-8' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-primary-400 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-400 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

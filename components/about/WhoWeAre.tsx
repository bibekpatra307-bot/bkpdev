'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, Briefcase, Calendar, Star } from 'lucide-react';

const stats = [
  { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, value: '100+', label: 'Happy Clients' },
  { icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />, value: '250+', label: 'Projects Completed' },
  { icon: <Calendar className="w-6 h-6 md:w-8 md:h-8" />, value: '4+', label: 'Years Experience' },
  { icon: <Star className="w-6 h-6 md:w-8 md:h-8" />, value: '95%', label: 'Client Satisfaction' },
];

export default function WhoWeAre() {
  return (
    <section className="py-6 md:py-24 relative overflow-hidden isolate">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-16 items-start">

          {/* Main content: clean, text-focused WHO WE ARE section (video removed) */}
          <div>
            <div className="mb-8">
              <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center md:text-left">
                <p className="text-xs md:text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">WHO WE ARE</p>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-slate-900 mb-4 leading-tight">
                  Your Trusted Digital Transformation Partner
                </h2>
                <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                  We are a team of passionate developers, designers, and problem solvers dedicated to turning ideas into meaningful digital experiences. We combine thoughtful design, modern technology, and strategic thinking to build solutions that help businesses grow, adapt, and succeed in a digital-first world.
                </p>
              </div>
            </div>

            {/* Statistics area - preserve original styles and content */}
            <div className="bg-white">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-2 md:mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, Briefcase, Calendar, Star } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8" />, value: '100+', label: 'Happy Clients' },
  { icon: <Briefcase className="w-8 h-8" />, value: '250+', label: 'Projects Completed' },
  { icon: <Calendar className="w-8 h-8" />, value: '4+', label: 'Years Experience' },
  { icon: <Star className="w-8 h-8" />, value: '99%', label: 'Client Satisfaction' },
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">WHO WE ARE</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Your Trusted Digital <br className="hidden sm:block" />
              Transformation Partner
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We are a team of passionate developers, designers, and problem solvers who believe in the power of technology to transform businesses and create meaningful experiences. Our goal is to deliver solutions that are not only functional but also impactful, scalable, and future-ready.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
               <Image
                 src="https://picsum.photos/seed/teamwork/800/600"
                 alt="Our Team"
                 fill
                 className="object-cover"
                 unoptimized
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

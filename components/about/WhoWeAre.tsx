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
    <section className="py-6 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left column: text/content (video background only behind this block) */}
          <div>
            <div className="relative overflow-hidden mb-6">
              {/* Video background limited to this block but full-bleed horizontally */}
              <video
                src="/about-photo/whoweare-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute left-1/2 -translate-x-1/2 w-screen inset-0 h-full object-cover"
              />
              {/* Dark/blue semi-transparent overlay to ensure text readability */}
              <div className="absolute left-1/2 -translate-x-1/2 w-screen inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/30" />

              {/* Content above the video */}
              <div className="relative z-10 py-6 px-4 md:py-8 md:px-6">
                <p className="text-xs md:text-sm font-bold text-white/90 tracking-wider uppercase mb-3">WHO WE ARE</p>
                <h2 className="text-2xl md:text-3xl md:text-4xl font-heading font-bold text-white mb-3 md:mb-6 leading-tight">
                  Your Trusted Digital <br className="hidden sm:block" />
                  Transformation Partner
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-5 md:mb-8 leading-relaxed">
                  We are a team of passionate developers, designers, and problem solvers who believe in the power of technology to transform businesses and create meaningful experiences. Our goal is to deliver solutions that are not only functional but also impactful, scalable, and future-ready.
                </p>
              </div>
            </div>

            {/* Statistics area - restore original white/light background and original styles */}
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

          {/* Right-side column (preserve existing content/layout) */}
          <div className="relative">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {/* Keep right-side content intact; previously the video lived here but now it's background for left text area */}
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white p-4 md:p-6">
                {/* If there was media or extra content here, it can remain; to avoid removing anything we keep a placeholder that preserves padding/space. */}
                <div className="text-slate-900">&nbsp;</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

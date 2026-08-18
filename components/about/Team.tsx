'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Bibek Patra',
    role: 'CEO & Founder',
    image: '/about-photo/bibek-founder-photo.png',
  },
  {
    name: 'Prithvi Raj Munda',
    role: 'Project Manager',
    image: '/about-photo/prithvi-manager-photo.jpg',
  },
  {
    name: 'Bhuban Mohakud',
    role: 'Tech Lead',
    image: '/about-photo/bhuban-techlead-photo.png',
  },
  {
    name: 'Sneha Kapoor',
    role: 'UI/UX Designer',
    image: '/about-photo/sneha-designer-photo.png',
  },
  {
    name: 'Vikas Singh',
    role: 'Backend Developer',
    image: '/about-photo/vikas-developer-photo.png',
  },
  {
    name: 'Neha Tiwari',
    role: 'QA Engineer',
    image: '/about-photo/neha-qe-photo.png',
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const transitionMs = 600; // slide transition duration
  const displayMs = 2000; // minimum display time per card
  const totalMs = displayMs + transitionMs; // interval between changes

  useEffect(() => {
    // respect prefers-reduced-motion
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq) {
      setReducedMotion(Boolean(mq.matches));
      const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', handler);
        else mq.removeListener(handler);
      };
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(i => (i + 1) % team.length);
    }, totalMs);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reducedMotion]);

  return (
    <section className="py-6 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <p className="text-xs md:text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">MEET OUR TEAM</p>
          <h2 className="text-2xl md:text-3xl md:text-4xl font-heading font-bold text-slate-900">
            Dedicated & Experienced Professionals
          </h2>
        </div>

        {/* Mobile / Tablet: single-card carousel (visible below lg) */}
        <div className="lg:hidden">
          <div className="max-w-sm mx-auto px-3">
            <div className="relative overflow-visible">
              {/* Render only the active slide to avoid stacking/cropping issues. Use motion for enter animation. */}
              <motion.div
                key={currentIndex}
                initial={reducedMotion ? {} : { opacity: 0, y: 12, scale: 0.99 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                transition={reducedMotion ? {} : { duration: transitionMs / 1000, ease: 'easeInOut' }}
                className="w-full mx-auto"
              >
                {(() => {
                  const member = team[currentIndex];
                  return (
                    <div className="w-full bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 text-center">
                      {/* Image: use object-contain and responsive auto height to avoid cropping */}
                      <div className="w-full max-h-60 md:max-h-72 overflow-hidden relative">
                        <Image referrerPolicy="no-referrer" src={member.image} alt={member.name} width={800} height={1200} className="w-full h-auto object-contain bg-slate-100" unoptimized />
                        {/* Overlay gradient: transparent -> semi-transparent dark at bottom */}
                        <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                          <h3 className="font-bold text-white mb-1 text-sm">{member.name}</h3>
                          <p className="text-white text-xs opacity-90">{member.role}</p>
                        </div>
                      </div>
                      {/* Social icons below image keep compact */}
                      <div className="p-2">
                        <div className="flex items-center justify-center gap-3">
                          <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>

              {/* Pagination dots */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {team.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Show member ${i + 1}`}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-slate-800' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop & larger screens: original grid preserved (visible at lg and above) */}
        <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] md:aspect-square">
                <Image referrerPolicy="no-referrer"
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-1 md:p-4 text-center">
                <h3 className="font-bold text-slate-900 mb-1 text-xs md:text-sm">{member.name}</h3>
                <p className="text-primary-600 text-[10px] md:text-xs font-medium mb-1">{member.role}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                    <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                    <Mail className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

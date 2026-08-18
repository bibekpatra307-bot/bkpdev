'use client';

import { motion } from 'motion/react';

export default function ContactHero() {
  return (
    <section className="relative isolate pt-16 md:pt-32 pb-10 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background video */}
      <video
        src="/contact-page-videohg/contact-us-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" aria-hidden />

      {/* Decorative blurred shapes — kept behind the video */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-100/50 blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs md:text-sm font-medium mb-3 md:mb-6"
        >
          CONTACT US
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] mb-3 md:mb-6"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          Let's Build Something <br />
          <span className="text-primary-400 font-semibold">Amazing Together</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.55)' }}
        >
          Have a project in mind? We'd love to hear about it. Drop us a message and our team will get back to you shortly.
        </motion.p>
      </div>
    </section>
  );
}

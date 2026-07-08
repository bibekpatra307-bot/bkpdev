'use client';

import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">OUR MISSION & VISION</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col sm:flex-row gap-6 items-start"
          >
             <div className="w-16 h-16 shrink-0 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
               <Target className="w-8 h-8" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
               <div className="w-12 h-1 bg-primary-600 rounded-full mb-6"></div>
               <p className="text-slate-600 leading-relaxed">
                 Our mission is to empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create exceptional user experiences.
               </p>
             </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col sm:flex-row gap-6 items-start"
          >
             <div className="w-16 h-16 shrink-0 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
               <Eye className="w-8 h-8" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
               <div className="w-12 h-1 bg-primary-600 rounded-full mb-6"></div>
               <p className="text-slate-600 leading-relaxed">
                 Our vision is to be a global leader in digital transformation, recognized for delivering excellence, fostering innovation, and building long-term partnerships.
               </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

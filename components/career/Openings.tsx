'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / Surat, India',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Engineer with deep knowledge of React, Next.js, and modern CSS frameworks.'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Surat, India',
    type: 'Full-time',
    description: 'Join our design team to create stunning, user-centered interfaces for web and mobile applications.'
  },
  {
    id: 3,
    title: 'Backend Developer (Node.js)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Looking for a robust Backend Developer to build scalable APIs and microservices.'
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Surat, India',
    type: 'Full-time',
    description: 'Help us grow our clients\' online presence through data-driven SEO and digital marketing campaigns.'
  }
];

export default function Openings() {
  return (
    <section className="py-24 bg-white relative -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-slate-600">
            Find the right role for you and help us build amazing digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {job.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-2">
                {job.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full group-hover:bg-primary-600 group-hover:text-white transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

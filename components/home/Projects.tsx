'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Bibek Books',
    category: 'Book Publishing Platform',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800',
    path: 'https://bibekbook.store/',
  },
  {
    title: 'GenGram',
    category: 'AI Social Media Platform',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800',
    path: 'https://gengram.online/',
  },
  {
    title: 'Bibek Patra Official',
    category: 'Personal Brand Website',
    image: '/bkp-bibekportfolio.png',
    path: 'https://bibekpatra.site/',
  },
];

export default function Projects() {
  return (
    <section className="bg-white relative py-[clamp(2.5rem,6vw,6rem)]">
      <div className="max-w-7xl mx-auto px-[clamp(1rem,2vw,2rem)]">
         
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-6 mb-[clamp(1rem,3vw,3rem)]">
          <div>
            <p className="text-[clamp(0.7rem,1vw,0.875rem)] font-bold text-primary-600 tracking-[0.18em] uppercase mb-3">Our Work</p>
            <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-heading font-bold text-slate-900">
              Featured Projects
            </h2>
          </div>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group text-[clamp(0.85rem,1.6vw,1rem)]"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(0.9rem,2vw,2rem)]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={project.path} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative rounded-2xl overflow-hidden mb-[clamp(0.75rem,2vw,1.5rem)] aspect-[16/9] md:aspect-[4/3] bg-slate-100">
                  <Image referrerPolicy="no-referrer"
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300"></div>
                </div>
                 
                <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[clamp(0.9rem,1.5vw,1rem)] text-slate-500 mb-2 md:mb-4">
                  {project.category}
                </p>
                <div className="flex items-center text-primary-600 font-medium text-[clamp(0.7rem,1vw,0.875rem)]">
                  View Live Project
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

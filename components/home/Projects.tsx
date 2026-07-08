'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'LearnHub',
    category: 'E-learning Platform',
    image: 'https://picsum.photos/seed/learnhub/600/400',
    path: '/portfolio',
  },
  {
    title: 'FoodieX',
    category: 'Food Delivery App',
    image: 'https://picsum.photos/seed/foodiex/600/400',
    path: '/portfolio',
  },
  {
    title: 'DreamHome',
    category: 'Real Estate Website',
    image: 'https://picsum.photos/seed/dreamhome/600/400',
    path: '/portfolio',
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Featured Projects
            </h2>
          </div>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={project.path} className="block">
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-4">
                  {project.category}
                </p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  View Project
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

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'E-commerce'];

const projects = [
  { id: 1, title: 'LearnHub', category: 'Web Development', image: 'https://picsum.photos/seed/learnhub/800/600', description: 'A comprehensive e-learning platform.' },
  { id: 2, title: 'FoodieX', category: 'Mobile App', image: 'https://picsum.photos/seed/foodiex/800/600', description: 'Fast and reliable food delivery application.' },
  { id: 3, title: 'DreamHome', category: 'Web Development', image: 'https://picsum.photos/seed/dreamhome/800/600', description: 'Modern real estate listing website.' },
  { id: 4, title: 'FinDash', category: 'UI/UX Design', image: 'https://picsum.photos/seed/findash/800/600', description: 'Financial dashboard and analytics interface.' },
  { id: 5, title: 'ShopEase', category: 'E-commerce', image: 'https://picsum.photos/seed/shopease/800/600', description: 'Scalable e-commerce solution for retail.' },
  { id: 6, title: 'HealthConnect', category: 'Mobile App', image: 'https://picsum.photos/seed/healthconnect/800/600', description: 'Telemedicine and patient care mobile app.' },
];

export default function PortfolioList() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                  : 'bg-slate-50 text-slate-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:text-primary-600 hover:scale-110 transition-all shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 relative bg-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

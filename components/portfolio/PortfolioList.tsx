'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = ['All', 'Book Publishing Platform', 'AI Social Media Platform', 'Personal Brand Website', 'E-commerce Product Discovery Platform', 'AI Voice Assistant', '3D Interior Design Platform', 'Utility Web Application'];

const projects = [
  { id: 1, title: 'Bibek Books', category: 'Book Publishing Platform', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800', description: 'A modern multi-author digital publishing platform where writers can publish books, manage their author profiles, and reach readers worldwide. The platform features secure authentication, premium UI, responsive design, author dashboards, advanced search, SEO optimization, and a seamless reading experience.', url: 'https://bibekbook.store/' },
  { id: 2, title: 'GenGram', category: 'AI Social Media Platform', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800', description: 'An AI-powered social media content generation platform that helps creators produce engaging captions, posts, hashtags, bios, and marketing content with an intuitive, responsive, and modern interface powered by artificial intelligence.', url: 'https://gengram.online/' },
  { id: 3, title: 'Bibek Patra Official', category: 'Personal Brand Website', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800', description: 'A professional personal branding website showcasing my portfolio, books, services, projects, achievements, blog, and contact information. Designed with premium UI, responsive layouts, smooth animations, and optimized performance.', url: 'https://bibekpatra.site/' },
  { id: 4, title: 'KRAYVO', category: 'E-commerce Product Discovery Platform', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800', description: 'A smart e-commerce aggregation platform that helps users discover products from multiple online shopping websites through a fast, organized, and user-friendly browsing experience with premium UI.', url: 'https://bibekpatra307-bot.github.io/Krayvo/' },
  { id: 5, title: 'Vivika AI', category: 'AI Voice Assistant', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800', description: 'Vivika AI is an intelligent conversational AI assistant designed to interact with users in real time through natural, human-like conversations. It provides instant responses, intelligent assistance, and an engaging chat experience powered by advanced artificial intelligence.', url: 'https://bibekpatra307-bot.github.io/Vivika/' },
  { id: 6, title: '3D Creator', category: '3D Interior Design Platform', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800', description: 'A professional 3D interior design showcase highlighting realistic architectural visualizations, room concepts, creative layouts, modern furniture, and immersive design experiences.', url: 'https://bibekpatra307-bot.github.io/3d-creator/' },
  { id: 7, title: 'Feet & Inches Calculator', category: 'Utility Web Application', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800', description: 'A lightweight and responsive web application designed to quickly convert feet, inches, centimeters, and meters with an intuitive interface, instant calculations, and mobile-friendly usability.', url: 'https://bibekpatra307-bot.github.io/feet-inches-calculator/' },
];

export default function PortfolioList() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-6 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] overflow-hidden">
                  <Image referrerPolicy="no-referrer"
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
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:text-primary-600 hover:scale-110 transition-all shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </a>
                
                <div className="p-3 md:p-6 relative bg-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-primary-600 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs md:text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                    View Live Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

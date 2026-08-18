"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Map categories to high-quality Unsplash images representing different project types
const projectData: Record<string, any[]> = {
  "Web Development": [
    { title: "FinTech SaaS Dashboard", category: "Web Application", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
    { title: "Luxury Real Estate", category: "Corporate Website", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
    { title: "Global Logistics Platform", category: "Enterprise App", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?w=1200&q=80" },
    { title: "Modern E-commerce", category: "Online Store", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" }
  ],
  "Mobile Development": [
    { title: "Health & Fitness Tracker", category: "iOS / Android App", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80" },
    { title: "Food Delivery Platform", category: "Mobile App", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80" },
    { title: "Mobile Banking Solution", category: "Finance App", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80" }
  ],
  "UI/UX": [
    { title: "AI Startup Interface", category: "Design System", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80" },
    { title: "Healthcare Dashboard", category: "UX Research", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" }
  ],
  "AI Services": [
    { title: "Intelligent Chatbot", category: "AI Assistant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" },
    { title: "Predictive Analytics", category: "Machine Learning", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" }
  ],
  "Interior Design": [
    { title: "Minimalist Loft", category: "3D Render", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" },
    { title: "Luxury Retail Store", category: "Commercial Design", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80" },
    { title: "Modern Workspace", category: "Office Design", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" }
  ],
  "Digital Marketing": [
    { title: "Global Campaign Analytics", category: "Marketing Dashboard", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
    { title: "Brand Identity Revamp", category: "Social Media Strategy", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&q=80" }
  ],
  default: [
    { title: "Premium SaaS Solution", category: "Software App", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
    { title: "Enterprise Platform", category: "B2B Software", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
    { title: "Consumer Mobile Experience", category: "App Design", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80" },
    { title: "Brand Ecosystem", category: "Identity", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80" }
  ]
};

export default function LivePreviewGallery({ category, serviceName }: { category: string, serviceName: string }) {
  const projects = projectData[category] || projectData.default;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0e] relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-blue-400">Work</span>
            </h2>
            <p className="text-lg text-slate-400">
              Explore our latest {serviceName} projects. We deliver world-class digital products that drive results.
            </p>
          </div>
          <button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium">
            View All Projects <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border border-slate-800"
            >
              <div className="relative aspect-[16/9] md:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glass Overlay on Hover */}
                <div className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-4 ${hoveredIdx === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="px-6 py-3 bg-white text-slate-950 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-slate-100 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <ExternalLink className="w-4 h-4" /> Live Preview
                  </button>
                  <button className="px-6 py-3 bg-slate-800/80 text-white border border-slate-600 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-slate-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-400">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

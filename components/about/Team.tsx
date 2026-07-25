'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Rohit Sharma',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    name: 'Priya Verma',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
  },
  {
    name: 'Amit Patel',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    name: 'Sneha Kapoor',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    name: 'Vikas Singh',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
  },
  {
    name: 'Neha Tiwari',
    role: 'QA Engineer',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
  },
];

export default function Team() {
  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <p className="text-xs md:text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">MEET OUR TEAM</p>
          <h2 className="text-2xl md:text-3xl md:text-4xl font-heading font-bold text-slate-900">
            Dedicated & Experienced Professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square">
                <Image referrerPolicy="no-referrer"
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-2 md:p-4 text-center">
                <h3 className="font-bold text-slate-900 mb-1 text-xs md:text-sm">{member.name}</h3>
                <p className="text-primary-600 text-[10px] md:text-xs font-medium mb-3">{member.role}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
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

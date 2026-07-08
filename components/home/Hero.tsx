'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, LayoutGrid, Code2, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(248,250,252,1)_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-100/50 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
              Welcome to BKP Developers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-6"
            >
              We Build Digital Solutions That Drive <br className="hidden sm:block" />
              <span className="text-gradient">Real Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl"
            >
              We are a creative team of developers, designers and problem solvers building modern websites, mobile apps & intelligent digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/40 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Our Work
                <LayoutGrid className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                    <Image
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="Client"
                      fill
                      sizes="40px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 z-10 relative">
                  +50
                </div>
              </div>
              <div className="text-sm font-medium text-slate-600">
                <span className="text-slate-900 font-bold block">100+ Clients</span>
                Trusted Worldwide
              </div>
            </motion.div>
          </div>

          {/* Right Image/Mockup Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] hidden md:block"
          >
            {/* Main Mockup Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square">
               <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col">
                  {/* Mockup Header */}
                  <div className="h-10 border-b border-slate-700 flex items-center px-4 gap-2 bg-slate-900/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  {/* Mockup Content */}
                  <div className="flex-1 p-6 relative">
                    <div className="font-mono text-sm text-slate-300 space-y-2 opacity-70">
                      <p><span className="text-pink-400">import</span> {'{'} Innovation {'}'} <span className="text-pink-400">from</span> <span className="text-green-400">'bkp-developers'</span>;</p>
                      <p><span className="text-pink-400">const</span> solution = <span className="text-blue-400">new</span> <span className="text-yellow-400">Innovation</span>();</p>
                      <br/>
                      <p>solution.<span className="text-yellow-400">build</span>({'{'}</p>
                      <p className="pl-4">quality: <span className="text-purple-400">100</span>,</p>
                      <p className="pl-4">performance: <span className="text-green-400">'optimized'</span>,</p>
                      <p className="pl-4">design: <span className="text-green-400">'premium'</span></p>
                      <p>{'}'});</p>
                    </div>
                    
                    {/* Floating Elements inside mockup */}
                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                         <Code2 className="w-5 h-5 text-white" />
                       </div>
                       <div>
                         <p className="text-white text-sm font-semibold">Clean Code</p>
                         <p className="text-slate-400 text-xs">Production Ready</p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* External Floating Elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-10 -left-10 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4"
               >
                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Smartphone className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-slate-900 font-bold text-sm">Mobile First</p>
                   <p className="text-slate-500 text-xs">Fully Responsive</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

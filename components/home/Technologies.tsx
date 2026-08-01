'use client';

import { technologies } from './logosData';

export default function Technologies() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-900 text-center">
          Powered by Industry-Leading Technologies
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-8 md:gap-12 overflow-hidden group/container">
        {/* Top Row: Moves Left */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] items-center">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={`top-${tech.name}-${idx}`}
              className="flex-shrink-0 mx-6 md:mx-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110 "
              title={tech.name}
              dangerouslySetInnerHTML={{ __html: tech.svg }}
            />
          ))}
        </div>

        {/* Bottom Row: Moves Right */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] items-center">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={`bottom-${tech.name}-${idx}`}
              className="flex-shrink-0 mx-6 md:mx-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110 "
              title={tech.name}
              dangerouslySetInnerHTML={{ __html: tech.svg }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

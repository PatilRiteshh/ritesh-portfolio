import React from 'react';
import { TECH_TICKER_ITEMS } from '../data/portfolioData';

export const TechMarquee: React.FC = () => {
  // Duplicate array to ensure endless seamless loop
  const marqueeItems = [...TECH_TICKER_ITEMS, ...TECH_TICKER_ITEMS, ...TECH_TICKER_ITEMS];

  return (
    <div
      id="tech-ticker-container"
      className="relative w-full overflow-hidden bg-[#202223] border-y border-white/10 py-4 sm:py-5 shadow-inner"
    >
      {/* Left/Right Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#202223] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#202223] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling ribbon */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-10 whitespace-nowrap cursor-default">
        {marqueeItems.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-6 sm:gap-10 group"
          >
            <span className="font-heading font-semibold text-base sm:text-lg text-white/90 group-hover:text-[#35C6E8] group-hover:scale-105 transition-all duration-200">
              {tech}
            </span>
            <span className="text-[#7ED957] font-bold text-sm sm:text-base opacity-80 group-hover:text-[#35C6E8] transition-colors">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

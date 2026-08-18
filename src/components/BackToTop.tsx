import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      
      setIsVisible(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-floating-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#202223]/90 border border-white/20 text-white hover:text-[#35C6E8] hover:border-[#35C6E8] shadow-2xl backdrop-blur-md transition-colors group flex items-center justify-center"
          title="Scroll back to top"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg className="w-9 h-9 -rotate-90 absolute">
            <circle
              cx="18"
              cy="18"
              r="15"
              className="text-white/10"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              className="text-[#35C6E8]"
              strokeWidth="2"
              strokeDasharray={94.2}
              strokeDashoffset={94.2 - (94.2 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  FileDown,
  FolderGit2,
  Sparkles,
  GraduationCap,
  ChevronDown,
  Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  'Java Full Stack Developer',
  'Spring Boot & REST Architect',
  'Relational Database & MySQL Specialist',
  'BE Computer Engineering @ SPPU',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);

    const updateTime = () => {
      const now = new Date();
      // Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const handleResumeClick = () => {
    sound.playSuccess();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    onOpenResume();
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:py-28 overflow-hidden bg-[#17191A]"
    >
      {/* Background Ambient Glows and Matrix Dot Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top-left Blue/Cyan ambient glow */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#2196F3]/15 rounded-full blur-[120px]" />

        {/* Bottom-right Emerald/Purple ambient glow */}
        <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-[#7ED957]/10 rounded-full blur-[140px]" />

        {/* Deep center Purple accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7567D9]/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center">
          {/* Typography and Interactive Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center max-w-3xl"
          >
            {/* Live Availability & Time Pill */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202223] border border-emerald-500/30 text-xs font-mono text-slate-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse" />
                <span className="text-emerald-400 font-semibold">Available for Hire &amp; Internships</span>
              </div>

              {currentTime && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#202223]/80 border border-white/10 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#35C6E8]" />
                  <span>{currentTime} IST (Pune, India)</span>
                </div>
              )}
            </div>

            {/* Main Greeting with Designer Target Inspector */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Hi I&apos;m{' '}
              <span className="relative inline-block my-1">
                <span className="target-box text-white bg-white/5">
                  Ritesh
                </span>
                <span className="absolute -top-3.5 -right-3 px-1.5 py-0.5 bg-[#35C6E8] text-[#17191A] font-mono text-[9px] font-bold rounded uppercase tracking-wider shadow">
                  Dev
                </span>
              </span>{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Patil
              </span>
            </h1>

            {/* Dynamic Role Cycler */}
            <div className="h-11 flex items-center justify-center mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#2196F3]/20 via-[#35C6E8]/20 to-[#7ED957]/20 border border-[#35C6E8]/40 text-[#35C6E8] font-mono text-sm sm:text-base font-bold tracking-wide flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#7ED957]" />
                  <span>{ROLES[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Supporting Pitch Text */}
            <p className="text-base sm:text-xl font-medium text-white/90 leading-snug mb-3 max-w-2xl">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-[#C7C9CA] max-w-2xl leading-relaxed mb-6">
              {PERSONAL_INFO.description}
            </p>

            {/* Quick Competency Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <span className="px-3 py-1.5 rounded-lg bg-[#202223] border border-white/10 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                <span>☕</span> Core Java &amp; OOP
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#202223] border border-white/10 text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                <span>🍃</span> Spring Boot &amp; REST
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#202223] border border-white/10 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                <span>🐬</span> MySQL &amp; JPA
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#202223] border border-white/10 text-xs font-mono text-purple-300 flex items-center gap-1.5">
                <span>⚡</span> MVC Architecture
              </span>
            </div>

            {/* Action Buttons with Sound Feedback */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8 w-full">
              {/* View Projects Button */}
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={() => sound.playClick()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] hover:from-[#1E88E5] hover:to-[#26C6DA] text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-400/40 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>

              {/* Download Resume Button */}
              <button
                id="hero-download-resume-btn"
                onClick={handleResumeClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#202223] hover:bg-[#282B2D] text-white border border-white/15 hover:border-[#35C6E8]/50 font-bold text-xs sm:text-sm shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-[#35C6E8]" />
                <span>Download Resume</span>
              </button>

              {/* Fast Track Recruiter Link */}
              <a
                id="hero-hire-ritesh-link"
                href="#hire-ritesh"
                onClick={() => sound.playPop()}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7ED957] hover:text-white px-4 py-3.5 rounded-xl bg-[#7ED957]/10 hover:bg-[#7ED957]/20 border border-[#7ED957]/30 transition-all group"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* University & Degree Badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400 pt-4 border-t border-white/10 w-full">
              <div className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-[#7ED957]" />
                <span>Savitribai Phule Pune University (SPPU)</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-[#35C6E8]">BE Computer Engineering</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={() => sound.playClick()}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 p-2 text-slate-500 hover:text-white transition-colors animate-bounce hidden sm:flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest"
        aria-label="Scroll down to about section"
      >
        <span>Explore Stack</span>
        <ChevronDown className="w-4 h-4 text-[#35C6E8]" />
      </a>
    </section>
  );
};

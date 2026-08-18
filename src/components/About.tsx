import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Sparkles,
  Target,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#17191A] overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#35C6E8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#7567D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Reference-inspired Target Box */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#202223] border border-white/10 text-xs font-mono text-[#35C6E8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7ED957]" />
            <span>BACKGROUND &amp; IDENTITY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            Get to Know{' '}
            <span className="relative inline-block">
              <span className="target-box text-white bg-white/5">
                Me
              </span>
              <span className="absolute -top-3.5 -right-3 px-1.5 py-0.5 bg-[#35C6E8] text-[#17191A] font-mono text-[9px] font-bold rounded uppercase tracking-wider shadow">
                RITESH
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#C7C9CA] leading-relaxed font-normal">
            {PERSONAL_INFO.aboutBio}
          </p>
        </div>

        {/* 3-Column Grid: Structured Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl bg-[#202223]/90 border border-white/10 hover:border-[#35C6E8]/40 p-6 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2196F3]/20 to-[#35C6E8]/20 border border-[#35C6E8]/30 flex items-center justify-center text-[#35C6E8] shadow-inner group-hover:scale-105 transition-transform flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#7ED957]/15 text-[#7ED957] border border-[#7ED957]/30">
                  {PERSONAL_INFO.education.status}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-1">Education</h3>
              <h4 className="font-heading font-semibold text-sm text-[#35C6E8]">
                {PERSONAL_INFO.education.degree}
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {PERSONAL_INFO.education.university}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Degree</span>
              <span className="text-white">Computer Engineering</span>
            </div>
          </motion.div>

          {/* Career Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl bg-[#202223]/90 border border-white/10 hover:border-[#7567D9]/40 p-6 transition-all duration-300 shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7567D9]/20 to-[#2196F3]/20 border border-[#7567D9]/30 flex items-center justify-center text-[#7567D9] shadow-inner group-hover:scale-105 transition-transform flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#35C6E8] bg-[#35C6E8]/10 px-2 py-0.5 rounded border border-[#35C6E8]/20">
                  Core Specialty
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-1">Engineering Focus</h3>
              <h4 className="font-heading font-semibold text-sm text-[#7567D9]">
                {PERSONAL_INFO.careerFocus}
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Enterprise Java backends, Spring Boot microservices, high-concurrency database queries &amp; RESTful APIs.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Domain</span>
              <span className="text-white">Java Full Stack</span>
            </div>
          </motion.div>

          {/* Technical Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-2xl bg-[#202223]/90 border border-white/10 hover:border-[#7ED957]/40 p-6 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7ED957]/20 to-[#35C6E8]/20 border border-[#7ED957]/30 flex items-center justify-center text-[#7ED957] shadow-inner group-hover:scale-105 transition-transform flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#7ED957] bg-[#7ED957]/10 px-2 py-0.5 rounded border border-[#7ED957]/20">
                  Interests
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">Technical Passions</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#17191A] text-slate-200 border border-white/10 hover:border-[#35C6E8]/40 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957]" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Stack</span>
              <span className="text-[#7ED957]">Modern Backend</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

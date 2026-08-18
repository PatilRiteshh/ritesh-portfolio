import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Coffee,
  Layers,
  Binary,
  Database,
  Globe,
  Flame,
  Send,
  Monitor,
  FolderGit2,
  GitBranch,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'foundations' | 'enterprise'>('all');

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#7567D9]" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-pink-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#7ED957]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#35C6E8]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-400" />;
      case 'Send':
        return <Send className="w-5 h-5 text-[#2196F3]" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-cyan-300" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-[#7ED957]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-purple-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#35C6E8]" />;
    }
  };

  const filteredStages = LEARNING_JOURNEY.filter((item) => {
    if (filter === 'foundations') return item.stage <= 5;
    if (filter === 'enterprise') return item.stage > 5;
    return true;
  });

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#17191A] overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#2196F3]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Reference-inspired Banner Ribbon Accent for Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Stylized Ribbon / Banner inspired by reference */}
          <div className="inline-block relative mb-6">
            <div className="relative z-10 px-8 py-2.5 rounded-xl bg-gradient-to-r from-[#2196F3] via-[#35C6E8] to-[#2196F3] text-white font-heading font-extrabold text-xl sm:text-2xl tracking-wider uppercase shadow-xl shadow-blue-500/25 transform -rotate-1 hover:rotate-0 transition-transform">
              My Learning Journey
            </div>
            {/* Banner rear fold effects */}
            <div className="absolute -left-2 top-2 bottom-2 w-4 bg-blue-800 -z-0 transform -skew-y-12 rounded-l" />
            <div className="absolute -right-2 top-2 bottom-2 w-4 bg-blue-800 -z-0 transform skew-y-12 rounded-r" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Structured Evolution to{' '}
            <span className="text-[#35C6E8]">Full Stack Mastery</span>
          </h2>

          <p className="text-base text-[#C7C9CA] leading-relaxed">
            A chronological timeline detailing deep foundational computer engineering, Java enterprise systems, database architectures, and practical deployment.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-white text-[#17191A] font-bold shadow'
                  : 'bg-[#202223] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              All 10 Stages
            </button>
            <button
              onClick={() => setFilter('foundations')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'foundations'
                  ? 'bg-[#35C6E8] text-[#17191A] font-bold shadow'
                  : 'bg-[#202223] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              Foundations (1–5)
            </button>
            <button
              onClick={() => setFilter('enterprise')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'enterprise'
                  ? 'bg-[#7ED957] text-[#17191A] font-bold shadow'
                  : 'bg-[#202223] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              Enterprise &amp; Projects (6–10)
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Central Connecting Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#2196F3] via-[#35C6E8] to-[#7ED957] -translate-x-1/2 opacity-30" />
          {/* Vertical Left Connecting Line for Mobile */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#2196F3] via-[#35C6E8] to-[#7ED957] opacity-30" />

          <div className="flex flex-col gap-8 sm:gap-10">
            {filteredStages.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
                >
                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div
                      className={`group relative rounded-2xl bg-[#202223]/90 border border-white/10 hover:border-white/20 p-6 transition-all duration-300 shadow-xl hover:shadow-black/50 ${
                        isEven ? 'md:text-left' : 'md:text-left'
                      }`}
                    >
                      {/* Card Top Row */}
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded bg-white/5 text-[#35C6E8] border border-white/10">
                          {item.phase}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#7ED957]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span className="capitalize">{item.status}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-[#35C6E8] transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills Utilized */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#17191A] text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-2 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#17191A] border-2 border-[#35C6E8] flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                      <span className="font-mono text-xs font-bold text-[#35C6E8]">
                        {item.stage}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer Side for Desktop Symmetry */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

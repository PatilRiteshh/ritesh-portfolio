import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Server,
  Database,
  Layout,
  Wrench,
  Binary,
  CheckCircle2,
  Sparkles,
  Terminal,
  Cpu,
  Search,
  Zap,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkillModal, setActiveSkillModal] = useState<{
    name: string;
    category: string;
  } | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-[#2196F3]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#35C6E8]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#7ED957]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#7567D9]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-pink-400" />;
      default:
        return <Cpu className="w-5 h-5 text-[#35C6E8]" />;
    }
  };

  const filterTabs = ['All', 'Backend & Java', 'Database', 'Frontend & Tools', 'CS Fundamentals'];

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Backend & Java') {
      return (
        category.category.includes('Java') ||
        category.category.includes('Backend')
      );
    }
    if (selectedFilter === 'Database') {
      return category.category.includes('Database');
    }
    if (selectedFilter === 'Frontend & Tools') {
      return (
        category.category.includes('Frontend') ||
        category.category.includes('Tools')
      );
    }
    if (selectedFilter === 'CS Fundamentals') {
      return category.category.includes('Core');
    }
    return true;
  }).map((category) => {
    if (!searchQuery) return category;
    const filteredSkills = category.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      skills: filteredSkills,
    };
  }).filter((category) => category.skills.length > 0);

  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-[#17191A] overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2196F3]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7ED957]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#202223] border border-white/10 text-xs font-mono text-[#35C6E8] mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#7ED957]" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Skills &amp;{' '}
            <span className="relative inline-block">
              <span className="target-box text-white bg-white/5">
                Technologies
              </span>
              <span className="absolute -top-3.5 -right-3 px-1.5 py-0.5 bg-[#35C6E8] text-[#17191A] font-mono text-[9px] font-bold rounded uppercase tracking-wider shadow">
                STACK
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#C7C9CA] leading-relaxed">
            A comprehensive, categorized breakdown of programming languages, backend frameworks, databases, and core computer science concepts.
          </p>
        </div>

        {/* Interactive Filter Pills & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#202223] p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  sound.playClick();
                  setSelectedFilter(tab);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedFilter === tab
                    ? 'bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g. Spring, MySQL)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#202223] border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#35C6E8]/60"
            />
          </div>
        </div>

        {/* 6-Grid Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative rounded-2xl bg-[#202223]/90 border border-white/10 hover:border-white/25 p-6 transition-all duration-300 shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#17191A] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#35C6E8] transition-colors">
                        {category.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} skills listed
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => {
                        sound.playPop();
                        setActiveSkillModal({
                          name: skill.name,
                          category: category.category,
                        });
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                        skill.highlight
                          ? 'bg-[#17191A] text-white border border-[#35C6E8]/40 shadow-sm hover:border-[#35C6E8] hover:bg-[#35C6E8]/20 hover:scale-105'
                          : 'bg-[#17191A]/80 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white hover:scale-105'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957]" />
                      )}
                      <span>{skill.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle accent bar */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Verified Competency</span>
                <span className="text-[#35C6E8]">Enterprise Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  FileDown,
  Github,
  Linkedin,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  X,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sound.playPop();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'View & Download Resume',
      subtitle: 'Official PDF and ATS formatted credentials',
      icon: <FileDown className="w-4 h-4 text-[#35C6E8]" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'projects',
      title: 'Explore Projects & Systems',
      subtitle: 'PG Management, Pre-Advocate & SOC Aggregator',
      icon: <Layers className="w-4 h-4 text-[#7567D9]" />,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'skills',
      title: 'Technical Skills & Java Stack',
      subtitle: 'Spring Boot, MySQL, REST APIs, JPA/Hibernate',
      icon: <Code2 className="w-4 h-4 text-[#7ED957]" />,
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'experience',
      title: 'Learning Journey Timeline',
      subtitle: '10-stage engineering progression at SPPU',
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'contact',
      title: 'Send Message / Hire Me',
      subtitle: `Direct contact to ${PERSONAL_INFO.email}`,
      icon: <Mail className="w-4 h-4 text-[#2196F3]" />,
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      subtitle: PERSONAL_INFO.socials.github,
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.socials.github, '_blank');
      },
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      subtitle: PERSONAL_INFO.socials.linkedin,
      icon: <Linkedin className="w-4 h-4 text-[#2196F3]" />,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.socials.linkedin, '_blank');
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div
        id="command-palette-backdrop"
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="command-palette-modal"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl bg-[#1C1E20] border border-white/20 shadow-2xl overflow-hidden text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#17191A]">
            <Search className="w-4 h-4 text-[#35C6E8]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections, projects, resume, or contact..."
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              Navigation &amp; Quick Actions
            </div>
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  item.action();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#202223] border border-white/10 flex items-center justify-center group-hover:border-[#35C6E8]/40 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-[#35C6E8] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="py-8 text-center text-xs text-slate-400 font-mono">
                No matching results found for &ldquo;{query}&rdquo;
              </div>
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2 bg-[#141517] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-300">ESC</kbd> to close</span>
              <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-300">↵</kbd> to select</span>
            </div>
            <span className="text-[#35C6E8]">Ritesh Patil Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

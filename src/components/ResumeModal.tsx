import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  FileDown,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  Github,
  Linkedin,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintOrDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="resume-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#1E2022] border border-white/20 shadow-2xl text-white my-auto p-6 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Actions */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 no-print">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35C6E8] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                OFFICIAL RESUME PREVIEW
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                id="resume-print-action-btn"
                onClick={handlePrintOrDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white text-xs font-semibold shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                id="resume-close-action-btn"
                onClick={onClose}
                className="p-2 rounded-xl bg-[#17191A] border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable / Clean Resume Content */}
          <div id="printable-resume" className="space-y-8 text-slate-200">
            {/* Header / Identity */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-[#35C6E8] mb-3">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.education.degree}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-white">
                  <Mail className="w-3.5 h-3.5 text-[#35C6E8]" />
                  <span>{PERSONAL_INFO.email}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span>{PERSONAL_INFO.education.university}</span>
                </span>
                <span>•</span>
                <span className="text-[#7ED957]">Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#35C6E8] mb-2">
                Professional Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.aboutBio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#35C6E8] mb-3">
                Education
              </h3>
              <div className="p-4 rounded-xl bg-[#17191A] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {PERSONAL_INFO.education.university}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#7ED957] px-2.5 py-1 rounded bg-[#7ED957]/10 border border-[#7ED957]/30 self-start sm:self-center">
                  Status: {PERSONAL_INFO.education.status}
                </span>
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#35C6E8] mb-3">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="p-3 rounded-lg bg-[#17191A] border border-white/10">
                    <span className="font-mono font-bold text-white block mb-1">
                      {cat.category}:
                    </span>
                    <span className="text-slate-300 font-mono">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#35C6E8] mb-3">
                Key Technical Projects
              </h3>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-[#17191A] border border-white/10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="font-heading font-bold text-white text-base">
                        {proj.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#35C6E8]">
                        {proj.technologies.slice(0, 4).join(' • ')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {proj.shortDescription}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                      {proj.features.slice(0, 3).map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note in modal */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-400 no-print">
            <p>Generated dynamically for recruiters &amp; technical hiring managers.</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

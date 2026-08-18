import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-content"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1C1E20] border border-white/15 shadow-2xl text-white my-auto p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#17191A] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35C6E8] px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                {project.type.toUpperCase()} SYSTEM
              </span>
              {project.disclaimer && (
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>AI Legal Notice</span>
                </span>
              )}
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies Badges */}
          <div className="mb-8 pb-6 border-b border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#17191A] text-white border border-white/10 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview, Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Overview */}
            <div className="col-span-1 md:col-span-2 rounded-xl bg-[#222527] p-5 border border-white/10">
              <h4 className="font-heading font-semibold text-base text-[#35C6E8] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#35C6E8]" />
                <span>Project Overview</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">{project.overview}</p>
            </div>

            {/* Problem */}
            <div className="rounded-xl bg-[#222527] p-5 border border-red-500/20">
              <h4 className="font-heading font-semibold text-base text-red-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>The Problem</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="rounded-xl bg-[#222527] p-5 border border-emerald-500/20">
              <h4 className="font-heading font-semibold text-base text-emerald-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>The Solution</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Section with Visual Blueprint */}
          <div className="mb-8 rounded-xl bg-[#17191A] p-5 border border-white/10">
            <h4 className="font-heading font-semibold text-base text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#7567D9]" />
              <span>System Architecture &amp; Data Flow</span>
            </h4>

            <div className="p-4 rounded-lg bg-[#1F2224] border border-white/5 mb-4 font-mono text-xs text-[#35C6E8] overflow-x-auto">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-slate-400">Flow:</span>
                <span>{project.architecture.flowDescription}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#222527] border border-white/5">
                <span className="text-slate-400 block mb-1">Backend Layer:</span>
                <span className="text-white font-semibold">{project.architecture.backend}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#222527] border border-white/5">
                <span className="text-slate-400 block mb-1">Data Storage:</span>
                <span className="text-white font-semibold">{project.architecture.database}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#222527] border border-white/5">
                <span className="text-slate-400 block mb-1">Security / Services:</span>
                <span className="text-white font-semibold">
                  {project.architecture.securityOrTools || 'REST Standards'}
                </span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="font-heading font-semibold text-base text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7ED957]" />
              <span>Key Features &amp; Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#202223] border border-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-normal">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          <div className="mb-8">
            <h4 className="font-heading font-semibold text-base text-white mb-3 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Engineering Challenges &amp; Solutions</span>
            </h4>
            <div className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#202223] border-l-2 border-[#35C6E8] text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  {challenge}
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Disclaimer if present */}
          {project.disclaimer && (
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-200/90 text-xs flex items-center gap-2 mb-8">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Action Links & Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <a
                id={`modal-github-link-${project.id}`}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25282A] hover:bg-[#2F3235] text-white border border-white/15 text-sm font-semibold transition-all shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  id={`modal-demo-link-${project.id}`}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] hover:from-[#1E88E5] hover:to-[#26C6DA] text-white text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close Window [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

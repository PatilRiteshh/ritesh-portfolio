import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  Layers,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  FolderGit2,
  Info,
  Copy,
  Check,
  Code2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/sound';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filterTabs = ['All', 'Java & Spring Boot', 'Full Stack', 'Cybersecurity'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Java & Spring Boot') {
      return p.technologies.some((t) => t.includes('Java') || t.includes('Spring'));
    }
    if (activeFilter === 'Full Stack') {
      return p.id === 'pg-management' || p.id === 'pre-advocate';
    }
    if (activeFilter === 'Cybersecurity') {
      return p.id === 'soc-aggregator' || p.technologies.includes('MISP');
    }
    return true;
  });

  const handleCopyRepo = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    navigator.clipboard.writeText(project.githubUrl);
    setCopiedId(project.id);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.7 },
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleOpenProjectModal = (project: Project) => {
    sound.playClick();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#17191A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#2196F3]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#7567D9]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Reference-inspired Target Selector Box */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#202223] border border-white/10 text-xs font-mono text-[#35C6E8] mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-[#7ED957]" />
            <span>FEATURED SHOWCASE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Some of the{' '}
            <span className="relative inline-block">
              <span className="target-box text-white bg-white/5">
                projects
              </span>
              <span className="absolute -top-3.5 -right-3 px-1.5 py-0.5 bg-[#35C6E8] text-[#17191A] font-mono text-[9px] font-bold rounded uppercase tracking-wider shadow">
                PORTFOLIO
              </span>
            </span>{' '}
            I&apos;ve built
          </h2>

          <p className="text-sm sm:text-base text-[#C7C9CA] leading-relaxed">
            Production-grade backend architectures, full-stack web platforms, and cybersecurity tools engineered with Java, Spring Boot, MySQL, and modern security protocols.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                sound.playClick();
                setActiveFilter(tab);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === tab
                  ? 'bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white shadow-lg shadow-blue-500/25 font-bold scale-105'
                  : 'bg-[#202223] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 2-Column Grid on Desktop / 1-Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onClick={() => handleOpenProjectModal(project)}
              className={`group relative rounded-3xl bg-gradient-to-br ${project.colorTheme.bgGradient} border ${project.colorTheme.cardBorder} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 overflow-hidden cursor-pointer`}
            >
              {/* Subtle top inner glow */}
              <div
                className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ backgroundColor: project.colorTheme.accentColor }}
              />

              <div>
                {/* Top Technology Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium ${project.colorTheme.badgeBg}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-black/30 border border-white/10">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleCopyRepo(project, e)}
                      className="p-1.5 rounded-full bg-black/40 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-1 text-[11px] font-mono"
                      title="Copy GitHub repo URL"
                    >
                      {copiedId === project.id ? (
                        <Check className="w-3.5 h-3.5 text-[#7ED957]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <span className="p-1.5 rounded-full bg-black/40 border border-white/10 text-slate-300 hover:text-white flex items-center gap-1 text-[11px] font-mono">
                      <Info className="w-3.5 h-3.5 text-[#35C6E8]" />
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3 group-hover:text-[#35C6E8] transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* UI Mockup Container */}
                <div className="mb-6 rounded-2xl bg-black/30 border border-white/10 p-2 sm:p-3 shadow-inner transform group-hover:scale-[1.01] transition-transform duration-300">
                  <ProjectMockup type={project.mockupType} />
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#35C6E8] transition-colors">
                  <span>Explore Architecture &amp; Solution</span>
                  <ArrowUpRight className="w-4 h-4 text-[#35C6E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <a
                    id={`github-link-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-black/40 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      id={`demo-link-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-black/40 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
                      title="View Live Link / Repository"
                      aria-label={`View Live demo or repository for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Database,
  ArrowRight,
  Download,
  Mail,
  Clock,
  Briefcase,
  Copy,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface RecruiterDeckProps {
  onOpenResume: () => void;
}

export const RecruiterDeck: React.FC<RecruiterDeckProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    sound.playPop();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-[#2196F3]" />,
      title: 'Backend Engineering Core',
      desc: 'Expertise in Java 17+, Object-Oriented Architecture, Collections, Multithreading & Spring Boot Microservices.',
    },
    {
      icon: <Database className="w-5 h-5 text-[#7ED957]" />,
      title: 'ACID Relational Databases',
      desc: 'High-performance MySQL schema design, indexing, JDBC drivers, and Hibernate / JPA ORM persistence.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#35C6E8]" />,
      title: 'Enterprise REST Standards',
      desc: 'Clean MVC layering, DTO patterns, Spring Security, JWT authentication, and structured error handling.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Fast Onboarding & Problem Solving',
      desc: 'BE Computer Engineering student at SPPU with strong algorithmic foundations and eager learning agility.',
    },
  ];

  return (
    <section id="hire-ritesh" className="py-20 bg-gradient-to-b from-[#17191A] via-[#1A1C1E] to-[#141517] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#7ED957]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Recruiter Fast-Pitch Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#202223] via-[#1E2022] to-[#202223] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7ED957]/10 border border-[#7ED957]/30 text-xs font-mono text-[#7ED957]">
              <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse" />
              <span>FOR HIRING MANAGERS &amp; RECRUITERS</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#35C6E8]" />
              <span>Available for Immediate Full-Time / Internship Opportunities</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Looking for a dedicated{' '}
                <span className="bg-gradient-to-r from-[#2196F3] via-[#35C6E8] to-[#7ED957] bg-clip-text text-transparent">
                  Java Full Stack Engineer
                </span>{' '}
                ready to make an immediate impact?
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                I bring strong fundamental problem-solving skills from my Computer Engineering curriculum at Savitribai Phule Pune University combined with hands-on production experience in Spring Boot, MySQL, and modern web application development.
              </p>

              {/* 4 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#17191A]/80 border border-white/10 space-y-1">
                    <div className="flex items-center gap-2">
                      {h.icon}
                      <h4 className="font-heading font-bold text-xs text-white">{h.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Instant Action Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-[#17191A] border border-[#35C6E8]/30 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Direct Fast-Track</span>
                  <span className="text-xs font-mono text-[#7ED957] bg-[#7ED957]/10 px-2 py-0.5 rounded border border-[#7ED957]/30">
                    Active Response
                  </span>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Direct Email</label>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#202223] border border-white/10 text-xs font-mono text-white">
                    <span>{PERSONAL_INFO.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-[#2196F3] text-slate-300 hover:text-white transition-colors"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#7ED957]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Java%20Full%20Stack%20Developer&body=Hi%20Ritesh,%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20schedule%20an%20interview%20for%20a%20Java%20Full%20Stack%20Development%20role.`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white text-xs font-bold shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Interview Invitation</span>
                  </a>

                  <button
                    onClick={onOpenResume}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#202223] hover:bg-[#282B2D] border border-white/15 text-slate-200 hover:text-white text-xs font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Download className="w-4 h-4 text-[#7ED957]" />
                    <span>Download Official Resume (PDF)</span>
                  </button>
                </div>

                <p className="text-[11px] font-mono text-center text-slate-500 pt-1">
                  Location: Pune, Maharashtra, India • Open to Relocation &amp; Remote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

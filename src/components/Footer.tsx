import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#141517] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#2196F3] to-[#7567D9] p-[1px]">
                <div className="w-full h-full bg-[#17191A] rounded-[7px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-[#35C6E8]">&lt;RP /&gt;</span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-[#35C6E8]">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              BE Computer Engineering • Savitribai Phule Pune University
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-btn"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#1C1E20] hover:bg-[#25282A] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-btn"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#1C1E20] hover:bg-[#25282A] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#2196F3] transition-all shadow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-xl bg-[#1C1E20] hover:bg-[#25282A] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#35C6E8] transition-all shadow"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Ritesh Patil. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#35C6E8]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

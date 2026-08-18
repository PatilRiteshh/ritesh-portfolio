import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileText,
  Send,
  ArrowUpRight,
  Code2,
  Search,
  Volume2,
  VolumeX,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCommandPalette,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMuted, setIsMuted] = useState(sound.getIsMuted());

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Journey', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Hire Me', href: '#hire-ritesh', id: 'hire-ritesh' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy
      const sections = [
        'hero',
        'about',
        'skills',
        'experience',
        'projects',
        'hire-ritesh',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const unmuted = sound.toggleMute();
    setIsMuted(!unmuted);
    if (unmuted) {
      sound.playSuccess();
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#hero"
          onClick={() => sound.playClick()}
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#2196F3] via-[#35C6E8] to-[#7ED957] p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
            <div className="w-full h-full bg-[#17191A] rounded-[10px] flex items-center justify-center">
              <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#35C6E8] to-[#7ED957] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                &lt;RP /&gt;
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-wider uppercase text-white group-hover:text-[#35C6E8] transition-colors flex items-center gap-1.5">
              <span>RITESH</span>
              <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest -mt-1">
              Java Full Stack
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-1 bg-[#202223]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner shadow-black/40"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={() => sound.playClick()}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-[#C7C9CA] hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#2196F3]/30 to-[#35C6E8]/30 rounded-full border border-[#35C6E8]/50 shadow-sm shadow-cyan-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right side interactive tools & actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Search / Command Palette (⌘K) Trigger */}
          <button
            id="nav-search-palette-btn"
            onClick={() => {
              sound.playPop();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 bg-[#202223] hover:bg-[#282B2D] border border-white/10 hover:border-white/25 rounded-xl transition-all shadow-sm"
            title="Search portfolio (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#35C6E8]" />
            <span className="hidden md:inline text-slate-400">Search</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white/10 rounded border border-white/10 text-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Sound Mute/Unmute toggle */}
          <button
            id="nav-sound-toggle-btn"
            onClick={toggleSound}
            className="p-2 text-slate-300 hover:text-white bg-[#202223] hover:bg-[#282B2D] border border-white/10 rounded-xl transition-all"
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#7ED957]" />
            )}
          </button>

          {/* Resume Trigger */}
          <button
            id="nav-resume-btn"
            onClick={() => {
              sound.playSuccess();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-[#202223] hover:bg-[#2A2E30] border border-white/10 rounded-xl transition-all"
            title="View & Download Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#35C6E8]" />
            <span>Resume</span>
          </button>

          {/* Contact Button */}
          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={() => sound.playClick()}
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#2196F3] to-[#35C6E8] rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Let&apos;s Connect</span>
            <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Actions & Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-search-trigger"
            onClick={onOpenCommandPalette}
            className="p-2 text-slate-300 bg-[#202223] border border-white/10 rounded-xl"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-[#35C6E8]" />
          </button>

          <button
            id="mobile-resume-trigger"
            onClick={onOpenResume}
            className="p-2 text-slate-300 bg-[#202223] border border-white/10 rounded-xl"
            aria-label="Resume"
          >
            <FileText className="w-4 h-4 text-[#35C6E8]" />
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#202223] border border-white/10 text-white hover:text-[#35C6E8] focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 mt-2 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-[#35C6E8] border border-cyan-500/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5 border-t border-white/10 mt-2">
                <button
                  id="mobile-menu-resume-btn"
                  onClick={() => {
                    sound.playSuccess();
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#202223] text-white border border-white/15 text-xs font-semibold font-mono"
                >
                  <FileText className="w-4 h-4 text-[#35C6E8]" />
                  <span>View Official Resume</span>
                </button>

                <a
                  id="mobile-menu-contact-btn"
                  href="#contact"
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white text-xs font-bold shadow-lg shadow-blue-500/30"
                >
                  <span>Let&apos;s Connect</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

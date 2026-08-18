import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { LearningJourney } from './components/LearningJourney';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { RecruiterDeck } from './components/RecruiterDeck';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { BackToTop } from './components/BackToTop';
import {
  WaveTransitionTop,
  WaveTransitionBottom,
  GlowingSeparator,
} from './components/SectionTransitions';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#17191A] text-white flex flex-col selection:bg-[#2196F3] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Glass Navbar with Search & Sound Control */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with 3D Visual & Live Status */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. Technology Marquee Ticker */}
        <TechMarquee />

        {/* 3. About Section with Live Interactive Developer Shell */}
        <About />

        {/* Transition: About to Skills */}
        <GlowingSeparator color="#35C6E8" />

        {/* 4. Skills Bento Matrix */}
        <Skills />

        {/* Transition: Skills to Learning Journey */}
        <WaveTransitionTop accentColor="#2196F3" />

        {/* 5. Experience / 10-Stage Engineering Journey Timeline */}
        <LearningJourney />

        {/* Transition: Journey to Projects */}
        <WaveTransitionBottom accentColor="#7567D9" />

        {/* 6. Projects Showcase with Architecture Inspection */}
        <Projects />

        {/* Transition: Projects to Services */}
        <GlowingSeparator color="#7ED957" />

        {/* 7. What I Can Do / Services */}
        <Services />

        {/* 8. Recruiter Fast-Pitch Deck / Why Hire Ritesh */}
        <RecruiterDeck onOpenResume={() => setResumeOpen(true)} />

        {/* Transition: Services to Contact */}
        <WaveTransitionTop accentColor="#35C6E8" />

        {/* 9. Contact Section with Direct Form & Quick Actions */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Command Palette (⌘K) Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Floating Scroll to Top */}
      <BackToTop />
    </div>
  );
}

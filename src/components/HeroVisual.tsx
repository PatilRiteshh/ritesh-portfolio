import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Camera,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  Terminal,
  Upload,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ImageCustomizerModal,
  FRAME_GRADIENTS,
} from './ImageCustomizerModal';

export const HeroVisual: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  // Mouse tilt interaction state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  // State with localStorage persistence
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('ritesh_portfolio_photo') || PERSONAL_INFO.profileImage;
  });
  const [frameGradient, setFrameGradient] = useState<string>(() => {
    return (
      localStorage.getItem('ritesh_portfolio_gradient') ||
      FRAME_GRADIENTS[0].gradient
    );
  });
  const [scale, setScale] = useState<number>(() => {
    const saved = localStorage.getItem('ritesh_portfolio_scale');
    return saved ? parseFloat(saved) : 1;
  });

  const handleSaveCustomImage = (
    newUrl: string,
    newGradient?: string,
    newScale?: number
  ) => {
    setPhotoUrl(newUrl);
    localStorage.setItem('ritesh_portfolio_photo', newUrl);

    if (newGradient) {
      setFrameGradient(newGradient);
      localStorage.setItem('ritesh_portfolio_gradient', newGradient);
    }
    if (newScale !== undefined) {
      setScale(newScale);
      localStorage.setItem('ritesh_portfolio_scale', newScale.toString());
    }
  };

  const handleCardDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          handleSaveCustomImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Interactive 3D tilt tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  const activeFrameConfig =
    FRAME_GRADIENTS.find((f) => f.gradient === frameGradient) ||
    FRAME_GRADIENTS[0];

  return (
    <div
      id="hero-developer-visual"
      className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto select-none"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-10 -right-8 w-64 h-64 bg-gradient-to-br from-[#2196F3]/30 via-[#35C6E8]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-[#7567D9]/30 via-[#7ED957]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 3D Interactive Card Container */}
      <div
        style={{ perspective: 1000 }}
        className="relative flex items-center justify-center pt-2 pb-4"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDraggingOver(true);
          }}
          onDragLeave={() => setIsDraggingOver(false)}
          onDrop={handleCardDrop}
          onClick={() => setIsModalOpen(true)}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
          className={`relative w-full aspect-[4/5] rounded-[36px] bg-gradient-to-b ${frameGradient} p-[2px] shadow-2xl shadow-cyan-500/20 group transition-shadow duration-300 cursor-pointer ${
            isDraggingOver ? 'scale-105 ring-4 ring-[#35C6E8]' : ''
          }`}
        >
          {/* Inner backdrop card */}
          <div
            className={`w-full h-full rounded-[34px] bg-gradient-to-b ${activeFrameConfig.innerBg} overflow-hidden relative flex flex-col justify-end border border-white/15`}
          >
            {/* Dynamic Cursor Light Beam Reflection */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle 240px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.25), transparent 70%)`,
              }}
            />

            {/* Subtle background ambient lights */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#7ED957]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/4 -left-10 w-40 h-40 bg-[#35C6E8]/30 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Image with subtle zoom & depth */}
            <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
              <img
                id="ritesh-developer-photo"
                src={photoUrl}
                alt="Ritesh Patil - Java Full Stack Developer"
                referrerPolicy="no-referrer"
                style={{ transform: `scale(${scale})` }}
                className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02] drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* Subtle Bottom Vignette */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#17191A] via-[#17191A]/60 to-transparent pointer-events-none" />

            {/* Reference-style Corner Bounding Marks */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <div className="w-4 h-4 border-t-2 border-l-2 border-[#35C6E8]/60" />
            </div>
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <div className="w-4 h-4 border-t-2 border-r-2 border-[#35C6E8]/60" />
            </div>
            <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
              <div className="w-4 h-4 border-b-2 border-l-2 border-[#35C6E8]/60" />
            </div>
            <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
              <div className="w-4 h-4 border-b-2 border-r-2 border-[#35C6E8]/60" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Customizer & Manager Modal */}
      <ImageCustomizerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentImage={photoUrl}
        onSaveImage={handleSaveCustomImage}
        currentFrameGradient={frameGradient}
        currentScale={scale}
      />
    </div>
  );
};

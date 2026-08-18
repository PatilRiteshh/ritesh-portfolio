import React from 'react';

export const WaveTransitionTop: React.FC<{ accentColor?: string }> = ({
  accentColor = '#2196F3',
}) => (
  <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none -mb-[1px]">
    <svg
      className="relative block w-full h-8 sm:h-12 text-[#202223]"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" opacity="0.4" />
      <path d="M0,40 C200,100 450,20 700,80 C950,140 1100,50 1200,70 L1200,120 L0,120 Z" />
    </svg>
    <div
      className="h-[1px] w-full opacity-30"
      style={{
        background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
      }}
    />
  </div>
);

export const WaveTransitionBottom: React.FC<{ accentColor?: string }> = ({
  accentColor = '#35C6E8',
}) => (
  <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-[1px]">
    <div
      className="h-[1px] w-full opacity-30"
      style={{
        background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
      }}
    />
    <svg
      className="relative block w-full h-8 sm:h-12 text-[#202223] transform rotate-180"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" opacity="0.4" />
      <path d="M0,40 C200,100 450,20 700,80 C950,140 1100,50 1200,70 L1200,120 L0,120 Z" />
    </svg>
  </div>
);

export const GlowingSeparator: React.FC<{ color?: string }> = ({
  color = '#35C6E8',
}) => (
  <div className="relative w-full max-w-5xl mx-auto px-4 py-4 flex items-center justify-center pointer-events-none">
    <div
      className="h-[1px] w-full opacity-20"
      style={{
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
      }}
    />
    <div
      className="absolute w-2 h-2 rounded-full blur-[2px]"
      style={{ backgroundColor: color }}
    />
  </div>
);

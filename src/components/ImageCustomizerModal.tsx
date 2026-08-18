import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Upload,
  Link,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Sparkles,
  Sliders,
  Eye,
  Camera,
  Trash2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ImageCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  onSaveImage: (imageUrl: string, frameGradient?: string, scale?: number) => void;
  currentFrameGradient: string;
  currentScale: number;
}

export const PRESET_AVATARS = [
  {
    id: 'generated-portrait',
    name: 'Studio Portrait (Default)',
    url: '/src/assets/images/ritesh_portrait_1786990118886.jpg',
    category: 'Portrait',
  },
  {
    id: 'tech-dev-1',
    name: 'Cyber Java Engineer',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'Realistic',
  },
  {
    id: 'tech-dev-2',
    name: 'Modern Developer',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    category: 'Professional',
  },
  {
    id: 'tech-dev-3',
    name: 'Creative Tech Lead',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    category: 'Minimal',
  },
];

export const FRAME_GRADIENTS = [
  {
    id: 'cyan-emerald',
    name: 'Cyan & Emerald (Reference)',
    gradient: 'from-[#2563EB]/40 via-[#0D9488]/40 to-[#10B981]/50',
    innerBg: 'from-[#1E293B]/90 via-[#0F172A]/90 to-[#064E3B]/80',
    accent: '#35C6E8',
  },
  {
    id: 'blue-purple',
    name: 'Electric Blue & Purple',
    gradient: 'from-[#2196F3]/50 via-[#7567D9]/40 to-[#35C6E8]/50',
    innerBg: 'from-[#1E1F38]/90 via-[#131424]/90 to-[#0D1527]/80',
    accent: '#2196F3',
  },
  {
    id: 'purple-pink',
    name: 'Neon Violet & Rose',
    gradient: 'from-[#7567D9]/50 via-[#EC4899]/40 to-[#8B5CF6]/50',
    innerBg: 'from-[#2B1B3D]/90 via-[#1A1224]/90 to-[#0F0C1B]/80',
    accent: '#7567D9',
  },
  {
    id: 'sunset-gold',
    name: 'Amber & Sunset Emerald',
    gradient: 'from-[#F59E0B]/50 via-[#10B981]/40 to-[#3B82F6]/50',
    innerBg: 'from-[#2E2010]/90 via-[#1A1812]/90 to-[#0B1E19]/80',
    accent: '#F59E0B',
  },
];

export const ImageCustomizerModal: React.FC<ImageCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  onSaveImage,
  currentFrameGradient,
  currentScale,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [previewImage, setPreviewImage] = useState(currentImage);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [selectedGradient, setSelectedGradient] = useState(currentFrameGradient);
  const [scale, setScale] = useState(currentScale || 1);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WEBP, GIF, SVG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPreviewImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleApplyUrl = () => {
    if (!imageUrlInput.trim()) {
      setUrlError('Please enter an image URL.');
      return;
    }

    setUrlError(null);
    setPreviewImage(imageUrlInput.trim());
  };

  const handleSave = () => {
    onSaveImage(previewImage, selectedGradient, scale);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
    });
    onClose();
  };

  const handleResetToDefault = () => {
    const defaultImg = PERSONAL_INFO.profileImage;
    setPreviewImage(defaultImg);
    setSelectedGradient(FRAME_GRADIENTS[0].gradient);
    setScale(1);
  };

  return (
    <AnimatePresence>
      <div
        id="image-customizer-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="image-customizer-modal"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#1C1E20] border border-white/20 shadow-2xl text-white my-auto p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2196F3] to-[#35C6E8] flex items-center justify-center text-white shadow-md">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Add &amp; Customize Your Photo
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Upload any picture, paste a link, or pick presets with instant live preview.
                </p>
              </div>
            </div>

            <button
              id="close-image-customizer-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#17191A] border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Preview Box */}
            <div className="md:col-span-5 flex flex-col items-center">
              <span className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5 self-start">
                <Eye className="w-3.5 h-3.5 text-[#35C6E8]" />
                <span>Live Hero Frame Preview</span>
              </span>

              <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-[28px] bg-gradient-to-b p-[2px] shadow-xl overflow-hidden group">
                <div
                  className={`w-full h-full rounded-[26px] bg-gradient-to-b ${
                    FRAME_GRADIENTS.find((f) => f.gradient === selectedGradient)?.innerBg ||
                    FRAME_GRADIENTS[0].innerBg
                  } overflow-hidden relative flex flex-col justify-end border border-white/10`}
                >
                  <img
                    src={previewImage}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    style={{ transform: `scale(${scale})` }}
                    className="w-full h-full object-cover object-top transition-transform duration-200"
                    onError={() => {
                      setUrlError('Failed to load image from this URL. Please check the link.');
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#17191A] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Zoom / Scale Control */}
              <div className="w-full max-w-[240px] mt-4 p-3 rounded-xl bg-[#17191A] border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-[#35C6E8]" />
                    <span>Zoom Scale</span>
                  </span>
                  <span className="text-[#35C6E8]">{Math.round(scale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.5"
                  step="0.05"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="w-full accent-[#35C6E8] cursor-pointer"
                />
              </div>
            </div>

            {/* Right Controls */}
            <div className="md:col-span-7 flex flex-col gap-5">
              {/* Tab Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#17191A] border border-white/10">
                <button
                  id="tab-upload-photo"
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-2 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'upload'
                      ? 'bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                </button>

                <button
                  id="tab-url-photo"
                  onClick={() => setActiveTab('url')}
                  className={`flex-1 py-2 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'url'
                      ? 'bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Link className="w-3.5 h-3.5" />
                  <span>Image URL</span>
                </button>

                <button
                  id="tab-presets-photo"
                  onClick={() => setActiveTab('presets')}
                  className={`flex-1 py-2 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'presets'
                      ? 'bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Presets</span>
                </button>
              </div>

              {/* Tab 1: Upload */}
              {activeTab === 'upload' && (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                    isDragging
                      ? 'border-[#35C6E8] bg-[#35C6E8]/10'
                      : 'border-white/20 bg-[#17191A] hover:border-white/40'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      if (e.target.files?.[0]) handleFileSelect(e.target.files[0]);
                    }}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="w-12 h-12 rounded-2xl bg-[#202223] border border-white/10 flex items-center justify-center text-[#35C6E8] mb-3 shadow-inner">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Click to browse or drag &amp; drop any photo here
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    Supports PNG, JPG, WEBP, GIF, SVG (no size limit)
                  </p>
                </div>
              )}

              {/* Tab 2: URL */}
              {activeTab === 'url' && (
                <div className="p-4 rounded-2xl bg-[#17191A] border border-white/10 space-y-3">
                  <label className="block text-xs font-mono text-slate-300">
                    Paste Direct Image Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={imageUrlInput}
                      onChange={(e) => setImageUrlInput(e.target.value)}
                      placeholder="https://example.com/my-photo.jpg"
                      className="flex-1 rounded-xl bg-[#202223] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35C6E8]"
                    />
                    <button
                      onClick={handleApplyUrl}
                      className="px-4 py-2.5 rounded-xl bg-[#2196F3] hover:bg-[#1E88E5] text-white text-xs font-semibold"
                    >
                      Preview
                    </button>
                  </div>
                  {urlError && (
                    <p className="text-[11px] font-mono text-red-400">{urlError}</p>
                  )}
                  <p className="text-[11px] font-mono text-slate-400">
                    Tip: You can use your GitHub avatar URL, LinkedIn photo, or any hosted image.
                  </p>
                </div>
              )}

              {/* Tab 3: Presets */}
              {activeTab === 'presets' && (
                <div className="grid grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {PRESET_AVATARS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setPreviewImage(preset.url)}
                      className={`p-2 rounded-xl bg-[#17191A] border flex items-center gap-2.5 text-left transition-all ${
                        previewImage === preset.url
                          ? 'border-[#35C6E8] bg-[#35C6E8]/10 text-white'
                          : 'border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="overflow-hidden">
                        <span className="text-xs font-medium block truncate">
                          {preset.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {preset.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Backdrop Frame Styles */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Backdrop Glow &amp; Frame Theme
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FRAME_GRADIENTS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedGradient(f.gradient)}
                      className={`p-2 rounded-xl bg-[#17191A] border flex items-center gap-2 text-left transition-all ${
                        selectedGradient === f.gradient
                          ? 'border-[#35C6E8] bg-[#35C6E8]/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: f.accent }}
                      />
                      <span className="text-xs font-mono text-slate-200 truncate">
                        {f.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                <button
                  onClick={handleResetToDefault}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-[#17191A] hover:bg-[#202223] text-xs font-mono text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    id="save-custom-photo-btn"
                    onClick={handleSave}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white text-xs font-semibold shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 transition-all"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Apply Photo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

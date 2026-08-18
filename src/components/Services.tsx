import React from 'react';
import { motion } from 'motion/react';
import {
  Server,
  Layout,
  Database,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-[#2196F3]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#35C6E8]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#7ED957]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#7567D9]" />;
      default:
        return <Server className="w-6 h-6 text-[#2196F3]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#17191A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7ED957]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202223] border border-white/10 text-xs font-mono text-[#35C6E8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7ED957]" />
            <span>ENGINEERING OFFERINGS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What I Can{' '}
            <span className="relative inline-block">
              <span className="target-box text-white bg-white/5">
                Do
              </span>
              <span className="absolute -top-3.5 -right-3 px-1.5 py-0.5 bg-[#35C6E8] text-[#17191A] font-mono text-[9px] font-bold rounded uppercase tracking-wider shadow">
                SERVICES
              </span>
            </span>
          </h2>

          <p className="text-base text-[#C7C9CA] leading-relaxed">
            Specialized engineering capabilities focused on dependable server architecture, database modeling, and end-to-end full stack development.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#202223]/90 border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-black/60 hover:-translate-y-1"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-[#17191A] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                  {getIcon(service.iconName)}
                </div>

                {/* Subtitle */}
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#35C6E8] block mb-1">
                  {service.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-[#35C6E8] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Highlights checklist */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7ED957] flex-shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

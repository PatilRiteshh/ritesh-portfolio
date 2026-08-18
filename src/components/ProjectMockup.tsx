import React from 'react';
import {
  Home,
  Users,
  Shield,
  Search,
  Scale,
  Brain,
  AlertTriangle,
  Activity,
  CheckCircle2,
  Lock,
  Zap,
  Clock,
  KeyRound,
  FileText,
  Building,
  Radio,
  BarChart3,
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'pg' | 'legal' | 'soc';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'pg') {
    return (
      <div className="relative w-full rounded-xl bg-[#121624] border border-blue-400/20 p-4 font-sans text-xs text-white shadow-2xl overflow-hidden group">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Building className="w-3.5 h-3.5" />
            </div>
            <span className="font-heading font-semibold text-white">PG Stays Portal</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Room Booked: #304
          </span>
        </div>

        {/* Mockup Body Content */}
        <div className="grid grid-cols-12 gap-3">
          {/* Main Card */}
          <div className="col-span-8 bg-[#1A2138] rounded-lg p-3 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-slate-200">Elite Residency - Deluxe Double</span>
              <span className="text-blue-400 font-mono font-bold">₹8,500/mo</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-3">
              <span>📍 Pune, SPPU Zone</span>
              <span>•</span>
              <span className="text-emerald-400">WiFi + Meals + AC</span>
            </div>
            <div className="w-full bg-[#121624] rounded-full h-1.5 mb-1 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-3/4" />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400">
              <span>Occupancy: 3/4 Occupied</span>
              <span className="text-cyan-300">1 Spot Left</span>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="col-span-4 flex flex-col gap-2">
            <div className="bg-[#1A2138] rounded-lg p-2 border border-white/5 text-center">
              <span className="text-[9px] text-slate-400 block">Total Tenants</span>
              <span className="font-mono font-bold text-sm text-white">48 Active</span>
            </div>
            <div className="bg-[#1A2138] rounded-lg p-2 border border-white/5 text-center">
              <span className="text-[9px] text-slate-400 block">Dues Cleared</span>
              <span className="font-mono font-bold text-sm text-emerald-400">96.4%</span>
            </div>
          </div>
        </div>

        {/* Bottom Booking Action Bar */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-300 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Servlet / JDBC Verified</span>
          </div>
          <span className="text-cyan-300 font-mono text-[10px]">Auto Invoice Generated</span>
        </div>
      </div>
    );
  }

  if (type === 'legal') {
    return (
      <div className="relative w-full rounded-xl bg-[#171328] border border-purple-400/20 p-4 font-sans text-xs text-white shadow-2xl overflow-hidden group">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
              <Scale className="w-3.5 h-3.5" />
            </div>
            <span className="font-heading font-semibold text-white">Pre-Advocate AI</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30">
            <Brain className="w-3 h-3 text-cyan-300" />
            <span>Gemini AI Engine</span>
          </div>
        </div>

        {/* AI Query Box */}
        <div className="bg-[#211A3B] rounded-lg p-3 border border-purple-500/20 mb-3">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 mb-1">
            <span>Query: Tenant Agreement &amp; Security Deposit Return</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            &quot;Under Model Tenancy provisions, security deposits for residential premises must be refunded within stipulated timelines subject to property inspection...&quot;
          </p>
        </div>

        {/* Advocate Match Card */}
        <div className="bg-[#1C1633] rounded-lg p-2.5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-xs font-bold text-purple-200">
              Adv
            </div>
            <div>
              <span className="font-medium text-white block">Property &amp; Civil Law Advocate</span>
              <span className="text-[10px] text-slate-400">Pune District Court • 12+ Yrs Exp</span>
            </div>
          </div>
          <span className="px-2 py-1 rounded bg-purple-600 text-white text-[10px] font-semibold">
            Book Slot
          </span>
        </div>

        {/* Mandatory Disclaimer Badge */}
        <div className="mt-3 pt-2 border-t border-white/10 text-[9px] font-mono text-amber-300/90 flex items-center gap-1.5">
          <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
          <span className="truncate">Provides preliminary info; does not replace legal counsel.</span>
        </div>
      </div>
    );
  }

  // Type === 'soc'
  return (
    <div className="relative w-full rounded-xl bg-[#0E1A15] border border-emerald-400/20 p-4 font-sans text-xs text-white shadow-2xl overflow-hidden group">
      {/* SOC Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
          </div>
          <span className="font-heading font-semibold text-white">SOC Threat Aggregator</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3 text-red-400" />
          <span>Threat Level: ELEVATED</span>
        </span>
      </div>

      {/* Threat Feeds Grid */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-[#152922] rounded-lg p-2 border border-white/5 text-center">
          <span className="text-[9px] text-slate-400 block font-mono">VirusTotal</span>
          <span className="font-mono font-bold text-xs text-red-400">14 Detections</span>
        </div>
        <div className="bg-[#152922] rounded-lg p-2 border border-white/5 text-center">
          <span className="text-[9px] text-slate-400 block font-mono">AlienVault OTX</span>
          <span className="font-mono font-bold text-xs text-amber-400">6 Pulses</span>
        </div>
        <div className="bg-[#152922] rounded-lg p-2 border border-white/5 text-center">
          <span className="text-[9px] text-slate-400 block font-mono">MISP Feed</span>
          <span className="font-mono font-bold text-xs text-emerald-400">Synced</span>
        </div>
      </div>

      {/* IOC Row */}
      <div className="bg-[#13241E] rounded-lg p-2.5 border border-emerald-500/20 font-mono text-[10px]">
        <div className="flex items-center justify-between text-slate-300 mb-1">
          <span className="text-emerald-300">IOC SHA256:</span>
          <span className="text-slate-400">e3b0c44298fc1c14...</span>
        </div>
        <div className="flex items-center justify-between text-slate-400 text-[9px]">
          <span>Malware Family: Ransomware.Agent</span>
          <span className="text-red-400 font-bold">Risk Score: 88/100</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1 text-emerald-300">
          <Activity className="w-3 h-3" />
          <span>Live Feed Polling</span>
        </span>
        <span className="text-cyan-300">MongoDB Aggregation Pipeline</span>
      </div>
    </div>
  );
};

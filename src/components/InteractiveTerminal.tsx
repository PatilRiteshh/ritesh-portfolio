import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2, Copy, Check, Maximize2, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#35C6E8] font-bold">
            🚀 Ritesh Patil Developer Shell v2.4 (Java Full Stack Edition)
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-[#7ED957] font-semibold">help</span> or click any quick command chip below to explore my profile, skills, database schemas, and projects.
          </p>
        </div>
      ),
      timestamp: '12:00',
    },
  ]);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const quickCommands = [
    { label: 'skills', cmd: 'skills', color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-[#35C6E8]' },
    { label: 'projects', cmd: 'projects', color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300' },
    { label: 'whoami', cmd: 'whoami', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-[#7ED957]' },
    { label: 'sql: stack', cmd: 'select * from skills', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300' },
    { label: 'hire', cmd: 'hire', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300' },
  ];

  const handleCommand = (cmdStr: string) => {
    sound.playClick();
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let output: React.ReactNode = null;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cleanCmd === 'help') {
      output = (
        <div className="space-y-1.5 text-xs">
          <p className="text-[#35C6E8] font-bold">Available Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
            <div><span className="text-[#7ED957] font-mono font-semibold">whoami</span> - Background &amp; Education summary</div>
            <div><span className="text-[#7ED957] font-mono font-semibold">skills</span> - Full Java &amp; backend stack matrix</div>
            <div><span className="text-[#7ED957] font-mono font-semibold">projects</span> - Deployed systems &amp; repositories</div>
            <div><span className="text-[#7ED957] font-mono font-semibold">hire</span> - Why hire Ritesh + recruiter pitch</div>
            <div><span className="text-[#7ED957] font-mono font-semibold">contact</span> - Email &amp; social channels</div>
            <div><span className="text-[#7ED957] font-mono font-semibold">sql</span> - Query the relational database schema</div>
            <div><span className="text-[#7ED957] font-mono font-semibold">clear</span> - Reset terminal screen</div>
          </div>
        </div>
      );
    } else if (cleanCmd === 'whoami') {
      output = (
        <div className="space-y-1.5 text-xs text-slate-300">
          <p><span className="text-white font-bold">{PERSONAL_INFO.name}</span> — {PERSONAL_INFO.title}</p>
          <p className="text-slate-400">🎓 {PERSONAL_INFO.education.degree} @ {PERSONAL_INFO.education.university}</p>
          <p className="text-slate-400">📍 Pune, Maharashtra, India (IST)</p>
          <p className="text-[#35C6E8]">Focus: Scalable Java Backends, Spring Boot Microservices, MySQL, REST APIs, System Design.</p>
        </div>
      );
    } else if (cleanCmd === 'skills') {
      output = (
        <div className="space-y-2 text-xs">
          <p className="text-[#35C6E8] font-bold">⚡ Technical Competency Matrix:</p>
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="bg-white/5 p-2 rounded-lg border border-white/5">
              <span className="text-[#7ED957] font-semibold">{cat.category}: </span>
              <span className="text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</span>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd === 'projects') {
      output = (
        <div className="space-y-2 text-xs">
          <p className="text-[#35C6E8] font-bold">🛠️ Core Engineering Projects:</p>
          {PROJECTS.map((p, idx) => (
            <div key={p.id} className="bg-white/5 p-2.5 rounded-lg border border-white/5">
              <p className="text-white font-bold">{idx + 1}. {p.title} <span className="text-[10px] text-[#35C6E8] font-mono">[{p.technologies.slice(0, 3).join(', ')}]</span></p>
              <p className="text-slate-400 text-[11px] mt-0.5">{p.shortDescription}</p>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd.includes('select') || cleanCmd === 'sql') {
      output = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-[#7ED957]">mysql&gt; SELECT domain, tech_stack, level FROM dev_profile WHERE engineer = &apos;Ritesh Patil&apos;;</p>
          <div className="border border-white/10 rounded overflow-hidden text-[11px]">
            <table className="w-full text-left">
              <thead className="bg-white/10 text-white">
                <tr>
                  <th className="p-1.5 border-r border-white/10">domain</th>
                  <th className="p-1.5 border-r border-white/10">tech_stack</th>
                  <th className="p-1.5">status</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 divide-y divide-white/5">
                <tr>
                  <td className="p-1.5 border-r border-white/10">Backend</td>
                  <td className="p-1.5 border-r border-white/10">Java 17+, Spring Boot, JDBC</td>
                  <td className="p-1.5 text-[#7ED957]">PRODUCTION READY</td>
                </tr>
                <tr>
                  <td className="p-1.5 border-r border-white/10">Database</td>
                  <td className="p-1.5 border-r border-white/10">MySQL, JPA/Hibernate</td>
                  <td className="p-1.5 text-[#7ED957]">OPTIMIZED</td>
                </tr>
                <tr>
                  <td className="p-1.5 border-r border-white/10">APIs</td>
                  <td className="p-1.5 border-r border-white/10">RESTful Architecture, JWT</td>
                  <td className="p-1.5 text-[#7ED957]">AUTHENTICATED</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-[10px]">3 rows in set (0.002 sec)</p>
        </div>
      );
    } else if (cleanCmd === 'hire') {
      output = (
        <div className="space-y-2 text-xs bg-gradient-to-r from-blue-950/40 to-cyan-950/40 p-3 rounded-xl border border-[#35C6E8]/30">
          <p className="text-[#35C6E8] font-bold text-sm">🎯 Why Hire Ritesh Patil?</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li><strong>Strong Backend Foundation:</strong> Comprehensive mastery of Core Java, OOP, Collections, Multithreading &amp; JDBC.</li>
            <li><strong>Modern Enterprise Stack:</strong> Spring Boot, REST APIs, JPA/Hibernate, and relational MySQL schemas.</li>
            <li><strong>Academic Rigor:</strong> BE Computer Engineering at SPPU with high problem-solving discipline.</li>
            <li><strong>Immediate Availability:</strong> Ready to contribute to scalable full-time engineering teams &amp; internships.</li>
          </ul>
          <div className="pt-2 flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Java%20Developer`}
              className="px-3 py-1.5 rounded-lg bg-[#2196F3] text-white font-bold hover:bg-[#35C6E8] transition-colors"
            >
              📧 Send Interview Invite
            </a>
          </div>
        </div>
      );
    } else if (cleanCmd === 'contact') {
      output = (
        <div className="space-y-1 text-xs text-slate-300">
          <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#35C6E8] underline">{PERSONAL_INFO.email}</a></p>
          <p>🐙 GitHub: <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-[#35C6E8] underline">{PERSONAL_INFO.socials.github}</a></p>
          <p>💼 LinkedIn: <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#35C6E8] underline">{PERSONAL_INFO.socials.linkedin}</a></p>
        </div>
      );
    } else {
      output = (
        <p className="text-red-400 text-xs">
          Command not found: &apos;{cmdStr}&apos;. Type <span className="text-[#7ED957] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for available commands.
        </p>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdStr,
        output,
        timestamp: time,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const copyTranscript = () => {
    sound.playPop();
    const text = history.map((h) => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="interactive-terminal" className="w-full rounded-2xl bg-[#141517] border border-white/10 shadow-2xl overflow-hidden font-mono text-sm backdrop-blur-md">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C1E20] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-100" onClick={() => setHistory([])} title="Clear Screen" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" onClick={() => setIsExpanded(!isExpanded)} title="Toggle Expand" />
          <span className="ml-2 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#35C6E8]" />
            <span>ritesh@sppu-dev-box:~ (zsh)</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button
            onClick={copyTranscript}
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Copy Terminal Text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#7ED957]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title={isExpanded ? 'Minimize' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Quick Interactive Command Chips */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-[#17191A] border-b border-white/5 text-xs">
        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Quick Run:</span>
        {quickCommands.map((qc) => (
          <button
            key={qc.cmd}
            onClick={() => handleCommand(qc.cmd)}
            className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${qc.color} border text-[11px] font-semibold hover:scale-105 active:scale-95 transition-all shadow-sm`}
          >
            {qc.label}
          </button>
        ))}
      </div>

      {/* Output Container */}
      <div
        className={`p-4 overflow-y-auto space-y-3 transition-all ${
          isExpanded ? 'h-96' : 'h-64 sm:h-72'
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#35C6E8] font-bold">➜</span>
              <span className="text-[#7ED957] font-semibold">dev@ritesh-mac</span>
              <span className="text-slate-500 font-normal">:~ $</span>
              <span className="text-white font-bold">{item.command}</span>
            </div>
            <div className="pl-5">{item.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input Prompt */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#17191A] border-t border-white/10">
        <span className="text-[#35C6E8] font-bold">➜</span>
        <span className="text-[#7ED957] font-semibold text-xs hidden sm:inline">dev@ritesh-mac</span>
        <span className="text-slate-500 font-normal text-xs">:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'skills', 'hire', 'sql', 'projects'..."
          className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
        />
        <button
          onClick={() => handleCommand(input)}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-[#2196F3] text-slate-300 hover:text-white transition-colors"
          title="Run Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

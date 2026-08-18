import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
  User,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@example.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side processing & prepare mailto link option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#17191A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2196F3]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Centered Heading Inspired by Reference */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202223] border border-white/10 text-xs font-mono text-[#35C6E8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7ED957]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Let&apos;s Build Something{' '}
            <span className="relative inline-block">
              <span className="target-box text-white bg-white/5">
                Together
              </span>
              <span className="absolute -top-3.5 -right-3 px-1.5 py-0.5 bg-[#35C6E8] text-[#17191A] font-mono text-[9px] font-bold rounded uppercase tracking-wider shadow">
                CONNECT
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#C7C9CA] leading-relaxed">
            Feel free to reach out if you&apos;re looking for a developer, have a project idea, or simply want to connect.
          </p>
        </div>

        {/* Center Primary Email Box with 1-Click Copy & Mailto */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="group relative inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#202223] border border-white/15 hover:border-[#35C6E8]/50 shadow-2xl transition-all">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <Mail className="w-4 h-4" />
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#35C6E8] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>

            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span className="text-[#7ED957]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social Icons Strip (GitHub, LinkedIn, Email) */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              id="contact-github-btn"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#202223] hover:bg-[#2A2E30] border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-lg hover:-translate-y-0.5"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              id="contact-linkedin-btn"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#202223] hover:bg-[#2A2E30] border border-white/10 hover:border-blue-400/40 flex items-center justify-center text-slate-300 hover:text-[#2196F3] transition-all shadow-lg hover:-translate-y-0.5"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              id="contact-mail-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-12 h-12 rounded-xl bg-[#202223] hover:bg-[#2A2E30] border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-[#35C6E8] transition-all shadow-lg hover:-translate-y-0.5"
              title="Direct Email"
              aria-label="Send direct email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Validated Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#202223]/90 border border-white/10 p-6 sm:p-8 shadow-2xl"
        >
          {submitSuccess ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                Your message has been received. You can also send a direct email to{' '}
                <span className="font-mono text-[#35C6E8]">{PERSONAL_INFO.email}</span>.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Contact from ${encodeURIComponent(
                    formData.name
                  )}&body=${encodeURIComponent(formData.message)}`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#35C6E8] text-white text-xs font-semibold shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Mail Client</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#17191A] text-slate-300 hover:text-white border border-white/10 text-xs font-mono"
                >
                  Send Another Note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Sharma"
                      className={`w-full rounded-xl bg-[#17191A] border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-white/10 focus:border-[#35C6E8]'
                      }`}
                    />
                    <User className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-1.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full rounded-xl bg-[#17191A] border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-white/10 focus:border-[#35C6E8]'
                      }`}
                    />
                    <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-1.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Message <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your project, team opportunity, or inquiry..."
                    className={`w-full rounded-xl bg-[#17191A] border px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/10 focus:border-[#35C6E8]'
                    }`}
                  />
                  <MessageSquare className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-1.5">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                id="submit-contact-form-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2196F3] via-[#35C6E8] to-[#2196F3] bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-400/40 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Validating &amp; Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

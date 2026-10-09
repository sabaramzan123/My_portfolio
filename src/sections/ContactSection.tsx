import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { 
  Mail, Phone, MapPin, Copy, Check, 
  Send, ExternalLink, CheckCircle2, MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  // Form State
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'redirecting'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!subject.trim()) errs.subject = 'Please provide a subject.';
    if (!message.trim() || message.length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('redirecting');

    // Build mailto link with prefilled subject and body
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`
    )}&body=${encodeURIComponent(bodyContent)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Connect"
          subtitle="I'm open to Junior DevOps Engineer opportunities, cloud engineering roles, internships, and opportunities to learn and contribute to engineering teams."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all hover:border-cyan-500/40 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-900/40 font-semibold">
                  Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card with Copy button */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  type="button"
                  className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all hover:border-cyan-500/40 cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedPhone && (
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-900/40 font-semibold">
                  Phone copied to clipboard!
                </div>
              )}
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none space-y-3">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Fill in your details below to draft a message directly to <strong className="text-slate-900 dark:text-slate-200">{profileData.email}</strong>.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">Client Mailer Triggered</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your mail client has been opened with your message prefilled. You can also reach me directly at{' '}
                  <a href={`mailto:${profileData.email}`} className="text-cyan-600 dark:text-cyan-400 underline font-semibold">
                    {profileData.email}
                  </a>.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  Draft Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-name">
                      Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-email">
                      Your Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-subject">
                    Subject <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Junior DevOps Engineer Opportunity / Interview"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="contact-message">
                    Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note, job opportunity details, or questions..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1 font-mono">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'redirecting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-600 text-slate-950 font-semibold text-xs sm:text-sm font-mono transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'redirecting' ? 'Preparing Email Client...' : 'Dispatch Message'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

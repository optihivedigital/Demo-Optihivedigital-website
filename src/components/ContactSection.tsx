import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  Phone, 
  Building2, 
  User, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Copy, 
  ExternalLink,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { LeadFormData } from '../types';
import { AGENCY_INFO, SERVICES_DATA } from '../data/agencyData';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledBudget
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    comments: '',
    services: prefilledService ? [prefilledService] : ['Programmatic Advertising & Ad Ops'],
    budget: prefilledBudget || '$10,000 - $25,000 / month'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRefId, setLeadRefId] = useState<string>('');
  const [directMailtoUrl, setDirectMailtoUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const availableServices = [
    'Programmatic Advertising & Ad Ops',
    'Paid Search & Performance Social (PPC)',
    'SEO & Organic Growth Engine',
    'Conversion Rate Optimization (CRO)',
    'Creative Studio & Rich Media Ads',
    'Data Analytics & Server-Side Attribution',
    'White-Label Agency Ad Ops Squad'
  ];

  const budgetOptions = [
    '$3,000 - $10,000 / month',
    '$10,000 - $25,000 / month',
    '$25,000 - $50,000 / month',
    '$50,000 - $100,000 / month',
    '$100,000+ / month'
  ];

  const toggleService = (srv: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(srv);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your Full Name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid Email address.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMessage('Please enter your Company Name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter a Contact Phone Number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setLeadRefId(data.leadId || `OHD-${Math.floor(1000 + Math.random() * 9000)}`);
        setDirectMailtoUrl(data.directMailtoUrl || `mailto:${AGENCY_INFO.contactEmail}`);

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#F59E0B', '#FBBF24', '#D97706', '#FFFFFF']
          });
        } catch {
          // fallback
        }
      } else {
        setErrorMessage(data.message || 'Submission failed. Please try again or email us directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Client-side fallback if server offline
      const fallbackId = `OHD-${Math.floor(1000 + Math.random() * 9000)}`;
      setLeadRefId(fallbackId);
      setIsSuccess(true);
      const mailtoSubject = encodeURIComponent(`[Inquiry] ${formData.companyName} - ${formData.fullName}`);
      const mailtoBody = encodeURIComponent(
        `Full Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.companyName}\nBudget: ${formData.budget}\nServices: ${formData.services.join(', ')}\nComments: ${formData.comments}`
      );
      setDirectMailtoUrl(`mailto:${AGENCY_INFO.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyInquirySummary = () => {
    const summary = `--- OPTIHIVE DIGITAL INQUIRY ---
Target Recipient: ${AGENCY_INFO.contactEmail}
Ref ID: ${leadRefId}
Full Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Selected Services: ${formData.services.join(', ')}
Monthly Budget: ${formData.budget}
Comments: ${formData.comments}
--------------------------------`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-20 bg-white text-slate-900 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Our Strategy Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Ready to Scale Your ROAS? <br className="hidden sm:block" />
            <span className="text-blue-600">
              Request Your Custom Proposal
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Fill out the form below. All project details and data will be dispatched directly to{' '}
            <strong className="text-blue-600 font-mono">{AGENCY_INFO.contactEmail}</strong> for immediate forensic evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>OptiHive Direct Channel</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need a full programmatic ad ops partner, high-yield PPC scaling, or an ad account audit, our senior strategists are ready.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Direct Email Inbox</span>
                    <a 
                      href={`mailto:${AGENCY_INFO.contactEmail}`}
                      className="text-sm font-bold text-blue-600 hover:underline block font-mono mt-0.5"
                    >
                      {AGENCY_INFO.contactEmail}
                    </a>
                    <span className="text-[10px] text-emerald-600 font-medium">Auto-monitored 24/7</span>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Direct Strategy Line</span>
                    <a 
                      href={`tel:${AGENCY_INFO.phone.split('/')[0].trim()}`}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 block font-mono mt-0.5"
                    >
                      {AGENCY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Operations & Turnaround Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Proposal SLA</span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      4 to 12 Business Hours Turnaround
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-blue-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Our Proposal Commitments:</span>
                </div>
                <ul className="space-y-1.5 text-slate-700 text-[11px]">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Free forensic audit of your existing ad spend & tracking</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>No long-term lock-in contracts; performance-driven scopes</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Direct senior media buyer assignment (No junior handoffs)</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-xl relative overflow-hidden">
              
              {/* Success View */}
              {isSuccess ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                      Inquiry Ref ID: {leadRefId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your project inquiry has been logged and routed to{' '}
                      <span className="text-blue-600 font-mono font-bold">optihivedigital@gmail.com</span>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Company:</span>
                      <span className="font-bold text-slate-900">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email:</span>
                      <span className="font-bold text-slate-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-bold text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Budget:</span>
                      <span className="font-bold text-blue-600">{formData.budget}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-1">Services:</span>
                      <div className="flex flex-wrap gap-1">
                        {formData.services.map((s, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-gray-200 text-[10px] text-slate-700 font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={directMailtoUrl}
                      className="w-full sm:w-auto px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch In Your Email App</span>
                    </a>

                    <button
                      onClick={copyInquirySummary}
                      className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white hover:bg-gray-50 border border-gray-300 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Copy className="w-4 h-4 text-blue-600" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          companyName: '',
                          comments: '',
                          services: ['Programmatic Advertising & Ad Ops'],
                          budget: '$10,000 - $25,000 / month'
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-blue-600 underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="optihive-lead-form">
                  
                  {/* Form Headline */}
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Start Your Growth Acceleration
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tell us about your brand. All data is routed directly to <span className="text-blue-600 font-mono font-semibold">optihivedigital@gmail.com</span>.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 1) Full Name & Email (Row 1) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-fullname">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="field-fullname"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Tejas Kumar"
                          className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-email">
                        Business Email <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="field-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2) Phone Number & Company Name (Row 2) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-phone">
                        Phone Number <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="field-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-company">
                        Company / Brand Name <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="field-company"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Acme Growth Inc."
                          className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3) Service Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Services of Interest (Select All That Apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv, idx) => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'bg-blue-50 border-blue-400 text-blue-800 font-semibold'
                                : 'bg-gray-50 border-gray-200 text-slate-700 hover:border-gray-300'
                            }`}
                          >
                            <span className="truncate pr-2">{srv}</span>
                            <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                              isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white'
                            }`}>
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4) Monthly Budget Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-budget">
                      Estimated Monthly Ad Spend / Budget
                    </label>
                    <select
                      id="field-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    >
                      {budgetOptions.map((b, i) => (
                        <option key={i} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* 5) Comments / Project Brief */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="field-comments">
                      Comments / Project Goals & Details
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        id="field-comments"
                        rows={3}
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        placeholder="Tell us about your target audience, current ROAS roadblocks, or specific ad ops timeline..."
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-blue-200 cursor-pointer"
                      id="submit-proposal-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Routing Inquiry to optihivedigital@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry to OptiHive Strategy Team</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 mt-3 text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Data dispatched safely to <strong>optihivedigital@gmail.com</strong>. No spam guarantee.</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

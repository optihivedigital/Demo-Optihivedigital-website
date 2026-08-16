import React from 'react';
import { Logo } from './Logo';
import { AGENCY_INFO } from '../data/agencyData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  Globe, 
  Award, 
  Sparkles,
  Inbox
} from 'lucide-react';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenInquiries: () => void;
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAudit,
  onOpenInquiries,
  onScrollToSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" theme="dark" variant="full" />
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed pt-2">
              OptiHive Digital is an elite full-funnel digital marketing agency and programmatic ad operations house. We engineer hyper-targeted media campaigns that <strong className="text-blue-400">Grow, Attract, and Convert</strong> high-value customers worldwide.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <a
                href={`mailto:${AGENCY_INFO.contactEmail}`}
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors font-mono"
              >
                <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{AGENCY_INFO.contactEmail}</span>
              </a>

              <a
                href={`tel:${AGENCY_INFO.phone.split('/')[0].trim()}`}
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors font-mono"
              >
                <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{AGENCY_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-slate-400">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span>24/7 Global Campaign Operations & Monitoring</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Programmatic Advertising & DSPs
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Paid Search & Performance Social
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  SEO & Topical Authority Clusters
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Conversion Rate Optimization (CRO)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Rich Media & Dynamic Creative (DCO)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  Server-Side Attribution & GA4
                </button>
              </li>
            </ul>
          </div>

          {/* Agency Resources & Tools (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Agency Direct Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onScrollToSection('roi-calculator')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Interactive ROI & Media Yield Estimator
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Free Ad Spend & SEO Audit</span>
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('case-studies')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Verified Client Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Request Custom Proposal
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={onOpenInquiries} 
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 hover:bg-slate-750 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>View Submissions Ledger (optihivedigital@gmail.com)</span>
                </button>
              </li>
            </ul>

            {/* Certifications Badge Box */}
            <div className="pt-2">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Google Premier & Meta Verified Agency Partner</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} OptiHive Digital Marketing Agency. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span className="text-blue-400 font-medium">GROW • ATTRACT • CONVERT</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

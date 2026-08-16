import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Mail, 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenInquiries: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onOpenInquiries }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['services', 'process', 'roi-calculator', 'case-studies', 'tech-stack', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4'
        }`}
        id="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none"
              id="nav-logo-link"
            >
              <Logo size="md" theme="light" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <button
                onClick={() => scrollToSection('services')}
                className={`transition-colors hover:text-blue-600 cursor-pointer ${
                  activeSection === 'services' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection('process')}
                className={`transition-colors hover:text-blue-600 cursor-pointer ${
                  activeSection === 'process' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                Process
              </button>

              <button
                onClick={() => scrollToSection('case-studies')}
                className={`transition-colors hover:text-blue-600 cursor-pointer ${
                  activeSection === 'case-studies' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                Case Studies
              </button>

              <button
                onClick={() => scrollToSection('roi-calculator')}
                className={`transition-colors hover:text-blue-600 cursor-pointer flex items-center gap-1 ${
                  activeSection === 'roi-calculator' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                ROI Estimator
              </button>

              <button
                onClick={() => scrollToSection('tech-stack')}
                className={`transition-colors hover:text-blue-600 cursor-pointer ${
                  activeSection === 'tech-stack' ? 'text-blue-600 font-bold' : ''
                }`}
              >
                Tech Stack
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className="transition-colors hover:text-blue-600 cursor-pointer"
              >
                FAQ
              </button>
            </div>

            {/* Header Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenAudit}
                className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-700 border border-gray-200 bg-gray-50 hover:bg-white hover:border-blue-500 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                id="header-audit-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Free Ad Audit</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 text-xs font-bold rounded-full text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
                id="header-proposal-btn"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => scrollToSection('contact')}
                className="sm:hidden px-3.5 py-1.5 text-xs font-bold rounded-full text-white bg-slate-900 hover:bg-blue-600"
              >
                Contact
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
                id="mobile-hamburger-btn"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 transition-all duration-300 shadow-2xl animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-gray-100">
                <Logo size="sm" theme="light" />
              </div>

              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-between py-2 text-slate-700 hover:text-blue-600 font-semibold text-left"
              >
                <span>Services & Ad Ops</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('process')}
                className="flex items-center justify-between py-2 text-slate-700 hover:text-blue-600 font-semibold text-left"
              >
                <span>Growth Framework</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('case-studies')}
                className="flex items-center justify-between py-2 text-slate-700 hover:text-blue-600 font-semibold text-left"
              >
                <span>Case Studies</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('roi-calculator')}
                className="flex items-center justify-between py-2 text-blue-600 font-semibold text-left"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  ROI Estimator
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('tech-stack')}
                className="flex items-center justify-between py-2 text-slate-700 hover:text-blue-600 font-semibold text-left"
              >
                <span>Tech Ecosystem</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className="flex items-center justify-between py-2 text-slate-700 hover:text-blue-600 font-semibold text-left"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full py-2.5 rounded-lg border border-blue-200 text-blue-700 font-semibold text-sm flex items-center justify-center gap-2 bg-blue-50"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Run Instant Ad Audit
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <span>Request Proposal & Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center text-xs text-slate-500">
                  Direct Inquiries: <a href={`mailto:${AGENCY_INFO.contactEmail}`} className="text-blue-600 font-medium underline">{AGENCY_INFO.contactEmail}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

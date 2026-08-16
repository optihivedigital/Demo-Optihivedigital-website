import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerMarquee } from './components/PartnerMarquee';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { InquiriesViewerModal } from './components/InquiriesViewerModal';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { AGENCY_INFO } from './data/agencyData';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isInquiriesModalOpen, setIsInquiriesModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledBudget, setPrefilledBudget] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForProposal = (serviceName: string) => {
    setPrefilledService(serviceName);
    scrollToSection('contact');
  };

  const handleApplyBudgetToForm = (budgetFormatted: string, expectedRevenue: string) => {
    setPrefilledBudget(budgetFormatted);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation */}
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenInquiries={() => setIsInquiriesModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAudit={() => setIsAuditModalOpen(true)}
          onScrollToContact={() => scrollToSection('contact')}
          onScrollToServices={() => scrollToSection('services')}
        />

        {/* Partner & Tech Marquee */}
        <PartnerMarquee />

        {/* Services & Ad Ops Section */}
        <ServicesSection
          onSelectServiceForProposal={handleSelectServiceForProposal}
        />

        {/* 4-Phase Growth Framework */}
        <ProcessSection
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* Interactive Media Spend & ROI Estimator */}
        <RoiCalculator
          onApplyBudgetToForm={handleApplyBudgetToForm}
        />

        {/* Case Studies & Tangible Results */}
        <CaseStudiesSection
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact & Lead Generation Form (Required: Full Name, Phone, Email, Company, Comments -> optihivedigital@gmail.com) */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledBudget={prefilledBudget}
        />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenInquiries={() => setIsInquiriesModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Modals */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onScrollToContact={() => scrollToSection('contact')}
      />

      <InquiriesViewerModal
        isOpen={isInquiriesModalOpen}
        onClose={() => setIsInquiriesModalOpen(false)}
      />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={`mailto:${AGENCY_INFO.contactEmail}?subject=Quick%20Inquiry%20-%20OptiHive%20Digital`}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold shadow-2xl backdrop-blur-md transition-all group"
          id="floating-email-cta"
          title="Direct email to optihivedigital@gmail.com"
        >
          <Mail className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
          <span className="hidden sm:inline">{AGENCY_INFO.contactEmail}</span>
          <span className="sm:hidden">Email Us</span>
        </a>
      </div>

    </div>
  );
}

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

      {/* Floating WhatsApp Sticky Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={AGENCY_INFO.whatsAppUrl || `https://wa.me/919538374115?text=Hi%20OptiHive%20Digital%2C%20I%20would%20like%20to%20discuss%20my%20digital%20marketing%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/30 relative"
          id="whatsapp-sticky-btn"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping"></span>
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white"></span>
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

    </div>
  );
}

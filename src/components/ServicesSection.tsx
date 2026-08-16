import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { 
  Cpu, 
  TrendingUp, 
  Search, 
  Zap, 
  Sparkles, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForProposal: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForProposal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ad-ops', label: 'Programmatic Ad Ops' },
    { id: 'performance', label: 'Paid Search & Social' },
    { id: 'growth', label: 'SEO & CRO Funnels' },
    { id: 'creative', label: 'Rich Media & Creative' },
    { id: 'analytics', label: 'Attribution & GA4' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-600" />;
      case 'Search': return <Search className="w-6 h-6 text-blue-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-blue-600" />;
      default: return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50/50 text-slate-900 relative border-b border-gray-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-blue-100">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Full-Spectrum Digital Marketing & <br className="hidden sm:block" />
            <span className="text-blue-600">
              Ad Operations Engine
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            From programmatic DSP trafficking and performance PPC to technical SEO and cookieless server-side attribution, we operate as your elite growth command center.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'bg-white text-slate-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl bg-white border border-gray-200 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Top Bar: Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-700 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Result Ribbon */}
                <div className="mb-4 py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Target Benchmark</span>
                  <span className="font-bold text-blue-600 font-mono">{service.metrics}</span>
                </div>

                {/* Feature Highlights */}
                <ul className="space-y-2 mb-6">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer py-1.5"
                >
                  <span>Explore Deliverables</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForProposal(service.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Agency Operations */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping"></span>
              Need a Dedicated White-Label Ad Operations Squad?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We provide turnkey 24/7 campaign trafficking, QA, yield optimization, and DSP seat management for global marketing agencies and media houses.
            </p>
          </div>

          <button
            onClick={() => onSelectServiceForProposal('Dedicated Ad Ops Squad & White-Label Management')}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shrink-0 shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            Inquire for Agency White-Label
          </button>
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForProposal={onSelectServiceForProposal}
      />
    </section>
  );
};

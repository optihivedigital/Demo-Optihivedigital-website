import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/agencyData';
import { 
  TrendingUp, 
  ArrowRight, 
  Quote, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Building2 
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onScrollToContact: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onScrollToContact }) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const activeCase = CASE_STUDIES_DATA[selectedCaseIdx] || CASE_STUDIES_DATA[0];

  return (
    <section className="py-20 bg-gray-50/50 border-b border-gray-200 text-slate-900 relative" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-blue-100">
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Real Clients. Real Ad Spend. <br className="hidden sm:block" />
            <span className="text-blue-600">
              Compounded Revenue Growth.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Explore how our full-funnel media architecture and programmatic operations solve complex acquisition challenges.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CASE_STUDIES_DATA.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseIdx(idx)}
              className={`px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedCaseIdx === idx
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-slate-700 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{cs.client}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Showcase Card */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                {activeCase.industry}
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                {activeCase.duration}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {activeCase.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-gray-100 border border-gray-200 text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Headline & Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {activeCase.service}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeCase.headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeCase.description}
              </p>

              {/* Quote if available */}
              {activeCase.quote && (
                <div className="mt-6 p-5 rounded-xl bg-blue-50/60 border border-blue-100 relative">
                  <Quote className="w-6 h-6 text-blue-200 absolute top-4 right-4" />
                  <p className="text-xs sm:text-sm text-slate-700 italic mb-3">
                    "{activeCase.quote.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-xs font-bold text-slate-900">{activeCase.quote.author}</span>
                    <span className="text-slate-400 text-xs">—</span>
                    <span className="text-xs text-slate-500">{activeCase.quote.role}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right KPI Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {activeCase.stats.map((stat, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs text-slate-500 block font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-3xl font-extrabold text-slate-900 font-mono mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono">
                      {stat.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Card CTA */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Want similar high-yield returns for your brand?
            </span>
            <button
              onClick={onScrollToContact}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>Request Case Study Audit & Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

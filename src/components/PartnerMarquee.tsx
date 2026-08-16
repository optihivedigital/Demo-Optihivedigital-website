import React from 'react';
import { PARTNERS_DATA } from '../data/agencyData';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

export const PartnerMarquee: React.FC = () => {
  return (
    <section className="py-14 bg-gray-50 border-b border-gray-200 relative overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-700 font-bold mb-2">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>Certified Ad Tech & DSP Ecosystem</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Direct Platform Partnerships & Enterprise Ad Technology
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto mt-1">
          OptiHive Digital leverages top-tier agency tiering, direct DSP pipes, and accredited API integrations to secure the lowest eCPMs and highest yield.
        </p>
      </div>

      {/* Partner Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS_DATA.map((partner, idx) => (
            <div
              key={idx}
              className="p-4.5 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 group hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                    {partner.tier}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                {partner.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

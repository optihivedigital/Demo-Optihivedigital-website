import React from 'react';
import { ServiceItem } from '../types';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Wrench, 
  TrendingUp,
  Mail
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForProposal: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForProposal
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gray-50 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {service.tag}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {service.title}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                {service.shortDesc}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-gray-200 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Metric Highlight Ribbon */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-sm">
            <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Benchmark Result: <strong className="text-slate-900">{service.metrics}</strong></span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Key Capabilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Core Capabilities & Execution Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Deliverables */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              OptiHive Deliverables & SLAs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Platforms & Tooling Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((t, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-gray-100 border border-gray-200 text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Snippet */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs sm:text-sm">
            <span className="font-bold text-blue-800 uppercase tracking-wider text-[11px] block mb-1">
              Proven Impact:
            </span>
            <p className="text-slate-700 italic">
              "{service.caseSnippet}"
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Inquiries routed to <span className="text-blue-600 font-mono font-semibold">{AGENCY_INFO.contactEmail}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-lg text-slate-700 hover:text-slate-900 bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectServiceForProposal(service.title);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Proposal For This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

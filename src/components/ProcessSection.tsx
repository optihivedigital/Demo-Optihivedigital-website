import React from 'react';
import { 
  Search, 
  Target, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

interface ProcessSectionProps {
  onScrollToContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onScrollToContact }) => {
  const steps = [
    {
      phase: 'Phase 01',
      title: 'Deep Diagnostic & Ad Account Forensics',
      subtitle: 'Auditing every dollar, pixel signal & conversion leak',
      desc: 'We perform an exhaustive forensic audit of your historical ad spend, Google & Meta tracking pixels, server-side CAPI health, negative keyword bleed, and competitor bidding footprints.',
      deliverables: ['120-Point Media & Pixel Audit', 'Wasted Spend Elimination Map', 'Target CPA Benchmarking'],
      icon: Search,
      badge: 'Audit & Diagnose'
    },
    {
      phase: 'Phase 02',
      title: 'Precision Strategy & Omnichannel Blueprint',
      subtitle: 'Architecting high-intent audience funnels',
      desc: 'We architect your full-funnel media plan: blending programmatic DSPs, high-intent Google Search, scroll-stopping Meta/TikTok hooks, and high-converting landing page architectures.',
      deliverables: ['Omnichannel Channel Allocation Matrix', 'Audience Segment Taxonomy', 'Creative Angle & Hook Roadmap'],
      icon: Target,
      badge: 'ATTRACT'
    },
    {
      phase: 'Phase 03',
      title: 'Rapid Execution & 24/7 Ad Ops Trafficking',
      subtitle: 'Real-time bidding, QA & creative deployment',
      desc: 'Our certified ad ops engineers traffic campaigns, set up bid automation scripts, enforce brand-safety guardrails, and launch rapid A/B testing cycles with zero downtime.',
      deliverables: ['Automated Dayparting & Bid Rules', 'Tag Management & GA4 Server GTM', 'Weekly Creative Refresh Batch'],
      icon: Cpu,
      badge: 'CONVERT'
    },
    {
      phase: 'Phase 04',
      title: 'Scale & Compound Blended ROAS',
      subtitle: 'Expanding high-LTV cohorts & maximizing bottom-line profit',
      desc: 'Once campaign unit economics are stabilized, we deploy algorithmic budget scaling, enter new geographic markets, and unlock compounding returns with multi-touch attribution.',
      deliverables: ['Live Real-Time Looker Dashboard', 'Bi-Weekly Executive Growth Syncs', 'Cross-Channel LTV Cohort Modeling'],
      icon: TrendingUp,
      badge: 'GROW'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-200 text-slate-900 relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-blue-100">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            The OptiHive 4-Phase <br className="hidden sm:block" />
            <span className="text-blue-600">
              Growth & Conversion Engine
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            We don't rely on guesswork or vanity metrics. Our structured operating system delivers predictable, scalable, and profitable customer acquisition.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative shadow-sm hover:shadow-md"
              >
                {/* Step Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-700 px-2.5 py-1 rounded bg-blue-50 border border-blue-100">
                      {step.phase}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-gray-100 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Footer strip */}
        <div className="mt-14 text-center">
          <button
            onClick={onScrollToContact}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 cursor-pointer"
          >
            <span>Deploy This Growth Framework For Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

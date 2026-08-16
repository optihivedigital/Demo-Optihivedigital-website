import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Globe,
  Sliders,
  DollarSign,
  Activity
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenAudit: () => void;
  onScrollToContact: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAudit,
  onScrollToContact,
  onScrollToServices
}) => {
  // Interactive mini live simulator state
  const [activeChannel, setActiveChannel] = useState<'all' | 'programmatic' | 'search' | 'social'>('all');
  const [liveRoas, setLiveRoas] = useState(4.68);
  const [activeImpressionCount, setActiveImpressionCount] = useState(14820930);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImpressionCount(prev => prev + Math.floor(Math.random() * 45) + 12);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white text-slate-900 flex items-center border-b border-gray-200" id="hero">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span>Google Premier Partner & Meta Verified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-sans">
              Precision Performance Marketing for{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-4">
                Growth
              </span>.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              We bridge the gap between complex digital operations and measurable ROI. Optihivedigital empowers brands with data-backed strategies that <strong className="text-slate-900 font-bold">Grow, Attract, and Convert</strong>.
            </p>

            {/* Quick Proof Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl pt-1">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-gray-50 border border-gray-200 rounded-lg p-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Zero Ad Waste & Bot QA</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-gray-50 border border-gray-200 rounded-lg p-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Server-Side Attribution</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-gray-50 border border-gray-200 rounded-lg p-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>24/7 Ad Ops SLA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onScrollToContact}
                className="px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 cursor-pointer group"
                id="hero-request-proposal-cta"
              >
                <span>Launch Partnership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                id="hero-free-audit-cta"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Free Ad & SEO Audit</span>
              </button>
            </div>

            {/* Direct routing reassurance */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Direct Inquiries sent to{' '}
              <a href={`mailto:${AGENCY_INFO.contactEmail}`} className="text-blue-600 font-semibold hover:underline font-mono">
                {AGENCY_INFO.contactEmail}
              </a>
              {' '}• Response within 24 hours
            </p>
          </div>

          {/* Right Column: Live Ad Ops Control Center Interactive Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-xl text-slate-900 transition-all duration-300 hover:border-blue-300">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      OptiHive Live Ad Ops Engine
                    </h2>
                    <p className="text-[11px] text-slate-500 font-mono">
                      Real-Time Campaign Performance & Yield
                    </p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold">
                  LIVE FEED
                </div>
              </div>

              {/* Channel Selector Pills */}
              <div className="grid grid-cols-4 gap-1.5 my-4 p-1 bg-gray-50 rounded-lg border border-gray-200 text-xs">
                {(['all', 'programmatic', 'search', 'social'] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => {
                      setActiveChannel(ch);
                      setLiveRoas(ch === 'programmatic' ? 5.12 : ch === 'search' ? 4.38 : ch === 'social' ? 4.82 : 4.68);
                    }}
                    className={`py-1.5 px-2 rounded-md font-bold text-[11px] capitalize transition-all cursor-pointer ${
                      activeChannel === ch
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {ch === 'all' ? 'Blended' : ch}
                  </button>
                ))}
              </div>

              {/* Main Metric Spotlight */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
                    <span>Blended ROAS</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 flex items-baseline gap-1">
                    <span>{liveRoas}x</span>
                    <span className="text-xs font-bold text-emerald-600 font-mono">+142%</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Target benchmark: 2.2x</p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
                    <span>Impression Delivery</span>
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-mono">
                    {activeImpressionCount.toLocaleString()}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">99.8% Viewability Index</p>
                </div>
              </div>

              {/* Live Channel Allocation Bar Visualizer */}
              <div className="space-y-2.5 bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
                <div className="flex justify-between text-xs text-slate-700 font-bold">
                  <span>Channel Yield & Conversion Attribution</span>
                  <span className="text-blue-600 font-mono font-bold">100% CAPI Sync</span>
                </div>
                
                {/* Progress bars */}
                <div className="space-y-2.5 text-[11px]">
                  <div>
                    <div className="flex justify-between text-slate-600 mb-1 font-medium">
                      <span>Programmatic DSP (DV360 / TTD)</span>
                      <span className="text-slate-900 font-mono font-bold">42% ($28.5k)</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-600 mb-1 font-medium">
                      <span>Google Search & Shopping (PMax)</span>
                      <span className="text-slate-900 font-mono font-bold">35% ($23.8k)</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-600 mb-1 font-medium">
                      <span>Meta & TikTok Performance Video</span>
                      <span className="text-slate-900 font-mono font-bold">23% ($15.7k)</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Activity Ticker */}
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-xs flex items-center justify-between text-slate-700">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-[11px]">
                    Auto-bid algorithm reduced CPA by <strong className="text-blue-700 font-bold">22.4%</strong> in last 6 hrs
                  </span>
                </div>
                <button
                  onClick={onScrollToServices}
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-800 underline uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  View Ops
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Global Impact Stats Strip */}
        <div className="mt-16 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {AGENCY_INFO.stats.adSpendManaged}
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1">
              Ad Spend Managed
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {AGENCY_INFO.stats.averageRoasLift}
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1">
              Avg ROAS Increase
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {AGENCY_INFO.stats.impressionsDelivered}
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1">
              Ad Impressions
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {AGENCY_INFO.stats.clientRetention}
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1">
              Client Retention
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

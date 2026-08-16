import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Sliders,
  PieChart,
  ShieldAlert
} from 'lucide-react';

interface RoiCalculatorProps {
  onApplyBudgetToForm: (budgetFormatted: string, expectedRevenue: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyBudgetToForm }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(25000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.2);
  const [industry, setIndustry] = useState<string>('ecommerce');

  // Industry multipliers based on agency benchmark data
  const industryFactors: Record<string, { roasLift: number; wastePct: number; name: string }> = {
    ecommerce: { roasLift: 1.85, wastePct: 0.22, name: 'E-Commerce & DTC Retail' },
    saas: { roasLift: 1.70, wastePct: 0.28, name: 'B2B Enterprise SaaS & Tech' },
    fintech: { roasLift: 1.90, wastePct: 0.24, name: 'FinTech & Banking Services' },
    healthcare: { roasLift: 1.65, wastePct: 0.20, name: 'Healthcare & Wellness' },
    realestate: { roasLift: 2.10, wastePct: 0.30, name: 'Real Estate & High-Ticket' },
    services: { roasLift: 1.75, wastePct: 0.25, name: 'Professional & Local Services' }
  };

  const activeFactor = industryFactors[industry] || industryFactors.ecommerce;

  // Calculations
  const projectedRoas = (currentRoas * activeFactor.roasLift).toFixed(2);
  const currentMonthlyRevenue = Math.round(monthlySpend * currentRoas);
  const projectedMonthlyRevenue = Math.round(monthlySpend * parseFloat(projectedRoas));
  const estimatedMonthlyLift = projectedMonthlyRevenue - currentMonthlyRevenue;
  const wastedSpendSaved = Math.round(monthlySpend * activeFactor.wastePct);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApply = () => {
    const budgetStr = `${formatCurrency(monthlySpend)} / month (${activeFactor.name})`;
    const revStr = `Targeting ${projectedRoas}x ROAS (${formatCurrency(projectedMonthlyRevenue)}/mo)`;
    onApplyBudgetToForm(budgetStr, revStr);
  };

  return (
    <section className="py-20 bg-white border-b border-gray-200 text-slate-900 relative" id="roi-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-blue-100">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Media Yield Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Calculate Your Projected <br className="hidden sm:block" />
            <span className="text-blue-600">
              Ad Spend ROAS & Yield Lift
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            See how OptiHive's programmatic optimizations, bid automation, and high-converting creative can unlock untapped revenue from your current ad budget.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-600" />
                <span>Campaign Parameters</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Adjust sliders to model your monthly ad budget and industry target.
              </p>

              {/* Industry Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Your Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                >
                  <option value="ecommerce">E-Commerce & DTC Brands</option>
                  <option value="saas">B2B SaaS & Enterprise Technology</option>
                  <option value="fintech">FinTech & Financial Services</option>
                  <option value="healthcare">Healthcare, MedTech & Wellness</option>
                  <option value="realestate">Real Estate & Luxury High-Ticket</option>
                  <option value="services">Professional & Local Services</option>
                </select>
              </div>

              {/* Monthly Ad Spend Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Monthly Ad Spend Budget
                  </label>
                  <span className="text-base font-extrabold text-blue-600 font-mono">
                    {formatCurrency(monthlySpend)}
                  </span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={150000}
                  step={1000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>$3,000</span>
                  <span>$50,000</span>
                  <span>$100,000</span>
                  <span>$150,000+</span>
                </div>
              </div>

              {/* Current ROAS Slider */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Current Baseline ROAS / Multiplier
                  </label>
                  <span className="text-base font-extrabold text-slate-900 font-mono">
                    {currentRoas.toFixed(1)}x
                  </span>
                </div>
                <input
                  type="range"
                  min={0.8}
                  max={5.0}
                  step={0.1}
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>0.8x (Underperforming)</span>
                  <span>2.5x (Average)</span>
                  <span>5.0x (High Scale)</span>
                </div>
              </div>
            </div>

            {/* Wasted Ad Spend Alert Callout */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-blue-900">
                  Estimated Wasted Ad Spend Recovered: ~{formatCurrency(wastedSpendSaved)}/mo
                </span>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  Saved via bot traffic filtering, negative keyword sculpting, and cross-device frequency capping.
                </p>
              </div>
            </div>
          </div>

          {/* Right Projected Output Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border-2 border-blue-200 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Top Tag */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                OptiHive Growth Projection
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
                Model: High Yield
              </span>
            </div>

            {/* Main Calculated ROAS & Revenue */}
            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-500 uppercase font-semibold">Projected Blended ROAS</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-2 mt-1">
                  <span className="text-blue-600">
                    {projectedRoas}x
                  </span>
                  <span className="text-sm font-bold text-emerald-600 font-mono">
                    (+{Math.round((activeFactor.roasLift - 1) * 100)}% Growth)
                  </span>
                </div>
              </div>

              {/* Monthly Revenue Comparison */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-[11px] text-slate-500 block font-medium">Current Monthly Revenue</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-700 font-mono mt-1 block">
                    {formatCurrency(currentMonthlyRevenue)}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <span className="text-[11px] text-blue-700 font-bold block">OptiHive Projected Revenue</span>
                  <span className="text-lg sm:text-xl font-extrabold text-blue-900 font-mono mt-1 block">
                    {formatCurrency(projectedMonthlyRevenue)}
                  </span>
                </div>
              </div>

              {/* Net Additional Monthly Lift */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-emerald-800 block">Estimated Net Revenue Expansion</span>
                  <span className="text-2xl font-extrabold text-emerald-700 font-mono">
                    +{formatCurrency(estimatedMonthlyLift)} <span className="text-xs font-normal text-emerald-700">/ month</span>
                  </span>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
            </div>

            {/* CTA to Apply to Form */}
            <div className="pt-2">
              <button
                onClick={handleApply}
                className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all cursor-pointer"
                id="apply-roi-estimate-btn"
              >
                <span>Claim This Growth Model in Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Pre-fills your selected ad budget into the inquiry form for <span className="text-blue-600 font-mono font-medium">optihivedigital@gmail.com</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

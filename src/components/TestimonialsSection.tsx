import React from 'react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Trusted by Ambitious Brands & <br className="hidden sm:block" />
            <span className="text-blue-600">
              Global Media Leaders
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Here is what growth leaders have to say about partnering with OptiHive Digital.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-md"
            >
              <div>
                {/* Rating stars & Result badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                    {t.results}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-blue-100 mb-2" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-blue-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

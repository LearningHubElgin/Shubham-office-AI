import React from 'react';
import { Truck, ShoppingCart, UtensilsCrossed, BellPlus } from 'lucide-react';

const soonList = [
  {
    id: 'wholesale',
    name: 'Wholesale & Distribution',
    desc: 'Wholesalers, distributors and dealers',
    icon: Truck,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    desc: 'Online stores and D2C brands',
    icon: ShoppingCart,
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Retail',
    desc: 'Restaurants, cafés and shops',
    icon: UtensilsCrossed,
  },
];

export default function ComingSoon({ onNotifyTrade }) {
  return (
    <section id="soon" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching isuite.ai */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 head reveal">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-2.5">
            COMING SOON
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
            Three more trades, on the way
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
            The same platform, made for more kinds of business. Tell us yours, and we will message you on WhatsApp the day it is ready.
          </p>
        </div>

        {/* 2-Column Grid with dashed/dotted borders matching isuite.ai */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto soon-grid reveal stagger">
          {soonList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/95 rounded-[22px] p-5 sm:p-6 border-[1.5px] border-dashed border-slate-300 hover:border-slate-400 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Dashed Icon container + Info on left, 'Coming soon' pill badge on right */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3.5">
                      {/* Icon container with dashed border */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border-[1.5px] border-dashed border-slate-300 flex items-center justify-center shrink-0 text-slate-600 mt-0.5">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      {/* Texts */}
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                          ISUITE AI
                        </span>
                        <h3 className="text-base sm:text-[17px] font-bold text-[#06122e] leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Coming Soon Badge */}
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100/90 border border-slate-200/60 px-2.5 py-0.5 rounded-full shrink-0">
                      Coming soon
                    </span>
                  </div>
                </div>

                {/* Bottom Action Pill */}
                <div className="pt-2">
                  <button
                    onClick={() => onNotifyTrade(item.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#1663ff] bg-blue-50/40 hover:bg-blue-50 border border-blue-200/70 shadow-2xs transition-all cursor-pointer"
                  >
                    <BellPlus className="w-3.5 h-3.5 text-[#1663ff]" />
                    <span>Tell me when it is ready</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

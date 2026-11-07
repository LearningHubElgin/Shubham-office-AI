import React from 'react';

export default function WorkflowSteps({ onOpenDemo }) {
  const steps = [
    {
      number: '01',
      title: 'Pick your product',
      description: "Start the free trial from your product's page, or book a free 45-minute demo on your own enquiries.",
      hasLinks: true
    },
    {
      number: '02',
      title: 'We set it up with you',
      description: "Your WhatsApp number on Meta's platform, your services and prices, your team and, with the AI agent, its rules. The setup for your trade is already in place.",
      hasLinks: false
    },
    {
      number: '03',
      title: 'Go live',
      description: "Your team closes, and on plans with the AI agent, the AI answers and books first. We stay with you on WhatsApp for support.",
      hasLinks: false
    }
  ];

  const scrollToProducts = () => {
    const el = document.getElementById('products-grid') || document.getElementById('preview-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: exact match to isuite.ai */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 head reveal">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-2.5">
            GET STARTED
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
            Live in three steps
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
            Try it yourself or see it first — either way, we set it up with you, on your own services and rules.
          </p>
        </div>

        {/* 3 Step Cards Grid: exact match to isuite.ai */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch steps reveal stagger">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#1663ff] mb-3 block">
                  {step.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {step.hasLinks && (
                <div className="pt-4 mt-2 text-xs sm:text-[13px] font-medium text-[#1663ff] flex items-center">
                  <button
                    onClick={scrollToProducts}
                    className="hover:underline cursor-pointer"
                  >
                    See the plans
                  </button>
                  <span className="text-slate-300 mx-1.5">·</span>
                  <button
                    onClick={() => onOpenDemo && onOpenDemo('General')}
                    className="hover:underline cursor-pointer text-[#1663ff]"
                  >
                    Book a demo
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Footnote Notice: exact match to isuite.ai */}
        <p className="mt-8 sm:mt-10 text-center text-[11px] sm:text-xs text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed">
          Meta decides approval for the WhatsApp Business Platform; it usually takes 1–2 weeks. WhatsApp message charges are billed by Meta, separately from iSuite AI.
        </p>

      </div>
    </section>
  );
}

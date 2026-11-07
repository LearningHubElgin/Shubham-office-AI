import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: exact match to isuite.ai */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-2.5">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance">
            Questions, answered
          </h2>
        </div>

        {/* Minimalist Hairline Divider List: exact match to isuite.ai */}
        <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#06122e] group-hover:text-[#1663ff] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed whitespace-pre-line animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

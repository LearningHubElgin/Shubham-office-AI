import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { pricingData } from '../data/pricingData';
import { clinicData } from '../data/products/clinic';
import { coachingData } from '../data/products/coaching';
import { realEstateData } from '../data/products/real-estate';
import { gymData } from '../data/products/gym';
import { salonData } from '../data/products/salon';
import { fieldServiceData } from '../data/products/field-service';
import { turfData } from '../data/products/turf';
import { Check, Plus, Minus, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

const productDataMap = {
  clinic: clinicData,
  coaching: coachingData,
  realestate: realEstateData,
  gym: gymData,
  salon: salonData,
  fieldservice: fieldServiceData,
  turf: turfData,
};

export default function PricingPage({ onNavigateHome, onNavigateRoute, onOpenDemo, onOpenTrial, onOpenPolicyModal }) {
  const getTabFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['clinic', 'coaching', 'realestate', 'gym', 'salon', 'fieldservice', 'turf', 'other'].includes(hash)) {
      return hash;
    }
    return 'clinic';
  };

  const [activeTab, setActiveTab] = useState(getTabFromHash);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = pricingData.title;
    window.scrollTo(0, 0);

    const onHashChange = () => {
      setActiveTab(getTabFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `/pricing/#${tabId}`);
  };

  const activeProduct = productDataMap[activeTab];
  const plansToDisplay = activeTab === 'other' ? pricingData.otherPlans : activeProduct?.pricingSection?.plans || [];
  const currentTabInfo = pricingData.productTabs.find((t) => t.id === activeTab);
  const accentColor = activeProduct?.accentColor || '#1663ff';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#06122e]">
      {/* Header */}
      <Navbar
        variant="light"
        activePage="pricing"
        onNavigateRoute={onNavigateRoute}
        onSelectIndustry={(ind) => onNavigateRoute(`/${ind === 'clinic' ? 'clinics' : ind === 'gym' ? 'gyms' : ind === 'salon' ? 'salons' : ind}/`)}
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
        onNavigateHome={onNavigateHome}
      />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#001845] via-[#001f5c] to-[#00153d] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rise">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#38bdf8] mb-3">
            {pricingData.hero.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight mb-4">
            {pricingData.hero.h1}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
            {pricingData.hero.lead}
          </p>
        </div>
      </section>

      {/* Sticky Product Tabs Bar */}
      <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-3 no-scrollbar">
            {pricingData.productTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={tab.anchor}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#001d55] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Plans Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active Tab Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 head reveal">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: accentColor }}>
              {currentTabInfo?.name}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#06122e] mb-2">
              Plans for {currentTabInfo?.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {currentTabInfo?.subtitle}
            </p>
            {activeProduct && (
              <div className="mt-3">
                <a
                  href={`/${activeProduct.slug}/`}
                  className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                  style={{ color: accentColor }}
                >
                  <span>See what is inside {currentTabInfo?.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch reveal stagger mb-16">
            {plansToDisplay.map((plan, idx) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-8 border shadow-xs flex flex-col justify-between relative ${
                    isPopular ? 'shadow-lg border-2' : 'border-slate-200/90'
                  }`}
                  style={isPopular ? { borderColor: accentColor } : {}}
                >
                  {isPopular && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs"
                      style={{ backgroundColor: accentColor }}
                    >
                      {plan.badge || 'MOST POPULAR'}
                    </div>
                  )}

                  <div>
                    {!isPopular && (
                      <span className="text-[11px] font-bold uppercase tracking-wider block mb-1" style={{ color: accentColor }}>
                        {plan.badge}
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-[#06122e] mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 mb-6 font-normal">
                      {plan.description}
                    </p>

                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#06122e]">{plan.price}</span>
                        <span className="text-xs text-slate-500 font-normal">{plan.pricePeriod}</span>
                      </div>
                      <span className="text-xs text-emerald-600 font-medium mt-1 block">
                        {plan.trialText}
                      </span>
                    </div>

                    {plan.limits && (
                      <div className="text-[11.5px] font-medium text-slate-600 mb-6 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        {plan.limits}
                      </div>
                    )}

                    <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 mb-8">
                      {plan.features?.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                          <div>
                            <span className="font-semibold text-slate-800">{f.title}</span>
                            {f.description && <span className="text-slate-500 font-normal"> — {f.description}</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenTrial ? onOpenTrial() : null}
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center text-white shadow-md transition-all cursor-pointer block ${
                      isPopular ? 'hover:opacity-90' : 'bg-[#001d55] hover:bg-[#002773]'
                    }`}
                    style={isPopular ? { backgroundColor: accentColor } : {}}
                  >
                    Start {plan.trialText ? plan.trialText.split(' ')[0] : '14'}-Day Free Trial
                  </button>
                </div>
              );
            })}
          </div>

          {/* Billing Notes 4-box Grid */}
          <div className="border-t border-slate-200/80 pt-16 mb-20">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-[#06122e] mb-10">
              Clear, transparent billing notes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {pricingData.billingNotes.map((note, ni) => (
                <div key={ni} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
                  <h4 className="text-sm font-bold text-[#06122e] mb-2">{note.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{note.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div id="faq" className="max-w-3xl mx-auto border-t border-slate-200/80 pt-16">
            <div className="text-center mb-12 head reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-2">
                FAQ
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#06122e]">
                Questions about pricing
              </h2>
            </div>

            <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80 faq reveal">
              {pricingData.faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-semibold text-[#06122e] group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </span>
                      <span className="text-slate-400 group-hover:text-slate-600 shrink-0">
                        {isOpen ? <Minus className="w-5 h-5 stroke-[1.8]" /> : <Plus className="w-5 h-5 stroke-[1.8]" />}
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

        </div>
      </section>

      {/* Shared Footer */}
      <Footer
        onSelectIndustry={(ind) => onNavigateRoute(`/${ind === 'clinic' ? 'clinics' : ind === 'gym' ? 'gyms' : ind === 'salon' ? 'salons' : ind}/`)}
        onOpenDemo={onOpenDemo}
        onOpenPolicyModal={onOpenPolicyModal}
      />
    </div>
  );
}


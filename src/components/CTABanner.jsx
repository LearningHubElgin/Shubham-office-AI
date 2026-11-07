import React from 'react';

export default function CTABanner({ onOpenDemo, onFindProduct }) {
  const scrollToProducts = () => {
    if (onFindProduct) {
      onFindProduct();
    } else {
      const el = document.getElementById('products-grid') || document.getElementById('preview-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#06122e] tracking-[-0.03em] leading-[1.15] text-balance">
          Your next enquiry<br />
          is already waiting.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-500 font-normal mt-3">
          Make sure it doesn't wait for your team.
        </p>

        {/* Two Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-6 mb-4">
          <button
            onClick={() => onOpenDemo && onOpenDemo('General')}
            className="bg-white border border-slate-300 hover:border-slate-400 text-[#06122e] rounded-full px-7 py-3 text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
          >
            Book my free demo
          </button>
          
          <button
            onClick={scrollToProducts}
            className="bg-[#001d55] hover:bg-[#002875] text-white rounded-full px-7 py-3 text-sm font-semibold transition-all shadow-xs cursor-pointer"
          >
            Find your product
          </button>
        </div>

        {/* Phone & Trial Subtext */}
        <p className="text-xs sm:text-[13px] text-slate-400 font-normal">
          Free trial on every product · free 45-minute demo · or call{' '}
          <a
            href="tel:+918220947112"
            className="underline hover:text-slate-600 transition-colors"
          >
            +91 82209 47112
          </a>
        </p>

        {/* 3D Glowing "i" Emblem Logo */}
        <div className="mt-14 sm:mt-16 mb-4 flex justify-center">
          <img
            src="/icon-192.png"
            alt="iSuite AI"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
        </div>

        {/* Slogan beneath emblem */}
        <p className="text-xs sm:text-[13px] text-slate-400 font-normal">
          iSuite AI — run your whole business on one app, made for your industry.
        </p>

      </div>
    </section>
  );
}

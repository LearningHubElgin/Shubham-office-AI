import React from 'react';
import { industries } from '../data/industryData';

export default function Footer({ onSelectIndustry, onOpenDemo, onOpenPolicyModal }) {
  const scrollToTrade = (tradeId) => {
    if (onSelectIndustry) {
      onSelectIndustry(tradeId);
    }
    const el = document.getElementById('preview-section') || document.getElementById('products-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#f6f7f9] text-[#040e26] text-xs sm:text-sm border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header */}
        <div className="mb-10 sm:mb-12">
          <a href="/" className="inline-block mb-3.5" aria-label="iSuite AI home">
            <img
              src="/logo-wordmark.png"
              alt="iSuite AI"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          <p className="text-xs sm:text-[13px] text-slate-500 max-w-md leading-relaxed font-normal">
            Run your whole business on one app, made for your industry — one platform, one product for each trade.
          </p>
        </div>

        {/* 3-Column Footer Grid: exact match to isuite.ai */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pb-12">
          
          {/* Column 1: PRODUCTS (top) + POLICIES (bottom) */}
          <div className="space-y-8 sm:space-y-10">
            {/* Products Group */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                PRODUCTS
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                {industries.map((ind) => (
                  <li key={ind.id}>
                    <button
                      onClick={() => scrollToTrade(ind.id)}
                      className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                    >
                      iSuite AI – {ind.name}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="#soon"
                    className="text-slate-400 hover:text-slate-600 transition-colors block cursor-pointer"
                  >
                    3 more coming soon
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies Group */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                POLICIES
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('Terms and Conditions')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Terms and conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('Privacy Policy')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Privacy policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('Refund & Cancellation')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Refund and cancellation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('Shipping & Delivery')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Shipping and delivery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('Data Deletion Policy')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Data deletion
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: ISUITE AI (top) + TALK TO US (bottom) */}
          <div className="space-y-8 sm:space-y-10">
            {/* iSuite AI Group */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                ISUITE AI
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <a href="#platform" className="hover:text-[#1663ff] transition-colors block cursor-pointer">
                    The platform
                  </a>
                </li>
                <li>
                  <a href="#trades" className="hover:text-[#1663ff] transition-colors block cursor-pointer">
                    Pricing
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('Free Templates')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Free templates
                  </button>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#1663ff] transition-colors block cursor-pointer">
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onOpenDemo && onOpenDemo('Client Portal Login')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>

            {/* Talk to Us Group */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                TALK TO US
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <a
                    href="https://wa.me/918220947112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918220947112"
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    +91 82209 47112
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mntfuture.com"
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    info@mntfuture.com
                  </a>
                </li>
                <li className="text-slate-500">
                  Madurai, Tamil Nadu, India
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: COMPANY (top) */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <button
                    onClick={() => onOpenPolicyModal && onOpenPolicyModal('About Us')}
                    className="hover:text-[#1663ff] transition-colors text-left cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a href="#footer" className="hover:text-[#1663ff] transition-colors block cursor-pointer">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://mntfuture.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    MnT Future
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright: exact match to isuite.ai */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div>
            © 2026 Magizh NexGen Technologies. iSuite AI is a product of MnT Future.
          </div>
          <div>
            Made in Madurai, for businesses across India.
          </div>
        </div>

      </div>
    </footer>
  );
}

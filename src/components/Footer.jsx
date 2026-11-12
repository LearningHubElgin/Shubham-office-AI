import React from 'react';
import { allProductsNavList } from '../data/brandConfig';

export default function Footer({ onSelectIndustry, onOpenDemo, onOpenPolicyModal, onOpenAdmin, onNavigateRoute }) {
  const handleNav = (e, route) => {
    if (route.startsWith('http') || route.startsWith('#')) return;
    e.preventDefault();
    const cleanRoute = route.replace(/\//g, '');
    if (onNavigateRoute) {
      onNavigateRoute(cleanRoute);
    } else if (onSelectIndustry) {
      onSelectIndustry(cleanRoute);
    }
  };

  return (
    <footer id="footer" className="bg-[#f6f7f9] text-[#040e26] text-xs sm:text-sm border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header */}
        <div className="mb-10 sm:mb-12">
          <a href="/" className="inline-block mb-3.5" aria-label="Karttik AI home">
            <img
              src="/logo-wordmark.png"
              alt="Karttik AI"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          <p className="text-xs sm:text-[13px] text-slate-500 max-w-md leading-relaxed font-normal">
            Run your whole business on one app, made for your industry — one platform, one product for each trade.
          </p>
        </div>

        {/* 3-Column Footer Grid: exact match to isuite.ai */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pb-12 reveal stagger">
          
          {/* Column 1: PRODUCTS (top) + POLICIES (bottom) */}
          <div className="space-y-8 sm:space-y-10">
            {/* Products Group */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                PRODUCTS
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                {allProductsNavList.map((prod) => (
                  <li key={prod.id}>
                    <a
                      href={prod.route}
                      onClick={(e) => handleNav(e, prod.route)}
                      className="hover:text-[#1663ff] transition-colors text-left block"
                    >
                      {prod.fullName}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/#soon"
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
                  <a
                    href="/terms/"
                    onClick={(e) => handleNav(e, '/terms/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy/"
                    onClick={(e) => handleNav(e, '/privacy/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy/"
                    onClick={(e) => handleNav(e, '/refund-policy/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Refund and cancellation
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping-policy/"
                    onClick={(e) => handleNav(e, '/shipping-policy/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Shipping and delivery
                  </a>
                </li>
                <li>
                  <a
                    href="/data-deletion/"
                    onClick={(e) => handleNav(e, '/data-deletion/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Data deletion
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: KARTTIK AI (top) + TALK TO US (bottom) */}
          <div className="space-y-8 sm:space-y-10">
            {/* Karttik AI Group */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                KARTTIK AI
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <a href="/#platform" className="hover:text-[#1663ff] transition-colors block">
                    The platform
                  </a>
                </li>
                <li>
                  <a 
                    href="/pricing/" 
                    onClick={(e) => handleNav(e, '/pricing/')}
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/templates/"
                    onClick={(e) => handleNav(e, '/templates/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Free templates
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-[#1663ff] transition-colors block">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    onClick={(e) => handleNav(e, '/login')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    Login
                  </a>
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
                    href="https://wa.me/919348633365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919348633365"
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    +91 93486 33365
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
                  Kolkata, West Bengal, India
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
                  <a
                    href="/about/"
                    onClick={(e) => handleNav(e, '/about/')}
                    className="hover:text-[#1663ff] transition-colors text-left block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/"
                    onClick={(e) => handleNav(e, '/contact/')}
                    className="hover:text-[#1663ff] transition-colors block cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/about/"
                    onClick={(e) => handleNav(e, '/about/')}
                    className="hover:text-[#1663ff] transition-colors block"
                  >
                    LearningHub Software Solution
                  </a>
                </li>
                {onOpenAdmin && (
                  <li>
                    <button
                      type="button"
                      onClick={onOpenAdmin}
                      className="hover:text-[#1663ff] transition-colors text-left block cursor-pointer text-slate-500 font-medium"
                    >
                      Admin Portal
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div>
            © 2026 LearningHub Software Solution. All rights reserved.
          </div>
          <div>
            Made in Kolkata, for businesses across India.
          </div>
        </div>

      </div>
    </footer>
  );
}

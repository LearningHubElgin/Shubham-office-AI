import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  Trophy, 
  Truck, 
  ShoppingCart, 
  Utensils 
} from 'lucide-react';
import { brandConfig, productsMegaMenu, comingSoonChips } from '../data/brandConfig';

const iconLookup = {
  clinic: Stethoscope,
  coaching: GraduationCap,
  'real-estate': Building2,
  gym: Dumbbell,
  salon: Scissors,
  'field-service': Wrench,
  turf: Trophy,
};

export default function Navbar({ onOpenDemo, onOpenTrial, onSelectIndustry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolling past 80px (into the light sections)
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductSelect = (id, route) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectIndustry) {
      onSelectIndustry(id);
    } else {
      window.location.href = route;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f6f7f9]/90 backdrop-blur-md border-b border-[#040e26]/10 text-[#06122e] shadow-sm'
          : 'bg-transparent border-b border-transparent text-white'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
        
        {/* Brand Logo: Switches from white logo to dark logo on scroll */}
        <a href="/" className="flex items-center shrink-0" aria-label="iSuite AI home">
          {isScrolled ? (
            <img
              src="/logo-wordmark.png"
              alt="iSuite AI"
              className="h-[28px] sm:h-[34px] w-auto object-contain transition-opacity duration-200"
            />
          ) : (
            <img
              src="/logo-white-wordmark.png"
              alt="iSuite AI"
              className="h-[28px] sm:h-[34px] w-auto object-contain transition-opacity duration-200"
            />
          )}
        </a>

        {/* Center Nav: Visible on medium/split screens */}
        <nav className={`hidden md:flex items-center gap-4 lg:gap-6 text-[11px] font-medium tracking-[0.09em] uppercase ${
          isScrolled ? 'text-[#06122e]/80' : 'text-white/80'
        }`}>
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              className={`flex items-center gap-1 uppercase py-2 cursor-pointer transition-colors ${
                isScrolled ? 'hover:text-[#06122e]' : 'hover:text-white'
              }`}
            >
              <span>PRODUCTS</span>
              <svg className="w-3 h-3 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            {productsDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-[620px] max-w-[calc(100vw-32px)] rounded-[24px] shadow-[0_24px_60px_-28px_rgba(0,12,43,0.38),0_6px_18px_-10px_rgba(0,12,43,0.2)] p-2.5 sm:p-3 bg-white border border-slate-200/80 text-[#06122e] animate-drop z-50 grid grid-cols-1 sm:grid-cols-2 gap-1 text-left"
              >
                {/* Column 1: Clinic, Real Estate, Salon & Spa, Turf */}
                <div className="flex flex-col gap-0.5">
                  {productsMegaMenu.col1.map((p) => {
                    const ProdIcon = iconLookup[p.id] || Stethoscope;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleProductSelect(p.id, p.route)}
                        className="w-full text-left p-2.5 sm:p-3 rounded-2xl transition-all flex items-start gap-3 cursor-pointer hover:bg-slate-50 text-slate-700"
                      >
                        <div 
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs mt-0.5"
                          style={{ backgroundColor: p.color }}
                        >
                          <ProdIcon className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-semibold text-[#06122e] leading-tight">
                            {p.fullName}
                          </div>
                          <div className="text-[11.5px] text-slate-500 leading-snug mt-1 line-clamp-2 font-normal">
                            {p.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Column 2: Coaching, Gym, Field Service */}
                <div className="flex flex-col gap-0.5">
                  {productsMegaMenu.col2.map((p) => {
                    const ProdIcon = iconLookup[p.id] || GraduationCap;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleProductSelect(p.id, p.route)}
                        className="w-full text-left p-2.5 sm:p-3 rounded-2xl transition-all flex items-start gap-3 cursor-pointer hover:bg-slate-50 text-slate-700"
                      >
                        <div 
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs mt-0.5"
                          style={{ backgroundColor: p.color }}
                        >
                          <ProdIcon className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-semibold text-[#06122e] leading-tight">
                            {p.fullName}
                          </div>
                          <div className="text-[11.5px] text-slate-500 leading-snug mt-1 line-clamp-2 font-normal">
                            {p.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Row spanning both columns */}
                <div className="sm:col-span-2 pt-2.5 mt-1 border-t border-slate-100">
                  <div className="text-[10px] text-slate-400 font-bold tracking-[0.14em] px-2 mb-2 uppercase">
                    COMING SOON
                  </div>
                  <div className="flex flex-wrap items-center gap-2 px-1">
                    {comingSoonChips.map((cs) => {
                      const CsIcon = cs.icon === 'Truck' ? Truck : cs.icon === 'ShoppingCart' ? ShoppingCart : Utensils;
                      return (
                        <a
                          key={cs.name}
                          href="/#soon"
                          onClick={() => setProductsDropdownOpen(false)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f7f9] hover:bg-slate-200/70 text-[#475569] hover:text-[#06122e] text-xs font-medium transition-colors"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#e7ebf3] flex items-center justify-center text-slate-600 shrink-0">
                            <CsIcon className="w-3 h-3" />
                          </span>
                          <span>{cs.name}</span>
                        </a>
                      );
                    })}
                  </div>

                  <div className="pt-2 mt-2">
                    <a 
                      href="/pricing/" 
                      onClick={() => setProductsDropdownOpen(false)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-semibold text-slate-700 bg-[#f6f7f9] hover:bg-slate-200/70 hover:text-[#001d55] transition-colors"
                    >
                      <span>Plans and pricing for every product</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a 
            href="#platform" 
            className={`uppercase transition-colors ${isScrolled ? 'hover:text-[#06122e]' : 'hover:text-white'}`}
          >
            PLATFORM
          </a>
          <a 
            href="#matrix" 
            className={`uppercase transition-colors ${isScrolled ? 'hover:text-[#06122e]' : 'hover:text-white'}`}
          >
            PRICING
          </a>
          <a 
            href="#workflow" 
            className={`uppercase transition-colors ${isScrolled ? 'hover:text-[#06122e]' : 'hover:text-white'}`}
          >
            ABOUT
          </a>
          <a 
            href="#footer" 
            className={`uppercase transition-colors ${isScrolled ? 'hover:text-[#06122e]' : 'hover:text-white'}`}
          >
            CONTACT
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={brandConfig.loginUrl}
            className={`text-[11px] font-medium tracking-[0.09em] uppercase transition-colors cursor-pointer ${
              isScrolled ? 'text-[#06122e]/80 hover:text-[#06122e]' : 'text-white/80 hover:text-white'
            }`}
          >
            LOGIN
          </a>
          
          <button
            onClick={() => onOpenTrial()}
            className={`text-[11px] font-medium tracking-[0.09em] uppercase px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full border transition-all duration-200 cursor-pointer shrink-0 ${
              isScrolled 
                ? 'border-[#06122e] text-[#06122e] hover:bg-black/5' 
                : 'border-white text-white hover:bg-white/10'
            }`}
          >
            FREE TRIAL
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1 ${isScrolled ? 'text-[#06122e]' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-5 pt-3 pb-6 space-y-3 ${
          isScrolled ? 'bg-white border-gray-200 text-[#06122e]' : 'bg-[#001449] border-white/10 text-white'
        }`}>
          <div className="space-y-1 text-xs uppercase tracking-wider font-semibold opacity-90">
            <a
              href="#products-grid"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              PRODUCTS
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              PLATFORM
            </a>
            <a
              href="#matrix"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              PRICING
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              ABOUT
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              CONTACT
            </a>
          </div>

          <div className="pt-3 border-t border-gray-200/40 flex flex-col gap-2">
            <a
              href={brandConfig.loginUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-center border border-current rounded-full block"
            >
              LOGIN
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className={`w-full py-2 text-xs font-bold uppercase tracking-wider text-center border border-current rounded-full ${
                isScrolled ? 'bg-black text-white border-black' : 'bg-white/15 text-white'
              }`}
            >
              FREE TRIAL
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

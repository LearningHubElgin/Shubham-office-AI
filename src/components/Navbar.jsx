import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const productList = [
    { name: 'iSuite AI – Clinic', id: 'clinic', desc: 'Appointments, patients, prescriptions, billing and an AI front desk — in one app.' },
    { name: 'iSuite AI – Coaching Institute', id: 'coaching', desc: 'Admissions, batches, attendance, fees and an AI counsellor — in one app.' },
    { name: 'iSuite AI – Real Estate', id: 'real-estate', desc: 'Enquiries, site visits, every flat, bookings, payments and brokers — in one app.' },
    { name: 'iSuite AI – Gym & Fitness Studio', id: 'gym', desc: 'Members, check-ins, renewals, PT packs and an AI front desk — in one app.' },
    { name: 'iSuite AI – Salon & Spa', id: 'salon', desc: 'Stylist chairs, service menu, walk-ins, loyalty and an AI receptionist — in one app.' },
    { name: 'iSuite AI – Field Service & AMC', id: 'field-service', desc: 'Technicians, visits, AMC contracts, spare parts and an AI dispatcher — in one app.' },
    { name: 'iSuite AI – Turf', id: 'turf', desc: 'Slots, advance payments, floodlights, tournament draws and an AI booking desk — in one app.' },
  ];

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
          <div className="relative">
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
                onMouseLeave={() => setProductsDropdownOpen(false)}
                className={`absolute top-full left-0 mt-1 w-72 rounded-2xl shadow-2xl p-2.5 space-y-1 animate-fadeIn border ${
                  isScrolled 
                    ? 'bg-white border-gray-200 text-[#06122e]' 
                    : 'bg-[#001449] border-white/15 text-white'
                }`}
              >
                {productList.map((p) => (
                  <a
                    key={p.id}
                    href="#preview-section"
                    onClick={() => {
                      onSelectIndustry(p.id);
                      setProductsDropdownOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-xl transition-colors ${
                      isScrolled 
                        ? 'hover:bg-gray-100 text-[#06122e]' 
                        : 'hover:bg-white/10 text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs">{p.name}</div>
                    <div className="text-[10.5px] opacity-60 leading-tight mt-0.5 line-clamp-1">{p.desc}</div>
                  </a>
                ))}
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
          <button
            onClick={() => onOpenDemo()}
            className={`text-[11px] font-medium tracking-[0.09em] uppercase transition-colors cursor-pointer ${
              isScrolled ? 'text-[#06122e]/80 hover:text-[#06122e]' : 'text-white/80 hover:text-white'
            }`}
          >
            LOGIN
          </button>
          
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-center border border-current rounded-full"
            >
              LOGIN
            </button>
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

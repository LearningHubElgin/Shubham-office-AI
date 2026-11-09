import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  LandPlot,
  ArrowRight
} from 'lucide-react';
import { brandConfig, allProductsNavList } from '../data/brandConfig';
import ProductsMegaMenu from './ProductsMegaMenu';

const iconLookup = {
  clinic: Stethoscope,
  coaching: GraduationCap,
  'real-estate': Building2,
  gym: Dumbbell,
  salon: Scissors,
  'field-service': Wrench,
  turf: LandPlot,
};

export default function Navbar({ 
  onOpenDemo, 
  onOpenTrial, 
  onSelectIndustry, 
  onNavigateRoute,
  variant = 'default',
  activePage = ''
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const isLight = variant === 'light' || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const handleProductSelect = (route, id) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateRoute) {
      onNavigateRoute(route);
    } else if (onSelectIndustry && id && id !== 'soon' && id !== 'pricing') {
      onSelectIndustry(id);
    } else {
      window.location.href = route;
    }
  };

  const handleNavClick = (e, path) => {
    if (onNavigateRoute && path.startsWith('/')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      onNavigateRoute(path);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? 'bg-[#f6f7f9]/90 backdrop-blur-md border-b border-[#040e26]/10 text-[#06122e] shadow-xs'
          : 'bg-transparent border-b border-transparent text-white'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
        
        {/* Brand Logo: Switches from white logo to dark logo on light theme */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center shrink-0 cursor-pointer" 
          aria-label="iSuite AI home"
        >
          {isLight ? (
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

        {/* Center Nav: Visible on medium and larger screens */}
        <nav className={`hidden md:flex items-center gap-4 lg:gap-6 text-[11px] font-medium tracking-[0.09em] uppercase ${
          isLight ? 'text-[#06122e]/80' : 'text-white/80'
        }`}>
          {/* Products Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={buttonRef}
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className={`flex items-center gap-1 uppercase py-2 cursor-pointer transition-colors ${
                isLight ? 'hover:text-[#06122e]' : 'hover:text-white'
              } ${productsDropdownOpen ? (isLight ? 'text-[#06122e] font-semibold' : 'text-white font-semibold') : ''}`}
              aria-expanded={productsDropdownOpen}
              aria-haspopup="true"
            >
              <span>PRODUCTS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 opacity-100' : 'opacity-70'}`} />
            </button>
          </div>

          <a 
            href="/#platform" 
            onClick={(e) => handleNavClick(e, '/#platform')}
            className={`uppercase transition-colors ${isLight ? 'hover:text-[#06122e]' : 'hover:text-white'}`}
          >
            PLATFORM
          </a>
          <a 
            href="/pricing/" 
            onClick={(e) => handleNavClick(e, '/pricing/')}
            className={`uppercase transition-colors ${
              activePage === 'pricing' ? 'text-blue-600 font-bold' : isLight ? 'hover:text-[#06122e]' : 'hover:text-white'
            }`}
          >
            PRICING
          </a>
          <a 
            href="/about/" 
            onClick={(e) => handleNavClick(e, '/about/')}
            className={`uppercase transition-colors ${
              activePage === 'about' ? 'text-blue-600 font-bold' : isLight ? 'hover:text-[#06122e]' : 'hover:text-white'
            }`}
          >
            ABOUT
          </a>
          <a 
            href="/contact/" 
            onClick={(e) => handleNavClick(e, '/contact/')}
            className={`uppercase transition-colors ${
              activePage === 'contact' ? 'text-blue-600 font-bold' : isLight ? 'hover:text-[#06122e]' : 'hover:text-white'
            }`}
          >
            CONTACT
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={brandConfig.loginUrl}
            onClick={(e) => {
              if (onNavigateRoute) {
                e.preventDefault();
                onNavigateRoute('login');
              }
            }}
            className={`text-[11px] font-medium tracking-[0.09em] uppercase transition-colors cursor-pointer ${
              isLight ? 'text-[#06122e]/80 hover:text-[#06122e]' : 'text-white/80 hover:text-white'
            }`}
          >
            LOGIN
          </a>
          
          <button
            onClick={() => onOpenTrial ? onOpenTrial() : (window.location.href = '/pricing/')}
            className={`text-[11px] font-medium tracking-[0.09em] uppercase px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full border transition-all duration-200 cursor-pointer shrink-0 ${
              isLight 
                ? 'border-[#06122e] text-[#06122e] hover:bg-black/5' 
                : 'border-white text-white hover:bg-white/10'
            }`}
          >
            FREE TRIAL
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1 ${isLight ? 'text-[#06122e]' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Render the auto-clamping portal mega menu */}
      <ProductsMegaMenu
        isOpen={productsDropdownOpen}
        onClose={() => setProductsDropdownOpen(false)}
        anchorRef={buttonRef}
        onSelectProduct={handleProductSelect}
      />

      {/* Mobile Drawer Menu (Identical to live site) */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-3 pb-6 max-h-[calc(100vh-60px)] overflow-y-auto space-y-3 ${
          isLight ? 'bg-white border-gray-200 text-[#06122e]' : 'bg-[#001449] border-white/10 text-white'
        }`}>
          {/* Products Group */}
          <div>
            <div className={`text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-1.5 ${
              isLight ? 'text-slate-400' : 'text-white/50'
            }`}>
              PRODUCTS
            </div>
            <div className="space-y-1">
              {allProductsNavList.map((p) => {
                const ProdIcon = iconLookup[p.id] || Stethoscope;
                return (
                  <a
                    key={p.id}
                    href={p.route}
                    onClick={(e) => {
                      e.preventDefault();
                      handleProductSelect(p.route, p.id);
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                      isLight ? 'hover:bg-slate-100 text-[#06122e]' : 'hover:bg-white/10 text-white'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: p.color }}
                    >
                      <ProdIcon className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <span className="text-[13.5px] font-medium">{p.fullName}</span>
                  </a>
                );
              })}
            </div>

            <div className={`text-[11.5px] px-3 py-2 mt-1 ${isLight ? 'text-slate-500' : 'text-white/60'}`}>
              Coming soon: Wholesale & Distribution, E-Commerce, Restaurant & Retail
            </div>
          </div>

          {/* Core Site Links */}
          <div className={`pt-3 border-t space-y-1 text-xs uppercase tracking-wider font-semibold ${
            isLight ? 'border-slate-100' : 'border-white/10'
          }`}>
            <div className={`text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-1 ${
              isLight ? 'text-slate-400' : 'text-white/50'
            }`}>
              ISUITE AI
            </div>
            <a
              href="/#platform"
              onClick={(e) => handleNavClick(e, '/#platform')}
              className={`block px-3 py-2 rounded-lg ${isLight ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`}
            >
              PLATFORM
            </a>
            <a
              href="/pricing/"
              onClick={(e) => handleNavClick(e, '/pricing/')}
              className={`block px-3 py-2 rounded-lg ${isLight ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`}
            >
              PRICING
            </a>
            <a
              href="/about/"
              onClick={(e) => handleNavClick(e, '/about/')}
              className={`block px-3 py-2 rounded-lg ${isLight ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`}
            >
              ABOUT
            </a>
            <a
              href="/contact/"
              onClick={(e) => handleNavClick(e, '/contact/')}
              className={`block px-3 py-2 rounded-lg ${isLight ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`}
            >
              CONTACT
            </a>
          </div>

          {/* Action CTAs */}
          <div className={`pt-3 border-t flex flex-col gap-2 ${
            isLight ? 'border-slate-100' : 'border-white/10'
          }`}>
            <a
              href={brandConfig.loginUrl}
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onNavigateRoute) {
                  e.preventDefault();
                  onNavigateRoute('login');
                }
              }}
              className={`w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-center border rounded-full block transition-colors ${
                isLight ? 'border-slate-300 text-[#06122e] hover:bg-slate-50' : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              LOGIN
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTrial) onOpenTrial();
                else window.location.href = '/pricing/';
              }}
              className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider text-center border rounded-full cursor-pointer transition-colors ${
                isLight ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-[#001449] border-white hover:bg-slate-100'
              }`}
            >
              START FREE TRIAL
            </button>
            <a
              href="https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20iSuite%20AI."
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-2.5 text-xs font-medium uppercase tracking-wider text-center rounded-full block transition-colors ${
                isLight ? 'text-blue-600 hover:bg-blue-50' : 'text-blue-300 hover:bg-white/5'
              }`}
            >
              BOOK A DEMO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

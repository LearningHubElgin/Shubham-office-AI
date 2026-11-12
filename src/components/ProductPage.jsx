import React, { useState, useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  Trophy, 
  Check, 
  Bot, 
  FileText, 
  CreditCard, 
  Shield, 
  Plus, 
  Minus,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Users,
  Languages,
  Megaphone,
  Calendar,
  Clock,
  Bell,
  Star,
  UserX,
  UserPlus,
  MessageSquare,
  Gift,
  ToggleRight,
  Smartphone,
  Layers,
  ChevronDown,
  TrendingUp,
  AlertCircle,
  Truck,
  ShoppingCart,
  Utensils,
  CheckCircle2
} from 'lucide-react';
import { brandConfig, allProductsNavList, comingSoonList, productsMegaMenu, comingSoonChips } from '../data/brandConfig';
import ProductsMegaMenu from './ProductsMegaMenu';

const iconLookup = {
  clinic: Stethoscope,
  coaching: GraduationCap,
  'real-estate': Building2,
  gym: Dumbbell,
  salon: Scissors,
  'field-service': Wrench,
  turf: Trophy,
  Bot,
  FileText,
  CreditCard,
  Users,
  Calendar,
  UserX,
  UserPlus,
  Clock,
  Layers,
  Shield,
  AlertCircle,
  TrendingUp,
  GraduationCap,
  Stethoscope,
  Building2,
  CheckCircle2,
  Languages,
  Smartphone,
};

export default function ProductPage({ data, onNavigateHome, onNavigateRoute, onOpenDemo, onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const buttonRef = useRef(null);

  // Dynamic theme colors
  const accentColor = data.accentColor || (data.id === 'coaching' ? '#7357ff' : data.id === 'real-estate' ? '#e08600' : '#11a297');
  const accentBright = data.accentBright || (data.id === 'coaching' ? '#c084fc' : data.id === 'real-estate' ? '#ffc56b' : '#2dd4bf');

  // Looping Chat Animation State
  const [visibleCount, setVisibleCount] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [typingStep, setTypingStep] = useState(0);

  // SEO & Head tag updates
  useEffect(() => {
    window.scrollTo(0, 0);

    // Title & Meta
    document.title = data.title || `${data.hero.badge} | Karttik AI`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = data.metaDescription || '';

    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = data.themeColor || '#001d55';

    // JSON-LD Injection
    const jsonLdId = `json-ld-${data.id}`;
    let scriptTag = document.getElementById(jsonLdId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = [];
    if (data.faqSection?.faqs?.length) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqSection.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    if (data.jsonLd?.softwareApplication) {
      structuredData.push(data.jsonLd.softwareApplication);
    }

    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      const el = document.getElementById(jsonLdId);
      if (el) el.remove();
    };
  }, [data]);

  // Handle scroll listener for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous chat looping animation with typing indicator
  useEffect(() => {
    let timers = [];
    let loopTimeout;

    const runChatLoop = () => {
      timers.forEach(clearTimeout);
      timers = [];

      setVisibleCount(0);
      setIsBotTyping(false);
      setTypingStep(0);

      // Step 1: User message 1
      timers.push(setTimeout(() => {
        setVisibleCount(1);
      }, 400));

      // Step 2: AI typing 1
      timers.push(setTimeout(() => {
        setIsBotTyping(true);
        setTypingStep(1);
      }, 1200));

      // Step 3: AI message 1
      timers.push(setTimeout(() => {
        setIsBotTyping(false);
        setVisibleCount(2);
      }, 2600));

      // Step 4: User message 2
      timers.push(setTimeout(() => {
        setVisibleCount(3);
      }, 3800));

      // Step 5: AI typing 2
      timers.push(setTimeout(() => {
        setIsBotTyping(true);
        setTypingStep(2);
      }, 4500));

      // Step 6: AI message 2
      timers.push(setTimeout(() => {
        setIsBotTyping(false);
        setVisibleCount(4);
      }, 5800));

      // Step 7: Confirmation status pill / card
      timers.push(setTimeout(() => {
        setVisibleCount(5);
      }, 6600));

      // Step 8: Loop
      loopTimeout = setTimeout(() => {
        runChatLoop();
      }, 10500);
    };

    runChatLoop();

    return () => {
      timers.forEach(clearTimeout);
      if (loopTimeout) clearTimeout(loopTimeout);
    };
  }, [data.id]);

  const toggleFaq = (id) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  const handleProductClick = (route) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateRoute) {
      onNavigateRoute(route);
    } else {
      window.location.href = route;
    }
  };

  // Other products for "The iSuite AI family" (exclude current product)
  const familyProducts = allProductsNavList.filter(p => p.id !== data.id);

  // Icon for current product
  const CurrentProductIcon = data.id === 'coaching' 
    ? GraduationCap 
    : data.id === 'real-estate' 
    ? Building2 
    : Stethoscope;

  const currentProductLabel = data.id === 'coaching' 
    ? 'Coaching Institute' 
    : data.id === 'real-estate' 
    ? 'Real Estate' 
    : 'Clinic';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#06122e] font-sans selection:bg-[#001d55] selection:text-white">
      
      {/* 1. Sticky Product Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f6f7f9]/95 backdrop-blur-md border-b border-[#040e26]/10 text-[#06122e] shadow-xs'
            : 'bg-[#001845]/90 backdrop-blur-md border-b border-white/10 text-white'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
          
          {/* Brand + Product Label */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center shrink-0 cursor-pointer"
              aria-label="Karttik AI home"
            >
              {isScrolled ? (
                <img
                  src={brandConfig.logos.dark}
                  alt={brandConfig.brandName}
                  className="h-[28px] sm:h-[32px] w-auto object-contain"
                />
              ) : (
                <img
                  src={brandConfig.logos.light}
                  alt={brandConfig.brandName}
                  className="h-[28px] sm:h-[32px] w-auto object-contain"
                />
              )}
            </button>
            <span className={`text-sm font-semibold pl-2.5 border-l ${
              isScrolled ? 'border-slate-300 text-slate-800' : 'border-white/30 text-white'
            }`}>
              {currentProductLabel}
            </span>
          </div>

          {/* Desktop Nav links */}
          <nav className={`hidden md:flex items-center gap-5 lg:gap-7 text-[11px] font-semibold tracking-[0.1em] uppercase ${
            isScrolled ? 'text-slate-700' : 'text-white/80'
          }`}>
            <a href="#features" className="hover:text-amber-500 transition-colors">FEATURES</a>
            <a href="#how" className="hover:text-amber-500 transition-colors">HOW IT WORKS</a>
            <a href="#pricing" className="hover:text-amber-500 transition-colors">PRICING</a>
            <a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a>

            {/* Products Mega-Dropdown */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-amber-500 transition-colors cursor-pointer py-2 uppercase"
                aria-expanded={productsDropdownOpen}
              >
                <span>PRODUCTS</span>
                <ChevronDown className={`w-3 h-3 opacity-70 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 opacity-100' : ''}`} />
              </button>

              <ProductsMegaMenu
                isOpen={productsDropdownOpen}
                onClose={() => setProductsDropdownOpen(false)}
                anchorRef={buttonRef}
                currentProductId={data.id}
                onSelectProduct={(route) => handleProductClick(route)}
              />
            </div>

            <a
              href={brandConfig.loginUrl}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              LOGIN
            </a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#plans"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all cursor-pointer"
              style={{ backgroundColor: accentColor }}
            >
              START FREE TRIAL
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#001845] border-b border-white/10 px-4 py-4 space-y-3 text-white text-sm max-h-[85vh] overflow-y-auto">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-1">FEATURES</a>
            <a href="#how" onClick={() => setMobileMenuOpen(false)} className="block py-1">HOW IT WORKS</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1">PRICING</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1">FAQ</a>

            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                MORE FROM KARTTIK AI
              </div>
              <div className="space-y-1 pl-1">
                {allProductsNavList.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleProductClick(p.route)}
                    className={`block py-1 text-xs w-full text-left ${
                      p.id === data.id ? 'text-amber-300 font-bold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {p.fullName}
                  </button>
                ))}
              </div>
              <div className="pt-2 text-[11px] text-white/50">
                Coming soon: {comingSoonList.join(', ')}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={brandConfig.loginUrl}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-center text-white bg-white/10 border border-white/20"
              >
                LOGIN
              </a>
              <a
                href="#plans"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-center text-white"
                style={{ backgroundColor: accentColor }}
              >
                START FREE TRIAL
              </a>
              <a
                href={brandConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full text-xs font-semibold text-center text-white/90 bg-white/5 border border-white/15"
              >
                Book a demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-gradient-to-b from-[#001845] via-[#001f5c] to-[#00153d] text-white overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-600/15 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center rise">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs sm:text-[13px] font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
            <span 
              className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: accentColor }}
            >
              <CurrentProductIcon className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span>{data.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.1] max-w-4xl mx-auto mb-6">
            {data.hero.h1Main}<br />
            <span className={`bg-clip-text text-transparent italic font-normal ${
              data.id === 'real-estate'
                ? 'bg-gradient-to-r from-[#fb923c] via-[#f59e0b] to-[#fbbf24]'
                : data.id === 'coaching' 
                ? 'bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8]' 
                : 'bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#34d399]'
            }`}>
              {data.hero.h1Accent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10">
            {data.hero.subtitle}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#plans"
              className="bg-white hover:bg-slate-50 text-[#06122e] rounded-full px-8 py-3.5 text-sm font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Start free trial
            </a>
            <a
              href={brandConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full px-8 py-3.5 text-sm font-semibold transition-all backdrop-blur-sm cursor-pointer"
            >
              Book a demo
            </a>
          </div>

          {/* Trust Chips Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-white/70 mb-14 sm:mb-16">
            {data.hero.trustChips.map((chip, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Check className="w-4 h-4" style={{ color: accentBright }} />
                <span>{chip}</span>
              </div>
            ))}
          </div>

          {/* Interactive Chat Simulation Window with Floating Cards */}
          <div className="relative max-w-[420px] sm:max-w-[430px] mx-auto">
            
            {/* Floating Card 1 (Top Left) */}
            {data.hero.floatingCards?.[0] && (
              <div className="hidden lg:flex absolute -left-48 top-12 items-center gap-3 bg-white/95 backdrop-blur-md text-[#06122e] rounded-2xl p-3.5 shadow-xl border border-white/40 text-left animate-floatSlow z-20">
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                >
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider" style={{ color: accentColor }}>
                    {data.hero.floatingCards[0].title}
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    {data.hero.floatingCards[0].subtitle}
                  </div>
                </div>
              </div>
            )}

            {/* Floating Card 2 (Top Right) */}
            {data.hero.floatingCards?.[2] && (
              <div className="hidden lg:flex absolute -right-52 top-20 items-center gap-3 bg-white/95 backdrop-blur-md text-[#06122e] rounded-2xl p-3.5 shadow-xl border border-white/40 text-left animate-floatSlow z-20">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-sky-600">
                    {data.hero.floatingCards[2].title}
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    {data.hero.floatingCards[2].subtitle}
                  </div>
                </div>
              </div>
            )}

            {/* Floating Card 3 (Bottom Right) */}
            {data.hero.floatingCards?.[1] && (
              <div className="hidden lg:flex absolute -right-44 bottom-16 items-center gap-3 bg-white/95 backdrop-blur-md text-[#06122e] rounded-2xl p-3.5 shadow-xl border border-white/40 text-left animate-floatSlow z-20">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-600">
                    {data.hero.floatingCards[1].title}
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    {data.hero.floatingCards[1].subtitle}
                  </div>
                </div>
              </div>
            )}

            {/* Chat Box Container - STRICT FIXED HEIGHT so size never changes */}
            <div className="w-full text-left rounded-3xl bg-white text-[#06122e] shadow-2xl overflow-hidden border border-white/20 h-[480px] flex flex-col shrink-0">
              
              {/* Window Head */}
              <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full text-white font-bold text-xs flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: accentColor }}
                  >
                    {data.hero.chatHeader.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                      {data.hero.chatHeader.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{data.hero.chatHeader.subtitle}</span>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-50 text-blue-600 border border-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>{data.hero.chatHeader.badge}</span>
                </span>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-5 space-y-3 bg-white flex flex-col justify-end overflow-hidden">
                {/* Bubble 1: Buyer */}
                {visibleCount >= 1 && (
                  <div className="flex flex-col items-start animate-chat-pop">
                    <div className="bg-[#f1f5f9] rounded-2xl rounded-tl-xs px-4 py-2.5 shadow-2xs border border-slate-200/50 max-w-[85%] text-xs sm:text-[13px] text-slate-800">
                      <p>{data.hero.chatMessages[0].text}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pl-1">
                      {data.hero.chatMessages[0].time}
                    </span>
                  </div>
                )}

                {/* Bot Typing indicator 1 */}
                {isBotTyping && typingStep === 1 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs px-4 py-2.5 shadow-md">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: accentBright }}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>KARTTIK AI</span>
                      </div>
                      <div className="flex items-center gap-1.5 py-1 px-1">
                        <span className="w-2 h-2 rounded-full typing-dot-1" style={{ backgroundColor: accentBright }}></span>
                        <span className="w-2 h-2 rounded-full typing-dot-2" style={{ backgroundColor: accentBright }}></span>
                        <span className="w-2 h-2 rounded-full typing-dot-3" style={{ backgroundColor: accentBright }}></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bubble 2: AI Reply 1 */}
                {visibleCount >= 2 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs p-3.5 sm:p-4 shadow-md max-w-[88%] text-xs sm:text-[13px]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentBright }}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>KARTTIK AI</span>
                      </div>
                      <p className="leading-relaxed">
                        {data.hero.chatMessages[1].text}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pr-1">
                      {data.hero.chatMessages[1].time}
                    </span>
                  </div>
                )}

                {/* Bubble 3: User Reply 2 */}
                {visibleCount >= 3 && data.hero.chatMessages[2] && (
                  <div className="flex flex-col items-start animate-chat-pop">
                    <div className="bg-[#f1f5f9] rounded-2xl rounded-tl-xs px-4 py-2 shadow-2xs border border-slate-200/50 text-xs sm:text-[13px] text-slate-800">
                      <p>{data.hero.chatMessages[2].text}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pl-1">
                      {data.hero.chatMessages[2].time}
                    </span>
                  </div>
                )}

                {/* Bot Typing indicator 2 */}
                {isBotTyping && typingStep === 2 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs px-4 py-2.5 shadow-md">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: accentBright }}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>KARTTIK AI</span>
                      </div>
                      <div className="flex items-center gap-1.5 py-1 px-1">
                        <span className="w-2 h-2 rounded-full typing-dot-1" style={{ backgroundColor: accentBright }}></span>
                        <span className="w-2 h-2 rounded-full typing-dot-2" style={{ backgroundColor: accentBright }}></span>
                        <span className="w-2 h-2 rounded-full typing-dot-3" style={{ backgroundColor: accentBright }}></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bubble 4: AI Reply 2 */}
                {visibleCount >= 4 && data.hero.chatMessages[3] && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs p-3.5 shadow-md max-w-[88%] text-xs sm:text-[13px]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentBright }}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>KARTTIK AI</span>
                      </div>
                      <p className="leading-relaxed">
                        {data.hero.chatMessages[3].text}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pr-1">
                      {data.hero.chatMessages[3].time}
                    </span>
                  </div>
                )}

                {/* Confirmation Card / Status Pill */}
                {visibleCount >= 5 && data.hero.chatMessages[4] && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-2xl rounded-tr-xs p-3 shadow-xs max-w-[88%] text-xs sm:text-[12.5px]">
                      <span className="font-bold text-emerald-800 block mb-0.5">
                        {data.hero.chatMessages[4].title}
                      </span>
                      <p className="text-emerald-900 leading-snug">
                        {data.hero.chatMessages[4].details}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pr-1">
                      {data.hero.chatMessages[4].time}
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. At a glance Section */}
      <section id={data.atAGlance.id || 'at-a-glance'} className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 head reveal">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] mb-2.5" style={{ color: accentColor }}>
              {data.atAGlance.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
              {data.atAGlance.h2}
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
              {data.atAGlance.intro}
            </p>
          </div>

          {/* 6-cell Fact Grid */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden max-w-5xl mx-auto glance-wrap reveal">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              {data.atAGlance.facts.slice(0, 3).map((f, i) => (
                <div key={i} className="p-6 sm:p-7">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] block mb-2" style={{ color: accentColor }}>
                    {f.label}
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 border-t border-slate-200/80">
              {data.atAGlance.facts.slice(3, 6).map((f, i) => (
                <div key={i} className="p-6 sm:p-7">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] block mb-2" style={{ color: accentColor }}>
                    {f.label}
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Features Section */}
      <section id={data.featuresSection.id || 'features'} className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 head reveal">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] mb-2.5" style={{ color: accentColor }}>
              {data.featuresSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4 whitespace-pre-line">
              {data.featuresSection.h2}
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
              {data.featuresSection.sub}
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto inside reveal stagger">
            {data.featuresSection.columns.map((col, idx) => {
              const IconComp = iconLookup[col.icon] || Layers;
              return (
                <div 
                  key={idx} 
                  className="bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
                    style={{ 
                      backgroundColor: `${accentColor}15`, 
                      borderColor: `${accentColor}30`,
                      color: accentColor 
                    }}
                  >
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                    {col.category}
                  </h3>

                  <div className="space-y-4">
                    {col.items.map((item, i) => (
                      <div key={i}>
                        <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. How It Works Section */}
      <section id={data.howItWorks.id || 'how'} className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 head reveal">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: accentColor }}>
              {data.howItWorks.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.1] text-balance whitespace-pre-line">
              {data.howItWorks.h2}
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24 max-w-5xl mx-auto">
            {data.howItWorks.rows.map((row, idx) => {
              const isEven = idx % 2 === 1; // Alternating layout
              return (
                <div 
                  key={row.id || idx}
                  className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-8 lg:gap-14 items-center frow reveal"
                >
                  {/* Text Column */}
                  <div className={isEven ? 'order-1 min-[640px]:order-2 reveal-right' : 'reveal-left'}>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] mb-2 block" style={{ color: accentColor }}>
                      {row.eyebrow}
                    </span>
                    <h3 className="text-2xl sm:text-[30px] font-bold tracking-tight text-[#06122e] leading-snug mb-4">
                      {row.h3}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-5">
                      {row.text}
                    </p>

                    <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                      {row.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Mockup Column */}
                  <div className={`p-5 sm:p-7 rounded-[28px] flex items-center justify-center ${
                    isEven ? 'order-2 min-[640px]:order-1 reveal-left' : 'reveal-right'
                  }`}
                  style={{ backgroundColor: `${accentColor}0d` }}
                  >
                    
                    {/* Visual 1: Flats Board for Real Estate */}
                    {row.type === 'flatsBoard' && row.flatsBoardData && (
                      <div className="w-full max-w-[410px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left">
                        <div className="p-4 border-b border-slate-100 flex flex-col gap-1.5 bg-slate-50/70">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                              {row.flatsBoardData.title}
                            </h4>
                            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              8 on sale
                            </span>
                          </div>
                          <p className="text-[10.5px] text-slate-500">
                            {row.flatsBoardData.subtitle}
                          </p>

                          {/* Status Legend */}
                          <div className="flex items-center gap-3 pt-1 text-[10px] font-medium text-slate-600">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Available
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Held
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-sky-500"></span> Booked
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-slate-300"></span> Sold
                            </span>
                          </div>
                        </div>

                        {/* Flats Grid Matrix: Floors 6 down to 1 */}
                        <div className="p-3.5 space-y-2 bg-[#f8fafc] overflow-x-auto">
                          {row.flatsBoardData.floors.map((floor) => (
                            <div key={floor.floorNumber} className="flex items-center gap-2">
                              <span className="w-4 text-[10.5px] font-mono text-slate-400 font-semibold text-center shrink-0">
                                {floor.floorNumber}
                              </span>
                              <div className="grid grid-cols-4 gap-1.5 flex-1">
                                {floor.flats.map((flat) => {
                                  const isHeld = flat.status === 'held';
                                  const isAvailable = flat.status === 'available';
                                  const isBooked = flat.status === 'booked';

                                  return (
                                    <div
                                      key={flat.number}
                                      aria-label={`Flat ${flat.number}, ${flat.status}`}
                                      className={`py-1.5 px-2 rounded-lg text-center text-xs font-semibold border transition-all ${
                                        isHeld
                                          ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400/60 shadow-xs'
                                          : isAvailable
                                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100 cursor-pointer'
                                          : isBooked
                                          ? 'bg-sky-50 text-sky-700 border-sky-200'
                                          : 'bg-slate-100 text-slate-400 border-slate-200'
                                      }`}
                                    >
                                      {flat.number}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Detail Card below */}
                        <div className="p-3 bg-white border-t border-slate-100 flex items-start gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0 animate-pulse"></div>
                          <div className="text-xs">
                            <div className="font-bold text-slate-800">{row.flatsBoardData.heldDetail.unit}</div>
                            <div className="text-[11px] text-amber-800 font-medium">{row.flatsBoardData.heldDetail.note}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Handover Brief for Real Estate */}
                    {row.type === 'handoverBrief' && row.handoverData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left">
                        <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                          <div className="flex items-center gap-2.5">
                            <div 
                              className="w-8 h-8 rounded-full text-white font-bold text-xs flex items-center justify-center shadow-xs"
                              style={{ backgroundColor: accentColor }}
                            >
                              KR
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-800 leading-tight">
                                {row.handoverData.buyerName}
                              </h4>
                              <span className="text-[10px] text-slate-400">
                                {row.handoverData.meta}
                              </span>
                            </div>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-rose-50 text-rose-600 border border-rose-200">
                            {row.handoverData.tag}
                          </span>
                        </div>

                        <div className="p-4 space-y-2.5 bg-white text-xs divide-y divide-slate-100">
                          {row.handoverData.fields.map((f, fi) => (
                            <div key={fi} className="pt-2 first:pt-0 flex items-start gap-2.5">
                              <span className="w-16 shrink-0 font-bold text-slate-500 text-[11px]">
                                {f.label}:
                              </span>
                              <span className="text-slate-800 text-[11.5px] leading-snug">
                                {f.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Booking Amount & Payment Plan */}
                    {row.type === 'bookingPaymentPlan' && row.bookingData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left">
                        <div className="p-3 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span>{row.bookingData.buyer}</span>
                        </div>

                        <div className="p-4 space-y-3 bg-[#f8fafc]">
                          {/* Team text message */}
                          <div className="bg-[#001d55] text-white rounded-2xl rounded-tl-xs p-3 text-xs shadow-xs">
                            <div className="text-[10px] font-bold uppercase mb-1" style={{ color: accentBright }}>
                              {row.bookingData.teamSender}
                            </div>
                            <p className="text-[11.5px]">{row.bookingData.message}</p>
                          </div>

                          {/* Razorpay card */}
                          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                              <span>{row.bookingData.cardTitle}</span>
                              <span className="text-sm font-extrabold text-slate-900">{row.bookingData.amount}</span>
                            </div>
                            <button className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs">
                              {row.bookingData.buttonLabel}
                            </button>
                            <div className="text-[9.5px] text-slate-400 text-center">
                              {row.bookingData.gateways}
                            </div>
                          </div>

                          {/* Paid status pill */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            <span>✓</span>
                            <span>{row.bookingData.statusPill}</span>
                          </div>

                          {/* Payment plan timeline */}
                          <div className="pt-2 border-t border-slate-200">
                            <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                              {row.bookingData.planTitle}
                            </div>
                            <div className="space-y-1.5 text-[11px]">
                              {row.bookingData.steps.map((st, sti) => (
                                <div key={sti} className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-slate-100">
                                  <span className="font-semibold text-slate-800">{st.step} {st.name}</span>
                                  <span className={`text-[10px] font-medium ${st.isDone ? 'text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded' : 'text-slate-500'}`}>
                                    {st.status}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: Cost Sheet Table */}
                    {row.type === 'costSheet' && row.costSheetData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest block" style={{ color: accentColor }}>
                              {row.costSheetData.docTitle}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mt-0.5">
                              {row.costSheetData.property}
                            </h4>
                            <p className="text-[10.5px] text-slate-400 mt-0.5">{row.costSheetData.buyer}</p>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                            {row.costSheetData.badge}
                          </span>
                        </div>

                        {/* Table */}
                        <div className="p-4 space-y-2 text-xs divide-y divide-slate-100">
                          {row.costSheetData.items.map((it, iti) => (
                            <div key={iti} className="pt-2 first:pt-0 flex items-center justify-between text-slate-600 text-[11.5px]">
                              <span>{it.label}</span>
                              <span className="font-mono font-medium text-slate-800">{it.amount}</span>
                            </div>
                          ))}
                          <div className="pt-3 flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm border-t-2 border-slate-800">
                            <span>{row.costSheetData.totalLabel}</span>
                            <span className="font-mono text-emerald-700">{row.costSheetData.totalAmount}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual: Kanban Board for Coaching */}
                    {row.type === 'kanban' && row.kanbanData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/70 overflow-hidden text-left">
                        <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                          <div className="font-bold text-xs text-slate-800">
                            {row.kanbanData.title}
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                            {row.kanbanData.meta}
                          </span>
                        </div>
                        <div className="p-3 grid grid-cols-3 gap-2 text-left bg-slate-50/50">
                          {row.kanbanData.columns.map((col, ci) => (
                            <div key={ci} className="space-y-1.5">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {col.name} ({col.count})
                              </div>
                              <div className="space-y-1.5">
                                {col.cards.map((c, cci) => (
                                  <div key={cci} className="bg-white rounded-lg p-2 border border-slate-200/80 shadow-2xs">
                                    <div className="font-semibold text-[11px] text-slate-800 leading-tight">
                                      {c.name}
                                    </div>
                                    <div className="text-[9.5px] text-slate-400 mt-0.5">
                                      {c.tag}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visual: Batches & Attendance Card for Coaching */}
                    {row.type === 'attendance' && row.attendanceData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/70 overflow-hidden text-left">
                        <div className="p-4 border-b border-slate-100">
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-bold text-xs text-slate-800">
                              {row.attendanceData.batchName}
                            </h4>
                            <span className="text-[11px] font-semibold text-purple-700">
                              {row.attendanceData.seatsTaken} / {row.attendanceData.seatsTotal} seats
                            </span>
                          </div>
                          <p className="text-[10.5px] text-slate-400 mb-2">
                            {row.attendanceData.schedule}
                          </p>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-[#7357ff] h-full rounded-full transition-all"
                              style={{ width: `${(row.attendanceData.seatsTaken / row.attendanceData.seatsTotal) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-slate-50/50 space-y-2">
                          <div className="text-[10.5px] font-medium text-slate-400 mb-2">
                            {row.attendanceData.attendanceTakenTime}
                          </div>
                          {row.attendanceData.students.map((st, si) => (
                            <div key={si} className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 shadow-2xs">
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center">
                                  {st.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <span className="font-semibold text-slate-800 text-xs">{st.name}</span>
                                  {st.note && (
                                    <span className="block text-[9.5px] text-rose-500">{st.note}</span>
                                  )}
                                </div>
                              </div>
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${st.pillClass}`}>
                                {st.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visual: Fee instalments timeline for Coaching */}
                    {row.type === 'feeTimeline' && row.feeData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/70 overflow-hidden text-left">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-xs text-slate-800">{row.feeData.studentName} · {row.feeData.course}</h4>
                            <p className="text-[10.5px] text-slate-400">{row.feeData.totalPlan}</p>
                          </div>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                            {row.feeData.status}
                          </span>
                        </div>

                        <div className="p-4 space-y-2 text-xs">
                          {row.feeData.timeline.map((item, ti) => (
                            <div key={ti} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                              <div className="flex items-center gap-2">
                                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                                  item.status === 'paid' ? 'bg-emerald-500 text-white' : item.status === 'due' ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-600'
                                }`}>
                                  {item.step}
                                </span>
                                <div>
                                  <div className="font-medium text-slate-800 text-[11px]">{item.title}</div>
                                  <div className="text-[9.5px] text-slate-400">{item.meta}</div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                            <div className="text-[10px] font-bold text-purple-700 uppercase mb-1">
                              FEE REMINDER
                            </div>
                            <p className="text-[11px] text-slate-700 mb-2">
                              {row.feeData.bubbleText}
                            </p>
                            <button className="px-3 py-1.5 rounded-lg bg-[#7357ff] text-white text-[11px] font-bold shadow-xs">
                              {row.feeData.buttonLabel}
                            </button>
                            <span className="block text-[9.5px] text-slate-400 mt-1 italic">
                              {row.feeData.caption}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual: Batch Broadcast Message for Coaching */}
                    {row.type === 'batchMessage' && row.batchMessageData && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/70 overflow-hidden text-left">
                        <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                          <h4 className="font-bold text-xs text-slate-800">
                            {row.batchMessageData.batchName}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {row.batchMessageData.status}
                          </span>
                        </div>

                        <div className="p-4 space-y-3 bg-[#f8fafc]">
                          <div className="bg-[#001d55] text-white rounded-2xl rounded-tl-xs p-3.5 shadow-xs">
                            <div className="text-[9.5px] font-bold text-[#c084fc] uppercase tracking-wider mb-1">
                              {row.batchMessageData.updateTitle}
                            </div>
                            <p className="text-[11.5px] leading-relaxed">
                              {row.batchMessageData.messageText}
                            </p>
                          </div>

                          <div className="text-[10px] text-slate-400 pl-1">
                            {row.batchMessageData.meta}
                          </div>

                          <div className="bg-white rounded-2xl rounded-tl-xs px-3.5 py-1.5 shadow-2xs border border-slate-200 text-slate-800 text-[11px] w-fit">
                            {row.batchMessageData.replyText}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Clinic Visuals (Preserved from ClinicPage) */}
                    {row.type === 'clinicDiary' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden text-left">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#11a297] text-white font-bold text-xs flex items-center justify-center">DP</div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-800">Dr. Priya · Dental</h4>
                              <p className="text-[10px] text-slate-400">Saturday, 17 October</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-600">4 booked</span>
                        </div>
                        <div className="p-3 space-y-1.5 text-xs">
                          <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-between">
                            <span className="font-mono text-[10px] text-slate-400">9:30</span>
                            <span className="font-semibold text-slate-800 text-[11px]">Anitha S · Cleaning</span>
                            <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Reminded</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-sky-50 flex items-center justify-between border border-sky-200">
                            <span className="font-mono text-[10px] text-sky-700 font-bold">10:30</span>
                            <span className="font-bold text-slate-800 text-[11px]">Ramesh K · Consultation</span>
                            <span className="text-[9px] text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded font-semibold">Booked by AI</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {row.type === 'clinicReminderReport' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden text-left p-4 space-y-2">
                        <div className="bg-[#001d55] text-white rounded-2xl p-3 text-xs">
                          <div className="text-[9px] font-bold text-[#2dd4bf] uppercase mb-1">🔔 REMINDER</div>
                          <p className="text-[11px]">Hi Ramesh, reminder of your appointment with Dr. Priya tomorrow at 10:30 am.</p>
                        </div>
                        <div className="bg-white rounded-xl p-2 border border-slate-200 text-xs w-fit">Thanks, I'll be there</div>
                      </div>
                    )}

                    {row.type === 'clinicPrescription' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden text-left p-4 text-xs">
                        <div className="font-bold text-slate-800 mb-1">Smile Dental Care</div>
                        <div className="text-[10px] text-slate-400 mb-2">Dr. Priya Raman · 17 Oct 2026</div>
                        <div className="font-serif font-bold text-emerald-700 text-base mb-1">℞</div>
                        <div className="text-[11px] text-slate-700">1. Paracetamol 650 mg (1-0-1 · 3 days)</div>
                        <div className="text-[11px] text-slate-700">2. Chlorhexidine mouthwash (Twice a day)</div>
                      </div>
                    )}

                    {row.type === 'clinicFollowups' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden text-left p-4 text-xs space-y-2">
                        <div className="font-bold text-slate-800 mb-1">Sent by themselves</div>
                        <div className="p-2 rounded-lg bg-slate-50 flex items-center justify-between">
                          <span className="text-[11px] text-slate-700">Thank you, and a review request</span>
                          <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Sent</span>
                        </div>
                      </div>
                    )}

                    {/* Gym Mockup 1: Check-in */}
                    {row.type === 'gymCheckin' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-3">
                        <div className="flex items-center justify-between border-b pb-2">
                          <span className="font-bold text-xs text-slate-800">Fit Zone · Front Desk</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">● LIVE</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-[11px] text-slate-600">
                          Scan to check in or send <span className="font-mono font-bold text-slate-900">“Check in FZ7K2”</span> on WhatsApp
                        </div>
                        <div className="space-y-2">
                          <div className="bg-slate-100 p-2 rounded-xl text-xs w-fit ml-auto">Check in FZ7K2 · 6:12 am</div>
                          <div className="bg-[#001d55] text-white p-2.5 rounded-xl text-xs max-w-[85%]">
                            <p className="font-semibold text-emerald-400 text-[10px] mb-0.5">FIT ZONE</p>
                            Checked in, Karthik! Your Gold plan is active — renews on 12 Nov.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Gym Mockup 2: Membership & Freeze */}
                    {row.type === 'gymMembership' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-sm text-slate-800">Karthik M</h4>
                            <span className="text-[11px] text-slate-500">ID: #FZ-1082 · Joined Jan 2026</span>
                          </div>
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Gold Plan</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-slate-400 block text-[10px]">NEXT RENEWAL</span>
                            <span className="font-bold text-slate-800">12 Nov 2026</span>
                          </div>
                          <button className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-[11px] font-semibold text-slate-700 shadow-2xs">
                            Freeze (14 days left)
                          </button>
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                          <span>Auto-renewal link: Scheduled</span>
                          <span className="text-emerald-600 font-semibold">Active</span>
                        </div>
                      </div>
                    )}

                    {/* Gym Mockup 3: PT Sessions */}
                    {row.type === 'gymPt' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-3 text-xs">
                        <div className="font-bold text-slate-800 flex items-center justify-between">
                          <span>Personal Training · Vijay</span>
                          <span className="text-[10px] text-orange-600 bg-orange-50 px-2 py-0.5 rounded font-bold">Pack of 10</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-600">Sessions Completed:</span>
                            <span className="font-bold text-slate-900">7 / 10</span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-orange-500 h-full w-[70%]"></div>
                          </div>
                          <span className="text-[10px] text-slate-400 block">3 sessions left · Renewal alert scheduled</span>
                        </div>
                      </div>
                    )}

                    {/* Salon Mockup 1: Front Desk Stylist Board */}
                    {row.type === 'salonBoard' && (
                      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between border-b pb-2">
                          <span className="font-bold text-xs text-slate-800">Front Desk · Sat 14 Nov</span>
                          <span className="text-[10px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full font-bold">Priya · Ravi · Anu</span>
                        </div>
                        <div className="space-y-1.5 text-[11px]">
                          <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 flex justify-between items-center">
                            <span><b>10:00</b> · Karthik · Haircut (Ravi)</span>
                            <span className="text-[10px] text-emerald-700 font-bold">Done · ₹300</span>
                          </div>
                          <div className="p-2 rounded-lg bg-pink-50/70 border border-pink-100 flex justify-between items-center">
                            <span><b>10:30</b> · Meena · Facial (Priya)</span>
                            <span className="text-[10px] text-pink-700 font-bold">In chair (10:34)</span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex justify-between items-center">
                            <span><b>Walk-in</b> · Sanjay · Haircut</span>
                            <span className="text-[10px] text-slate-500 font-medium">Wait ~10 min</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Salon Mockup 2: Client Card */}
                    {row.type === 'salonClientCard' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-3 text-xs">
                        <div className="flex items-center justify-between border-b pb-2">
                          <div>
                            <span className="font-bold text-sm text-slate-800">Divya R</span>
                            <span className="text-[10px] text-pink-600 block">VIP Client · 14 visits</span>
                          </div>
                          <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Usual: Priya</span>
                        </div>
                        <div className="bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60">
                          <span className="text-[10px] font-bold text-amber-800 uppercase block mb-1">🔒 PRIVATE FORMULA</span>
                          <p className="text-[11px] text-slate-700 font-mono">L'Oreal Majirel 5.3 + 20 vol · Patch test clear</p>
                        </div>
                        <div className="text-[11px] text-slate-500 flex justify-between">
                          <span>Last: 24 Oct (₹1,560)</span>
                          <span className="text-pink-600 font-bold">Due back in 6 days</span>
                        </div>
                      </div>
                    )}

                    {/* Salon Mockup 3: Stylist Commission */}
                    {row.type === 'salonCommission' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-2.5 text-xs">
                        <div className="font-bold text-slate-800 flex justify-between">
                          <span>Commission Report · Priya</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">November</span>
                        </div>
                        <div className="divide-y divide-slate-100 text-[11px]">
                          <div className="py-1.5 flex justify-between">
                            <span>Services (14 haircuts, 8 spas)</span>
                            <span className="font-bold text-slate-800">₹8,400</span>
                          </div>
                          <div className="py-1.5 flex justify-between">
                            <span>Product Sales (Moroccanoil)</span>
                            <span className="font-bold text-slate-800">₹1,200</span>
                          </div>
                          <div className="py-2 flex justify-between font-bold text-slate-900 bg-slate-50 px-2 rounded">
                            <span>Total Payout</span>
                            <span className="text-emerald-700">₹9,600</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Field Service Mockup 1: Dispatch Board */}
                    {row.type === 'fieldJobsBoard' && (
                      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between border-b pb-2">
                          <span className="font-bold text-xs text-slate-800">Dispatch Board · Today</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Tech: Senthil & Rajesh</span>
                        </div>
                        <div className="space-y-2 text-[11px]">
                          <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-slate-900">JOB-0042 · Senthil</span>
                              <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">In Progress</span>
                            </div>
                            <div className="text-slate-600 text-[10.5px]">Daikin 1.5T AC Leakage · Kavitha (Anna Nagar)</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-slate-900">JOB-0043 · Rajesh</span>
                              <span className="text-[9px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded font-bold">Assigned · 2 pm</span>
                            </div>
                            <div className="text-slate-600 text-[10.5px]">Voltas Split AC Service · Ramesh (Mogappair)</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Field Service Mockup 2: Mobile Job Card */}
                    {row.type === 'fieldJobCard' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-2.5 text-xs">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="font-bold text-slate-800">Job Card #JOB-0042</span>
                          <span className="text-[10px] text-emerald-600 font-bold">✓ Signed & Paid</span>
                        </div>
                        <div className="text-[11px] space-y-1">
                          <div className="flex justify-between text-slate-600">
                            <span>Drain pipe replacement</span>
                            <span>₹350</span>
                          </div>
                          <div className="flex justify-between text-slate-600">
                            <span>Gas top-up (R32)</span>
                            <span>₹500</span>
                          </div>
                          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t">
                            <span>Total (incl. GST)</span>
                            <span className="text-emerald-700">₹1,003</span>
                          </div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-xl text-[10.5px] text-slate-500 flex justify-between items-center">
                          <span>UPI Ref: 429184...</span>
                          <span className="font-mono text-emerald-600 font-bold">PAID</span>
                        </div>
                      </div>
                    )}

                    {/* Field Service Mockup 3: AMC Contract */}
                    {row.type === 'fieldAmc' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-3 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-800">AMC-2026-088</span>
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Active AMC</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Equipment:</span>
                            <span className="font-bold text-slate-800">3x Daikin Split ACs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Visits Completed:</span>
                            <span className="font-bold text-emerald-600">2 of 3 done</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Contract End:</span>
                            <span className="font-bold text-slate-800">18 Dec 2026</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 block">Next routine maintenance visit scheduled for 15 Nov</span>
                      </div>
                    )}

                    {/* Turf Mockup 1: Court Board */}
                    {row.type === 'turfBoard' && (
                      <div className="w-full max-w-[410px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-3.5 space-y-2">
                        <div className="flex items-center justify-between border-b pb-2">
                          <span className="font-bold text-xs text-slate-800">Court Board · Fri 16 Oct</span>
                          <span className="text-[10px] text-lime-700 bg-lime-50 px-2 py-0.5 rounded font-bold">24 Games Booked</span>
                        </div>
                        <div className="space-y-1.5 text-[10.5px]">
                          <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 flex justify-between">
                            <span><b>6:00 pm</b> · Half A · Arun’s XI</span>
                            <span className="text-emerald-700 font-bold">Done · ₹1,100</span>
                          </div>
                          <div className="p-2 rounded-lg bg-lime-50/80 border border-lime-200 flex justify-between">
                            <span><b>7:00 pm</b> · Box Cricket · Thunder XI</span>
                            <span className="text-lime-800 font-bold">₹500 adv · ₹700 due</span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex justify-between">
                            <span><b>8 - 10 pm</b> · Full Ground · Ravi FC</span>
                            <span className="text-slate-600 font-bold">Regular (Wk 3/8)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Turf Mockup 2: Advance Payment */}
                    {row.type === 'turfAdvance' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-3 text-xs">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="font-bold text-slate-800">Slot Held · Sat 7 pm</span>
                          <span className="text-[10px] bg-lime-50 text-lime-800 px-2 py-0.5 rounded font-bold">Thunder XI</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] space-y-1">
                          <div className="flex justify-between">
                            <span>Box Cricket (1 hr):</span>
                            <span>₹1,300</span>
                          </div>
                          <div className="flex justify-between text-emerald-600 font-semibold">
                            <span>Online Advance Paid:</span>
                            <span>-₹500</span>
                          </div>
                          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t">
                            <span>Balance Due at Desk:</span>
                            <span className="text-orange-600">₹800</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 block">Advance paid directly into your connected Razorpay</span>
                      </div>
                    )}

                    {/* Turf Mockup 3: Regular Leagues */}
                    {row.type === 'turfLeague' && (
                      <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-left p-4 space-y-2.5 text-xs">
                        <div className="font-bold text-slate-800 flex justify-between">
                          <span>Weekly Regular Teams</span>
                          <span className="text-[10px] text-lime-700 bg-lime-50 px-2 py-0.5 rounded font-bold">11 Teams</span>
                        </div>
                        <div className="divide-y divide-slate-100 text-[11px]">
                          <div className="py-2 flex justify-between">
                            <span>Ravi FC · Friday 8-10 pm</span>
                            <span className="text-slate-600">Prepaid Pack (6 hrs left)</span>
                          </div>
                          <div className="py-2 flex justify-between">
                            <span>TCS Corporate · Saturday 6-8 am</span>
                            <span className="text-emerald-600 font-bold">Confirmed</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

          {/* Section: Dashboard with 4 Numbers Every Morning */}
          <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-slate-200/60 text-center kboard reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#06122e] mb-3">
              {data.dashboard.h2}
            </h2>
            <p className="text-xs sm:text-[14.5px] text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
              {data.dashboard.sub}
            </p>

            <div className="grid grid-cols-2 min-[640px]:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto text-left mb-16 stagger">
              {data.dashboard.stats.map((stat, si) => {
                const StatIcon = iconLookup[stat.icon] || Calendar;
                return (
                  <div key={si} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 border"
                      style={{ 
                        backgroundColor: `${accentColor}15`, 
                        borderColor: `${accentColor}30`,
                        color: accentColor 
                      }}
                    >
                      <StatIcon className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium mb-1">{stat.label}</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-[11px] text-slate-400">{stat.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Section: Speaks Like an Institute / Sales Office */}
            <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto head reveal">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] block mb-3" style={{ color: accentColor }}>
                {data.speaksSection.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#06122e] mb-8 sm:mb-12">
                {data.speaksSection.h2}
              </h2>

              {/* Comparison Table */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden text-left compare reveal">
                {/* Header */}
                <div className="grid grid-cols-1 min-[640px]:grid-cols-2 border-b border-slate-200/80 bg-slate-50/50">
                  <div className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {data.speaksSection.comparisonHeader.left}
                  </div>
                  <div 
                    className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] border-t min-[640px]:border-t-0 min-[640px]:border-l border-slate-200/80"
                    style={{ color: accentColor, backgroundColor: `${accentColor}0a` }}
                  >
                    {data.speaksSection.comparisonHeader.right}
                  </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-slate-200/80 text-xs sm:text-[13px]">
                  {data.speaksSection.rows.map((row, ri) => (
                    <div key={ri} className="grid grid-cols-1 min-[640px]:grid-cols-2">
                      <div className="px-6 py-4 flex items-center gap-3 text-slate-600">
                        <span className="text-slate-400 font-bold shrink-0">✕</span>
                        <span>{row.today}</span>
                      </div>
                      <div 
                        className="px-6 py-4 flex items-center gap-3 text-slate-800 min-[640px]:border-l border-slate-200/80"
                        style={{ backgroundColor: `${accentColor}06` }}
                      >
                        <span className="font-bold shrink-0" style={{ color: accentColor }}>✓</span>
                        <span>{row.withProduct}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pills row */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto chips reveal">
                {data.speaksSection.chips.map((chip, ci) => {
                  const chipText = typeof chip === 'string' ? chip : chip.text;
                  const ChipIcon = typeof chip === 'string' ? Check : iconLookup[chip.icon] || Check;

                  return (
                    <span
                      key={ci}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs"
                    >
                      <ChipIcon className="w-3.5 h-3.5" style={{ color: accentColor }} />
                      <span>{chipText}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Section: Careful with students / buyers / patients */}
            <div className="mt-20 sm:mt-28 text-center max-w-5xl mx-auto safe-grid reveal">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#06122e] mb-10 sm:mb-14">
                {data.safetySection.h2}
              </h2>

              <div className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-6 sm:gap-8 text-left">
                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border"
                    style={{ 
                      backgroundColor: `${accentColor}15`, 
                      borderColor: `${accentColor}30`,
                      color: accentColor 
                    }}
                  >
                    <Layers className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-3">
                    {data.safetySection.cards[0].title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    {data.safetySection.cards[0].text}
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border"
                    style={{ 
                      backgroundColor: `${accentColor}15`, 
                      borderColor: `${accentColor}30`,
                      color: accentColor 
                    }}
                  >
                    <Shield className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                    {data.safetySection.cards[1].title}
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-[13.5px] text-slate-600 font-normal">
                    {data.safetySection.cards[1].rules.map((rule, ri) => (
                      <li key={ri} className="flex items-start gap-3">
                        <span className="text-rose-500 font-bold shrink-0 text-sm">✕</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Pricing Section (id="pricing" and id="plans") */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
        <div id="plans" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 head reveal">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] mb-2.5" style={{ color: accentColor }}>
              {data.pricingSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
              {data.pricingSection.h2}
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#475569] max-w-[700px] mx-auto leading-relaxed font-normal">
              {data.pricingSection.intro}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch reveal stagger">
            {data.pricingSection.plans.map((plan, pi) => {
              const isPopular = plan.isPopular;
              return (
                <div 
                  key={pi}
                  className={`bg-white rounded-3xl p-8 border shadow-xs flex flex-col justify-between relative ${
                    isPopular 
                      ? 'shadow-lg border-2' 
                      : 'border-slate-200/90'
                  }`}
                  style={isPopular ? { borderColor: accentColor } : {}}
                >
                  {isPopular && (
                    <div 
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs"
                      style={{ backgroundColor: accentColor }}
                    >
                      {plan.badge}
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

                    {plan.leadFeature && (
                      <div className="text-xs font-bold text-slate-800 mb-3">
                        {plan.leadFeature}
                      </div>
                    )}

                    <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 mb-8">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                          <div>
                            <span className="font-semibold text-slate-800">{f.title}</span>
                            {f.description && (
                              <span className="text-slate-500 font-normal"> — {f.description}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenTrial ? onOpenTrial() : (window.location.href = '/pricing/')}
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center text-white shadow-md transition-all cursor-pointer block ${
                      isPopular
                        ? 'hover:opacity-90'
                        : 'bg-[#001d55] hover:bg-[#002773]'
                    }`}
                    style={isPopular ? { backgroundColor: accentColor } : {}}
                  >
                    Start {plan.trialText ? plan.trialText.split(' ')[0] : '14'}-Day Free Trial
                  </button>
                </div>
              );
            })}
          </div>

          {/* Pricing Footnotes */}
          <div className="mt-12 text-center max-w-3xl mx-auto space-y-3 text-xs text-slate-500 font-normal">
            {data.pricingSection.footnotes.map((fn, fni) => {
              if (typeof fn === 'string') {
                return <p key={fni}>{fn}</p>;
              }
              return (
                <p key={fni}>
                  {fn.prefix}
                  {fn.text}
                  {fn.linkText && (
                    <a 
                      href={fn.linkUrl} 
                      className="font-semibold underline"
                      style={{ color: accentColor }}
                    >
                      {fn.linkText}
                    </a>
                  )}
                </p>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FAQ Section */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16 head reveal">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] mb-2.5" style={{ color: accentColor }}>
              {data.faqSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance">
              {data.faqSection.h2}
            </h2>
          </div>

          <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80 faq reveal">
            {data.faqSection.faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id}>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span 
                      className="text-sm sm:text-base font-semibold text-[#06122e] transition-colors"
                      style={{ color: isOpen ? accentColor : undefined }}
                    >
                      {faq.question}
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[1.8]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[1.8]" />
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

      {/* 8. Final CTA Banner */}
      <section className="py-20 sm:py-24 bg-[#001845] text-white text-center relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[130px] pointer-events-none opacity-20"
          style={{ backgroundColor: accentColor }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 cta-band reveal">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: accentBright }}>
            {data.ctaBanner.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-4">
            {data.ctaBanner.h2}
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            {data.ctaBanner.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href={data.ctaBanner.buttonPrimary.href}
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              {data.ctaBanner.buttonPrimary.text}
            </a>
            <a
              href={data.ctaBanner.buttonSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all"
            >
              {data.ctaBanner.buttonSecondary.text}
            </a>
          </div>

          <div className="text-xs sm:text-[13px] text-white/60">
            <a href={data.ctaBanner.callHref} className="hover:text-white transition-colors underline">
              {data.ctaBanner.callText}
            </a>
          </div>
        </div>
      </section>

      {/* 9. The Karttik AI Family Section */}
      <section className="py-20 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center head reveal">
          
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-2.5">
            {data.familySection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#06122e] mb-3">
            {data.familySection.h2}
          </h2>
          <p className="text-xs sm:text-[15px] text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
            {data.familySection.sub}
          </p>

          {/* 6 Other Product Cards - Fully Clickable links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left mb-10 more-grid reveal stagger">
            {familyProducts.map((p) => {
              const ProdIcon = iconLookup[p.id] || Stethoscope;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProductClick(p.route)}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer text-left"
                >
                  <div>
                    <div 
                      className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-4 transition-colors"
                    >
                      <ProdIcon className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      KARTTIK AI
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold" style={{ color: accentColor }}>
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* More link & Coming soon */}
          <div className="space-y-3">
            {data.familySection.moreLink && (
              <a
                href={data.familySection.moreLink.href}
                className="inline-block text-xs sm:text-sm font-semibold hover:underline"
                style={{ color: accentColor }}
              >
                {data.familySection.moreLink.text} →
              </a>
            )}

            <div className="text-xs text-slate-400">
              <a href={data.familySection.comingSoonLink} className="hover:text-slate-600 transition-colors">
                Coming soon: {comingSoonList.join(' · ')}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 10. Shared Footer */}
      <footer className="bg-[#f6f7f9] text-[#040e26] text-xs sm:text-sm border-t border-slate-200/80 pt-16 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 sm:mb-12">
            <button onClick={onNavigateHome} className="inline-block mb-3.5 cursor-pointer text-left">
              <img
                src={brandConfig.logos.dark}
                alt={brandConfig.brandName}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </button>
            <p className="text-xs sm:text-[13px] text-slate-500 max-w-md leading-relaxed font-normal">
              {brandConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-12 pb-12 reveal stagger">
            {/* Products Column */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                PRODUCTS
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                {allProductsNavList.map((p) => (
                  <li key={p.id}>
                    <button 
                      onClick={() => handleProductClick(p.route)}
                      className={`text-left cursor-pointer transition-colors ${
                        p.id === data.id ? 'font-bold' : 'hover:text-slate-900'
                      }`}
                      style={p.id === data.id ? { color: accentColor } : {}}
                    >
                      {p.fullName} {p.id === data.id ? '(Current)' : ''}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Column */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                KARTTIK AI
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li><a href="/#platform" className="hover:text-slate-900">The platform</a></li>
                <li><a href="/pricing/" className="hover:text-slate-900">Plans and pricing</a></li>
                <li><a href="/#faq" className="hover:text-slate-900">FAQ</a></li>
                <li><a href={brandConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">Book a demo</a></li>
              </ul>
            </div>

            {/* Talk To Us */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                TALK TO US
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li><a href={brandConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">WhatsApp</a></li>
                <li><a href={brandConfig.phoneTel} className="hover:text-slate-900">{brandConfig.phone}</a></li>
                <li><a href={`mailto:${brandConfig.email}`} className="hover:text-slate-900">{brandConfig.email}</a></li>
                <li className="text-slate-500">{brandConfig.headquarters}</li>
              </ul>
            </div>

            {/* Company & Policies */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li><button onClick={onNavigateHome} className="hover:text-slate-900 text-left">About</button></li>
                <li><a href={brandConfig.companySiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">{brandConfig.companyName}</a></li>
                <li><a href="/#policies" className="hover:text-slate-900">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
            <div>
              {brandConfig.copyrightText}
            </div>
            <div>
              {brandConfig.madeInText}
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

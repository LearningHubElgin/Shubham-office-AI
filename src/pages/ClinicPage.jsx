import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
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
  Megaphone,
  Calendar,
  Clock,
  Bell,
  Star,
  UserX,
  MessageSquare,
  Gift,
  ToggleRight,
  Smartphone,
  Layers
} from 'lucide-react';

export default function ClinicPage({ onOpenDemo, onOpenTrial, onNavigateHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Looping Chat Animation State
  const [visibleCount, setVisibleCount] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [typingStep, setTypingStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous looping chat animation with 3-dot typing indicator
  useEffect(() => {
    let timers = [];
    let loopTimeout;

    const runChatLoop = () => {
      timers.forEach(clearTimeout);
      timers = [];

      setVisibleCount(0);
      setIsBotTyping(false);
      setTypingStep(0);

      // Step 1: Patient message 1 pops up
      timers.push(setTimeout(() => {
        setVisibleCount(1);
      }, 400));

      // Step 2: AI starts typing (3 floating bouncing dots)
      timers.push(setTimeout(() => {
        setIsBotTyping(true);
        setTypingStep(1);
      }, 1200));

      // Step 3: AI finishes typing, AI message 1 pops up
      timers.push(setTimeout(() => {
        setIsBotTyping(false);
        setVisibleCount(2);
      }, 2600));

      // Step 4: Patient message 2 pops up ("10:30 ok")
      timers.push(setTimeout(() => {
        setVisibleCount(3);
      }, 3700));

      // Step 5: AI starts typing again (3 floating bouncing dots)
      timers.push(setTimeout(() => {
        setIsBotTyping(true);
        setTypingStep(2);
      }, 4400));

      // Step 6: AI finishes typing, Confirmation Card pops up
      timers.push(setTimeout(() => {
        setIsBotTyping(false);
        setVisibleCount(4);
      }, 5800));

      // Step 7: Wait 3.6s to let the user read the full conversation, then loop seamlessly
      loopTimeout = setTimeout(() => {
        runChatLoop();
      }, 9400);
    };

    runChatLoop();

    return () => {
      timers.forEach(clearTimeout);
      if (loopTimeout) clearTimeout(loopTimeout);
    };
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  const clinicFaqs = [
    {
      id: 'clinic-1',
      question: 'Can patients book their own doctor and slot on WhatsApp?',
      answer: 'Yes. The AI front desk knows each doctor\'s OPD schedule, fees, and consultation duration. It answers at any time of day or night, offers available slots, books them into the calendar, and collects an advance via UPI if your clinic requires it.'
    },
    {
      id: 'clinic-2',
      question: 'How do prescriptions and visit summaries work?',
      answer: 'Doctors can generate clean digital prescriptions in seconds with complaints, vitals, diagnosis, medicines, and next visit reminders. Prescriptions are branded with your clinic name and logo, and can be sent to the patient\'s WhatsApp with a single tap.'
    },
    {
      id: 'clinic-3',
      question: 'Can we manage multiple doctors and rooms?',
      answer: 'Yes. iSuite AI – Clinic is built for both single practitioner clinics and multi-speciality polyclinics. Each doctor has their own diary, while the front desk operates a unified OPD board tracking all rooms and queues.'
    },
    {
      id: 'clinic-4',
      question: 'What is the OPD Board (Today Board)?',
      answer: 'The OPD board is your receptionist\'s command center. It categorizes the day\'s patients into Waiting, With the Doctor, Done, or No-Show. Receptionists can register walk-ins in seconds and take pre-consultation vitals.'
    },
    {
      id: 'clinic-5',
      question: 'Is patient medical data secure and compliant in India?',
      answer: 'Yes. All data is encrypted and hosted securely on AWS in Mumbai with automated backups in Hyderabad. Your records remain 100% your clinic\'s private property and are never shared or used for ads.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#06122e] font-sans selection:bg-[#11a297] selection:text-white">
      
      {/* 1. Sticky Clinic Navbar: exact match to isuite.ai/clinics/ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f6f7f9]/90 backdrop-blur-md border-b border-[#040e26]/10 text-[#06122e] shadow-sm'
            : 'bg-[#001845]/90 backdrop-blur-md border-b border-white/10 text-white'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
          {/* Brand + Trade Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center shrink-0 cursor-pointer"
              aria-label="iSuite AI home"
            >
              {isScrolled ? (
                <img
                  src="/logo-wordmark.png"
                  alt="iSuite AI"
                  className="h-[28px] sm:h-[32px] w-auto object-contain"
                />
              ) : (
                <img
                  src="/logo-white-wordmark.png"
                  alt="iSuite AI"
                  className="h-[28px] sm:h-[32px] w-auto object-contain"
                />
              )}
            </button>
            <span className={`text-sm font-semibold pl-2.5 border-l ${
              isScrolled ? 'border-slate-300 text-slate-800' : 'border-white/30 text-white'
            }`}>
              Clinic
            </span>
          </div>

          {/* Nav links */}
          <nav className={`hidden md:flex items-center gap-5 lg:gap-7 text-[11px] font-semibold tracking-[0.1em] uppercase ${
            isScrolled ? 'text-slate-700' : 'text-white/80'
          }`}>
            <a href="#features" className="hover:text-[#11a297] transition-colors">FEATURES</a>
            <a href="#how-it-works" className="hover:text-[#11a297] transition-colors">HOW IT WORKS</a>
            <a href="#pricing" className="hover:text-[#11a297] transition-colors">PRICING</a>
            <a href="#faq" className="hover:text-[#11a297] transition-colors">FAQ</a>
            <button
              onClick={onNavigateHome}
              className="hover:text-[#11a297] transition-colors cursor-pointer"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => onOpenDemo && onOpenDemo('Clinic')}
              className="hover:text-[#11a297] transition-colors cursor-pointer"
            >
              LOGIN
            </button>
          </nav>

          {/* Action Button: Emerald Start Free Trial */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenTrial && onOpenTrial('Clinic')}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#11a297] hover:bg-[#0e8b81] shadow-md shadow-teal-500/20 transition-all cursor-pointer"
            >
              START FREE TRIAL
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#001845] border-b border-white/10 px-4 py-4 space-y-3 text-white text-sm">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-1">FEATURES</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-1">HOW IT WORKS</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1">PRICING</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1">FAQ</a>
            <button onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }} className="block py-1 w-full text-left">ALL PRODUCTS</button>
            <div className="pt-2">
              <button
                onClick={() => { onOpenTrial && onOpenTrial('Clinic'); setMobileMenuOpen(false); }}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#11a297]"
              >
                START FREE TRIAL
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section: exact match to media_1794039629075_bc31a459.jpg */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-gradient-to-b from-[#001845] via-[#001f5c] to-[#00153d] text-white overflow-hidden">
        {/* Ambient Teal/Blue Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#11a297]/15 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Pill: iSuite AI – Clinic */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs sm:text-[13px] font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-5 h-5 rounded-full bg-[#11a297] flex items-center justify-center text-white shrink-0">
              <Stethoscope className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span>iSuite AI – Clinic</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.1] max-w-4xl mx-auto mb-6">
            Clinic management software<br />
            <span className="bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#34d399] bg-clip-text text-transparent">
              with an AI front desk
            </span>
          </h1>

          {/* Subtitle verbatim from screenshot */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10">
            Run your dental, skin, eye or physio clinic on one app. It is clinic software made for Indian clinics: each doctor's diary, the day's OPD board, patients, prescriptions and GST bills. An AI answers patients and books, moves or cancels on WhatsApp at any hour, and reminders and follow-ups go out on their own.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenTrial && onOpenTrial('Clinic')}
              className="bg-white hover:bg-slate-50 text-[#06122e] rounded-full px-8 py-3.5 text-sm font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Start free trial
            </button>
            <button
              onClick={() => onOpenDemo && onOpenDemo('Clinic')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full px-8 py-3.5 text-sm font-semibold transition-all backdrop-blur-sm cursor-pointer"
            >
              Book a demo
            </button>
          </div>

          {/* Trust Checkmarks Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-white/70 mb-14 sm:mb-16">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2dd4bf]" />
              <span>Plans from ₹11,999 a year + GST</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2dd4bf]" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2dd4bf]" />
              <span>Set up with you</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2dd4bf]" />
              <span>Tamil, Tanglish and English</span>
            </div>
          </div>

          {/* Interactive Chat Simulation Window - Fixed size matching actual website */}
          <div className="w-full max-w-[390px] sm:max-w-[400px] mx-auto text-left rounded-3xl bg-white text-[#06122e] shadow-2xl overflow-hidden border border-white/20 h-[490px] sm:h-[510px] flex flex-col">
            {/* Window Head */}
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#11a297] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  RK
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Ramesh K
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>WhatsApp · Smile Dental Care</span>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-50 text-blue-600 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span>AI replying</span>
              </span>
            </div>

            {/* Conversation Bubbles anchored to bottom with fixed height */}
            <div className="flex-1 p-5 space-y-3.5 bg-[#f8fafc] flex flex-col justify-end overflow-hidden">
              {/* Bubble 1: Patient */}
              {visibleCount >= 1 && (
                <div className="flex flex-col items-start animate-chat-pop">
                  <div className="bg-white rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs border border-slate-200/60 max-w-[85%] text-xs sm:text-[13px] text-slate-800">
                    <p>Hi, pallu vali. Saturday morning doctor iruka?</p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 pl-1">9:48 pm</span>
                </div>
              )}

              {/* Bot Typing indicator 1 */}
              {isBotTyping && typingStep === 1 && (
                <div className="flex flex-col items-end animate-chat-pop">
                  <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs px-4 py-2.5 shadow-md">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#2dd4bf] uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ISUITE AI</span>
                    </div>
                    <div className="flex items-center gap-1.5 py-1 px-1">
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] typing-dot-1"></span>
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] typing-dot-2"></span>
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] typing-dot-3"></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bubble 2: AI Reply */}
              {visibleCount >= 2 && (
                <div className="flex flex-col items-end animate-chat-pop">
                  <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs p-4 shadow-md max-w-[85%] text-xs sm:text-[13px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#2dd4bf] uppercase tracking-wider mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ISUITE AI</span>
                    </div>
                    <p className="leading-relaxed">
                      Sorry to hear that, Ramesh. Saturday Dr. Priya 10:30 am, 11:45 am free. Consultation ₹300. Edhu vasathi?
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 pr-1">9:48 pm</span>
                </div>
              )}

              {/* Bubble 3: Patient */}
              {visibleCount >= 3 && (
                <div className="flex flex-col items-start animate-chat-pop">
                  <div className="bg-white rounded-2xl rounded-tl-xs px-4 py-2.5 shadow-xs border border-slate-200/60 text-xs sm:text-[13px] text-slate-800">
                    <p>10:30 ok</p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 pl-1">9:49 pm</span>
                </div>
              )}

              {/* Bot Typing indicator 2 */}
              {isBotTyping && typingStep === 2 && (
                <div className="flex flex-col items-end animate-chat-pop">
                  <div className="bg-[#001d55] text-white rounded-2xl rounded-tr-xs px-4 py-2.5 shadow-md">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#2dd4bf] uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ISUITE AI</span>
                    </div>
                    <div className="flex items-center gap-1.5 py-1 px-1">
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] typing-dot-1"></span>
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] typing-dot-2"></span>
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] typing-dot-3"></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bubble 4: AI Confirmation Card */}
              {visibleCount >= 4 && (
                <div className="flex flex-col items-end animate-chat-pop">
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-2xl rounded-tr-xs p-3.5 shadow-xs max-w-[85%] text-xs sm:text-[13px]">
                    <span className="font-bold text-emerald-800 block mb-0.5">✓ Appointment Booked</span>
                    <p className="text-emerald-900 leading-snug">
                      Dr. Priya · Sat 10:30 am · Smile Dental Care. Calendar reminder sent!
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 pr-1">9:49 pm</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. At a glance Section: exact match to media_1794039654130_18674502.jpg */}
      <section id="at-a-glance" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#11a297] mb-2.5">
              AT A GLANCE
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
              iSuite AI – Clinic at a glance
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
              iSuite AI – Clinic is clinic management software for Indian clinics: each doctor's diary, the day's OPD board, patient records, prescriptions and GST bills in one app, with an AI front desk that answers patients and books on WhatsApp. Plans start from ₹11,999 a year + GST, with a 7-day free trial. Made in Madurai and set up with you.
            </p>
          </div>

          {/* 6-cell Grid Table verbatim from screenshot */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              <div className="p-6 sm:p-7">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] block mb-2">
                  WHAT IT IS
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  Clinic management software with an AI front desk built in, on the web and the Android app
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] block mb-2">
                  MADE FOR
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  Dental, skin, eye, physiotherapy and other clinics that run on appointments, polyclinics with several doctors, and diagnostic labs that send reports
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] block mb-2">
                  PRICE
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  Clinic Basic: ₹11,999 a year + GST<br />
                  Clinic Growth: ₹22,999 a year + GST
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 border-t border-slate-200/80">
              <div className="p-6 sm:p-7">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] block mb-2">
                  FREE TRIAL
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  7 days on either plan. You approve auto-debit at the start, and the first payment comes only when the trial ends.
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] block mb-2">
                  AI
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  On both plans: it answers and books on WhatsApp, Instagram, Messenger and web chat, replies in Tamil, Tanglish or English, and understands voice notes. Each plan includes a year's AI credits.
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] block mb-2">
                  ONLY ON CLINIC GROWTH
                </span>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  Treatment estimates, your own letterhead, expenses, GSTR-1 and Tally exports, email campaigns, Meta lead ads and Studio
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Everything inside Section: exact match to media_1794039672729_47944f62.jpg */}
      <section id="features" className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#11a297] mb-2.5">
              EVERYTHING INSIDE
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
              Everything in one clinic<br />management software
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
              One app for the front desk, the doctors, the billing and the growth of your clinic, on the web and on the Android app — made for dental, skin, eye and physiotherapy clinics, polyclinics and diagnostic labs.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Front desk */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-5">
                <Bot className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                Front desk
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    AI receptionist
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Answers timings, fees and doctors, and books, moves or cancels — on WhatsApp, Instagram, Messenger and web chat.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Appointments
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    A diary for each doctor, each service with its own length and fee, and online booking pages.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    OPD board
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Today board shows waiting, in consultation, done and no-shows, with quick walk-in bookings and pre-consult vitals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Patient records */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-5">
                <FileText className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                Patient records
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Patient records
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Every chat, appointment, bill and note on one page, with tags and your own fields.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Patient files
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Reports, X-rays, photos and voice notes, kept on the patient and sent in the chat.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Prescriptions
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Prescriptions and visit summaries with your clinic's logo and doctor signature, delivered to patient's WhatsApp in 1 tap.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Billing and accounts */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-5">
                <CreditCard className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                Billing and accounts
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    GST bills & payments
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Cash, UPI and card at the desk, instant Razorpay links on WhatsApp, and itemized GST invoices.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Treatments in parts
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    A treatment's fee in instalments, each reminded on WhatsApp and paid at the desk.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Health packages
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Your packages and their prices, which the AI explains, and plans that renew.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Estimates and books
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    On Clinic Growth: treatment estimates, your own letterhead, expenses, and GSTR-1 and Tally exports.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Marketing and team - exact match to screenshot */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-5">
                <Users className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                Marketing and team
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Instagram replies
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Replies to comments on your posts, and a DM to the people who comment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Meta ads and Studio
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    On Clinic Growth: lead ads straight in, which ads bring paying patients, and a marketing agent that drafts new ads for your approval.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-800 mb-1">
                    Your team
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Doctor and front-desk roles, team reports, the Android app and your logo on every prescription and bill.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. How It Works Section: exact match to media_1794042246282_594259de.jpg, media_1794042282940_8462387a.jpg, media_1794042288144_2d310460.jpg */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#11a297] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.1] text-balance">
              From the first message<br />to the next visit
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24 max-w-5xl mx-auto">
            {/* Row 1: APPOINTMENTS - Side by side on md: (768px+) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#11a297] mb-2 block">
                  APPOINTMENTS
                </span>
                <h3 className="text-2xl sm:text-[30px] font-bold tracking-tight text-[#06122e] leading-snug mb-4">
                  Doctor appointment booking, in chat and online
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-5">
                  One diary per doctor, with each service its own length and fee — a 15-minute consultation, a 30-minute cleaning. The AI offers only times that are really free, and books, moves or cancels on WhatsApp. Patients can also book on your online booking page.
                </p>

                <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Buffers between appointments, so the diary never overbooks</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>It never says "booked" unless it is</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>An enquiry becomes a patient in one click, keeping every chat</span>
                  </div>
                </div>
              </div>

              {/* Mockup 1: Doctor appointment diary in soft teal rounded box */}
              <div className="bg-[#eef7f6] p-6 sm:p-8 rounded-[28px] flex items-center justify-center">
                <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                  <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#11a297] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                        DP
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                          Dr. Priya · Dental
                        </h4>
                        <p className="text-[10.5px] text-slate-400 mt-0.5">Saturday, 17 October</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                      4 booked
                    </span>
                  </div>

                  <div className="p-4 space-y-2 text-xs">
                    {/* 9:30 */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[10.5px] w-9">9:30</span>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Anitha S</div>
                          <div className="text-[10px] text-slate-400">Cleaning · 30 min</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        Reminded
                      </span>
                    </div>

                    {/* 10:00 Free */}
                    <div className="flex items-center justify-between p-1.5 rounded-xl border border-dashed border-slate-200 text-slate-400 px-3">
                      <span className="font-mono text-[10.5px] w-9">10:00</span>
                      <span className="text-[10.5px] italic">Free</span>
                      <span></span>
                    </div>

                    {/* 10:30 Booked by AI */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-sky-50/70 border border-sky-300">
                      <div className="flex items-center gap-3">
                        <span className="text-sky-700 font-mono font-semibold text-[10.5px] w-9">10:30</span>
                        <div>
                          <div className="font-bold text-slate-800 text-[11.5px]">Ramesh K</div>
                          <div className="text-[10px] text-slate-500">Consultation · 15 min</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                        <Sparkles className="w-2.5 h-2.5 text-sky-600" />
                        <span>Booked by AI</span>
                      </span>
                    </div>

                    {/* 10:45 */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[10.5px] w-9">10:45</span>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Karthik M</div>
                          <div className="text-[10px] text-slate-400">Root canal · 45 min</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                        Next visit
                      </span>
                    </div>

                    {/* 11:30 */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[10.5px] w-9">11:30</span>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Divya R</div>
                          <div className="text-[10px] text-slate-400">Consultation · 15 min</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        Reminded
                      </span>
                    </div>

                    {/* 11:45 Free */}
                    <div className="flex items-center justify-between p-1.5 rounded-xl border border-dashed border-slate-200 text-slate-400 px-3">
                      <span className="font-mono text-[10.5px] w-9">11:45</span>
                      <span className="text-[10.5px] italic">Free</span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: REMINDERS AND REPORTS - Card on Left, Text on Right on md: */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* Mockup 2: WhatsApp Reminders & PDF reports */}
              <div className="order-2 md:order-1 bg-[#eef7f6] p-6 sm:p-8 rounded-[28px] flex items-center justify-center">
                <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
                    <div className="w-8 h-8 rounded-full bg-[#11a297] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      RK
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">Ramesh K</h4>
                      <div className="flex items-center gap-1.5 text-[10.5px] text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>WhatsApp</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 bg-[#f8fafc] text-xs">
                    {/* Bot Reminder */}
                    <div className="flex flex-col items-start max-w-[92%]">
                      <div className="bg-[#001d55] text-white rounded-2xl rounded-tl-xs p-3 shadow-xs">
                        <div className="text-[9.5px] font-bold text-[#2dd4bf] uppercase tracking-wider mb-1 flex items-center gap-1">
                          <span>🔔</span> REMINDER
                        </div>
                        <p className="text-[11.5px] leading-relaxed text-white/95">
                          Hi Ramesh, a reminder of your appointment with Dr. Priya tomorrow, Sat 17 Oct at 10:30 am. Reply here to change it.
                        </p>
                      </div>
                    </div>

                    {/* Patient Reply */}
                    <div className="flex flex-col items-start">
                      <div className="bg-white rounded-2xl rounded-tl-xs px-3.5 py-1.5 shadow-xs border border-slate-200/70 text-slate-800 text-[11.5px]">
                        Thanks, I'll be there
                      </div>
                    </div>

                    {/* Report Card */}
                    <div className="flex flex-col items-start max-w-[92%]">
                      <div className="bg-[#001d55] text-white rounded-2xl rounded-tl-xs p-3 shadow-xs w-full">
                        <div className="text-[9.5px] font-bold text-[#2dd4bf] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <span>📄</span> REPORT
                        </div>
                        
                        <div className="bg-white/10 rounded-xl p-2 flex items-center gap-2.5 mb-1.5 border border-white/10">
                          <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-300 font-bold text-[9px] flex items-center justify-center border border-rose-400/30">
                            PDF
                          </div>
                          <div>
                            <div className="font-semibold text-white text-[11.5px]">X-ray report · Ramesh K</div>
                            <div className="text-[10px] text-white/60">1 page</div>
                          </div>
                        </div>

                        <p className="text-[11px] text-white/90">
                          Your report from Smile Dental Care is ready.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="pt-0.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                        <span>✓</span> Report sent · kept on Ramesh's page
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#11a297] mb-2 block">
                  REMINDERS AND REPORTS
                </span>
                <h3 className="text-2xl sm:text-[30px] font-bold tracking-tight text-[#06122e] leading-snug mb-4">
                  Automatic appointment reminders and reports
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-5">
                  A reminder goes before each appointment. When a visit is done, the front desk notes the next one, and a reminder goes three days before it. You send a report from the patient's page the day it is ready.
                </p>

                <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Reports travel in an approved WhatsApp template, even a week after the patient last wrote</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Every report stays on the patient's page</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Patients reply to the reminder to move their appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: PRESCRIPTIONS - Text on Left, Card on Right on md: */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#11a297] mb-2 block">
                  PRESCRIPTIONS
                </span>
                <h3 className="text-2xl sm:text-[30px] font-bold tracking-tight text-[#06122e] leading-snug mb-4">
                  Digital prescriptions, sent on WhatsApp
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-5">
                  The front desk takes the vitals; the doctor writes the medicines, tests, advice and the next visit. It prints with your clinic's name, logo and the doctor's signature — or on your own letterhead with Clinic Growth — and goes to the patient on WhatsApp. The next visit is saved for its reminder.
                </p>

                <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Visit summaries the same way</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Seen only by doctors and those you allow</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>The AI never reads what a prescription says</span>
                  </div>
                </div>
              </div>

              {/* Mockup 3: Prescription Card verbatim from screenshot */}
              <div className="bg-[#eef7f6] p-6 sm:p-8 rounded-[28px] flex items-center justify-center">
                <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                  <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#11a297] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                        SD
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">Smile Dental Care</h4>
                        <p className="text-[10.5px] text-slate-400">Dr. Priya Raman, BDS · Anna Nagar, Madurai</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium text-slate-700">Ramesh K · 34 y</span>
                    <span className="text-[11px] text-slate-400 font-mono">17 Oct 2026</span>
                  </div>

                  <div className="p-5 space-y-3.5 text-xs">
                    <div className="text-emerald-700 font-serif font-bold text-lg leading-none">℞</div>

                    <div>
                      <div className="font-bold text-slate-800 text-[12px]">1. Paracetamol 650 mg</div>
                      <div className="text-[10.5px] text-slate-500">1-0-1 · after food · 3 days</div>
                    </div>

                    <div>
                      <div className="font-bold text-slate-800 text-[12px]">2. Chlorhexidine mouthwash</div>
                      <div className="text-[10.5px] text-slate-500">Twice a day · 7 days</div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 flex gap-2">
                      <span className="font-semibold text-slate-700 shrink-0">Advice</span>
                      <span>Soft food for a day; warm salt-water rinse</span>
                    </div>

                    <div className="text-[11px] text-slate-600 flex gap-2">
                      <span className="font-semibold text-slate-700 shrink-0">Next visit</span>
                      <span>Sat, 24 Oct · review</span>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      <span>✓</span> Sent on WhatsApp
                    </span>
                    <span className="text-[10.5px] text-slate-400 italic">Signed by Dr. Priya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: FOLLOW-UPS - Card on Left, Text on Right on md: */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* Mockup 4: Follow-ups & Automations verbatim from screenshot */}
              <div className="order-2 md:order-1 bg-[#eef7f6] p-6 sm:p-8 rounded-[28px] flex items-center justify-center">
                <div className="w-full max-w-[390px] bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#11a297] flex items-center justify-center">
                        <ToggleRight className="w-4 h-4 text-[#11a297]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">Sent by themselves</h4>
                        <p className="text-[10px] text-slate-400">Today</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>On</span>
                    </span>
                  </div>

                  <div className="p-4 space-y-2.5 text-xs">
                    {/* Item 1 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#11a297] flex items-center justify-center shrink-0">
                          <Star className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Thank you, and a review request</div>
                          <div className="text-[10px] text-slate-400">Anitha S · after her cleaning</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        Sent
                      </span>
                    </div>

                    {/* Item 2 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Sorry we missed you</div>
                          <div className="text-[10px] text-slate-400">Vignesh P · missed 4:00 pm</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        Sent
                      </span>
                    </div>

                    {/* Item 3 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#11a297] flex items-center justify-center shrink-0">
                          <Gift className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Happy birthday</div>
                          <div className="text-[10px] text-slate-400">Meena S · from Smile Dental Care</div>
                        </div>
                      </div>
                      <span className="text-[10.5px] font-mono text-slate-400">
                        9:00 am
                      </span>
                    </div>

                    {/* Item 4 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Bell className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-[11.5px]">Your next visit is due</div>
                          <div className="text-[10px] text-slate-400">Karthik M · root canal, 3 days before</div>
                        </div>
                      </div>
                      <span className="text-[10.5px] font-mono text-slate-400">
                        5:00 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#11a297] mb-2 block">
                  FOLLOW-UPS
                </span>
                <h3 className="text-2xl sm:text-[30px] font-bold tracking-tight text-[#06122e] leading-snug mb-4">
                  Patient follow-ups and review requests
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-5">
                  A thank-you and a review request after each visit, a kind message when someone misses an appointment, and a birthday greeting every year — each on its own, once you switch it on.
                </p>

                <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Follow-ups due and overdue on one list</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Broadcasts to patients who opted in</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Doctor and front-desk roles, so each sees what they should</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Four numbers every morning */}
          <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-slate-200/60 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#06122e] mb-3">
              Four numbers every morning
            </h2>
            <p className="text-xs sm:text-[14.5px] text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
              The dashboard opens on what a clinic owner checks first, and each number opens its list.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto text-left mb-16">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-4">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-500 font-medium mb-1">today's appointments</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">18</div>
                <div className="text-[11px] text-slate-400">6 still to come</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-4">
                  <UserX className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-500 font-medium mb-1">No-shows this week</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">2</div>
                <div className="text-[11px] text-slate-400">each sent a kind message</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-4">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-500 font-medium mb-1">Follow-ups due</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">7</div>
                <div className="text-[11px] text-slate-400">2 overdue</div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#11a297] mb-4">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-500 font-medium mb-1">New patients this month</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">41</div>
                <div className="text-[11px] text-slate-400">from WhatsApp, Instagram and walk-ins</div>
              </div>
            </div>

            {/* Section: Made for Indian Clinics - It speaks the way a clinic does */}
            <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto">
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#11a297] block mb-3">
                MADE FOR INDIAN CLINICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#06122e] mb-8 sm:mb-12">
                It speaks the way a clinic does
              </h2>

              {/* Comparison Table matching screenshot */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden text-left">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-200/80 bg-slate-50/50">
                  <div className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    TODAY
                  </div>
                  <div className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#11a297] border-t md:border-t-0 md:border-l border-slate-200/80 bg-teal-50/30">
                    WITH ISUITE AI – CLINIC
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-slate-200/80 text-xs sm:text-[13px]">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-600">
                      <span className="text-slate-400 font-bold shrink-0">✕</span>
                      <span>WhatsApp messages wait until the desk is free</span>
                    </div>
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-800 md:border-l border-slate-200/80 bg-teal-50/10">
                      <span className="text-[#11a297] font-bold shrink-0">✓</span>
                      <span>Timings, fees and bookings answered in seconds</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-600">
                      <span className="text-slate-400 font-bold shrink-0">✕</span>
                      <span>Reminder calls fill the morning</span>
                    </div>
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-800 md:border-l border-slate-200/80 bg-teal-50/10">
                      <span className="text-[#11a297] font-bold shrink-0">✓</span>
                      <span>Reminders go out on their own</span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-600">
                      <span className="text-slate-400 font-bold shrink-0">✕</span>
                      <span>Patients who were due back are forgotten</span>
                    </div>
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-800 md:border-l border-slate-200/80 bg-teal-50/10">
                      <span className="text-[#11a297] font-bold shrink-0">✓</span>
                      <span>The next visit is saved, and the patient is reminded</span>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-600">
                      <span className="text-slate-400 font-bold shrink-0">✕</span>
                      <span>Reports collected in person, or lost in a personal phone</span>
                    </div>
                    <div className="px-6 py-4 flex items-center gap-3 text-slate-800 md:border-l border-slate-200/80 bg-teal-50/10">
                      <span className="text-[#11a297] font-bold shrink-0">✓</span>
                      <span>Reports sent from the patient's own page, and kept there</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pills row matching screenshot verbatim in 2 clean lines */}
              <div className="mt-8 space-y-2.5 max-w-4xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs">
                    <Users className="w-3.5 h-3.5 text-[#11a297]" />
                    <span>Patients, enquiries and appointments — clinic words on every screen</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs">
                    <Shield className="w-3.5 h-3.5 text-[#11a297]" />
                    <span>Doctor and front-desk roles</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                    <span>Tamil and Tanglish</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs">
                    <Smartphone className="w-3.5 h-3.5 text-sky-500" />
                    <span>The whole app on Android</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs">
                    <CreditCard className="w-3.5 h-3.5 text-sky-500" />
                    <span>Bills paid by cash, UPI or card</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Careful with patients - exact match to screenshot */}
            <div className="mt-20 sm:mt-28 text-center max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#06122e] mb-10 sm:mb-14">
                Careful with patients
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
                {/* Card 1: Where it fits */}
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100/70 flex items-center justify-center text-[#11a297] mb-6">
                    <Layers className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-3">
                    Where it fits
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Not a full EMR. iSuite AI – Clinic keeps appointments, patient details and files, vitals, prescriptions, visit summaries and bills. Dental charting, lab result entry, pharmacy stock and ABDM health records are not in it, so a clinic that needs those keeps its EMR or lab software alongside.
                  </p>
                </div>

                {/* Card 2: What the AI is set never to do */}
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100/70 flex items-center justify-center text-[#11a297] mb-6">
                    <Shield className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-4">
                    What the AI is set never to do
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-[13.5px] text-slate-600 font-normal">
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0 text-sm">✕</span>
                      <span>Diagnose, or suggest a medicine or a dose</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0 text-sm">✕</span>
                      <span>Explain a report, or read a prescription</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0 text-sm">✕</span>
                      <span>Talk about other patients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0 text-sm">✕</span>
                      <span>Hold on to an emergency — it gives the clinic's number and hands over at once</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Pricing Section */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#11a297] mb-2.5">
              PRICING
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
              Simple, transparent clinic plans
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#475569] max-w-[700px] mx-auto leading-relaxed font-normal">
              Every plan includes a 7-day free trial. Setup is handled 1-on-1 with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Tier 1: Clinic Basic */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#11a297] block mb-1">
                  STARTER
                </span>
                <h3 className="text-2xl font-bold text-[#06122e] mb-2">Clinic Basic</h3>
                <p className="text-xs sm:text-[13px] text-slate-500 mb-6 font-normal">
                  For single-doctor clinics and dental/physio practices getting started with automated front desk.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#06122e]">₹11,999</span>
                    <span className="text-xs text-slate-500 font-normal">/ year + GST</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium mt-1 block">Includes 7-day free trial</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 mb-8">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>2 team users (Doctor & Front desk)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>AI receptionist on WhatsApp, Instagram & web chat</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Tamil, Tanglish & English voice note & text understanding</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>OPD today board, walk-in register & appointments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Prescriptions & visit summaries with your clinic logo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Itemized GST bills & Razorpay payment links</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>₹1,000 AI credits / year included</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenTrial && onOpenTrial('Clinic Basic')}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#11a297] hover:bg-[#0e8b81] shadow-md transition-all cursor-pointer"
              >
                Start 7-Day Free Trial
              </button>
            </div>

            {/* Tier 2: Clinic Growth */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#11a297] shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#11a297] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                MOST POPULAR
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#11a297] block mb-1">
                  POLYCLINIC & GROWTH
                </span>
                <h3 className="text-2xl font-bold text-[#06122e] mb-2">Clinic Growth</h3>
                <p className="text-xs sm:text-[13px] text-slate-500 mb-6 font-normal">
                  For busy practices and polyclinics with multiple doctors, letterheads, and accounting exports.
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#06122e]">₹22,999</span>
                    <span className="text-xs text-slate-500 font-normal">/ year + GST</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium mt-1 block">Includes 7-day free trial</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 mb-8">
                  <li className="flex items-start gap-2.5 font-semibold text-[#06122e]">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Everything in Clinic Basic, plus:</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>4 team users included</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Custom branded doctor letterhead for prescriptions & bills</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Treatment estimates & installment payment tracker</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Expense tracking, GSTR-1 and Tally data exports</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>Meta Lead Ads sync, Studio marketing assistant & broadcasts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#11a297] shrink-0 mt-0.5" />
                    <span>₹2,000 AI credits / year included</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenTrial && onOpenTrial('Clinic Growth')}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#001d55] hover:bg-[#002773] shadow-md transition-all cursor-pointer"
              >
                Start 7-Day Free Trial
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#11a297] mb-2.5">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance">
              Questions about iSuite AI – Clinic
            </h2>
          </div>

          <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {clinicFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div key={faq.id}>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#06122e] group-hover:text-[#11a297] transition-colors">
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

      {/* 7. Footer: exact match to isuite.ai */}
      <footer className="bg-[#f6f7f9] text-[#040e26] text-xs sm:text-sm border-t border-slate-200/80 pt-16 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 sm:mb-12">
            <button onClick={onNavigateHome} className="inline-block mb-3.5 cursor-pointer text-left">
              <img
                src="/logo-wordmark.png"
                alt="iSuite AI"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </button>
            <p className="text-xs sm:text-[13px] text-slate-500 max-w-md leading-relaxed font-normal">
              Run your whole business on one app, made for your industry — one platform, one product for each trade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pb-12">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                PRODUCTS
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li className="font-semibold text-[#11a297]">iSuite AI – Clinic (Current)</li>
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297] text-left">iSuite AI – Coaching Institute</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297] text-left">iSuite AI – Real Estate</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297] text-left">iSuite AI – Gym & Fitness Studio</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297] text-left">iSuite AI – Salon & Spa</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297] text-left">iSuite AI – Field Service & AMC</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297] text-left">iSuite AI – Turf</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                TALK TO US
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li><a href="https://wa.me/918220947112" target="_blank" rel="noopener noreferrer" className="hover:text-[#11a297]">WhatsApp</a></li>
                <li><a href="tel:+918220947112" className="hover:text-[#11a297]">+91 82209 47112</a></li>
                <li><a href="mailto:info@mntfuture.com" className="hover:text-[#11a297]">info@mntfuture.com</a></li>
                <li className="text-slate-500">Madurai, Tamil Nadu, India</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3.5">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                <li><button onClick={onNavigateHome} className="hover:text-[#11a297]">About</button></li>
                <li><a href="#footer" className="hover:text-[#11a297]">Contact</a></li>
                <li><a href="https://mntfuture.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#11a297]">MnT Future</a></li>
              </ul>
            </div>
          </div>

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

    </div>
  );
}


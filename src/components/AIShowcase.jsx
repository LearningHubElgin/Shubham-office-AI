import React, { useState } from 'react';
import { 
  Languages,
  MessageCircle, 
  Users, 
  Ticket,
  Workflow, 
  Bell,
  Sparkles
} from 'lucide-react';

const languageSnippets = [
  {
    id: 'tanglish',
    label: 'TANGLISH',
    question: 'Saturday appointment kidaikuma?',
    reply: 'Iruku! Saturday 10:30 am free. Book pannatuma?'
  },
  {
    id: 'tamil',
    label: 'தமிழ்',
    question: 'நாளைக்கு டெமோ வகுப்பு இருக்கா?',
    reply: 'உள்ளது! சனிக்கிழமை காலை 10:30 மணி காலியாக உள்ளது. பதிவு செய்யட்டுமா?'
  },
  {
    id: 'english',
    label: 'ENGLISH',
    question: 'Is the 2BHK ready to move?',
    reply: 'Yes! 2 projects ready to move in Anna Nagar West. Shall I book a site visit?'
  },
  {
    id: 'hindi',
    label: 'हिंदी',
    question: 'क्या कल ट्रायल मिल सकता है?',
    reply: 'Iruku! Saturday 10:30 am free. Book pannatuma?'
  }
];

export default function AIShowcase() {
  const [selectedLang, setSelectedLang] = useState('tanglish');
  const activeSnippet = languageSnippets.find((s) => s.id === selectedLang) || languageSnippets[0];

  return (
    <section id="ai" className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: exact match to isuite.ai */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 head reveal">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-2.5">
            AI BUILT IN
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
            An AI that works with your team
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
            It answers, books, reminds and follows up — inside your rules, in your customer's language — and hands over the moment a person is needed. It comes with every plan except Salon Basic and Field Service Basic.
          </p>
        </div>

        {/* Top Full-Width Dark Gradient Hero Card: exact match to isuite.ai */}
        <div className="rounded-3xl sm:rounded-[32px] p-6 sm:p-10 text-white shadow-xl bg-gradient-to-br from-[#001f5c] via-[#002773] to-[#001645] border border-blue-900/60 relative overflow-hidden mb-8 max-w-5xl mx-auto reveal">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          {/* Card Head */}
          <div className="relative z-10 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38bdf8] mb-4 shadow-xs">
              <Languages className="w-5 h-5 stroke-[2]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
              An AI that answers in their language
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-3xl leading-relaxed font-normal">
              Tamil, Tanglish, English, Hindi and more — It replies in the language the customer writes in, listens to voice notes and looks at the photos they send. It answers from your own prices and rules, at 10 pm too.
            </p>
          </div>

          {/* 3-Column Language Cards Layout matching isuite.ai */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 1. Tanglish */}
            <button
              onClick={() => setSelectedLang('tanglish')}
              className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                selectedLang === 'tanglish'
                  ? 'bg-white/15 border-white/30 shadow-md ring-1 ring-white/40'
                  : 'bg-white/10 hover:bg-white/15 border border-white/10'
              }`}
            >
              <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                TANGLISH
              </span>
              <p className="text-xs sm:text-[13px] text-white font-medium leading-snug">
                Saturday appointment kidaikuma?
              </p>
            </button>

            {/* 2. Tamil */}
            <button
              onClick={() => setSelectedLang('tamil')}
              className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                selectedLang === 'tamil'
                  ? 'bg-white/15 border-white/30 shadow-md ring-1 ring-white/40'
                  : 'bg-white/10 hover:bg-white/15 border border-white/10'
              }`}
            >
              <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                தமிழ்
              </span>
              <p className="text-xs sm:text-[13px] text-white font-medium leading-snug">
                நாளைக்கு டெமோ வகுப்பு இருக்கா?
              </p>
            </button>

            {/* 3. English */}
            <button
              onClick={() => setSelectedLang('english')}
              className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                selectedLang === 'english'
                  ? 'bg-white/15 border-white/30 shadow-md ring-1 ring-white/40'
                  : 'bg-white/10 hover:bg-white/15 border border-white/10'
              }`}
            >
              <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                ENGLISH
              </span>
              <p className="text-xs sm:text-[13px] text-white font-medium leading-snug">
                Is the 2BHK ready to move?
              </p>
            </button>

            {/* 4. Hindi (Col 1 of Row 2) */}
            <button
              onClick={() => setSelectedLang('hindi')}
              className={`sm:col-span-1 p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                selectedLang === 'hindi'
                  ? 'bg-white/15 border-white/30 shadow-md ring-1 ring-white/40'
                  : 'bg-white/10 hover:bg-white/15 border border-white/10'
              }`}
            >
              <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                हिंदी
              </span>
              <p className="text-xs sm:text-[13px] text-white font-medium leading-snug">
                क्या कल ट्रायल मिल सकता है?
              </p>
            </button>

            {/* 5. KARTTIK AI (Cols 2-3 of Row 2) */}
            <div className="sm:col-span-2 bg-white rounded-xl p-3.5 sm:p-4 text-[#06122e] shadow-md flex flex-col justify-between">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-0.5">
                KARTTIK AI
              </span>
              <p className="text-xs sm:text-[13px] text-[#06122e] font-medium leading-snug">
                {activeSnippet.reply}
              </p>
            </div>
          </div>

        </div>

        {/* 4 Cards Grid with Rich Visual Simulation Widgets: exact match to isuite.ai */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto bento reveal stagger">
          
          {/* Card 1: Answers on every channel */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#1663ff] border border-blue-100/60 flex items-center justify-center mb-5">
                <MessageCircle className="w-5 h-5 stroke-[1.8]" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-2">
                Answers on every channel
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-6">
                WhatsApp, Instagram, Messenger and your website's chat in one inbox; on plans with Meta lead ads, leads from your ads arrive by themselves.
              </p>

              {/* Visual Channels List Widget: 5 individual capsules matching isuite.ai */}
              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="bg-[#f8fafc] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-normal text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>WhatsApp</span>
                  </div>
                  <span className="font-normal text-slate-500">24</span>
                </div>
                <div className="bg-[#f8fafc] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-normal text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    <span>Instagram</span>
                  </div>
                  <span className="font-normal text-slate-500">9</span>
                </div>
                <div className="bg-[#f8fafc] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-normal text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>Messenger</span>
                  </div>
                  <span className="font-normal text-slate-500">4</span>
                </div>
                <div className="bg-[#f8fafc] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-normal text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Website chat</span>
                  </div>
                  <span className="font-normal text-slate-500">6</span>
                </div>
                <div className="bg-[#f8fafc] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 font-normal text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Meta lead ads</span>
                  </div>
                  <span className="font-normal text-slate-500">11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Hands over with a brief */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#1663ff] border border-blue-100/60 flex items-center justify-center mb-5">
                <Users className="w-5 h-5 stroke-[1.8]" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-2">
                Hands over with a brief
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-6">
                When a person is needed, your team gets the chat with what was asked, done and promised — not just a number.
              </p>

              {/* Visual Handover Brief Widget: soft background container with hairline dividers */}
              <div className="bg-[#f8fafc] rounded-2xl p-4 divide-y divide-slate-200/60 text-xs sm:text-[13px]">
                <div className="py-2.5 flex items-start gap-4 first:pt-0">
                  <span className="w-12 text-slate-400 font-normal shrink-0">Wants</span>
                  <span className="text-slate-800 font-normal">Ready-to-move 2BHK, under ₹80L</span>
                </div>
                <div className="py-2.5 flex items-start gap-4">
                  <span className="w-12 text-slate-400 font-normal shrink-0">Done</span>
                  <span className="text-slate-800 font-normal">Site visit booked, Sat 11 am</span>
                </div>
                <div className="py-2.5 flex items-start gap-4 last:pb-0">
                  <span className="w-12 text-slate-400 font-normal shrink-0">Next</span>
                  <span className="text-slate-800 font-normal">Call before Saturday to confirm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Checks with you first */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#1663ff] border border-blue-100/60 flex items-center justify-center mb-5">
                <Ticket className="w-5 h-5 stroke-[1.8]" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-2">
                Checks with you first
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-6">
                A discount or a special request? With Manager over WhatsApp, it asks you on your own WhatsApp, and does what you say.
              </p>

              {/* Visual Manager Approval Simulation Widget: light green outer box + exact bubbles */}
              <div className="bg-[#eef8f2] rounded-2xl p-4 sm:p-5 space-y-2 text-xs sm:text-[13px]">
                {/* Incoming question to manager */}
                <div className="bg-white rounded-xl px-4 py-2.5 text-slate-700 shadow-2xs w-fit">
                  <p>Kavitha asks ₹1L off Flat B-204. Allow?</p>
                </div>

                {/* Manager reply: exactly matching isuite.ai */}
                <div className="bg-[#dcfce7] rounded-xl px-4 py-2.5 w-full text-slate-800 shadow-2xs">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">YOU</span>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-900">Give ₹50,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Reminders that go by themselves */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#1663ff] border border-blue-100/60 flex items-center justify-center mb-5">
                <Workflow className="w-5 h-5 stroke-[1.8]" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#06122e] tracking-tight mb-2">
                Reminders that go by themselves
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-6">
                Before every appointment, fee and renewal, and follow-ups until the customer replies.
              </p>

              {/* Visual Timeline Widget matching isuite.ai */}
              <div className="space-y-1.5 text-xs sm:text-[13px]">
                {/* Capsule 1: Reminder 3 days before */}
                <div className="bg-white border border-slate-200/80 rounded-xl px-4 py-2.5 flex items-center gap-3 text-slate-700 shadow-2xs">
                  <Bell className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Reminder · 3 days before</span>
                </div>

                {/* Vertical timeline connector */}
                <div className="flex items-center gap-3 pl-6 py-0.5">
                  <div className="w-[1px] h-4 bg-slate-300"></div>
                  <span className="text-[11px] text-slate-400 font-normal">no reply in a day</span>
                </div>

                {/* Capsule 2: AI follow-up, in their language */}
                <div className="bg-white border border-slate-200/80 rounded-xl px-4 py-2.5 flex items-center gap-3 text-slate-700 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>AI follow-up, in their language</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

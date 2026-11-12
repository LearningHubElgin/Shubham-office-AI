import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  Trophy, 
  Check, 
  Calendar,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { industries } from '../data/industryData';

const iconMap = {
  clinic: Stethoscope,
  coaching: GraduationCap,
  'real-estate': Building2,
  gym: Dumbbell,
  salon: Scissors,
  'field-service': Wrench,
  turf: Trophy,
};

export default function IndustryPreview({ activeIndustryId, onSelectIndustry, onOpenTrial }) {
  const currentIndustry = industries.find((i) => i.id === activeIndustryId) || industries[0];
  const CurrentIcon = iconMap[currentIndustry.id] || Stethoscope;

  // Animation sequence states for the live conversation
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  // Trigger live typing simulation whenever industry tab changes or is clicked
  useEffect(() => {
    setVisibleCount(0);
    setIsBotTyping(false);
    setShowBadge(false);
    setHasEnded(false);

    const timers = [];

    // Step 1: User message 1 pops up
    timers.push(setTimeout(() => {
      setVisibleCount(1);
    }, 250));

    // Step 2: Bot starts typing (3 bouncing dots)
    timers.push(setTimeout(() => {
      setIsBotTyping(true);
    }, 900));

    // Step 3: Bot finishes typing, Bot message 1 pops up
    timers.push(setTimeout(() => {
      setIsBotTyping(false);
      setVisibleCount(2);
    }, 2200));

    // Step 4: User message 2 pops up
    timers.push(setTimeout(() => {
      setVisibleCount(3);
    }, 3100));

    // Step 5: Bot starts typing again (3 bouncing dots)
    timers.push(setTimeout(() => {
      setIsBotTyping(true);
    }, 3700));

    // Step 6: Bot finishes typing, Bot message 2 pops up
    timers.push(setTimeout(() => {
      setIsBotTyping(false);
      setVisibleCount(4);
    }, 4900));

    // Step 7: Calendar confirmation badge pops up at the bottom
    timers.push(setTimeout(() => {
      setShowBadge(true);
      setHasEnded(true);
    }, 5500));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [activeIndustryId, animationTrigger]);

  const handleTabClick = (indId) => {
    onSelectIndustry(indId);
    setAnimationTrigger((prev) => prev + 1);
  };

  const dialogues = currentIndustry.chatSimulation.dialogues.tanglish;

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: exact match to isuite.ai */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 head reveal">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-3">
            SEVEN PRODUCTS, ONE PLATFORM
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance">
            Built around the way<br />
            your business runs
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-[#475569] max-w-[680px] mx-auto leading-relaxed font-normal">
            Each Karttik AI runs its trade end to end — from the first enquiry to the bill, the payment and the next visit, instalment or renewal.
          </p>
        </div>

        {/* Tab Switcher: 2 wrapping lines with colorful circular icons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 sm:p-2.5 rounded-[32px] bg-white border border-slate-200/80 shadow-xs max-w-4xl mx-auto mb-10 sm:mb-12 reveal">
          {industries.map((ind) => {
            const isSelected = ind.id === currentIndustry.id;
            const IconComponent = iconMap[ind.id] || Stethoscope;

            return (
              <button
                key={ind.id}
                onClick={() => handleTabClick(ind.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#06122e] text-white shadow-sm'
                    : 'text-[#334155] hover:text-[#06122e] hover:bg-slate-50'
                }`}
              >
                {/* Circular Icon Badge */}
                <span 
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 text-white shadow-xs"
                  style={{
                    backgroundColor: ind.accColor,
                  }}
                >
                  <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </span>
                <span>{ind.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Split Layout Card with dynamic ambient tint matching isuite.ai */}
        <div 
          id="preview-section"
          className="rounded-[32px] sm:rounded-[36px] border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto relative overflow-hidden bg-white transition-all duration-300 showcase reveal"
        >
          {/* Subtle Ambient Color Glow at the top right of the card */}
          <div 
            className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full blur-3xl opacity-25 pointer-events-none -mr-24 -mt-24 transition-all duration-500" 
            style={{ backgroundColor: currentIndustry.accBright || '#5eead4' }}
          />

          {/* Left Column (col-span-6 on md/lg) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-between z-10">
            <div>
              {/* Product Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#06122e] bg-white border border-slate-200/80 shadow-xs mb-4 w-fit">
                <span 
                  className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: currentIndustry.accColor }}
                >
                  <CurrentIcon className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span>Karttik AI – {currentIndustry.name}</span>
              </div>

              {/* Title with wrapping matching isuite.ai */}
              <h3 className="text-2xl sm:text-[32px] md:text-[34px] lg:text-[38px] font-bold tracking-[-0.03em] text-[#06122e] leading-[1.12] mb-4">
                {currentIndustry.id === 'clinic' ? (
                  <>Run your clinic,<br />from the first<br />message to<br />the next visit</>
                ) : currentIndustry.id === 'coaching' ? (
                  <>Run your institute,<br />from admission to<br />the last instalment</>
                ) : currentIndustry.id === 'real-estate' ? (
                  <>Run your properties,<br />from the first lead<br />to the final key</>
                ) : currentIndustry.id === 'gym' ? (
                  <>Run your gym,<br />from trial pass<br />to renewal</>
                ) : currentIndustry.id === 'salon' ? (
                  <>Run your salon,<br />from the first booking<br />to the next visit</>
                ) : currentIndustry.id === 'field-service' ? (
                  <>Run your service,<br />from complaint<br />to AMC renewal</>
                ) : (
                  <>Run your turf,<br />from slot booking<br />to tournament</>
                )}
              </h3>

              {/* Tagline */}
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed mb-6 font-normal max-w-md">
                {currentIndustry.tagline}
              </p>

              {/* Clean Checkmark List */}
              <ul className="space-y-3 mb-8">
                {currentIndustry.readyDayOne.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#11a297] stroke-[2.5]" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions & Price - Stacked vertically */}
            <div className="flex flex-col items-start gap-2">
              <button
                onClick={() => {
                  if (currentIndustry.id === 'clinic' || currentIndustry.id === 'coaching' || currentIndustry.id === 'real-estate') {
                    onSelectIndustry(currentIndustry.id);
                  } else {
                    onOpenTrial(currentIndustry.name);
                  }
                }}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#06122e] hover:bg-black transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Explore Karttik AI – {currentIndustry.shortName}
              </button>

              <span className="text-xs text-slate-500 font-normal">
                {currentIndustry.startingPrice}
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Animated WhatsApp Card */}
          <div className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-end z-10">
            <div className="w-full max-w-[390px] min-h-[460px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-4 sm:p-5 flex flex-col justify-between group">
              
              {/* WhatsApp Panel Head */}
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-xs shrink-0"
                    style={{ backgroundColor: '#10b981' }}
                  >
                    {currentIndustry.chatSimulation.clientAvatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0f172a] leading-tight">
                      {currentIndustry.chatSimulation.clientName}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {currentIndustry.chatSimulation.channelText}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-medium transition-all">
                    <span className={`w-1.5 h-1.5 rounded-full bg-blue-500 ${isBotTyping ? 'animate-ping' : 'animate-pulse'}`}></span>
                    <span>{isBotTyping ? 'AI typing...' : hasEnded ? 'AI replied' : 'AI replying'}</span>
                  </div>

                  {/* Replay Button */}
                  <button
                    onClick={() => setAnimationTrigger((prev) => prev + 1)}
                    title="Replay live conversation"
                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chat Message Stream - animated live */}
              <div className="space-y-3.5 min-h-[350px] flex flex-col justify-start">
                
                {/* Message 1 (Incoming User - Light Gray Bubble) */}
                {visibleCount >= 1 && (
                  <div className="flex flex-col items-start animate-chat-pop">
                    <div className="bg-[#f1f5f9] text-[#0f172a] rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] text-xs sm:text-[13px] leading-relaxed shadow-xs">
                      <p>{dialogues[0]?.text}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pl-1">
                      {dialogues[0]?.time}
                    </span>
                  </div>
                )}

                {/* Bot Typing Indicator 1 (3 floating bouncing dots) */}
                {isBotTyping && visibleCount === 1 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#06122e] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[90%] shadow-md flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#38bdf8] mr-1">
                        <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                        <span>Karttik AI</span>
                      </div>
                      <div className="flex items-center gap-1.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] typing-dot-1"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] typing-dot-2"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] typing-dot-3"></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Message 2 (Outgoing AI - Dark Navy Bubble!) */}
                {visibleCount >= 2 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#06122e] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[90%] text-xs sm:text-[13px] leading-relaxed shadow-md">
                      <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#38bdf8] mb-1">
                        <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                        <span>Karttik AI</span>
                      </div>
                      <p className="text-white/95 leading-relaxed">
                        {dialogues[1]?.text}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pr-1">
                      {dialogues[1]?.time}
                    </span>
                  </div>
                )}

                {/* Message 3 (Incoming User - Light Gray Bubble) */}
                {visibleCount >= 3 && (
                  <div className="flex flex-col items-start animate-chat-pop">
                    <div className="bg-[#f1f5f9] text-[#0f172a] rounded-2xl rounded-tl-sm px-3.5 py-2 max-w-[85%] text-xs sm:text-[13px] leading-relaxed shadow-xs">
                      <p>{dialogues[2]?.text}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pl-1">
                      {dialogues[2]?.time}
                    </span>
                  </div>
                )}

                {/* Bot Typing Indicator 2 (3 floating bouncing dots) */}
                {isBotTyping && visibleCount === 3 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#06122e] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[90%] shadow-md flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#38bdf8] mr-1">
                        <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                        <span>Karttik AI</span>
                      </div>
                      <div className="flex items-center gap-1.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] typing-dot-1"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] typing-dot-2"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] typing-dot-3"></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Message 4 (Outgoing AI - Dark Navy Bubble!) */}
                {visibleCount >= 4 && (
                  <div className="flex flex-col items-end animate-chat-pop">
                    <div className="bg-[#06122e] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[90%] text-xs sm:text-[13px] leading-relaxed shadow-md">
                      <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#38bdf8] mb-1">
                        <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                        <span>Karttik AI</span>
                      </div>
                      <p className="text-white/95 leading-relaxed">
                        {dialogues[3]?.text}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 pr-1">
                      {dialogues[3]?.time}
                    </span>
                  </div>
                )}

                {/* Calendar Confirmation Ribbon */}
                {showBadge && (
                  <div className="pt-2 animate-chat-pop">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ecfdf5] border border-emerald-200/80 text-[#047857] text-[11.5px] font-medium shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                      <span>{currentIndustry.chatSimulation.calendarBadge}</span>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

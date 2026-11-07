import React from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  Trophy, 
  Sparkles, 
  ArrowRight,
  Check,
  Truck,
  ShoppingCart,
  Utensils
} from 'lucide-react';

const industryCardList = [
  {
    id: 'clinic',
    title: 'Clinic',
    icon: Stethoscope,
    accColor: '#11a297',
    accBright: '#5eead4',
    accBg: 'rgba(17, 162, 151, 0.22)',
    description: 'Appointments, patients, prescriptions, billing and an AI front desk — in one app.',
    subtext: 'Dental, skin, eye and physiotherapy clinics, and diagnostic labs',
    price: 'Plans from ₹23,999 a year + GST',
  },
  {
    id: 'coaching',
    title: 'Coaching Institute',
    icon: GraduationCap,
    accColor: '#7357ff',
    accBright: '#bcadff',
    accBg: 'rgba(115, 87, 255, 0.22)',
    description: 'Admissions, batches, attendance, fees and an AI counsellor — in one app.',
    subtext: 'NEET, JEE, board-exam and tuition centres',
    price: 'Plans from ₹23,999 a year + GST',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: Building2,
    accColor: '#e08600',
    accBright: '#ffc56b',
    accBg: 'rgba(224, 134, 0, 0.22)',
    description: 'Enquiries, site visits, every flat, bookings, payments and brokers — in one app.',
    subtext: 'Builders, developers and property sellers',
    price: 'Plans from ₹32,000 a year + GST',
  },
  {
    id: 'gym',
    title: 'Gym & Fitness Studio',
    icon: Dumbbell,
    accColor: '#f0503a',
    accBright: '#ff9f8a',
    accBg: 'rgba(240, 80, 58, 0.22)',
    description: 'Members, check-ins, renewals, PT packs and an AI front desk — in one app.',
    subtext: 'Gyms, yoga, Zumba, CrossFit and dance studios',
    price: 'Plans from ₹22,000 a year + GST',
  },
  {
    id: 'salon',
    title: 'Salon & Spa',
    icon: Scissors,
    accColor: '#d9468f',
    accBright: '#ff9fcb',
    accBg: 'rgba(217, 70, 143, 0.22)',
    description: 'Stylist chairs, service menu, walk-ins, loyalty and an AI receptionist — in one app.',
    subtext: 'Hair salons, beauty parlours, nail studios and luxury spas',
    price: 'Plans from ₹20,000 a year + GST',
  },
  {
    id: 'field-service',
    title: 'Field Service & AMC',
    icon: Wrench,
    accColor: '#16a34a',
    accBright: '#86efac',
    accBg: 'rgba(22, 163, 74, 0.22)',
    description: 'Technicians, visits, AMC contracts, spare parts and an AI dispatcher — in one app.',
    subtext: 'AC, RO water, solar, elevator and electrical AMC providers',
    price: 'Plans from ₹28,000 a year + GST',
  },
  {
    id: 'turf',
    title: 'Turf',
    icon: Trophy,
    accColor: '#65a30d',
    accBright: '#bef264',
    accBg: 'rgba(101, 163, 13, 0.22)',
    description: 'A court board by the hour, peak prices, cash and UPI at the desk, online advance, regular teams and an AI that books slots — in one app.',
    subtext: 'Box cricket, football and badminton turfs',
    price: 'Plans from ₹23,999 a year + GST',
    isFullWidth: true
  },
];

export default function Hero({ onSelectIndustry }) {
  return (
    <section 
      id="products-grid"
      className="relative isuite-hero-bg text-white pt-24 pb-20 sm:pt-32 sm:pb-24 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Exact luminous cyan top glow from isuite.ai */}
      <div 
        className="absolute w-[50vmax] h-[50vmax] top-0 left-1/2 -translate-x-[60%] pointer-events-none rounded-full blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(25, 182, 255, 0.38), transparent 64%)'
        }}
      ></div>

      {/* Secondary ambient blue bottom glow */}
      <div 
        className="absolute w-[40vmax] h-[40vmax] -bottom-[10vmax] -right-[5vmax] pointer-events-none rounded-full blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(22, 99, 255, 0.4), transparent 64%)'
        }}
      ></div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Kicker Pill: exact match */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs sm:text-[13px] backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#19b6ff] shrink-0" />
            <span>One product per trade, made in India</span>
          </div>
        </div>

        {/* Family Title: exact styling with shimmering span */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-0.035em] text-white leading-[1.08] text-balance">
            Business software made for your industry,{' '}
            <span className="family-title-span block sm:inline">with AI built in.</span>
          </h1>

          {/* Family Lead: exact match */}
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg text-white/75 max-w-[740px] mx-auto leading-[1.5] font-normal">
            Run your whole business on one app: customers, bookings, billing, payments, renewals, marketing and calls in one place — with an AI that answers and follows up on WhatsApp, in Tamil, Tanglish or English. Pick the iSuite AI made for your trade, ready the day you start.
          </p>
        </div>

        {/* The Family Grid: 2 columns, with Turf taking the full width across 2 columns */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[880px] mx-auto">
          {industryCardList.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => onSelectIndustry(card.id)}
                className={`group relative overflow-hidden rounded-[24px] p-5 sm:p-6 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.13] hover:border-white/30 backdrop-blur-[14px] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:-translate-y-1 ${
                  card.isFullWidth ? 'md:col-span-2 w-full' : ''
                }`}
              >
                {/* Subtle radial glow under card */}
                <div 
                  className="absolute -top-[30%] -left-[20%] w-[140%] h-[120%] pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle closest-side, ${card.accBg}, transparent)`
                  }}
                ></div>

                <div>
                  {/* Icon Box */}
                  <div 
                    className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center mb-3"
                    style={{
                      background: card.accBg,
                      color: card.accBright
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Kicker Tag */}
                  <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/50 mb-1">
                    ISUITE AI
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold text-white tracking-[-0.015em] mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Pitch sentence */}
                  <p className="text-[14px] text-white/80 leading-[1.45] mb-2.5">
                    {card.description}
                  </p>

                  {/* Target for */}
                  <p className="text-[12.5px] text-white/50 leading-[1.4] mb-4">
                    {card.subtext}
                  </p>
                </div>

                {/* Footer: Vertically stacked price and Explore link */}
                <div className="pt-3.5 border-t border-white/10 flex flex-col items-start gap-1.5 mt-2">
                  <span className="text-[12.5px] text-white/60">
                    {card.price}
                  </span>
                  
                  <span 
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors"
                    style={{ color: card.accBright }}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming soon teaser row: exact match to isuite.ai */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-white/80">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50 mr-1">
            COMING SOON
          </span>
          <a 
            href="#soon" 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-xs"
          >
            <Truck className="w-3.5 h-3.5 text-white/60" />
            <span>Wholesale & Distribution</span>
          </a>
          <a 
            href="#soon" 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-xs"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-white/60" />
            <span>E-Commerce</span>
          </a>
          <a 
            href="#soon" 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-xs"
          >
            <Utensils className="w-3.5 h-3.5 text-white/60" />
            <span>Restaurant & Retail</span>
          </a>
        </div>

        {/* Trust notes row with checks: exact match */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#19b6ff]" />
            <span>Free trial on every product</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#19b6ff]" />
            <span>Web and Android app</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#19b6ff]" />
            <span>Data kept in India.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

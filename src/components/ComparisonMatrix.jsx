import React from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  Trophy 
} from 'lucide-react';

const tradeCards = [
  {
    id: 'clinic',
    name: 'Clinic',
    icon: Stethoscope,
    color: '#11a297',
    gradientBg: 'from-[#e6f7f2]/70',
    onEveryScreen: 'Patients, appointments, doctors and treatments',
    itsOwnTools: "Doctors' diaries, prescriptions and visit summaries, health packages, treatments paid in parts",
    readyOnDayOne: "The patient pipeline, each doctor's diary and services, reminder and report templates, doctor and front-desk roles",
    morningNumbers: "Today's appointments, no-shows, follow-ups due, new patients",
    theAiNever: "Prescribes medicine or gives diagnoses — it books, reminds, shares reports and collects"
  },
  {
    id: 'coaching',
    name: 'Coaching Institute',
    icon: GraduationCap,
    color: '#7357ff',
    gradientBg: 'from-[#f0edff]/70',
    onEveryScreen: 'Students, enquiries, batches and courses',
    itsOwnTools: 'Batches with seats, attendance, fees in instalments, parents linked to students',
    readyOnDayOne: 'The admissions pipeline, batches, a demo-class calendar, fee automations, counsellor and teacher roles',
    morningNumbers: 'New enquiries, fees due, fees overdue, follow-ups due',
    theAiNever: 'Invents syllabus details or guarantees ranks — it answers enquiries, books demo classes, follows up on fees and shares test scores'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    color: '#e08600',
    gradientBg: 'from-[#fff6e6]/70',
    onEveryScreen: 'Leads, site visits, units and bookings',
    itsOwnTools: 'Every flat on one board, payment milestones, demand letters, broker commissions',
    readyOnDayOne: 'The lead pipeline across Meta and 99acres, site visit scheduler, unit availability board, sales roles',
    morningNumbers: "Today's site visits, overdue payments, uncontacted leads, units on hold",
    theAiNever: 'Quotes unapproved discounts or negotiates prices — it qualifies buyers, schedules visits, sends brochures and shares location pins'
  },
  {
    id: 'gym',
    name: 'Gym & Fitness Studio',
    icon: Dumbbell,
    color: '#f0503a',
    gradientBg: 'from-[#fef0ed]/70',
    onEveryScreen: 'Members, check-ins, renewals and trainers',
    itsOwnTools: 'QR door check-in, PT session tracking, automated expiry reminders, diet charts',
    readyOnDayOne: 'Membership plans, trainer diaries, trial booking flow, desk scanner app',
    morningNumbers: 'Renewals due this week, expired members, trial sessions today, floor occupancy',
    theAiNever: 'Changes membership pricing — it answers plan queries, books free trials, sends UPI renewal links and tracks trainer sessions'
  },
  {
    id: 'salon',
    name: 'Salon & Spa',
    icon: Scissors,
    color: '#d9468f',
    gradientBg: 'from-[#fdf0f6]/70',
    onEveryScreen: 'Clients, appointments, stylists and services',
    itsOwnTools: 'Day board by chair, client hair/skin cards, stylist commission tracking, combo billing',
    readyOnDayOne: 'Service menu with prices and durations, stylist rosters, automated return reminder rules',
    morningNumbers: "Today's bookings, chair utilization, return clients due, retail sales",
    theAiNever: 'Double-books a stylist or gives unapproved discounts — it checks availability, books appointments, suggests combos and sends reminder pings'
  },
  {
    id: 'field-service',
    name: 'Field Service & AMC',
    icon: Wrench,
    color: '#16a34a',
    gradientBg: 'from-[#edf8f0]/70',
    onEveryScreen: 'Jobs, technicians, AMC contracts and parts',
    itsOwnTools: 'Jobs board by technician, customer signatures, doorstep spare parts billing, AMC renewal tracker',
    readyOnDayOne: 'Service catalog, technician mobile dispatch app, digital job card templates, AMC contract tiers',
    morningNumbers: 'Open jobs today, technicians on the road, AMC visits due this month, pending payments',
    theAiNever: 'Promises a repair price before the technician has seen it, or an exact time'
  },
  {
    id: 'turf',
    name: 'Turf',
    icon: Trophy,
    color: '#65a30d',
    gradientBg: 'from-[#f4fbe9]/70',
    onEveryScreen: 'Customers, courts, bookings and regular teams',
    itsOwnTools: 'A court board by the hour with the ground in halves, peak and weekend prices, cash and UPI at the desk, an advance online, weekly regular teams and hour packs',
    readyOnDayOne: 'A football ground in halves, box cricket and badminton courts with sample rates, a 10-hour pack, the sport and team name the AI asks for, desk and manager roles',
    morningNumbers: "Today's games, to collect today, regular teams, no-shows",
    theAiNever: 'Quotes a price the court board did not give, or promises a refund of an advance'
  }
];

export default function ComparisonMatrix({ onSelectIndustry, onOpenDemo }) {
  return (
    <section id="trades" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: exact match to isuite.ai */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 head reveal">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-3">
            MADE FOR YOUR TRADE
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance">
            Not one tool bent to<br />
            fit every business
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-[#475569] max-w-[720px] mx-auto leading-relaxed font-normal">
            Generic software makes you learn its words and build your own setup. Each Karttik AI arrives already shaped like your business — its screens, its tools, its numbers and its rules.
          </p>
        </div>

        {/* 2-Column Trade Cards Grid with Turf spanning full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto matrix reveal stagger">
          {tradeCards.map((trade) => {
            const Icon = trade.icon;
            const isTurf = trade.id === 'turf';

            return (
              <div
                key={trade.id}
                onClick={() => onSelectIndustry && onSelectIndustry(trade.id)}
                className={`bg-white rounded-[24px] sm:rounded-[28px] border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-0.5 ${
                  isTurf ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Top Header with ambient pastel gradient */}
                  <div className={`p-6 sm:p-7 pb-4 bg-gradient-to-b ${trade.gradientBg} via-transparent to-transparent flex items-center gap-3.5`}>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: trade.color }}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                        KARTTIK AI
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#06122e] leading-snug">
                        {trade.name}
                      </h3>
                    </div>
                  </div>

                  {/* Rows with labels and descriptions */}
                  <div className="divide-y divide-slate-100">
                    
                    {/* Row 1: On Every Screen */}
                    <div className="px-6 sm:px-7 py-3.5">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] block mb-1"
                        style={{ color: trade.color }}
                      >
                        ON EVERY SCREEN
                      </span>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {trade.onEveryScreen}
                      </p>
                    </div>

                    {/* Row 2: Its Own Tools */}
                    <div className="px-6 sm:px-7 py-3.5">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] block mb-1"
                        style={{ color: trade.color }}
                      >
                        ITS OWN TOOLS
                      </span>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {trade.itsOwnTools}
                      </p>
                    </div>

                    {/* Row 3: Ready on Day One */}
                    <div className="px-6 sm:px-7 py-3.5">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] block mb-1"
                        style={{ color: trade.color }}
                      >
                        READY ON DAY ONE
                      </span>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {trade.readyOnDayOne}
                      </p>
                    </div>

                    {/* Row 4: Morning Numbers */}
                    <div className="px-6 sm:px-7 py-3.5">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] block mb-1"
                        style={{ color: trade.color }}
                      >
                        MORNING NUMBERS
                      </span>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {trade.morningNumbers}
                      </p>
                    </div>

                    {/* Row 5: The AI Never */}
                    <div className="px-6 sm:px-7 py-3.5">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] block mb-1"
                        style={{ color: trade.color }}
                      >
                        THE AI NEVER
                      </span>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {trade.theAiNever}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  Sparkles, 
  Users, 
  Calendar, 
  CreditCard, 
  Megaphone, 
  Shield, 
  Check, 
  Lock, 
  UserCheck, 
  XCircle 
} from 'lucide-react';

const suiteList = [
  {
    title: 'AI',
    icon: Sparkles,
    ticks: [
      'An AI agent on WhatsApp, Instagram, Messenger and web chat',
      'Voice notes and photos, in the customer’s language',
      'Manager over WhatsApp: approve a discount, ask for the numbers',
      'Studio, a marketing agent that reads your Meta ads and drafts new ones for your approval'
    ]
  },
  {
    title: 'Customers and sales',
    icon: Users,
    ticks: [
      'One inbox for every channel, shared by the team',
      'Customer records with files, tags, groups and your own fields',
      'Pipelines, follow-ups, and handovers with a brief',
      'Quotations and GST invoices on your letterhead'
    ]
  },
  {
    title: 'Bookings and operations',
    icon: Calendar,
    ticks: [
      'Calendars and booking pages, with reminders',
      'Your own records — projects and flats, batches and more',
      'Your trade’s tools: prescriptions, attendance, cost sheets, check-ins',
      'Automations that run the routine by themselves'
    ]
  },
  {
    title: 'Payments',
    icon: CreditCard,
    ticks: [
      'Payment links and checkout, into your own Razorpay',
      'Fees and payments in instalments, each reminded',
      'Memberships that renew, and packs of sessions',
      'Products, stock and orders'
    ]
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    ticks: [
      'WhatsApp broadcasts and email campaigns',
      'Meta lead ads and web forms, straight in',
      'The ads report: which ads bring paying customers',
      'Instagram comment and DM automation'
    ]
  },
  {
    title: 'Team and control',
    icon: Shield,
    ticks: [
      'Roles and permissions for every person',
      'Calls from your own SIM, recorded; WhatsApp calls in the app',
      'The whole app on Android, with notifications',
      'Team and AI reports, your logo, the API and data export'
    ]
  }
];

export default function CoreFeatures({ onOpenDemo }) {
  return (
    <section id="platform" className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1663ff] mb-3">
            ONE PLATFORM
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance">
            Everything your business runs on, in one app
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-[#475569] max-w-[700px] mx-auto leading-relaxed font-normal">
            Every iSuite AI is built on one platform, so each improvement reaches all of them the day it ships. Which of these parts come with your product and plan is on the pricing page.
          </p>
        </div>

        {/* 6 Suite Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {suiteList.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#1663ff] border border-blue-100/60 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#06122e] tracking-tight mb-4">
                    {card.title}
                  </h3>

                  <ul className="space-y-3">
                    {card.ticks.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#334155] leading-relaxed">
                        <Check className="w-4 h-4 stroke-[2] text-slate-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Strip matching isuite.ai in 2 centered rows */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 flex flex-col items-center gap-3.5 text-xs sm:text-[13px] text-slate-600">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#1663ff]" />
              <span>Meta’s official WhatsApp Business Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#1663ff]" />
              <span>Data in India: AWS Mumbai, backups in Hyderabad</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#1663ff]" />
              <span>Roles, so each person sees what they should</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-[#1663ff]" />
              <span>No data sold, no ads</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

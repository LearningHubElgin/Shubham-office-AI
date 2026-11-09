import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  Clock,
  MessageSquare,
  Users,
  CheckCircle2,
  AlertCircle,
  Calendar,
  CreditCard,
  ArrowUpRight,
  ArrowRight,
  Activity,
  Bot,
  UserCheck,
  ChevronRight,
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig, formatLakhs } from '../industryConfig';

export default function DashboardPage({ onNavigate, onNavigateTab }) {
  const handleNav = (tabId) => {
    if (typeof onNavigate === 'function') onNavigate(tabId);
    else if (typeof onNavigateTab === 'function') onNavigateTab(tabId);
  };

  const { workspace, currentConfig, user } = useAppStore();
  const [revenueRange, setRevenueRange] = useState('30d'); // '7d' | '30d' | '90d'

  // Dynamic morning 4 numbers from config
  const fourNumbers = currentConfig.fourNumbers || [];

  // Revenue chart data mock based on range
  const revenueStats = {
    '7d': { total: '₹1.48 Lakhs', growth: '+18.4%', trend: [45, 62, 58, 80, 72, 95, 88] },
    '30d': { total: '₹6.85 Lakhs', growth: '+24.2%', trend: [30, 45, 60, 52, 75, 88, 92, 110, 105, 125, 140, 135] },
    '90d': { total: '₹19.4 Lakhs', growth: '+31.8%', trend: [20, 35, 50, 70, 85, 110, 130, 160, 190] },
  };

  const currentRevenue = revenueStats[revenueRange];

  const todaySchedule = [
    { time: '10:30 AM', title: `Consultation with K. Meenakshi Ammal`, tag: 'Confirmed', doctor: 'Dr. Sundaram' },
    { time: '11:15 AM', title: `Knee Examination — Rajendran P.`, tag: 'Arriving', doctor: 'Dr. Kanimozhi' },
    { time: '12:00 PM', title: `Diabetic Review — A. Fathima Banu`, tag: 'WhatsApp Booked', doctor: 'Dr. Sundaram' },
    { time: '02:30 PM', title: `Vendor Medicine Stock Delivery`, tag: 'Operations', doctor: 'Pharmacy' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Header Greeting & Date */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>{currentConfig.name} Operational Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            Good morning, {user.name} 👋
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Here are your four morning operational numbers for today, Monday, 10 November 2026.
          </p>
        </div>

        {/* Quick Action Button Pill */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav('inbox')}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Inbox</span>
          </button>
          <button
            onClick={() => handleNav('bookings')}
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Today's Calendar</span>
          </button>
        </div>
      </div>

      {/* 2. "Four Numbers Every Morning" Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fourNumbers.map((stat, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (idx === 0) handleNav('bookings');
              else if (idx === 1) handleNav('customers');
              else if (idx === 2) handleNav('payments');
              else handleNav('follow-ups');
            }}
            className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                {stat.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
            </div>
            <div className="text-3xl font-black text-gray-950 tracking-tight mb-1">
              {stat.value}
            </div>
            <div className="text-[11px] font-medium text-blue-600 flex items-center gap-1">
              <span>{stat.sub}</span>
            </div>
            <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-r from-transparent to-blue-500/30 group-hover:to-blue-600 transition-all" />
          </div>
        ))}
      </div>

      {/* 3. AI Performance & Handover Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Performance Card */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-[#001744] to-[#002773] text-white shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-400/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base">iSuite AI Autopilot Performance</h3>
                  <p className="text-xs text-blue-200/80">Automated WhatsApp & Instagram conversations</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                ● Live & Answering
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs">
                <div className="text-xs text-blue-200">Chats Handled by AI</div>
                <div className="text-2xl font-black mt-1">94.2%</div>
                <div className="text-[10px] text-emerald-300 mt-0.5">312 chats this week</div>
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs">
                <div className="text-xs text-blue-200">Human Hand-offs</div>
                <div className="text-2xl font-black mt-1">18</div>
                <div className="text-[10px] text-blue-200 mt-0.5">Custom negotiations</div>
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs">
                <div className="text-xs text-blue-200">Slots Booked by AI</div>
                <div className="text-2xl font-black mt-1">47</div>
                <div className="text-[10px] text-emerald-300 mt-0.5">Direct into calendar</div>
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs">
                <div className="text-xs text-blue-200">Avg First-Reply Time</div>
                <div className="text-2xl font-black mt-1">8 sec</div>
                <div className="text-[10px] text-blue-200 mt-0.5">Meta Cloud API</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-blue-200/90 gap-2 relative z-10">
            <span>AI speaks Tamil, Tanglish, Hindi and English automatically.</span>
            <button
              onClick={() => handleNav('ai-studio')}
              className="font-bold text-white hover:text-blue-200 flex items-center gap-1 cursor-pointer"
            >
              <span>Manage Trade Guidelines</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Attention Box: Chats Needing Human Handover */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-gray-950 text-sm">Needs A Person (2)</h3>
              </div>
              <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
                Action Required
              </span>
            </div>

            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Conversations where AI reached its threshold and safely handed over to staff:
            </p>

            <div className="space-y-3">
              <div
                onClick={() => handleNav('inbox')}
                className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/70 hover:bg-amber-50 transition-colors cursor-pointer text-xs"
              >
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Saravanan Muthu</span>
                  <span className="text-[10px] text-gray-400 font-normal">09:48 AM</span>
                </div>
                <p className="text-gray-600 mt-1 line-clamp-1">
                  "Fee receipt and batch time WhatsApp-la anuppa mudiyuma?"
                </p>
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/80 px-1.5 py-0.5 rounded mt-2 inline-block">
                  Reason: Document dispatch
                </span>
              </div>

              <div
                onClick={() => handleNav('inbox')}
                className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer text-xs"
              >
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Priya Sharma</span>
                  <span className="text-[10px] text-gray-400 font-normal">Yesterday</span>
                </div>
                <p className="text-gray-600 mt-1 line-clamp-1">
                  "Special bridal package discount above 15% request"
                </p>
                <span className="text-[10px] font-semibold text-blue-800 bg-blue-100/80 px-1.5 py-0.5 rounded mt-2 inline-block">
                  Reason: Discount approval
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNav('inbox')}
            className="w-full mt-4 py-2 text-center text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            Open Unified Inbox →
          </button>
        </div>
      </div>

      {/* 4. Revenue Trend + Today's Schedule Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue / Collections Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs">
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-100 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Collections & Revenue
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-gray-950">{currentRevenue.total}</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {currentRevenue.growth}
                </span>
              </div>
            </div>

            {/* Time filters: 7 / 30 / 90 days */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setRevenueRange('7d')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  revenueRange === '7d' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                7 Days
              </button>
              <button
                onClick={() => setRevenueRange('30d')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  revenueRange === '30d' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                30 Days
              </button>
              <button
                onClick={() => setRevenueRange('90d')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  revenueRange === '90d' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                90 Days
              </button>
            </div>
          </div>

          {/* SVG Line / Bar Chart visual */}
          <div className="py-6">
            <div className="h-44 w-full flex items-end gap-2 sm:gap-4 pt-4 px-2">
              {currentRevenue.trend.map((val, idx) => {
                const heightPercent = Math.min(100, Math.max(20, (val / 150) * 100));
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      ₹{val}k
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[28px] bg-gradient-to-t from-blue-700 to-blue-500 rounded-t-lg transition-all group-hover:brightness-110"
                    />
                    <span className="text-[10px] text-gray-400 font-medium">
                      W{idx + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Includes GST Invoicing & Razorpay automated collections.</span>
            <button
              onClick={() => handleNav('payments')}
              className="text-blue-600 font-bold hover:underline"
            >
              View Payment Breakdown →
            </button>
          </div>
        </div>

        {/* Today's Schedule Card */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Today's Schedule</span>
              </h3>
              <button
                onClick={() => handleNav('bookings')}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Calendar View
              </button>
            </div>

            <div className="space-y-3">
              {todaySchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-blue-600">{item.time}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {item.tag}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">Assigned: {item.doctor}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNav('industry')}
            className="w-full mt-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold text-center transition-colors cursor-pointer"
          >
            Open {currentConfig.sidebarCustomLabel} →
          </button>
        </div>
      </div>
    </div>
  );
}


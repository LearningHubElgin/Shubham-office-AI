import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Clock, IndianRupee, ArrowRight, CheckCircle2 } from 'lucide-react';
import { industries } from '../data/industryData';

export default function ROICalculator({ onOpenTrial }) {
  const [selectedIndustryId, setSelectedIndustryId] = useState('clinic');
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState(600);
  const [staffCount, setStaffCount] = useState(2);

  // Benchmarks based on industry
  const currentIndustry = industries.find(i => i.id === selectedIndustryId) || industries[0];

  // Calculations
  // Average minutes spent per inquiry manually = ~8 minutes (answering, following up, booking, reminder)
  const manualMinutesPerInquiry = 8;
  const hoursSavedPerMonth = Math.round((inquiriesPerMonth * manualMinutesPerInquiry * 0.75) / 60);
  
  // Cost of staff hour in tier 2/3 cities ~ ₹150 - ₹200/hr
  const staffHourlyRate = 180;
  const rupeeSavingsTime = hoursSavedPerMonth * staffHourlyRate;
  
  // After hours inquiry recovery rate (~25% of inquiries arrive after 8 PM or on Sundays)
  // Conversion rate ~ 15%
  const afterHoursInquiries = Math.round(inquiriesPerMonth * 0.28);
  const additionalBookingsCaptured = Math.round(afterHoursInquiries * 0.22);
  
  // Average ticket size per industry
  const ticketSizeMap = {
    'clinic': 450,       // Doctor consultation + medicine follow-up
    'coaching': 2000,    // Monthly tuition fees
    'real-estate': 15000, // Site visit lead conversion value
    'gym': 1500,         // Monthly membership
    'salon': 1200,       // Styling package
    'field-service': 1800, // Service ticket
    'turf': 1400,        // Slot booking
  };
  const ticketSize = ticketSizeMap[selectedIndustryId] || 800;
  const extraRevenue = additionalBookingsCaptured * ticketSize;

  const totalMonthlyImpact = rupeeSavingsTime + extraRevenue;

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            See how much time & revenue you recover each month
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569]">
            Adjust your monthly inquiry volume and team size to calculate your estimated return with iSuite AI.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#f8fafc] rounded-3xl border border-gray-200/90 shadow-xl p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Controls Column (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                1. Select Your Industry
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-xl text-left border transition-all ${
                      selectedIndustryId === ind.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="truncate">{ind.shortName}</div>
                    <div className={`text-[10px] ${selectedIndustryId === ind.id ? 'text-blue-100' : 'text-gray-400'}`}>
                      {ind.tier}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Inquiries */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Monthly Customer Inquiries & Messages
                </span>
                <span className="text-base sm:text-lg font-black text-blue-600 font-mono">
                  {inquiriesPerMonth.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={inquiriesPerMonth}
                onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>100 leads</span>
                <span>1,500 leads</span>
                <span>3,000+ leads</span>
              </div>
            </div>

            {/* Slider 2: Frontdesk & Admin Staff */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Frontdesk / Reception / Field Staff
                </span>
                <span className="text-base sm:text-lg font-black text-indigo-600 font-mono">
                  {staffCount} {staffCount === 1 ? 'Person' : 'People'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={staffCount}
                onChange={(e) => setStaffCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>1 staff</span>
                <span>4 staff</span>
                <span>8+ staff</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Calculated using measured conversion benchmarks from 250+ live businesses</span>
            </div>
          </div>

          {/* Results Column (col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0b0f19] to-[#111827] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Estimated Monthly Value Created
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ₹{totalMonthlyImpact.toLocaleString()}
                <span className="text-xs text-gray-400 font-normal ml-1">/ month</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">
                vs software cost of ~₹{Math.round(parseInt(currentIndustry.startingPrice.match(/\d+,\d+/)?.[0].replace(',', '') || '20000') / 12).toLocaleString()}/month
              </div>

              {/* Breakdown metrics */}
              <div className="mt-6 space-y-3.5 pt-4 border-t border-gray-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    Staff Time Reclaimed:
                  </span>
                  <span className="font-bold text-white font-mono">{hoursSavedPerMonth} Hours / mo</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    After-Hours Bookings Rescued:
                  </span>
                  <span className="font-bold text-emerald-300 font-mono">+{additionalBookingsCaptured} bookings</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4 text-amber-400 shrink-0" />
                    Estimated Extra Revenue:
                  </span>
                  <span className="font-bold text-amber-300 font-mono">+₹{extraRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <button
                onClick={() => onOpenTrial(currentIndustry.name)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Unlock These Savings on Free Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                14-Day Free Pilot • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


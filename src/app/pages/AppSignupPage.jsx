import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Building2,
  CreditCard,
  Check,
  Lock,
  Layers,
  Phone,
  MessageSquare,
  Users,
  Settings,
  HelpCircle,
  X
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig } from '../industryConfig';

export default function AppSignupPage({ initialIndustry = 'clinic', initialPlan = 'growth', onNavigateToApp, onNavigateToLogin }) {
  const { switchIndustry, switchPlan, loginUser, setState } = useAppStore();

  const [step, setStep] = useState('details'); // 'details' | 'razorpay' | 'onboarding'
  const [businessName, setBusinessName] = useState('Karttik Prime Enterprise');
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry);
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [whatsappPhone, setWhatsappPhone] = useState('+91 93486 33365');
  const [metaStatus, setMetaStatus] = useState('Pending');

  // Onboarding checklist state
  const [checklist, setChecklist] = useState({
    whatsapp: false,
    team: false,
    aiRules: false,
    firstItem: false,
    importCustomers: false,
  });

  const [tourDismissed, setTourDismissed] = useState(false);

  const currentIndConfig = industriesConfig[selectedIndustry] || industriesConfig.clinic;

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setStep('razorpay');
  };

  const handleRazorpayApprove = () => {
    // Approve auto-debit step
    switchIndustry(selectedIndustry);
    switchPlan(selectedPlan);
    loginUser('subham@gmail.com', 'Subham123');
    setState((prev) => ({
      ...prev,
      workspace: {
        ...prev.workspace,
        businessName,
        industry: selectedIndustry,
        plan: selectedPlan,
        whatsappPhone,
      },
    }));
    setStep('onboarding');
  };

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex flex-col justify-between items-center py-6 px-4 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header Logo */}
      <div className="w-full max-w-5xl flex items-center justify-between pt-2 px-2">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo-wordmark.png" alt="Karttik AI" className="h-8 w-auto object-contain" />
        </a>

        <button
          onClick={onNavigateToLogin}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800"
        >
          Already have an account? Sign In
        </button>
      </div>

      {/* ---------------- STEP 1: BUSINESS & INDUSTRY DETAILS ---------------- */}
      {step === 'details' && (
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-9 my-6">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Start Free Trial · No Charges Today</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-950 mb-1">
            Setup your trade workspace
          </h1>
          <p className="text-xs text-gray-500 mb-6">
            Select your industry to configure WhatsApp workflows, AI rules, and booking engines.
          </p>

          <form onSubmit={handleDetailsSubmit} className="space-y-5 text-xs">
            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">
                Business / Branch Name
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Apex Multispeciality Clinic"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm font-medium focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1.5">
                WhatsApp Business Number
              </label>
              <input
                type="tel"
                required
                value={whatsappPhone}
                onChange={(e) => setWhatsappPhone(e.target.value)}
                placeholder="+91 93486 33365"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm font-medium focus:outline-none"
              />
            </div>

            {/* 7 Products Selector */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Select Your Industry (1 Product for Each Trade)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.values(industriesConfig).map((ind) => (
                  <div
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedIndustry === ind.id
                        ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-gray-900 mb-0.5">
                      <span>{ind.name}</span>
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                        {ind.trialDays}d Trial
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">
                      {ind.tagline}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Selector: Basic vs Growth */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Choose Plan for {currentIndConfig.name}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => setSelectedPlan('basic')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedPlan === 'basic'
                      ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="font-bold text-gray-900 text-sm">Basic Plan</div>
                  <div className="text-[11px] text-gray-500 mt-1">Core inbox, bookings & invoicing</div>
                </div>

                <div
                  onClick={() => setSelectedPlan('growth')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedPlan === 'growth'
                      ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-gray-900 text-sm">
                    <span>Growth Plan</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-extrabold uppercase">
                      Recommended
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">Full AI agent, automations & reports</div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#001744] hover:bg-[#002875] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Continue to Free Trial Approval</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* ---------------- STEP 2: MOCK RAZORPAY AUTO-DEBIT STEP ---------------- */}
      {step === 'razorpay' && (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 my-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                R
              </div>
              <span className="font-bold text-gray-900 text-sm">Razorpay Mandate Authorization</span>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
              Mock Screen
            </span>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 mb-5">
            <div className="text-xs text-blue-900 font-bold mb-1">
              ₹0.00 Authorization for {currentIndConfig.trialDays}-Day Free Trial
            </div>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              Auto-debit will only occur after your {currentIndConfig.trialDays}-day free trial expires. Cancel anytime in one click from Workspace Settings with no questions asked.
            </p>
          </div>

          <div className="space-y-3 mb-6 text-xs">
            <div className="p-3 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between">
              <span className="text-gray-600">Company</span>
              <span className="font-bold text-gray-900">{businessName}</span>
            </div>
            <div className="p-3 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between">
              <span className="text-gray-600">Selected Product</span>
              <span className="font-bold text-blue-600">{currentIndConfig.name}</span>
            </div>
            <div className="p-3 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between">
              <span className="text-gray-600">Trial Period</span>
              <span className="font-bold text-emerald-600">{currentIndConfig.trialDays} Days 100% Free</span>
            </div>
          </div>

          <button
            onClick={handleRazorpayApprove}
            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Approve Mandate & Open App</span>
          </button>

          <button
            onClick={() => setStep('details')}
            className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-800 font-medium text-center mt-2"
          >
            ← Back to details
          </button>
        </div>
      )}

      {/* ---------------- STEP 3: ONBOARDING CHECKLIST + PRODUCT TOUR ---------------- */}
      {step === 'onboarding' && (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-9 my-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                Setup Ready · 100% Free
              </span>
              <h2 className="text-2xl font-bold text-gray-950 mt-2">
                Welcome to your {currentIndConfig.name} workspace!
              </h2>
            </div>

            <button
              onClick={() => onNavigateToApp('dashboard')}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dismissible Tour Banner */}
          {!tourDismissed && (
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-[#001744] text-white relative">
              <button
                onClick={() => setTourDismissed(true)}
                className="absolute top-3 right-3 text-white/60 hover:text-white p-1"
                aria-label="Dismiss tour"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>60-Second Interactive Tour</span>
              </div>
              <h3 className="text-base font-bold mb-1">Explore all 7 industry modules with 1 click</h3>
              <p className="text-xs text-white/80 leading-relaxed max-w-lg mb-3">
                Use the top-bar dropdown to switch between Clinics, Coaching, Real Estate, Gyms, Salons, Field Service, and Sports Turfs. All sample data and WhatsApp flows update live.
              </p>
              <button
                onClick={() => {
                  setTourDismissed(true);
                  onNavigateToApp('dashboard');
                }}
                className="px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold"
              >
                Got it, start exploring
              </button>
            </div>
          )}

          {/* Onboarding Steps Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Onboarding Milestones
            </h3>

            {/* 1. WhatsApp Connection */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${checklist.whatsapp ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {checklist.whatsapp ? <Check className="w-3.5 h-3.5" /> : '1'}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Connect Meta Cloud WhatsApp API</div>
                  <div className="text-[11px] text-gray-500">Number {whatsappPhone} · Status: <span className="font-semibold text-emerald-600">{metaStatus}</span></div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMetaStatus('Approved');
                  toggleChecklist('whatsapp');
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer"
              >
                {metaStatus === 'Approved' ? 'Meta Approved' : 'Simulate Meta Approval'}
              </button>
            </div>

            {/* 2. Add Team */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${checklist.team ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {checklist.team ? <Check className="w-3.5 h-3.5" /> : '2'}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Add Team Members & Roles</div>
                  <div className="text-[11px] text-gray-500">Roles: {currentIndConfig.roles.join(', ')}</div>
                </div>
              </div>
              <button
                onClick={() => toggleChecklist('team')}
                className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer"
              >
                {checklist.team ? 'Done' : 'Mark Configured'}
              </button>
            </div>

            {/* 3. Set AI Rules */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${checklist.aiRules ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {checklist.aiRules ? <Check className="w-3.5 h-3.5" /> : '3'}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Configure AI Agent Trade Rules</div>
                  <div className="text-[11px] text-gray-500">Pre-loaded rules: "What AI is told never to do"</div>
                </div>
              </div>
              <button
                onClick={() => toggleChecklist('aiRules')}
                className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer"
              >
                {checklist.aiRules ? 'Done' : 'Review Rules'}
              </button>
            </div>

            {/* 4. First item */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${checklist.firstItem ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {checklist.firstItem ? <Check className="w-3.5 h-3.5" /> : '4'}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Add First Service / Course / Project</div>
                  <div className="text-[11px] text-gray-500">Catalog loaded with sample rates and tax items</div>
                </div>
              </div>
              <button
                onClick={() => toggleChecklist('firstItem')}
                className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer"
              >
                {checklist.firstItem ? 'Done' : 'Sample Ready'}
              </button>
            </div>

            {/* 5. Import Customers */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${checklist.importCustomers ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {checklist.importCustomers ? <Check className="w-3.5 h-3.5" /> : '5'}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Import {currentIndConfig.customerPlural} (CSV)</div>
                  <div className="text-[11px] text-gray-500">Sample contacts from Madurai and Chennai populated</div>
                </div>
              </div>
              <button
                onClick={() => toggleChecklist('importCustomers')}
                className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer"
              >
                {checklist.importCustomers ? 'Done' : 'CSV Seeded'}
              </button>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => onNavigateToApp('dashboard')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch My Business Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center pb-4 text-[11px] text-gray-400">
        © 2026 Karttik AI (Product of MnT Future). All rights reserved.
      </div>
    </div>
  );
}


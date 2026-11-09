import React, { useState } from 'react';
import { 
  Settings, 
  Building, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Smartphone, 
  Save, 
  Lock,
  Sparkles
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig } from '../industryConfig';

export default function SettingsPage() {
  const { workspace, user, switchPlan, resetDemoData, setState } = useAppStore();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'meta' | 'plan' | 'hours'

  // Profile fields
  const [businessName, setBusinessName] = useState(workspace.businessName);
  const [whatsappPhone, setWhatsappPhone] = useState(workspace.whatsappPhone);
  const [address, setAddress] = useState(workspace.address);
  const [gstin, setGstin] = useState(workspace.gstin);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Cancel trial modal
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setState(prev => ({
      ...prev,
      workspace: {
        ...prev.workspace,
        businessName,
        whatsappPhone,
        address,
        gstin,
      }
    }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-gray-100 text-gray-700">
              <Settings className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Workspace Settings</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Configure trade parameters, Meta WhatsApp Cloud API credentials, billing plan, and reset demo data.
          </p>
        </div>

        <button
          onClick={() => {
            if (confirm('Reset all demo data back to default initial state? This resets all CRM contacts, chat threads, and transactions.')) {
              resetDemoData();
              alert('Demo workspace data reset successfully!');
            }
          }}
          className="px-3.5 py-2 rounded-xl border border-red-200 text-red-600 bg-red-50/50 hover:bg-red-50 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Demo Data
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'profile' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Business Profile & Tax
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'meta' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Meta WhatsApp API Status
          </button>
          <button
            onClick={() => setActiveTab('plan')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'plan' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Subscription & Plan
          </button>
          <button
            onClick={() => setActiveTab('hours')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'hours' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Business Hours & SLA
          </button>
        </nav>
      </div>

      {/* TAB 1: Profile */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSaveProfile} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-5 max-w-2xl">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Changes saved successfully!
            </div>
          )}

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Business Name</label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Official WhatsApp Phone</label>
                <input
                  type="text"
                  required
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 font-mono focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">GSTIN Number</label>
                <input
                  type="text"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 font-mono focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Physical Business Address</label>
              <textarea
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-3.5 h-3.5" /> Save Changes
            </button>
          </div>
        </form>
      )}

      {/* TAB 2: Meta WhatsApp Status */}
      {activeTab === 'meta' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-5 max-w-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Meta WhatsApp Business Account (WABA)</h3>
                <p className="text-xs text-gray-500 font-mono">WABA ID: 104820194820192</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified & Active
            </span>
          </div>

          <div className="divide-y divide-gray-100 text-xs">
            <div className="py-3 flex justify-between">
              <span className="text-gray-500">Official Green Tick Status:</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Official Business Account (OBA)
              </span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-gray-500">Connected Phone Number:</span>
              <span className="font-mono font-bold text-gray-900">{workspace.whatsappPhone}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-gray-500">Cloud API Quality Rating:</span>
              <span className="font-semibold text-emerald-600">High (Green Rating)</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-gray-500">Messaging Tier Limit:</span>
              <span className="font-semibold text-gray-900">Tier 2 (10,000 unique business-initiated chats / 24h)</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Plan */}
      {activeTab === 'plan' && (
        <div className="space-y-6 max-w-3xl">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">Current Subscription</span>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">
                  {workspace.plan === 'growth' ? 'Growth Plan (All Features Unlocked)' : 'Basic Plan'}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  14-day free trial active. No credit card charged yet.
                </p>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  TRIAL ACTIVE
                </span>
              </div>
            </div>

            {/* Plan Switcher Toggles */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => switchPlan('basic')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  workspace.plan === 'basic' ? 'border-blue-600 bg-blue-50/40' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-gray-900">Basic Plan</span>
                  <span className="text-xs font-bold text-gray-900">₹999 / mo</span>
                </div>
                <p className="text-xs text-gray-500">Single user, core CRM, manual WhatsApp links.</p>
              </div>

              <div 
                onClick={() => switchPlan('growth')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  workspace.plan === 'growth' ? 'border-blue-600 bg-blue-50/40' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-gray-900">Growth Plan</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-amber-100 text-amber-800">POPULAR</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900">₹2,499 / mo</span>
                </div>
                <p className="text-xs text-gray-500">Multilingual AI agent, Expenses & ITC, stock tracking, automations.</p>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs text-gray-400">
              <span>Next billing cycle: 23 Nov 2026</span>
              <button
                onClick={() => setShowCancelModal(true)}
                className="text-red-500 hover:text-red-700 hover:underline"
              >
                Cancel trial & subscription
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Hours */}
      {activeTab === 'hours' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 max-w-xl text-xs">
          <h3 className="font-bold text-gray-900 text-sm">Working Hours & AI After-Hours Response</h3>
          <p className="text-gray-500">
            During business hours, human staff can take over chats. After hours, the 24/7 AI agent handles all bookings and queries automatically.
          </p>

          <div className="space-y-2 pt-2">
            {[
              { day: 'Monday - Friday', hours: '09:00 AM - 08:30 PM', mode: 'Staff + AI Co-pilot' },
              { day: 'Saturday', hours: '09:00 AM - 07:00 PM', mode: 'Staff + AI Co-pilot' },
              { day: 'Sunday', hours: 'Closed / Emergency only', mode: '24/7 AI Autonomous Front Desk' },
            ].map((d, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-xl flex justify-between items-center">
                <div>
                  <span className="font-bold text-gray-900">{d.day}</span>
                  <p className="text-[11px] text-gray-500">{d.hours}</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {d.mode}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-gray-100 p-6 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Cancel Free Trial?</h3>
            <p className="text-xs text-gray-500">
              Your AI agent will stop answering customer WhatsApp inquiries and scheduled follow-ups will be paused.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Keep Trial Active
              </button>
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  alert('Trial cancelled. Demo workspace restored to preview status.');
                }}
                className="flex-1 py-2 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700"
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


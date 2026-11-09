import React, { useState } from 'react';
import { 
  Megaphone, 
  Send, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Workflow, 
  Layers, 
  ArrowRight, 
  Users, 
  Radio, 
  Calendar,
  Sparkles,
  ExternalLink,
  Sliders,
  AlertCircle
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function MarketingPage() {
  const { workspace, customers } = useAppStore();
  const [activeTab, setActiveTab] = useState('broadcasts'); // 'broadcasts' | 'templates' | 'automations' | 'lead_ads'
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);

  // Seed broadcasts
  const [campaigns, setCampaigns] = useState([
    {
      id: 'BC-2026-12',
      name: 'Diwali Special Health Checkup & Dental Screening',
      template: 'diwali_preventive_health_v2',
      audience: 'All Registered Patients (340)',
      sentCount: 340,
      delivered: '98.5%',
      read: '84.2%',
      replied: 46,
      date: '02 Nov 2026',
      status: 'Completed'
    },
    {
      id: 'BC-2026-11',
      name: 'Weekend Demo Batch Invitation for Class 11 & 12',
      template: 'weekend_demo_class_invite',
      audience: 'New Enquiries (85)',
      sentCount: 85,
      delivered: '100%',
      read: '91.8%',
      replied: 28,
      date: '28 Oct 2026',
      status: 'Completed'
    }
  ]);

  // Seed Meta approved WhatsApp templates
  const [templates, setTemplates] = useState([
    {
      name: 'appointment_confirmation_v1',
      category: 'UTILITY',
      language: 'Tamil & English',
      metaStatus: 'Approved',
      preview: 'Vanakkam {{1}}! Your appointment with {{2}} is confirmed for {{3}} at {{4}}. Token: {{5}}.'
    },
    {
      name: 'payment_reminder_overdue',
      category: 'UTILITY',
      language: 'Tamil & English',
      metaStatus: 'Approved',
      preview: 'Dear {{1}}, friendly reminder that invoice {{2}} of ₹{{3}} is due. Pay securely via UPI link: {{4}}.'
    },
    {
      name: 'festive_offer_broadcast',
      category: 'MARKETING',
      language: 'English',
      metaStatus: 'Approved',
      preview: 'Celebrate with 20% off on all annual packages this week! Tap below to claim your voucher.'
    },
    {
      name: 'site_visit_reminder_location',
      category: 'UTILITY',
      language: 'English',
      metaStatus: 'Approved',
      preview: 'Hi {{1}}, your site visit for {{2}} is scheduled today at {{3}}. Google Maps link: {{4}}.'
    }
  ]);

  // Visual Automation Flows
  const [flows, setFlows] = useState([
    {
      id: 'flow_1',
      title: 'New Meta Lead Instant WhatsApp Welcome & Brochure',
      trigger: 'When new Lead arrives from Facebook/Instagram Ads',
      actions: ['Verify phone number via WhatsApp', 'Send personalized welcome video + PDF brochure', 'Schedule AI follow-up in 4 hours if no reply'],
      active: true,
    },
    {
      id: 'flow_2',
      title: 'Appointment Booked → Location & Calendar Sync',
      trigger: 'When appointment confirmed in CRM or AI Chat',
      actions: ['Send clinic Google Maps pin on WhatsApp', 'Generate Google Calendar ICS invite', 'Send SMS reminder 2 hours prior'],
      active: true,
    },
    {
      id: 'flow_3',
      title: 'Payment Received → Automated GST Invoice + Receipt',
      trigger: 'When Razorpay or Desk UPI payment marks Settled',
      actions: ['Generate GST-compliant B2C PDF invoice', 'Deliver receipt link on WhatsApp with download button', 'Update customer balance to ₹0'],
      active: true,
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-purple-50 text-purple-600">
              <Megaphone className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Marketing & Automations</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Meta WhatsApp broadcasts, official approved message templates, and visual event automation triggers.
          </p>
        </div>

        <button
          onClick={() => setShowNewCampaignModal(true)}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm"
        >
          <Send className="w-3.5 h-3.5" /> Launch Broadcast
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('broadcasts')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'broadcasts' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            WhatsApp Broadcasts ({campaigns.length})
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'templates' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Meta Approved Templates ({templates.length})
          </button>
          <button
            onClick={() => setActiveTab('automations')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'automations' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Visual Automation Flows ({flows.length})
          </button>
          <button
            onClick={() => setActiveTab('lead_ads')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'lead_ads' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Meta Ads Integration
          </button>
        </nav>
      </div>

      {/* TAB 1: Broadcasts */}
      {activeTab === 'broadcasts' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="divide-y divide-gray-100">
            {campaigns.map((c) => (
              <div key={c.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 text-sm">{c.name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {c.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Template: <span className="font-mono text-gray-700">{c.template}</span> • Audience: {c.audience}
                  </p>
                  <p className="text-[11px] text-gray-400">Date: {c.date}</p>
                </div>

                <div className="flex items-center gap-6 text-xs text-center">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Delivered</span>
                    <span className="font-bold text-gray-900">{c.delivered}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Read Rate</span>
                    <span className="font-bold text-blue-600">{c.read}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">AI Replies</span>
                    <span className="font-bold text-emerald-600">{c.replied} leads</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Templates */}
      {activeTab === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((tpl, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono font-bold text-xs text-gray-900">{tpl.name}</span>
                  <p className="text-[11px] text-gray-400">{tpl.category} • {tpl.language}</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" /> Meta Approved
                </span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 text-xs text-gray-700 font-sans leading-relaxed border border-gray-100">
                "{tpl.preview}"
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: Automations */}
      {activeTab === 'automations' && (
        <div className="space-y-4">
          {flows.map((flow) => (
            <div key={flow.id} className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-blue-600" />
                  <h4 className="font-bold text-gray-900 text-sm">{flow.title}</h4>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Active Automated
                </span>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs">
                <span className="font-bold text-blue-900">TRIGGER: </span>
                <span className="text-blue-800">{flow.trigger}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                {flow.actions.map((act, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-700 font-medium">
                      {act}
                    </span>
                    {idx < flow.actions.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: Meta Ads */}
      {activeTab === 'lead_ads' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 max-w-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Meta Lead Ads Webhook Connection</h3>
              <p className="text-xs text-gray-500 mt-0.5">Leads from Facebook & Instagram Instant Forms sync in real time.</p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live Connected
            </span>
          </div>

          <div className="p-3 bg-gray-50 rounded-xl font-mono text-xs text-gray-700 space-y-1">
            <p><span className="text-gray-400">Page:</span> iSuite AI Business Solutions</p>
            <p><span className="text-gray-400">Webhook URL:</span> https://app.isuite.ai/webhook/meta-leads</p>
            <p><span className="text-gray-400">Speed:</span> Instant auto-greeting in ~3.8 seconds</p>
          </div>

          <button
            onClick={() => alert('Simulated Meta Lead received! Check Unified Inbox to see new lead with AI auto-reply.')}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-2xs"
          >
            Simulate Incoming Meta Lead
          </button>
        </div>
      )}

      {/* New Campaign Modal */}
      {showNewCampaignModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 p-5 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-gray-900 text-base">New WhatsApp Broadcast</h3>
              <button onClick={() => setShowNewCampaignModal(false)} className="text-gray-400 hover:text-gray-600 font-bold">✕</button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const newC = {
                id: `BC-2026-${Math.floor(10 + Math.random() * 90)}`,
                name: 'Weekend Special Notification Campaign',
                template: templates[0].name,
                audience: 'All Active Clients (120)',
                sentCount: 120,
                delivered: '100%',
                read: 'Queued',
                replied: 0,
                date: 'Just now',
                status: 'Completed'
              };
              setCampaigns([newC, ...campaigns]);
              setShowNewCampaignModal(false);
              alert('Broadcast queued and dispatched through WhatsApp Cloud API!');
            }} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Campaign Title</label>
                <input type="text" defaultValue="Weekend Special Notification" className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Select Meta Approved Template</label>
                <select className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs">
                  {templates.map(t => <option key={t.name}>{t.name} ({t.category})</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Target Segment</label>
                <select className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs">
                  <option>All Customers ({customers.length})</option>
                  <option>Due Follow-ups Only</option>
                  <option>Overdue Invoices Only</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2 border-t">
                <button type="button" onClick={() => setShowNewCampaignModal(false)} className="px-4 py-2 rounded-xl text-xs text-gray-600">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700">Dispatch Broadcast</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


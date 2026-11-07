import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, Calendar, Clock, Phone, Building, User, Mail, ShieldCheck } from 'lucide-react';
import { industries } from '../data/industryData';

export default function Modals({
  demoModalOpen,
  trialModalOpen,
  notifyModalOpen,
  policyModalOpen,
  selectedTradeOrIndustry,
  policyTitle,
  onCloseAll,
  onShowToast,
}) {
  // Form states
  const [demoForm, setDemoForm] = useState({
    name: '',
    phone: '',
    email: '',
    industry: selectedTradeOrIndustry || 'clinic',
    preferredTime: 'Morning (10 AM - 1 PM)',
  });

  const [trialForm, setTrialForm] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    industry: selectedTradeOrIndustry || 'clinic',
    language: 'Tamil + Tanglish',
  });

  const [notifyForm, setNotifyForm] = useState({
    businessName: '',
    phone: '',
    email: '',
    trade: selectedTradeOrIndustry || 'Wholesale & Distribution',
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Demo requested! Our product engineer will call ${demoForm.phone} within 15 minutes.`);
    onCloseAll();
  };

  const handleTrialSubmit = (e) => {
    e.preventDefault();
    onShowToast(`🎉 14-Day Free Pilot created for ${trialForm.businessName}! Check your WhatsApp.`);
    onCloseAll();
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    onShowToast(`Subscribed! You will receive VIP early access to ${notifyForm.trade} on WhatsApp.`);
    onCloseAll();
  };

  return (
    <>
      {/* 1. Book Free Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseAll}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>15-Minute Personalized Walkthrough</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-950 mb-2">
              Book Your Free Demo
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              See the exact WhatsApp automation, GST invoicing, and booking engine for your business in action.
            </p>

            <form onSubmit={handleDemoSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={demoForm.name}
                    onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                    placeholder="e.g. Dr. Arul / Rajesh Kumar"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="tel"
                    value={demoForm.phone}
                    onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Select Industry Product</label>
                <select
                  value={demoForm.industry}
                  onChange={(e) => setDemoForm({ ...demoForm, industry: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  {industries.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.name} ({i.tier})
                    </option>
                  ))}
                  <option value="custom">Other / Custom Industry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Time for Demo</label>
                <select
                  value={demoForm.preferredTime}
                  onChange={(e) => setDemoForm({ ...demoForm, preferredTime: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all text-sm"
                >
                  Schedule Guided Demo
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Zero obligation • Meta Cloud Certified setup
              </p>
            </form>
          </div>
        </div>
      )}

      {/* 2. Free Trial Modal */}
      {trialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseAll}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>14-Day Free Pilot • No Credit Card Required</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-950 mb-2">
              Start Your Free iSuite AI Pilot
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Launch your official WhatsApp Business bot in test mode with sample bookings, customer pipeline, and GST billing.
            </p>

            <form onSubmit={handleTrialSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Business / Brand Name</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={trialForm.businessName}
                    onChange={(e) => setTrialForm({ ...trialForm, businessName: e.target.value })}
                    placeholder="e.g. Apex Health Clinic / Urban Fitness"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp Mobile Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="tel"
                    value={trialForm.phone}
                    onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Target Language for AI</label>
                <select
                  value={trialForm.language}
                  onChange={(e) => setTrialForm({ ...trialForm, language: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                >
                  <option value="Tamil + Tanglish">Tamil + Tanglish (தமிழ்)</option>
                  <option value="English">English</option>
                  <option value="Multilingual (Tamil, English, Hindi)">Multilingual (Tamil, English, Hindi)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 transition-all text-sm"
                >
                  Activate My 14-Day Free Pilot
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                Instant WhatsApp bot setup link will be delivered within 30 seconds.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* 3. Notify When Ready Modal */}
      {notifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative">
            <button
              onClick={onCloseAll}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Early Beta Access</span>
            </div>

            <h3 className="text-xl font-bold text-gray-950 mb-2">
              Get Notified: {selectedTradeOrIndustry || 'New Industry'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Be the first to test this trade edition with 50% discount on the first annual subscription.
            </p>

            <form onSubmit={handleNotifySubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Business Name</label>
                <input
                  required
                  type="text"
                  value={notifyForm.businessName}
                  onChange={(e) => setNotifyForm({ ...notifyForm, businessName: e.target.value })}
                  placeholder="e.g. Royal Traders & Distributors"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp Number</label>
                <input
                  required
                  type="tel"
                  value={notifyForm.phone}
                  onChange={(e) => setNotifyForm({ ...notifyForm, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all text-sm"
              >
                Send Me Early Access Alert
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. Policy Details Modal */}
      {policyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={onCloseAll}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-gray-950 mb-4">
              {policyTitle}
            </h3>

            <div className="text-xs sm:text-sm text-gray-600 space-y-4 leading-relaxed">
              {policyTitle === 'Refund & Cancellation' && (
                <>
                  <p>
                    <strong>30-Day Money-Back Guarantee:</strong> At Mktph Techcenter Technologies, we want you to experience genuine operational ROI. If within 30 calendar days of going live with iSuite AI you are not fully satisfied with our software, you are entitled to a 100% refund of your software subscription fees.
                  </p>
                  <p>
                    <strong>Cancellation Process:</strong> Simply send an email to <span className="text-blue-600">info@mktphtech.com</span> or message our support number at <span className="text-blue-600">+91 83203 47712</span> with your account ID. Refunds are credited back to the original UPI/card within 5-7 business days.
                  </p>
                </>
              )}

              {policyTitle === 'Privacy Policy' && (
                <>
                  <p>
                    <strong>Data Privacy & Security:</strong> We respect your customer and patient privacy. All data stored in iSuite AI (including patient records, booking rosters, and customer phone numbers) is encrypted using AES-256 at rest and TLS 1.3 in transit.
                  </p>
                  <p>
                    <strong>Data Ownership:</strong> You retain 100% legal ownership of your customer lists and operational data. We do not sell, rent, or share your contact records with third-party advertising networks.
                  </p>
                </>
              )}

              {policyTitle === 'Terms of Service' && (
                <>
                  <p>
                    <strong>Platform License:</strong> iSuite AI is licensed as a cloud-hosted Software-as-a-Service (SaaS). Subscribers are granted non-exclusive rights to manage business operations for their registered branches.
                  </p>
                  <p>
                    <strong>Meta Cloud API Terms:</strong> Broadcast messaging must comply with WhatsApp Business Messaging Policies regarding spam and opt-in consent.
                  </p>
                </>
              )}

              {policyTitle === 'Shipping & Delivery' && (
                <>
                  <p>
                    <strong>Digital Delivery:</strong> iSuite AI is a digital software product. Account activation, WhatsApp Cloud API provisioning, and administrative access credentials are provided digitally via email and WhatsApp immediately upon payment.
                  </p>
                  <p>
                    Optional hardware scanner accessories (barcode guns, receipt printers) are shipped via express courier within 3-5 business days across India.
                  </p>
                </>
              )}

              {policyTitle === 'Data Deletion Policy' && (
                <>
                  <p>
                    <strong>GDPR & Indian Data Protection Compliance:</strong> Account administrators may request complete deletion of their company tenant and customer records at any time. Upon verified confirmation, all active and backup records are permanently purged within 14 business days.
                  </p>
                </>
              )}

              {policyTitle === 'About Us' && (
                <>
                  <p>
                    <strong>Mktph Techcenter Technologies:</strong> A unit of Mkt Future, based in Madurai, Tamil Nadu. We specialize in vertical enterprise automation, deep AI language models for regional Indian languages, and frictionless WhatsApp commerce.
                  </p>
                  <p>
                    Headquarters: Madurai, Tamil Nadu, India. Contact: info@mktphtech.com | Phone: +91 83203 47712.
                  </p>
                </>
              )}

              {policyTitle === 'Templates' && (
                <>
                  <p>
                    <strong>Pre-Approved WhatsApp Templates:</strong> iSuite AI comes pre-loaded with over 150 Meta-approved utility and marketing templates for appointment confirmation, prescription dispatch, fee dues reminders, site visit booking, and festive greetings.
                  </p>
                </>
              )}

              {policyTitle === 'Free Templates' && (
                <>
                  <p>
                    <strong>Free Industry Prompts & Catalogs:</strong> Access our public library of ready-to-use WhatsApp conversation flows and system prompts for clinics, tuition centers, salons, and sports arenas.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={onCloseAll}
                className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


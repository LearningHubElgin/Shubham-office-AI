import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { brandConfig } from '../data/brandConfig';
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ onNavigateHome, onNavigateRoute, onOpenDemo, onOpenTrial, onOpenPolicyModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trade: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = 'Contact — iSuite AI';
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please enter a valid 10-digit WhatsApp number';
    if (!formData.trade) errs.trade = 'Please select your industry/trade';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Isolated submission handler: ready for backend integration
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#06122e]">
      {/* Header */}
      <Navbar
        onSelectIndustry={(ind) => onNavigateRoute(`/${ind === 'clinic' ? 'clinics' : ind === 'gym' ? 'gyms' : ind === 'salon' ? 'salons' : ind}/`)}
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
        onNavigateHome={onNavigateHome}
      />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-gradient-to-b from-[#001845] via-[#001f5c] to-[#00153d] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rise">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#38bdf8] mb-3">
            CONTACT
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight mb-4">
            Talk to us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto font-normal leading-relaxed">
            Ask a question, or book a free 45-minute demo on your own products. A person from our team replies, usually the same working day.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* Left Column: Direct Contact Info & Cards */}
            <div className="space-y-6 head reveal">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/918220947112"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-600 hover:underline block mb-1"
                    >
                      +91 82209 47112
                    </a>
                    <p className="text-xs text-slate-500">The quickest way to reach us, and to book a demo.</p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Call</h3>
                    <a
                      href="tel:+918220947112"
                      className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors block mb-1"
                    >
                      +91 82209 47112
                    </a>
                    <p className="text-xs text-slate-500">For sales and for help with your account.</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@mntfuture.com"
                      className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors block mb-1"
                    >
                      info@mntfuture.com
                    </a>
                    <p className="text-xs text-slate-500">For billing, invoices and anything in writing.</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Where we are</h3>
                    <p className="font-semibold text-slate-800">Magizh NexGen Technologies</p>
                    <p>3/501, Subash Street, Muneeswarar Nagar, Iyer Bungalow</p>
                    <p>Madurai - 625014, Tamil Nadu, India</p>
                    <p className="text-slate-500 pt-1">GSTIN: 33EACPR6502N1ZH</p>
                  </div>
                </div>

              </div>

              {/* Already a customer info box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 leading-relaxed">
                <span className="font-bold text-slate-800 block mb-1">Already a customer?</span>
                Sign in at <a href="https://app.isuite.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">app.isuite.ai</a>. For help with your account, message us on WhatsApp from the number your company registered, or write to info@mntfuture.com.
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs reveal">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-slate-900">Thank you!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We received your message. A member of our team will reach out to you on WhatsApp shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', trade: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#001d55] text-white text-xs font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Send us a message</h2>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-blue-600'
                      }`}
                    />
                    {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-blue-600'
                      }`}
                    />
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Business / Trade *</label>
                    <select
                      value={formData.trade}
                      onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${
                        errors.trade ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-blue-600'
                      }`}
                    >
                      <option value="">Select your trade</option>
                      <option value="Clinic">Clinic / Diagnostic Lab</option>
                      <option value="Coaching">Coaching Institute / Tuition</option>
                      <option value="Real Estate">Real Estate / Builder</option>
                      <option value="Gym">Gym / Fitness Studio</option>
                      <option value="Salon">Salon & Spa / Parlour</option>
                      <option value="Field Service">Field Service & AMC</option>
                      <option value="Turf">Turf / Sports Ground</option>
                      <option value="Other">Other Business</option>
                    </select>
                    {errors.trade && <p className="text-rose-500 text-xs mt-1">{errors.trade}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message / Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business or what you'd like to see in a demo..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#001d55] hover:bg-[#002773] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer
        onSelectIndustry={(ind) => onNavigateRoute(`/${ind === 'clinic' ? 'clinics' : ind === 'gym' ? 'gyms' : ind === 'salon' ? 'salons' : ind}/`)}
        onOpenDemo={onOpenDemo}
        onOpenPolicyModal={onOpenPolicyModal}
      />
    </div>
  );
}


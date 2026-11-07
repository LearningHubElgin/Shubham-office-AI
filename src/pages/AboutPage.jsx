import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { brandConfig } from '../data/brandConfig';
import { Shield, Sparkles, Heart, Building2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function AboutPage({ onNavigateHome, onNavigateRoute, onOpenDemo, onOpenTrial, onOpenPolicyModal }) {
  useEffect(() => {
    document.title = 'About iSuite AI – MnT Future, Software Company in Madurai';
    window.scrollTo(0, 0);
  }, []);

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
            ABOUT
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-tight mb-5">
            Built in Madurai, for how India sells
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
            iSuite AI is made by MnT Future (Magizh NexGen Technologies), a technology company in Madurai, Tamil Nadu. We build it for the businesses around us — the clinics, coaching institutes, builders, gyms, salons, service companies and turfs that talk to their customers on WhatsApp every day.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section: Why we built it */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs head reveal space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#06122e] tracking-tight">
              Why we built it
            </h2>
            <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              <p>
                Indian customers message before they buy. They ask the price at 10 at night, send a voice note in Tanglish, and buy from whoever answers first. Most businesses answer when someone is free, keep leads on three phones and a notebook, and forget to follow up.
              </p>
              <p>
                The software meant to help usually does one part of the job — a broadcast tool, a chatbot with menus, or a sales tool built for another country. So we built one system for the whole business behind the conversation — it answers, books, bills, collects and follows up, in the customer’s own language, with ₹ and GST from the start.
              </p>
              <p>
                Then we made it fit each trade. A clinic needs doctors’ diaries, prescriptions and reminders; an institute, batches, attendance and fees in instalments; a builder, every flat on one board and a booking amount that books it; a gym, check-ins, renewals and PT packs; a salon, a front desk by stylist and each stylist’s commission; a service company, a jobs board, technicians billing on the spot and maintenance contracts; a turf, a court board by the hour, peak prices and regular teams.
              </p>
              <p className="pt-2 text-slate-800 font-medium">
                So iSuite AI is not one generic tool but a product for each: <a href="/clinics/" className="text-blue-600 underline">iSuite AI – Clinic</a>, <a href="/coaching/" className="text-blue-600 underline">iSuite AI – Coaching Institute</a>, <a href="/real-estate/" className="text-blue-600 underline">iSuite AI – Real Estate</a>, <a href="/gyms/" className="text-blue-600 underline">iSuite AI – Gym & Fitness Studio</a>, <a href="/salons/" className="text-blue-600 underline">iSuite AI – Salon & Spa</a>, <a href="/field-service/" className="text-blue-600 underline">iSuite AI – Field Service & AMC</a> and <a href="/turf/" className="text-blue-600 underline">iSuite AI – Turf</a> — each the whole system for its business, with its own words, setup and rules, on one platform underneath.
              </p>
            </div>
          </div>

          {/* Section: What we believe */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs head reveal space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#06122e] tracking-tight">
              What we believe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Immediate Answers</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Every customer deserves an answer, even when the shop is closed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Simplicity</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Software is only useful if your team actually uses it, so iSuite AI is simple, and works on the phone.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-purple-600 font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Responsible AI</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  AI should know when to ask. Ours checks with you before it guesses, and hands over to a person when needed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Data Sovereignty</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Your data is yours. It stays in India, and we never sell it.
                </p>
              </div>
            </div>
          </div>

          {/* Section: The company */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs head reveal space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#06122e] tracking-tight">
              The company
            </h2>
            <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              <p>
                MnT Future was founded by{' '}
                <a
                  href="https://www.linkedin.com/in/udhayaseelan-renganathan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Udhayaseelan Renganathan</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                , who leads iSuite AI from Madurai.
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-[13px] space-y-2.5">
                <p className="font-bold text-slate-900 text-sm">Magizh NexGen Technologies</p>
                <p className="text-slate-600">
                  3/501, Subash Street, Muneeswarar Nagar, Iyer Bungalow, Madurai - 625014, Tamil Nadu, India
                </p>
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-800">GSTIN:</span> 33EACPR6502N1ZH
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-slate-700">
                  <a href="tel:+918220947112" className="hover:text-blue-600 transition-colors">
                    +91 82209 47112
                  </a>
                  <span>·</span>
                  <a href="mailto:info@mntfuture.com" className="hover:text-blue-600 transition-colors">
                    info@mntfuture.com
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-500 pt-2">
                MnT Future’s own website is{' '}
                <a href="https://mntfuture.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  mntfuture.com
                </a>
                . iSuite AI is not iSuite ERP or aisuite, and is not connected with either.
              </p>
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


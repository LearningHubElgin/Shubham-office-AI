import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { templatesList } from '../data/templatesData';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function TemplatesIndexPage({ onNavigateRoute, onNavigateHome, onOpenDemo, onOpenTrial }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Free Templates for Indian Businesses | Karttik AI';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Free business message and letter templates for Indian businesses: fee reminders, builder demand letters, AMC contracts in English, Tamil, Tanglish and Hindi.';
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#06122e] font-sans selection:bg-[#001d55] selection:text-white flex flex-col">
      <Navbar
        variant="light"
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
        onNavigateHome={onNavigateHome}
        onNavigateRoute={onNavigateRoute}
        onSelectIndustry={(ind) => onNavigateRoute && onNavigateRoute(`/${ind}/`)}
      />

      <main className="flex-1 pt-24 sm:pt-32 pb-20">
        {/* Page Hero */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16 text-center">
          <div className="max-w-3xl mx-auto head">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#001d55] mb-2.5">
              Free templates
            </p>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.08] text-balance mb-4">
              Free templates for Indian businesses
            </h1>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#475569] leading-relaxed font-normal">
              Messages and formats the trades we build for use every day — fee reminders, demand letters, maintenance
              contracts and more — written for India, in English, Tamil, Tanglish and Hindi. Copy them, change the details and
              use them; you do not need Karttik AI for any of them.
            </p>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {templatesList.map((tpl) => (
              <a
                key={tpl.slug}
                href={`/templates/${tpl.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateRoute(`/templates/${tpl.slug}/`);
                }}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Free template
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {tpl.badge}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#06122e] tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {tpl.shortTitle}
                  </h2>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-6">
                    {tpl.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                  <span>View templates</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer onSelectIndustry={(ind) => onNavigateRoute && onNavigateRoute(`/${ind}/`)} />
    </div>
  );
}


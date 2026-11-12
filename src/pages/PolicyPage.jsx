import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { policyData } from '../data/policyData';

export default function PolicyPage({ slug, onNavigateRoute, onNavigateHome, onOpenDemo, onOpenTrial }) {
  const policy = policyData[slug] || policyData['terms'];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${policy.title} | Karttik AI`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `${policy.title} for Karttik AI by LearningHub Software Solution.`;
  }, [policy, slug]);

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

      <main className="flex-1 pt-24 sm:pt-32 pb-24">
        {/* Page Hero */}
        <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-left">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#001d55] mb-2.5">
            Policies
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.1] text-balance">
            {policy.title}
          </h1>
        </section>

        {/* Prose Article */}
        <section className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs prose-content"
            dangerouslySetInnerHTML={{ __html: policy.html }}
          />
        </section>
      </main>

      <Footer onSelectIndustry={(ind) => onNavigateRoute && onNavigateRoute(`/${ind}/`)} />
    </div>
  );
}


import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContentPage({
  title,
  metaDescription,
  eyebrow,
  heading,
  lead,
  activePage = '',
  wideContent,
  onNavigateHome,
  onNavigateRoute,
  onOpenDemo,
  onOpenTrial,
  onOpenPolicyModal,
  jsonLd,
  children
}) {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = metaDescription;
    }

    // JSON-LD
    let scriptTag = null;
    if (jsonLd) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, metaDescription, jsonLd]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#06122e] flex flex-col font-sans">
      {/* Skip to content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded-md focus:shadow-md"
      >
        Skip to content
      </a>

      {/* Topbar: on-light variant */}
      <Navbar
        variant="light"
        activePage={activePage}
        onNavigateHome={onNavigateHome}
        onNavigateRoute={onNavigateRoute}
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
      />

      {/* Main Content Area */}
      <main id="main" className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Page Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-[860px] mx-auto text-center rise">
          {eyebrow && (
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#1663ff] mb-3">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-medium tracking-[-0.03em] leading-[1.08] text-[#06122e] text-balance">
              {heading}
            </h1>
          )}
          {lead && (
            <p className="mt-4 text-[17px] sm:text-[19px] md:text-[21px] leading-[1.45] text-[#596780] font-normal">
              {lead}
            </p>
          )}
        </section>

        {/* Wide Content (e.g. Contact Cards Grid) */}
        {wideContent && (
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto mt-10 sm:mt-14">
            {wideContent}
          </div>
        )}

        {/* Prose Section */}
        {children && (
          <section className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
            <div className="max-w-[760px] mx-auto text-[16px] sm:text-[17px] leading-[1.7] text-[#202c45] reveal in">
              {children}
            </div>
          </section>
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
        onOpenPolicyModal={onOpenPolicyModal}
        onNavigateRoute={onNavigateRoute}
      />
    </div>
  );
}


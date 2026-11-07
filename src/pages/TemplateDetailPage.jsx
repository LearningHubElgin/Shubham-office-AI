import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { templatesList, templatesContent } from '../data/templatesData';
import { Copy, Check, ArrowLeft, ArrowRight, FileText } from 'lucide-react';

export default function TemplateDetailPage({ slug, onNavigateRoute, onNavigateHome, onOpenDemo, onOpenTrial }) {
  const [copiedId, setCopiedId] = useState(null);

  const meta = templatesList.find((t) => t.slug === slug) || templatesList[0];
  const content = templatesContent[slug] || templatesContent[meta.slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${meta.title} | iSuite AI`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = meta.metaDescription || meta.description;
  }, [meta, slug]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((current) => (current === id ? null : current));
    }, 2500);
  };

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
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <button
            onClick={() => onNavigateRoute('/templates/')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#06122e] transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All templates</span>
          </button>

          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Free template
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">
                Updated {meta.updatedDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#06122e] leading-[1.12] mb-5">
              {content.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {content.intro}
            </p>
          </div>

          {/* Template Copy Blocks */}
          <div className="space-y-8 sm:space-y-10">
            {content.blocks.map((block) => (
              <div 
                key={block.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden"
              >
                {/* Block header */}
                <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-200/80 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      {block.title}
                    </h2>
                    {block.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        {block.subtitle}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopy(block.id, block.text)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-slate-300 shadow-2xs transition-all cursor-pointer shrink-0"
                  >
                    {copiedId === block.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-7">
                  <pre className="font-mono text-xs sm:text-[13px] text-slate-800 leading-relaxed whitespace-pre-wrap bg-[#f8fafc] p-4 sm:p-5 rounded-2xl border border-slate-200/60 overflow-x-auto">
                    {block.text}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Product CTA Card */}
          {meta.productRoute && (
            <div className="mt-14 sm:mt-18 bg-[#001845] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-amber-300 block mb-2">
                  Automate these messages
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  {meta.productName}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed">
                  Send these messages and documents on WhatsApp automatically on schedule, with client replies answered 24/7.
                </p>
              </div>
              <button
                onClick={() => onNavigateRoute(meta.productRoute)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md shrink-0 cursor-pointer"
              >
                <span>Explore product</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer onSelectIndustry={(ind) => onNavigateRoute && onNavigateRoute(`/${ind}/`)} />
    </div>
  );
}


import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Home, Building2, Stethoscope, GraduationCap } from 'lucide-react';

export default function NotFoundPage({ onNavigateHome, onNavigateRoute, onOpenDemo, onOpenTrial }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '404 - Page Not Found | Karttik AI';
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

      <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-blue-50 text-[#001d55] text-2xl font-black mb-6">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#06122e] mb-3">
            Page not found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved. Explore our trade products below or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#001d55] hover:bg-[#002b80] transition-colors shadow-md cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={() => onNavigateRoute('/pricing/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-xs cursor-pointer"
            >
              <span>View Pricing</span>
            </button>
          </div>
        </div>
      </main>

      <Footer onSelectIndustry={(ind) => onNavigateRoute && onNavigateRoute(`/${ind}/`)} />
    </div>
  );
}


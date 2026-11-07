import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustryPreview from './components/IndustryPreview';
import ComingSoon from './components/ComingSoon';
import CoreFeatures from './components/CoreFeatures';
import ComparisonMatrix from './components/ComparisonMatrix';
import AIShowcase from './components/AIShowcase';
import WorkflowSteps from './components/WorkflowSteps';
import FAQSection from './components/FAQSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import Modals from './components/Modals';
import ClinicPage from './pages/ClinicPage';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('/clinics') || hash.includes('/clinics')) {
      return 'clinics';
    }
    return 'home';
  });

  const [activeIndustryId, setActiveIndustryId] = useState('clinic');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState('');
  const [selectedTradeOrIndustry, setSelectedTradeOrIndustry] = useState('');
  
  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const onLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/clinics') || hash.includes('/clinics')) {
        setCurrentRoute('clinics');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
    };
  }, []);

  const navigateToClinics = () => {
    setCurrentRoute('clinics');
    window.history.pushState({}, '', '/clinics/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentRoute('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSelectIndustry = (industryId) => {
    if (industryId === 'clinic') {
      navigateToClinics();
      return;
    }
    setActiveIndustryId(industryId);
    if (currentRoute !== 'home') {
      setCurrentRoute('home');
      window.history.pushState({}, '', '/');
    }
    const element = document.getElementById('preview-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (industryOrFeature) => {
    setSelectedTradeOrIndustry(industryOrFeature || (currentRoute === 'clinics' ? 'Clinic' : activeIndustryId));
    setDemoModalOpen(true);
  };

  const handleOpenTrial = (industry) => {
    setSelectedTradeOrIndustry(industry || (currentRoute === 'clinics' ? 'Clinic' : activeIndustryId));
    setTrialModalOpen(true);
  };

  const handleNotifyTrade = (tradeName) => {
    setSelectedTradeOrIndustry(tradeName);
    setNotifyModalOpen(true);
  };

  const handleOpenPolicyModal = (title) => {
    setPolicyTitle(title);
    setPolicyModalOpen(true);
  };

  const handleCloseAllModals = () => {
    setDemoModalOpen(false);
    setTrialModalOpen(false);
    setNotifyModalOpen(false);
    setPolicyModalOpen(false);
  };

  const scrollToIndustries = () => {
    if (currentRoute !== 'home') {
      setCurrentRoute('home');
      window.history.pushState({}, '', '/');
    }
    setTimeout(() => {
      const el = document.getElementById('products-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="top" className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans relative selection:bg-blue-600 selection:text-white">
      {currentRoute === 'clinics' ? (
        /* Dedicated Clinic Page matching isuite.ai/clinics/ */
        <ClinicPage
          onOpenDemo={handleOpenDemo}
          onOpenTrial={handleOpenTrial}
          onNavigateHome={navigateToHome}
        />
      ) : (
        /* Main Landing Page */
        <>
          {/* 1. Sticky Navigation Bar */}
          <Navbar
            onOpenDemo={() => handleOpenDemo()}
            onOpenTrial={() => handleOpenTrial()}
            onSelectIndustry={handleSelectIndustry}
          />

          {/* 2. Hero Section */}
          <Hero
            onSelectIndustry={handleSelectIndustry}
          />

          {/* 3. Dynamic Industry Preview Section */}
          <IndustryPreview
            activeIndustryId={activeIndustryId}
            onSelectIndustry={setActiveIndustryId}
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
          />

          {/* 4. Coming Soon Trades Grid */}
          <ComingSoon onNotifyTrade={handleNotifyTrade} />

          {/* 5. Core Feature Grid */}
          <CoreFeatures onOpenDemo={handleOpenDemo} />

          {/* 6. Comprehensive Industry Breakdown Matrix / Comparison Table */}
          <ComparisonMatrix
            onSelectIndustry={handleSelectIndustry}
            onOpenDemo={handleOpenDemo}
          />

          {/* 7. AI Capabilities Showcase */}
          <AIShowcase onOpenDemo={handleOpenDemo} />

          {/* 8. "Live in three steps" Workflow */}
          <WorkflowSteps
            onOpenDemo={() => handleOpenDemo()}
            onOpenTrial={() => handleOpenTrial()}
          />

          {/* 9. FAQ Accordion Section */}
          <FAQSection />

          {/* 10. Call to Action Banner & Comprehensive Footer */}
          <CTABanner
            onOpenDemo={() => handleOpenDemo()}
            onFindProduct={scrollToIndustries}
          />

          <Footer
            onSelectIndustry={handleSelectIndustry}
            onOpenDemo={handleOpenDemo}
            onOpenPolicyModal={handleOpenPolicyModal}
          />
        </>
      )}

      {/* Modals & Dialogs */}
      <Modals
        demoModalOpen={demoModalOpen}
        trialModalOpen={trialModalOpen}
        notifyModalOpen={notifyModalOpen}
        policyModalOpen={policyModalOpen}
        selectedTradeOrIndustry={selectedTradeOrIndustry}
        policyTitle={policyTitle}
        onCloseAll={handleCloseAllModals}
        onShowToast={showToast}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 max-w-md bg-[#0b0f19] text-white p-4 rounded-xl shadow-2xl border border-blue-500/40 flex items-center gap-3 animate-slideUp">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-xs sm:text-sm font-medium leading-relaxed">
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
}

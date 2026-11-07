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

// Product pages
import ClinicPage from './pages/ClinicPage';
import CoachingPage from './pages/CoachingPage';
import RealEstatePage from './pages/RealEstatePage';
import GymPage from './pages/GymPage';
import SalonPage from './pages/SalonPage';
import FieldServicePage from './pages/FieldServicePage';
import TurfPage from './pages/TurfPage';

// Core pages
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TemplatesIndexPage from './pages/TemplatesIndexPage';
import TemplateDetailPage from './pages/TemplateDetailPage';
import PolicyPage from './pages/PolicyPage';
import NotFoundPage from './pages/NotFoundPage';

import { CheckCircle2 } from 'lucide-react';
import { brandConfig } from './data/brandConfig';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const getRouteFromUrl = () => {
    const rawPath = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    
    // Normalize path to have trailing slash if not root
    const path = rawPath.replace(/\/$/, '') + '/';

    // 1. Core Home
    if (rawPath === '' || rawPath === '/') {
      return { name: 'home' };
    }

    // 2. Product Pages
    if (path.startsWith('/clinics/') || path.startsWith('/clinic/')) {
      return { name: 'clinics' };
    }
    if (path.startsWith('/coaching/')) {
      return { name: 'coaching' };
    }
    if (path.startsWith('/real-estate/')) {
      return { name: 'real-estate' };
    }
    if (path.startsWith('/gyms/') || path.startsWith('/gym/')) {
      return { name: 'gyms' };
    }
    if (path.startsWith('/salons/') || path.startsWith('/salon/')) {
      return { name: 'salons' };
    }
    if (path.startsWith('/field-service/')) {
      return { name: 'field-service' };
    }
    if (path.startsWith('/turf/')) {
      return { name: 'turf' };
    }

    // 3. Core Pages
    if (path.startsWith('/pricing/')) {
      return { name: 'pricing' };
    }
    if (path.startsWith('/about/')) {
      return { name: 'about' };
    }
    if (path.startsWith('/contact/')) {
      return { name: 'contact' };
    }

    // 4. Templates
    if (path === '/templates/') {
      return { name: 'templates' };
    }
    if (path.startsWith('/templates/')) {
      const slug = rawPath.replace(/^\/templates\//, '').replace(/\/$/, '');
      return { name: 'template-detail', slug };
    }

    // 5. Policy Pages
    if (path.startsWith('/terms/')) {
      return { name: 'policy', slug: 'terms' };
    }
    if (path.startsWith('/privacy/')) {
      return { name: 'policy', slug: 'privacy' };
    }
    if (path.startsWith('/refund-policy/')) {
      return { name: 'policy', slug: 'refund-policy' };
    }
    if (path.startsWith('/shipping-policy/')) {
      return { name: 'policy', slug: 'shipping-policy' };
    }
    if (path.startsWith('/data-deletion/')) {
      return { name: 'policy', slug: 'data-deletion' };
    }

    return { name: 'not-found' };
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromUrl);
  const [activeIndustryId, setActiveIndustryId] = useState('clinic');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState('');
  const [selectedTradeOrIndustry, setSelectedTradeOrIndustry] = useState('');
  
  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize smooth scroll-reveal observer across all routes
  useScrollReveal([currentRoute.name, currentRoute.slug]);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentRoute(getRouteFromUrl());
    };

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
    };
  }, []);

  // Handle hash scrolling on page navigation or initial load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [currentRoute]);

  const navigateToRoute = (route) => {
    window.history.pushState({}, '', route);
    setCurrentRoute(getRouteFromUrl());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => navigateToRoute('/');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSelectIndustry = (industryId) => {
    const routeMap = {
      clinic: '/clinics/',
      coaching: '/coaching/',
      'real-estate': '/real-estate/',
      gym: '/gyms/',
      salon: '/salons/',
      'field-service': '/field-service/',
      turf: '/turf/',
    };

    if (routeMap[industryId]) {
      navigateToRoute(routeMap[industryId]);
      return;
    }
    
    // For other industries, show the preview tab on the home page
    setActiveIndustryId(industryId);
    if (currentRoute.name !== 'home') {
      navigateToHome();
    }
    setTimeout(() => {
      const element = document.getElementById('preview-section') || document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleOpenDemo = (industryOrFeature) => {
    setSelectedTradeOrIndustry(
      industryOrFeature || 
      (currentRoute.name === 'coaching' ? 'Coaching Institute' : currentRoute.name === 'clinics' ? 'Clinic' : activeIndustryId)
    );
    setDemoModalOpen(true);
  };

  const handleOpenTrial = (industry) => {
    setSelectedTradeOrIndustry(
      industry || 
      (currentRoute.name === 'coaching' ? 'Coaching Institute' : currentRoute.name === 'clinics' ? 'Clinic' : activeIndustryId)
    );
    setTrialModalOpen(true);
  };

  const handleNotifyTrade = (tradeName) => {
    setSelectedTradeOrIndustry(tradeName);
    setNotifyModalOpen(true);
  };

  const handleOpenPolicyModal = (title) => {
    const slugMap = {
      'Terms and Conditions': '/terms/',
      'Privacy Policy': '/privacy/',
      'Refund Policy': '/refund-policy/',
      'Shipping Policy': '/shipping-policy/',
      'Data Deletion': '/data-deletion/',
    };
    if (slugMap[title]) {
      navigateToRoute(slugMap[title]);
    } else {
      setPolicyTitle(title);
      setPolicyModalOpen(true);
    }
  };

  const handleCloseAllModals = () => {
    setDemoModalOpen(false);
    setTrialModalOpen(false);
    setNotifyModalOpen(false);
    setPolicyModalOpen(false);
  };

  const scrollToIndustries = () => {
    if (currentRoute.name !== 'home') {
      navigateToHome();
    }
    setTimeout(() => {
      const el = document.getElementById('products') || document.getElementById('products-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Render active route
  const renderRoute = () => {
    switch (currentRoute.name) {
      // Products
      case 'clinics':
        return (
          <ClinicPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'coaching':
        return (
          <CoachingPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'real-estate':
        return (
          <RealEstatePage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'gyms':
        return (
          <GymPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'salons':
        return (
          <SalonPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'field-service':
        return (
          <FieldServicePage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'turf':
        return (
          <TurfPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );

      // Core Pages
      case 'pricing':
        return (
          <PricingPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );

      // Templates
      case 'templates':
        return (
          <TemplatesIndexPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );
      case 'template-detail':
        return (
          <TemplateDetailPage
            slug={currentRoute.slug}
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );

      // Policies
      case 'policy':
        return (
          <PolicyPage
            slug={currentRoute.slug}
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );

      case 'not-found':
        return (
          <NotFoundPage
            onOpenDemo={handleOpenDemo}
            onOpenTrial={handleOpenTrial}
            onNavigateHome={navigateToHome}
            onNavigateRoute={navigateToRoute}
          />
        );

      // Default: Landing Page (home)
      case 'home':
      default:
        return (
          <>
            {/* 1. Sticky Navigation Bar */}
            <Navbar
              onOpenDemo={() => handleOpenDemo()}
              onOpenTrial={() => handleOpenTrial()}
              onSelectIndustry={handleSelectIndustry}
              onNavigateRoute={navigateToRoute}
            />

            {/* 2. Hero Section */}
            <Hero
              onSelectIndustry={handleSelectIndustry}
            />

            {/* 3. Dynamic Industry Preview Section */}
            <IndustryPreview
              activeIndustryId={activeIndustryId}
              onSelectIndustry={handleSelectIndustry}
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
        );
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans relative selection:bg-blue-600 selection:text-white">
      {renderRoute()}

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

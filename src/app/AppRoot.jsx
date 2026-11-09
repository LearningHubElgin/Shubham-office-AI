import React, { useState, useEffect } from 'react';
import { AppProvider, useAppStore } from './store/appStore';
import DemoRibbon from './components/DemoRibbon';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MobileBottomNav from './components/MobileBottomNav';
import CommandPalette from './components/CommandPalette';
import QuickNewModal from './components/QuickNewModal';

// Pages
import AppLoginPage from './pages/AppLoginPage';
import AppSignupPage from './pages/AppSignupPage';
import DashboardPage from './pages/DashboardPage';
import InboxPage from './pages/InboxPage';
import CustomersPage from './pages/CustomersPage';
import PipelinePage from './pages/PipelinePage';
import FollowUpsPage from './pages/FollowUpsPage';
import BookingsPage from './pages/BookingsPage';
import PaymentsPage from './pages/PaymentsPage';
import DocumentsPage from './pages/DocumentsPage';
import IndustryModulePage from './pages/IndustryModulePage';
import AIStudioPage from './pages/AIStudioPage';
import MarketingPage from './pages/MarketingPage';
import CallsPage from './pages/CallsPage';
import TeamPage from './pages/TeamPage';
import SettingsPage from './pages/SettingsPage';

function AppContent({ initialSubRoute = 'dashboard' }) {
  const { isLoggedIn, activeTab, setState } = useAppStore();
  
  // Parse sub-page from window path or state
  const getSubRouteFromPath = () => {
    const p = window.location.pathname.toLowerCase();
    if (p.includes('/app/login')) return 'login';
    if (p.includes('/app/signup')) return 'signup';
    if (p.includes('/app/inbox')) return 'inbox';
    if (p.includes('/app/customers')) return 'customers';
    if (p.includes('/app/pipeline')) return 'pipeline';
    if (p.includes('/app/follow-ups')) return 'follow-ups';
    if (p.includes('/app/bookings')) return 'bookings';
    if (p.includes('/app/payments')) return 'payments';
    if (p.includes('/app/invoices') || p.includes('/app/documents')) return 'invoices';
    if (p.includes('/app/industry')) return 'industry';
    if (p.includes('/app/ai-studio')) return 'ai-studio';
    if (p.includes('/app/marketing')) return 'marketing';
    if (p.includes('/app/calls')) return 'calls';
    if (p.includes('/app/team')) return 'team';
    if (p.includes('/app/settings')) return 'settings';
    return initialSubRoute || 'dashboard';
  };

  const [currentTab, setCurrentTab] = useState(getSubRouteFromPath);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [quickNewModal, setQuickNewModal] = useState({ open: false, mode: 'customer' });

  // Sync route on popstate
  useEffect(() => {
    const handlePop = () => {
      setCurrentTab(getSubRouteFromPath());
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navigateTo = (tab) => {
    setCurrentTab(tab);
    const targetUrl = tab === 'dashboard' ? '/app/' : `/app/${tab}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If explicitly on login, or not logged in and not on signup, show Login
  if ((!isLoggedIn || currentTab === 'login') && currentTab !== 'signup') {
    return (
      <AppLoginPage
        onNavigateToApp={(target) => navigateTo(target || 'dashboard')}
        onNavigateToSignup={() => navigateTo('signup')}
      />
    );
  }

  // Signup / Start Free Trial Wizard
  if (currentTab === 'signup') {
    return (
      <AppSignupPage
        onNavigateToApp={(target) => navigateTo(target || 'dashboard')}
        onNavigateToLogin={() => navigateTo('login')}
      />
    );
  }

  // Active page renderer inside shell
  const renderPage = () => {
    switch (currentTab) {
      case 'inbox':
        return <InboxPage />;
      case 'customers':
        return <CustomersPage />;
      case 'pipeline':
        return <PipelinePage />;
      case 'follow-ups':
        return <FollowUpsPage />;
      case 'bookings':
        return <BookingsPage />;
      case 'payments':
        return <PaymentsPage />;
      case 'invoices':
        return <DocumentsPage />;
      case 'industry':
        return <IndustryModulePage />;
      case 'ai-studio':
        return <AIStudioPage />;
      case 'marketing':
        return <MarketingPage />;
      case 'calls':
        return <CallsPage />;
      case 'team':
        return <TeamPage />;
      case 'settings':
        return <SettingsPage />;
      case 'dashboard':
      default:
        return <DashboardPage onNavigate={navigateTo} onNavigateTab={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex flex-col font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Global Demo Notice Ribbon */}
      <DemoRibbon />

      <div className="flex flex-1 relative overflow-hidden">
        {/* 2. Desktop Collapsible Sidebar */}
        <Sidebar
          currentRoute={currentTab}
          currentTab={currentTab}
          onNavigate={navigateTo}
          onSelectTab={navigateTo}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* 3. Main Workspace Viewport */}
        <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
          {/* Top Bar */}
          <TopBar
            onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            onOpenQuickNew={(mode) => setQuickNewModal({ open: true, mode: mode || 'customer' })}
            onNavigate={navigateTo}
            onNavigateTab={navigateTo}
          />

          {/* Page Container */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-in fade-in duration-200">
            {renderPage()}
          </main>
        </div>
      </div>

      {/* 4. Mobile Bottom Navigation */}
      <MobileBottomNav
        currentRoute={currentTab}
        currentTab={currentTab}
        onNavigate={navigateTo}
        onSelectTab={navigateTo}
      />

      {/* 5. ⌘K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={navigateTo}
        onSelectRoute={navigateTo}
      />

      {/* 6. Quick "+ New" Creation Modal */}
      <QuickNewModal
        isOpen={quickNewModal.open}
        mode={quickNewModal.mode || 'customer'}
        onClose={() => setQuickNewModal({ open: false, mode: 'customer' })}
        onSuccess={() => {}}
      />
    </div>
  );
}

export default function AppRoot({ initialSubRoute }) {
  return (
    <AppProvider>
      <AppContent initialSubRoute={initialSubRoute} />
    </AppProvider>
  );
}


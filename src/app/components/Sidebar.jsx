import React, { useState } from 'react';
import {
  LayoutDashboard,
  Inbox,
  Users,
  Kanban,
  CheckSquare,
  Calendar,
  CreditCard,
  FileText,
  Sparkles,
  Megaphone,
  PhoneCall,
  UserCheck,
  Settings,
  ChevronLeft,
  ChevronRight,
  Lock,
  Layers,
  Activity,
  Briefcase
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig } from '../industryConfig';

export default function Sidebar({
  currentRoute,
  currentTab,
  onNavigate,
  onSelectTab,
  isMobileOpen,
  onCloseMobile,
  collapsed: externalCollapsed,
  onToggleCollapse
}) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const collapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const toggleCollapse = onToggleCollapse || (() => setInternalCollapsed(!internalCollapsed));

  const activeRoute = currentRoute || currentTab || 'dashboard';
  const handleNav = (tabId) => {
    if (typeof onNavigate === 'function') {
      onNavigate(tabId);
    } else if (typeof onSelectTab === 'function') {
      onSelectTab(tabId);
    }
  };

  const { workspace, currentConfig, switchIndustry, switchPlan } = useAppStore();

  const isGrowth = workspace.plan === 'growth';

  const menuSections = [
    {
      title: 'CORE',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/app/' },
        { id: 'inbox', label: 'Unified Inbox', icon: Inbox, badge: '2', path: '/app/inbox' },
        { id: 'customers', label: currentConfig.customerPlural, icon: Users, path: '/app/customers' },
        { id: 'pipeline', label: 'Sales Pipeline', icon: Kanban, path: '/app/pipeline' },
        { id: 'follow-ups', label: 'Follow-ups', icon: CheckSquare, badge: '5', path: '/app/follow-ups' },
      ],
    },
    {
      title: 'OPERATIONS',
      items: [
        { id: 'bookings', label: 'Bookings & Calendar', icon: Calendar, path: '/app/bookings' },
        { id: 'payments', label: 'Payments & UPI', icon: CreditCard, path: '/app/payments' },
        { id: 'invoices', label: 'Quotations & Invoices', icon: FileText, path: '/app/invoices' },
      ],
    },
    {
      title: 'TRADE SPECIFIC',
      items: [
        {
          id: 'industry',
          label: currentConfig.sidebarCustomLabel,
          icon: Activity,
          highlight: true,
          path: '/app/industry',
        },
      ],
    },
    {
      title: 'GROWTH & AUTOMATION',
      items: [
        {
          id: 'ai-studio',
          label: 'AI Agent Studio',
          icon: Sparkles,
          growthOnly: workspace.industry === 'salon' || workspace.industry === 'field-service',
          path: '/app/ai-studio',
        },
        { id: 'marketing', label: 'Broadcasts & Meta Ads', icon: Megaphone, path: '/app/marketing' },
        { id: 'calls', label: 'iSuite Phone Calls', icon: PhoneCall, path: '/app/calls' },
        { id: 'team', label: 'Team & Roles', icon: UserCheck, path: '/app/team' },
        { id: 'settings', label: 'Workspace Settings', icon: Settings, path: '/app/settings' },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen bg-[#001744] text-white flex flex-col transition-all duration-300 border-r border-blue-900/40 select-none ${
          collapsed ? 'w-20' : 'w-64'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <img src="/logo-white-wordmark.png" alt="iSuite AI" className="h-6 w-auto object-contain shrink-0" />
            {!collapsed && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 truncate">
                {currentConfig.name.split(' ')[0]}
              </span>
            )}
          </div>

          <button
            onClick={toggleCollapse}
            className="hidden lg:flex p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 no-scrollbar">
          {menuSections.map((sec, idx) => (
            <div key={idx} className="space-y-1">
              {!collapsed && (
                <div className="px-3 text-[10px] font-bold tracking-[0.16em] uppercase text-blue-300/60 mb-2">
                  {sec.title}
                </div>
              )}

              {sec.items.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeRoute === item.id;
                const isLocked = item.growthOnly && !isGrowth;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNav(item.id);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                        : 'text-white/80 hover:bg-white/8 hover:text-white'
                    } ${item.highlight && !isActive ? 'bg-blue-500/10 text-blue-300 border border-blue-400/20' : ''}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <IconComponent
                        className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-white' : item.highlight ? 'text-blue-300' : 'text-blue-200/80'
                        }`}
                      />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </div>

                    {!collapsed && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge && (
                          <span className="px-1.5 py-0.5 rounded-full bg-blue-500/40 text-blue-100 text-[10px] font-bold">
                            {item.badge}
                          </span>
                        )}
                        {isLocked && (
                          <span className="flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                            <Lock className="w-2.5 h-2.5" /> Growth
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer Tenant Switcher Bar */}
        <div className="p-3 border-t border-white/10 shrink-0 bg-black/20">
          {!collapsed ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-white/70">Trade:</span>
                <select
                  value={workspace.industry}
                  onChange={(e) => switchIndustry(e.target.value)}
                  className="bg-blue-950/80 text-blue-200 border border-blue-500/30 rounded-lg text-xs px-2 py-1 font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="clinic">Clinic (OPD)</option>
                  <option value="coaching">Coaching (7d)</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="gym">Gym & Fitness</option>
                  <option value="salon">Salon & Spa</option>
                  <option value="field-service">Field Service</option>
                  <option value="turf">Turf Arena</option>
                </select>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/5">
                <span className="text-white/60">Plan:</span>
                <button
                  onClick={() => switchPlan(isGrowth ? 'basic' : 'growth')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                    isGrowth
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  {isGrowth ? 'Growth (Active)' : 'Basic Plan'}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={toggleCollapse}
                className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-200 hover:bg-blue-600"
                title="Switch Industry / Plan"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}


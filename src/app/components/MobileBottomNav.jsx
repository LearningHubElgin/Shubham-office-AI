import React from 'react';
import { LayoutDashboard, Inbox, Calendar, Users, Menu } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function MobileBottomNav({ currentRoute, currentTab, onNavigate, onSelectTab, onOpenDrawer }) {
  const { currentConfig } = useAppStore();
  const activeRoute = currentRoute || currentTab || 'dashboard';
  const handleNav = (tabId) => {
    if (typeof onNavigate === 'function') onNavigate(tabId);
    else if (typeof onSelectTab === 'function') onSelectTab(tabId);
  };

  const tabs = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'inbox', label: 'Inbox', icon: Inbox, badge: '2' },
    { id: 'bookings', label: 'Calendar', icon: Calendar },
    { id: 'customers', label: currentConfig.customerPlural.split(' ')[0], icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 left-14 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200/90 py-1.5 px-1.5 flex items-center justify-around md:hidden shadow-lg select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeRoute === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => handleNav(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 sm:px-3 rounded-xl transition-all relative ${
              isActive ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-900 font-medium'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              {tab.badge && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-0.5">{tab.label}</span>
          </button>
        );
      })}

      {/* "More" Hamburger button */}
      <button
        onClick={onOpenDrawer}
        className="flex flex-col items-center justify-center py-1 px-2 sm:px-3 text-gray-500 hover:text-gray-900 font-medium cursor-pointer"
      >
        <Menu className="w-5 h-5 stroke-[1.8]" />
        <span className="text-[10px] mt-0.5">More</span>
      </button>
    </nav>
  );
}


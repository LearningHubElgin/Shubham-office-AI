import React, { useState, useEffect } from 'react';
import { Search, X, Users, Calendar, FileText, Inbox, Sparkles, Activity, Settings, ArrowRight } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function CommandPalette({ isOpen, onClose, onNavigate, onSelectRoute }) {
  const [query, setQuery] = useState('');
  const { customers, currentConfig } = useAppStore();

  const handleNav = (path) => {
    if (typeof onNavigate === 'function') onNavigate(path);
    else if (typeof onSelectRoute === 'function') onSelectRoute(path);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickPages = [
    { label: 'Dashboard', path: 'dashboard', icon: Activity, desc: 'Overview and morning 4 numbers' },
    { label: 'Unified Inbox', path: 'inbox', icon: Inbox, desc: 'WhatsApp & Instagram messages' },
    { label: currentConfig.customerPlural, path: 'customers', icon: Users, desc: `Manage all ${currentConfig.customerPlural.toLowerCase()}` },
    { label: 'Calendar & Bookings', path: 'bookings', icon: Calendar, desc: 'Appointments & slot scheduling' },
    { label: 'Quotations & Invoices', path: 'invoices', icon: FileText, desc: 'GST invoices and PDF builder' },
    { label: currentConfig.sidebarCustomLabel, path: 'industry', icon: Sparkles, desc: `Dedicated ${currentConfig.name} module` },
    { label: 'AI Agent Studio', path: 'ai-studio', icon: Sparkles, desc: 'Rules, knowledge base and bot testing' },
    { label: 'Workspace Settings', path: 'settings', icon: Settings, desc: 'Profile, team, channels, billing' },
  ];

  const filteredPages = quickPages.filter(p =>
    p.label.toLowerCase().includes(query.toLowerCase()) ||
    p.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    (c.phone && c.phone.includes(query)) ||
    (c.email && c.email.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Type a command, page, or search ${currentConfig.customerPlural.toLowerCase()}...`}
            className="w-full text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-4 no-scrollbar text-xs">
          {/* Pages */}
          {filteredPages.length > 0 && (
            <div>
              <div className="px-3 py-1 font-bold text-[10px] uppercase tracking-wider text-gray-400">
                Navigation Commands
              </div>
              <div className="space-y-0.5">
                {filteredPages.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.path}
                      onClick={() => {
                        handleNav(p.path);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-blue-50 hover:text-blue-600 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                        <div>
                          <span className="font-semibold text-gray-900 group-hover:text-blue-600">{p.label}</span>
                          <span className="text-[11px] text-gray-400 ml-2">{p.desc}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-600" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Customers */}
          {filteredCustomers.length > 0 && (
            <div>
              <div className="px-3 py-1 font-bold text-[10px] uppercase tracking-wider text-gray-400">
                {currentConfig.customerPlural} Found
              </div>
              <div className="space-y-0.5">
                {filteredCustomers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      handleNav('customers');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-blue-50 transition-colors group cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600">{c.name}</div>
                      <div className="text-[11px] text-gray-500">{c.phone} · {c.city || c.email}</div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                      {c.stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredPages.length === 0 && filteredCustomers.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-xs">
              No matching commands or records found for "{query}".
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
          <span>Navigate with <kbd className="px-1 py-0.5 rounded bg-white border border-gray-200">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white border border-gray-200">↓</kbd></span>
          <span>Press <kbd className="px-1 py-0.5 rounded bg-white border border-gray-200">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}


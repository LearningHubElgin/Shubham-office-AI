import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Plus,
  Bell,
  Sparkles,
  ChevronDown,
  User,
  LogOut,
  RotateCcw,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Menu,
  CreditCard,
  Building2,
  Users,
  Calendar,
  FileText,
  MessageSquare
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig } from '../industryConfig';

export default function TopBar({
  onOpenMobileMenu,
  onOpenCommandPalette,
  onOpenQuickNew,
  onNavigate,
  onNavigateTab
}) {
  const handleNav = (tabId) => {
    if (typeof onNavigate === 'function') onNavigate(tabId);
    else if (typeof onNavigateTab === 'function') onNavigateTab(tabId);
  };

  const { user, workspace, currentConfig, switchIndustry, switchPlan, logoutUser, resetDemoData } = useAppStore();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [quickNewOpen, setQuickNewOpen] = useState(false);

  const userMenuRef = useRef(null);
  const notifRef = useRef(null);
  const creditsRef = useRef(null);
  const quickNewRef = useRef(null);

  // Close popovers when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (creditsRef.current && !creditsRef.current.contains(e.target)) setCreditsOpen(false);
      if (quickNewRef.current && !quickNewRef.current.contains(e.target)) setQuickNewOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'New WhatsApp enquiry', desc: 'Meenakshi Ammal asked for 10:30 AM slot', time: '10m ago', unread: true },
    { id: 2, title: 'UPI payment received', desc: '₹1,000 token advance via Razorpay', time: '1h ago', unread: true },
    { id: 3, title: 'Meta Cloud API Connected', desc: 'WhatsApp Business Number +91 93486 33365 Verified', time: '3h ago', unread: false },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-200/80 px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-2xs select-none">
      {/* Left: Mobile hamburger + Global Search / Command Palette */}
      <div className="flex items-center gap-3 flex-1 max-w-lg">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Button that triggers Cmd+K */}
        <button
          onClick={onOpenCommandPalette}
          className="w-full max-w-sm flex items-center justify-between px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-400 hover:border-blue-400 hover:bg-white transition-all text-xs cursor-pointer group shadow-2xs"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
            <span className="text-gray-500 font-normal">Search {currentConfig.customerPlural}, chats, invoices...</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-gray-200/70 border border-gray-300 text-[10px] font-mono font-semibold text-gray-600">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* "+ New" Quick Action Dropdown */}
        <div className="relative" ref={quickNewRef}>
          <button
            onClick={() => setQuickNewOpen(!quickNewOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">New</span>
            <ChevronDown className="w-3 h-3 opacity-80" />
          </button>

          {quickNewOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 p-2 z-50 animate-fadeIn text-xs">
              <div className="px-3 py-1.5 font-bold text-[10px] uppercase tracking-wider text-gray-400">
                Quick Create
              </div>
              <button
                onClick={() => {
                  setQuickNewOpen(false);
                  onOpenQuickNew('customer');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors text-left"
              >
                <Users className="w-4 h-4 text-blue-600" />
                <span>New {currentConfig.customerSingular}</span>
              </button>
              <button
                onClick={() => {
                  setQuickNewOpen(false);
                  onOpenQuickNew('booking');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors text-left"
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>New Appointment / Booking</span>
              </button>
              <button
                onClick={() => {
                  setQuickNewOpen(false);
                  onOpenQuickNew('invoice');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors text-left"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>New Quote / GST Invoice</span>
              </button>
              <button
                onClick={() => {
                  setQuickNewOpen(false);
                  handleNav('inbox');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors text-left"
              >
                <MessageSquare className="w-4 h-4 text-purple-600" />
                <span>New WhatsApp Broadcast</span>
              </button>
            </div>
          )}
        </div>

        {/* AI Credits Meter */}
        <div className="relative hidden md:block" ref={creditsRef}>
          <button
            onClick={() => setCreditsOpen(!creditsOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200/80 hover:bg-purple-100/60 text-purple-800 text-xs font-semibold transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600 fill-purple-600/20" />
            <span>{workspace.credits.toLocaleString()} Credits</span>
          </button>

          {creditsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50 animate-fadeIn text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">AI Credits Usage</span>
                <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                  84% Available
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mb-3">
                Used for automated WhatsApp Tamil/Tanglish replies, audio transcription, and bookings.
              </p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-3">
                <div className="bg-purple-600 h-full w-[84%] rounded-full"></div>
              </div>
              <button
                onClick={() => {
                  alert('Demo Top-Up: 5,000 Credits added!');
                  setCreditsOpen(false);
                }}
                className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors text-center"
              >
                Top Up 5,000 Credits (₹499)
              </button>
            </div>
          )}
        </div>

        {/* Plan / Trial Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{workspace.plan === 'growth' ? 'Growth' : 'Basic'} · {workspace.trialDaysRemaining}d Left</span>
        </div>

        {/* Notifications Popover */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 relative transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white"></span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 z-50 animate-fadeIn text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-1 mb-2">
                <span className="font-bold text-gray-900">Notifications</span>
                <span className="text-[10px] text-blue-600 font-semibold cursor-pointer">Mark all as read</span>
              </div>
              <div className="space-y-1.5 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                      n.unread ? 'bg-blue-50/60 hover:bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between font-semibold text-gray-900 mb-0.5">
                      <span>{n.title}</span>
                      <span className="text-[10px] text-gray-400 font-normal">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-2">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 p-1 pl-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#001744] text-white flex items-center justify-center font-bold text-xs ring-2 ring-blue-500/30">
              {user.name.charAt(0)}
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 p-2 z-50 animate-fadeIn text-xs">
              {/* Profile Card */}
              <div className="p-3 bg-gray-50/80 rounded-xl mb-2">
                <div className="font-bold text-gray-950">{user.name}</div>
                <div className="text-[11px] text-gray-500 truncate">{user.email}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 inline-block px-1.5 py-0.5 rounded">
                  {currentConfig.name}
                </div>
              </div>

              {/* Demo Industry Switcher */}
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Switch Demo Industry
              </div>
              <div className="grid grid-cols-2 gap-1 mb-2">
                {Object.values(industriesConfig).map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => {
                      switchIndustry(ind.id);
                      setUserMenuOpen(false);
                    }}
                    className={`px-2 py-1.5 rounded-lg text-left text-[11px] font-medium transition-colors ${
                      workspace.industry === ind.id
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {ind.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-100 my-1 pt-1 space-y-1">
                <button
                  onClick={() => {
                    switchPlan(workspace.plan === 'growth' ? 'basic' : 'growth');
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>Toggle Plan</span>
                  <span className="font-bold uppercase text-blue-600">{workspace.plan}</span>
                </button>

                <button
                  onClick={() => {
                    resetDemoData();
                    setUserMenuOpen(false);
                    alert('Demo data has been reset to default!');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-gray-400" />
                  <span>Reset Demo Data</span>
                </button>

                <a
                  href="/"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <span>Back to Website</span>
                  </span>
                </a>

                <button
                  onClick={() => {
                    logoutUser();
                    setUserMenuOpen(false);
                    handleNav('login');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 font-semibold transition-colors text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


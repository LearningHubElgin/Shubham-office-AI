import React from 'react';
import { Sparkles, Info, Database } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function DemoRibbon() {
  const { dbEngine, dbConnected } = useAppStore();

  return (
    <div className="bg-gradient-to-r from-[#001744] via-[#002875] to-[#001744] text-white text-[11px] sm:text-xs py-1.5 px-4 font-medium flex items-center justify-between border-b border-blue-900/40 select-none z-50">
      <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-200 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider">
            DEMO APP
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            DB: {dbEngine || 'backend/isuite.db'}
          </span>
          <span className="text-white/80 hidden lg:inline">
            · Live SQL data fetching & updates enabled
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-blue-300 hover:text-white underline transition-colors"
          >
            ← Back to Marketing Site
          </a>
        </div>
      </div>
    </div>
  );
}


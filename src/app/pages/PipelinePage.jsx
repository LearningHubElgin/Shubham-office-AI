import React, { useState } from 'react';
import { Kanban, Plus, User, Phone, MoreHorizontal, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function PipelinePage() {
  const { customers, currentConfig, setState } = useAppStore();
  const stages = currentConfig.pipelineStages || [];

  // Move customer to a different stage
  const moveStage = (customerId, direction) => {
    setState((prev) => {
      const updated = prev.customers.map((c) => {
        if (c.id === customerId) {
          const currentIndex = stages.findIndex((s) => s.id === c.stage);
          if (currentIndex === -1) {
            return { ...c, stage: stages[0]?.id || 'stage_0' };
          }
          const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
          if (nextIndex >= 0 && nextIndex < stages.length) {
            return { ...c, stage: stages[nextIndex].id };
          }
        }
        return c;
      });
      return { ...prev, customers: updated };
    });
  };

  return (
    <div className="space-y-5 animate-fadeIn pb-12 select-none text-xs">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-950 tracking-tight">
            {currentConfig.name} Sales Pipeline
          </h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Stage-by-stage progression from initial WhatsApp lead to closed conversion.
          </p>
        </div>

        <div className="text-xs text-gray-500 font-medium bg-white px-3 py-1.5 rounded-xl border border-gray-200">
          Total Deals: <strong className="text-gray-900">{customers.length}</strong>
        </div>
      </div>

      {/* Kanban Board Columns */}
      <div className="flex items-start gap-4 overflow-x-auto pb-4 no-scrollbar min-h-[500px]">
        {stages.map((stage, stageIdx) => {
          const stageCustomers = customers.filter(
            (c) => c.stage === stage.id || (stageIdx === 0 && !stages.some((s) => s.id === c.stage))
          );

          return (
            <div
              key={stage.id}
              className="w-72 shrink-0 bg-gray-50/80 rounded-2xl border border-gray-200/90 p-3 flex flex-col max-h-[75vh]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-200/80 mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: stage.color || '#3b82f6' }}
                  />
                  <h3 className="font-bold text-gray-900 text-xs">{stage.name}</h3>
                </div>
                <span className="text-[10px] font-bold text-gray-500 px-1.5 py-0.2 rounded-full bg-white border border-gray-200">
                  {stageCustomers.length}
                </span>
              </div>

              {/* Cards Container */}
              <div className="flex-1 overflow-y-auto space-y-2.5 no-scrollbar pr-0.5">
                {stageCustomers.length === 0 ? (
                  <div className="py-10 text-center text-gray-400 text-[11px] border-2 border-dashed border-gray-200 rounded-xl">
                    No deals in stage
                  </div>
                ) : (
                  stageCustomers.map((deal) => (
                    <div
                      key={deal.id}
                      className="p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all text-xs space-y-2"
                    >
                      <div className="font-bold text-gray-950 text-xs flex justify-between items-start">
                        <span>{deal.name}</span>
                        {deal.budget && (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            {deal.budget}
                          </span>
                        )}
                        {deal.due > 0 && (
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                            Due ₹{deal.due}
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-gray-500 line-clamp-2">
                        {deal.notes || deal.problem || deal.interest || 'Active lead in process'}
                      </div>

                      <div className="text-[10px] text-gray-400">
                        📞 {deal.phone}
                      </div>

                      {/* Stage Shift Controls */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <button
                          disabled={stageIdx === 0}
                          onClick={() => moveStage(deal.id, 'prev')}
                          className="px-2 py-1 rounded bg-gray-50 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-[10px] font-semibold flex items-center gap-0.5 cursor-pointer"
                        >
                          <ArrowLeft className="w-3 h-3" /> Prev
                        </button>
                        <button
                          disabled={stageIdx === stages.length - 1}
                          onClick={() => moveStage(deal.id, 'next')}
                          className="px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed text-[10px] font-bold flex items-center gap-0.5 cursor-pointer"
                        >
                          Next <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


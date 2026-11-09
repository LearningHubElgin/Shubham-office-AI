import React, { useState } from 'react';
import { CheckSquare, Clock, AlertCircle, CheckCircle2, Bot, Plus, Calendar, Phone } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function FollowUpsPage() {
  const { currentConfig } = useAppStore();
  const [filter, setFilter] = useState('all'); // 'all' | 'due' | 'ai' | 'completed'

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Blood sugar fasting HbA1c review call',
      customer: 'K. Meenakshi Ammal',
      phone: '+91 93486 33365',
      type: 'ai', // 'ai' | 'human'
      status: 'due', // 'due' | 'overdue' | 'completed'
      dueText: 'Today 4:00 PM',
      notes: 'Check if morning Metformin dose was taken without dizziness.',
    },
    {
      id: 2,
      title: 'Site visit cab feedback & floor plan cost sheet',
      customer: 'Sundar Rajan (NRI)',
      phone: '+91 94432 10899',
      type: 'human',
      status: 'overdue',
      dueText: 'Overdue by 2 hours',
      notes: 'Buyer requested revised payment schedule without clubhouse fee.',
    },
    {
      id: 3,
      title: 'Absent alert follow-up with parent Ramasamy',
      customer: 'Kavitha Ramasamy',
      phone: '+91 98421 77312',
      type: 'ai',
      status: 'due',
      dueText: 'Today 5:30 PM',
      notes: 'Automated WhatsApp message delivered. Call if no response by 6 PM.',
    },
    {
      id: 4,
      title: 'Annual membership renewal 10% discount link',
      customer: 'Ananya Sridharan',
      phone: '+91 98410 44521',
      type: 'ai',
      status: 'completed',
      dueText: 'Completed at 09:15 AM',
      notes: 'Renewal link sent on WhatsApp; customer clicked payment link.',
    },
  ]);

  const toggleComplete = (taskId) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, status: t.status === 'completed' ? 'due' : 'completed' } : t))
    );
  };

  const snoozeTask = (taskId) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, dueText: 'Snoozed +24 Hours' } : t))
    );
    alert('Task snoozed for 24 hours!');
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'due' && t.status === 'completed') return false;
    if (filter === 'completed' && t.status !== 'completed') return false;
    if (filter === 'ai' && t.type !== 'ai') return false;
    return true;
  });

  return (
    <div className="space-y-5 animate-fadeIn pb-12 select-none text-xs">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-950 tracking-tight">
            Follow-Up Tasks & AI Reminders
          </h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Keep track of pending calls, automated WhatsApp nudges, and clinical/lead check-ins.
          </p>
        </div>

        <button
          onClick={() => {
            const title = prompt('Enter new follow-up task title:');
            if (title) {
              setTasks([
                {
                  id: Date.now(),
                  title,
                  customer: 'Manual Entry',
                  phone: '+91 93486 33365',
                  type: 'human',
                  status: 'due',
                  dueText: 'Tomorrow 10:00 AM',
                  notes: 'Created by staff',
                },
                ...tasks,
              ]);
            }
          }}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>New Follow-Up</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Tasks ({tasks.length})
        </button>
        <button
          onClick={() => setFilter('due')}
          className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
            filter === 'due' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Due & Overdue
        </button>
        <button
          onClick={() => setFilter('ai')}
          className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
            filter === 'ai' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          AI Handled Follow-ups
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
            filter === 'completed' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Completed
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map((t) => {
          const isDone = t.status === 'completed';
          const isOverdue = t.status === 'overdue';

          return (
            <div
              key={t.id}
              className={`p-4 rounded-2xl border transition-all flex flex-wrap items-center justify-between gap-4 ${
                isDone
                  ? 'bg-gray-50/60 border-gray-200 opacity-60'
                  : isOverdue
                  ? 'bg-red-50/40 border-red-200 shadow-2xs'
                  : 'bg-white border-gray-200/90 shadow-2xs hover:border-blue-400'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleComplete(t.id)}
                  className={`mt-0.5 w-5 h-5 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                    isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {isDone && <CheckCircle2 className="w-4 h-4" />}
                </button>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-bold text-sm text-gray-950 ${isDone ? 'line-through text-gray-500' : ''}`}>
                      {t.title}
                    </h3>
                    {t.type === 'ai' && (
                      <span className="px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 text-[10px] font-bold flex items-center gap-0.5 border border-purple-200">
                        <Bot className="w-3 h-3" /> AI Autopilot
                      </span>
                    )}
                    {isOverdue && (
                      <span className="px-1.5 py-0.2 rounded bg-red-100 text-red-700 text-[10px] font-bold">
                        Overdue
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 text-xs mt-1">
                    {currentConfig.customerSingular}: <strong className="text-gray-800">{t.customer}</strong> · 📞 {t.phone}
                  </p>
                  <p className="text-[11px] text-gray-600 mt-1 italic">"{t.notes}"</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400 font-medium mr-2">
                  🕒 {t.dueText}
                </span>
                {!isDone && (
                  <button
                    onClick={() => snoozeTask(t.id)}
                    className="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs cursor-pointer"
                  >
                    Snooze +24h
                  </button>
                )}
                <button
                  onClick={() => alert(`Call triggered to ${t.phone} via iSuite Phone`)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Phone className="w-3 h-3" /> Call
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

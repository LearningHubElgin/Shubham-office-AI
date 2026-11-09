import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Users,
  CheckCircle2,
  Share2,
  X,
  Phone
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function BookingsPage() {
  const { currentConfig } = useAppStore();
  const [viewMode, setViewMode] = useState('week'); // 'day' | 'week' | 'month'
  const [selectedDate, setSelectedDate] = useState('Monday, 10 Nov 2026');
  const [newBookingModalOpen, setNewBookingModalOpen] = useState(false);
  const [previewBookingUrlOpen, setPreviewBookingUrlOpen] = useState(false);

  // Resource columns per industry
  const resources = {
    clinic: ['Dr. A. Sundaram (General Med)', 'Dr. S. Kanimozhi (Ortho)', 'Dr. Priya V. (Pediatrics)'],
    coaching: ['Classroom A (JEE Batch)', 'Classroom B (NEET Batch)', 'Lab 1 (Practical)'],
    'real-estate': ['Tower A Site Host (Vignesh)', 'Tower B Site Host (Karthik)', 'Duplex Villas (Selvam)'],
    gym: ['Coach Pradeep (PT Strength)', 'Coach Sneha (Zumba/Cardio)', 'Main Floor Free Access'],
    salon: ['Chair 1 (Master Revathi)', 'Chair 2 (Senior Priya)', 'Spa Room (Facials/Bridal)'],
    'field-service': ['Van 1 (Tech Murugan S.)', 'Van 2 (Lead Tech Ganesan)', 'Bike 3 (Fast Response)'],
    turf: ['Court 1 (Box Cricket Full)', 'Court 2 (5-a-Side AstroTurf)', 'Batting Net Pitch'],
  };

  const currentResources = resources[currentConfig.id] || resources.clinic;

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Consultation: K. Meenakshi Ammal',
      resource: currentResources[0],
      time: '10:30 AM - 11:00 AM',
      day: 'Mon',
      status: 'Confirmed',
      phone: '+91 93486 33365',
    },
    {
      id: 2,
      title: 'Session: Rajendran P. (Knee review)',
      resource: currentResources[1],
      time: '11:15 AM - 12:00 PM',
      day: 'Mon',
      status: 'Arriving',
      phone: '+91 98421 11200',
    },
    {
      id: 3,
      title: 'Follow-up: A. Fathima Banu',
      resource: currentResources[0],
      time: '12:00 PM - 12:30 PM',
      day: 'Mon',
      status: 'WhatsApp Booked',
      phone: '+91 94431 88922',
    },
    {
      id: 4,
      title: 'Site Visit: Sundar Rajan (NRI)',
      resource: currentResources[2] || currentResources[0],
      time: '03:30 PM - 05:00 PM',
      day: 'Tue',
      status: 'Cab Pick-up Arranged',
      phone: '+91 94432 10899',
    },
  ]);

  return (
    <div className="space-y-5 animate-fadeIn pb-12 select-none text-xs">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-950 tracking-tight">
            Calendar & Resource Scheduling
          </h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage slots, bookings across {currentConfig.name}, and public WhatsApp booking links.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPreviewBookingUrlOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold shadow-2xs flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Public Booking Link</span>
          </button>
          <button
            onClick={() => setNewBookingModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>New Appointment / Slot</span>
          </button>
        </div>
      </div>

      {/* Date Navigator + View Mode Tabs */}
      <div className="p-3 bg-white rounded-2xl border border-gray-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-bold text-gray-900 text-sm px-2">
            {selectedDate}
          </span>
          <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600">
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full ml-2">
            Today
          </span>
        </div>

        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl font-semibold">
          <button
            onClick={() => setViewMode('day')}
            className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'day' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Day (Resources)
          </button>
          <button
            onClick={() => setViewMode('week')}
            className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'week' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Week Grid
          </button>
          <button
            onClick={() => setViewMode('month')}
            className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'month' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Resource Column Grid View */}
      <div className="bg-white rounded-2xl border border-gray-200/90 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {currentResources.map((res, rIdx) => {
            const resAppointments = appointments.filter((a) => a.resource === res);

            return (
              <div key={rIdx} className="p-4 flex flex-col min-h-[420px]">
                {/* Resource Header */}
                <div className="pb-3 border-b border-gray-100 mb-3 flex items-center justify-between">
                  <div className="font-bold text-gray-900 text-xs truncate">{res}</div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                    {resAppointments.length} Booked
                  </span>
                </div>

                {/* Slots container */}
                <div className="flex-1 space-y-2.5">
                  {resAppointments.length === 0 ? (
                    <div className="py-16 text-center text-gray-400 text-[11px] border-2 border-dashed border-gray-100 rounded-xl">
                      No slots booked today
                    </div>
                  ) : (
                    resAppointments.map((slot) => (
                      <div
                        key={slot.id}
                        className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80 shadow-2xs hover:bg-blue-50 transition-all text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between font-bold text-blue-900">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span>{slot.time}</span>
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-blue-800 border border-blue-200">
                            {slot.status}
                          </span>
                        </div>
                        <div className="font-bold text-gray-900">{slot.title}</div>
                        <div className="text-[11px] text-gray-500">📞 {slot.phone}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- PUBLIC BOOKING LINK MODAL PREVIEW ---------------- */}
      {previewBookingUrlOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-sm text-gray-900">Public WhatsApp Booking Link</h3>
              <button onClick={() => setPreviewBookingUrlOpen(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Share this link on your Instagram bio, Google Maps listing, or WhatsApp status. Customers can pick their slot directly:
            </p>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 font-mono text-[11px] text-blue-600 break-all mb-4">
              https://isuite.ai/book/{currentConfig.id}/madurai-hq
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`https://isuite.ai/book/${currentConfig.id}/madurai-hq`);
                alert('Copied to clipboard!');
                setPreviewBookingUrlOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Copy Shareable Booking Link
            </button>
          </div>
        </div>
      )}

      {/* ---------------- NEW BOOKING MODAL ---------------- */}
      {newBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-sm text-gray-900">Schedule Slot for {currentConfig.name}</h3>
              <button onClick={() => setNewBookingModalOpen(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Customer / Patient Name</label>
                <input
                  type="text"
                  placeholder="e.g. Anandha Kumar"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Select Resource</label>
                <select className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none font-medium">
                  {currentResources.map((r, i) => (
                    <option key={i} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Date</label>
                  <input type="date" defaultValue="2026-11-10" className="w-full px-3 py-2 rounded-xl border border-gray-300" />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Time</label>
                  <input type="text" defaultValue="04:00 PM" className="w-full px-3 py-2 rounded-xl border border-gray-300" />
                </div>
              </div>
              <button
                onClick={() => {
                  alert('Appointment saved and confirmed via WhatsApp bot message!');
                  setNewBookingModalOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs mt-2"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


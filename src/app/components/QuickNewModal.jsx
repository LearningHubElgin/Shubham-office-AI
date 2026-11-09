import React, { useState } from 'react';
import { X, Users, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function QuickNewModal({ isOpen, mode = 'customer', onClose }) {
  const { currentConfig, addCustomer } = useAppStore();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '2026-11-10',
    time: '11:00 AM',
    amount: '1500',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'customer') {
      const newCust = {
        id: `c_${Date.now()}`,
        name: formData.name || `New ${currentConfig.customerSingular}`,
        phone: formData.phone || '+91 93486 33365',
        email: formData.email || 'customer@example.com',
        city: 'Madurai',
        stage: 'enquiry',
        joined: new Date().toISOString().split('T')[0],
        notes: formData.notes || 'Created via Quick Create',
      };
      if (addCustomer) {
        addCustomer(newCust);
      }
      alert(`🎉 New ${currentConfig.customerSingular} "${newCust.name}" added to database!`);
    } else if (mode === 'booking') {
      alert(`📅 Booking for "${formData.name}" scheduled on ${formData.date} at ${formData.time}!`);
    } else if (mode === 'invoice') {
      alert(`🧾 GST Tax Invoice created for ₹${formData.amount}!`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            {mode === 'customer' && <Users className="w-4 h-4" />}
            {mode === 'booking' && <Calendar className="w-4 h-4" />}
            {mode === 'invoice' && <FileText className="w-4 h-4" />}
            <span>
              {mode === 'customer' && `Create New ${currentConfig.customerSingular}`}
              {mode === 'booking' && 'Schedule Appointment / Slot'}
              {mode === 'invoice' && 'Generate Quotation / Invoice'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Full Name / Client
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. S. Meenakshi"
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Mobile Number (WhatsApp)
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 93486 33365"
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {mode === 'booking' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Time Slot</label>
                <input
                  type="text"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {mode === 'invoice' && (
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Amount (₹)</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Notes / Requirement</label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Requirement, special requests, doctor/trainer preferences..."
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-600 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md"
            >
              Save Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


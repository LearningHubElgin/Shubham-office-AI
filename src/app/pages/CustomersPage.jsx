import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Plus,
  Download,
  Upload,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  X,
  FileText,
  CreditCard,
  MessageSquare,
  CheckCircle2,
  Trash2,
  Edit
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig } from '../industryConfig';

export default function CustomersPage() {
  const { customers, currentConfig, addCustomer, setState } = useAppStore();
  const [search, setSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [newCustomerOpen, setNewCustomerOpen] = useState(false);

  const [newCustForm, setNewCustForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Madurai',
    notes: '',
  });

  const safeSearch = (search || '').toLowerCase();
  const filteredCustomers = (customers || []).filter(
    (c) =>
      (c.name || '').toLowerCase().includes(safeSearch) ||
      (c.phone || '').includes(search) ||
      (c.city || '').toLowerCase().includes(safeSearch) ||
      (c.email || '').toLowerCase().includes(safeSearch)
  );

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const newRecord = {
      id: `c_${Date.now()}`,
      name: newCustForm.name,
      phone: newCustForm.phone || '+91 93486 33365',
      email: newCustForm.email || 'client@example.com',
      city: newCustForm.city,
      stage: 'enquiry',
      joined: new Date().toISOString().split('T')[0],
      notes: newCustForm.notes,
      tags: ['New Entry', 'Verified'],
    };

    if (addCustomer) {
      addCustomer(newRecord);
    } else {
      setState((prev) => ({
        ...prev,
        customers: [newRecord, ...prev.customers],
      }));
    }
    setNewCustomerOpen(false);
    setNewCustForm({ name: '', phone: '', email: '', city: 'Madurai', notes: '' });
  };

  return (
    <div className="space-y-5 animate-fadeIn pb-12 select-none text-xs">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-950 tracking-tight">
            {currentConfig.customerPlural} Directory
          </h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Manage your verified {currentConfig.customerPlural.toLowerCase()}, communication histories, and records.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setImportModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-gray-500" />
            <span>Import CSV</span>
          </button>
          <button
            onClick={() => alert('Exporting all customer records to CSV with GST billing numbers...')}
            className="px-3.5 py-2 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-gray-500" />
            <span>Export</span>
          </button>
          <button
            onClick={() => setNewCustomerOpen(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add {currentConfig.customerSingular}</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-3 bg-white rounded-2xl border border-gray-200/90 shadow-2xs flex items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${currentConfig.customerPlural.toLowerCase()} by name, phone or locality...`}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <span>Total: <strong>{filteredCustomers.length}</strong></span>
        </div>
      </div>

      {/* Main Table View */}
      <div className="bg-white rounded-2xl border border-gray-200/90 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-200/80 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                <th className="py-3 px-4">Name / Contact</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Pipeline Stage</th>
                <th className="py-3 px-4">Tags</th>
                <th className="py-3 px-4">Joined Date</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {filteredCustomers.map((cust) => (
                <tr
                  key={cust.id}
                  onClick={() => setSelectedCustomer(cust)}
                  className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cust.name}
                    </div>
                    <div className="text-[11px] text-gray-500 flex items-center gap-2 mt-0.5">
                      <span>📞 {cust.phone}</span>
                      <span>·</span>
                      <span>✉️ {cust.email}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 font-medium">
                    {cust.city || 'Madurai'}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {cust.stage}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {cust.tags?.map((t, idx) => (
                        <span key={idx} className="px-1.5 py-0.2 rounded bg-gray-100 text-gray-600 text-[10px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-gray-400 text-[11px]">
                    {cust.joined || '2026-11-01'}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCustomer(cust);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-gray-50 group-hover:bg-blue-600 group-hover:text-white text-gray-700 font-semibold text-[11px] transition-colors"
                    >
                      View Profile →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- CUSTOMER PROFILE DRAWER ---------------- */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {currentConfig.customerSingular} Overview
                </span>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 text-center border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-black mx-auto flex items-center justify-center mb-2">
                  {selectedCustomer.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-950">{selectedCustomer.name}</h3>
                <p className="text-xs text-gray-500">{selectedCustomer.phone} · {selectedCustomer.city}</p>
                <div className="mt-2 flex justify-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-blue-700">
                    Stage: {selectedCustomer.stage}
                  </span>
                </div>
              </div>

              {/* Timeline Notes & History */}
              <div className="py-4 space-y-3">
                <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider">
                  Timeline & Interaction Notes
                </h4>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/80 text-xs text-gray-700 leading-relaxed">
                  {selectedCustomer.notes || 'No historical clinical or inquiry notes logged yet.'}
                </div>

                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/70 text-xs">
                  <span className="font-bold text-blue-900 block mb-1">WhatsApp Cloud Opt-In:</span>
                  <p className="text-blue-800 text-[11px]">
                    Customer explicitly accepted Meta WhatsApp 24h messaging on {selectedCustomer.joined}.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button
                onClick={() => {
                  alert(`Direct WhatsApp opened for ${selectedCustomer.phone}`);
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
              >
                Send Direct WhatsApp Message
              </button>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-xs"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- IMPORT CSV WIZARD MODAL ---------------- */}
      {importModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-sm text-gray-900">Import {currentConfig.customerPlural} from CSV</h3>
              <button onClick={() => setImportModalOpen(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Upload an existing contact list. We automatically map columns: <b>Name, Phone, City, Notes</b>.
            </p>
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-2xl text-center hover:border-blue-500 cursor-pointer transition-colors bg-gray-50/60 mb-4">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="font-bold text-xs text-gray-700 block">Click to select CSV spreadsheet</span>
              <span className="text-[10px] text-gray-400">Supports .csv, .xlsx up to 5,000 rows</span>
            </div>
            <button
              onClick={() => {
                alert('Sample batch of 25 contacts successfully imported!');
                setImportModalOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Simulate Import (25 Samples)
            </button>
          </div>
        </div>
      )}

      {/* ---------------- NEW CUSTOMER MODAL ---------------- */}
      {newCustomerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-sm text-gray-900">Add New {currentConfig.customerSingular}</h3>
              <button onClick={() => setNewCustomerOpen(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <form onSubmit={handleAddCustomer} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newCustForm.name}
                  onChange={(e) => setNewCustForm({ ...newCustForm, name: e.target.value })}
                  placeholder="e.g. S. Ramanathan"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">WhatsApp Phone</label>
                <input
                  type="tel"
                  required
                  value={newCustForm.phone}
                  onChange={(e) => setNewCustForm({ ...newCustForm, phone: e.target.value })}
                  placeholder="+91 93486 33365"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Locality / City</label>
                <input
                  type="text"
                  value={newCustForm.city}
                  onChange={(e) => setNewCustForm({ ...newCustForm, city: e.target.value })}
                  placeholder="Madurai, KK Nagar"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Initial Requirement / Notes</label>
                <textarea
                  rows={2}
                  value={newCustForm.notes}
                  onChange={(e) => setNewCustForm({ ...newCustForm, notes: e.target.value })}
                  placeholder="Doctor preference, property type, course interest..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs mt-2"
              >
                Save {currentConfig.customerSingular}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


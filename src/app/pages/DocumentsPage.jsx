import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Download, 
  Printer, 
  Send, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingDown, 
  Boxes, 
  Tag, 
  Search,
  Eye,
  Trash2,
  Share2
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { formatLakhs } from '../industryConfig';

export default function DocumentsPage() {
  const { workspace, customers } = useAppStore();
  const [activeTab, setActiveTab] = useState('invoices'); // 'invoices' | 'quotes' | 'expenses' | 'inventory'
  const [invoicePreviewModal, setInvoicePreviewModal] = useState(null);
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);
  const [showNewQuoteModal, setShowNewQuoteModal] = useState(false);

  const isGrowth = workspace.plan === 'growth';

  // Seed invoices
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2026-081',
      date: '09 Nov 2026',
      customer: customers[0]?.name || 'Meenakshi Ammal',
      phone: customers[0]?.phone || '+91 93486 33365',
      type: 'B2C',
      items: [
        { desc: 'Comprehensive Consultation & Diagnostics', hsn: '999312', qty: 1, rate: 1200, gstRate: 18 },
        { desc: 'HbA1c & Lipid Profile Clinical Workup', hsn: '999319', qty: 1, rate: 650, gstRate: 12 },
      ],
      status: 'paid',
      subtotal: 1850,
      cgst: 147,
      sgst: 147,
      total: 2144,
    },
    {
      id: 'INV-2026-080',
      date: '08 Nov 2026',
      customer: 'Velan Textiles Ltd',
      phone: '+91 98400 11982',
      type: 'B2B',
      gstin: '33AABCV9912K1Z9',
      items: [
        { desc: 'Quarterly Commercial AMC Maintenance Visit', hsn: '998717', qty: 1, rate: 12500, gstRate: 18 },
        { desc: 'Replacement High Pressure Blower Fan Belt', hsn: '841490', qty: 2, rate: 1400, gstRate: 18 },
      ],
      status: 'paid',
      subtotal: 15300,
      cgst: 1377,
      sgst: 1377,
      total: 18054,
    },
    {
      id: 'INV-2026-079',
      date: '05 Nov 2026',
      customer: 'Saravanan Muthu',
      phone: '+91 98421 77312',
      type: 'B2C',
      items: [
        { desc: 'JEE Advanced Course Term 1 Admission & Kits', hsn: '999293', qty: 1, rate: 24000, gstRate: 18 },
      ],
      status: 'unpaid',
      subtotal: 24000,
      cgst: 2160,
      sgst: 2160,
      total: 28320,
    }
  ]);

  // Seed quotations
  const [quotations, setQuotations] = useState([
    {
      id: 'QT-2026-024',
      date: '08 Nov 2026',
      customer: 'Royal Residency Apartments',
      phone: '+91 98400 11982',
      validUntil: '22 Nov 2026',
      items: [
        { desc: 'Annual Comprehensive RO Plant AMC with Filter Kits', rate: 24000, qty: 1 },
        { desc: 'Bi-monthly Water TDS Testing & Service Visits', rate: 6000, qty: 1 },
      ],
      status: 'sent',
      total: 30000,
    },
    {
      id: 'QT-2026-023',
      date: '04 Nov 2026',
      customer: 'Meenakshi Sundaram',
      phone: '+91 94430 88211',
      validUntil: '18 Nov 2026',
      items: [
        { desc: 'Duplex Villa Plot 18 Cost Estimate & Amenities', rate: 11500000, qty: 1 },
      ],
      status: 'negotiating',
      total: 11500000,
    }
  ]);

  // Expenses (Growth plan)
  const [expenses, setExpenses] = useState([
    { id: 'EXP-104', date: '08 Nov 2026', vendor: 'MedSupply Pharma Chennai', category: 'Medical Consumables', amount: 8400, gstPaid: 1512, itcEligible: true, status: 'approved' },
    { id: 'EXP-103', date: '05 Nov 2026', vendor: 'Madurai Power & Grid (TNEB)', category: 'Electricity & Utilities', amount: 14200, gstPaid: 0, itcEligible: false, status: 'approved' },
    { id: 'EXP-102', date: '01 Nov 2026', vendor: 'Reliance Jio Fiber High-Speed', category: 'Internet & Telecom', amount: 1899, gstPaid: 341.82, itcEligible: true, status: 'approved' },
    { id: 'EXP-101', date: '28 Oct 2026', vendor: 'Surya Stationers & Printers', category: 'Office Stationary & Brochures', amount: 3200, gstPaid: 384, itcEligible: true, status: 'approved' },
  ]);

  // Inventory / Stock (Growth plan)
  const [inventory, setInventory] = useState([
    { sku: 'MED-MET-500', name: 'Metformin 500mg SR Strips (10 tabs)', category: 'Medicine', stock: 120, reorder: 40, unitPrice: 38, status: 'in_stock' },
    { sku: 'CLIN-GLV-LAT', name: 'Nitrile Examination Gloves (Box of 100)', category: 'Consumable', stock: 6, reorder: 10, unitPrice: 420, status: 'low_stock' },
    { sku: 'LAB-REAG-HBA', name: 'HbA1c Enzymatic Test Cartridges', category: 'Lab Kit', stock: 24, reorder: 15, unitPrice: 280, status: 'in_stock' },
    { sku: 'SAN-SPR-500', name: 'Hospital Grade Surface Disinfectant (5L)', category: 'Hygiene', stock: 2, reorder: 5, unitPrice: 850, status: 'reorder_now' },
  ]);

  // Handle Convert Quotation to Invoice
  const handleConvertQuoteToInvoice = (quote) => {
    const subtotal = quote.total;
    const cgst = subtotal * 0.09;
    const sgst = subtotal * 0.09;
    const newInv = {
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: 'Today',
      customer: quote.customer,
      phone: quote.phone,
      type: 'B2C',
      items: quote.items.map(it => ({ ...it, hsn: '998319', gstRate: 18 })),
      status: 'unpaid',
      subtotal,
      cgst,
      sgst,
      total: subtotal + cgst + sgst,
    };
    setInvoices([newInv, ...invoices]);
    setActiveTab('invoices');
    setInvoicePreviewModal(newInv);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">GST Invoices & Documents</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            GST-compliant B2B & B2C tax invoices, printable quotes, and business expense management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNewQuoteModal(true)}
            className="px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50 flex items-center gap-1.5 shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5 text-blue-600" />
            New Quotation
          </button>
          <button
            onClick={() => setShowNewInvoiceModal(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 flex items-center gap-1.5 shadow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Create GST Invoice
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6">
          <button
            onClick={() => setActiveTab('invoices')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'invoices'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Tax Invoices ({invoices.length})
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'quotes'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Quotations ({quotations.length})
          </button>
          <button
            onClick={() => setActiveTab('expenses')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'expenses'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Expenses & ITC</span>
            {!isGrowth && <Lock className="w-3 h-3 text-amber-500" />}
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'inventory'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Stock & Inventory</span>
            {!isGrowth && <Lock className="w-3 h-3 text-amber-500" />}
          </button>
        </nav>
      </div>

      {/* TAB 1: Invoices */}
      {activeTab === 'invoices' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Invoice #</th>
                  <th className="px-5 py-3.5">Customer / Entity</th>
                  <th className="px-5 py-3.5">Category</th>
                  <th className="px-5 py-3.5 text-right">Subtotal</th>
                  <th className="px-5 py-3.5 text-right">GST (18%)</th>
                  <th className="px-5 py-3.5 text-right">Total (₹)</th>
                  <th className="px-5 py-3.5 text-center">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="font-mono font-bold text-gray-900">{inv.id}</span>
                      <p className="text-[11px] text-gray-400">{inv.date}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="font-semibold text-gray-900">{inv.customer}</p>
                      <p className="text-[11px] text-gray-400 font-mono">{inv.phone}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-medium ${
                        inv.type === 'B2B' ? 'bg-purple-50 text-purple-700 border border-purple-200' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {inv.type} {inv.gstin ? `(${inv.gstin.slice(0, 6)}...)` : ''}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right text-gray-600">
                      ₹{inv.subtotal.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-3.5 text-right text-gray-500 text-xs font-mono">
                      ₹{(inv.cgst + inv.sgst).toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-3.5 text-right font-bold text-gray-950">
                      ₹{inv.total.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {inv.status === 'paid' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" /> Paid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          Due
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right space-x-2">
                      <button
                        onClick={() => setInvoicePreviewModal(inv)}
                        className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
                        title="Preview & Print"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => alert(`Simulated: Tax Invoice PDF sent directly to WhatsApp (${inv.phone})`)}
                        className="p-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                        title="Send on WhatsApp"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Quotations */}
      {activeTab === 'quotes' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="divide-y divide-gray-100">
            {quotations.map((qt) => (
              <div key={qt.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-gray-900">{qt.id}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                      {qt.status}
                    </span>
                    <span className="text-xs text-gray-400">• Valid until {qt.validUntil}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{qt.customer}</p>
                  <div className="text-xs text-gray-600">
                    {qt.items.map((it, idx) => (
                      <span key={idx} className="mr-3">
                        • {it.desc} (₹{it.rate.toLocaleString('en-IN')})
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[11px] text-gray-400">Total Estimate</span>
                    <p className="text-base font-bold text-gray-950">₹{qt.total.toLocaleString('en-IN')}</p>
                  </div>
                  <button
                    onClick={() => handleConvertQuoteToInvoice(qt)}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-2xs transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" /> Convert to Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Expenses (Growth-only) */}
      {activeTab === 'expenses' && (
        <div>
          {!isGrowth ? (
            <div className="bg-white rounded-2xl border border-gray-200/80 p-8 text-center max-w-lg mx-auto my-6 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Expenses & Input Tax Credit (ITC) Tracker</h3>
              <p className="text-xs text-gray-500 mt-1 mb-5">
                Record vendor bills, categorize operational costs, and claim GST Input Tax Credit automatically with the Growth Plan.
              </p>
              <button
                onClick={() => alert('Upgrade to Growth plan from Settings or User Menu to unlock Expenses & ITC.')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-sm"
              >
                Upgrade to Growth Plan
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs">
                  <span className="text-xs text-gray-500">Expenses This Month</span>
                  <p className="text-xl font-bold text-gray-900 mt-1">₹27,699</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs">
                  <span className="text-xs text-gray-500">Eligible GST ITC Claim</span>
                  <p className="text-xl font-bold text-emerald-600 mt-1">₹2,237.82</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs">
                  <span className="text-xs text-gray-500">Net GST Output Offset</span>
                  <p className="text-xl font-bold text-blue-600 mt-1">-14.2%</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-[11px] font-semibold">
                      <tr>
                        <th className="px-5 py-3.5">Bill # & Date</th>
                        <th className="px-5 py-3.5">Vendor</th>
                        <th className="px-5 py-3.5">Category</th>
                        <th className="px-5 py-3.5 text-right">Bill Amount</th>
                        <th className="px-5 py-3.5 text-right">GST Paid</th>
                        <th className="px-5 py-3.5 text-center">ITC Eligibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {expenses.map((exp) => (
                        <tr key={exp.id}>
                          <td className="px-5 py-3.5 font-medium text-gray-900">
                            {exp.id} <span className="text-gray-400 font-normal block text-[11px]">{exp.date}</span>
                          </td>
                          <td className="px-5 py-3.5 font-semibold text-gray-900">{exp.vendor}</td>
                          <td className="px-5 py-3.5 text-gray-600">{exp.category}</td>
                          <td className="px-5 py-3.5 text-right font-bold text-gray-900">₹{exp.amount.toLocaleString('en-IN')}</td>
                          <td className="px-5 py-3.5 text-right text-gray-600 font-mono">₹{exp.gstPaid.toLocaleString('en-IN')}</td>
                          <td className="px-5 py-3.5 text-center">
                            {exp.itcEligible ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                                <CheckCircle2 className="w-3 h-3" /> Eligible
                              </span>
                            ) : (
                              <span className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-500">
                                Ineligible / Nil
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: Inventory (Growth-only) */}
      {activeTab === 'inventory' && (
        <div>
          {!isGrowth ? (
            <div className="bg-white rounded-2xl border border-gray-200/80 p-8 text-center max-w-lg mx-auto my-6 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Stock & Consumables Inventory</h3>
              <p className="text-xs text-gray-500 mt-1 mb-5">
                Track clinic medicines, salon colour tubes, turf equipment or repair parts with automated low-stock reorder warnings.
              </p>
              <button
                onClick={() => alert('Upgrade to Growth plan from Settings to unlock Inventory & Stock tracking.')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-sm"
              >
                Upgrade to Growth Plan
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-[11px] font-semibold">
                    <tr>
                      <th className="px-5 py-3.5">SKU / Item</th>
                      <th className="px-5 py-3.5">Category</th>
                      <th className="px-5 py-3.5 text-center">In Stock</th>
                      <th className="px-5 py-3.5 text-center">Reorder Trigger</th>
                      <th className="px-5 py-3.5 text-right">Unit Rate</th>
                      <th className="px-5 py-3.5 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {inventory.map((item) => (
                      <tr key={item.sku}>
                        <td className="px-5 py-3.5">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-[11px] text-gray-400 font-mono">{item.sku}</p>
                        </td>
                        <td className="px-5 py-3.5 text-gray-600">{item.category}</td>
                        <td className="px-5 py-3.5 text-center font-bold text-gray-900">{item.stock} units</td>
                        <td className="px-5 py-3.5 text-center text-gray-500 font-mono text-xs">{item.reorder} units</td>
                        <td className="px-5 py-3.5 text-right font-semibold text-gray-900">₹{item.unitPrice}</td>
                        <td className="px-5 py-3.5 text-center">
                          {item.status === 'in_stock' && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              Adequate
                            </span>
                          )}
                          {item.status === 'low_stock' && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              Low Stock
                            </span>
                          )}
                          {item.status === 'reorder_now' && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700">
                              Reorder Now
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Invoice Preview & Print Modal */}
      {invoicePreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header bar */}
            <div className="p-4 bg-gray-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-xs tracking-wider uppercase">Tax Invoice — {invoicePreviewModal.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
                <button
                  onClick={() => setInvoicePreviewModal(null)}
                  className="text-gray-400 hover:text-white text-base px-1"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Printable Invoice Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-gray-700">
              {/* Header */}
              <div className="flex justify-between items-start border-b border-gray-200 pb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-950">{workspace.businessName}</h2>
                  <p className="text-gray-500 mt-0.5">{workspace.address}</p>
                  <p className="font-mono text-gray-600 mt-1">GSTIN: {workspace.gstin}</p>
                  <p className="text-gray-500">Phone: {workspace.whatsappPhone}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-blue-600">TAX INVOICE</span>
                  <p className="font-bold text-gray-900 mt-1">{invoicePreviewModal.id}</p>
                  <p className="text-gray-500">Date: {invoicePreviewModal.date}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-800">
                    {invoicePreviewModal.type} INVOICE
                  </span>
                </div>
              </div>

              {/* Bill To */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Billed To</span>
                <p className="font-bold text-sm text-gray-900 mt-0.5">{invoicePreviewModal.customer}</p>
                <p className="text-gray-500">{invoicePreviewModal.phone}</p>
                {invoicePreviewModal.gstin && (
                  <p className="font-mono text-purple-700 font-semibold mt-1">Client GSTIN: {invoicePreviewModal.gstin}</p>
                )}
              </div>

              {/* Line Items Table */}
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 text-[11px] uppercase">
                    <th className="py-2">Item Description</th>
                    <th className="py-2">HSN/SAC</th>
                    <th className="py-2 text-center">Qty</th>
                    <th className="py-2 text-right">Rate</th>
                    <th className="py-2 text-right">GST %</th>
                    <th className="py-2 text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoicePreviewModal.items.map((it, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 font-medium text-gray-900">{it.desc}</td>
                      <td className="py-2.5 font-mono text-gray-500">{it.hsn}</td>
                      <td className="py-2.5 text-center">{it.qty}</td>
                      <td className="py-2.5 text-right">₹{it.rate.toLocaleString('en-IN')}</td>
                      <td className="py-2.5 text-right font-mono">{it.gstRate}%</td>
                      <td className="py-2.5 text-right font-semibold text-gray-900">
                        ₹{(it.qty * it.rate).toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Tax Calculations */}
              <div className="border-t border-gray-200 pt-4 flex justify-end">
                <div className="w-64 space-y-2 text-right">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Taxable Subtotal:</span>
                    <span className="font-medium">₹{invoicePreviewModal.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">CGST (9%):</span>
                    <span className="font-mono">₹{invoicePreviewModal.cgst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">SGST (9%):</span>
                    <span className="font-mono">₹{invoicePreviewModal.sgst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 text-sm font-bold text-gray-950">
                    <span>Grand Total:</span>
                    <span>₹{invoicePreviewModal.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="border-t border-gray-100 pt-3 text-[11px] text-gray-400 text-center">
                This is a computer-generated invoice issued by Karttik AI. No physical signature required.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Invoice Modal */}
      {showNewInvoiceModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 p-5 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-gray-900 text-base">Create Fast GST Invoice</h3>
              <button onClick={() => setShowNewInvoiceModal(false)} className="text-gray-400 hover:text-gray-600 font-bold">✕</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const newInv = {
                id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
                date: 'Today',
                customer: customers[0]?.name || 'Rajesh K.',
                phone: '+91 93486 33365',
                type: 'B2C',
                items: [{ desc: 'Standard Service Item', hsn: '998319', qty: 1, rate: 3500, gstRate: 18 }],
                status: 'paid',
                subtotal: 3500,
                cgst: 315,
                sgst: 315,
                total: 4130,
              };
              setInvoices([newInv, ...invoices]);
              setShowNewInvoiceModal(false);
              setInvoicePreviewModal(newInv);
            }} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Customer / Patient / Client</label>
                <select className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs">
                  {customers.map(c => <option key={c.id}>{c.name} ({c.phone})</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Tax Type</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs">
                    <option>B2C (Consumer)</option>
                    <option>B2B (With GSTIN)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">GST Rate</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs">
                    <option>18% (Standard Services)</option>
                    <option>12% (Healthcare/Goods)</option>
                    <option>5% (Concessional)</option>
                    <option>0% (Exempt)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Item / Service Description</label>
                <input type="text" defaultValue="Consultation & Professional Services" className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input type="number" defaultValue="3500" className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs font-bold" />
              </div>
              <div className="pt-2 flex justify-end gap-2 border-t">
                <button type="button" onClick={() => setShowNewInvoiceModal(false)} className="px-4 py-2 rounded-xl text-xs text-gray-600">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700">Generate Invoice</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Quote Modal */}
      {showNewQuoteModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 p-5 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-gray-900 text-base">Draft New Quotation</h3>
              <button onClick={() => setShowNewQuoteModal(false)} className="text-gray-400 hover:text-gray-600 font-bold">✕</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const newQt = {
                id: `QT-2026-${Math.floor(100 + Math.random() * 900)}`,
                date: 'Today',
                customer: 'New Enquiry Client',
                phone: '+91 93486 33365',
                validUntil: '15 Days',
                items: [{ desc: 'Custom Package / Service Plan', rate: 15000, qty: 1 }],
                status: 'draft',
                total: 15000,
              };
              setQuotations([newQt, ...quotations]);
              setShowNewQuoteModal(false);
            }} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Client Name</label>
                <input type="text" defaultValue="New Enquiry Client" className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Quotation Scope</label>
                <input type="text" defaultValue="Annual Maintenance & Care Package" className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Total (₹)</label>
                <input type="number" defaultValue="15000" className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs font-bold" />
              </div>
              <div className="pt-2 flex justify-end gap-2 border-t">
                <button type="button" onClick={() => setShowNewQuoteModal(false)} className="px-4 py-2 rounded-xl text-xs text-gray-600">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700">Save Draft</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


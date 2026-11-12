import React, { useState } from 'react';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  QrCode, 
  Receipt, 
  Filter, 
  Send, 
  DollarSign, 
  Copy, 
  ShieldCheck, 
  AlertCircle,
  RefreshCw,
  Printer
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { formatLakhs } from '../industryConfig';

export default function PaymentsPage() {
  const { workspace, customers } = useAppStore();
  const [activeTab, setActiveTab] = useState('transactions'); // 'transactions' | 'links' | 'instalments' | 'refunds'
  const [showDeskCollectModal, setShowDeskCollectModal] = useState(false);
  const [showCreateLinkModal, setShowCreateLinkModal] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [receiptModal, setReceiptModal] = useState(null);

  // Desk Collect form state
  const [collectCustomer, setCollectCustomer] = useState(customers[0]?.name || 'Walk-in Customer');
  const [collectAmount, setCollectAmount] = useState('1500');
  const [collectMode, setCollectMode] = useState('upi'); // 'upi' | 'cash' | 'card'
  const [collectRef, setCollectRef] = useState('UPI-260199482');
  const [collectNote, setCollectNote] = useState('Front desk immediate collection');

  // New Link form state
  const [linkTitle, setLinkTitle] = useState('Consultation & Diagnostic Token');
  const [linkCustomer, setLinkCustomer] = useState(customers[0]?.name || '');
  const [linkAmount, setLinkAmount] = useState('2400');
  const [linkExpires, setLinkExpires] = useState('24 hours');

  // Transactions list
  const [transactions, setTransactions] = useState([
    { id: 'TXN-98421', customer: customers[0]?.name || 'Meenakshi Ammal', amount: 1500, mode: 'UPI / GPay', status: 'completed', date: 'Today, 10:45 AM', ref: 'UPI-3948201994', note: 'Consultation & Blood Panel' },
    { id: 'TXN-98420', customer: 'Suresh Kumar', amount: 4800, mode: 'Razorpay Auto-Debit', status: 'completed', date: 'Today, 09:15 AM', ref: 'rzp_pay_90248271', note: 'Monthly Membership' },
    { id: 'TXN-98419', customer: 'Priya Sundaram', amount: 3200, mode: 'Cash at Desk', status: 'completed', date: 'Yesterday, 04:30 PM', ref: 'CSH-REC-892', note: 'Specialist Session' },
    { id: 'TXN-98418', customer: 'Karthik Raja', amount: 12000, mode: 'UPI / PhonePe', status: 'completed', date: 'Yesterday, 02:10 PM', ref: 'UPI-4928104881', note: 'Instalment #1 Payment' },
    { id: 'TXN-98417', customer: 'Anitha Velan', amount: 850, mode: 'UPI / Paytm', status: 'failed', date: '08 Nov, 11:20 AM', ref: 'UPI-FAIL-019', note: 'Bank server timeout' },
  ]);

  // Payment links
  const [paymentLinks, setPaymentLinks] = useState([
    { id: 'pl_01', title: 'Token Advance Deposit', customer: customers[0]?.name || 'Meenakshi Ammal', amount: 1000, status: 'paid', created: 'Today, 09:00 AM', link: 'https://rzp.io/l/karttik-demo-01' },
    { id: 'pl_02', title: 'Stage 2 Milestone Payment', customer: 'Vignesh Balakrishnan', amount: 25000, status: 'active', created: 'Yesterday, 11:30 AM', link: 'https://rzp.io/l/karttik-demo-02' },
    { id: 'pl_03', title: 'Batch Registration Fee', customer: 'Saravanan Muthu', amount: 18000, status: 'active', created: '07 Nov, 03:00 PM', link: 'https://rzp.io/l/karttik-demo-03' },
  ]);

  // Instalments schedule
  const [instalmentPlans, setInstalmentPlans] = useState([
    {
      id: 'inst_01',
      customer: 'Kavitha Ramasamy',
      serviceOrDeal: 'Super 30 Intensive Course 2026',
      totalAmount: 48000,
      paidAmount: 24000,
      parts: [
        { num: 1, amount: 12000, due: '15 Oct 2026', status: 'paid', paidOn: '14 Oct' },
        { num: 2, amount: 12000, due: '01 Nov 2026', status: 'paid', paidOn: '31 Oct' },
        { num: 3, amount: 12000, due: '20 Nov 2026', status: 'pending', paidOn: null },
        { num: 4, amount: 12000, due: '15 Dec 2026', status: 'scheduled', paidOn: null },
      ]
    },
    {
      id: 'inst_02',
      customer: 'Sundar Rajan',
      serviceOrDeal: '3 BHK Flat Booking (Tower A Unit 402)',
      totalAmount: 7200000,
      paidAmount: 1800000,
      parts: [
        { num: 1, amount: 200000, due: 'Token Booking', status: 'paid', paidOn: '20 Oct' },
        { num: 2, amount: 1600000, due: 'Agreement of Sale', status: 'paid', paidOn: '04 Nov' },
        { num: 3, amount: 2700000, due: 'Foundation Slab Cast', status: 'pending', paidOn: null },
        { num: 4, amount: 2700000, due: 'Handover & Registry', status: 'scheduled', paidOn: null },
      ]
    }
  ]);

  // Refunds
  const [refunds, setRefunds] = useState([
    { id: 'REF-2026-09', customer: 'Rajesh K.', amount: 500, reason: 'Duplicate UPI debit by bank', status: 'processed', utr: 'UTR-984019284102', date: '06 Nov 2026' },
    { id: 'REF-2026-08', customer: 'Revathi S.', amount: 1200, reason: 'Doctor slot rescheduled by clinic', status: 'processed', utr: 'UTR-849201948211', date: '01 Nov 2026' },
  ]);

  const handleCopyLink = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCollectDesk = (e) => {
    e.preventDefault();
    const newTxn = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      customer: collectCustomer,
      amount: parseFloat(collectAmount) || 0,
      mode: collectMode === 'upi' ? 'UPI / Desk QR' : collectMode === 'cash' ? 'Cash at Desk' : 'Card POS',
      status: 'completed',
      date: 'Just now',
      ref: collectRef || `DESK-${Date.now().toString().slice(-6)}`,
      note: collectNote,
    };
    setTransactions([newTxn, ...transactions]);
    setShowDeskCollectModal(false);
    setReceiptModal(newTxn);
  };

  const handleCreateLink = (e) => {
    e.preventDefault();
    const newLink = {
      id: `pl_${Date.now().toString().slice(-4)}`,
      title: linkTitle,
      customer: linkCustomer,
      amount: parseFloat(linkAmount) || 0,
      status: 'active',
      created: 'Just now',
      link: `https://rzp.io/l/demo-${Math.random().toString(36).substring(2, 7)}`,
    };
    setPaymentLinks([newLink, ...paymentLinks]);
    setShowCreateLinkModal(false);
  };

  const handleMarkInstalmentPaid = (planId, partNum) => {
    setInstalmentPlans(prev => prev.map(p => {
      if (p.id !== planId) return p;
      const targetPart = p.parts.find(pt => pt.num === partNum);
      if (!targetPart || targetPart.status === 'paid') return p;
      const updatedParts = p.parts.map(pt => pt.num === partNum ? { ...pt, status: 'paid', paidOn: 'Today' } : pt);
      return {
        ...p,
        paidAmount: p.paidAmount + targetPart.amount,
        parts: updatedParts,
      };
    }));
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Payments & Collections</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Collect via WhatsApp payment links, desk QR, cash and track milestone instalments.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCreateLinkModal(true)}
            className="px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50 flex items-center gap-1.5 shadow-2xs"
          >
            <Send className="w-3.5 h-3.5 text-blue-600" />
            Create Payment Link
          </button>
          <button
            onClick={() => setShowDeskCollectModal(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Receipt className="w-3.5 h-3.5" />
            Collect at Desk
          </button>
        </div>
      </div>

      {/* Gateway & Snapshot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Gateway Status */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">Payment Gateway</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Connected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
              RZP
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Razorpay India</p>
              <p className="text-[11px] text-gray-400">MID: karttik_live_9482</p>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Webhook live (instant WhatsApp receipt)
          </p>
        </div>

        {/* Collected Today */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Collected Today</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <p className="text-xl font-bold text-gray-900">₹22,300</p>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">
            +18% compared to yesterday
          </p>
          <div className="mt-2 text-[11px] text-gray-400">
            UPI: ₹17,500 • Cash: ₹4,800
          </div>
        </div>

        {/* Pending Links */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Pending Links</span>
            <Clock className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <p className="text-xl font-bold text-gray-900">₹43,000</p>
          <p className="text-[11px] text-amber-600 font-medium mt-1">
            2 links active on WhatsApp
          </p>
          <div className="mt-2 text-[11px] text-gray-400">
            AI sends auto-reminder at 6h before expiry
          </div>
        </div>

        {/* Next Instalments Due */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Instalments Due This Month</span>
            <DollarSign className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <p className="text-xl font-bold text-gray-900">₹2.82 Lakhs</p>
          <p className="text-[11px] text-gray-500 font-medium mt-1">
            Across 5 registered deals
          </p>
          <div className="mt-2 text-[11px] text-blue-600 font-medium">
            Next due: Nov 20 (₹12,000)
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'transactions'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Transactions Log ({transactions.length})
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'links'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Payment Links ({paymentLinks.length})
          </button>
          <button
            onClick={() => setActiveTab('instalments')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'instalments'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Instalment Schedules ({instalmentPlans.length})
          </button>
          <button
            onClick={() => setActiveTab('refunds')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'refunds'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Refund Log ({refunds.length})
          </button>
        </nav>
      </div>

      {/* TAB 1: Transactions */}
      {activeTab === 'transactions' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Txn ID & Date</th>
                  <th className="px-5 py-3.5">Customer / Client</th>
                  <th className="px-5 py-3.5">Purpose / Note</th>
                  <th className="px-5 py-3.5">Payment Mode</th>
                  <th className="px-5 py-3.5 text-right">Amount</th>
                  <th className="px-5 py-3.5 text-center">Status</th>
                  <th className="px-5 py-3.5 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="font-semibold text-gray-900">{txn.id}</div>
                      <div className="text-[11px] text-gray-400">{txn.date}</div>
                    </td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {txn.customer}
                    </td>
                    <td className="px-5 py-3.5 text-gray-600">
                      <div>{txn.note}</div>
                      <div className="text-[11px] text-gray-400 font-mono">{txn.ref}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        {txn.mode}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right font-bold text-gray-900">
                      ₹{txn.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {txn.status === 'completed' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" /> Settled
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                          <AlertCircle className="w-3 h-3" /> Failed
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        onClick={() => setReceiptModal(txn)}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 hover:underline"
                      >
                        <Receipt className="w-3.5 h-3.5" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Payment Links */}
      {activeTab === 'links' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <span className="text-xs text-gray-500 font-medium">
              Payment links are shared automatically via WhatsApp and expire automatically.
            </span>
            <button
              onClick={() => setShowCreateLinkModal(true)}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> New Link
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            {paymentLinks.map((link) => (
              <div key={link.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/60 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">{link.title}</span>
                    {link.status === 'paid' ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        PAID
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        ACTIVE LINK
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    Client: <span className="text-gray-800 font-medium">{link.customer}</span> • Created: {link.created}
                  </p>
                  <p className="text-xs text-blue-600 font-mono break-all">{link.link}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-base font-bold text-gray-900">
                    ₹{link.amount.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => handleCopyLink(link.link, link.id)}
                    className="p-2 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
                    title="Copy payment link"
                  >
                    {copiedId === link.id ? (
                      <span className="text-xs font-semibold text-emerald-600 px-1">Copied!</span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => alert(`Simulated: Sent payment link to WhatsApp (${workspace.whatsappPhone})`)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700 flex items-center gap-1 shadow-2xs"
                  >
                    <Send className="w-3 h-3" /> WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Instalments */}
      {activeTab === 'instalments' && (
        <div className="space-y-4">
          {instalmentPlans.map((plan) => {
            const percent = Math.round((plan.paidAmount / plan.totalAmount) * 100);
            return (
              <div key={plan.id} className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{plan.customer}</h3>
                    <p className="text-xs text-gray-500">{plan.serviceOrDeal}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">Total Contract</span>
                    <p className="text-base font-bold text-gray-900">{formatLakhs(plan.totalAmount)}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex justify-between text-xs">
                    <span className="text-emerald-700 font-semibold">Collected: {formatLakhs(plan.paidAmount)} ({percent}%)</span>
                    <span className="text-gray-500">Remaining: {formatLakhs(plan.totalAmount - plan.paidAmount)}</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                {/* Milestone breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {plan.parts.map((part) => (
                    <div 
                      key={part.num} 
                      className={`p-3.5 rounded-xl border text-xs ${
                        part.status === 'paid' 
                          ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' 
                          : part.status === 'pending'
                          ? 'bg-amber-50/60 border-amber-200 text-amber-900'
                          : 'bg-gray-50 border-gray-200 text-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold uppercase tracking-wider text-[10px]">Part {part.num}</span>
                        {part.status === 'paid' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                        {part.status === 'pending' && <Clock className="w-3.5 h-3.5 text-amber-600" />}
                      </div>
                      <p className="text-sm font-bold">{formatLakhs(part.amount)}</p>
                      <p className="text-[11px] mt-1 opacity-80">
                        {part.status === 'paid' ? `Paid on ${part.paidOn}` : `Due: ${part.due}`}
                      </p>
                      {part.status === 'pending' && (
                        <button
                          onClick={() => handleMarkInstalmentPaid(plan.id, part.num)}
                          className="mt-2.5 w-full py-1 rounded-lg bg-amber-600 text-white font-medium text-[11px] hover:bg-amber-700 transition-colors shadow-2xs"
                        >
                          Mark Paid Now
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 4: Refunds */}
      {activeTab === 'refunds' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <span className="text-xs text-gray-500 font-medium">
              Processed through Razorpay Instant Refund API directly to customer source VPA.
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            {refunds.map((ref) => (
              <div key={ref.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">{ref.id}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      SUCCESSFULLY CREDITED
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Beneficiary: <span className="font-semibold text-gray-900">{ref.customer}</span> • Reason: {ref.reason}
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono">Bank UTR: {ref.utr} • Date: {ref.date}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-red-600">-₹{ref.amount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desk Collect Modal */}
      {showDeskCollectModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-blue-600 text-white">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5" />
                <h3 className="font-bold text-base">Collect at Front Desk</h3>
              </div>
              <button 
                onClick={() => setShowDeskCollectModal(false)}
                className="text-white/80 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCollectDesk} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Customer / Client</label>
                <input
                  type="text"
                  required
                  value={collectCustomer}
                  onChange={(e) => setCollectCustomer(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  required
                  value={collectAmount}
                  onChange={(e) => setCollectAmount(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm font-bold text-gray-900 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Payment Mode</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCollectMode('upi')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      collectMode === 'upi' ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    UPI / Desk QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setCollectMode('cash')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      collectMode === 'cash' ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    Cash Desk
                  </button>
                  <button
                    type="button"
                    onClick={() => setCollectMode('card')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      collectMode === 'card' ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    Card POS
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Receipt Note / Service</label>
                <input
                  type="text"
                  value={collectNote}
                  onChange={(e) => setCollectNote(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowDeskCollectModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 shadow-sm"
                >
                  Record & Generate Receipt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Link Modal */}
      {showCreateLinkModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-base">Generate Instant Payment Link</h3>
              <button 
                onClick={() => setShowCreateLinkModal(false)}
                className="text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLink} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Link Title / Purpose</label>
                <input
                  type="text"
                  required
                  value={linkTitle}
                  onChange={(e) => setLinkTitle(e.target.value)}
                  placeholder="e.g. Consultation fee / Flat advance"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  type="text"
                  required
                  value={linkCustomer}
                  onChange={(e) => setLinkCustomer(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    required
                    value={linkAmount}
                    onChange={(e) => setLinkAmount(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm font-bold focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Expires After</label>
                  <select
                    value={linkExpires}
                    onChange={(e) => setLinkExpires(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
                  >
                    <option>24 hours</option>
                    <option>48 hours</option>
                    <option>7 days</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-800 flex items-start gap-2">
                <Send className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  Once generated, the AI Agent will auto-deliver this link via WhatsApp to the customer's phone number.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowCreateLinkModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 shadow-sm"
                >
                  Generate Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Printable Receipt Modal */}
      {receiptModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 bg-gray-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-xs tracking-wider uppercase">Official Payment Receipt</span>
              </div>
              <button 
                onClick={() => setReceiptModal(null)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-center">
              <div>
                <p className="text-base font-bold text-gray-900">{workspace.businessName}</p>
                <p className="text-[11px] text-gray-500">{workspace.address}</p>
                <p className="text-[10px] text-gray-400 font-mono">GSTIN: {workspace.gstin}</p>
              </div>

              <div className="py-3 border-y border-dashed border-gray-200">
                <span className="text-xs text-gray-500">Amount Received</span>
                <p className="text-2xl font-black text-gray-950 mt-0.5">₹{receiptModal.amount.toLocaleString('en-IN')}</p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Status: Settled via {receiptModal.mode}
                </span>
              </div>

              <div className="text-left text-xs space-y-1.5 text-gray-600 bg-gray-50 p-3 rounded-xl">
                <div className="flex justify-between">
                  <span className="text-gray-400">Receipt Ref:</span>
                  <span className="font-mono font-medium text-gray-900">{receiptModal.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Customer:</span>
                  <span className="font-medium text-gray-900">{receiptModal.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Purpose:</span>
                  <span className="font-medium text-gray-900">{receiptModal.note}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date & Time:</span>
                  <span className="font-medium text-gray-900">{receiptModal.date}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-black flex items-center gap-1.5 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" /> Print Thermal Slip
                </button>
                <button
                  onClick={() => alert(`Simulated: Sent PDF receipt on WhatsApp to ${receiptModal.customer}`)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" /> Send WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


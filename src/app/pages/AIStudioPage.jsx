import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ShieldAlert, 
  FileText, 
  Send, 
  Plus, 
  CheckCircle2, 
  Zap, 
  MessageSquare, 
  Trash2, 
  Upload, 
  Coins, 
  Languages,
  Check
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function AIStudioPage() {
  const { workspace, currentConfig, setState } = useAppStore();
  const [activeTab, setActiveTab] = useState('rules'); // 'rules' | 'knowledge' | 'sandbox' | 'credits'

  // AI Rules state
  const [tone, setTone] = useState('Warm, courteous and professional Indian business tone');
  const [greeting, setGreeting] = useState('Vanakkam! Welcome to our front desk. How may I assist you today?');
  const [neverRules, setNeverRules] = useState(
    currentConfig.aiNeverRules || [
      'Never diagnose prescription medications or provide clinical medical prognosis without a verified doctor review.',
      'Never offer unapproved cash discounts or fee waivers beyond official brochures.',
      'Never share customer phone numbers or private medical/financial notes with third parties.',
    ]
  );
  const [newRule, setNewRule] = useState('');

  // Knowledge docs
  const [knowledgeDocs, setKnowledgeDocs] = useState([
    { id: 'k1', title: 'Pricing & Fee Structure 2026.pdf', size: '1.4 MB', chunks: 18, status: 'Indexed' },
    { id: 'k2', title: 'Frequently Asked Questions & Tamil Guide.docx', size: '640 KB', chunks: 12, status: 'Indexed' },
    { id: 'k3', title: 'Doctor / Faculty Timings & Clinic SOP.pdf', size: '2.1 MB', chunks: 26, status: 'Indexed' },
  ]);

  // Sandbox chat
  const [sandboxMessages, setSandboxMessages] = useState([
    { sender: 'user', text: 'Hi, doctor timings enna? Innikku evening consultation kedaikuma?' },
    { sender: 'ai', text: 'Vanakkam! Dr. A. Sundaram, MD innikku evening 5:00 PM mudhal 8:00 PM varai OPD-la irukaar. Ungalukku 6:30 PM slot confirm panlatuma? Consultation fee ₹400.' },
  ]);
  const [sandboxInput, setSandboxInput] = useState('');

  const handleAddRule = (e) => {
    e.preventDefault();
    if (!newRule.trim()) return;
    setNeverRules([...neverRules, newRule.trim()]);
    setNewRule('');
  };

  const handleRemoveRule = (index) => {
    setNeverRules(neverRules.filter((_, idx) => idx !== index));
  };

  const handleSandboxSend = (e) => {
    e.preventDefault();
    if (!sandboxInput.trim()) return;
    const userMsg = sandboxInput.trim();
    setSandboxMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setSandboxInput('');

    setTimeout(() => {
      let aiReply = "Vanakkam! I've noted your request. I can help you confirm the booking or connect you with our front desk right away.";
      if (userMsg.toLowerCase().includes('tamil') || userMsg.toLowerCase().includes('enna') || userMsg.toLowerCase().includes('slot')) {
        aiReply = "Nichayamaaga! Ungal details check seithullaen. Slot availability & location details WhatsApp-la send panren. Anything else I can help with?";
      }
      setSandboxMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Bot className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">AI Agent Studio</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Configure custom instructions, "What AI Never Does" boundaries, knowledge base docs, and prompt testing.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Coins className="w-4 h-4 text-amber-500" />
            <span>{workspace.credits.toLocaleString('en-IN')} AI Credits</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('rules')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'rules' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Agent Behavior & Guardrails
          </button>
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'knowledge' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Knowledge Base ({knowledgeDocs.length} Docs)
          </button>
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'sandbox' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Live Sandbox Chat Tester
          </button>
          <button
            onClick={() => setActiveTab('credits')}
            className={`pb-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'credits' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Usage & Top-ups
          </button>
        </nav>
      </div>

      {/* TAB 1: Rules & Guardrails */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-5">
            <h3 className="font-bold text-gray-900 text-sm">Persona & Tone Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Tone & Communication Style</label>
                <input
                  type="text"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">Standard Greeting Message</label>
                <input
                  type="text"
                  value={greeting}
                  onChange={(e) => setGreeting(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs text-blue-900">
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-blue-600" />
                <span>Multilingual Support: <strong>Tamil, Tanglish, Hindi, English</strong> active simultaneously</span>
              </div>
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Auto-Detect Enabled</span>
            </div>
          </div>

          {/* What AI Never Does */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-gray-900 text-sm">"What AI Never Does" Hard Guardrails</h3>
            </div>
            <p className="text-xs text-gray-500">
              These rules are injected into every prompt. When a customer inquiry breaches any of these guardrails, the AI immediately initiates a human handoff.
            </p>

            <div className="space-y-2.5">
              {neverRules.map((rule, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-red-50/50 border border-red-200 flex items-start justify-between gap-3 text-xs text-red-900">
                  <span className="font-medium">• {rule}</span>
                  <button
                    onClick={() => handleRemoveRule(idx)}
                    className="text-red-400 hover:text-red-700 p-1"
                    title="Remove rule"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddRule} className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="e.g. Never promise delivery dates without dispatch team confirmation..."
                value={newRule}
                onChange={(e) => setNewRule(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition-colors shadow-2xs"
              >
                Add Guardrail
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TAB 2: Knowledge Base */}
      {activeTab === 'knowledge' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Business Knowledge Documents</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Uploaded files are chunked, vectorized, and searched via RAG before the AI answers customer questions.
                </p>
              </div>

              <button
                onClick={() => {
                  const newDoc = { id: `k${Date.now()}`, title: 'Service Catalog & Package Details 2026.pdf', size: '890 KB', chunks: 14, status: 'Indexed' };
                  setKnowledgeDocs([...knowledgeDocs, newDoc]);
                }}
                className="px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-2xs"
              >
                <Upload className="w-3.5 h-3.5" /> Upload File (PDF/DOCX)
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {knowledgeDocs.map((doc) => (
                <div key={doc.id} className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs sm:text-sm">{doc.title}</p>
                      <p className="text-[11px] text-gray-400">{doc.size} • {doc.chunks} semantic chunks</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Sandbox Chat */}
      {activeTab === 'sandbox' && (
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex flex-col h-[520px]">
          <div className="p-4 border-b border-gray-100 bg-gray-50/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-gray-800">Agent Interactive Playground</span>
              <span className="text-gray-400">• Try asking in Tamil, English, or Tanglish</span>
            </div>
            <button
              onClick={() => setSandboxMessages([])}
              className="text-gray-400 hover:text-gray-600 text-[11px] font-medium"
            >
              Clear Chat
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-5 overflow-y-auto space-y-3 bg-[#f8faff]">
            {sandboxMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-2xs' 
                    : 'bg-white text-gray-900 border border-gray-200/80 rounded-bl-none shadow-2xs'
                }`}>
                  {msg.sender === 'ai' && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 uppercase mb-1">
                      <Sparkles className="w-3 h-3" /> AI Assistant
                    </div>
                  )}
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSandboxSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              placeholder="Type a test message (e.g. 'Can I book a demo class tomorrow?')..."
              value={sandboxInput}
              onChange={(e) => setSandboxInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 shadow-2xs flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Send
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: Usage & Top-ups */}
      {activeTab === 'credits' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <span className="text-xs text-gray-500">Current AI Credits Balance</span>
            <p className="text-3xl font-extrabold text-blue-600">{workspace.credits.toLocaleString('en-IN')}</p>
            <p className="text-xs text-gray-500">
              1 credit = 1 WhatsApp AI message response or 30 seconds of phone call processing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3">
            <span className="text-xs font-bold text-gray-900">Standard Top-up</span>
            <p className="text-2xl font-bold text-gray-900">₹999 <span className="text-xs font-normal text-gray-500">+ GST</span></p>
            <p className="text-xs text-gray-500">5,000 AI Credits (~1,250 WhatsApp conversations)</p>
            <button 
              onClick={() => {
                setState(prev => ({ ...prev, workspace: { ...prev.workspace, credits: prev.workspace.credits + 5000 } }));
                alert('Added 5,000 AI credits successfully!');
              }}
              className="w-full py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
            >
              Top-up 5,000 Credits
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3 border-blue-300">
            <span className="text-xs font-bold text-blue-600">Enterprise High-Volume</span>
            <p className="text-2xl font-bold text-gray-900">₹2,999 <span className="text-xs font-normal text-gray-500">+ GST</span></p>
            <p className="text-xs text-gray-500">20,000 AI Credits + Priority RAG response times</p>
            <button 
              onClick={() => {
                setState(prev => ({ ...prev, workspace: { ...prev.workspace, credits: prev.workspace.credits + 20000 } }));
                alert('Added 20,000 AI credits successfully!');
              }}
              className="w-full py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-black"
            >
              Top-up 20,000 Credits
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import {
  Search,
  MessageSquare,
  Send,
  Paperclip,
  Smile,
  Bot,
  UserCheck,
  Check,
  CheckCheck,
  Play,
  Pause,
  Clock,
  Sparkles,
  Phone,
  FileText,
  CreditCard,
  Tag,
  AlertCircle,
  MoreVertical,
  ExternalLink,
  ChevronRight,
  Filter,
  Globe,
  Lock
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { industriesConfig } from '../industryConfig';

export default function InboxPage() {
  const { conversations, currentConfig, addChatMessage, setState } = useAppStore();
  const [selectedConvId, setSelectedConvId] = useState(conversations[0]?.id || 'conv1');
  const [filterChannel, setFilterChannel] = useState('all'); // 'all' | 'whatsapp' | 'instagram' | 'web'
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'ai' | 'human' | 'unread'
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isInternalNote, setIsInternalNote] = useState(false);
  const [isAiReplying, setIsAiReplying] = useState(false);
  const [translateEnabled, setTranslateEnabled] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState(null);

  const activeConv = conversations.find((c) => c.id === selectedConvId) || conversations[0];

  // 20s Live simulation of incoming message & AI response
  useEffect(() => {
    const timer = setInterval(() => {
      const incomingReplies = [
        "Doctor sir kitta consultation mudinjuruchu, thank you!",
        "Yes, I will pay the token advance online tonight.",
        "Can you send the location map link on WhatsApp again?",
        "Batch timing 6 PM-ku shift panna mudiyuma?",
      ];
      const randomText = incomingReplies[Math.floor(Math.random() * incomingReplies.length)];

      // Append incoming message
      const incomingMsg = {
        id: `sim_${Date.now()}`,
        sender: 'customer',
        text: randomText,
        time: 'Just now',
        channel: 'whatsapp',
        status: 'delivered',
      };

      setState((prev) => {
        const updated = prev.conversations.map((c) => {
          if (c.id === 'conv1') {
            return {
              ...c,
              lastMessage: randomText,
              lastMessageTime: 'Just now',
              messages: [...c.messages, incomingMsg],
            };
          }
          return c;
        });
        return { ...prev, conversations: updated };
      });

      // Show AI typing and auto reply after 3 seconds
      setIsAiReplying(true);
      setTimeout(() => {
        setIsAiReplying(false);
        const aiMsg = {
          id: `ai_${Date.now()}`,
          sender: 'ai',
          text: 'Vanakkam! Ungal kelvi pathivu seiyappattathu. iSuite AI team is following up immediately.',
          time: 'Just now',
          channel: 'whatsapp',
          status: 'read',
        };
        setState((prev) => {
          const updated = prev.conversations.map((c) => {
            if (c.id === 'conv1') {
              return {
                ...c,
                lastMessage: aiMsg.text,
                lastMessageTime: 'Just now',
                messages: [...c.messages, aiMsg],
              };
            }
            return c;
          });
          return { ...prev, conversations: updated };
        });
      }, 3000);
    }, 22000);

    return () => clearInterval(timer);
  }, [setState]);

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const text = messageInput.trim();
    const sender = isInternalNote ? 'internal' : 'agent';
    const channel = activeConv.channel || 'whatsapp';

    if (addChatMessage) {
      addChatMessage(activeConv.id, sender, text, channel);
    } else {
      const newMsg = {
        id: `msg_${Date.now()}`,
        sender,
        text,
        time: 'Just now',
        channel,
        status: 'sent',
      };

      setState((prev) => {
        const updated = prev.conversations.map((c) => {
          if (c.id === activeConv.id) {
            return {
              ...c,
              lastMessage: newMsg.text,
              lastMessageTime: 'Just now',
              messages: [...c.messages, newMsg],
            };
          }
          return c;
        });
        return { ...prev, conversations: updated };
      });
    }

    setMessageInput('');
  };

  // Toggle Handover between AI and Human
  const toggleHandoff = (convId) => {
    setState((prev) => {
      const updated = prev.conversations.map((c) => {
        if (c.id === convId) {
          const nextStatus = c.status === 'ai' ? 'human' : 'ai';
          return { ...c, status: nextStatus };
        }
        return c;
      });
      return { ...prev, conversations: updated };
    });
  };

  // Filter conversations
  const filteredConversations = conversations.filter((c) => {
    if (filterChannel !== 'all' && c.channel !== filterChannel) return false;
    if (filterStatus === 'unread' && !c.unread) return false;
    if (filterStatus === 'ai' && c.status !== 'ai') return false;
    if (filterStatus === 'human' && c.status !== 'human') return false;
    if (searchQuery && !c.customerName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-2xl border border-gray-200/90 shadow-xs overflow-hidden text-xs select-none animate-fadeIn">
      {/* ---------------- PANE 1: CONVERSATION LIST (LEFT) ---------------- */}
      <div className="w-80 sm:w-88 border-r border-gray-200/90 flex flex-col shrink-0 bg-gray-50/50">
        {/* Search & Channel Tabs */}
        <div className="p-3 border-b border-gray-200/80 space-y-2 bg-white">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chat name or phone..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px] font-semibold">
            <button
              onClick={() => setFilterChannel('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterChannel === 'all' ? 'bg-blue-600 text-white font-bold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterChannel('whatsapp')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterChannel === 'whatsapp' ? 'bg-emerald-600 text-white font-bold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              WhatsApp
            </button>
            <button
              onClick={() => setFilterChannel('instagram')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterChannel === 'instagram' ? 'bg-pink-600 text-white font-bold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Instagram
            </button>
            <button
              onClick={() => setFilterChannel('web')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                filterChannel === 'web' ? 'bg-blue-600 text-white font-bold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Web
            </button>
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {filteredConversations.map((conv) => {
            const isSelected = conv.id === activeConv?.id;
            return (
              <div
                key={conv.id}
                onClick={() => setSelectedConvId(conv.id)}
                className={`p-3.5 transition-all cursor-pointer relative ${
                  isSelected ? 'bg-blue-50/70 border-l-4 border-blue-600' : 'hover:bg-gray-100/60'
                }`}
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className="font-bold text-gray-950 truncate">{conv.customerName}</span>
                  <span className="text-[10px] text-gray-400 shrink-0">{conv.lastMessageTime}</span>
                </div>

                <p className="text-[11px] text-gray-500 line-clamp-1 leading-relaxed mb-1.5">
                  {conv.lastMessage}
                </p>

                <div className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5">
                    {conv.channel === 'whatsapp' && (
                      <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">WhatsApp</span>
                    )}
                    {conv.channel === 'instagram' && (
                      <span className="px-1.5 py-0.2 rounded bg-pink-100 text-pink-800 font-bold">Instagram</span>
                    )}
                    {conv.channel === 'web' && (
                      <span className="px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 font-bold">Web Chat</span>
                    )}

                    {conv.status === 'ai' ? (
                      <span className="flex items-center gap-0.5 text-purple-700 font-semibold bg-purple-50 px-1.5 py-0.2 rounded">
                        <Bot className="w-3 h-3" /> AI
                      </span>
                    ) : (
                      <span className="flex items-center gap-0.5 text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.2 rounded">
                        <UserCheck className="w-3 h-3" /> Staff
                      </span>
                    )}
                  </div>

                  {conv.unread > 0 && (
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[9px]">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- PANE 2: CHAT THREAD (CENTER) ---------------- */}
      <div className="flex-1 flex flex-col bg-[#efeae2]/30 relative min-w-0">
        {/* Thread Header */}
        <div className="h-16 px-4 bg-white border-b border-gray-200/80 flex items-center justify-between gap-3 shrink-0 shadow-2xs">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
              {activeConv?.customerName?.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-gray-950 text-sm truncate flex items-center gap-1.5">
                <span>{activeConv?.customerName}</span>
                <span className="text-[10px] text-gray-400 font-normal">{activeConv?.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 24h Meta Window Active
                </span>
                <span>·</span>
                <button
                  onClick={() => setTranslateEnabled(!translateEnabled)}
                  className={`flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded cursor-pointer ${
                    translateEnabled ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  <span>Tanglish Translate</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI vs Human Handoff Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleHandoff(activeConv?.id)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                activeConv?.status === 'ai'
                  ? 'bg-amber-500 hover:bg-amber-600 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              {activeConv?.status === 'ai' ? (
                <>
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Take Over From AI</span>
                </>
              ) : (
                <>
                  <Bot className="w-3.5 h-3.5" />
                  <span>Hand Back To AI</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* AI Brief Summary Card upon Handoff */}
        {activeConv?.summary && (
          <div className="mx-4 mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-purple-50/90 border border-blue-200/80 text-xs shadow-xs">
            <div className="flex items-center gap-1.5 text-blue-700 font-bold uppercase tracking-wider text-[10px] mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI Handover Summary Brief</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div>
                <span className="text-gray-400 font-medium">Wants:</span>
                <p className="text-gray-800 font-semibold">{activeConv.summary.wants}</p>
              </div>
              <div>
                <span className="text-gray-400 font-medium">Done:</span>
                <p className="text-gray-800 font-semibold">{activeConv.summary.done}</p>
              </div>
              <div>
                <span className="text-gray-400 font-medium">Told Them:</span>
                <p className="text-gray-800 font-semibold">{activeConv.summary.toldThem}</p>
              </div>
              <div>
                <span className="text-gray-400 font-medium">Next:</span>
                <p className="text-blue-700 font-bold">{activeConv.summary.next}</p>
              </div>
            </div>
          </div>
        )}

        {/* Chat Bubbles */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeConv?.messages?.map((msg) => {
            const isCustomer = msg.sender === 'customer';
            const isAi = msg.sender === 'ai';
            const isInternal = msg.sender === 'internal';

            if (isInternal) {
              return (
                <div key={msg.id} className="mx-auto max-w-md p-2.5 rounded-xl bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs shadow-xs">
                  <div className="font-bold flex items-center gap-1 text-[10px] uppercase tracking-wider text-amber-700 mb-0.5">
                    <Lock className="w-3 h-3" />
                    <span>Internal Staff Note (Customer cannot see this)</span>
                  </div>
                  <p>{msg.text}</p>
                </div>
              );
            }

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isCustomer ? 'items-start' : 'items-end'}`}
              >
                <div
                  className={`max-w-[78%] p-3.5 rounded-2xl shadow-xs text-xs relative ${
                    isCustomer
                      ? 'bg-white text-gray-900 rounded-tl-xs border border-gray-200/70'
                      : isAi
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-xs shadow-blue-500/20'
                      : 'bg-emerald-600 text-white rounded-tr-xs'
                  }`}
                >
                  {/* Sender Badge */}
                  {isAi && (
                    <div className="flex items-center gap-1 text-[10px] text-blue-200 font-bold mb-1">
                      <Bot className="w-3 h-3" />
                      <span>iSuite AI Assistant</span>
                    </div>
                  )}

                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                  {translateEnabled && isCustomer && (
                    <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-blue-700 italic">
                      Translation: "Hello! Is Dr. Sundaram available today? Need blood sugar checkup."
                    </div>
                  )}

                  <div className={`flex items-center justify-end gap-1 text-[10px] mt-1 ${isCustomer ? 'text-gray-400' : 'text-white/70'}`}>
                    <span>{msg.time}</span>
                    {!isCustomer && <CheckCheck className="w-3.5 h-3.5 text-blue-200" />}
                  </div>
                </div>
              </div>
            );
          })}

          {/* AI Typing state simulation */}
          {isAiReplying && (
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/90 border border-gray-200 text-xs text-blue-600 max-w-[200px] animate-pulse">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span className="font-semibold text-[11px]">AI is generating reply...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200/80 flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsInternalNote(!isInternalNote)}
            className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              isInternalNote ? 'bg-amber-100 border-amber-300 text-amber-900' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
            title="Toggle Private Staff Note"
          >
            Note
          </button>

          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder={isInternalNote ? "Write private internal note..." : "Type reply in Tamil, Tanglish or English..."}
            className={`flex-1 px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
              isInternalNote
                ? 'bg-amber-50/60 border-amber-300 text-amber-900 focus:ring-1 focus:ring-amber-500'
                : 'border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          />

          <button
            type="submit"
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-xs cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* ---------------- PANE 3: CUSTOMER PROFILE (RIGHT) ---------------- */}
      <div className="w-72 sm:w-80 border-l border-gray-200/90 bg-white p-4 overflow-y-auto space-y-5 hidden md:block shrink-0">
        <div className="text-center pb-4 border-b border-gray-100">
          <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 font-black text-lg mx-auto flex items-center justify-center mb-2">
            {activeConv?.customerName?.charAt(0)}
          </div>
          <h3 className="font-bold text-gray-950 text-sm">{activeConv?.customerName}</h3>
          <p className="text-xs text-gray-500">{activeConv?.phone}</p>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
            {currentConfig.customerSingular} Profile
          </span>
        </div>

        {/* Customer Tags */}
        <div>
          <span className="font-bold text-gray-700 text-[11px] uppercase tracking-wider block mb-2">
            Tags & Segments
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded-lg bg-gray-100 text-gray-700 text-[10px] font-semibold">
              VIP WhatsApp
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-semibold">
              Madurai Resident
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
              Opt-in Verified
            </span>
          </div>
        </div>

        {/* Upcoming Bookings / Pipeline Stage */}
        <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
          <span className="font-bold text-gray-700 text-[11px] uppercase tracking-wider block">
            Next Scheduled Slot
          </span>
          <div className="text-xs font-semibold text-gray-900 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Today 10:30 AM (Dr. Sundaram)</span>
          </div>
          <div className="text-[11px] text-gray-500">
            Consultation fee: ₹400 (Payment pending at desk)
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-1.5 pt-2 border-t border-gray-100">
          <button
            onClick={() => alert(`Call initiated to ${activeConv?.phone} via iSuite Phone`)}
            className="w-full py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Call Customer</span>
          </button>
          <button
            onClick={() => alert(`GST Tax Invoice template generated for ${activeConv?.customerName}`)}
            className="w-full py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Send GST Quote / Invoice</span>
          </button>
        </div>
      </div>
    </div>
  );
}


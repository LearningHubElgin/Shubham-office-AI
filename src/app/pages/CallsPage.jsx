import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  PhoneMissed, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Search, 
  User, 
  Mic, 
  MicOff, 
  PhoneOff,
  Volume2
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function CallsPage() {
  const { workspace, customers } = useAppStore();
  const [activeTab, setActiveTab] = useState('logs'); // 'logs' | 'dialer'
  const [selectedCall, setSelectedCall] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Dialer state
  const [dialNumber, setDialNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    return () => {
      if (window._callInterval) {
        clearInterval(window._callInterval);
      }
    };
  }, []);

  // Seed Call Logs
  const [callLogs, setCallLogs] = useState([
    {
      id: 'CALL-2026-901',
      customer: customers[0]?.name || 'Meenakshi Ammal',
      phone: customers[0]?.phone || '+91 93486 33365',
      type: 'incoming',
      duration: '3m 14s',
      time: 'Today, 10:12 AM',
      sentiment: 'Satisfied / Reassured',
      recordingUrl: 'https://example.com/recording1.mp3',
      summary: 'Patient enquired about Dr. Sundaram doctor timings and requested confirmation for HbA1c review.',
      transcript: [
        { speaker: 'Patient', time: '00:04', text: 'Hello vanakkam doctor clinic-la irukara?' },
        { speaker: 'AI Agent', time: '00:09', text: 'Vanakkam Meenakshi Ammal! Aam, Dr. Sundaram innikku 10:30 AM OPD-la irukaar. 10:30 AM slot book panren.' },
        { speaker: 'Patient', time: '00:22', text: 'Seri pa, fasting blood sugar report-oda varen.' },
        { speaker: 'AI Agent', time: '00:30', text: 'Romba nandri. Token #07 note pannikonga. WhatsApp-la details anupittaen.' }
      ],
      actionItems: ['Confirmed token #07 on OPD roster', 'Prescription pad opened for Dr. Sundaram']
    },
    {
      id: 'CALL-2026-900',
      customer: 'Suresh Raina (PowerFit Gym)',
      phone: '+91 98765 43210',
      type: 'outgoing',
      duration: '1m 45s',
      time: 'Today, 09:30 AM',
      sentiment: 'Interested',
      recordingUrl: 'https://example.com/recording2.mp3',
      summary: 'Follow-up on 2-day trial pass. Member requested evening trainer availability.',
      transcript: [
        { speaker: 'Staff', time: '00:02', text: 'Hi Suresh, calling from PowerFit regarding your gym trial.' },
        { speaker: 'Member', time: '00:10', text: 'Yes, I wanted to check if Coach Pradeep is available around 7 PM.' },
        { speaker: 'Staff', time: '00:18', text: 'Yes! He handles the 6:30 PM to 8:30 PM fitness slot. See you today!' }
      ],
      actionItems: ['Assigned Coach Pradeep to evening slot']
    },
    {
      id: 'CALL-2026-899',
      customer: 'Unknown Caller',
      phone: '+91 94432 00199',
      type: 'missed',
      duration: '0s',
      time: 'Yesterday, 06:15 PM',
      sentiment: 'Missed',
      recordingUrl: null,
      summary: 'Missed call. AI sent automatic WhatsApp greeting within 15 seconds.',
      transcript: [],
      actionItems: ['AI Auto-WhatsApp sent']
    }
  ]);

  const handleDialClick = (digit) => {
    setDialNumber(prev => prev + digit);
  };

  const handleStartCall = () => {
    if (!dialNumber) return;
    setIsCalling(true);
    setCallDuration(1);
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    window._callInterval = interval;
  };

  const handleEndCall = () => {
    setIsCalling(false);
    clearInterval(window._callInterval);
    const newLog = {
      id: `CALL-2026-${Math.floor(100 + Math.random() * 900)}`,
      customer: 'Direct Outgoing Call',
      phone: dialNumber,
      type: 'outgoing',
      duration: `${Math.floor(callDuration / 60)}m ${callDuration % 60}s`,
      time: 'Just now',
      sentiment: 'Normal',
      recordingUrl: 'https://example.com/rec.mp3',
      summary: `Direct call to ${dialNumber} placed via Karttik Cloud Softphone.`,
      transcript: [
        { speaker: 'Staff', time: '00:01', text: 'Vanakkam, this is front desk.' },
        { speaker: 'Customer', time: '00:05', text: 'Yes, thank you for calling.' }
      ],
      actionItems: ['Logged call in CRM']
    };
    setCallLogs([newLog, ...callLogs]);
    setCallDuration(0);
    setActiveTab('logs');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Phone className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Karttik Phone & AI Call Logs</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Cloud softphone dialer, call recordings, speech-to-text transcripts, and AI takeaway summaries.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'dialer' ? 'logs' : 'dialer')}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {activeTab === 'dialer' ? 'View Call Logs' : 'Open Softphone'}
          </button>
        </div>
      </div>

      {activeTab === 'dialer' && (
        <div className="max-w-xs mx-auto bg-white rounded-3xl border border-gray-200/80 shadow-xl p-6 text-center space-y-5 animate-in zoom-in-95 duration-150">
          <div className="text-xs text-gray-400 font-medium">Karttik VoIP Softphone</div>
          
          <input
            type="text"
            readOnly
            value={dialNumber || '+91 '}
            className="w-full text-center text-xl font-bold font-mono tracking-wider text-gray-900 bg-transparent focus:outline-none"
          />

          {!isCalling ? (
            <>
              {/* Numpad */}
              <div className="grid grid-cols-3 gap-3">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((d) => (
                  <button
                    key={d}
                    onClick={() => handleDialClick(d)}
                    className="w-14 h-14 mx-auto rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-lg flex items-center justify-center transition-colors shadow-2xs"
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setDialNumber(prev => prev.slice(0, -1))}
                  className="p-3 text-xs text-gray-500 hover:text-gray-800"
                >
                  Delete
                </button>
                <button
                  onClick={handleStartCall}
                  className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setDialNumber('')}
                  className="p-3 text-xs text-gray-500 hover:text-gray-800"
                >
                  Clear
                </button>
              </div>
            </>
          ) : (
            <div className="py-6 space-y-4">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping inline-block" />
              <p className="font-bold text-gray-900 text-base">Calling {dialNumber}...</p>
              <p className="font-mono text-sm text-gray-500">
                00:{callDuration < 10 ? `0${callDuration}` : callDuration}
              </p>

              <div className="flex items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-3.5 rounded-full border ${isMuted ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-gray-100 text-gray-700'}`}
                >
                  {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleEndCall}
                  className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg"
                >
                  <PhoneOff className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Call List */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
            <div className="divide-y divide-gray-100">
              {callLogs.map((log) => (
                <div
                  key={log.id}
                  onClick={() => setSelectedCall(log)}
                  className={`p-4 sm:p-5 flex items-center justify-between cursor-pointer transition-colors ${
                    selectedCall?.id === log.id ? 'bg-blue-50/70 border-l-4 border-blue-600' : 'hover:bg-gray-50/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      log.type === 'incoming' ? 'bg-emerald-50 text-emerald-600' :
                      log.type === 'outgoing' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {log.type === 'incoming' && <PhoneIncoming className="w-4 h-4" />}
                      {log.type === 'outgoing' && <PhoneOutgoing className="w-4 h-4" />}
                      {log.type === 'missed' && <PhoneMissed className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{log.customer}</h4>
                      <p className="text-xs text-gray-500 font-mono">{log.phone}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{log.time} • {log.duration}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      log.sentiment === 'Satisfied / Reassured' ? 'bg-emerald-50 text-emerald-700' :
                      log.sentiment === 'Interested' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {log.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: AI Call Details & Transcript */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs p-5 space-y-5">
            {selectedCall ? (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{selectedCall.customer}</h3>
                    <p className="text-xs text-gray-500 font-mono">{selectedCall.phone}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-400">{selectedCall.duration}</span>
                </div>

                {/* Audio Player */}
                {selectedCall.recordingUrl && (
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Volume2 className="w-3.5 h-3.5" /> Call Audio</span>
                      <div className="flex gap-1">
                        {[1, 1.5, 2].map((s) => (
                          <button
                            key={s}
                            onClick={() => setPlaybackSpeed(s)}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${playbackSpeed === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                          >
                            {s}x
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
                      </button>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-blue-600 rounded-full ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/4'}`} />
                      </div>
                      <span className="text-[11px] font-mono text-gray-500">01:42</span>
                    </div>
                  </div>
                )}

                {/* AI Executive Summary */}
                <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-blue-700 uppercase">
                    <Sparkles className="w-3 h-3" /> AI Call Takeaway
                  </div>
                  <p className="text-blue-950 leading-relaxed">{selectedCall.summary}</p>
                </div>

                {/* Transcript */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Speech Transcript</h4>
                  {selectedCall.transcript.length > 0 ? (
                    <div className="space-y-2.5 max-h-48 overflow-y-auto text-xs pr-1">
                      {selectedCall.transcript.map((line, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                            <span className="font-semibold text-gray-700">{line.speaker}</span>
                            <span className="font-mono">{line.time}</span>
                          </div>
                          <p className="text-gray-800">{line.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400">No audio recording available for this call.</p>
                  )}
                </div>
              </>
            ) : (
              <div className="p-12 text-center text-gray-400 text-xs">
                Select a call log on the left to inspect audio recording and AI transcript.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


import React, { useState } from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Scissors, 
  Wrench, 
  Trophy,
  CheckCircle2,
  Clock,
  Printer,
  Send,
  Plus,
  AlertCircle,
  QrCode,
  Calendar,
  Users,
  Search,
  Phone,
  MapPin,
  ChevronRight,
  Shield,
  FileCheck
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { formatLakhs } from '../industryConfig';

export default function IndustryModulePage() {
  const { workspace, customers } = useAppStore();
  const ind = workspace.industry || 'clinic';

  // ----------------------------------------------------------------
  // 1. CLINIC MODULE: Doctor Slots, SOAP Visit Notes, Printable Rx Generator
  // ----------------------------------------------------------------
  const ClinicView = () => {
    const [activeTab, setActiveTab] = useState('rx'); // 'rx' | 'soap' | 'slots'
    const [selectedDoctor, setSelectedDoctor] = useState('Dr. A. Sundaram, MD');
    const [rxPatient, setRxPatient] = useState('K. Meenakshi Ammal');
    const [rxMeds, setRxMeds] = useState([
      { name: 'Tab Metformin 500mg SR', dosage: '1 - 0 - 1', timing: 'After food', duration: '30 Days' },
      { name: 'Tab Glimepiride 1mg', dosage: '1 - 0 - 0', timing: 'Before breakfast', duration: '30 Days' },
      { name: 'Tab Vitamin D3 60K IU', dosage: 'Weekly once', timing: 'With milk', duration: '8 Weeks' },
    ]);
    const [newMedName, setNewMedName] = useState('');
    const [newMedDosage, setNewMedDosage] = useState('1 - 0 - 1');
    const [newMedTiming, setNewMedTiming] = useState('After food');
    const [newMedDuration, setNewMedDuration] = useState('15 Days');

    const handleAddMed = (e) => {
      e.preventDefault();
      if (!newMedName) return;
      setRxMeds([...rxMeds, { name: newMedName, dosage: newMedDosage, timing: newMedTiming, duration: newMedDuration }]);
      setNewMedName('');
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-teal-50 text-teal-700">
                <Stethoscope className="w-5 h-5" />
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Clinical Desk & Rx Studio</h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              SOAP clinical notes, digital OPD slots, and instant WhatsApp prescription generator.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50 flex items-center gap-1.5 shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" /> Print Rx Pad
            </button>
            <button
              onClick={() => alert(`Prescription PDF sent directly to ${rxPatient} on WhatsApp!`)}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-medium hover:bg-emerald-700 flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" /> Send Rx on WhatsApp
            </button>
          </div>
        </div>

        {/* Clinical Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-6 text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('rx')}
              className={`pb-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'rx' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Digital Rx Prescription Pad
            </button>
            <button
              onClick={() => setActiveTab('soap')}
              className={`pb-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'soap' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              SOAP Visit Notes
            </button>
            <button
              onClick={() => setActiveTab('slots')}
              className={`pb-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'slots' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Doctor OPD Slots (Today)
            </button>
          </nav>
        </div>

        {activeTab === 'rx' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Med Editor */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
              <h3 className="font-bold text-gray-900 text-sm">Add Medicine to Prescription</h3>
              <form onSubmit={handleAddMed} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Drug / Brand Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tab Pantoprazole 40mg"
                    value={newMedName}
                    onChange={(e) => setNewMedName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Dosage</label>
                    <select
                      value={newMedDosage}
                      onChange={(e) => setNewMedDosage(e.target.value)}
                      className="w-full px-2 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none"
                    >
                      <option>1 - 0 - 1 (Morning & Night)</option>
                      <option>1 - 0 - 0 (Morning Only)</option>
                      <option>0 - 0 - 1 (Night Only)</option>
                      <option>1 - 1 - 1 (Thrice daily)</option>
                      <option>SOS (When needed)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      value={newMedDuration}
                      onChange={(e) => setNewMedDuration(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Instruction</label>
                  <select
                    value={newMedTiming}
                    onChange={(e) => setNewMedTiming(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none"
                  >
                    <option>After food (சாப்பாட்டிற்கு பின்)</option>
                    <option>Before food (சாப்பாட்டிற்கு முன்)</option>
                    <option>Empty stomach in morning</option>
                    <option>At bedtime</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-teal-600 text-white font-medium text-xs rounded-xl hover:bg-teal-700 transition-colors shadow-2xs flex items-center justify-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add to Rx
                </button>
              </form>
            </div>

            {/* Right: Printable Rx Preview */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-2xs space-y-6">
              {/* Rx Header */}
              <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-teal-800">{selectedDoctor}</h2>
                  <p className="text-xs text-gray-600">MD (General Medicine) • Reg No: TN-MC-88219</p>
                  <p className="text-[11px] text-gray-400">Chief Consultant Physician • {workspace.businessName}</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p className="font-semibold text-gray-800">OPD Clinic Desk</p>
                  <p>Iyer Bungalow, Madurai</p>
                  <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
                </div>
              </div>

              {/* Patient Banner */}
              <div className="bg-teal-50/50 p-3.5 rounded-xl border border-teal-100 flex justify-between text-xs text-gray-800">
                <div>
                  <span className="text-gray-500">Patient: </span>
                  <span className="font-bold">{rxPatient}</span>
                  <span className="text-gray-500 ml-3">Age/Sex: </span>
                  <span className="font-medium">58 / Female</span>
                </div>
                <div>
                  <span className="text-gray-500">BP: </span>
                  <span className="font-mono font-bold">130/84 mmHg</span>
                  <span className="text-gray-500 ml-3">Pulse: </span>
                  <span className="font-mono font-bold">76 bpm</span>
                </div>
              </div>

              {/* Rx Symbol & Medication list */}
              <div>
                <span className="text-3xl font-serif font-black text-teal-800">℞</span>
                <div className="mt-2 divide-y divide-gray-100">
                  {rxMeds.map((med, idx) => (
                    <div key={idx} className="py-2.5 flex items-start justify-between text-xs">
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{idx + 1}. {med.name}</p>
                        <p className="text-teal-700 font-medium mt-0.5">{med.dosage} — {med.timing}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-mono text-[11px]">{med.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advice & Doctor Sign */}
              <div className="pt-6 border-t border-gray-200 flex justify-between items-end">
                <div className="text-xs text-gray-500">
                  <p className="font-bold text-gray-700">General Advice:</p>
                  <p>• Avoid sugary snacks & deep-fried foods</p>
                  <p>• Fasting blood sugar recheck after 1 month</p>
                  <p>• Review with HbA1c report on next follow-up</p>
                </div>
                <div className="text-center">
                  <div className="font-serif italic text-teal-700 text-sm mb-1">A. Sundaram</div>
                  <div className="border-t border-gray-400 w-32 pt-1 text-[10px] text-gray-500">Doctor Signature</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'soap' && (
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">SOAP Clinical Visit Entry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold text-blue-700 uppercase tracking-wider block mb-1">S — Subjective (Patient Complaints)</span>
                <p className="text-gray-700">58-year-old female presents for routine diabetes review. Reports mild fatigue in late afternoons and early morning tingling sensation in bilateral toes.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold text-emerald-700 uppercase tracking-wider block mb-1">O — Objective (Vitals & Labs)</span>
                <p className="text-gray-700">BP: 130/84 mmHg, HR: 76 bpm, BMI: 26.2. Fasting Blood Sugar: 138 mg/dL, HbA1c: 7.2% (down from 7.9% 3 months ago). Pedal pulses palpable.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold text-amber-700 uppercase tracking-wider block mb-1">A — Assessment (Diagnosis)</span>
                <p className="text-gray-700">Type 2 Diabetes Mellitus with sub-optimal glycemic control and early sensory diabetic peripheral neuropathy.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold text-purple-700 uppercase tracking-wider block mb-1">P — Plan (Action & Follow-up)</span>
                <p className="text-gray-700">Continue Metformin 500mg SR bid. Add Methylcobalamin 1500 mcg od for neuropathy. Scheduled WhatsApp reminder in 30 days for Fasting Sugar test.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'slots' && (
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Today's OPD Roster & Patient Flow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { time: '10:00 AM', patient: 'K. Meenakshi Ammal', token: '#01', status: 'In Consultation', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                { time: '10:30 AM', patient: 'Rajendran P.', token: '#02', status: 'Waiting in Lounge', color: 'bg-amber-50 text-amber-800 border-amber-200' },
                { time: '11:00 AM', patient: 'A. Fathima Banu', token: '#03', status: 'Confirmed WhatsApp', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                { time: '11:30 AM', patient: 'V. Murugesan', token: '#04', status: 'Booked by AI', color: 'bg-purple-50 text-purple-800 border-purple-200' },
                { time: '12:00 PM', patient: 'Walk-in Slot', token: '#05', status: 'Available', color: 'bg-gray-50 text-gray-500 border-gray-200' },
              ].map((s, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${s.color}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs">{s.time}</span>
                    <span className="font-mono text-xs font-bold">{s.token}</span>
                  </div>
                  <p className="font-bold text-sm text-gray-900">{s.patient}</p>
                  <p className="text-[11px] mt-1 font-medium">{s.status}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ----------------------------------------------------------------
  // 2. COACHING INSTITUTE MODULE: Batches, Attendance + WhatsApp Absence Alerts
  // ----------------------------------------------------------------
  const CoachingView = () => {
    const [students, setStudents] = useState([
      { id: 1, name: 'Kavitha Ramasamy', parent: 'Ramasamy K.', phone: '+91 93486 33365', batch: 'NEET Super 30', status: 'present' },
      { id: 2, name: 'Saravanan Muthu', parent: 'Muthukumar P.', phone: '+91 98421 77312', batch: 'JEE Foundation Class 11', status: 'present' },
      { id: 3, name: 'Deepa Natarajan', parent: 'Natarajan S.', phone: '+91 94432 10899', batch: 'Class 10 CBSE Math', status: 'absent' },
      { id: 4, name: 'Aravind Swaminathan', parent: 'Swaminathan V.', phone: '+91 97890 22345', batch: 'TNPSC Group 1 Weekend', status: 'present' },
    ]);

    const toggleAttendance = (id) => {
      setStudents(prev => prev.map(s => {
        if (s.id !== id) return s;
        const newStatus = s.status === 'present' ? 'absent' : 'present';
        if (newStatus === 'absent') {
          alert(`Simulated: Instant WhatsApp absence alert sent to parent ${s.parent} (${s.phone}): "Dear Parent, ${s.name} was marked absent for ${s.batch} today at 09:30 AM."`);
        }
        return { ...s, status: newStatus };
      }));
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-purple-50 text-purple-700">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Batches & Attendance Register</h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Mark student attendance in 1 click; absent students trigger automated WhatsApp notification to parents.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-xs font-semibold">
              Today's Attendance: 75%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center text-xs">
            <span className="font-semibold text-gray-700">Active Batch: NEET & JEE Intensive 2026</span>
            <span className="text-gray-400">Date: {new Date().toLocaleDateString('en-GB')}</span>
          </div>
          <div className="divide-y divide-gray-100">
            {students.map((st) => (
              <div key={st.id} className="p-4 flex items-center justify-between hover:bg-gray-50/60 transition-colors">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{st.name}</h4>
                  <p className="text-xs text-gray-500">
                    Parent: <span className="font-medium text-gray-700">{st.parent}</span> • {st.phone}
                  </p>
                  <p className="text-[11px] text-purple-600 font-medium mt-0.5">{st.batch}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    st.status === 'present' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {st.status.toUpperCase()}
                  </span>
                  <button
                    onClick={() => toggleAttendance(st.id)}
                    className="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold hover:bg-gray-100 text-gray-700"
                  >
                    Toggle {st.status === 'present' ? 'Absent' : 'Present'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ----------------------------------------------------------------
  // 3. REAL ESTATE MODULE: Tower Unit Matrix & Cost Sheet Calculator
  // ----------------------------------------------------------------
  const RealEstateView = () => {
    const [units, setUnits] = useState([
      { id: 'A101', type: '2 BHK', sft: 1150, status: 'sold', price: '₹55.2L' },
      { id: 'A102', type: '3 BHK', sft: 1580, status: 'booked', price: '₹75.8L' },
      { id: 'A201', type: '2 BHK', sft: 1150, status: 'held', price: '₹56.4L' },
      { id: 'A202', type: '3 BHK', sft: 1580, status: 'available', price: '₹77.4L' },
      { id: 'A301', type: '2 BHK', sft: 1150, status: 'available', price: '₹57.5L' },
      { id: 'A302', type: '3 BHK', sft: 1580, status: 'sold', price: '₹78.9L' },
      { id: 'A401', type: 'Penthouse', sft: 2400, status: 'available', price: '₹1.25 Cr' },
      { id: 'A402', type: 'Penthouse', sft: 2400, status: 'held', price: '₹1.25 Cr' },
    ]);

    const [selectedUnit, setSelectedUnit] = useState(units[3]); // A202

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-50 text-amber-700">
                <Building2 className="w-5 h-5" />
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Tower Unit Matrix & Cost Sheet</h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Visual inventory of all apartments, live booking status and transparent cost sheet breakdown.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Unit Grid */}
          <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-sm">Tower A — Royal Enclave</h3>
              <div className="flex gap-2 text-[11px]">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Available</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-400" /> Held</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-500" /> Booked</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-gray-400" /> Sold</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {units.map((u) => {
                const colorMap = {
                  available: 'border-emerald-300 bg-emerald-50/50 text-emerald-950',
                  held: 'border-amber-300 bg-amber-50/50 text-amber-950',
                  booked: 'border-blue-300 bg-blue-50/50 text-blue-950',
                  sold: 'border-gray-200 bg-gray-100 text-gray-500 opacity-60',
                };
                return (
                  <button
                    key={u.id}
                    onClick={() => setSelectedUnit(u)}
                    className={`p-3.5 rounded-xl border text-left transition-all hover:scale-[1.02] ${colorMap[u.status]} ${
                      selectedUnit?.id === u.id ? 'ring-2 ring-blue-600' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm">{u.id}</span>
                      <span className="text-[10px] uppercase font-bold">{u.status}</span>
                    </div>
                    <p className="text-xs mt-1">{u.type} • {u.sft} sq.ft</p>
                    <p className="font-bold text-xs mt-2">{u.price}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cost Sheet Calculator */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Instant Cost Sheet — {selectedUnit.id}</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Base Rate ({selectedUnit.sft} sqft @ ₹4,500):</span>
                <span className="font-medium text-gray-900">₹{(selectedUnit.sft * 4500).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Floor Rise Charges:</span>
                <span className="font-medium text-gray-900">₹1,50,000</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Covered Car Parking (1 Bay):</span>
                <span className="font-medium text-gray-900">₹3,00,000</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Clubhouse & Amenities:</span>
                <span className="font-medium text-gray-900">₹1,50,000</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>GST (5% on residential):</span>
                <span className="font-medium text-gray-900 font-mono">₹2,88,750</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Registration & Stamp Duty (7%):</span>
                <span className="font-medium text-gray-900 font-mono">₹4,04,250</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-sm text-gray-950">
                <span>All-Inclusive Cost:</span>
                <span className="text-blue-600">₹64,68,000</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Cost Sheet for ${selectedUnit.id} generated and sent on WhatsApp!`)}
              className="w-full py-2 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition-colors shadow-2xs flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Share Cost Sheet on WhatsApp
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ----------------------------------------------------------------
  // 4. GYM MODULE: Member QR Check-in Terminal & Freeze Pass
  // ----------------------------------------------------------------
  const GymView = () => {
    const [scannedMember, setScannedMember] = useState(null);
    const [recentCheckins, setRecentCheckins] = useState([
      { name: 'Dinesh Kumar', time: '10:40 AM', plan: 'Annual Gold Fitness', valid: true },
      { name: 'Manoj Prabhakar', time: '10:15 AM', plan: 'Free Trial Pass', valid: true },
      { name: 'Praveen V.', time: '09:50 AM', plan: 'Monthly Strength', valid: true },
    ]);

    const handleScanSimulate = () => {
      const member = {
        name: 'Ananya Sridharan',
        phone: '+91 98410 44521',
        plan: 'Quarterly Cardio + Zumba',
        expiry: '14 Nov 2026',
        daysLeft: 5,
        trainer: 'Coach Sneha',
        status: 'Active Member'
      };
      setScannedMember(member);
      setRecentCheckins([{ name: member.name, time: 'Just now', plan: member.plan, valid: true }, ...recentCheckins]);
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-red-50 text-red-700">
                <Dumbbell className="w-5 h-5" />
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">QR Check-in Terminal & Passes</h1>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Front desk tablet scanner for member entry, expiry alerts and membership freeze requests.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scanner Box */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs text-center space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Gate Terminal Scanner</h3>
            <div className="w-48 h-48 mx-auto rounded-2xl bg-gray-950 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white">
              <div className="absolute inset-x-0 h-1 bg-red-500 animate-pulse top-1/2" />
              <QrCode className="w-20 h-20 text-white/80 mb-2" />
              <p className="text-[11px] text-gray-400">Position Member QR Code</p>
            </div>
            <button
              onClick={handleScanSimulate}
              className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors shadow-2xs"
            >
              Simulate Member Scan
            </button>
          </div>

          {/* Scanned Card */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Scanned Member Access Card</h3>
            {scannedMember ? (
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-gray-950">{scannedMember.name}</h4>
                    <p className="text-xs text-gray-600">{scannedMember.plan}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                    ACCESS GRANTED
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-emerald-100">
                  <div>
                    <span className="text-gray-500">Expires:</span>
                    <p className="font-bold text-amber-700">{scannedMember.expiry} ({scannedMember.daysLeft} days remaining)</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Assigned Coach:</span>
                    <p className="font-bold text-gray-800">{scannedMember.trainer}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-400 border border-dashed rounded-2xl">
                Ready for next member scan
              </div>
            )}

            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Recent Gate Entries</h4>
              <div className="divide-y divide-gray-100 text-xs">
                {recentCheckins.map((rc, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-gray-900">{rc.name}</span>
                      <span className="text-gray-400 ml-2">({rc.plan})</span>
                    </div>
                    <span className="text-gray-500 font-mono">{rc.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ----------------------------------------------------------------
  // 5. SALON MODULE: Stylist Chair Board & Colour Formulas
  // ----------------------------------------------------------------
  const SalonView = () => {
    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-pink-50 text-pink-700">
              <Scissors className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Stylist Day Board & Formulas</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Chair allocations, walk-in queue, and client custom hair/skin chemical formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { chair: 'Chair 1 — Master Stylist Revathi', client: 'Pavithra Venkatesh', service: 'Bridal Trial + Hair Botox', time: '02:30 PM - 04:30 PM', formula: 'L’Oréal 6.34 warm blonde + Olaplex No. 2' },
            { chair: 'Chair 2 — Senior Stylist Priya', client: 'Karpagam S.', service: 'Root Touchup + Keratin Spa', time: '03:00 PM - 04:00 PM', formula: 'Majirel 4.0 dark brown + 20 Vol developer' },
            { chair: 'Chair 3 — Stylist Anand', client: 'Walk-in Queue', service: 'Beard Trim & Skin Cleanup', time: 'Next Available in 15 mins', formula: 'Herbal cooling scrub pack' },
          ].map((ch, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-pink-700">{ch.chair}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-50 text-pink-700">IN SERVICE</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm">{ch.client}</h4>
              <p className="text-xs text-gray-600">{ch.service}</p>
              <p className="text-[11px] text-gray-400 font-mono">{ch.time}</p>
              <div className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100 text-[11px] text-pink-900">
                <span className="font-bold block">Chemical Formula:</span>
                {ch.formula}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ----------------------------------------------------------------
  // 6. FIELD SERVICE MODULE: Technician 'My Day' & Equipment Registry
  // ----------------------------------------------------------------
  const FieldServiceView = () => {
    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <Wrench className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Technician 'My Day' & AMC Registry</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Live mobile dispatch board, on-site digital job sheets, parts replaced, and customer e-signature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              id: 'JOB-884',
              client: 'Dr. S. Mohanraj Clinic',
              location: 'Anna Nagar, Madurai',
              phone: '+91 93486 33365',
              tech: 'Tech Murugan S.',
              equipment: 'Daikin 2.0 Ton Cassette AC (Unit #C2)',
              issue: 'Cooling low, error code E4',
              status: 'Dispatched & En Route'
            },
            {
              id: 'JOB-871',
              client: 'Royal Residency Apartments',
              location: 'Iyer Bungalow, Madurai',
              phone: '+91 98400 11982',
              tech: 'Lead Tech Ganesan',
              equipment: 'Commercial RO Water Plant (500 LPH)',
              issue: 'Quarterly filter replacement & membrane flush',
              status: 'In Progress'
            }
          ].map((job) => (
            <div key={job.id} className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono font-bold text-emerald-700 text-xs">{job.id}</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {job.status}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">{job.client}</h4>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" /> {job.location}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl text-xs space-y-1">
                <p><span className="text-gray-400">Equipment:</span> <span className="font-medium text-gray-800">{job.equipment}</span></p>
                <p><span className="text-gray-400">Complaint:</span> <span className="text-red-600 font-medium">{job.issue}</span></p>
                <p><span className="text-gray-400">Assigned:</span> <span className="font-medium text-gray-800">{job.tech}</span></p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => alert(`Calling customer ${job.phone}...`)}
                  className="flex-1 py-2 rounded-xl border border-gray-200 text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" /> Call Client
                </button>
                <button
                  onClick={() => alert('Simulated: Completed job sheet signed by customer.')}
                  className="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 flex items-center justify-center gap-1 shadow-2xs"
                >
                  <FileCheck className="w-3.5 h-3.5" /> Complete & Sign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ----------------------------------------------------------------
  // 7. TURF MODULE: 24h Hourly Court Board & Floodlight Tokens
  // ----------------------------------------------------------------
  const TurfView = () => {
    const slots = [
      { time: '06:00 PM - 07:00 PM', team: 'Vaigai Strikers FC', sport: 'Football (Court 1)', status: 'booked', rate: '₹1,200', paid: 'Full Paid' },
      { time: '07:00 PM - 08:00 PM', team: 'Apollo Hospital XI', sport: 'Cricket (Court 2)', status: 'booked', rate: '₹1,500', paid: 'Full Paid' },
      { time: '08:00 PM - 09:00 PM', team: 'Slot Open', sport: 'Court 1', status: 'open', rate: '₹1,500 (Peak)', paid: '-' },
      { time: '09:00 PM - 10:00 PM', team: 'Slot Open', sport: 'Court 2', status: 'open', rate: '₹1,500 (Peak)', paid: '-' },
      { time: '10:00 PM - 12:00 AM (Midnight)', team: 'Madurai Super Kings XI', sport: 'Full Box Cricket', status: 'booked', rate: '₹2,000', paid: '₹1,000 Advance' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-lime-50 text-lime-700">
              <Trophy className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">24-Hour Court Grid & Match Slots</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Court availability past midnight, peak hour surge pricing, and online advance collection.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
          <div className="divide-y divide-gray-100">
            {slots.map((s, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/60 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-gray-900">{s.time}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      s.status === 'booked' ? 'bg-lime-50 text-lime-800 border border-lime-200' : 'bg-emerald-50 text-emerald-800'
                    }`}>
                      {s.status === 'booked' ? 'BOOKED' : 'AVAILABLE'}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm mt-1">{s.team}</p>
                  <p className="text-[11px] text-gray-400">{s.sport}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-sm">{s.rate}</p>
                    <p className="text-[11px] text-gray-500">{s.paid}</p>
                  </div>
                  {s.status === 'open' && (
                    <button
                      onClick={() => alert(`Simulated: Slot ${s.time} reserved and advance UPI link sent!`)}
                      className="px-3.5 py-1.5 rounded-xl bg-lime-600 text-white font-semibold text-xs hover:bg-lime-700 shadow-2xs"
                    >
                      Book Slot
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render the view corresponding to the active workspace industry
  switch (ind) {
    case 'coaching':
      return <CoachingView />;
    case 'real-estate':
      return <RealEstateView />;
    case 'gym':
      return <GymView />;
    case 'salon':
      return <SalonView />;
    case 'field-service':
      return <FieldServiceView />;
    case 'turf':
      return <TurfView />;
    case 'clinic':
    default:
      return <ClinicView />;
  }
}


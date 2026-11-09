import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { industriesConfig } from '../industryConfig';
import { fetchWorkspaceAppData, createCustomerAPI, sendChatMessageAPI } from '../../services/api';

const AppContext = createContext(null);

const STORAGE_KEY = 'isuite_demo_app_state_v1';

// Seed initial customers across industries
const generateInitialCustomers = (industryId) => {
  const cfg = industriesConfig[industryId] || industriesConfig.clinic;
  
  if (industryId === 'coaching') {
    return [
      { id: 'c1', name: 'Kavitha Ramasamy', parentName: 'Ramasamy K.', phone: '+91 93486 33365', email: 'kavitha.r@gmail.com', city: 'Madurai, KK Nagar', stage: 'enquiry', batch: 'NEET Morning Super 30', due: 18000, tags: ['NEET 2026', 'Hostel'], joined: '2026-10-12', notes: 'Interested in biology intensive crash course.' },
      { id: 'c2', name: 'Saravanan Muthu', parentName: 'Muthukumar P.', phone: '+91 98421 77312', email: 'saravanan.m@gmail.com', city: 'Madurai, Anna Nagar', stage: 'admitted', batch: 'JEE Foundation Class 11', due: 0, tags: ['JEE Main', 'Top 10%'], joined: '2026-09-01', notes: 'Full fee paid via UPI.' },
      { id: 'c3', name: 'Deepa Natarajan', parentName: 'Natarajan S.', phone: '+91 94432 10899', email: 'deepa.n@yahoo.com', city: 'Chennai, Velachery', stage: 'demo', batch: 'Class 10 CBSE Math & Science', due: 12000, tags: ['CBSE', 'Math Clinic'], joined: '2026-11-02', notes: 'Attended trial class on Saturday; positive feedback.' },
      { id: 'c4', name: 'Aravind Swaminathan', parentName: 'Swaminathan V.', phone: '+91 97890 22345', email: 'aravind.s@gmail.com', city: 'Madurai, Iyer Bungalow', stage: 'counselling', batch: 'TNPSC Group 1 Weekend', due: 16000, tags: ['Govt Exam'], joined: '2026-11-05', notes: 'Parent discussion scheduled for Tuesday 4 PM.' },
    ];
  }

  if (industryId === 'real-estate') {
    return [
      { id: 'c1', name: 'Sundar Rajan', phone: '+91 93486 33365', email: 'sundar.rajan@tcs.com', city: 'Madurai, Iyer Bungalow', stage: 'site_visit', interest: '3 BHK North-facing Flat (Tower A)', budget: '₹72 Lakhs', tags: ['NRI Buyer', 'Home Loan Approved'], joined: '2026-10-20', notes: 'Prefers 4th floor or above with dual parking.' },
      { id: 'c2', name: 'Meenakshi Sundaram', phone: '+91 94430 88211', email: 'meenakshi.doc@gmail.com', city: 'Madurai, Bypass Road', stage: 'negotiation', interest: 'Luxury Duplex Villa (Plot 18)', budget: '₹1.15 Cr', tags: ['Immediate Registration'], joined: '2026-09-15', notes: 'Cost sheet sent; negotiating on clubhouse charges.' },
      { id: 'c3', name: 'Vignesh Balakrishnan', phone: '+91 98402 33190', email: 'vignesh.b@zoho.com', city: 'Chennai, OMR', stage: 'booked', interest: '2 BHK Compact (Tower B, Unit 302)', budget: '₹48 Lakhs', tags: ['Tech Professional'], joined: '2026-11-01', notes: 'Token deposit ₹1,00,000 received.' },
      { id: 'c4', name: 'Karthik Sridhar', phone: '+91 97900 12345', email: 'karthik.s@gmail.com', city: 'Madurai, Teppakulam', stage: 'enquiry', interest: 'Commercial Showroom space', budget: '₹95 Lakhs', tags: ['Retail'], joined: '2026-11-08', notes: 'Enquired via Instagram ad.' },
    ];
  }

  if (industryId === 'gym') {
    return [
      { id: 'c1', name: 'Dinesh Kumar', phone: '+91 93486 33365', email: 'dinesh.fit@gmail.com', city: 'Madurai, K.Pudur', stage: 'active', planName: 'Annual Gold Fitness + Steam', expiry: '2027-04-15', trainer: 'Coach Pradeep', tags: ['Weight Loss', 'Morning Batch'], joined: '2026-04-15', notes: 'Visits 6 AM regularly; 7kg down in 3 months.' },
      { id: 'c2', name: 'Ananya Sridharan', phone: '+91 98410 44521', email: 'ananya.s@gmail.com', city: 'Madurai, Tallakulam', stage: 'renewal_due', planName: 'Quarterly Cardio + Zumba', expiry: '2026-11-14', trainer: 'Coach Sneha', tags: ['Renewal Alert', 'Evening'], joined: '2026-08-14', notes: 'Membership expires in 5 days; WhatsApp reminder queued.' },
      { id: 'c3', name: 'Manoj Prabhakar', phone: '+91 94435 99012', email: 'manoj.p@yahoo.com', city: 'Madurai, Villapuram', stage: 'trial', planName: '2-Day Free Pass', expiry: '2026-11-10', trainer: 'Unassigned', tags: ['Trial Pass'], joined: '2026-11-07', notes: 'Trial today 7 PM.' },
      { id: 'c4', name: 'Praveen V.', phone: '+91 99400 55123', email: 'praveen.v@gmail.com', city: 'Madurai, Sellur', stage: 'active', planName: 'Monthly Strength Pack', expiry: '2026-11-30', trainer: 'Self-guided', tags: ['Bodybuilding'], joined: '2026-10-30', notes: 'Requested PT pricing.' },
    ];
  }

  if (industryId === 'salon') {
    return [
      { id: 'c1', name: 'Pavithra Venkatesh', phone: '+91 93486 33365', email: 'pavithra.v@gmail.com', city: 'Madurai, Chokkikulam', stage: 'booked', service: 'Bridal Trial + Hair Botox', stylist: 'Senior Stylist Revathi', formula: 'L’Oréal 6.34 warm blonde + Olaplex No. 2', tags: ['VIP Bridal', 'Pre-booking'], joined: '2026-09-20', notes: 'Wedding on Dec 12; trial scheduled for today 3 PM.' },
      { id: 'c2', name: 'Karpagam S.', phone: '+91 98421 99876', email: 'karpagam.s@gmail.com', city: 'Madurai, Mattuthavani', stage: 'revisit_due', service: 'Root Touchup + Keratin Spa', stylist: 'Stylist Priya', formula: 'Majirel 4.0 dark brown', tags: ['4-Week Cycle'], joined: '2026-06-11', notes: 'Due for root touchup this week.' },
      { id: 'c3', name: 'Swetha Ramesh', phone: '+91 94433 12456', email: 'swetha.r@gmail.com', city: 'Madurai, Bypass Road', stage: 'billed', service: 'HydraFacial Glow + Pedicure', stylist: 'Master Stylist Revathi', formula: 'Sensitive skin booster pack', tags: ['Gold Card'], joined: '2026-10-05', notes: 'Invoice ₹3,850 settled via UPI.' },
      { id: 'c4', name: 'Archana M.', phone: '+91 97890 88765', email: 'archana.m@gmail.com', city: 'Madurai, Simmakkal', stage: 'inquiry', service: 'Global Balayage + Hair cut', stylist: 'Unassigned', formula: 'Pending consultation', tags: ['Instagram Lead'], joined: '2026-11-08', notes: 'Asked for package price on WhatsApp.' },
    ];
  }

  if (industryId === 'field-service') {
    return [
      { id: 'c1', name: 'Dr. S. Mohanraj', phone: '+91 93486 33365', email: 'mohanraj.clinic@gmail.com', city: 'Madurai, Anna Nagar', stage: 'dispatched', equipment: 'Daikin 2.0 Ton Inverter Cassette AC', technician: 'Tech Murugan S.', ticketNo: 'TKT-2026-884', tags: ['Priority AMC', 'Commercial Clinic'], joined: '2026-03-10', notes: 'Cooling low error code E4; tech dispatched with gauge meter.' },
      { id: 'c2', name: 'Royal Residency Apartments', phone: '+91 98400 11982', email: 'secretary.royal@gmail.com', city: 'Madurai, Iyer Bungalow', stage: 'estimate', equipment: 'Commercial RO Water Plant (500 LPH)', technician: 'Lead Tech Ganesan', ticketNo: 'TKT-2026-871', tags: ['Annual AMC Contract'], joined: '2025-11-01', notes: 'Membrane replacement quote ₹14,200 pending approval.' },
      { id: 'c3', name: 'Velan Textiles Ltd', phone: '+91 94432 77654', email: 'factory.velan@gmail.com', city: 'Madurai, Kappalur Industrial Area', stage: 'completed', equipment: 'Voltas Ductable AC Units x 4', technician: 'Tech Murugan S.', ticketNo: 'TKT-2026-860', tags: ['Industrial AMC'], joined: '2026-01-15', notes: 'Quarterly servicing done; signed on digital job sheet.' },
      { id: 'c4', name: 'Karthika B.', phone: '+91 97900 66543', email: 'karthika.home@gmail.com', city: 'Madurai, Surveyor Colony', stage: 'complaint', equipment: 'Whirlpool Front Load Washing Machine', technician: 'Unassigned', ticketNo: 'TKT-2026-895', tags: ['Out of Warranty'], joined: '2026-11-09', notes: 'Motor drain noise reported via web form.' },
    ];
  }

  if (industryId === 'turf') {
    return [
      { id: 'c1', name: 'Madurai Super Kings XI', captain: 'Captain Vigneshwar R.', phone: '+91 93486 33365', email: 'msk.cricket@gmail.com', city: 'Madurai, Othakadai', stage: 'confirmed', court: 'Court 1 (Full Ground Box Cricket)', slot: 'Tonight 10:00 PM - 12:00 AM (Midnight)', advancePaid: 1000, totalAmount: 2000, tags: ['Regular Saturday Team'], joined: '2026-05-15', notes: 'Advance ₹1,000 received on UPI; ₹1,000 due at desk.' },
      { id: 'c2', name: 'Vaigai Strikers FC', captain: 'Mohammed Ashiq', phone: '+91 98420 55432', email: 'vaigai.fc@gmail.com', city: 'Madurai, Teppakulam', stage: 'playing', court: 'Court 2 (5-a-side AstroTurf Football)', slot: 'Today 5:00 PM - 6:30 PM', advancePaid: 800, totalAmount: 1500, tags: ['Football League'], joined: '2026-07-20', notes: 'Game in progress; requested 2 extra bibs.' },
      { id: 'c3', name: 'Chettinad Smashers', captain: 'Alagappan K.', phone: '+91 94434 22109', email: 'alagappan.smash@yahoo.com', city: 'Madurai, K.K. Nagar', stage: 'advance_sent', court: 'Court 1 (Box Cricket)', slot: 'Sunday 6:00 AM - 8:00 AM (Morning)', advancePaid: 0, totalAmount: 1800, tags: ['Morning Slot'], joined: '2026-11-08', notes: 'UPI payment link sent; expires in 3 hours.' },
      { id: 'c4', name: 'Apollo Hospital Staff XI', captain: 'Dr. Selvakumar', phone: '+91 99402 33456', email: 'apollo.cricket@apollo.org', city: 'Madurai, K.K. Nagar', stage: 'completed', court: 'Court 1 (Box Cricket)', slot: 'Yesterday 8:00 PM - 10:00 PM', advancePaid: 2000, totalAmount: 2000, tags: ['Corporate Team'], joined: '2026-08-01', notes: 'Full paid ₹2,000 with GST invoice.' },
    ];
  }

  // Default: Clinic
  return [
    { id: 'c1', name: 'K. Meenakshi Ammal', age: 58, gender: 'Female', phone: '+91 93486 33365', email: 'meenakshi58@gmail.com', city: 'Madurai, Simmakkal', stage: 'booked', doctor: 'Dr. A. Sundaram, MD (General Med)', appointmentTime: 'Today 10:30 AM', problem: 'Type 2 Diabetes review & HbA1c follow-up', due: 400, tags: ['Diabetic', 'Senior Citizen'], joined: '2026-08-12', notes: 'Fasting blood sugar 132 mg/dL. Prescribed Metformin 500mg.' },
    { id: 'c2', name: 'Rajendran P.', age: 44, gender: 'Male', phone: '+91 98421 11200', email: 'rajendran.p@gmail.com', city: 'Madurai, Anna Nagar', stage: 'treatment', doctor: 'Dr. S. Kanimozhi, MS (Ortho)', appointmentTime: 'Today 11:15 AM', problem: 'Right knee joint pain after staircase climb', due: 1200, tags: ['Ortho', 'X-Ray Pending'], joined: '2026-10-04', notes: 'X-Ray knee AP/Lat advised. Gel + Calcium tablet given.' },
    { id: 'c3', name: 'A. Fathima Banu', age: 31, gender: 'Female', phone: '+91 94431 88922', email: 'fathima.b@gmail.com', city: 'Madurai, Goripalayam', stage: 'followup', doctor: 'Dr. A. Sundaram, MD', appointmentTime: 'Today 12:00 PM', problem: 'Post-viral cough & throat irritation', due: 0, tags: ['Follow-up', 'Zero Due'], joined: '2026-11-01', notes: 'Throat swab clear. Cough syrup continued for 3 more days.' },
    { id: 'c4', name: 'V. Murugesan', age: 62, gender: 'Male', phone: '+91 97890 44321', email: 'murugesan.v@gmail.com', city: 'Madurai, Thirunagar', stage: 'enquiry', doctor: 'Unassigned', appointmentTime: 'Requested slot', problem: 'Chronic hypertension & dizziness', due: 0, tags: ['WhatsApp Lead'], joined: '2026-11-09', notes: 'Booked slot via WhatsApp AI bot.' },
  ];
};

// Seed initial conversations for Unified Inbox
const generateInitialConversations = (industryId) => {
  return [
    {
      id: 'conv1',
      customerName: 'K. Meenakshi Ammal',
      phone: '+91 93486 33365',
      channel: 'whatsapp',
      unread: 0,
      status: 'ai', // 'ai' | 'human' | 'closed'
      lastMessage: 'Dr. Sundaram sir morning 10:30 AM slot confirm panrom. ₹400 consultation at clinic desk.',
      lastMessageTime: '10:14 AM',
      sentiment: 'positive',
      summary: {
        wants: 'Diabetic routine checkup & prescription renewal with Dr. Sundaram',
        done: 'Verified morning slot availability and doctor roster',
        pending: 'Patient arrival at front desk desk for vitals check',
        toldThem: 'Slot confirmed for 10:30 AM today; consultation fee ₹400',
        next: 'Receptionist to enter BP/Pulse when patient arrives',
      },
      messages: [
        { id: 'm1', sender: 'customer', text: 'Vanakkam! Dr. Sundaram sir innikku irukkara? Sugar check-up pannanum.', time: '10:10 AM', channel: 'whatsapp', status: 'read' },
        { id: 'm2', sender: 'ai', text: 'Vanakkam Meenakshi Ammal avargale! 🙏 Aam, Dr. A. Sundaram, MD innikku Morning 10:00 AM mudhal 1:00 PM varai OPD-la irukaar.', time: '10:11 AM', channel: 'whatsapp', status: 'read' },
        { id: 'm3', sender: 'customer', text: 'Morning 10:30 AM slot kedaikuma? Engalukku convenience-a irukum.', time: '10:12 AM', channel: 'whatsapp', status: 'read' },
        { id: 'm4', sender: 'ai', text: 'Nichayamaaga! 10:30 AM slot confirm seithullaen. Token #07. Consultation fee ₹400 clinic desk-la direct-a pay pannalam. Location: Iyer Bungalow, Madurai. 🙏', time: '10:14 AM', channel: 'whatsapp', status: 'read' },
      ],
    },
    {
      id: 'conv2',
      customerName: 'Saravanan Muthu',
      phone: '+91 98421 77312',
      channel: 'instagram',
      unread: 1,
      status: 'human',
      lastMessage: 'Fee receipt and batch time WhatsApp-la anuppa mudiyuma?',
      lastMessageTime: '09:48 AM',
      sentiment: 'neutral',
      summary: {
        wants: 'GST invoice receipt & timetable PDF',
        done: 'Course admission confirmed',
        pending: 'Accounts to dispatch PDF copy',
        toldThem: 'Staff will attach receipt shortly',
        next: 'Send GST Tax Invoice PDF',
      },
      messages: [
        { id: 'm1', sender: 'customer', text: 'Hi! En payan Saravanan-ku fees pay pannitom via UPI ₹48,000.', time: '09:40 AM', channel: 'instagram', status: 'read' },
        { id: 'm2', sender: 'ai', text: 'Nandri! Transaction ID verify aagivittathu. Student batch-la enroll aagivittaar.', time: '09:42 AM', channel: 'instagram', status: 'read' },
        { id: 'm3', sender: 'customer', text: 'Fee receipt and batch time WhatsApp-la anuppa mudiyuma?', time: '09:48 AM', channel: 'instagram', status: 'delivered' },
      ],
    },
    {
      id: 'conv3',
      customerName: 'Sundar Rajan (NRI)',
      phone: '+91 94432 10899',
      channel: 'whatsapp',
      unread: 0,
      status: 'ai',
      lastMessage: 'Cab pick-up Madurai airport lerunthu arrange aagiruku for Sunday 11 AM.',
      lastMessageTime: 'Yesterday',
      sentiment: 'positive',
      summary: {
        wants: 'Site visit for 3 BHK flat with airport pickup',
        done: 'Booked cab driver & project site host',
        pending: 'Driver contact details to share 2 hours before',
        toldThem: 'Airport pickup Sunday 11:00 AM confirmed',
        next: 'Host Vignesh to receive client at site entrance',
      },
      messages: [
        { id: 'm1', sender: 'customer', text: 'Hi, I am landing at Madurai airport this Sunday 10:30 AM. Can I inspect your Tower A 3 BHK flats?', time: 'Yesterday', channel: 'whatsapp', status: 'read' },
        { id: 'm2', sender: 'ai', text: 'Hello Mr. Sundar! Welcome to Madurai. We have arranged our company executive car with driver at Terminal 1 at 11:00 AM. Location: MNT Green Valley, Iyer Bungalow.', time: 'Yesterday', channel: 'whatsapp', status: 'read' },
      ],
    },
    {
      id: 'conv4',
      customerName: 'Captain Vigneshwar',
      phone: '+91 97890 22345',
      channel: 'web',
      unread: 0,
      status: 'ai',
      lastMessage: 'Tonight 10:00 PM slot locked! Floodlights will be ON.',
      lastMessageTime: 'Yesterday',
      sentiment: 'positive',
      summary: {
        wants: 'Midnight box cricket slot',
        done: 'Advance ₹1,000 received via Razorpay UPI link',
        pending: 'Team arrival tonight 9:50 PM',
        toldThem: 'Court 1 reserved with new match balls',
        next: 'Attendant to switch on floodlights at 9:55 PM',
      },
      messages: [
        { id: 'm1', sender: 'customer', text: 'Bro Court 1 free-a iruka innikku night 10 to 12 PM?', time: 'Yesterday', channel: 'web', status: 'read' },
        { id: 'm2', sender: 'ai', text: 'Aam bro! Available. Peak hour rate ₹1,000/hr. Advance ₹1,000 pay panna slot block aagidum.', time: 'Yesterday', channel: 'web', status: 'read' },
      ],
    },
  ];
};

export const AppProvider = ({ children }) => {
  // Load state from localStorage or seed fresh
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load local storage state:', e);
    }

    return {
      user: {
        id: 'u_subham_01',
        name: 'Subham',
        email: 'Subham@gmail.com',
        role: 'Founder & Admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      },
      isLoggedIn: true, // Demo app keeps you logged in
      workspace: {
        id: 'ws_madurai_01',
        businessName: 'iSuite AI Demo Enterprise',
        industry: 'clinic',
        plan: 'growth', // 'basic' | 'growth'
        credits: 8420,
        currency: 'INR',
        whatsappPhone: '+91 93486 33365',
        metaApprovalStatus: 'Approved',
        trialDaysRemaining: 12,
        address: '3/501, Subash Street, Iyer Bungalow, Madurai - 625014',
        gstin: '33EACPR6502N1ZH',
      },
      customers: generateInitialCustomers('clinic'),
      conversations: generateInitialConversations('clinic'),
      activeTab: 'dashboard',
      dbConnected: false,
      dbEngine: 'Local SQLite (backend/isuite.db)',
    };
  });

  // Fetch live SQL data from backend database
  const loadDatabaseData = useCallback(async (industryId) => {
    const ind = industryId || state.workspace?.industry || 'clinic';
    try {
      const res = await fetchWorkspaceAppData(ind);
      if (res && res.data) {
        setState((prev) => ({
          ...prev,
          dbConnected: true,
          dbEngine: res.data.engine || 'Connected SQL Database',
          workspace: {
            ...prev.workspace,
            ...res.data.workspace,
            industry: ind,
          },
          customers: res.data.customers?.length > 0 ? res.data.customers : prev.customers,
          conversations: res.data.conversations?.length > 0 ? res.data.conversations : prev.conversations,
        }));
      }
    } catch (err) {
      console.log('Database load notice: Backend starting or local fallback active:', err.message);
    }
  }, [state.workspace?.industry]);

  // Load from database on mount
  useEffect(() => {
    loadDatabaseData(state.workspace?.industry || 'clinic');
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [state]);

  // Industry Switcher Action - flips trade & reloads SQL data
  const switchIndustry = (industryId) => {
    if (!industriesConfig[industryId]) return;
    setState((prev) => ({
      ...prev,
      workspace: {
        ...prev.workspace,
        industry: industryId,
      },
      customers: generateInitialCustomers(industryId),
      conversations: generateInitialConversations(industryId),
    }));
    loadDatabaseData(industryId);
  };

  // Plan Switcher Action (Basic vs Growth)
  const switchPlan = (plan) => {
    setState((prev) => ({
      ...prev,
      workspace: {
        ...prev.workspace,
        plan,
      },
    }));
  };

  // Real-time Database Mutators
  const addCustomer = async (custData) => {
    const ind = state.workspace.industry || 'clinic';
    const newCust = {
      ...custData,
      id: custData.id || `c_${Date.now()}`,
      joined: custData.joined || new Date().toISOString().split('T')[0],
    };
    setState((prev) => ({
      ...prev,
      customers: [newCust, ...prev.customers],
    }));
    try {
      await createCustomerAPI(newCust, ind);
    } catch (err) {
      console.warn('Customer saved locally; backend sync error:', err.message);
    }
  };

  const addChatMessage = async (convId, sender, text, channel = 'whatsapp') => {
    const newMsg = {
      id: `m_${Date.now()}`,
      sender,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel,
      status: sender === 'ai' ? 'read' : 'delivered',
    };
    setState((prev) => {
      const nextConversations = prev.conversations.map((c) => {
        if (c.id === convId) {
          return {
            ...c,
            lastMessage: text,
            lastMessageTime: newMsg.time,
            messages: [...(c.messages || []), newMsg],
          };
        }
        return c;
      });
      return { ...prev, conversations: nextConversations };
    });
    try {
      await sendChatMessageAPI(convId, sender, text, channel);
    } catch (err) {
      console.warn('Message saved locally; backend sync error:', err.message);
    }
  };

  // Auth Actions
  const loginUser = (email, password) => {
    const cleanEmail = (email || '').trim();
    const displayName = cleanEmail ? cleanEmail.split('@')[0] : 'Subham';
    setState((prev) => ({
      ...prev,
      isLoggedIn: true,
      user: {
        ...prev.user,
        email: cleanEmail || 'Subham@gmail.com',
        name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      },
    }));
  };

  const logoutUser = () => {
    setState((prev) => ({
      ...prev,
      isLoggedIn: false,
    }));
  };

  const resetDemoData = () => {
    localStorage.removeItem(STORAGE_KEY);
    const ind = 'clinic';
    setState({
      user: {
        id: 'u_subham_01',
        name: 'Subham',
        email: 'Subham@gmail.com',
        role: 'Founder & Admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      },
      isLoggedIn: true,
      dbConnected: true,
      dbEngine: 'SQLite (backend/isuite.db)',
      workspace: {
        id: 'ws_madurai_01',
        businessName: 'iSuite AI Demo Enterprise',
        industry: ind,
        plan: 'growth',
        credits: 8420,
        currency: 'INR',
        whatsappPhone: '+91 93486 33365',
        metaApprovalStatus: 'Approved',
        trialDaysRemaining: 14,
        address: '3/501, Subash Street, Iyer Bungalow, Madurai - 625014',
        gstin: '33EACPR6502N1ZH',
      },
      customers: generateInitialCustomers(ind),
      conversations: generateInitialConversations(ind),
      activeTab: 'dashboard',
    });
    loadDatabaseData('clinic');
  };

  const currentConfig = industriesConfig[state.workspace.industry] || industriesConfig.clinic;

  return (
    <AppContext.Provider
      value={{
        ...state,
        currentConfig,
        switchIndustry,
        switchPlan,
        loginUser,
        logoutUser,
        resetDemoData,
        loadDatabaseData,
        addCustomer,
        addChatMessage,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
};


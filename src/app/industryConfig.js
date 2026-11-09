/**
 * Industry Configuration for iSuite AI Multi-Tenant Core (7 Products)
 * Supports dynamic labeling, pipeline stages, metrics, sample data, and rules.
 */

export const formatLakhs = (amount) => {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const industriesConfig = {
  clinic: {
    id: 'clinic',
    name: 'Clinic & Healthcare',
    tagline: 'OPD, WhatsApp appointments, medicine prescriptions & patient histories',
    customerSingular: 'Patient',
    customerPlural: 'Patients',
    trialDays: 14,
    color: '#0284c7', // Sky Blue
    accentColor: '#38bdf8',
    roles: ['Chief Doctor', 'Duty Doctor', 'Front Desk Receptionist', 'Pharmacist'],
    moduleName: 'Doctor OPD Diary & Rx',
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Doctor Diary & Rx',
    fourNumbers: [
      { label: "Today's Appointments", value: '28', sub: '6 walk-ins, 22 WhatsApp' },
      { label: 'New Patients', value: '9', sub: '+3 from Google profile' },
      { label: 'Bills Due / Pending', value: '₹14,500', sub: '3 lab tests pending' },
      { label: 'Follow-ups Due Today', value: '14', sub: 'Diabetic & BP review' },
    ],
    pipelineStages: [
      { id: 'enquiry', name: 'New Enquiry', color: '#64748b' },
      { id: 'booked', name: 'Consultation Booked', color: '#0284c7' },
      { id: 'visited', name: 'Visited / Consulted', color: '#8b5cf6' },
      { id: 'treatment', name: 'In Treatment / Tests', color: '#f59e0b' },
      { id: 'followup', name: 'Follow-up Scheduled', color: '#10b981' },
    ],
    aiNeverRules: [
      'NEVER provide a clinical diagnosis or medical conclusion over chat.',
      'NEVER prescribe antibiotics or schedule H drugs without verified doctor sign-off.',
      'Always refer acute chest pain, breathlessness, or head trauma immediately to the ER at +91 93486 33365.',
      'Always state doctor availability and consultation fee (₹400) before confirming slot.',
    ],
  },

  coaching: {
    id: 'coaching',
    name: 'Coaching Institute',
    tagline: 'Student batches, parent WhatsApp alerts, instalments & attendance',
    customerSingular: 'Student',
    customerPlural: 'Students',
    trialDays: 7, // 7 days trial as specified
    color: '#7c3aed', // Purple
    accentColor: '#c084fc',
    roles: ['Academic Director', 'Senior Faculty', 'Admission Counsellor', 'Fee Accountant'],
    moduleName: 'Batches & Attendance',
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Batches & Attendance',
    fourNumbers: [
      { label: 'New Enquiries This Week', value: '42', sub: 'JEE & NEET batch 2026' },
      { label: 'Fees Due This Month', value: '₹3.8L', sub: '18 students pending' },
      { label: 'Fees Overdue', value: '₹46,000', sub: '4 students > 15 days' },
      { label: 'Follow-ups Due', value: '12', sub: 'Demo class feedback' },
    ],
    pipelineStages: [
      { id: 'enquiry', name: 'New Enquiry', color: '#64748b' },
      { id: 'demo', name: 'Free Demo Class', color: '#7c3aed' },
      { id: 'counselling', name: 'Parent Counselling', color: '#f59e0b' },
      { id: 'token', name: 'Token Paid', color: '#0284c7' },
      { id: 'admitted', name: 'Admitted & Enrolled', color: '#10b981' },
    ],
    aiNeverRules: [
      'NEVER guarantee exam ranks or 100% board cut-off scores in marketing chat.',
      'Always disclose instalment schedule (3 parts: 40% / 30% / 30%) with 18% GST invoice.',
      'Send instant WhatsApp absence alerts to parent number when attendance is marked absent.',
      'Direct scholarship discount requests above 15% to Branch Director approval.',
    ],
  },

  'real-estate': {
    id: 'real-estate',
    name: 'Real Estate Builder & Agency',
    tagline: 'Projects, tower unit matrix, site visit bookings & cost sheets',
    customerSingular: 'Buyer',
    customerPlural: 'Buyers',
    trialDays: 14,
    color: '#0d9488', // Teal
    accentColor: '#2dd4bf',
    roles: ['Project Head', 'Sales Executive', 'Site Visit Host', 'Channel Partner Manager'],
    moduleName: 'Projects & Unit Board',
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Projects & Units',
    fourNumbers: [
      { label: 'New Enquiries', value: '64', sub: 'Meta Ads & Housing.com' },
      { label: 'Site Visits This Week', value: '18', sub: '11 cab pick-ups arranged' },
      { label: 'Flats Booked This Month', value: '6', sub: '₹4.2 Cr gross value' },
      { label: 'Flats On Sale Available', value: '38', sub: 'Tower A & B ready by Dec' },
    ],
    pipelineStages: [
      { id: 'enquiry', name: 'Fresh Enquiry', color: '#64748b' },
      { id: 'site_visit', name: 'Site Visit Scheduled', color: '#0d9488' },
      { id: 'visited', name: 'Site Visited & Shortlisted', color: '#f59e0b' },
      { id: 'negotiation', name: 'Cost Sheet & Negotiation', color: '#8b5cf6' },
      { id: 'booked', name: 'Booking Token Paid', color: '#0284c7' },
      { id: 'registered', name: 'Sale Agreement Registered', color: '#10b981' },
    ],
    aiNeverRules: [
      'NEVER commit to custom floor modifications without written structural engineer clearance.',
      'Always provide valid TNRERA / RERA project registration numbers when quoting unit prices.',
      'Send digital car-pick up Google Map location link 2 hours before confirmed site visit.',
      'Holds on premium corner units expire automatically after 48 hours without token deposit.',
    ],
  },

  gym: {
    id: 'gym',
    name: 'Gym & Fitness Studio',
    tagline: 'QR check-ins, memberships, trainer bookings & expiry alerts',
    customerSingular: 'Member',
    customerPlural: 'Members',
    trialDays: 14,
    color: '#ea580c', // Orange
    accentColor: '#fb923c',
    roles: ['Gym Owner', 'Head Fitness Coach', 'Personal Trainer', 'Front Desk Admin'],
    moduleName: 'Member Check-In & Passes',
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Check-In & Passes',
    fourNumbers: [
      { label: 'Members In Today', value: '87', sub: 'Peak hour 6 AM - 9 AM' },
      { label: 'Renewals Due This Week', value: '23', sub: 'Automated WhatsApp sent' },
      { label: 'Members Not Seen (>7 days)', value: '31', sub: 'Motivation follow-up queued' },
      { label: 'New Trial Enquiries', value: '15', sub: 'Free 2-day pass leads' },
    ],
    pipelineStages: [
      { id: 'lead', name: 'Free Pass Lead', color: '#64748b' },
      { id: 'trial', name: 'Trial Session Completed', color: '#ea580c' },
      { id: 'membership_offered', name: 'Membership Quote Sent', color: '#f59e0b' },
      { id: 'active', name: 'Active Member', color: '#10b981' },
      { id: 'renewal_due', name: 'Renewal Window (<10d)', color: '#ef4444' },
    ],
    aiNeverRules: [
      'NEVER prescribe anabolic supplements, hormone boosters, or restricted compounds.',
      'Always offer the mandatory PAR-Q medical fitness declaration before PT session 1.',
      'Send renewal link with 10% early-bird discount exactly 7 days before membership expires.',
      'Gym freezes can be granted for max 30 days per annual plan with travel/medical proof.',
    ],
  },

  salon: {
    id: 'salon',
    name: 'Salon & Spa',
    tagline: 'Stylist front-desk day board, queue, client formulas & bridal packages',
    customerSingular: 'Client',
    customerPlural: 'Clients',
    trialDays: 14,
    color: '#db2777', // Pink
    accentColor: '#f472b6',
    roles: ['Salon Director', 'Master Stylist', 'Colour Specialist', 'Salon Receptionist'],
    moduleName: 'Stylist Day Board & Queue',
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Stylist Day Board',
    fourNumbers: [
      { label: "Today's Appointments", value: '34', sub: '7 bridal sessions, 27 walk-ins' },
      { label: 'Clients Due Back', value: '19', sub: 'Hair spa & root touch-up' },
      { label: 'Renewals Due (Gold Card)', value: '8', sub: '₹24,000 package revenue' },
      { label: 'New Walk-In Clients', value: '11', sub: 'Instagram reel promotion' },
    ],
    pipelineStages: [
      { id: 'inquiry', name: 'Service Enquiry', color: '#64748b' },
      { id: 'booked', name: 'Slot Booked', color: '#db2777' },
      { id: 'in_service', name: 'In Salon / Service', color: '#f59e0b' },
      { id: 'billed', name: 'Billed & Review Sent', color: '#0284c7' },
      { id: 'revisit_due', name: 'Revisit Cycle (4-6 wks)', color: '#10b981' },
    ],
    aiNeverRules: [
      'On Salon Basic plan: AI receptionist is absent (manual WhatsApp chat as per live pricing).',
      'Always ask if client has existing bleach/keratin chemical treatments before booking balayage.',
      'Confirm stylist availability and double-slot timing for treatments longer than 90 mins.',
      'Send automated Google Review rating card 2 hours after invoice settlement.',
    ],
  },

  'field-service': {
    id: 'field-service',
    name: 'Field Service & AMC',
    tagline: 'Technician day route, parts & labour on WhatsApp, equipment registry & AMC',
    customerSingular: 'Customer',
    customerPlural: 'Customers',
    trialDays: 14,
    color: '#2563eb', // Royal Blue
    accentColor: '#60a5fa',
    roles: ['Operations Manager', 'Lead Dispatcher', 'Field Technician', 'Billing Executive'],
    moduleName: "Technician Day & Jobs",
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Technicians & Jobs',
    fourNumbers: [
      { label: "Today's Service Jobs", value: '22', sub: '16 completed, 6 in progress' },
      { label: 'Warranties Ending Soon', value: '14', sub: 'AC & RO water purifier units' },
      { label: 'AMC Visits Due (Growth)', value: '19', sub: 'Quarterly maintenance visits' },
      { label: 'AMC Renewals Due (Growth)', value: '₹1.15L', sub: '6 commercial contracts' },
    ],
    pipelineStages: [
      { id: 'complaint', name: 'Ticket Raised', color: '#64748b' },
      { id: 'dispatched', name: 'Technician Dispatched', color: '#2563eb' },
      { id: 'on_site', name: 'Inspection / On-Site', color: '#f59e0b' },
      { id: 'estimate', name: 'Parts Estimate Approved', color: '#8b5cf6' },
      { id: 'completed', name: 'Job Closed & Paid', color: '#10b981' },
    ],
    aiNeverRules: [
      'On Field Service Basic: AMC contracts and visits are locked (Growth plan feature).',
      'Technicians must upload mandatory photo of machine serial number tag before opening unit.',
      'Send WhatsApp live tracking and technician name + mobile number upon job dispatch.',
      'Always quote inspection base charge (₹250) deductible if customer approves spare repair.',
    ],
  },

  turf: {
    id: 'turf',
    name: 'Turf & Sports Arena',
    tagline: 'Midnight court slots, advance token online, weekly teams & ball rentals',
    customerSingular: 'Team',
    customerPlural: 'Teams',
    trialDays: 14,
    color: '#16a34a', // Emerald Green
    accentColor: '#4ade80',
    roles: ['Turf Owner', 'Ground Manager', 'Night Shift Operator', 'Equipment Attendant'],
    moduleName: 'Court Slots & Midnight Board',
    modulePath: '/app/industry',
    sidebarCustomLabel: 'Court Slot Board',
    fourNumbers: [
      { label: "Today's Games Booked", value: '18', sub: '14 box cricket, 4 football' },
      { label: 'To Collect At Desk Today', value: '₹9,800', sub: 'Remaining advance balances' },
      { label: 'Regular Weekly Teams', value: '24', sub: 'Fixed weekend slots' },
      { label: 'No-Shows Last 30 Days', value: '0', sub: 'Full online advance enforced' },
    ],
    pipelineStages: [
      { id: 'slot_enquiry', name: 'Slot Checking', color: '#64748b' },
      { id: 'advance_sent', name: 'UPI Advance Link Sent', color: '#f59e0b' },
      { id: 'confirmed', name: 'Slot Locked (Advance Paid)', color: '#16a34a' },
      { id: 'playing', name: 'Game Ongoing', color: '#0284c7' },
      { id: 'completed', name: 'Full Paid & Completed', color: '#10b981' },
    ],
    aiNeverRules: [
      'NEVER hold peak slots (6 PM - 1 AM) without minimum 50% non-refundable advance payment.',
      'Inform players that studded metal spikes are strictly banned on artificial turf.',
      'Floodlight power charges are included; extra equipment (bats/bibs) ₹100 deposit at desk.',
      'Rain policy: In case of unplayable downpour, slot rescheduled within 14 days without fee.',
    ],
  },
};


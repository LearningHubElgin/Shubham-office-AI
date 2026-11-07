// Product Data: iSuite AI – Field Service & AMC
export const fieldServiceData = {
  id: 'field-service',
  slug: 'field-service',
  title: 'Field Service Management Software India | iSuite AI',
  metaDescription: 'Field service management software for AC, RO and appliance service, from ₹9,999 a year + GST: jobs board, technician app, GST bills, warranties. AMC on Growth.',
  canonicalUrl: 'https://isuite.ai/field-service/',
  themeColor: '#001845',
  locale: 'en_IN',
  ogImage: '/assets/img/og-field-service.jpg',
  accentColor: '#16a34a',
  accentBright: '#86efac',

  // 1. Hero
  hero: {
    badge: 'iSuite AI – Field Service & AMC',
    h1Main: 'Field service management software,',
    h1Accent: 'with AMC and an AI on Field Service Growth',
    subtitle: 'Run your AC, RO water purifier, appliance, CCTV or electrical service business on one app: jobs by technician and window with WhatsApp updates, mobile job cards, doorstep billing with parts, equipment warranties and AMC contracts. Field Service Basic has no AI; Field Service Growth adds AMC contracts and an AI dispatcher on WhatsApp.',
    buttons: [
      { text: 'Start free trial', href: '#plans', primary: true },
      { text: 'Book a demo', href: "https://wa.me/918220947112?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20iSuite%20AI%20Field%20Service.", primary: false, isExternal: true },
    ],
    trustChips: [
      'Plans from ₹9,999 a year + GST',
      '14-day free trial',
      'Set up with you',
      'Tamil, Tanglish and English',
    ],
    chatHeader: {
      name: 'Kavitha R',
      subtitle: 'WhatsApp · Cool Care Services',
      badge: 'AI replying',
      initials: 'KR',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, Daikin 1.5 ton AC water leak aaguthu. Tomorrow morning service technician varalama?',
        time: '7:15 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Hi Kavitha! Tomorrow morning 10 am - 12 pm slot free. Inspection fee ₹300, parts separate. Unga address confirm panringala?',
        time: '7:15 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: '14/2, 2nd Main Road, Anna Nagar West.',
        time: '7:16 pm',
      },
      {
        id: 4,
        type: 'confirmation',
        statusPill: 'Job booked · Tomorrow, morning',
        title: '✓ Service Job Booked (JOB-0042)',
        details: 'Daikin AC Leakage · Tomorrow 10 am–12 pm · Tech Senthil assigned · Cool Care Services.',
        time: '7:16 pm',
      },
    ],
    floatingCards: [
      {
        title: 'Job booked',
        subtitle: 'JOB-0042 · AC leak · Tomorrow 10 am',
      },
      {
        title: 'Technician on the way',
        subtitle: 'Senthil · Daikin 1.5T',
      },
      {
        title: 'Doorstep invoice',
        subtitle: '₹885 · Paid via UPI',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'AT A GLANCE',
    h2: 'iSuite AI – Field Service & AMC at a glance',
    intro: 'iSuite AI – Field Service & AMC is field service management software for Indian service providers: jobs board, technician mobile view, doorstep GST bills, customer equipment tracking and AMC contracts in one app. Plans start from ₹9,999 a year + GST, with a 14-day free trial. Field Service Growth adds AMC contracts, maintenance schedules and an AI dispatcher that books jobs on WhatsApp.',
    facts: [
      {
        label: 'WHAT IT IS',
        desc: 'Field service management software for the office and the field: jobs by technician, mobile day view, doorstep billing, warranties and AMC contracts in one app.',
      },
      {
        label: 'MADE FOR',
        desc: 'AC, water purifier (RO), commercial refrigeration, CCTV, elevator, solar and home appliance service and repair companies in India.',
      },
      {
        label: 'PRICE',
        desc: 'Field Service Basic: ₹9,999 a year + GST\nField Service Growth: ₹14,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '14 days on either plan. You approve Razorpay auto-debit at the start; the first payment comes only when the trial ends.',
      },
      {
        label: 'AI DISPATCHER',
        desc: 'Included on Field Service Growth: an AI dispatcher that books service jobs on WhatsApp, collects addresses, and confirms appointments 24/7.',
      },
      {
        label: 'WORKS ON',
        desc: 'The web and the Android app for office staff and field technicians.',
      },
    ],
  },

  // 3. Features
  featuresSection: {
    id: 'features',
    eyebrow: 'EVERYTHING INSIDE',
    h2: 'Field service management features: jobs, technicians, equipment and AMC',
    sub: 'One app for the office dispatcher, field technicians, spare parts billing and customer AMC contracts.',
    columns: [
      {
        category: 'Jobs and dispatch',
        icon: 'Bot',
        items: [
          {
            title: 'Jobs board by technician',
            description: 'A visual dispatch board showing every technician’s schedule, open complaints, in-progress jobs and completed calls.',
          },
          {
            title: 'AI dispatcher on Growth',
            description: 'On Growth: answers complaints on WhatsApp, asks for the equipment model, captures addresses, and books technician slots.',
          },
          {
            title: 'WhatsApp customer alerts',
            description: 'Automated WhatsApp notifications when a job is assigned, when the technician is on the way, and when the bill is ready.',
          },
        ],
      },
      {
        category: 'Technician mobile app',
        icon: 'Smartphone',
        items: [
          {
            title: '“My Day” on Android',
            description: 'Technicians see their assigned jobs for today, customer locations with Google Maps navigation, and phone call shortcuts.',
          },
          {
            title: 'Photos and signatures',
            description: 'Capture before/after photos of the repair, customer digital signatures, and technician service notes on the spot.',
          },
          {
            title: 'Doorstep billing',
            description: 'Add labour and spare parts from your approved price list and create instant GST invoices paid via cash or UPI QR.',
          },
        ],
      },
      {
        category: 'Equipment & warranties',
        icon: 'Wrench',
        items: [
          {
            title: 'Equipment history',
            description: 'Track customer machinery by serial number, brand, model, installation date and complete past repair history.',
          },
          {
            title: 'Warranty tracker',
            description: 'Automatic tracking of manufacturer and service warranties, alerting customers before expiry.',
          },
          {
            title: 'Spare parts inventory',
            description: 'Track stock of common spare parts carried in technician vans or stocked in your central workshop.',
          },
        ],
      },
      {
        category: 'AMC contracts on Growth',
        icon: 'FileText',
        items: [
          {
            title: 'Comprehensive & non-comprehensive AMC',
            description: 'Define AMC contract tiers, included periodic service visits, terms and renewal pricing.',
          },
          {
            title: 'Scheduled maintenance calendar',
            description: 'Automatic generation of scheduled maintenance visits (e.g. 3 visits a year), dispatched automatically.',
          },
          {
            title: 'AMC renewal automations',
            description: 'Automated WhatsApp renewal reminders with payment links sent 30 days and 15 days before contract expiry.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    h2: 'From the service complaint\nto the next AMC visit',
    rows: [
      {
        id: 'dispatch',
        eyebrow: 'THE JOBS BOARD',
        h3: 'Dispatch technicians and track jobs in real time',
        text: 'The dispatch board shows every technician in a column, with jobs mapped across morning, afternoon and evening windows. Drag and drop jobs to reassign them when schedules shift, and customers get an instant WhatsApp update.',
        bullets: [
          'Filter by area, technician specialty or job priority',
          'Automatic WhatsApp notification with technician name and contact',
          'Live status: Assigned → En Route → On Site → Completed',
        ],
        type: 'fieldJobsBoard',
      },
      {
        id: 'doorstep-billing',
        eyebrow: 'MOBILE JOB CARD',
        h3: 'Job cards and doorstep GST invoices on mobile',
        text: 'Technicians open the app on Android to view their daily route. Once the repair is complete, they select parts used from the inventory list, add labour charges, and present a dynamic UPI QR code on their phone screen.',
        bullets: [
          'Digital customer signature collected on mobile screen',
          'GST invoice generated and sent to customer’s WhatsApp in 1 tap',
          'Instant payment reconciliation via connected Razorpay',
        ],
        type: 'fieldJobCard',
      },
      {
        id: 'amc-contracts',
        eyebrow: 'AMC ON GROWTH',
        h3: 'Annual Maintenance Contracts and scheduled visits',
        text: 'On Field Service Growth, manage hundreds of residential and commercial AMCs effortlessly. The system schedules mandatory preventative maintenance visits throughout the year and triggers renewal notices automatically.',
        bullets: [
          'Custom AMC agreement PDFs generated on your letterhead',
          'Routine maintenance visits populated automatically into technician calendars',
          'One-click renewal payment links sent over WhatsApp',
        ],
        type: 'fieldAmc',
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'Service dashboard: jobs, AMC visits, renewals and warranties',
    sub: 'The dashboard opens on what a service business owner checks first, and each number opens its list.',
    stats: [
      { icon: 'Wrench', label: 'Today’s jobs', value: '18', sub: '11 completed, 7 active' },
      { icon: 'Clock', label: 'Warranties ending', value: '5', sub: 'in next 15 days' },
      { icon: 'Calendar', label: 'AMC visits due this month', value: '22', sub: '14 scheduled' },
      { icon: 'CreditCard', label: 'Pending payments', value: '₹14,200', sub: 'across 4 jobs' },
    ],
  },

  // 6. Speaks Section
  speaksSection: {
    eyebrow: 'MADE FOR SERVICE TEAMS',
    h2: 'Paper job cards vs iSuite AI',
    comparisonHeader: {
      left: 'TODAY',
      right: 'WITH ISUITE AI – FIELD SERVICE & AMC',
    },
    rows: [
      {
        today: 'Complaints written on slips of paper, lost in vans',
        withProduct: 'Every job assigned to a technician with location, notes and WhatsApp alerts',
      },
      {
        today: 'Technicians calling the office repeatedly for customer addresses',
        withProduct: 'Customer address, Google Maps pin and call button right in the technician’s app',
      },
      {
        today: 'Parts billed on handwritten kacha receipts without tax',
        withProduct: 'Itemized GST bills generated on mobile with spare parts and labour listed',
      },
      {
        today: 'AMC renewal dates tracked in forgotten Excel sheets',
        withProduct: 'On Growth, automated AMC schedule, periodic visits and WhatsApp renewal links',
      },
    ],
    chips: [
      'Jobs, technicians, equipment and contracts — your words on every screen',
      'Dispatcher, technician and owner roles',
      'AI replies in Tamil, Tanglish or English on Field Service Growth',
      'The whole app on Android',
      'Payments collected via cash, UPI or link',
    ],
  },

  // 7. Safety Section
  safetySection: {
    h2: 'Careful with customers',
    cards: [
      {
        title: 'Where it fits',
        text: 'iSuite AI – Field Service & AMC is designed for residential and commercial service providers in HVAC, water purification, appliance repair, electrical systems and CCTV. It keeps job dispatch, technician workflows, spare parts, customer equipment history, AMC contracts and billing in one app.',
      },
      {
        title: 'What the AI is told never to do',
        rules: [
          'Promise an exact repair cost before the technician inspects on site',
          'Guarantee an exact minute of arrival (offers safe time windows)',
          'Promise unapproved spare parts warranties or discounts',
          'Share customer addresses or phone numbers with unauthorized parties',
        ],
      },
    ],
  },

  // 8. Pricing Section
  pricingSection: {
    eyebrow: 'PRICING',
    h2: 'Field service software price in India',
    intro: 'Clear yearly plans in rupees plus 18% GST. Field Service Basic provides the complete dispatch board, technician mobile view and doorstep billing; Field Service Growth adds AMC contracts, routine maintenance calendars and the AI dispatcher on WhatsApp.',
    plans: [
      {
        name: 'Field Service Basic',
        badge: 'FOR GROWING REPAIR FIRMS',
        price: '₹9,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For a service company getting started: the jobs board by technician with WhatsApp updates, each technician’s day on the phone with photos and a bill on the spot, customers’ equipment with warranty reminders, payment links and broadcasts.',
        limits: '5 users · 1,000 emails a month · Unlimited products',
        leadFeature: 'Core dispatch and field operations without AMC or bot',
        features: [
          { title: 'Jobs dispatch board', description: 'Visual technician board with morning, afternoon and evening slots' },
          { title: 'Technician Android app', description: '“My Day” route list, Google Maps navigation and call shortcuts' },
          { title: 'Doorstep GST billing', description: 'Generate itemized tax invoices with spare parts on mobile' },
          { title: 'Customer signatures & photos', description: 'Record digital sign-offs and before/after repair photos' },
          { title: 'Customer equipment tracking', description: 'Maintain service history by machine serial number and model' },
          { title: 'UPI payment links', description: 'Collect payments via Razorpay QR or instant WhatsApp links' },
        ],
        buyUrl: 'https://app.isuite.ai/buy?industry=field-service&package=basic',
      },
      {
        name: 'Field Service Growth',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹14,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For established service companies managing hundreds of AMC contracts, preventative maintenance schedules, and requiring an AI dispatcher on WhatsApp.',
        limits: '10 users · 5,000 emails a month · ₹1,000 AI credits a month',
        leadFeature: 'Includes everything in Field Service Basic, plus:',
        features: [
          { title: 'AI dispatcher on WhatsApp', description: 'Captures complaints, model info, addresses and books service slots 24/7' },
          { title: 'AMC contract management', description: 'Manage comprehensive & non-comprehensive contracts and renewals' },
          { title: 'Scheduled maintenance calendar', description: 'Automatic creation of routine service visits throughout the year' },
          { title: 'Automated AMC renewals', description: 'WhatsApp renewal notices with direct payment links sent before expiry' },
          { title: 'Meta lead ads integration', description: 'Facebook and Instagram service leads flow straight into jobs board' },
          { title: 'GSTR-1 & expense exports', description: 'Complete accounting sheets ready for your tax consultant' },
        ],
        buyUrl: 'https://app.isuite.ai/buy?industry=field-service&package=growth',
      },
    ],
    footnotes: [
      'Priced in Indian rupees by the year, plus 18% GST. Billed annually.',
      'WhatsApp messages are billed directly by Meta through your WhatsApp Business Account.',
      {
        prefix: 'Compare with all other products on our ',
        linkText: 'full pricing page',
        linkUrl: '/pricing/#fieldservice',
        text: '.',
      },
    ],
  },

  // 9. FAQ Section
  faqSection: {
    eyebrow: 'FAQ',
    h2: 'Field service software: questions service companies ask',
    faqs: [
      {
        id: 'what-is',
        question: 'What is iSuite AI – Field Service & AMC?',
        answer: 'iSuite AI – Field Service & AMC is field service management software made in Madurai for Indian service teams. It gives you a jobs board by technician, a mobile view for technicians on the road, GST bills on the spot, equipment records, and AMC contracts. Field Service Growth adds an AI dispatcher on WhatsApp.',
      },
      {
        id: 'amc-difference',
        question: 'What is the difference between Basic and Growth?',
        answer: 'Field Service Basic includes all daily job dispatching, technician app, customer equipment history, and doorstep billing. Field Service Growth adds Annual Maintenance Contract (AMC) management, automated routine service visit scheduling, AMC renewal reminders, and the AI WhatsApp dispatcher.',
      },
      {
        id: 'technician-phone',
        question: 'Does each technician need an expensive device?',
        answer: 'No. The technician app runs on any basic Android smartphone. Technicians see their jobs for today, tap to navigate via Google Maps, take before/after photos, and generate bills right on their phone.',
      },
      {
        id: 'doorstep-payments',
        question: 'How do customers pay on the spot?',
        answer: 'Technicians can show a dynamic Razorpay UPI QR code on their phone screen. When the customer scans and pays, the invoice marks as paid automatically. Technicians can also mark cash received.',
      },
      {
        id: 'amc-reminders',
        question: 'How do AMC renewals work?',
        answer: 'When an AMC contract approaches expiry (e.g. 30 days prior), the system sends automated WhatsApp messages to the customer with contract renewal terms and a direct Razorpay payment link.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'START YOUR FREE TRIAL',
    h2: 'Every job booked. Every visit done.',
    sub: 'Streamline your field service team and AMC operations today with a 14-day free trial.',
    buttonPrimary: {
      text: 'Start 14-Day Free Trial',
      href: '#plans',
    },
    buttonSecondary: {
      text: 'Book a Live Demo',
      href: "https://wa.me/918220947112?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20iSuite%20AI%20Field%20Service.",
    },
    callText: 'Or call +91 82209 47112 to talk with our team',
    callHref: 'tel:+918220947112',
  },

  // 11. Family Section
  familySection: {
    eyebrow: 'THE ISUITE AI FAMILY',
    h2: 'One platform, made for each trade',
    sub: 'Every product is built around the way its industry runs — with its own screens, tools and AI.',
    templateLink: '/templates/amc-contract-format/',
    templateText: 'Free annual maintenance contract (AMC) format in Word →',
    comingSoonLink: '/#soon',
  },
};


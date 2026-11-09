// Product Data: iSuite AI – Clinic
export const clinicData = {
  id: 'clinic',
  slug: 'clinics',
  title: 'Clinic Management Software with AI Front Desk | iSuite AI',
  metaDescription: 'Run your dental, skin, eye or physio clinic on one app with an AI front desk that answers and books appointments on WhatsApp 24/7.',
  canonicalUrl: 'https://isuite.ai/clinics/',
  themeColor: '#001845',
  locale: 'en_IN',
  ogImage: '/assets/img/og-clinic.jpg',

  // 1. Hero
  hero: {
    badge: 'iSuite AI – Clinic',
    h1Main: 'Clinic management software',
    h1Accent: 'with an AI front desk',
    subtitle: "Run your dental, skin, eye or physio clinic on one app. It is clinic software made for Indian clinics: each doctor's diary, the day's OPD board, patients, prescriptions and GST bills. An AI answers patients and books, moves or cancels on WhatsApp at any hour, and reminders and follow-ups go out on their own.",
    buttons: [
      { text: 'Start free trial', href: '#pricing', primary: true },
      { text: 'Book a demo', href: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20iSuite%20AI.', primary: false, isExternal: true },
    ],
    trustChips: [
      'Plans from ₹11,999 a year + GST',
      '7-day free trial',
      'Set up with you',
      'Tamil, Tanglish and English',
    ],
    chatHeader: {
      name: 'Ramesh K',
      subtitle: 'WhatsApp · Smile Dental Care',
      badge: 'AI replying',
      initials: 'RK',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, pallu vali. Saturday morning doctor iruka?',
        time: '9:48 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Sorry to hear that, Ramesh. Saturday Dr. Priya 10:30 am, 11:45 am free. Consultation ₹300. Edhu vasathi?',
        time: '9:48 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: '10:30 ok',
        time: '9:49 pm',
      },
      {
        id: 4,
        type: 'confirmation',
        statusPill: 'Appointment Booked · Sat 10:30 am',
        title: '✓ Appointment Booked',
        details: 'Dr. Priya · Sat 10:30 am · Smile Dental Care. Calendar reminder sent!',
        time: '9:49 pm',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'AT A GLANCE',
    h2: 'iSuite AI – Clinic at a glance',
    intro: "iSuite AI – Clinic is clinic management software for Indian clinics: each doctor's diary, the day's OPD board, patient records, prescriptions and GST bills in one app, with an AI front desk that answers patients and books on WhatsApp. Plans start from ₹11,999 a year + GST, with a 7-day free trial. Made in Madurai and set up with you.",
    facts: [
      {
        label: 'WHAT IT IS',
        desc: 'Clinic management software with an AI front desk built in, on the web and the Android app',
      },
      {
        label: 'MADE FOR',
        desc: 'Dental, skin, eye, physiotherapy and other clinics that run on appointments, polyclinics with several doctors, and diagnostic labs that send reports',
      },
      {
        label: 'PRICE',
        desc: 'Clinic Basic: ₹11,999 a year + GST\nClinic Growth: ₹22,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '7 days on either plan. You approve auto-debit at the start, and the first payment comes only when the trial ends.',
      },
      {
        label: 'AI',
        desc: 'On both plans: it answers and books on WhatsApp, Instagram, Messenger and web chat, replies in Tamil, Tanglish or English, and understands voice notes. Each plan includes a year\'s AI credits.',
      },
      {
        label: 'ONLY ON CLINIC GROWTH',
        desc: 'Treatment estimates, your own letterhead, expenses, GSTR-1 and Tally exports, email campaigns, Meta lead ads and Studio',
      },
    ],
  },

  // 3. Features
  featuresSection: {
    id: 'features',
    eyebrow: 'EVERYTHING INSIDE',
    h2: 'Everything in one clinic\nmanagement software',
    sub: 'One app for the front desk, the doctors, the billing and the growth of your clinic, on the web and on the Android app — made for dental, skin, eye and physiotherapy clinics, polyclinics and diagnostic labs.',
    columns: [
      {
        category: 'Front desk',
        icon: 'Bot',
        items: [
          {
            title: 'AI receptionist',
            description: 'Answers timings, fees and doctors, and books, moves or cancels — on WhatsApp, Instagram, Messenger and web chat.',
          },
          {
            title: 'Appointments',
            description: 'A diary for each doctor, each service with its own length and fee, and online booking pages.',
          },
          {
            title: 'OPD board',
            description: 'Today board shows waiting, in consultation, done and no-shows, with quick walk-in bookings and pre-consult vitals.',
          },
        ],
      },
      {
        category: 'Patient records',
        icon: 'FileText',
        items: [
          {
            title: 'Patient records',
            description: 'Every chat, appointment, bill and note on one page, with tags and your own fields.',
          },
          {
            title: 'Patient files',
            description: 'Reports, X-rays, photos and voice notes, kept on the patient and sent in the chat.',
          },
          {
            title: 'Prescriptions',
            description: "Prescriptions and visit summaries with your clinic's logo and doctor signature, delivered to patient's WhatsApp in 1 tap.",
          },
        ],
      },
      {
        category: 'Billing and accounts',
        icon: 'CreditCard',
        items: [
          {
            title: 'GST bills & payments',
            description: 'Cash, UPI and card at the desk, instant Razorpay links on WhatsApp, and itemized GST invoices.',
          },
          {
            title: 'Treatments in parts',
            description: "A treatment's fee in instalments, each reminded on WhatsApp and paid at the desk.",
          },
          {
            title: 'Health packages',
            description: 'Your packages and their prices, which the AI explains, and plans that renew.',
          },
          {
            title: 'Estimates and books',
            description: 'On Clinic Growth: treatment estimates, your own letterhead, expenses, and GSTR-1 and Tally exports.',
          },
        ],
      },
      {
        category: 'Marketing and team',
        icon: 'Users',
        items: [
          {
            title: 'Instagram replies',
            description: 'Replies to comments on your posts, and a DM to the people who comment.',
          },
          {
            title: 'Meta ads and Studio',
            description: 'On Clinic Growth: lead ads straight in, which ads bring paying patients, and a marketing agent that drafts new ads for your approval.',
          },
          {
            title: 'Your team',
            description: 'Doctor and front-desk roles, team reports, the Android app and your logo on every prescription and bill.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how-it-works',
    eyebrow: 'HOW IT WORKS',
    h2: 'From the first message\nto the next visit',
    rows: [
      {
        id: 'clinic-appts',
        eyebrow: 'APPOINTMENTS',
        h3: 'Doctor appointment booking, in chat and online',
        text: 'One diary per doctor, with each service its own length and fee — a 15-minute consultation, a 30-minute cleaning. The AI offers only times that are really free, and books, moves or cancels on WhatsApp. Patients can also book on your online booking page.',
        bullets: [
          'Buffers between appointments, so the diary never overbooks',
          'It never says "booked" unless it is',
          'An enquiry becomes a patient in one click, keeping every chat',
        ],
        type: 'clinicDiary',
      },
      {
        id: 'clinic-reminders',
        eyebrow: 'REMINDERS AND REPORTS',
        h3: 'Automatic appointment reminders and reports',
        text: "A reminder goes before each appointment. When a visit is done, the front desk notes the next one, and a reminder goes three days before it. You send a report from the patient's page the day it is ready.",
        bullets: [
          'Reports travel in an approved WhatsApp template, even a week after the patient last wrote',
          "Every report stays on the patient's page",
          'Patients reply to the reminder to move their appointment',
        ],
        type: 'clinicReminderReport',
      },
      {
        id: 'clinic-prescriptions',
        eyebrow: 'PRESCRIPTIONS',
        h3: 'Digital prescriptions, sent on WhatsApp',
        text: "The front desk takes the vitals; the doctor writes the medicines, tests, advice and the next visit. It prints with your clinic's name, logo and the doctor's signature — or on your own letterhead with Clinic Growth — and goes to the patient on WhatsApp. The next visit is saved for its reminder.",
        bullets: [
          'Visit summaries the same way',
          'Seen only by doctors and those you allow',
          'The AI never reads what a prescription says',
        ],
        type: 'clinicPrescription',
      },
      {
        id: 'clinic-followups',
        eyebrow: 'FOLLOW-UPS',
        h3: 'Patient follow-ups and review requests',
        text: 'A thank-you and a review request after each visit, a kind message when someone misses an appointment, and a birthday greeting every year — each on its own, once you switch it on.',
        bullets: [
          'Follow-ups due and overdue on one list',
          'Broadcasts to patients who opted in',
          'Doctor and front-desk roles, so each sees what they should',
        ],
        type: 'clinicFollowups',
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'Four numbers every morning',
    sub: 'The dashboard opens on what a clinic owner checks first, and each number opens its list.',
    stats: [
      {
        label: "Today’s appointments",
        value: '18',
        sub: '6 still to come',
        icon: 'Calendar',
      },
      {
        label: 'No-shows this week',
        value: '2',
        sub: 'each sent a kind message',
        icon: 'UserX',
      },
      {
        label: 'Follow-ups due',
        value: '7',
        sub: '2 overdue',
        icon: 'Clipboard',
      },
      {
        label: 'New patients this month',
        value: '41',
        sub: 'from WhatsApp, Instagram and walk-ins',
        icon: 'UserPlus',
      },
    ],
  },

  // 6. Speaks
  speaksSection: {
    eyebrow: 'Made for Indian clinics',
    h2: 'It speaks the way a clinic does',
    comparisonHeader: {
      left: 'Today',
      right: 'With iSuite AI – Clinic',
    },
    rows: [
      {
        today: 'WhatsApp messages wait until the desk is free',
        withProduct: 'Timings, fees and bookings answered in seconds',
      },
      {
        today: 'Reminder calls fill the morning',
        withProduct: 'Reminders go out on their own',
      },
      {
        today: 'Patients who were due back are forgotten',
        withProduct: 'The next visit is saved, and the patient is reminded',
      },
      {
        today: 'Reports collected in person, or lost in a personal phone',
        withProduct: 'Reports sent from the patient’s own page, and kept there',
      },
    ],
    chips: [
      {
        icon: 'Users',
        text: 'Patients, enquiries and appointments — clinic words on every screen',
      },
      {
        icon: 'Shield',
        text: 'Doctor and front-desk roles',
      },
      {
        icon: 'Languages',
        text: 'Tamil and Tanglish',
      },
      {
        icon: 'Smartphone',
        text: 'The whole app on Android',
      },
      {
        icon: 'CreditCard',
        text: 'Bills paid by cash, UPI or card',
      },
    ],
  },

  // 7. Safety
  safetySection: {
    h2: 'Careful with patients',
    cards: [
      {
        title: 'Where it fits',
        icon: 'Layers',
        text: 'Not a full EMR. iSuite AI – Clinic keeps appointments, patient details and files, vitals, prescriptions, visit summaries and bills. Dental charting, lab result entry, pharmacy stock and ABDM health records are not in it, so a clinic that needs those keeps its EMR or lab software alongside.',
      },
      {
        title: 'What the AI is set never to do',
        icon: 'Shield',
        rules: [
          'Diagnose, or suggest a medicine or a dose',
          'Explain a report, or read a prescription',
          'Talk about other patients',
          'Hold on to an emergency — it gives the clinic’s number and hands over at once',
        ],
      },
    ],
  },

  // 8. Pricing
  pricingSection: {
    id: 'pricing',
    anchorPlans: 'pricing',
    eyebrow: 'Plans for clinics',
    h2: 'Clinic software price in India',
    intro: 'Clinic Basic is ₹11,999 a year + GST for 2 users, and Clinic Growth is ₹22,999 a year + GST for 4, each with a 7-day free trial. Either starts with the clinic setup already in place: the patient pipeline, the doctor’s diary and services, the reminder schedule and the AI instructions for your clinic.',
    plans: [
      {
        name: 'Clinic Basic',
        badge: 'STARTER',
        price: '₹11,999',
        pricePeriod: '/ year + GST',
        trialText: 'Includes 7-day free trial',
        description: 'For a clinic with one doctor or a small team: an AI receptionist that answers patients and books appointments on WhatsApp, reminders, patient files, prescriptions, bills and treatment fees in parts paid at the desk, health packages, and calls from your own SIM.',
        buyUrl: 'https://app.isuite.ai/buy?package=54783cc5-a1b7-4476-920b-7ef3c721ea3c&cycle=yearly&industry=clinics',
        limits: [
          '2 users',
          '1,000 emails a month',
          '₹1,000 AI credits a year',
        ],
        features: [
          { title: 'Unified inbox', description: 'WhatsApp, Instagram, Messenger and web chat in one inbox for the whole team' },
          { title: 'Enquiries', description: 'Every enquiry with their chats, notes and history, in one list' },
          { title: 'AI agent', description: 'AI replies, handoffs and ad briefs' },
          { title: 'Manager over WhatsApp', description: "Approve the AI's discounts and exceptions, check the numbers and give it instructions from your own WhatsApp" },
          { title: 'Sales pipelines', description: 'Treatments, pipelines and stages' },
          { title: 'Patient management', description: 'An enquiry who buys becomes a patient in one click, keeping their chats and history; with tags, groups, custom fields, import and merge' },
          { title: 'Patient files', description: "Keep documents, photos and voice notes on each enquiry's and patient's profile, and send them in the chat" },
          { title: 'Follow-ups', description: 'Follow-up tasks, and AI follow-ups with the AI agent' },
          { title: 'GST invoices', description: 'Invoices with GST, and the payments recorded against them' },
          { title: 'Memberships & recurring payments', description: 'Monthly, quarterly or yearly plans with renewal reminders' },
          { title: 'Health packages', description: 'Your services with prices; the AI answers what each package costs and includes' },
          { title: 'Fees in instalments', description: 'A fee split into instalments, reminded on WhatsApp before and after each falls due, paid at the desk — or online by link with the Razorpay payment gateway.' },
          { title: 'WhatsApp broadcasts', description: 'Template messages to your patients, skipping anyone who opted out' },
          { title: 'Automations', description: 'Flows and triggers' },
          { title: 'Instagram comment & DM automation', description: 'Reply to comments on your posts, DM the people who comment, and answer Instagram DMs automatically' },
          { title: 'Appointments', description: 'Calendars and appointment pages' },
          { title: 'Prescriptions', description: "A patient's prescriptions and visit summaries — medicines, tests, advice and the next visit — printed with the clinic's name and logo, or on its own letterhead with Custom quotation design, and sent on WhatsApp." },
          { title: 'Calls (iSuite Phone)', description: 'Call enquiries from your own SIM, logged on the patient' },
          { title: 'Call recordings', description: 'Recordings of those calls, saved to the patient' },
          { title: 'WhatsApp calls', description: 'Patients call your WhatsApp number and it rings on the web and in the app; call them back on WhatsApp' },
          { title: 'Team reports', description: 'AI agent and handoff reports' },
        ],
      },
      {
        name: 'Clinic Growth',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹22,999',
        pricePeriod: '/ year + GST',
        trialText: 'Includes 7-day free trial',
        description: 'For busy and multi-doctor clinics: everything in Clinic Basic, plus treatment estimates, prescriptions and bills on your own letterhead, expenses and GST books, email campaigns, web forms, Meta ad leads with the ads report, and Studio for marketing posts.',
        buyUrl: 'https://app.isuite.ai/buy?package=48496eb4-4dd6-4d50-8878-0f9c2c1dfd00&cycle=yearly&industry=clinics',
        limits: [
          '4 users',
          '2,000 emails a month',
          '₹2,000 AI credits a year',
        ],
        leadFeature: 'Everything in Clinic Basic, plus:',
        features: [
          { title: 'Studio', description: 'The marketing agent' },
          { title: 'Quotations', description: 'PDF quotations, sent in the chat and accepted in a tap' },
          { title: 'Custom quotation design', description: 'Your own letterhead PDF under your quotations and invoices; the built-in designs come with every package' },
          { title: 'Purchases & books', description: "Expenses, suppliers’ bills, payments made and the GST paid on them — the money-out side of Accounts" },
          { title: 'Email campaigns', description: 'Newsletters and offers by email, skipping anyone who unsubscribed' },
          { title: 'Meta lead ads', description: 'Facebook and Instagram enquiry forms straight into your enquiries' },
          { title: 'Forms', description: 'Web forms and their submissions' },
          { title: 'Ads report', description: 'Which ads bring enquiries, paying patients and revenue' },
        ],
      },
    ],
    footnotes: [
      'Prices in rupees, plus 18% GST. On a free trial you approve auto-debit at the start, and the first payment comes only when the trial ends.',
      {
        prefix: 'Not sure which package fits? ',
        linkText: 'Book a free 45-minute demo',
        linkUrl: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20iSuite%20AI.',
      },
      {
        prefix: 'Meta decides approval for the WhatsApp Business Platform; it usually takes 1–2 weeks, and each WhatsApp template is approved by Meta too. WhatsApp message charges are billed by Meta, separately from iSuite AI. ',
        linkText: 'Compare with every plan',
        linkUrl: '/pricing/#clinic',
      },
    ],
  },

  // 9. FAQ
  faqSection: {
    id: 'faq',
    eyebrow: 'FAQ',
    h2: 'Clinic management software: questions clinics ask',
    faqs: [
      {
        id: 'clinic-faq-1',
        question: 'What is iSuite AI – Clinic?',
        answer: 'iSuite AI – Clinic is clinic management software made in Madurai for Indian clinics. It keeps a diary for each doctor, patient records and files, the day’s OPD board, prescriptions, GST bills and reminders in one app, with an AI front desk that answers patients and books, moves or cancels appointments on WhatsApp, Instagram, Messenger and web chat.',
      },
      {
        id: 'clinic-faq-2',
        question: 'How much does iSuite AI – Clinic cost?',
        answer: 'Clinic plans start from ₹11,999 a year + GST. Clinic Basic has 2 users. Clinic Growth, ₹22,999 a year + GST, has 4 users and adds treatment estimates, your own letterhead, email campaigns, Meta lead ads, and GSTR-1 and Tally exports. Both start with a 7-day free trial, and Meta bills WhatsApp charges separately.',
      },
      {
        id: 'clinic-faq-3',
        question: 'Does it work for OPD and walk-in patients?',
        answer: 'Yes. The Today board shows the day’s patients as Waiting, With the doctor, Done or No-show, and refreshes every 30 seconds. Walk-in books a patient in at once. The front desk takes BP, pulse, SpO2, sugar and weight, sends the patient to the doctor, and bills at the desk. There is no token number or TV display yet.',
      },
      {
        id: 'clinic-faq-4',
        question: 'Can patients book a doctor’s appointment on WhatsApp?',
        answer: 'Yes. The AI reads each doctor’s diary and offers only times that are really free, books the slot, and moves or cancels it when the patient asks. It never says “booked” unless the booking is saved. Patients can also book on your online booking page, shared as a link or put on your own website.',
      },
      {
        id: 'clinic-faq-5',
        question: 'Does the AI reply to patients in Tamil and Tanglish?',
        answer: 'Yes. The AI replies in the language each patient writes in, such as Tamil, Tanglish or English, or always in one language you choose. It understands WhatsApp voice notes too. The app’s own screens are in English and use clinic words: Patients, Enquiries, Appointments and Treatments.',
      },
      {
        id: 'clinic-faq-6',
        question: 'Is iSuite AI – Clinic an EMR?',
        answer: 'No, it is not a full electronic medical record system. It keeps appointments, patient details and files, vitals, prescriptions, visit summaries and bills. It does not do dental charting, lab result entry, pharmacy stock or ABDM health records, so clinics that need those keep their EMR or lab software alongside it.',
      },
      {
        id: 'clinic-faq-7',
        question: 'Can doctors write prescriptions and send them on WhatsApp?',
        answer: 'Yes. The front desk takes the vitals, and the doctor adds complaints, diagnosis, medicines, tests, advice and the next visit. It prints with your clinic’s name, logo and the doctor’s signature, or on your own letterhead with Clinic Growth. One tap sends the PDF on WhatsApp and keeps it in the patient’s files.',
      },
      {
        id: 'clinic-faq-8',
        question: 'Does it make GST bills for a clinic?',
        answer: 'Yes. At the desk, Bill adds the consultation at the service’s price and anything else done, and records what is paid by cash, UPI or card. It is a numbered invoice that prints as a PDF. If your clinic charges GST, its one rate goes on every line. Clinic Growth adds treatment estimates and GSTR-1 and Tally exports.',
      },
      {
        id: 'clinic-faq-9',
        question: 'Will the AI give patients medical advice?',
        answer: 'No. A clinic’s AI starts with rules never to diagnose, suggest a medicine or dose, or explain a report, and it never sees what a prescription says. It answers timings, fees, doctors and location, and books appointments. For chest pain, heavy bleeding or any emergency, it gives the clinic’s number and hands the chat to your staff at once.',
      },
      {
        id: 'clinic-faq-10',
        question: 'Who can see patient prescriptions and health data?',
        answer: 'Only the people you allow. By default the owner, team managers and the Doctor role read and write prescriptions; the Front desk role takes vitals and prints or sends finished ones. You give anyone else access in Team → Roles. The AI knows only that a prescription exists and the next visit date, never what it says.',
      },
      {
        id: 'clinic-faq-11',
        question: 'Which types of clinics is iSuite AI – Clinic made for?',
        answer: 'Clinics that run on appointments: dental, skin and aesthetic, eye, physiotherapy, ENT, paediatric, ayurveda and homeopathy clinics, polyclinics, and diagnostic labs that send reports to patients. Each doctor has a diary, each service has its own length and fee, and the clinic setup, with patient stages, reminder templates and roles, is ready the day you buy.',
      },
      {
        id: 'clinic-faq-12',
        question: 'Does it send appointment reminders to patients automatically?',
        answer: 'Yes. A WhatsApp reminder goes before each appointment, and another three days before the next visit the doctor asked for; patients reply to move it. Missed-visit messages, thank-yous with a review request and birthday greetings can go out on their own too. Each one uses a WhatsApp template that Meta approves first, and you switch it on.',
      },
      {
        id: 'clinic-faq-13',
        question: 'Is there a clinic management app for Android?',
        answer: 'Yes. The iSuite AI Android app holds the whole system, including the inbox, appointments, patients and alerts, so a doctor can work from the phone. It can also place calls from your own SIM, record them and add an AI transcript to the patient’s page. With WhatsApp calling switched on, patients who call your WhatsApp number ring in the app.',
      },
      {
        id: 'clinic-faq-14',
        question: 'How soon can a clinic start using iSuite AI?',
        answer: 'The clinic setup is in place the day you buy: patient stages, the doctor’s diary and services, reminder and report templates, and Doctor and Front desk roles. You add your doctors, timings, fees and address. Meta approves your WhatsApp Business number, usually in 1–2 weeks, and the MnT Future team helps you through it.',
      },
      {
        id: 'clinic-faq-15',
        question: 'Is there a free version of iSuite AI – Clinic?',
        answer: 'There is no free-forever plan. Every clinic plan starts with a 7-day free trial: you approve Razorpay auto-debit at the start, and the first yearly payment is taken only when the trial ends. Cancel before then and you pay nothing. You can also see the software first on a free 45-minute demo.',
      },
      {
        id: 'clinic-faq-16',
        question: 'How many doctors and staff can use it?',
        answer: 'Clinic Basic includes 2 users and Clinic Growth includes 4; ask us if you need more. Each doctor gets a diary with their own services and timings. The Doctor role sees their own appointments and patients, and the Front desk role handles bookings, the inbox, vitals and bills.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'iSuite AI – Clinic',
    h2: 'Give your front desk an assistant that never sleeps.',
    sub: 'Start a 7-day free trial on the plan that fits your clinic, or see it first on a free 45-minute demo.',
    buttonPrimary: { text: 'Start free trial', href: '#plans' },
    buttonSecondary: {
      text: 'Book a demo',
      href: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20iSuite%20AI.',
    },
    callText: 'Or call +91 93486 33365',
    callHref: 'tel:+919348633365',
  },

  // 11. The iSuite AI Family
  familySection: {
    eyebrow: 'THE ISUITE AI FAMILY',
    h2: 'One platform, made for each trade',
    sub: 'One platform underneath — the AI, payments, marketing and calls — and each product made whole for its own trade.',
    moreLink: null,
    comingSoonLink: '/#soon',
  },
};


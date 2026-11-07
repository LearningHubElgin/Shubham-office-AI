// Product Data: iSuite AI – Real Estate
export const realEstateData = {
  id: 'real-estate',
  slug: 'real-estate',
  title: 'Real Estate Software for Builders in India | iSuite AI',
  metaDescription: 'Real estate software for builders: Meta ad leads, site visits, a live flats board, booking links, cost sheets, Tamil AI replies, from ₹19,999 a year + GST.',
  canonicalUrl: 'https://isuite.ai/real-estate/',
  themeColor: '#001d55',
  accentColor: '#e08600',
  accentBright: '#ffc56b',
  locale: 'en_IN',
  ogImage: '/assets/img/og-realestate.jpg',

  // 1. Hero
  hero: {
    badge: 'iSuite AI – Real Estate',
    h1Main: 'Real estate software for builders,',
    h1Accent: 'with an AI that answers buyers',
    subtitle: 'Leads, site visits, every flat, bookings, payment plans, paperwork and brokers in one app, made for builders, developers and plot promoters in India — and an AI that answers buyers and books site visits on WhatsApp at any hour. A booking amount paid in full books the flat, if it is still free or held for that buyer.',
    buttons: [
      { text: 'Start free trial', href: '#plans', primary: true },
      { text: 'Book a demo', href: 'https://wa.me/918220947112?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20iSuite%20AI.', primary: false, isExternal: true },
    ],
    trustChips: [
      '14-day free trial',
      'Set up with you',
      'Tamil, Tanglish and English',
    ],
    // Chat Simulation
    chatHeader: {
      name: 'Kavitha R',
      subtitle: 'WhatsApp · from an Instagram ad',
      badge: 'AI replying',
      initials: 'KR',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, Anna Nagar la 2BHK iruka? Budget 80L kulla.',
        time: '9:42 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Iruku Kavitha! Anna Nagar West la 2 projects — 2BHK ₹72L and ₹79L. Ready to move venuma, illa under construction ok va?',
        time: '9:42 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: 'Ready to move. Saturday paakalama?',
        time: '9:43 pm',
      },
      {
        id: 4,
        sender: 'bot',
        text: 'Done! Saturday 11:00 am site visit booked. Location anuppuren.',
        time: '9:43 pm',
      },
      {
        id: 5,
        type: 'confirmation',
        statusPill: 'Site visit booked · Sat, 11:00 am',
        title: '✓ Site Visit Booked',
        details: 'Kavitha R · Sat 11:00 am · Anna Nagar site office. Location pin and sales brief sent!',
        time: '9:43 pm',
      },
    ],
    floatingCards: [
      {
        id: 'fc-1',
        title: 'Wants: 2BHK, ready to move',
        subtitle: 'Anna Nagar · under ₹80L',
        position: 'top-left',
        icon: 'Building2',
      },
      {
        id: 'fc-2',
        title: 'Site visit booked',
        subtitle: 'Sat 11:00 am · Ravi',
        position: 'bottom-right',
        icon: 'Calendar',
      },
      {
        id: 'fc-3',
        title: 'Flats that fit',
        subtitle: 'B-204 · C-108, on sale',
        position: 'top-right',
        icon: 'Layers',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'At a glance',
    h2: 'iSuite AI – Real Estate at a glance',
    intro: 'iSuite AI – Real Estate is real estate software for builders, developers and plot promoters in India: one app for enquiries, site visits, a live flats board, bookings, payment plans, cost sheets and brokers, with an AI that answers buyers in Tamil, Tanglish or English. Priced from ₹19,999 a year + GST, with a 14-day free trial.',
    facts: [
      {
        label: 'WHAT IT IS',
        desc: "Sales software for a builder's office: enquiries, site visits, flats and plots, bookings, payment plans and cost sheets, with an AI agent built in; demand letters, team reports and the ads report come with Real Estate Growth",
      },
      {
        label: 'MADE FOR',
        desc: 'Builders, developers and plot promoters who sell flats, villas and plots. Not a broker\'s listing tool, rental management or a construction ERP',
      },
      {
        label: 'PRICE',
        desc: 'Real Estate Basic: ₹19,999 a year + GST\nReal Estate Growth: ₹34,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '14 days on either plan. You approve auto-debit with Razorpay at the start; the first payment comes only when the trial ends',
      },
      {
        label: 'AI',
        desc: "On both plans: replies on WhatsApp, Instagram, Messenger and web chat, in the buyer's language or one you choose, and books site visits. Free AI credits every month",
      },
      {
        label: 'WORKS ON',
        desc: 'The web and the Android app',
      },
    ],
  },

  // 3. Features
  featuresSection: {
    id: 'features',
    eyebrow: 'EVERYTHING INSIDE',
    h2: 'Real estate software features for builders',
    sub: 'Real estate sales software in one app — leads, inventory, bookings, payments and paperwork — made for builders, developers and property sellers.',
    columns: [
      {
        category: 'Leads and site visits',
        icon: 'Bot',
        items: [
          {
            title: 'AI sales assistant',
            description: 'Answers projects and prices, asks the size and budget, suggests flats on sale once you switch on Find units on sale, and books the site visit.',
          },
          {
            title: 'Meta lead ads',
            description: 'Facebook and Instagram leads straight in, with the ad and campaign they came from. Which ads bring buyers: on Real Estate Growth.',
          },
          {
            title: 'Site visits',
            description: 'A site-visit calendar with reminders, and booking pages.',
          },
          {
            title: 'Pipeline',
            description: 'Every buyer from enquiry to registration, with follow-ups and handovers.',
          },
        ],
      },
      {
        category: 'Inventory',
        icon: 'Building2',
        items: [
          {
            title: 'Projects and flats',
            description: 'Each project and its flats, villas or plots, with your own fields — up to 200 added in one go.',
          },
          {
            title: 'Flats board',
            description: 'Available, held, booked, sold — in colour, tower by tower.',
          },
          {
            title: 'Holds',
            description: 'A flat held for one buyer until the day you choose, then back on sale.',
          },
          {
            title: 'Buyer wishes',
            description: 'What each buyer wants, and whom to call when a flat like it frees up.',
          },
        ],
      },
      {
        category: 'Bookings and payments',
        icon: 'CreditCard',
        items: [
          {
            title: 'Booking amount',
            description: 'A Razorpay link that books the flat when it is paid in full, if the flat is still free or held for that buyer.',
          },
          {
            title: 'Payment plans',
            description: 'The rest of the price in parts, each reminded with a link.',
          },
          {
            title: 'Cost sheets',
            description: 'A flat priced line by line with your logo and details, sent on WhatsApp; on your own letterhead with Real Estate Growth.',
          },
          {
            title: 'Demand letters',
            description: 'On Real Estate Growth: a construction stage done, every buyer in its tower sent their part and its GST.',
          },
        ],
      },
      {
        category: 'Partners and team',
        icon: 'Users',
        items: [
          {
            title: 'Channel partners',
            description: "Who brought whom, each broker's RERA number, and their commission worked out.",
          },
          {
            title: 'Marketing',
            description: 'WhatsApp broadcasts and Instagram comment and DM automation; email campaigns on Real Estate Growth.',
          },
          {
            title: 'Studio',
            description: 'On Real Estate Growth: a marketing agent that reads your Meta ads and drafts new ones for your approval.',
          },
          {
            title: 'Your team',
            description: 'Sales executive, manager and accounts roles, and the Android app; team reports on Real Estate Growth.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    h2: 'From enquiry to site visit,\nbooking and registration',
    rows: [
      {
        id: 'inventory-row',
        eyebrow: 'INVENTORY',
        h3: 'Every flat and plot on one board',
        text: 'Available, held, booked, sold — in colour, project by project. A flat held for one buyer stays theirs until the day you choose, then goes back on sale by itself, and the buyers who wanted one like it are right there to call. Flats, villas or plots: add a whole tower, or up to 200 plots, in one go.',
        bullets: [
          'One flat, one holder — no two salespeople promise the same flat',
          'With Find units on sale switched on, the AI suggests only the flats on sale that fit',
          'Flats on sale and held, on the dashboard every morning',
        ],
        type: 'flatsBoard',
        flatsBoardData: {
          title: 'Green Meadows · Tower B',
          subtitle: '24 flats · 2 and 3 BHK — 8 on sale',
          floors: [
            {
              floorNumber: 6,
              flats: [
                { number: '601', status: 'available' },
                { number: '602', status: 'booked' },
                { number: '603', status: 'available' },
                { number: '604', status: 'sold' },
              ],
            },
            {
              floorNumber: 5,
              flats: [
                { number: '501', status: 'sold' },
                { number: '502', status: 'available' },
                { number: '503', status: 'booked' },
                { number: '504', status: 'available' },
              ],
            },
            {
              floorNumber: 4,
              flats: [
                { number: '401', status: 'booked' },
                { number: '402', status: 'sold' },
                { number: '403', status: 'available' },
                { number: '404', status: 'sold' },
              ],
            },
            {
              floorNumber: 3,
              flats: [
                { number: '301', status: 'available' },
                { number: '302', status: 'sold' },
                { number: '303', status: 'sold' },
                { number: '304', status: 'booked' },
              ],
            },
            {
              floorNumber: 2,
              flats: [
                { number: '201', status: 'sold' },
                { number: '202', status: 'available' },
                { number: '203', status: 'booked' },
                { number: '204', status: 'held', isHighlighted: true }, // 204 Held for Kavitha R
              ],
            },
            {
              floorNumber: 1,
              flats: [
                { number: '101', status: 'available' },
                { number: '102', status: 'sold' },
                { number: '103', status: 'sold' },
                { number: '104', status: 'sold' },
              ],
            },
          ],
          heldDetail: {
            unit: 'B-204 · 2 BHK · 1,180 sq ft · ₹79L',
            note: 'Held for Kavitha R until Sat · then back on sale',
          },
        },
      },
      {
        id: 'site-visits-row',
        eyebrow: 'SITE VISITS',
        h3: 'AI books site visits on WhatsApp while the buyer is keen',
        text: 'On WhatsApp, the AI asks the size, the budget and the area, suggests the flats on sale that fit once you switch on Find units on sale, and books the visit in your site-visit calendar. Your salesperson gets the buyer with a brief of the whole chat.',
        bullets: [
          'A reminder to the buyer before every visit',
          'Leads from Facebook and Instagram ads arrive by themselves',
          'A discount? The AI asks you on WhatsApp first',
        ],
        type: 'handoverBrief',
        handoverData: {
          buyerName: 'Kavitha R',
          meta: 'Handed to Ravi · Sales',
          tag: 'Hot',
          fields: [
            { label: 'Wants', value: 'Ready-to-move 2BHK in Anna Nagar, under ₹80L' },
            { label: 'Done', value: 'Shared B-204 and C-108; site visit Sat, 11 am' },
            { label: 'Pending', value: 'Asked about home-loan help' },
            { label: 'Told her', value: '₹50,000 off B-204, approved by you' },
            { label: 'Next', value: 'Call before Saturday to confirm the visit' },
          ],
        },
      },
      {
        id: 'bookings-payments-row',
        eyebrow: 'BOOKING AND PAYMENTS',
        h3: 'Booking amount and payment plans by Razorpay link',
        text: 'Send the booking amount as a Razorpay link on WhatsApp. Paid in full, the flat is booked for that buyer — no one marks it by hand — as long as it is still free or held for them; if someone else has it, your team is told. The rest of the price follows in parts, with reminders and a link in each.',
        bullets: [
          'Payments at the office recorded too',
          'What each buyer has paid and owes, on their page',
          'Each broker\'s commission worked out when the flat is booked or sold',
        ],
        type: 'bookingPaymentPlan',
        bookingData: {
          buyer: 'Kavitha R · WhatsApp',
          teamSender: 'Ravi · your team',
          message: 'Booking amount for B-204, Green Meadows:',
          cardTitle: 'Booking amount · B-204',
          amount: '₹2,00,000',
          buttonLabel: 'Pay ₹2,00,000',
          gateways: 'UPI · cards · netbanking, by Razorpay',
          statusPill: 'Paid · B-204 booked for Kavitha R',
          planTitle: 'Payment plan · B-204 — ₹79L in parts',
          steps: [
            { step: '1.', name: 'Booking · ₹2,00,000', status: 'Paid today · UPI', isDone: true },
            { step: '2.', name: 'On agreement · 20%', status: 'Due 15 Nov · reminded with a link', isDone: false },
          ],
        },
      },
      {
        id: 'paperwork-row',
        eyebrow: 'PAPERWORK',
        h3: 'Flat cost sheets and construction-stage demand letters',
        text: 'A flat\'s price line by line — base, floor rise, parking, GST, stamp duty — with your logo and details, sent to the buyer on WhatsApp, on both plans. With Real Estate Growth, the sheet can go on your own letterhead, and when a construction stage is done, every buyer in its tower is sent a demand letter for their part and its GST.',
        bullets: [
          'Each sheet keeps the price it was given; a new price is a new sheet',
          'Demand letters followed up by the payment reminders, on Real Estate Growth',
          'Sales executive, sales manager and accounts roles',
        ],
        type: 'costSheet',
        costSheetData: {
          docTitle: 'COST SHEET',
          property: 'Green Meadows · B-204 · 1,180 sq ft',
          badge: 'Sent on WhatsApp',
          buyer: 'For Kavitha R · valid till 31 Oct 2026',
          items: [
            { label: 'Base price · ₹6,440 / sq ft', amount: '₹75,99,200' },
            { label: 'Floor rise · 2nd floor', amount: '₹47,200' },
            { label: 'Covered car parking', amount: '₹2,50,000' },
            { label: 'GST 5%', amount: '₹3,94,820' },
            { label: 'Stamp duty and registration', amount: '₹5,52,700' },
          ],
          totalLabel: 'Total',
          totalAmount: '₹88,43,920',
        },
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'Four numbers every morning',
    sub: 'The dashboard opens on what a builder checks first, and each number opens its list.',
    stats: [
      {
        label: 'New enquiries this week',
        value: '64',
        sub: 'last 7 days',
        icon: 'Bot',
      },
      {
        label: 'Site visits this week',
        value: '18',
        sub: 'today and the next 6 days',
        icon: 'Calendar',
      },
      {
        label: 'Flats booked this month',
        value: '6',
        sub: '2 sold this month',
        icon: 'CheckCircle2',
      },
      {
        label: 'Flats on sale',
        value: '38',
        sub: '5 held for buyers',
        icon: 'Building2',
      },
    ],
  },

  // 6. Speaks
  speaksSection: {
    eyebrow: 'MADE FOR REAL ESTATE',
    h2: 'It speaks the way a sales office does',
    comparisonHeader: {
      left: 'TODAY',
      right: 'WITH ISUITE AI – REAL ESTATE',
    },
    rows: [
      {
        today: 'Leads from ads wait until the morning',
        withProduct: 'Projects, prices and sizes answered in seconds',
      },
      {
        today: 'Two salespeople promise the same flat',
        withProduct: 'A flat held for one buyer, until the day you choose',
      },
      {
        today: 'The booking amount is chased on calls',
        withProduct: 'A payment link that books the flat when it is paid, if it is still free for that buyer',
      },
      {
        today: 'Broker commissions live in a spreadsheet',
        withProduct: 'Who brought whom, and what each broker is owed',
      },
    ],
    chips: [
      "Enquiries, buyers, site visits and properties — a builder's words on every screen",
      'Sales executive, sales manager and accounts roles',
      'Tamil and Tanglish',
      'The whole app on Android',
      'Payments into your own Razorpay',
    ],
  },

  // 7. Safety
  safetySection: {
    h2: 'Careful with buyers',
    cards: [
      {
        title: 'Where it fits',
        icon: 'Layers',
        text: 'Not a construction ERP. iSuite AI – Real Estate keeps enquiries, site visits, flats, bookings, payment plans, brokers and the conversations with buyers; construction, site purchases and stock stay where you keep them, and so can your books.',
      },
      {
        title: 'What the AI is set never to do',
        icon: 'Shield',
        rules: [
          'Promise returns, price rises, rental income or loan approval',
          'Hold a flat or a price by itself — your sales team does that',
          'Quote a price that is not on your list, or offer a discount',
          "Share another buyer's details, or a broker's commission",
        ],
      },
    ],
  },

  // 8. Pricing
  pricingSection: {
    id: 'pricing',
    anchorPlans: 'plans',
    eyebrow: 'PLANS FOR BUILDERS',
    h2: 'Real estate software price in India',
    intro: 'Real Estate Basic gives a small sales office 3 users for ₹19,999 a year + GST; Real Estate Growth gives a sales team 8 users, demand letters and team reports for ₹34,999 a year + GST. Either plan starts with the builder setup already in place: the sales pipeline from enquiry to registration, buyer fields, project and flat fields, a site-visit calendar, WhatsApp template drafts, automations for visits, bookings and payments, and the roles. You add your projects, flats and prices.',
    plans: [
      {
        name: 'Real Estate Basic',
        badge: 'STARTER',
        price: '₹19,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For builders with one or two projects: enquiries from Meta ads, every flat\'s status on one board, site visits, an AI that answers buyers on WhatsApp, cost sheets, a booking amount paid online that books the flat if it is still free for that buyer, payment plans with reminders, and channel partner commissions.',
        buyUrl: 'https://app.isuite.ai/buy?package=8eb84492-d2f5-4f47-a340-bef49fada81b&cycle=yearly&industry=real-estate',
        limits: '3 users · 1,000 emails a month · ₹750 AI credits a month',
        features: [
          { title: 'Unified inbox', description: 'WhatsApp, Instagram, Messenger and web chat in one inbox for the whole team' },
          { title: 'Enquiries', description: 'Every enquiry with their chats, notes and history, in one list' },
          { title: 'AI agent', description: 'AI replies, handoffs and ad briefs' },
          { title: 'Manager over WhatsApp', description: "Approve the AI's discounts and exceptions, check the numbers and give it instructions from your own WhatsApp" },
          { title: 'Sales pipelines', description: 'Deals, pipelines and stages' },
          { title: 'Buyer management', description: 'An enquiry who buys becomes a buyer in one click, keeping their chats and history; with tags, groups, custom fields, import and merge' },
          { title: 'Buyer files', description: "Keep documents, photos and voice notes on each enquiry's and buyer's profile, and send them in the chat" },
          { title: 'Follow-ups', description: 'Follow-up tasks, and AI follow-ups with the AI agent' },
          { title: 'Razorpay payment gateway', description: 'Connect your own Razorpay and collect online: payment links in chat, online checkout, UPI, cards, netbanking' },
          { title: 'Payments in instalments', description: 'A payment split into instalments, reminded on WhatsApp before and after each falls due, paid at the desk — or online by link with the Razorpay payment gateway.' },
          { title: 'WhatsApp broadcasts', description: 'Template messages to your buyers, skipping anyone who opted out' },
          { title: 'Meta lead ads', description: 'Facebook and Instagram enquiry forms straight into your enquiries' },
          { title: 'Forms', description: 'Web forms and their submissions' },
          { title: 'Automations', description: 'Flows and triggers' },
          { title: 'Instagram comment & DM automation', description: 'Reply to comments on your posts, DM the people who comment, and answer Instagram DMs automatically' },
          { title: 'Site visits', description: 'Calendars and site visit pages' },
          { title: 'Properties', description: 'Your own kind of property, with the fields you choose — and who is in each.' },
          { title: 'Units & channel partners', description: 'Every flat or plot on one board — available, held, booked, sold — what each buyer is looking for, and your channel partners with their commissions.' },
          { title: 'Cost sheets', description: "A flat's price line by line — base, floor rise, parking, GST, stamp duty — with your logo, or on your own letterhead with Custom quotation design, sent to the buyer on WhatsApp." },
          { title: 'Calls (iSuite Phone)', description: 'Call enquiries from your own SIM, logged on the buyer' },
          { title: 'Call recordings', description: 'Recordings of those calls, saved to the buyer' },
          { title: 'WhatsApp calls', description: 'Buyers call your WhatsApp number and it rings on the web and in the app; call them back on WhatsApp' },
        ],
      },
      {
        name: 'Real Estate Growth',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹34,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For builders with a sales team: everything in Real Estate Basic, plus demand letters by construction stage, cost sheets and letters on your own letterhead, quotations and GST invoices, expenses and GST books, email campaigns, team reports, the ads report and Studio for marketing posts.',
        buyUrl: 'https://app.isuite.ai/buy?package=2f09568a-07b1-4937-9509-9a583ffdb3fd&cycle=yearly&industry=real-estate',
        limits: '8 users · 4,000 emails a month · ₹1,500 AI credits a month',
        leadFeature: 'Everything in Real Estate Basic, plus:',
        features: [
          { title: 'Studio', description: 'The marketing agent' },
          { title: 'Quotations', description: 'PDF quotations, sent in the chat and accepted in a tap' },
          { title: 'GST invoices', description: 'Invoices with GST, and the payments recorded against them' },
          { title: 'Custom quotation design', description: 'Your own letterhead PDF under your quotations and invoices; the built-in designs come with every package' },
          { title: 'Purchases & books', description: "Expenses, suppliers' bills, payments made and the GST paid on them — the money-out side of Accounts" },
          { title: 'Email campaigns', description: 'Newsletters and offers by email, skipping anyone who unsubscribed' },
          { title: 'Ads report', description: 'Which ads bring enquiries, paying buyers and revenue' },
          { title: 'Demand letters', description: 'A construction stage done, every buyer in its tower sent their part and its GST — a letter on your letterhead, on WhatsApp, followed up by the payment reminders.' },
          { title: 'Team reports', description: 'AI agent and handoff reports' },
          { title: 'API access', description: 'API keys and outgoing webhooks' },
        ],
      },
    ],
    footnotes: [
      'Prices in rupees, plus 18% GST. On a free trial you approve auto-debit at the start, and the first payment comes only when the trial ends.',
      {
        prefix: 'Not sure which package fits? ',
        linkText: 'Book a free 45-minute demo.',
        linkUrl: 'https://wa.me/918220947112?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20iSuite%20AI.',
      },
      {
        text: 'Meta decides approval for the WhatsApp Business Platform; it usually takes 1–2 weeks, and each WhatsApp template is approved by Meta too. WhatsApp message charges are billed by Meta, separately from iSuite AI. Online payments go through your own Razorpay account. ',
        linkText: 'Compare with every plan',
        linkUrl: '/pricing/#realestate',
      },
    ],
  },

  // 9. FAQ
  faqSection: {
    id: 'faq',
    eyebrow: 'FAQ',
    h2: 'Questions builders ask',
    faqs: [
      {
        id: 'faq-1',
        question: 'What is iSuite AI – Real Estate?',
        answer: 'iSuite AI – Real Estate is real estate software for builders, developers and plot promoters in India. It keeps enquiries from Meta ads and WhatsApp, site visits, every flat on a live board, booking amounts, payment plans, cost sheets and broker commissions in one app, with an AI that answers buyers. Real Estate Growth adds demand letters.',
      },
      {
        id: 'faq-2',
        question: 'How much does iSuite AI – Real Estate cost?',
        answer: 'Real Estate Basic is ₹19,999 a year + GST, with 3 users. Real Estate Growth is ₹34,999 a year + GST, with 8 users, demand letters, GST invoices, team reports and the ads report. Both include free AI credits every month and start with a 14-day free trial. Meta bills WhatsApp message charges separately.',
      },
      {
        id: 'faq-3',
        question: 'Is there a free trial?',
        answer: 'Yes. Both real estate plans start with a 14-day free trial, with the builder setup in place. You approve auto-debit with Razorpay at the start, and the first payment is taken only when the trial ends. Cancel before then and you pay nothing. There is no free plan after the trial.',
      },
      {
        id: 'faq-4',
        question: 'Can two salespeople hold or sell the same flat?',
        answer: 'No. In iSuite AI – Real Estate a flat or plot can be held for only one buyer at a time, until the day you choose. When the hold ends, it goes back on sale by itself, and the buyers who asked for a flat like it are listed for your team to call.',
      },
      {
        id: 'faq-5',
        question: 'How does the booking amount book the flat?',
        answer: 'Your team sends the booking amount as a Razorpay link on WhatsApp. When the buyer pays it in full, and the flat is still free or held for that buyer, it is marked booked by itself, with no one updating the board. The rest of the price follows as a payment plan, each part reminded with a link.',
      },
      {
        id: 'faq-6',
        question: 'Can the AI book site visits on WhatsApp?',
        answer: 'Yes. The AI asks the buyer\'s size, budget and area, suggests flats on sale that fit once you switch on Find units on sale, and books a slot in your site-visit calendar. The buyer gets a reminder before the visit, and your salesperson gets a short brief of the whole chat. A discount comes to you on WhatsApp first.',
      },
      {
        id: 'faq-7',
        question: 'What is a cost sheet for a flat?',
        answer: 'A cost sheet lists a flat\'s price line by line: base price per sq ft, floor rise, car parking, amenities, deposits, corpus fund, GST, stamp duty and registration. In iSuite AI – Real Estate you set the lines once per project; each flat\'s sheet is worked out from its area and floor and sent as a PDF on WhatsApp.',
      },
      {
        id: 'faq-8',
        question: 'What is a builder\'s demand letter?',
        answer: 'A builder\'s demand letter asks the buyer of an under-construction flat to pay the next part when a stage, such as a slab, is done. It shows the stage, amount, GST and due date; banks ask for it to release a loan part. On Real Estate Growth, one click sends each buyer in a tower their letter.',
      },
      {
        id: 'faq-9',
        question: 'Can the AI answer buyers in Tamil?',
        answer: 'Yes. The AI replies in Tamil, Tanglish or English, and you can set it to match the buyer\'s language or always use one. It answers from the projects, prices and details you add, books site visits and, once you switch on Find units on sale, suggests flats on sale that fit the budget. The app\'s screens are in English.',
      },
      {
        id: 'faq-10',
        question: 'Does it get leads from Facebook ads and property portals?',
        answer: 'Facebook and Instagram ads, yes; property portals, not yet. Lead ads come in by themselves, with the ad and campaign each lead came from, and every web form sent becomes an enquiry too. There is no ready connector for 99acres, MagicBricks or Housing.com; on Real Estate Growth, your developer can send their leads in through the API.',
      },
      {
        id: 'faq-11',
        question: 'How are channel partner commissions tracked?',
        answer: 'Add each broker with their firm, RERA number and commission percentage, and note which broker brought each buyer. When the flat is booked or sold, as you choose, the commission is worked out and shows as due until accounts marks it paid. The AI is set never to share commission figures or other buyers\' details with a broker.',
      },
      {
        id: 'faq-12',
        question: 'Can plotted layout promoters use it?',
        answer: 'Yes. A unit can be a flat, a plot or a villa. Add a layout\'s plots in one go, such as Plot 01 to Plot 120, with your own fields like size and facing, and see each as available, held, booked or sold. With Find units on sale switched on, the AI suggests only plots on sale that fit.',
      },
      {
        id: 'faq-13',
        question: 'Does it work on mobile for the sales team?',
        answer: 'Yes, on Android. Your sales team can use the whole app in the iSuite AI Android app, with alerts for new chats. They can call buyers from their own SIM. With the phone\'s call recording on, recordings are saved to the buyer, and with transcripts switched on, the AI writes one, so a manager can check what was promised.',
      },
      {
        id: 'faq-14',
        question: 'Will the AI promise prices, discounts or returns?',
        answer: 'No. The AI\'s settings come filled in with builder rules, which you check, change and save: quote only the prices on your list, never offer a discount by itself, and never promise returns, price rises, rental income or loan approval. It cannot hold or book a flat. Legal, registration and refund questions, and complaints, go to a person.',
      },
      {
        id: 'faq-15',
        question: 'Does it replace our ERP or accounting software?',
        answer: 'Not your ERP. iSuite AI – Real Estate runs the sales office: enquiries, site visits, flats, bookings, payment plans, cost sheets and brokers. Construction, site purchases and stock stay in your ERP. Your accounting software can stay too, though Real Estate Growth adds GST invoices and purchases and books if you want them here. It is not for managing rentals.',
      },
      {
        id: 'faq-16',
        question: 'How soon can we start?',
        answer: 'The builder setup is ready the day you buy: the sales pipeline, buyer fields, project and flat fields, a site-visit calendar, WhatsApp template drafts, automations for visits, bookings and payments, and roles. You add your projects, flats and prices. Meta approves your WhatsApp number and templates, usually in 1 to 2 weeks, and we help you through it.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'iSuite AI – Real Estate',
    h2: 'Answer buyers tonight. Book the flat tomorrow.',
    sub: 'Start a 14-day free trial on the plan that fits your projects, or see it first on a free 45-minute demo.',
    buttonPrimary: { text: 'Start free trial', href: '#plans' },
    buttonSecondary: {
      text: 'Book a demo',
      href: 'https://wa.me/918220947112?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20iSuite%20AI.',
    },
    callText: 'Or call +91 82209 47112',
    callHref: 'tel:+918220947112',
  },

  // 11. The iSuite AI Family
  familySection: {
    eyebrow: 'THE ISUITE AI FAMILY',
    h2: 'One platform, made for each trade',
    sub: 'One platform underneath — the AI, payments, marketing and calls — and each product made whole for its own trade.',
    moreLink: {
      text: 'More for real estate: Builder demand letter format',
      href: '/templates/builder-demand-letter-format/',
    },
    comingSoonLink: '/#soon',
  },

  // JSON-LD Schemas
  jsonLd: {
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'iSuite AI – Real Estate',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android',
      offers: [
        {
          '@type': 'Offer',
          name: 'Real Estate Basic',
          price: '19999',
          priceCurrency: 'INR',
          billingDuration: 'P1Y',
        },
        {
          '@type': 'Offer',
          name: 'Real Estate Growth',
          price: '34999',
          priceCurrency: 'INR',
          billingDuration: 'P1Y',
        },
      ],
    },
  },
};


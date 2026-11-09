// Product Data: iSuite AI – Gym & Fitness Studio
export const gymData = {
  id: 'gym',
  slug: 'gyms',
  title: 'Gym Management Software | iSuite AI – Gym & Fitness Studio',
  metaDescription: 'Gym management software for Indian gyms and studios: QR check-ins on WhatsApp, renewal links, freezes and an AI that books trials, from ₹7,999 a year + GST.',
  canonicalUrl: 'https://isuite.ai/gyms/',
  themeColor: '#001845',
  locale: 'en_IN',
  ogImage: '/assets/img/og-gym.jpg',
  accentColor: '#f0503a',
  accentBright: '#ff9f8a',

  // 1. Hero
  hero: {
    badge: 'iSuite AI – Gym & Fitness Studio',
    h1Main: 'Gym management software for Indian gyms,',
    h1Accent: 'with an AI front desk',
    subtitle: 'For gyms and yoga, Zumba and CrossFit studios: members, QR check-ins, renewals and freezes in one app, from ₹7,999 a year + GST. An AI answers plans and prices and books free trials on WhatsApp, Instagram and web chat at any hour, and members renew by link.',
    buttons: [
      { text: 'Start free trial', href: '#plans', primary: true },
      { text: 'Book a demo', href: "https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20iSuite%20AI.", primary: false, isExternal: true },
    ],
    trustChips: [
      'Plans from ₹7,999 a year + GST',
      '14-day free trial',
      'Set up with you',
      'AI replies in Tamil, Tanglish, Hindi and English',
    ],
    chatHeader: {
      name: 'Suresh K',
      subtitle: 'WhatsApp · Fit Zone',
      badge: 'AI replying',
      initials: 'SK',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, gym membership fees enna? Morning timing iruka?',
        time: '10:05 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Hi Suresh! Fit Zone morning 5:30 am to 10:00 pm open. Monthly ₹1,500, Quarterly ₹4,000, Yearly ₹12,000. Tomorrow morning free trial session book pannatuma?',
        time: '10:05 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: 'Yes please, 6:30 am ok',
        time: '10:06 pm',
      },
      {
        id: 4,
        type: 'confirmation',
        statusPill: 'Free trial booked · Tue, 6:30 am',
        title: '✓ Free Trial Booked',
        details: 'Tue 6:30 am · Trainer Vijay · Fit Zone. Directions & locker pass sent on WhatsApp!',
        time: '10:06 pm',
      },
    ],
    floatingCards: [
      {
        title: 'New enquiry',
        subtitle: 'Suresh · weight loss · mornings',
      },
      {
        title: 'Free trial booked',
        subtitle: 'Tue 6:30 am · trainer Vijay',
      },
      {
        title: 'Memberships board',
        subtitle: 'Enquiry → Trial',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'AT A GLANCE',
    h2: 'iSuite AI – Gym & Fitness Studio at a glance',
    intro: 'iSuite AI – Gym & Fitness Studio is gym management software for Indian gyms and yoga, Zumba and CrossFit studios. Members, WhatsApp QR check-ins, renewals and freezes sit in one app, with an AI front desk that books free trials. Plans start from ₹7,999 a year + GST, with a 14-day free trial. No machine or member app is needed.',
    facts: [
      {
        label: 'WHAT IT IS',
        desc: 'Gym management software with AI built in: enquiries, members, check-ins, memberships, payments and marketing in one app; PT session packs, body progress and GST invoices on Gym Growth',
      },
      {
        label: 'MADE FOR',
        desc: 'Gyms and fitness clubs, yoga and CrossFit studios, and Zumba and dance fitness classes in India',
      },
      {
        label: 'PRICE',
        desc: 'Gym Basic: ₹7,999 a year + GST\nGym Growth: ₹11,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '14 days on either plan. You approve Razorpay auto-debit at the start, and the first payment comes only when the trial ends',
      },
      {
        label: 'AI',
        desc: 'The AI agent is on both plans, with AI credits every month. It answers on WhatsApp, Instagram, Messenger and web chat, in the customer’s own language — Tamil, Tanglish, Hindi, English and more',
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
    h2: 'Gym software features: everything your gym runs on',
    sub: 'One app for the front desk, members, payments and trainers — made for gyms, fitness clubs, yoga and CrossFit studios, and Zumba and dance fitness classes.',
    columns: [
      {
        category: 'Front desk',
        icon: 'Bot',
        items: [
          {
            title: 'AI front desk',
            description: 'Answers plans, prices and timings on WhatsApp, Instagram, Messenger and web chat, asks the goal, and books a free trial with a trainer.',
          },
          {
            title: 'QR check-in on WhatsApp',
            description: 'Members scan your poster to check in; their plan status and renewal date appear on screen, with no biometric machine needed.',
          },
          {
            title: 'Desk register',
            description: 'Check members in by name, phone or membership ID, and see the day’s visits count up in real time.',
          },
        ],
      },
      {
        category: 'Members and plans',
        icon: 'Users',
        items: [
          {
            title: 'Member profiles',
            description: 'Every member with their join date, active plan, attendance history, medical notes, emergency contacts and payments.',
          },
          {
            title: 'Memberships & freezes',
            description: 'Monthly, quarterly and annual plans; pause a membership for travel or illness and the expiry moves forward automatically.',
          },
          {
            title: 'PT packs on Growth',
            description: 'On Gym Growth: sell packs of personal training sessions, track sessions completed, and notify when renewals are due.',
          },
        ],
      },
      {
        category: 'Payments and accounts',
        icon: 'CreditCard',
        items: [
          {
            title: 'UPI & payment links',
            description: 'Razorpay payment links sent directly over WhatsApp, letting members renew from home with instant confirmation.',
          },
          {
            title: 'GST invoices on Growth',
            description: 'On Gym Growth: automated GST billing with HSN/SAC codes, monthly revenue summaries, and expense tracking.',
          },
          {
            title: 'Renewal alerts',
            description: 'Automated WhatsApp reminders sent 7 days, 3 days and on the day of expiry with direct one-tap renewal links.',
          },
        ],
      },
      {
        category: 'Marketing and team',
        icon: 'Layers',
        items: [
          {
            title: 'Meta lead ads on Growth',
            description: 'Connect Facebook and Instagram ads directly — new leads get an instant WhatsApp reply from the AI in under 30 seconds.',
          },
          {
            title: 'Staff roles',
            description: 'Granular permissions for front-desk staff, trainers and gym managers, keeping member financial data secure.',
          },
          {
            title: 'Android app',
            description: 'Run the entire gym from any Android phone or tablet with offline-ready check-in and push notifications.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    h2: 'From the first enquiry\nto the next renewal',
    rows: [
      {
        id: 'checkin',
        eyebrow: 'CHECK-INS',
        h3: 'QR check-in on WhatsApp, no biometric needed',
        text: 'Members scan the poster at your desk and send the pre-filled message it opens — they are instantly checked in, and told when their plan renews. The desk can tap them in too. A lapsed member is let in with a kind warning and sent the link to renew.',
        bullets: [
          'Print the poster from the app; change its code any time',
          'Members in today, and visits in the last 7 days, on the dashboard',
          'A check-in ends a member’s freeze that day automatically',
        ],
        type: 'gymCheckin',
      },
      {
        id: 'plans-freezes',
        eyebrow: 'MEMBERSHIPS',
        h3: 'Plans, renewals and freezes without spreadsheets',
        text: 'Set up your admission fees, monthly, quarterly and annual plans. When a member pays, their expiry is calculated; when they travel, freeze their membership and the date pushes back cleanly without mental math.',
        bullets: [
          'Renewal links sent automatically on WhatsApp with Razorpay',
          'Freezes with max allowed days per membership tier',
          'Expired members highlighted on the morning dashboard',
        ],
        type: 'gymMembership',
      },
      {
        id: 'pt-sessions',
        eyebrow: 'TRAINERS & SESSIONS',
        h3: 'Free trials and personal training on Gym Growth',
        text: 'The AI schedules free trials directly into your trainer diaries. On Gym Growth, sell personal training packs (10, 20 or 30 sessions); trainers mark attendance with one tap, and members see their remaining sessions.',
        bullets: [
          'Trial calendar syncs with trainer availability',
          'PT session count updates live with WhatsApp notifications',
          'Body progress photos and weight logs on member cards',
        ],
        type: 'gymPt',
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'Your gym dashboard: four numbers every morning',
    sub: 'The dashboard opens on what a gym owner checks first, and each number opens its list.',
    stats: [
      { icon: 'Users', label: 'Members in today', value: '46', sub: '212 visits in 7 days' },
      { icon: 'CreditCard', label: 'Renewals due this week', value: '9', sub: '3 already due' },
      { icon: 'UserX', label: 'Members not seen', value: '14', sub: 'in 7 days' },
      { icon: 'UserPlus', label: 'New enquiries this week', value: '17', sub: 'from all channels' },
    ],
  },

  // 6. Speaks Section
  speaksSection: {
    eyebrow: 'MADE FOR GYMS',
    h2: 'It speaks the way a front desk does',
    comparisonHeader: {
      left: 'TODAY',
      right: 'WITH ISUITE AI – GYM & FITNESS STUDIO',
    },
    rows: [
      {
        today: 'Price enquiries wait until someone is free',
        withProduct: 'Plans, prices and a free trial booked in seconds',
      },
      {
        today: 'An expired member trains for weeks unnoticed',
        withProduct: 'The membership shows at the door, with a renew link',
      },
      {
        today: 'Renewals chased on calls, at month end',
        withProduct: 'Reminders and a payment link that renews it when paid',
      },
      {
        today: 'PT sessions counted in a notebook',
        withProduct: 'On Gym Growth, one tap per session, and the packs running low on a list',
      },
    ],
    chips: [
      'Enquiries, members, sessions and plans — your words on every screen',
      'Front desk, trainer and gym manager roles',
      'AI replies in Tamil, Tanglish, Hindi and English',
      'The whole app on Android',
      'Payments into your own Razorpay',
    ],
  },

  // 7. Safety Section
  safetySection: {
    h2: 'Careful with members',
    cards: [
      {
        title: 'Where it fits',
        text: 'Not a biometric, turnstile or door-access system, and not a workout or diet app for members. iSuite AI – Gym & Fitness Studio keeps enquiries, members, check-ins, memberships, payments and the conversations with members; on Gym Growth, PT packs, body progress and Accounts for GST invoices and expenses too. Your door hardware stays where it is. It is not yet built for chains with many branches.',
      },
      {
        title: 'What the AI is told never to do',
        rules: [
          'Promise weight loss, body changes or results by a date',
          'Give medical, diet or injury advice',
          'Quote a price not on your plans, or offer a discount',
          'Share another member’s details or anyone’s measurements',
        ],
      },
    ],
  },

  // 8. Pricing Section
  pricingSection: {
    eyebrow: 'PLANS FOR GYMS AND STUDIOS',
    h2: 'Gym management software pricing',
    intro: 'Ready the day you buy: a gym plan starts with the gym setup already in place — the memberships pipeline from enquiry to joined, member fields, monthly to yearly plans with freezes, trial and PT calendars, the WhatsApp templates ready to send to Meta, and the roles. On Gym Growth, the PT packs come too, and the automations, which stay off until you turn them on. You set your prices and hours, and print the check-in poster.',
    plans: [
      {
        name: 'Gym Basic',
        badge: 'FOR A SINGLE GYM OR STUDIO',
        price: '₹7,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For a gym or studio getting started: members checking in at the desk or with a QR on WhatsApp, memberships that renew with reminders and freeze, payment links, trial bookings, broadcasts, and an AI front desk on WhatsApp.',
        limits: '3 users · 1,000 emails a month · ₹500 AI credits a month',
        leadFeature: 'Everything a gym needs to run smoothly on WhatsApp',
        features: [
          { title: 'Unified inbox', description: 'WhatsApp, Instagram, Messenger and web chat in one inbox for the whole team' },
          { title: 'Enquiries & members', description: 'Every enquiry with chats, notes and history; becomes a member in one click' },
          { title: 'AI front desk', description: 'Answers plans and hours and books free trials 24/7' },
          { title: 'WhatsApp QR check-in', description: 'Members scan poster to check in with instant validity confirmation' },
          { title: 'Memberships & freezes', description: 'Configurable durations with pause/freeze rules' },
          { title: 'Razorpay gateway', description: 'Connect your own Razorpay for instant UPI renewal links' },
          { title: 'Reminders & broadcasts', description: 'Automated expiry alerts and WhatsApp broadcast campaigns' },
          { title: 'Android app & staff roles', description: 'Front-desk, trainer and owner roles on Android' },
        ],
        buyUrl: 'https://app.isuite.ai/buy?industry=gyms&package=basic',
      },
      {
        name: 'Gym Growth',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹11,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For busy gyms and fitness studios that offer personal training, run marketing campaigns, and need GST invoices, expense tracking and deeper reports.',
        limits: 'Unlimited members · 5 users · 5,000 emails a month · ₹1,000 AI credits a month',
        leadFeature: 'Includes everything in Gym Basic, plus:',
        features: [
          { title: 'PT session packs', description: 'Sell packs of sessions, track attendance per trainer, and track pack renewals' },
          { title: 'Body progress tracking', description: 'Log weight, measurements and photos directly on member profiles' },
          { title: 'GST invoices & letterhead', description: 'Automated tax billing with your gym’s logo and letterhead' },
          { title: 'Meta lead ads integration', description: 'Leads from Facebook and Instagram flow directly into WhatsApp with instant AI response' },
          { title: 'Expense tracking & GSTR exports', description: 'Log rent, equipment maintenance and trainer payouts' },
          { title: 'Automations & Studio', description: 'Workflow automations and marketing content suggestions' },
          { title: 'Advanced team reports', description: 'Track trainer utilization, member retention and daily revenue' },
        ],
        buyUrl: 'https://app.isuite.ai/buy?industry=gyms&package=growth',
      },
    ],
    footnotes: [
      'Priced in Indian rupees by the year, plus 18% GST. Billed annually.',
      'WhatsApp messages are billed directly by Meta through your WhatsApp Business Account.',
      {
        prefix: 'Compare with all other products on our ',
        linkText: 'full pricing page',
        linkUrl: '/pricing/#gym',
        text: '.',
      },
    ],
  },

  // 9. FAQ Section
  faqSection: {
    eyebrow: 'FAQ',
    h2: 'Questions gyms ask',
    faqs: [
      {
        id: 'what-is',
        question: 'What is iSuite AI – Gym & Fitness Studio?',
        answer: 'iSuite AI – Gym & Fitness Studio is gym management software for Indian gyms and yoga, Zumba and CrossFit studios, made by MnT Future in Madurai. Enquiries, members, QR check-ins, memberships with freezes and online payments sit in one app, with an AI front desk that answers plans and books free trials. Gym Growth adds PT packs and body progress.',
      },
      {
        id: 'cost',
        question: 'How much does iSuite AI – Gym & Fitness Studio cost?',
        answer: 'Gym Basic costs ₹7,999 a year + GST, and Gym Growth ₹11,999 a year + GST. Growth adds PT session packs, body progress, GST invoices, automations, Meta lead ads and team reports. Both include monthly AI credits and a 14-day free trial.',
      },
      {
        id: 'biometric',
        question: 'Do I need a biometric machine or turnstile?',
        answer: 'No. iSuite AI uses WhatsApp QR check-in. You print the QR code poster generated by the app and paste it at your desk. Members scan it using their phone’s camera and tap send on WhatsApp. Their check-in is logged instantly and their membership status shows on screen. Your front desk can also tap check-in manually.',
      },
      {
        id: 'freezes',
        question: 'Can members freeze their memberships?',
        answer: 'Yes. You can freeze a membership for travel, exams or medical reasons. The system pushes their renewal date forward by the exact number of frozen days. When the member checks in again, their freeze ends automatically.',
      },
      {
        id: 'ai-languages',
        question: 'Which languages does the AI understand on WhatsApp?',
        answer: 'The AI speaks and understands Tamil, Tanglish, Hindi and English. It replies naturally to enquiries, shares your pricing plans, explains timings, and schedules free trials with trainers.',
      },
      {
        id: 'payments',
        question: 'How do members pay for renewals?',
        answer: 'You connect your own Razorpay account. Automated renewal links go out on WhatsApp 7 days and 3 days before expiry. Members click the link and pay via UPI, cards or net banking; payment goes straight into your bank account with zero platform commission.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'START YOUR FREE TRIAL',
    h2: 'Every member checked in. Every renewal reminded.',
    sub: 'Set up your gym on iSuite AI today with a 14-day free trial. We help you set up your plans, members and check-in poster 1-on-1 on WhatsApp.',
    buttonPrimary: {
      text: 'Start 14-Day Free Trial',
      href: '#plans',
    },
    buttonSecondary: {
      text: 'Book a Live Demo',
      href: "https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20iSuite%20AI%20Gym.",
    },
    callText: 'Or call +91 93486 33365 to talk with our team',
    callHref: 'tel:+919348633365',
  },

  // 11. Family Section
  familySection: {
    eyebrow: 'THE ISUITE AI FAMILY',
    h2: 'One platform, made for each trade',
    sub: 'Every product is built around the way its industry runs — with its own screens, tools and AI.',
    templateLink: '/templates/gym-fee-reminder-message/',
    templateText: 'Free gym fee reminder message templates for WhatsApp →',
    comingSoonLink: '/#soon',
  },
};


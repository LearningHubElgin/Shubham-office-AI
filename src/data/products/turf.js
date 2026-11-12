// Product Data: Karttik AI – Turf
export const turfData = {
  id: 'turf',
  slug: 'turf',
  title: 'Turf Booking & Management Software | Karttik AI – Turf',
  metaDescription: 'Turf booking software for box cricket, football and badminton courts: one court board, peak prices, online advance, AI on WhatsApp, from ₹6,999 a year + GST.',
  canonicalUrl: 'https://karttik.ai/turf/',
  themeColor: '#001845',
  locale: 'en_IN',
  ogImage: '/assets/img/og-turf.jpg',
  accentColor: '#65a30d',
  accentBright: '#bef264',

  // 1. Hero
  hero: {
    badge: 'Karttik AI – Turf',
    h1Main: 'Turf booking software',
    h1Accent: 'with an AI that books your slots',
    subtitle: 'Run your box cricket, football, badminton or pickleball turf on one app: a court board by the hour with the ground in halves, peak and weekend prices, cash and UPI at the desk, online advance, regular teams and an AI that books slots on WhatsApp at any hour.',
    buttons: [
      { text: 'Start free trial', href: '#plans', primary: true },
      { text: 'Book a demo', href: "https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20Karttik%20AI%20Turf.", primary: false, isExternal: true },
    ],
    trustChips: [
      'Plans from ₹6,999 a year + GST',
      '7-day free trial',
      'Set up with you',
      'Tamil, Tanglish and English',
    ],
    chatHeader: {
      name: 'Vignesh S',
      subtitle: 'WhatsApp · Green Field Turf',
      badge: 'AI replying',
      initials: 'VS',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, Saturday night 7 to 8 pm box cricket slot available-ah?',
        time: '6:18 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Hi Vignesh! Saturday 7:00 pm - 8:00 pm box cricket free. Weekend rate ₹1,300/hour. Advance ₹500 pay panni slot hold pannalama?',
        time: '6:18 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: 'Yes please hold it. Team name Thunder XI.',
        time: '6:19 pm',
      },
      {
        id: 4,
        type: 'confirmation',
        statusPill: 'Slot held · Sat 7 pm · ₹500 advance',
        title: '✓ Slot Held (Thunder XI)',
        details: 'Box Cricket · Sat 7 pm–8 pm · Advance ₹500 link sent. Balance ₹800 at desk.',
        time: '6:19 pm',
      },
    ],
    floatingCards: [
      {
        title: 'Slot held',
        subtitle: 'Sat 7 pm · ₹500 advance',
      },
      {
        title: 'Court board',
        subtitle: 'Full ground · Half A · Half B',
      },
      {
        title: 'Regular team',
        subtitle: 'Thunder XI · Sat 7 pm',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'AT A GLANCE',
    h2: 'Karttik AI – Turf at a glance',
    intro: 'Karttik AI – Turf is turf management and booking software for box cricket, football and badminton turfs. Every court’s day sits on one board past midnight, with peak rates, online advances straight into your own Razorpay, and an AI on WhatsApp that books free slots. Plans start from ₹6,999 a year + GST with a 7-day free trial. There is zero commission on your bookings.',
    facts: [
      {
        label: 'WHAT IT IS',
        desc: 'Turf booking software with AI on WhatsApp: one court board by the hour, split ground management, advance payments and regular team rosters.',
      },
      {
        label: 'MADE FOR',
        desc: 'Box cricket turfs, 5-a-side and 7-a-side football grounds, indoor badminton courts, and pickleball courts in India.',
      },
      {
        label: 'PRICE',
        desc: 'Turf: ₹6,999 a year + GST\nTurf with Academy: ₹12,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '7 days on either plan. Set up your courts, rates and hours, test with your team, and pay only when the trial ends.',
      },
      {
        label: 'ZERO COMMISSION',
        desc: 'All online advances go directly into your own Razorpay account. Karttik AI charges zero per-booking commission.',
      },
      {
        label: 'WORKS ON',
        desc: 'The web and the Android app for desk staff and managers.',
      },
    ],
  },

  // 3. Features
  featuresSection: {
    id: 'features',
    eyebrow: 'EVERYTHING INSIDE',
    h2: 'Turf management software: everything your turf runs on',
    sub: 'One app for the courts, the desk, the money and the regulars — made for box cricket, football, badminton and pickleball turfs.',
    columns: [
      {
        category: 'Courts & board',
        icon: 'Trophy',
        items: [
          {
            title: 'The court board',
            description: 'A column for each court and a row for each slot from early morning to past midnight.',
          },
          {
            title: 'Ground in halves',
            description: 'Booking the full ground blocks both halves automatically; booking one half blocks the full ground.',
          },
          {
            title: 'Custom slot durations',
            description: '1-hour slots for football/cricket, 30-minute slots for badminton, with consecutive booking support.',
          },
        ],
      },
      {
        category: 'Rates & advance',
        icon: 'CreditCard',
        items: [
          {
            title: 'Normal, peak & weekend rates',
            description: 'Set different hourly prices for weekday mornings, peak evening floodlight hours, and weekends.',
          },
          {
            title: 'Online advance via Razorpay',
            description: 'Collect non-refundable booking advances (e.g. ₹500) via instant UPI links before locking a slot.',
          },
          {
            title: 'Desk payments (Cash / UPI)',
            description: 'Record cash, UPI or card collected at the desk with clear records of balance owed.',
          },
        ],
      },
      {
        category: 'Teams and AI',
        icon: 'Bot',
        items: [
          {
            title: 'AI slot booking on WhatsApp',
            description: 'AI checks free courts, quotes exact rates, holds slots for 15 minutes, and sends payment links.',
          },
          {
            title: 'Weekly regular teams',
            description: 'Reserve prime recurring slots for office leagues and corporate clubs with automated weekly invoices.',
          },
          {
            title: 'No-show protection',
            description: 'Flag habitual no-show teams and enforce full online advance payment before confirmation.',
          },
        ],
      },
      {
        category: 'Academy & reports',
        icon: 'GraduationCap',
        items: [
          {
            title: 'Sports academy on Growth',
            description: 'On Turf with Academy: manage morning coaching batches, attendance, and monthly student fees.',
          },
          {
            title: 'Daily cash register',
            description: 'Reconcile cash collected at the desk against UPI payments and online advances in one click.',
          },
          {
            title: 'Floodlight & staff management',
            description: 'Separate desk logins for ground staff with restricted manager approval for manual discounts.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    h2: 'From the first message\nto the regular team',
    rows: [
      {
        id: 'court-board',
        eyebrow: 'THE COURT BOARD',
        h3: 'Turf slot booking on one board, with no double bookings',
        text: 'Bookings from phone calls, WhatsApp chats, the web booking page and the AI all map onto one unified court board. Tap a free slot to book it; tap an active game to move it along — Booked → Playing → Done.',
        bullets: [
          'A half’s booking shows the whole ground as taken, and vice versa',
          'Late-night 1:00 am games stay on that night’s board',
          'Clashes are prevented before they can happen',
        ],
        type: 'turfBoard',
      },
      {
        id: 'online-advance',
        eyebrow: 'ADVANCE PAYMENTS',
        h3: 'Collect advances online, balance at the desk',
        text: 'Stop losing money to teams that book peak evening slots and never show up. The AI holds slots temporarily and sends an instant Razorpay UPI link. Once paid, the slot is locked and balance due is highlighted on arrival.',
        bullets: [
          'Configurable advance amount per court and sport',
          'Direct deposit into your own bank account via Razorpay',
          'Receipts with court rules and directions sent on WhatsApp',
        ],
        type: 'turfAdvance',
      },
      {
        id: 'regular-teams',
        eyebrow: 'REGULAR TEAMS',
        h3: 'Manage weekly leagues and corporate teams effortlessly',
        text: 'Corporate teams and neighborhood clubs that play every week can be booked across 4, 8 or 12 weeks in one tap. The system tracks prepaid hour packs and sends automatic match reminders.',
        bullets: [
          'Pre-paid hour packs (e.g. 10 hours) that deduct time automatically',
          'Weekly match schedule and attendance roster on WhatsApp',
          'On Turf with Academy: manage youth coaching batches and monthly dues',
        ],
        type: 'turfLeague',
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'Four numbers every morning',
    sub: 'The dashboard shows what a turf owner checks first, and each card opens the screen behind it.',
    stats: [
      { icon: 'Trophy', label: 'Today’s games', value: '24', sub: '6 still to play' },
      { icon: 'CreditCard', label: 'To collect today', value: '₹4,500', sub: '5 games owe' },
      { icon: 'Users', label: 'Regular teams', value: '11', sub: '63 games booked ahead' },
      { icon: 'Clock', label: 'No-shows this week', value: '2', sub: 'Last 7 days' },
    ],
  },

  // 6. Speaks Section
  speaksSection: {
    eyebrow: 'MADE FOR TURFS',
    h2: 'It works the way a turf does',
    comparisonHeader: {
      left: 'TODAY',
      right: 'WITH KARTTIK AI – TURF',
    },
    rows: [
      {
        today: 'Bookings in WhatsApp and a notebook — two teams arrive Saturday at 7 pm',
        withProduct: 'Every court on one board; a clash is refused before it happens',
      },
      {
        today: 'A half booked while the full ground was promised to someone else',
        withProduct: 'The whole ground and its halves block each other automatically',
      },
      {
        today: 'Cash, UPI and dues kept in someone’s head',
        withProduct: 'Every payment recorded; what is owed shows on the board',
      },
      {
        today: 'Teams that book the best evening slot and never turn up',
        withProduct: 'An advance online — and full price required after repeated no-shows',
      },
    ],
    chips: [
      'Enquiries, customers and bookings — your words on every screen',
      'Desk and turf manager roles',
      'AI replies in Tamil, Tanglish or English',
      'The whole app on Android',
      'Payments into your own Razorpay',
    ],
  },

  // 7. Safety Section
  safetySection: {
    h2: 'Careful with players',
    cards: [
      {
        title: 'Where it fits',
        text: 'Karttik AI – Turf is built for box cricket grounds, football turfs, badminton halls and multi-sport complexes. It manages your court schedule, desk cash, online advances, regular teams, hour packs and customer records. Your existing physical floodlight controls stay as they are.',
      },
      {
        title: 'What the AI is told never to do',
        rules: [
          'Quote a price other than the court board’s defined rate',
          'Promise a slot that is already booked or on hold',
          'Offer unapproved discounts or promise advance refunds',
          'Disclose who else has booked or share other teams’ details',
        ],
      },
    ],
  },

  // 8. Pricing Section
  pricingSection: {
    eyebrow: 'PLANS FOR TURFS',
    h2: 'Turf software plans, ready the day you buy',
    intro: 'A turf plan starts with the setup already in place: a football ground whole and in halves, box cricket and badminton courts with sample rates you change, a 10-hour pack, the questions the AI asks, and desk and turf manager roles. You put in your rates and hours, and switch them online. Turf with Academy adds youth coaching batches and monthly memberships.',
    plans: [
      {
        name: 'Turf',
        badge: 'FOR SINGLE TURFS & BOXES',
        price: '₹6,999',
        pricePeriod: '/ year + GST',
        trialText: '7 days free',
        description: 'For a turf: the court board by the hour with the ground in halves, peak and weekend prices, cash and UPI at the desk, weekly regular teams, hour packs, online booking with an advance through your own Razorpay, an AI that books courts on WhatsApp, reminders and broadcasts.',
        limits: '1 user · 1,000 emails a month · ₹1,000 AI credits a year',
        leadFeature: 'Everything needed to run courts with zero double-bookings',
        features: [
          { title: 'The court board', description: 'Real-time schedule for full ground, halves, box cricket and courts' },
          { title: 'AI slot booking on WhatsApp', description: 'Answers availability, checks rates, holds slots and takes advances' },
          { title: 'Razorpay online advance', description: 'Collect advance payments directly into your bank account' },
          { title: 'Peak and weekend rates', description: 'Different pricing for night lights, weekends and special holidays' },
          { title: 'Regular teams & packs', description: 'Pre-paid hour packages and multi-week corporate reservations' },
          { title: 'Desk register on Android', description: 'Collect cash and UPI at the desk with clean daily balance reports' },
        ],
        buyUrl: 'https://app.karttik.ai/buy?industry=turf&package=basic',
      },
      {
        name: 'Turf with Academy',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹12,999',
        pricePeriod: '/ year + GST',
        trialText: '7 days free',
        description: 'For turfs and sports arenas that also run a cricket, football or badminton coaching academy with batches, student attendance and monthly fee collections.',
        limits: '2 users · 3,000 emails a month · ₹2,000 AI credits a year',
        leadFeature: 'Includes everything in Turf, plus sports academy tools:',
        features: [
          { title: 'Sports academy batches', description: 'Morning and evening coaching batches with coach assignments' },
          { title: 'Student attendance & notifications', description: 'Mark attendance with one tap; parents get instant WhatsApp arrival alerts' },
          { title: 'Monthly student fees', description: 'Automated monthly fee generation with Razorpay payment links' },
          { title: 'Additional staff login', description: 'Separate logins for academy coaches and front-desk operators' },
          { title: 'GST invoices & custom letterhead', description: 'Corporate booking receipts and tournament sponsorship proposals' },
          { title: 'Tournament scheduler', description: 'Knockout and league tournament match bracket organization' },
        ],
        buyUrl: 'https://app.karttik.ai/buy?industry=turf&package=academy',
      },
    ],
    footnotes: [
      'Priced in Indian rupees by the year, plus 18% GST. Billed annually.',
      'WhatsApp messages are billed directly by Meta through your WhatsApp Business Account.',
      {
        prefix: 'Compare with all other products on our ',
        linkText: 'full pricing page',
        linkUrl: '/pricing/#turf',
        text: '.',
      },
    ],
  },

  // 9. FAQ Section
  faqSection: {
    eyebrow: 'FAQ',
    h2: 'Questions turf owners ask',
    faqs: [
      {
        id: 'what-is',
        question: 'What is turf booking software?',
        answer: 'Turf booking software runs a turf’s bookings: every court’s slots on one board, prices by the hour, payments at the desk and online, and a record of each customer. Karttik AI – Turf adds an AI that answers players on WhatsApp, offers free slots with prices, holds one and, with your Razorpay connected, sends the advance link.',
      },
      {
        id: 'cost',
        question: 'How much does turf booking software cost in India?',
        answer: 'Karttik AI – Turf has two plans: Turf at ₹6,999 a year + GST, and Turf with Academy, which adds a second user, batches, attendance and memberships, at ₹12,999 a year + GST. Both start with a 7-day free trial. There is zero commission on your bookings.',
      },
      {
        id: 'split-ground',
        question: 'How does it handle grounds that can be played whole or split into halves?',
        answer: 'The system links the courts together. When someone books the full ground, Half A and Half B are automatically locked. Conversely, if either Half A or Half B is booked, the full ground is automatically blocked from being reserved.',
      },
      {
        id: 'whatsapp-booking',
        question: 'Can players book my turf on WhatsApp?',
        answer: 'Yes, on both plans. The AI replies on your WhatsApp number at any hour, offers only free slots with their prices, holds the slot for 15 minutes, and sends your Razorpay advance payment link. Once paid, the slot is locked on your board.',
      },
      {
        id: 'commission',
        question: 'Does Karttik AI take a percentage of my bookings?',
        answer: 'No. Zero commission. Advances and payments go directly into your own Razorpay account and straight to your bank.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'START YOUR FREE TRIAL',
    h2: 'Every slot booked. Every rupee counted.',
    sub: 'Get your turf on Karttik AI today with a 7-day free trial. We set up your courts, rates and rules with you 1-on-1 on WhatsApp.',
    buttonPrimary: {
      text: 'Start 7-Day Free Trial',
      href: '#plans',
    },
    buttonSecondary: {
      text: 'Book a Live Demo',
      href: "https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20Karttik%20AI%20Turf.",
    },
    callText: 'Or call +91 93486 33365 to talk with our team',
    callHref: 'tel:+919348633365',
  },

  // 11. Family Section
  familySection: {
    eyebrow: 'THE KARTTIK AI FAMILY',
    h2: 'One platform, made for each trade',
    sub: 'Every product is built around the way its industry runs — with its own screens, tools and AI.',
    templateLink: '/templates/',
    templateText: 'Explore free business templates and message formats →',
    comingSoonLink: '/#soon',
  },
};


// Product Data: Karttik AI – Salon & Spa
export const salonData = {
  id: 'salon',
  slug: 'salons',
  title: 'Salon Management Software India | Karttik AI – Salon & Spa',
  metaDescription: 'Salon and spa management software for India: stylist board, walk-ins, GST bills, client cards, reminders. AI receptionist on Salon Growth. 14-day free trial.',
  canonicalUrl: 'https://karttik.ai/salons/',
  themeColor: '#001845',
  locale: 'en_IN',
  ogImage: '/assets/img/og-salon.jpg',
  accentColor: '#d9468f',
  accentBright: '#ff9fcb',

  // 1. Hero
  hero: {
    badge: 'Karttik AI – Salon & Spa',
    h1Main: 'Salon management software,',
    h1Accent: 'with an AI receptionist on Salon Growth',
    subtitle: 'Run your salon, beauty parlour or spa on one app: the day’s board by stylist, walk-ins, GST bills, client cards and visit reminders in one place. With Salon Growth, an AI receptionist also books the service, the time and the stylist on WhatsApp at any hour, in Tamil, Tanglish or English.',
    buttons: [
      { text: 'Start free trial', href: '#plans', primary: true },
      { text: 'Book a demo', href: "https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20Karttik%20AI%20Salon.", primary: false, isExternal: true },
    ],
    trustChips: [
      'Plans from ₹7,999 a year + GST',
      '14-day free trial',
      'Set up with you',
      'Tamil, Tanglish and English',
    ],
    chatHeader: {
      name: 'Divya R',
      subtitle: 'WhatsApp · Glow Salon',
      badge: 'AI replying',
      initials: 'DR',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, Saturday evening haircut slot iruka?',
        time: '8:40 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Hi Divya! Unga usual stylist Priya kitta Saturday 5:30 pm free. Haircut ₹600. Book pannalama?',
        time: '8:40 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: 'Yes please, hair spa um add pannunga',
        time: '8:41 pm',
      },
      {
        id: 4,
        type: 'confirmation',
        statusPill: 'Booked · Sat, 5:30 pm · Priya',
        title: '✓ Appointment Booked',
        details: 'Sat 5:30 pm · Stylist Priya · Haircut + Hair Spa (₹1,560). Glow Salon, Anna Nagar.',
        time: '8:41 pm',
      },
    ],
    floatingCards: [
      {
        title: 'Appointment booked',
        subtitle: 'Divya · haircut + hair spa',
      },
      {
        title: 'Her usual stylist',
        subtitle: 'Priya · Sat 5:30 pm',
      },
      {
        title: 'Front desk',
        subtitle: 'Booked → In the chair → Done',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'AT A GLANCE',
    h2: 'Karttik AI – Salon & Spa at a glance',
    intro: 'Karttik AI – Salon & Spa is salon management software for salons, beauty parlours and spas in India: the stylist board, walk-ins, GST bills, client cards and due-back reminders in one app. Plans start from ₹7,999 a year + GST, with a 14-day free trial. Salon Growth adds stylist commission and an AI receptionist that books on WhatsApp.',
    facts: [
      {
        label: 'WHAT IT IS',
        desc: 'Salon software made for the salon floor: the front desk by stylist, visit bills, client cards, memberships, packs and reminders in one app.',
      },
      {
        label: 'MADE FOR',
        desc: 'Hair and beauty salons, unisex salons, beauty parlours, spas and grooming studios in India.',
      },
      {
        label: 'PRICE',
        desc: 'Salon Basic: ₹7,999 a year + GST\nSalon Growth: ₹11,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '14 days on either plan. You approve auto-debit with Razorpay at the start; the first payment comes only when the trial ends.',
      },
      {
        label: 'AI RECEPTIONIST',
        desc: 'On Salon Growth: an AI receptionist that books on WhatsApp, Instagram, Messenger and web chat, answers services and prices, and offers the client’s usual stylist.',
      },
      {
        label: 'WORKS ON',
        desc: 'The web and the Android app.',
      },
    ],
  },

  // 3. Features
  featuresSection: {
    id: 'features',
    eyebrow: 'EVERYTHING INSIDE',
    h2: 'Salon software features: front desk, billing, clients and commission',
    sub: 'One app for the front desk, the stylists, the bills and the clients — made for hair and beauty salons, unisex salons, spas and grooming studios.',
    columns: [
      {
        category: 'Front desk',
        icon: 'Bot',
        items: [
          {
            title: 'AI receptionist on Growth',
            description: 'On Salon Growth: answers services, prices and timings, and books the service, the time and the stylist on WhatsApp.',
          },
          {
            title: 'The day’s board',
            description: 'A column for each stylist: booked, arrived, in the chair, done, with clear colour coding.',
          },
          {
            title: 'Walk-ins and the queue',
            description: 'Assign walk-ins to whoever is free, or queue them with an accurate estimated wait time.',
          },
        ],
      },
      {
        category: 'Clients & cards',
        icon: 'FileText',
        items: [
          {
            title: 'Client cards',
            description: 'Every visit, its services, stylists, product purchases, bills and what they spent over time.',
          },
          {
            title: 'Private notes',
            description: 'Keep the colour formula, skin sensitivity, patches and preferences safe from unauthorised eyes.',
          },
          {
            title: 'Usual stylist detection',
            description: 'Automatically recognises their preferred stylist and offers them first during repeat bookings.',
          },
        ],
      },
      {
        category: 'Billing and money',
        icon: 'CreditCard',
        items: [
          {
            title: 'Visit billing with GST',
            description: 'Combine multiple services, retail products, tips and taxes into a clean receipt sent on WhatsApp.',
          },
          {
            title: 'Memberships & service packs',
            description: 'Sell packs (e.g. 5 hair spas) and annual memberships that deduct sessions automatically.',
          },
          {
            title: 'Stylist commissions on Growth',
            description: 'On Salon Growth: calculate service and retail product commissions per stylist automatically on every bill.',
          },
        ],
      },
      {
        category: 'Marketing and growth',
        icon: 'Users',
        items: [
          {
            title: 'Due-back reminders',
            description: 'Automated WhatsApp reminders sent when a client is due for a haircut, root touch-up or facial.',
          },
          {
            title: 'Meta lead ads & Instagram',
            description: 'On Salon Growth: connect Instagram ads and DM automations directly to capture high-value bridal and salon leads.',
          },
          {
            title: 'Staff management',
            description: 'Separate logins for receptionists, stylists and salon owners with role-based access.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    h2: 'From the first booking\nto the next visit',
    rows: [
      {
        id: 'frontdesk',
        eyebrow: 'THE FRONT DESK',
        h3: 'Appointments and walk-ins: every stylist’s day on one board',
        text: 'Appointments and walk-ins appear in a column for each stylist. Mark them arrived, in the chair and done; a walk-in starts with whoever is free, or waits in the queue with the time the desk can tell them.',
        bullets: [
          'One service menu; each stylist ticks what they do, at their own price if theirs differs',
          'A visit of several services, each with its stylist, back to back',
          'Stylists mark their own client in the chair and done from their phone',
        ],
        type: 'salonBoard',
      },
      {
        id: 'clientcards',
        eyebrow: 'CLIENT CARDS',
        h3: 'Private notes, colour formulas and repeat visits',
        text: 'Never lose a hair colour formula or patch test note again. Each client profile stores their full service history, photos of previous hairstyles, and private staff notes that only designated managers can view.',
        bullets: [
          'Clients due back identified automatically based on service frequency',
          'Direct WhatsApp chat history linked to each client profile',
          'VIP tags and loyalty spend tier badges',
        ],
        type: 'salonClientCard',
      },
      {
        id: 'commissions',
        eyebrow: 'COMMISSIONS & ACCOUNTS',
        h3: 'Stylist commissions without end-of-month headaches',
        text: 'On Salon Growth, configure custom commission percentages for services and retail products. The system splits the bill fairly even when two stylists work on the same customer, providing a one-click payroll summary.',
        bullets: [
          'Service and product commissions computed instantly per invoice',
          'Daily revenue breakdown by cash, UPI, card and gift vouchers',
          'GSTR-1 and expense exports ready for your accountant',
        ],
        type: 'salonCommission',
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'Four numbers every morning',
    sub: 'The dashboard opens on what a salon owner checks first, and each number opens its list.',
    stats: [
      { icon: 'Calendar', label: 'Today’s appointments', value: '24', sub: '8 still to come' },
      { icon: 'UserPlus', label: 'Clients due back', value: '17', sub: '5 reminded' },
      { icon: 'Star', label: 'Renewals due this week', value: '6', sub: 'Gold and Silver members' },
      { icon: 'Users', label: 'New clients this month', value: '11', sub: 'from WhatsApp & walk-ins' },
    ],
  },

  // 6. Speaks Section
  speaksSection: {
    eyebrow: 'MADE FOR SALONS',
    h2: 'It works the way a salon floor does',
    comparisonHeader: {
      left: 'TODAY',
      right: 'WITH KARTTIK AI – SALON & SPA',
    },
    rows: [
      {
        today: 'Booking messages wait until someone is free',
        withProduct: 'The service, time and stylist booked in seconds by the AI receptionist on Salon Growth',
      },
      {
        today: 'A register and a guess at who is free next',
        withProduct: 'Every stylist’s day on one board, walk-ins with an accurate wait time',
      },
      {
        today: 'The colour formula in a stylist’s head, or a notebook',
        withProduct: 'Private notes on the client’s card, at the desk when they sit down',
      },
      {
        today: 'Commission added up by hand at month end',
        withProduct: 'On Salon Growth, each stylist’s share on every bill, and a sheet to pay from',
      },
    ],
    chips: [
      'Enquiries, clients and appointments — your words on every screen',
      'Front desk, stylist and salon manager roles',
      'AI replies in Tamil, Tanglish or English on Salon Growth',
      'The whole app on Android',
      'Bills paid by cash, UPI or card',
    ],
  },

  // 7. Safety Section
  safetySection: {
    h2: 'Careful with clients',
    cards: [
      {
        title: 'Where it fits',
        text: 'Karttik AI – Salon & Spa is built for independent salons, beauty parlours, unisex salons, nail studios and day spas. It manages appointments, walk-ins, billing, client cards, visit reminders, commissions, inventory and marketing. It connects to your existing receipt printer and card swipe machine.',
      },
      {
        title: 'What the AI is told never to do',
        rules: [
          'Promise medical, hair regrowth or skin treatment outcomes',
          'Quote unauthorized discounts or modify service prices',
          'Double-book a stylist who is already occupied in the chair',
          'Share private client colour formulas or phone numbers',
        ],
      },
    ],
  },

  // 8. Pricing Section
  pricingSection: {
    eyebrow: 'PRICING',
    h2: 'Salon software pricing: Salon Basic and Salon Growth',
    intro: 'Start with a 14-day free trial on either plan. Salon Basic handles complete front desk, billing and client cards; Salon Growth adds the AI receptionist on WhatsApp and stylist commission calculations.',
    plans: [
      {
        name: 'Salon Basic',
        badge: 'FOR SALONS GETTING STARTED',
        price: '₹7,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For a salon getting started: the front desk by stylist with walk-ins and the queue, visit bills with products, packs and memberships, client cards with private notes, the clients due back with a WhatsApp reminder, payment links and broadcasts.',
        limits: '3 users · 1,000 emails a month · Unlimited products',
        leadFeature: 'Core salon management without an AI bot',
        features: [
          { title: 'The day’s board', description: 'Every stylist’s day in columns: booked, arrived, in the chair, done' },
          { title: 'Walk-ins & queue', description: 'Assign walk-ins to free stylists or display accurate wait times' },
          { title: 'Client cards & private notes', description: 'Store formulas, history and preferences securely' },
          { title: 'Visit billing & GST invoices', description: 'Itemized receipts with services, products and taxes' },
          { title: 'Due-back reminders', description: 'Manual and scheduled WhatsApp follow-ups for repeat visits' },
          { title: 'Razorpay payment links', description: 'Collect advance payments for bridal or luxury services' },
        ],
        buyUrl: 'https://app.karttik.ai/buy?industry=salons&package=basic',
      },
      {
        name: 'Salon Growth',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹11,999',
        pricePeriod: '/ year + GST',
        trialText: '14 days free',
        description: 'For busy salons, spas and luxury grooming studios that want an AI receptionist to book on WhatsApp, calculate stylist commissions, and run Meta ads.',
        limits: '5 users · 5,000 emails a month · ₹1,000 AI credits a month',
        leadFeature: 'Includes everything in Salon Basic, plus:',
        features: [
          { title: 'AI receptionist on WhatsApp', description: 'Answers services, prices and books preferred stylists 24/7' },
          { title: 'Stylist commissions', description: 'Automatic commission calculation per bill for services and retail' },
          { title: 'Meta lead ads & Instagram', description: 'Convert social media enquiries into confirmed bookings automatically' },
          { title: 'Treatment estimates & packages', description: 'Multi-session packages and bridal estimates on your letterhead' },
          { title: 'Expense tracking & GSTR exports', description: 'Track salon floor costs, consumables and tax filings' },
          { title: 'Advanced revenue analytics', description: 'Stylist productivity, client retention rate and chair occupancy' },
        ],
        buyUrl: 'https://app.karttik.ai/buy?industry=salons&package=growth',
      },
    ],
    footnotes: [
      'Priced in Indian rupees by the year, plus 18% GST. Billed annually.',
      'WhatsApp messages are billed directly by Meta through your WhatsApp Business Account.',
      {
        prefix: 'Compare with all other products on our ',
        linkText: 'full pricing page',
        linkUrl: '/pricing/#salon',
        text: '.',
      },
    ],
  },

  // 9. FAQ Section
  faqSection: {
    eyebrow: 'FAQ',
    h2: 'Salon software questions',
    faqs: [
      {
        id: 'what-is',
        question: 'What is Karttik AI – Salon & Spa?',
        answer: 'Karttik AI – Salon & Spa is salon management software made by LearningHub Software Solution. It gives you a stylist day board, client cards with private colour notes, GST billing, visit reminders, and memberships. On Salon Growth, it also includes stylist commissions and an AI receptionist on WhatsApp.',
      },
      {
        id: 'ai-difference',
        question: 'Does Salon Basic include the AI receptionist?',
        answer: 'No. Salon Basic is designed for salons that want pure operational software (stylist board, billing, client cards) without an AI agent. The AI receptionist on WhatsApp is included on Salon Growth.',
      },
      {
        id: 'walkins',
        question: 'How does it handle walk-in customers?',
        answer: 'You can tap any stylist column to start a walk-in immediately, or add them to the queue. The system calculates how long existing services in the chair have left and shows the front desk exactly when a chair will be free.',
      },
      {
        id: 'commission',
        question: 'How are stylist commissions calculated?',
        answer: 'On Salon Growth, you set commission rates per stylist (e.g. 10% on haircuts, 5% on product sales). Every time a bill is generated, the commission is logged. At the end of the month, you can export a complete payroll report in one click.',
      },
      {
        id: 'formula-privacy',
        question: 'Can junior staff see private hair colour formulas?',
        answer: 'No. You can set permissions so that private client notes, formulations and revenue numbers are only visible to senior stylists and salon managers.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'START YOUR FREE TRIAL',
    h2: 'Every chair busy. Every client back.',
    sub: 'Transform your salon front desk with Karttik AI today. Free 14-day trial with 1-on-1 setup on WhatsApp.',
    buttonPrimary: {
      text: 'Start 14-Day Free Trial',
      href: '#plans',
    },
    buttonSecondary: {
      text: 'Book a Live Demo',
      href: "https://wa.me/919348633365?text=Hi%2C%20I'd%20like%20a%20free%20demo%20of%20Karttik%20AI%20Salon.",
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


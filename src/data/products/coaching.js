// Product Data: Karttik AI – Coaching Institute
export const coachingData = {
  id: 'coaching',
  slug: 'coaching',
  title: 'Coaching Institute Management Software with AI | Karttik AI',
  metaDescription: 'Coaching institute management software for India: admissions, batches, attendance, fees in instalments, parent alerts, and an AI that books demo classes.',
  canonicalUrl: 'https://karttik.ai/coaching/',
  themeColor: '#001d55',
  locale: 'en_IN',
  ogImage: '/assets/img/og-coaching.jpg',

  // 1. Hero
  hero: {
    badge: 'Karttik AI – Coaching Institute',
    h1Main: 'Coaching institute management software,',
    h1Accent: 'with an AI counsellor',
    subtitle: 'Enquiries, admissions, batches, attendance and fees in one app — and an AI that answers students and parents and books demo classes on WhatsApp at any hour. Fees go in instalments, reminded on their own.',
    buttons: [
      { text: 'Start free trial', href: '#plans', primary: true },
      { text: 'Book a demo', href: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20Karttik%20AI.', primary: false, isExternal: true },
    ],
    trustChips: [
      '7-day free trial',
      'Set up with you',
      'Tamil, Tanglish, Hindi and English',
    ],
    // Chat Simulation
    chatHeader: {
      name: 'Lakshmi S',
      subtitle: 'WhatsApp · parent',
      badge: 'AI replying',
      initials: 'LS',
    },
    chatMessages: [
      {
        id: 1,
        sender: 'user',
        text: 'Hi, en paiyan 11th. NEET batch iruka? Fees evlo?',
        time: '8:15 pm',
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Iruku! NEET 2-year, evening 5–7 pm, Mon–Sat. Fees ₹48,000 — 4 instalments la kattalam. Saturday 10 am free demo class varalama?',
        time: '8:15 pm',
      },
      {
        id: 3,
        sender: 'user',
        text: 'Sari, varom. Paiyan peru Arjun.',
        time: '8:16 pm',
      },
      {
        id: 4,
        sender: 'bot',
        text: 'Done! Arjun-ku Sat 10:00 am demo class booked. Location anuppuren.',
        time: '8:16 pm',
      },
      {
        id: 5,
        type: 'confirmation',
        statusPill: 'Demo class booked · Sat, 10:00 am',
        title: '✓ Demo Class Booked',
        details: 'Arjun · NEET 2-year · Sat 10:00 am. Confirmation and location sent on WhatsApp!',
        time: '8:16 pm',
      },
    ],
    floatingCards: [
      {
        id: 'fc-1',
        title: 'New enquiry',
        subtitle: 'Arjun · NEET · class 11',
        position: 'top-left',
        icon: 'UserPlus',
      },
      {
        id: 'fc-2',
        title: 'Demo class booked',
        subtitle: 'Sat 10:00 am · NEET 2-year',
        position: 'bottom-right',
        icon: 'Calendar',
      },
      {
        id: 'fc-3',
        title: 'Admissions board',
        subtitle: 'Enquiry → Demo class',
        position: 'top-right',
        icon: 'Kanban',
      },
    ],
  },

  // 2. At a glance
  atAGlance: {
    id: 'at-a-glance',
    eyebrow: 'At a glance',
    h2: 'Karttik AI – Coaching Institute at a glance',
    intro: 'Karttik AI – Coaching Institute is coaching institute management software for NEET, JEE, board-exam and tuition centres in India. It runs enquiries, admissions, batches, attendance and fee instalments in one app, and its AI counsellor answers parents on WhatsApp, in their language, and books demo classes. Plans start from ₹11,999 a year + GST, with a 7-day free trial.',
    facts: [
      {
        label: 'WHAT IT IS',
        desc: 'Software for coaching institutes, with AI built in: enquiries, admissions, batches with seats, attendance, fees and parents in one app.',
      },
      {
        label: 'MADE FOR',
        desc: 'NEET, JEE and board-exam coaching, tuition centres and classes, competitive-exam coaching, spoken English, and music, dance or abacus classes.',
      },
      {
        label: 'PRICE',
        desc: 'Coaching Basic: ₹11,999 a year + GST / Coaching Growth: ₹17,999 a year + GST',
      },
      {
        label: 'FREE TRIAL',
        desc: '7 days on either plan. You approve auto-debit with Razorpay at the start; the first payment comes only when the trial ends.',
      },
      {
        label: 'AI',
        desc: "An AI counsellor on both plans, on WhatsApp, Instagram, Messenger and web chat. It replies in the parent's own language: Tamil, Tanglish, Hindi or English.",
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
    h2: 'Everything a coaching institute runs on',
    sub: 'Coaching centre management in one app — admissions, classes, fees and parents, for NEET, JEE, board-exam and tuition centres.',
    columns: [
      {
        category: 'Admissions',
        icon: 'UserPlus',
        items: [
          {
            title: 'AI counsellor',
            description: 'Answers courses, timings and fees, asks the class and the exam, and books a demo class.',
          },
          {
            title: 'Admissions board',
            description: 'Every enquiry from counselling to demo to admission, with its owner and next step.',
          },
          {
            title: 'Demo classes',
            description: 'A demo-class calendar and booking pages, with reminders.',
          },
          {
            title: 'Forms and ads',
            description: 'Web forms straight in; on Coaching Growth, Meta lead ads too, and which ads bring admissions.',
          },
        ],
      },
      {
        category: 'Classes',
        icon: 'GraduationCap',
        items: [
          {
            title: 'Batches',
            description: 'Course, timing, days, teacher and seats; a full batch takes nobody more.',
          },
          {
            title: 'Attendance',
            description: 'Present, absent, late or on leave in a tap; parents can hear the same day.',
          },
          {
            title: 'Courses',
            description: 'Your courses and their fees, which the AI explains.',
          },
          {
            title: 'Student records',
            description: 'Every chat, batch, fee and file on one page, with the parents linked.',
          },
        ],
      },
      {
        category: 'Fees',
        icon: 'CreditCard',
        items: [
          {
            title: 'Fees in instalments',
            description: 'An admission amount, then parts, reminded before, on and after the day.',
          },
          {
            title: 'Online payments',
            description: 'On Coaching Growth, a Razorpay link in each reminder, paid into your own account.',
          },
          {
            title: 'Monthly fees',
            description: 'Fees that renew every month, with reminders.',
          },
          {
            title: 'Desk payments and invoices',
            description: 'Cash, UPI, card and cheque recorded at the desk; GST invoices on your letterhead.',
          },
        ],
      },
      {
        category: 'Growth and team',
        icon: 'Users',
        items: [
          {
            title: 'Batch messages',
            description: 'A class change to every student of a batch and their parents, in one message.',
          },
          {
            title: 'Marketing',
            description: 'WhatsApp broadcasts, email campaigns and Instagram automation.',
          },
          {
            title: 'Studio',
            description: 'On Coaching Growth, a marketing agent for your admission campaigns on Meta.',
          },
          {
            title: 'Your team',
            description: 'Counsellor, front-desk and teacher roles, team reports and the Android app.',
          },
        ],
      },
    ],
  },

  // 4. How It Works
  howItWorks: {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    h2: 'From the first enquiry\nto the last instalment',
    rows: [
      {
        id: 'admissions-row',
        eyebrow: 'ADMISSIONS',
        h3: 'Every enquiry answered, every demo class booked',
        text: 'The AI answers courses, timings and fees in the parent\'s own language, asks the class and the exam, and books a free demo class. Each enquiry moves from counselling to demo to admission on one board.',
        bullets: [
          'Counsellors get the chat with a brief, not just a number',
          'With AI follow-ups on, the AI nudges an enquiry that goes quiet, and stops when the parent replies',
          'On Coaching Growth, enquiries from Facebook and Instagram lead ads arrive by themselves',
        ],
        type: 'kanban',
        kanbanData: {
          title: 'Admissions · 2026–27 batches',
          meta: '7 open',
          columns: [
            {
              name: 'Enquiry',
              count: 3,
              cards: [
                { name: 'Rahul M', tag: 'Class 10 · maths' },
                { name: 'Sneha P', tag: 'JEE Main' },
                { name: 'Farhan A', tag: 'NEET crash course' },
              ],
            },
            {
              name: 'Demo class',
              count: 2,
              cards: [
                { name: 'Arjun S', tag: 'NEET 2-year · Sat' },
                { name: 'Kavya R', tag: 'JEE 2-year · Sun' },
              ],
            },
            {
              name: 'Admitted',
              count: 2,
              cards: [
                { name: 'Divya K', tag: 'NEET 2-year' },
                { name: 'Aakash V', tag: 'Class 12 · physics' },
              ],
            },
          ],
        },
      },
      {
        id: 'batches-row',
        eyebrow: 'BATCHES AND ATTENDANCE',
        h3: 'Batch management with seats, and attendance in a tap',
        text: 'Each batch keeps its course, timing, days, teacher and seats. A full batch takes nobody more. Mark the day\'s attendance, and with absence alerts on, parents hear within minutes when a student is absent.',
        bullets: [
          'A student\'s batches and month of attendance on their page',
          'Present, absent, late or on leave',
          'Absence alerts to parents, the student or both — your choice',
        ],
        type: 'attendance',
        attendanceData: {
          batchName: 'NEET 2-year · Evening',
          schedule: 'Mon–Sat · 5–7 pm · Mr. Senthil',
          seatsTaken: 38,
          seatsTotal: 40,
          attendanceTakenTime: 'Taken by Mr. Senthil, 5:10 pm',
          students: [
            { name: 'Arjun S', status: 'Present', pillClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
            { name: 'Kavya R', status: 'Absent', pillClass: 'bg-rose-50 text-rose-700 border-rose-200', note: 'Parent told on WhatsApp' },
            { name: 'Rahul M', status: 'Late', pillClass: 'bg-amber-50 text-amber-700 border-amber-200' },
            { name: 'Divya K', status: 'Present', pillClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
          ],
        },
      },
      {
        id: 'fees-row',
        eyebrow: 'FEES',
        h3: 'Fee management: instalments reminded on WhatsApp',
        text: 'An admission amount, then parts every month or every few months. By default, reminders go three days before, on the day and three days after — to the student, the parents or both. On Coaching Growth each carries a Razorpay link; on Coaching Basic, your own line on how to pay. Cash and UPI at the desk are recorded too.',
        bullets: [
          'On Coaching Growth, an instalment paid online marks itself paid',
          'Overdue, due this month and paid — on one page',
          'Cash, UPI, card or cheque recorded against the instalment',
        ],
        type: 'feeTimeline',
        feeData: {
          studentName: 'Arjun S',
          course: 'NEET 2-year',
          totalPlan: '₹48,000 in 4 parts',
          status: '1 due',
          timeline: [
            { step: 1, title: 'Admission · ₹12,000', meta: 'Paid 2 Jun · UPI', status: 'paid' },
            { step: 2, title: 'Part 2 · ₹12,000', meta: 'Paid 2 Aug · cash at the desk', status: 'paid' },
            { step: 3, title: 'Part 3 · ₹12,000', meta: 'Due 2 Nov · reminder sent to his mother', status: 'due' },
            { step: 4, title: 'Part 4 · ₹12,000', meta: 'Due 2 Jan', status: 'upcoming' },
          ],
          bubbleText: "Hi Lakshmi, Arjun's NEET fee of ₹12,000 is due on 2 Nov. Part 3 of 4 · ₹12,000",
          buttonLabel: 'Pay ₹12,000',
          caption: 'Payment link on Coaching Growth',
        },
      },
      {
        id: 'parents-row',
        eyebrow: 'PARENTS',
        h3: 'Parents in the loop, without forty messages',
        text: 'Link a parent to a student once. The parent gets the fee reminders, the AI knows whose child they are, and a class update reaches every student of a batch — and their parents — in one message.',
        bullets: [
          'The AI answers a parent with their child\'s batch and fee',
          'Broadcasts skip anyone who opted out; collect consent at admission',
          'Counsellor, front-desk and teacher roles',
        ],
        type: 'batchMessage',
        batchMessageData: {
          batchName: 'Message to a batch — NEET 2-year · Evening',
          status: 'Sent',
          updateTitle: 'Class update',
          messageText: "Hi! This Saturday's NEET class moves to 3:00 pm, for the mock test. See you there.",
          meta: 'Sent to 38 students and 35 parents',
          replyText: 'Noted, thank you sir',
        },
      },
    ],
  },

  // 5. Dashboard
  dashboard: {
    h2: 'A coaching dashboard with four numbers every morning',
    sub: 'The dashboard opens on what an institute owner checks first, and each number opens its list.',
    stats: [
      {
        label: 'New enquiries this week',
        value: '23',
        sub: 'from WhatsApp and Instagram',
        icon: 'UserPlus',
      },
      {
        label: 'Fees due this month',
        value: '₹3.8L',
        sub: 'from 31 students',
        icon: 'CreditCard',
      },
      {
        label: 'Fees overdue',
        value: '₹46,000',
        sub: '7 students',
        icon: 'AlertCircle',
      },
      {
        label: 'Follow-ups due',
        value: '12',
        sub: '3 overdue',
        icon: 'Clock',
      },
    ],
  },

  // 6. Speaks Like an Institute
  speaksSection: {
    eyebrow: 'SPEAKS LIKE AN INSTITUTE',
    h2: 'Made for coaching centres and tuition classes',
    comparisonHeader: {
      left: 'TODAY',
      right: 'WITH KARTTIK AI – COACHING INSTITUTE',
    },
    rows: [
      {
        today: 'Enquiries wait until a counsellor is free',
        withProduct: 'Courses, timings and fees answered in seconds',
      },
      {
        today: 'Fee reminders are phone calls and a notebook',
        withProduct: 'Reminders go out on their own — with a payment link on Coaching Growth',
      },
      {
        today: 'Nobody knows who is overdue until the month ends',
        withProduct: 'Overdue, due this month and paid — on one page',
      },
      {
        today: 'An absent student\'s parents hear about it weeks later',
        withProduct: 'With absence alerts on, parents hear the same day, on WhatsApp',
      },
    ],
    chips: [
      'Students, enquiries, batches and courses — your words on every screen',
      'Counsellor, front-desk and teacher roles',
      'Tamil, Tanglish, Hindi and English',
      'The whole app on Android',
      'Online fees into your own Razorpay, on Coaching Growth',
    ],
  },

  // 7. Careful with students and parents
  safetySection: {
    h2: 'Careful with students and parents',
    cards: [
      {
        title: 'Where it fits',
        icon: 'Layers',
        text: 'Not a school ERP or an LMS. Karttik AI – Coaching Institute keeps enquiries, admissions, batches, attendance, fees and the conversations with students and parents; live classes, tests, marks and timetables stay where you keep them.',
      },
      {
        title: 'What the AI is told never to do',
        icon: 'Shield',
        rules: [
          'Promise ranks, marks, selection or results',
          'Offer a discount or a scholarship — those go to a counsellor',
          'Share another student\'s details, marks or fees',
          'Keep a complaint or a safety worry — it hands over at once',
        ],
      },
    ],
  },

  // 8. Pricing
  pricingSection: {
    id: 'pricing',
    anchorPlans: 'plans',
    eyebrow: 'PLANS FOR COACHING INSTITUTES',
    h2: 'Ready the day you buy',
    intro: 'Plans start from ₹11,999 a year + GST, each with a 7-day free trial. A coaching plan starts with the institute setup already in place: the admissions pipeline, student fields, batch fields, example courses, a demo-class calendar, the WhatsApp templates, the fee automations and the roles. You add your batches, fees and address.',
    plans: [
      {
        name: 'Coaching Basic',
        badge: 'STARTER',
        price: '₹11,999',
        pricePeriod: '/ year + GST',
        trialText: '7 days free',
        description: 'For tuition centres and small institutes: enquiries to admissions, batches with seats and attendance, fees in instalments with WhatsApp reminders paid at the desk, monthly fee plans, invoices on your letterhead, demo class bookings, email campaigns, and an AI counsellor on WhatsApp.',
        buyUrl: 'https://app.karttik.ai/buy?package=80dfcf40-2c30-4746-b9ed-365eb23edac2&cycle=yearly&industry=coaching',
        limits: '2 users · 1,000 emails a month · ₹1,000 AI credits a year',
        features: [
          { title: 'Unified inbox', description: 'WhatsApp, Instagram, Messenger and web chat in one inbox for the whole team' },
          { title: 'Enquiries', description: 'Every enquiry with their chats, notes and history, in one list' },
          { title: 'AI agent', description: 'AI replies, handoffs and ad briefs' },
          { title: 'Manager over WhatsApp', description: "Approve the AI's discounts and exceptions, check the numbers and give it instructions from your own WhatsApp" },
          { title: 'Sales pipelines', description: 'Admissions, pipelines and stages' },
          { title: 'Student management', description: 'An enquiry who buys becomes a student in one click, keeping their chats and history; with tags, groups, custom fields, import and merge' },
          { title: 'Student files', description: "Keep documents, photos and voice notes on each enquiry's and student's profile, and send them in the chat" },
          { title: 'Follow-ups', description: 'Follow-up tasks, and AI follow-ups with the AI agent' },
          { title: 'Quotations', description: 'PDF quotations, sent in the chat and accepted in a tap' },
          { title: 'GST invoices', description: 'Invoices with GST, and the payments recorded against them' },
          { title: 'Custom quotation design', description: 'Your own letterhead PDF under your quotations and invoices; the built-in designs come with every package' },
          { title: 'Memberships & recurring payments', description: 'Monthly, quarterly or yearly plans with renewal reminders' },
          { title: 'Courses', description: 'Your services with prices; the AI answers what each package costs and includes' },
          { title: 'Fees in instalments', description: 'A fee split into instalments, reminded on WhatsApp before and after each falls due, paid at the desk — or online by link with the Razorpay payment gateway.' },
          { title: 'WhatsApp broadcasts', description: 'Template messages to your students, skipping anyone who opted out' },
          { title: 'Email campaigns', description: 'Newsletters and offers by email, skipping anyone who unsubscribed' },
          { title: 'Forms', description: 'Web forms and their submissions' },
          { title: 'Automations', description: 'Flows and triggers' },
          { title: 'Instagram comment & DM automation', description: 'Reply to comments on your posts, DM the people who comment, and answer Instagram DMs automatically' },
          { title: 'Bookings', description: 'Calendars and booking pages' },
          { title: 'Batches', description: 'Your own kind of batch, with the fields you choose — and who is in each.' },
          { title: 'Attendance', description: "Each batch's attendance, a student's month on their page, and a WhatsApp alert to parents the same day a student is absent." },
          { title: 'Calls (Karttik Phone)', description: 'Call enquiries from your own SIM, logged on the student' },
          { title: 'Call recordings', description: 'Recordings of those calls, saved to the student' },
          { title: 'WhatsApp calls', description: 'Students call your WhatsApp number and it rings on the web and in the app; call them back on WhatsApp' },
          { title: 'Team reports', description: 'AI agent and handoff reports' },
        ],
      },
      {
        name: 'Coaching Growth',
        badge: 'MOST POPULAR',
        isPopular: true,
        price: '₹17,999',
        pricePeriod: '/ year + GST',
        trialText: '7 days free',
        description: 'For growing institutes: everything in Coaching Basic, plus online fee payments through your own Razorpay, admission campaigns from Meta ads with the ads report, expenses and GST books, a store with stock and orders, Studio for marketing posts, and API access.',
        buyUrl: 'https://app.karttik.ai/buy?package=034e3591-bdcb-4944-9af2-6a5cca21889f&cycle=yearly&industry=coaching',
        limits: '3 users · 2,000 emails a month · ₹2,000 AI credits a year · Unlimited products',
        leadFeature: 'Everything in Coaching Basic, plus:',
        features: [
          { title: 'Studio', description: 'The marketing agent' },
          { title: 'Purchases & books', description: "Expenses, suppliers' bills, payments made and the GST paid on them — the money-out side of Accounts" },
          { title: 'Razorpay payment gateway', description: 'Connect your own Razorpay and collect online: payment links in chat, online checkout, UPI, cards, netbanking' },
          { title: 'Store & orders', description: 'Products, stock and orders' },
          { title: 'Meta lead ads', description: 'Facebook and Instagram enquiry forms straight into your enquiries' },
          { title: 'Ads report', description: 'Which ads bring enquiries, paying students and revenue' },
          { title: 'API access', description: 'API keys and outgoing webhooks' },
        ],
      },
    ],
    footnotes: [
      'Prices in rupees, plus 18% GST. On a free trial you approve auto-debit at the start, and the first payment comes only when the trial ends.',
      {
        prefix: 'Not sure which package fits? ',
        linkText: 'Book a free 45-minute demo.',
        linkUrl: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20Karttik%20AI.',
      },
      {
        text: 'Meta decides approval for the WhatsApp Business Platform; it usually takes 1–2 weeks, and each WhatsApp template is approved by Meta too. WhatsApp message charges are billed by Meta, separately from Karttik AI. On Coaching Growth, online fee payments go through your own Razorpay account. ',
        linkText: 'Compare with every plan',
        linkUrl: '/pricing/#coaching',
      },
    ],
  },

  // 9. FAQ
  faqSection: {
    id: 'faq',
    eyebrow: 'FAQ',
    h2: 'Questions coaching institutes ask',
    faqs: [
      {
        id: 'faq-1',
        question: 'What is coaching institute management software?',
        answer: "Coaching institute management software keeps an institute's daily work in one place: enquiries and admissions, batches and seats, attendance, fees and the messages with students and parents. Karttik AI – Coaching Institute does all of this and adds an AI counsellor that answers enquiries on WhatsApp, Instagram and web chat and books demo classes.",
      },
      {
        id: 'faq-2',
        question: 'How much does Karttik AI – Coaching Institute cost?',
        answer: 'Coaching Basic is ₹11,999 a year + GST, and Coaching Growth is ₹17,999 a year + GST. Both include AI credits. Growth adds more users, Razorpay payment links, Meta lead ads, the ads report, Studio, purchases and books, the store and API access. Both start with a 7-day free trial. Meta bills WhatsApp message charges separately.',
      },
      {
        id: 'faq-3',
        question: 'Can the AI answer enquiries and book demo classes on WhatsApp?',
        answer: "Yes, on both plans. The AI answers questions about courses, batch timings and fees from your own details, asks the student's class and target exam, and books a free demo class into your calendar. It replies in the parent's own language, such as Tamil, Tanglish, Hindi or English, and hands the chat to a counsellor when a person is needed.",
      },
      {
        id: 'faq-4',
        question: 'Can it send fee reminders to parents on WhatsApp?',
        answer: 'Yes. Link a parent to a student once. Each instalment is reminded on WhatsApp at the hour you choose, by default three days before, on the due day and three days after, to the student, the parents or both. On Coaching Growth each reminder carries a Razorpay payment link; on Coaching Basic it says how to pay, in your words.',
      },
      {
        id: 'faq-5',
        question: 'Can we collect coaching fees in instalments?',
        answer: 'Yes. Set each student\'s fee as an admission amount and then parts, every month or every few months, each with its own due date. Cash, UPI, card, cheque and bank transfers taken at the desk are recorded against the instalment, and the Fees page shows what is overdue, due this month and paid.',
      },
      {
        id: 'faq-6',
        question: 'Does it take attendance and alert parents when a student is absent?',
        answer: "Yes, on both plans. Mark each batch present, absent, late or on leave in a tap. With absence alerts on, the parents, the student or both get a WhatsApp message within about two minutes of saving. A student's page shows their month of attendance, and the AI can answer a parent who asks if their child came today.",
      },
      {
        id: 'faq-7',
        question: 'Will the AI promise ranks or give discounts?',
        answer: 'No. For a coaching institute, the AI\'s settings start with these rules: never promise ranks, marks, selection or results; never offer a discount or a scholarship itself; never share another student\'s details or fees; and hand complaints, refunds and safety worries to a person at once. You save the rules, and can change them.',
      },
      {
        id: 'faq-8',
        question: 'Is it a coaching ERP or an LMS?',
        answer: 'It covers the office side of a coaching ERP: enquiries, admissions, batches with seats, attendance, fees in instalments, parents and marketing, with an AI on WhatsApp. It is not an LMS or a school ERP. It does not run live classes, online tests, marks or timetables, so keep those in the tools you already use.',
      },
      {
        id: 'faq-9',
        question: 'Which institutes is it made for?',
        answer: 'It is coaching class management software for any institute that runs batches and collects fees: NEET, JEE and board-exam coaching, tuition centres, TNPSC, UPSC and bank-exam coaching, spoken English, and music, dance or abacus classes. Your courses, batch timings and fees are your own, and monthly fees can renew and be reminded on their own.',
      },
      {
        id: 'faq-10',
        question: 'Can we message a whole batch and their parents at once?',
        answer: 'Yes. A class change, a holiday or a test reminder reaches every student of a batch, and their linked parents, in one WhatsApp broadcast. It uses a template Meta has approved and skips anyone who has opted out. Meta asks that students and parents agree to get your messages, so collect that consent at admission.',
      },
      {
        id: 'faq-11',
        question: 'Is there a coaching institute management app?',
        answer: 'Yes, for your team. The Karttik AI Android app carries the whole system: chats, enquiries, students, batches, attendance and fees, with notifications, plus calls from your own SIM with recordings and AI transcripts. There is no separate student or parent app; students and parents get reminders, alerts and answers on WhatsApp.',
      },
      {
        id: 'faq-12',
        question: 'How soon can a coaching institute start?',
        answer: 'The coaching setup is ready the day you buy: an admissions pipeline, student fields, batch fields, example courses, a demo-class calendar, WhatsApp templates and fee automations. You add your batches, fees and address. Meta approves your WhatsApp number and templates, usually in one to two weeks, and we help you through it.',
      },
      {
        id: 'faq-13',
        question: 'Is there free coaching institute management software?',
        answer: 'There is no free plan, but every coaching plan starts with a 7-day free trial. You approve auto-debit with Razorpay at the start, and the first payment is taken only when the trial ends. Cancel before then and you pay nothing. The coaching setup is ready from the first day of the trial.',
      },
      {
        id: 'faq-14',
        question: 'Do we need the WhatsApp Business API?',
        answer: 'Yes, and we set it up with you. Your institute\'s number is connected to Meta\'s official WhatsApp Business Platform, the API, so the AI, reminders and batch messages can run on it. Meta approves the number and each message template, usually in one to two weeks, and bills WhatsApp message charges separately from Karttik AI.',
      },
    ],
  },

  // 10. CTA Banner
  ctaBanner: {
    eyebrow: 'Karttik AI – Coaching Institute',
    h2: 'Fill your batches, and collect every instalment on time.',
    sub: 'Start a free trial on the plan that fits your institute, or see it first on a free 45-minute demo.',
    buttonPrimary: { text: 'Start free trial', href: '#plans' },
    buttonSecondary: {
      text: 'Book a demo',
      href: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20Karttik%20AI.',
    },
    callText: 'Or call +91 93486 33365',
    callHref: 'tel:+919348633365',
  },

  // 11. The Karttik AI Family
  familySection: {
    eyebrow: 'THE KARTTIK AI FAMILY',
    h2: 'One platform, made for each trade',
    sub: 'One platform underneath — the AI, payments, marketing and calls — and each product made whole for its own trade.',
    moreLink: {
      text: 'More for coaching institute: Fee reminder messages',
      href: '/templates/fee-reminder-messages/',
    },
    comingSoonLink: '/#soon',
  },

  // JSON-LD Schemas
  jsonLd: {
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Karttik AI – Coaching Institute',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android',
      offers: [
        {
          '@type': 'Offer',
          name: 'Coaching Basic',
          price: '11999',
          priceCurrency: 'INR',
          billingDuration: 'P1Y',
        },
        {
          '@type': 'Offer',
          name: 'Coaching Growth',
          price: '17999',
          priceCurrency: 'INR',
          billingDuration: 'P1Y',
        },
      ],
    },
  },
};


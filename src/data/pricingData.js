// Pricing Data
export const pricingData = {
  title: 'Karttik AI Pricing – Yearly Plans in Rupees, Plus GST',
  metaDescription: 'Plans for every Karttik AI product, priced by the year in rupees plus 18% GST. Free trial on every plan; WhatsApp charges are billed by Meta.',
  canonicalUrl: 'https://karttik.ai/pricing/',
  themeColor: '#001d55',

  hero: {
    eyebrow: 'PLANS FOR EVERY PRODUCT',
    h1: 'Karttik AI pricing: plans made for your trade',
    lead: 'Pick your product, then the plan that fits your team. Each product’s plans start with its trade’s setup in place, and every plan has a free trial. Prices are by the year, in rupees, and GST is added to every invoice.',
  },

  productTabs: [
    { id: 'clinic', anchor: 'clinic', name: 'Clinic', subtitle: 'Dental, skin, eye and physiotherapy clinics, and diagnostic labs' },
    { id: 'coaching', anchor: 'coaching', name: 'Coaching Institute', subtitle: 'NEET, JEE, foundation and board coaching centres' },
    { id: 'realestate', anchor: 'realestate', name: 'Real Estate', subtitle: 'Builders, developers and property sales offices' },
    { id: 'gym', anchor: 'gym', name: 'Gym & Fitness Studio', subtitle: 'Gyms and yoga, Zumba, CrossFit and dance studios' },
    { id: 'salon', anchor: 'salon', name: 'Salon & Spa', subtitle: 'Hair and beauty salons, unisex salons, parlours and day spas' },
    { id: 'fieldservice', anchor: 'fieldservice', name: 'Field Service & AMC', subtitle: 'AC, water purifier, electrical and home appliance repair firms' },
    { id: 'turf', anchor: 'turf', name: 'Turf', subtitle: 'Box cricket, football, badminton and multi-sport turfs' },
    { id: 'other', anchor: 'other', name: 'Other businesses', subtitle: 'Wholesale, distribution, retail and bespoke trade workflows' },
  ],

  otherPlans: [
    {
      name: 'Basic',
      badge: 'FOR SMALL TRADES',
      price: '₹8,999',
      pricePeriod: '/ year + GST',
      trialText: '14 days free',
      description: 'For any trade or service business wanting a shared team inbox, customer records, payment links and WhatsApp broadcasts.',
      limits: '3 users · 1,000 emails a month · Unlimited contacts',
      features: [
        { title: 'Unified team inbox', description: 'WhatsApp, Instagram, Messenger and web chat in one shared place' },
        { title: 'Customer records', description: 'Tags, custom fields, documents and complete chat history' },
        { title: 'Razorpay integration', description: 'Collect payments via UPI and cards with instant confirmation' },
        { title: 'GST invoices', description: 'Generate and send PDF invoices with your logo' },
        { title: 'Broadcasts', description: 'Send targeted WhatsApp marketing messages to customer groups' },
      ],
      buyUrl: 'https://app.karttik.ai/buy?package=basic',
    },
    {
      name: 'Growth',
      badge: 'MOST POPULAR',
      isPopular: true,
      price: '₹11,999',
      pricePeriod: '/ year + GST',
      trialText: '14 days free',
      description: 'For growing companies that want an AI agent on WhatsApp, Meta lead ads, advanced automations, and expense accounting.',
      limits: '5 users · 5,000 emails a month · ₹1,000 AI credits a month',
      features: [
        { title: 'AI agent on WhatsApp', description: 'Answers customer questions, collects leads and books orders 24/7' },
        { title: 'Meta lead ads', description: 'Connect Facebook and Instagram ads directly with instant response' },
        { title: 'Automations & Studio', description: 'Automated follow-ups and marketing content generation' },
        { title: 'Expense tracking & GSTR exports', description: 'Complete accounting sheets ready for your tax consultant' },
        { title: 'Advanced team roles', description: 'Granular permissions and team performance reports' },
      ],
      buyUrl: 'https://app.karttik.ai/buy?package=growth',
    },
  ],

  billingNotes: [
    {
      title: 'Priced by the year',
      description: 'Every plan is priced and billed annually in Indian rupees, plus 18% GST.',
    },
    {
      title: 'Free trial on every plan',
      description: 'Test your product for 7 or 14 days with zero risk. You pay only after the trial ends.',
    },
    {
      title: 'Zero commission',
      description: 'Payments through Razorpay deposit straight into your own bank account. We take 0% commission.',
    },
    {
      title: 'Meta WhatsApp charges',
      description: 'WhatsApp conversation charges are billed directly by Meta through your WhatsApp Business Account.',
    },
  ],

  faqs: [
    {
      id: 'gst',
      question: 'Is GST included in the price?',
      answer: 'No. Every price is in rupees before GST, and 18% GST is added when you pay: Clinic Basic, for example, is ₹11,999 a year + GST. You buy from Magizh NexGen Technologies, GSTIN 33EACPR6502N1ZH, and get a GST invoice by email for every payment.',
    },
    {
      id: 'billing-frequency',
      question: 'Are plans billed monthly or yearly?',
      answer: 'Yearly. Every plan is priced and billed by the year, in rupees plus GST. After the free trial, Razorpay takes the year’s payment by auto-debit, and the plan renews the same way each year until you cancel. Each plan shows its yearly price, the users it includes and, with the AI agent, its AI credits.',
    },
    {
      id: 'trial-terms',
      question: 'How does the free trial work?',
      answer: 'You pay nothing until it ends. You approve auto-debit with Razorpay when you start, and the first payment is taken when the trial ends. Trials run 7 days on Clinic, 7 on Coaching, 7 on Turf, 14 on Real Estate, 14 on Gym, 14 on Salon and 14 on Field Service. Cancel before the end and you pay nothing.',
    },
    {
      id: 'whatsapp-meta',
      question: 'Are WhatsApp message charges included?',
      answer: 'No. Karttik AI uses Meta’s official WhatsApp Business Platform, and Meta bills its message charges to your own WhatsApp Business account, at Meta’s rates, separately from your Karttik AI plan. Meta’s rates depend on the kind of message and the country.',
    },
    {
      id: 'ai-credits',
      question: 'What are AI credits, and how many come with a plan?',
      answer: 'AI credits pay for the AI agent’s work, in rupees. Every plan with the AI agent includes free credits — a month’s or a year’s worth, shown on each plan. If you run out, you can top up credits at any time.',
    },
    {
      id: 'upgrade-downgrade',
      question: 'Can I upgrade my plan later?',
      answer: 'Yes. You can upgrade from Basic to Growth at any time. The unused portion of your existing subscription is credited pro-rata toward your new plan.',
    },
  ],
};


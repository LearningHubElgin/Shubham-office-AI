// Centralized brand and company configuration
// Easy to modify brand, company, contact details, or policy text across all pages.
export const brandConfig = {
  brandName: 'Karttik AI',
  companyName: 'MnT Future',
  legalEntity: 'Magizh NexGen Technologies',
  founder: 'Udhayaseelan Renganathan',
  founderLinkedIn: 'https://www.linkedin.com/in/udhayaseelan-renganathan/',
  address: '3/501, Subash Street, Muneeswarar Nagar, Iyer Bungalow, Madurai - 625014, Tamil Nadu, India',
  addressStreet: '3/501, Subash Street, Muneeswarar Nagar, Iyer Bungalow',
  addressCity: 'Madurai',
  addressRegion: 'Tamil Nadu',
  addressPostalCode: '625014',
  addressCountry: 'IN',
  gstin: '33EACPR6502N1ZH',
  year: '2026',
  tagline: 'Run your whole business on one app, made for your industry — one platform, one product for each trade.',
  headquarters: 'Madurai, Tamil Nadu, India',
  phone: '+91 93486 33365',
  phoneFormatted: '+91 93486 33365',
  phoneTel: 'tel:+919348633365',
  email: 'info@mntfuture.com',
  whatsappUrl: 'https://wa.me/919348633365?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20Karttik%20AI.',
  loginUrl: '/app/login',
  appLoginUrl: '/app/login',
  appSignupUrl: '/app/signup',
  appDashboardUrl: '/app/',
  deleteAccountUrl: 'https://app.karttik.ai/delete-account',
  companySiteUrl: 'https://mntfuture.com',
  logos: {
    dark: '/logo-wordmark.png',
    light: '/logo-white-wordmark.png',
    icon: '/logo.png',
  },
  copyrightText: '© 2026 Magizh NexGen Technologies. Karttik AI is a product of MnT Future.',
  madeInText: 'Made in Madurai, for businesses across India.',
};

export const allProductsNavList = [
  { name: 'Clinic', fullName: 'Karttik AI – Clinic', id: 'clinic', route: '/clinics/', color: '#11a297', desc: 'Appointments, patients, prescriptions, billing and an AI front desk — in one app.' },
  { name: 'Coaching Institute', fullName: 'Karttik AI – Coaching Institute', id: 'coaching', route: '/coaching/', color: '#7357ff', desc: 'Admissions, batches, attendance, fees and an AI counsellor — in one app.' },
  { name: 'Real Estate', fullName: 'Karttik AI – Real Estate', id: 'real-estate', route: '/real-estate/', color: '#e08600', desc: 'Enquiries, site visits, every flat, bookings, payments and brokers — in one app.' },
  { name: 'Gym & Fitness Studio', fullName: 'Karttik AI – Gym & Fitness Studio', id: 'gym', route: '/gyms/', color: '#f0503a', desc: 'Members, check-ins, renewals, PT packs and an AI front desk — in one app.' },
  { name: 'Salon & Spa', fullName: 'Karttik AI – Salon & Spa', id: 'salon', route: '/salons/', color: '#d9468f', desc: 'Front desk, bills, client cards, visit reminders, commission and an AI receptionist — in one app.' },
  { name: 'Field Service & AMC', fullName: 'Karttik AI – Field Service & AMC', id: 'field-service', route: '/field-service/', color: '#16a34a', desc: 'Jobs, technicians, bills on the spot, equipment, AMC contracts and an AI that books jobs — in one app.' },
  { name: 'Turf', fullName: 'Karttik AI – Turf', id: 'turf', route: '/turf/', color: '#65a30d', desc: 'A court board by the hour, peak prices, cash and UPI at the desk, online advance, regular teams and an AI that books slots — in one app.' },
];

export const productsMegaMenu = {
  col1: [
    {
      id: 'clinic',
      fullName: 'Karttik AI – Clinic',
      route: '/clinics/',
      color: '#11a297',
      desc: 'Appointments, patients, prescriptions, billing and an AI front desk — in one app.'
    },
    {
      id: 'real-estate',
      fullName: 'Karttik AI – Real Estate',
      route: '/real-estate/',
      color: '#e08600',
      desc: 'Enquiries, site visits, every flat, bookings, payments and brokers — in one app.'
    },
    {
      id: 'salon',
      fullName: 'Karttik AI – Salon & Spa',
      route: '/salons/',
      color: '#d9468f',
      desc: 'Front desk, bills, client cards, visit reminders, commission and an AI receptionist — in one app.'
    },
    {
      id: 'turf',
      fullName: 'Karttik AI – Turf',
      route: '/turf/',
      color: '#65a30d',
      desc: 'A court board by the hour, peak prices, cash and UPI at the desk, online advance, regular teams and an AI that books slots — in one app.'
    }
  ],
  col2: [
    {
      id: 'coaching',
      fullName: 'Karttik AI – Coaching Institute',
      route: '/coaching/',
      color: '#7357ff',
      desc: 'Admissions, batches, attendance, fees and an AI counsellor — in one app.'
    },
    {
      id: 'gym',
      fullName: 'Karttik AI – Gym & Fitness Studio',
      route: '/gyms/',
      color: '#f0503a',
      desc: 'Members, check-ins, renewals, PT packs and an AI front desk — in one app.'
    },
    {
      id: 'field-service',
      fullName: 'Karttik AI – Field Service & AMC',
      route: '/field-service/',
      color: '#16a34a',
      desc: 'Jobs, technicians, bills on the spot, equipment, AMC contracts and an AI that books jobs — in one app.'
    }
  ]
};

export const comingSoonList = [
  'Wholesale & Distribution',
  'E-Commerce',
  'Restaurant & Retail',
];

export const comingSoonChips = [
  { name: 'Wholesale & Distribution', icon: 'Truck' },
  { name: 'E-Commerce', icon: 'ShoppingCart' },
  { name: 'Restaurant & Retail', icon: 'Utensils' },
];


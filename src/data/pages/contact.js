import { brandConfig } from '../brandConfig';

export const contactData = {
  title: 'Contact — Karttik AI',
  metaDescription:
    'Talk to the Karttik AI team on WhatsApp, by phone or by email. Book a free 45-minute demo on your own products.',
  eyebrow: 'Contact',
  heading: 'Talk to us',
  lead:
    'Ask a question, or book a free 45-minute demo on your own products. A person from our team replies, usually the same working day.',
  cards: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: brandConfig.phoneFormatted,
      desc: 'The quickest way to reach us, and to book a demo.',
      href: brandConfig.whatsappUrl,
      icon: 'MessageCircle',
      external: true,
      ariaLabel: `WhatsApp ${brandConfig.phoneFormatted}`
    },
    {
      id: 'call',
      label: 'Call',
      value: brandConfig.phoneFormatted,
      desc: 'For sales and for help with your account.',
      href: brandConfig.phoneTel,
      icon: 'Phone',
      external: false,
      ariaLabel: `Call ${brandConfig.phoneFormatted}`
    },
    {
      id: 'email',
      label: 'Email',
      value: brandConfig.email,
      desc: 'For billing, invoices and anything in writing.',
      href: `mailto:${brandConfig.email}`,
      icon: 'Mail',
      external: false,
      ariaLabel: `Email ${brandConfig.email}`
    }
  ],
  company: {
    name: brandConfig.legalEntity,
    address: brandConfig.address,
    gstin: brandConfig.gstin
  },
  links: {
    appLogin: brandConfig.loginUrl,
    deleteAccount: brandConfig.deleteAccountUrl,
    email: brandConfig.email,
    whatsapp: brandConfig.whatsappUrl
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Karttik AI',
    description:
      'Talk to the Karttik AI team on WhatsApp, by phone or by email. Book a free 45-minute demo on your own products.',
    url: 'https://karttik.ai/contact/',
    mainEntity: {
      '@type': 'Organization',
      name: brandConfig.legalEntity,
      brand: {
        '@type': 'Brand',
        name: brandConfig.brandName
      },
      telephone: brandConfig.phone,
      email: brandConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: brandConfig.addressStreet,
        addressLocality: brandConfig.addressCity,
        addressRegion: brandConfig.addressRegion,
        postalCode: brandConfig.addressPostalCode,
        addressCountry: brandConfig.addressCountry
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: brandConfig.phone,
          contactType: 'sales',
          availableLanguage: ['English', 'Tamil', 'Hindi']
        },
        {
          '@type': 'ContactPoint',
          email: brandConfig.email,
          contactType: 'billing',
          availableLanguage: ['English', 'Tamil', 'Hindi']
        }
      ]
    }
  }
};


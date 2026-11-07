import React from 'react';
import ContentPage from '../components/ContentPage';
import ContactCards from '../components/ContactCards';
import { contactData } from '../data/pages/contact';

export default function ContactPage({
  onNavigateHome,
  onNavigateRoute,
  onOpenDemo,
  onOpenTrial,
  onOpenPolicyModal
}) {
  return (
    <ContentPage
      title={contactData.title}
      metaDescription={contactData.metaDescription}
      eyebrow={contactData.eyebrow}
      heading={contactData.heading}
      lead={contactData.lead}
      activePage="contact"
      jsonLd={contactData.jsonLd}
      wideContent={<ContactCards cards={contactData.cards} />}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onOpenPolicyModal={onOpenPolicyModal}
    >
      <div className="space-y-6">
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold text-[#06122e] tracking-tight mt-8 mb-4">
          Where we are
        </h2>

        {/* Address box */}
        <div className="my-5 p-5 sm:p-6 rounded-[18px] bg-white border border-[#e5e9f0] shadow-xs">
          <address className="not-italic space-y-1 text-[15px] sm:text-[16px] text-[#202c45] font-normal leading-relaxed">
            <p className="font-semibold text-[#06122e]">
              {contactData.company.name}
            </p>
            <p>
              {contactData.company.address}
            </p>
            <p className="text-slate-600">
              GSTIN: {contactData.company.gstin}
            </p>
          </address>
        </div>

        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold text-[#06122e] tracking-tight mt-10 mb-4">
          Already a customer?
        </h2>
        <p className="mb-4">
          Sign in at{' '}
          <a
            href={contactData.links.appLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            app.isuite.ai
          </a>
          . For help with your account, message us on WhatsApp from the number your company registered, or write to{' '}
          <a
            href={`mailto:${contactData.links.email}`}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            {contactData.links.email}
          </a>
          .
        </p>
        <p className="mb-4">
          To delete your account or your data, use the{' '}
          <a
            href={contactData.links.deleteAccount}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            account deletion page
          </a>
          .
        </p>
      </div>
    </ContentPage>
  );
}

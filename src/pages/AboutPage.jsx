import React from 'react';
import ContentPage from '../components/ContentPage';
import { aboutData } from '../data/pages/about';
import { brandConfig } from '../data/brandConfig';

export default function AboutPage({
  onNavigateHome,
  onNavigateRoute,
  onOpenDemo,
  onOpenTrial,
  onOpenPolicyModal
}) {
  const handleLink = (e, path) => {
    if (onNavigateRoute) {
      e.preventDefault();
      onNavigateRoute(path);
    }
  };

  return (
    <ContentPage
      title={aboutData.title}
      metaDescription={aboutData.metaDescription}
      eyebrow={aboutData.eyebrow}
      heading={aboutData.heading}
      lead={aboutData.lead}
      activePage="about"
      jsonLd={aboutData.jsonLd}
      onNavigateHome={onNavigateHome}
      onNavigateRoute={onNavigateRoute}
      onOpenDemo={onOpenDemo}
      onOpenTrial={onOpenTrial}
      onOpenPolicyModal={onOpenPolicyModal}
    >
      <div className="space-y-6">
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold text-[#06122e] tracking-tight mt-8 mb-4">
          Why we built it
        </h2>
        <p className="mb-4">
          Most business software sold in India was designed for desk workers in the US or Europe: complex forms, endless dropdowns, and screens that only fit on a laptop.
        </p>
        <p className="mb-4">
          Small and mid-sized businesses don’t work that way. The owner is on a scooter. The front desk is juggling three people in line and an enquiry on WhatsApp. A lead that doesn’t get answered in three minutes goes to the competitor down the road.
        </p>
        <p className="mb-4">
          We built iSuite AI to solve that one problem: every lead answered instantly, every follow-up on time, and every booking, fee or token tracked without a spreadsheet. We started with{' '}
          <a
            href="/clinics/"
            onClick={(e) => handleLink(e, '/clinics/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            clinics
          </a>
          , then added{' '}
          <a
            href="/coaching/"
            onClick={(e) => handleLink(e, '/coaching/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            coaching institutes
          </a>
          ,{' '}
          <a
            href="/real-estate/"
            onClick={(e) => handleLink(e, '/real-estate/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            real estate
          </a>
          ,{' '}
          <a
            href="/gyms/"
            onClick={(e) => handleLink(e, '/gyms/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            gyms
          </a>
          ,{' '}
          <a
            href="/salons/"
            onClick={(e) => handleLink(e, '/salons/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            salons
          </a>
          ,{' '}
          <a
            href="/field-service/"
            onClick={(e) => handleLink(e, '/field-service/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            field service
          </a>{' '}
          and{' '}
          <a
            href="/turf/"
            onClick={(e) => handleLink(e, '/turf/')}
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            turfs
          </a>{' '}
          — because each trade needs slightly different fields, but every trade needs to answer on WhatsApp.
        </p>

        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold text-[#06122e] tracking-tight mt-10 mb-4">
          What we believe
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <b>Every customer deserves an answer,</b> even when the shop is closed.
          </li>
          <li>
            <b>Software is only useful if your team actually uses it,</b> so iSuite AI is simple, and works on the phone.
          </li>
          <li>
            <b>AI should know when to ask.</b> Ours checks with you before it guesses, and hands over to a person when needed.
          </li>
          <li>
            <b>Your data is yours.</b> It stays in India, and we never sell it.
          </li>
        </ul>

        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold text-[#06122e] tracking-tight mt-10 mb-4">
          The company
        </h2>
        <p className="mb-4">
          MnT Future was founded by{' '}
          <a
            href="https://www.linkedin.com/in/udhayaseelan-renganathan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            Udhayaseelan Renganathan
          </a>
          , who leads iSuite AI from Madurai.
        </p>

        {/* Semantic address box */}
        <div className="my-5 p-5 sm:p-6 rounded-[18px] bg-white border border-[#e5e9f0] shadow-xs">
          <address className="not-italic space-y-1 text-[15px] sm:text-[16px] text-[#202c45] font-normal leading-relaxed">
            <p className="font-semibold text-[#06122e]">
              Magizh NexGen Technologies
            </p>
            <p>
              3/501, Subash Street, Muneeswarar Nagar, Iyer Bungalow, Madurai - 625014, Tamil Nadu, India
            </p>
            <p className="text-slate-600">
              GSTIN: 33EACPR6502N1ZH
            </p>
            <p className="pt-1">
              <a href="tel:+919348633365" className="text-[#1663ff] hover:underline">
                +91 93486 33365
              </a>{' '}
              ·{' '}
              <a href="mailto:info@mntfuture.com" className="text-[#1663ff] hover:underline">
                info@mntfuture.com
              </a>
            </p>
          </address>
        </div>

        <p className="mb-2">
          MnT Future’s own website is{' '}
          <a
            href="https://mntfuture.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1663ff] underline hover:text-blue-700 font-medium"
          >
            mntfuture.com
          </a>
          .
        </p>
        <p className="text-sm text-slate-500 font-normal">
          iSuite AI is not iSuite ERP or aisuite, and is not connected with either.
        </p>
      </div>
    </ContentPage>
  );
}

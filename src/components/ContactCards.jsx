import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const iconLookup = {
  MessageCircle,
  Phone,
  Mail
};

export default function ContactCards({ cards = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal in">
      {cards.map((card, idx) => {
        const IconComponent = iconLookup[card.icon] || Mail;
        const staggerDelay = `${0.06 * (idx + 1)}s`;

        return (
          <a
            key={card.id}
            href={card.href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            aria-label={card.ariaLabel}
            style={{ animationDelay: staggerDelay }}
            className="group block p-7 rounded-[28px] bg-white border border-[#e5e9f0] shadow-xs hover:border-[#cad2e0] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 text-left no-underline focus-visible:outline-2 focus-visible:outline-[#1663ff] focus-visible:outline-offset-2"
          >
            {/* Blue Icon */}
            <div className="text-[#1663ff] mb-2 transition-transform duration-200 group-hover:scale-105">
              <IconComponent className="w-[22px] h-[22px] stroke-[2.2]" />
            </div>

            {/* Label */}
            <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#808ea3] mb-1">
              {card.label}
            </div>

            {/* Value */}
            <b className="block text-[19px] font-semibold text-[#06122e] leading-snug break-all sm:break-normal">
              {card.value}
            </b>

            {/* Description */}
            <p className="mt-1.5 text-[15px] leading-[1.45] text-[#596780] font-normal">
              {card.desc}
            </p>
          </a>
        );
      })}
    </div>
  );
}


import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Stethoscope,
  GraduationCap,
  Building2,
  Dumbbell,
  Scissors,
  Wrench,
  LandPlot,
  Truck,
  ShoppingCart,
  Utensils,
  ArrowRight
} from 'lucide-react';
import { allProductsNavList, comingSoonChips } from '../data/brandConfig';

const iconLookup = {
  clinic: Stethoscope,
  coaching: GraduationCap,
  'real-estate': Building2,
  gym: Dumbbell,
  salon: Scissors,
  'field-service': Wrench,
  turf: LandPlot,
};

export default function ProductsMegaMenu({
  isOpen,
  onClose,
  anchorRef,
  currentProductId,
  onSelectProduct
}) {
  const menuRef = useRef(null);
  const [style, setStyle] = useState({
    position: 'fixed',
    top: '64px',
    left: '16px',
    width: 'min(620px, calc(100vw - 24px))',
    opacity: 0,
    pointerEvents: 'none',
  });

  const updatePosition = () => {
    if (!anchorRef?.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const pad = 12; // 12px viewport gutter

    const maxW = Math.max(280, screenW - (pad * 2));
    const menuW = Math.min(620, maxW);

    // Initial preferred alignment:
    // If anchor is in the right half of the screen (e.g. product pages), align to right of anchor
    // Otherwise align to left of anchor
    let left = rect.left;
    if (rect.left + rect.width / 2 > screenW / 2) {
      left = rect.right - menuW;
    }

    // Right boundary clamp
    if (left + menuW > screenW - pad) {
      left = screenW - pad - menuW;
    }

    // Left boundary clamp: STRICTLY PREVENTS CUTOFF ON SMALL SCREENS OR LEFT EDGE
    if (left < pad) {
      left = pad;
    }

    const top = rect.bottom + 8;
    const maxHeight = Math.max(240, screenH - top - 16);

    setStyle({
      position: 'fixed',
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      width: `${Math.round(menuW)}px`,
      maxWidth: `${maxW}px`,
      maxHeight: `${Math.round(maxHeight)}px`,
      opacity: 1,
      pointerEvents: 'auto',
    });
  };

  useLayoutEffect(() => {
    if (!isOpen) return;
    updatePosition();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleScrollOrResize = () => {
      updatePosition();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handlePointerDown = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    window.addEventListener('resize', handleScrollOrResize);
    window.addEventListener('scroll', handleScrollOrResize, true);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('resize', handleScrollOrResize);
      window.removeEventListener('scroll', handleScrollOrResize, true);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  const handleProductClick = (e, product) => {
    e.preventDefault();
    onClose();
    if (onSelectProduct) {
      onSelectProduct(product.route, product.id);
    } else {
      window.location.href = product.route;
    }
  };

  const handleSoonClick = (e) => {
    e.preventDefault();
    onClose();
    if (onSelectProduct) {
      onSelectProduct('/#soon', 'soon');
    } else {
      window.location.href = '/#soon';
    }
  };

  const handleAllPlansClick = (e) => {
    e.preventDefault();
    onClose();
    if (onSelectProduct) {
      onSelectProduct('/pricing/', 'pricing');
    } else {
      window.location.href = '/pricing/';
    }
  };

  return createPortal(
    <div
      ref={menuRef}
      style={style}
      className="z-[9999] rounded-[24px] bg-white text-[#06122e] border border-slate-200/90 shadow-[0_24px_60px_-28px_rgba(0,12,43,0.38),0_6px_18px_-10px_rgba(0,12,43,0.2)] p-2.5 sm:p-3 overflow-y-auto animate-drop text-left"
    >
      {/* 2-column grid of products (collapses to 1 column on screens < 540px) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {allProductsNavList.map((p) => {
          const ProdIcon = iconLookup[p.id] || Stethoscope;
          const isCurrent = currentProductId && p.id === currentProductId;

          return (
            <a
              key={p.id}
              href={p.route}
              onClick={(e) => handleProductClick(e, p)}
              className={`p-2.5 sm:p-3 rounded-[16px] transition-all flex items-start gap-3 text-decoration-none group ${
                isCurrent
                  ? 'bg-amber-50/70 border border-amber-200/60 font-semibold'
                  : 'hover:bg-[#f6f7f9] border border-transparent'
              }`}
            >
              {/* Product squircle icon */}
              <div
                className="w-[38px] h-[38px] rounded-[12px] flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:scale-105"
                style={{ backgroundColor: p.color }}
              >
                <ProdIcon className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Title & Description */}
              <div className="min-w-0 flex-1">
                <div className="text-[14.5px] font-semibold text-[#06122e] leading-snug">
                  {p.fullName}
                </div>
                <div className="text-[12.5px] sm:text-[13px] text-[#596780] leading-[1.4] mt-0.5 line-clamp-2 font-normal">
                  {p.desc}
                </div>
              </div>
            </a>
          );
        })}

        {/* Coming Soon row */}
        <div className="col-span-1 sm:col-span-2 pt-2.5 mt-1 border-t border-[#e5e9f0]">
          <div className="text-[10.5px] font-semibold text-[#596780] tracking-[0.14em] uppercase px-1 mb-2">
            COMING SOON
          </div>
          <div className="flex flex-wrap items-center gap-2 px-1">
            {comingSoonChips.map((cs) => {
              const CsIcon =
                cs.icon === 'Truck'
                  ? Truck
                  : cs.icon === 'ShoppingCart'
                  ? ShoppingCart
                  : Utensils;

              return (
                <a
                  key={cs.name}
                  href="/#soon"
                  onClick={handleSoonClick}
                  className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full bg-[#f6f7f9] text-[12.5px] text-[#596780] hover:text-[#06122e] hover:bg-slate-100 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#e7ebf3] flex items-center justify-center text-[#596780]">
                    <CsIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>{cs.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom row: Plans and pricing for every product */}
        <div className="col-span-1 sm:col-span-2 mt-1.5 pt-1">
          <a
            href="/pricing/"
            onClick={handleAllPlansClick}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[14px] bg-[#f6f7f9] text-[13.5px] font-medium text-[#202c45] hover:text-[#1663ff] hover:bg-blue-50/60 transition-colors"
          >
            <span>Plans and pricing for every product</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}


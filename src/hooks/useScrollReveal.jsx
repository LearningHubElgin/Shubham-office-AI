import React, { useEffect } from 'react';

/**
 * Custom hook for smooth scroll-reveal animations matching https://isuite.ai
 * - Observer threshold: 0.12
 * - rootMargin: '0px 0px -40px 0px'
 * - Single-trigger reveal (.in class added once)
 * - Safe against route transitions and anchor jumps (#pricing, #faq)
 * - Zero CLS, supports prefers-reduced-motion and no-js fallback
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const selector =
      '.reveal:not(.in), .reveal-fade:not(.in), .reveal-left:not(.in), .reveal-right:not(.in), .reveal-scale:not(.in)';

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('in');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const scanAndObserve = () => {
      const elements = document.querySelectorAll(selector);
      const hash = window.location.hash;
      let targetSection = null;

      if (hash && hash.length > 1) {
        try {
          targetSection = document.querySelector(hash);
        } catch (e) {
          // Invalid selector fallback
        }
      }

      elements.forEach((el) => {
        // If element is inside an active hash anchor, reveal immediately
        if (targetSection && (targetSection === el || targetSection.contains(el))) {
          el.classList.add('in');
          return;
        }

        // If element is already in the viewport on mount, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('in');
        } else {
          observer.observe(el);
        }
      });
    };

    // Immediate scan + short tick to allow layout calculation
    scanAndObserve();
    const frameId = requestAnimationFrame(scanAndObserve);
    const timeoutId = setTimeout(scanAndObserve, 80);

    // Watch for dynamic DOM insertions
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    // Anchor navigation handler
    const onHashChange = () => {
      const h = window.location.hash;
      if (h && h.length > 1) {
        try {
          const target = document.querySelector(h);
          if (target) {
            target
              .querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale')
              .forEach((child) => child.classList.add('in'));
            if (target.classList.contains('reveal')) {
              target.classList.add('in');
            }
          }
        } catch (e) {}
      }
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, deps);
}

/**
 * Reusable wrapper component for declarative scroll reveals
 */
export function Reveal({
  children,
  variant, // 'fade' | 'left' | 'right' | 'scale'
  delay,
  stagger = false,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const variantClass = variant ? `reveal-${variant}` : 'reveal';
  const staggerClass = stagger ? 'stagger' : '';
  const style = delay ? { ...props.style, '--reveal-delay': `${delay}ms` } : props.style;

  return (
    <Component className={`${variantClass} ${staggerClass} ${className}`.trim()} style={style} {...props}>
      {children}
    </Component>
  );
}


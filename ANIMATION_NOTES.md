# Animation & Motion Notes (Studied from https://isuite.ai)

Direct extraction and inspection of motion architecture from `https://isuite.ai/` and `https://isuite.ai/coaching/` via `assets/css/site.css` and `assets/js/site.js`.

---

## 1. Global Timing & Easing Token
- **Easing Curve**: `var(--ease)` = `cubic-bezier(0.22, 1, 0.36, 1)` (smooth deceleration with natural overshoot damping)
- **CSS Pre-check / Hydration Safety**: 
  - `<html class="no-js">` transformed immediately to `<html class="js">` upon script execution.
  - Without JS, all content remains 100% visible by default (`opacity: 1`, `transform: none`).

---

## 2. Scroll-Reveal Mechanism (`.reveal`)
- **Initial State (`.js .reveal`)**:
  - `opacity: 0;`
  - `transform: translateY(24px);`
  - `transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);`
- **Active State (`.js .reveal.in`)**:
  - `opacity: 1;`
  - `transform: none;`
- **IntersectionObserver Configuration**:
  - `threshold: 0.12` (triggers when ~12% of the element enters viewport)
  - `rootMargin: '0px 0px -40px 0px'` (triggers slightly before reaching full viewport bottom)
  - **Single Execution**: `rio.unobserve(e.target)` is called immediately upon intersection (elements animate once).
- **Target Elements on Live Site**:
  - Section headers (`.head.reveal` containing eyebrow, h2, subtext)
  - Fact grid wrapper (`.glance-wrap.reveal`)
  - Features grid (`.inside.reveal`)
  - How it works alternating rows (`.frow.reveal`)
  - Four numbers morning dashboard (`.kboard.reveal`)
  - Comparison table (`.compare.reveal`)
  - Clinic/trade chips row (`.chips.made.reveal`)
  - Safety grid cards (`.safe-grid.reveal`)
  - FAQ accordion (`.faq.reveal`)
  - CTA banner (`.cta-band.reveal` / `.closing.reveal`)
  - Family product grid (`.more-grid.reveal`)
  - Tabbed showcase (`.showcase.reveal`)
  - Coming soon grid (`.soon-grid.reveal`)
  - Matrix breakdown (`.matrix.reveal`)
  - AI Showcase bento (`.bento.reveal`)
  - 3-step workflow (`.steps.reveal`)

---

## 3. Hero Entrance Animation (`.rise`)
- **Mechanism**: CSS `@keyframes rise` triggered on page load (not scroll).
- **Keyframes**:
  ```css
  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
  }
  ```
- **Timing & Easing**:
  - Duration: `0.9s`
  - Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Fill Mode: `both`
- **Stagger Delays (`.js .rise > *`)**:
  - Element 1 (Eyebrow Badge): `0.00s`
  - Element 2 (H1 Headline): `0.07s`
  - Element 3 (Subtitle Paragraph): `0.14s`
  - Element 4 (Action CTA Buttons): `0.21s`
  - Element 5 (Trust Checkmarks / Chips): `0.28s`
  - Element 6+ (Any further children): `0.35s`

---

## 4. Chat Simulation & Step Sequence (`[data-seq]`)
- **Keyframes (`arrive`)**:
  ```css
  @keyframes arrive {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
  }
  ```
- **Step Arrival**:
  - New step item (`[data-step].on`): `animation: arrive 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;`
  - Transient typing dots (`[data-transient]`): `.gone { display: none; }` when subsequent message arrives.
- **Floating Cards**:
  - `.floater[data-step]`: `transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);`
  - `.floater[data-step].on`: `opacity: 1; transform: none;`
- **Loop Fade Transition**:
  - After 4.2s idle at completion, whole sequence container adds `.seq-out` (`opacity: 0; transition: opacity 0.6s var(--ease);`).
  - Resets and restarts after 700ms.

---

## 5. Non-Scroll Interactions
- **Top Sticky Navbar**:
  - Toggles `.stuck` class when `window.scrollY > 24px` via `requestAnimationFrame`.
  - Smooth backdrop-blur and border/background color transition (`0.3s ease`).
- **Mega-Menu Dropdown**:
  - Desktop: `@keyframes drop { from { opacity: 0; transform: translate(-50%, -6px); } }` (`0.22s var(--ease)`)
  - Product Page: `@keyframes drop-right { from { opacity: 0; transform: translateY(-6px); } }` (`0.22s var(--ease)`)
- **Typing Indicator**:
  - `@keyframes blink` pulsing 3 dots between `opacity: 0.3` and `opacity: 1`, translateY `0` to `-4px`.
- **Card / Button Hovers**:
  - Fast, responsive hover state transitions: `0.15s - 0.2s cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 6. Accessibility & Reduced Motion
- `@media (prefers-reduced-motion: reduce)`:
  - Disables all animations and transitions (`animation: none !important; transition: none !important;`).
  - All `.reveal` elements immediately set to `opacity: 1; transform: none;`.
  - Chat sequences render all messages instantly without loop delay.


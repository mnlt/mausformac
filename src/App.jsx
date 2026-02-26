import React, { useEffect, useRef, useState } from 'react';
import { Rat } from 'lucide-react';

const DMG_URL = "/maus/releases/Maus-2.0.3.dmg";
const PRO_URL = "https://mausformac.lemonsqueezy.com/checkout/buy/8c579c75-5fe5-408d-90d6-992f5bf791f5"; // update with real URL

const APPLE_PATH = "M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.3-105.9-207.6-105.9-328.2 0-193 125.7-295.3 249.4-295.3 65.7 0 120.5 43.1 161.7 43.1 39.2 0 100.4-45.8 175.1-45.8 28.3 0 130 2.6 197.3 99.6zm-234.1-90.1c31.3-37.1 53.7-88.7 53.7-140.3 0-7.1-.6-14.3-1.9-20.1-51.2 1.9-111.6 34.1-148.4 76.8-26.4 30-55.1 81.6-55.1 134 0 7.8.6 15.7 1.3 18.2 2.6.6 6.4 1.3 10.2 1.3 45.9 0 103.7-30.7 140.2-69.9z";

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor">
    <path d={APPLE_PATH} />
  </svg>
);

const DownloadCTA = ({ className = "cta-primary" }) => (
  <a href={DMG_URL} className={className}>
    <AppleIcon />
    Free Download for macOS
  </a>
);

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-toggle">+</span>
      </div>
      <p className="faq-answer">{answer}</p>
    </div>
  );
};

const MausLanding = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="maus-landing">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          background: #FFFFFF;
          color: #37352F;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        ::selection {
          background: #37352F;
          color: #FFFFFF;
        }

        a { text-decoration: none; }

        /* ── Animations ── */
        .fade-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Header ── */
        .maus-header {
          max-width: 860px;
          margin: 0 auto;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .maus-header-icon {
          width: 32px;
          height: 32px;
          background: #37352F;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .maus-header-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #37352F;
          letter-spacing: -0.02em;
        }

        /* ── Hero ── */
        .hero {
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 24px 40px;
          text-align: center;
        }

        .badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid #E8E5E0;
          color: #9B9A97;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          font-family: 'JetBrains Mono', monospace;
        }

        .hero h1 {
          font-size: clamp(30px, 5.2vw, 52px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.035em;
          color: #37352F;
          margin-bottom: 22px;
        }

        .hero h1 .accent {
          color: #9B9A97;
        }

        .hero-paragraph {
          font-size: 17px;
          color: #787774;
          max-width: 520px;
          margin: 0 auto 36px;
          line-height: 1.75;
        }

        .cta-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 30px;
          white-space: nowrap;
          background: #37352F;
          color: #FFFFFF;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          border: none;
        }
        .cta-primary svg {
          flex-shrink: 0;
          position: relative;
          top: -1px;
        }
        .cta-primary:hover {
          transform: translateY(-1px);
          background: #2F2D28;
          box-shadow: 0 4px 16px rgba(55, 53, 47, 0.12);
          color: #FFFFFF;
        }

        .cta-secondary {
          display: inline-block;
          padding: 13px 30px;
          background: transparent;
          color: #37352F;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #D3D1CB;
          transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
        }
        .cta-secondary:hover {
          transform: translateY(-1px);
          border-color: #37352F;
          background: #F7F6F3;
        }

        .cta-subtext {
          font-size: 12px;
          color: #B4B3AF;
          font-family: 'JetBrains Mono', monospace;
        }

        .hero-image {
          margin-top: 44px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-image-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: #F7F6F3;
          border-radius: 14px;
          border: 1px solid #E8E5E0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B4B3AF;
          font-size: 13px;
          font-family: 'JetBrains Mono', monospace;
          padding: 20px;
          text-align: center;
        }

        /* ── Proof bar ── */
        .proof-bar {
          padding: 44px 24px;
          border-top: 1px solid #F1F0EC;
          border-bottom: 1px solid #F1F0EC;
          position: relative;
        }
        .proof-inner {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          padding: 0 48px;
        }
        .proof-quote {
          font-size: clamp(20px, 2.8vw, 26px);
          font-style: normal;
          color: #787774;
          line-height: 1.6;
          border: none;
          margin: 0;
          padding: 0;
        }
        .proof-quote strong {
          color: #37352F;
          font-style: normal;
        }
        .proof-inner::before {
          content: "\\201C";
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 64px;
          line-height: 1;
          color: #E8E5E0;
          font-family: Georgia, serif;
          pointer-events: none;
        }

        /* ── Sections ── */
        .section {
          padding: 72px 24px;
        }
        .section-inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .maus-landing h2 {
          font-size: clamp(22px, 3.5vw, 34px);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: #37352F;
          margin-bottom: 16px;
        }

        .body-text {
          font-size: 16px;
          color: #787774;
          line-height: 1.75;
          margin-bottom: 14px;
          max-width: 580px;
        }

        /* ── Problem ── */
        .problem-section {
          background: #F7F6F3;
          position: relative;
          overflow: hidden;
        }
        .problem-section .section-inner {
          position: relative;
          padding-left: 0;
          border-left: none;
          max-width: 640px;
        }
        .problem-section h2 {
          color: #37352F;
          font-size: clamp(32px, 5vw, 52px);
          margin-bottom: 36px;
        }
        .problem-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .problem-line {
          font-size: clamp(17px, 2.2vw, 20px);
          color: #9B9A97;
          line-height: 1.6;
        }
        .problem-line.emphasis {
          color: #37352F;
          font-weight: 600;
          font-size: clamp(19px, 2.5vw, 24px);
        }

        /* ── Steps ── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 28px;
          margin-top: 36px;
        }
        .step {
          position: relative;
        }
        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #37352F;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 14px;
          font-family: 'JetBrains Mono', monospace;
        }
        .step-highlight {
          text-decoration: underline;
          text-decoration-color: #E8853A;
          text-decoration-thickness: 3px;
          text-underline-offset: 4px;
        }

        .step h3 {
          font-size: 16px;
          font-weight: 600;
          color: #37352F;
          margin-bottom: 6px;
        }
        .step p {
          font-size: 14px;
          color: #9B9A97;
          line-height: 1.65;
        }
        .steps-grid .step:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 16px;
          right: -14px;
          width: 28px;
          height: 2px;
          background: linear-gradient(90deg, #D3D1CB, transparent);
          pointer-events: none;
        }
        @media (max-width: 700px) {
          .steps-grid .step::after { display: none; }
        }

        /* ── Features ── */
        .features-section {
          background: #F7F6F3;
          position: relative;
        }
        .features-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#D3D1CB 0.7px, transparent 0.7px);
          background-size: 24px 24px;
          opacity: 0.35;
          pointer-events: none;
        }
        .features-section .section-inner {
          position: relative;
          z-index: 1;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 36px;
        }
        .feature-card {
          padding: 24px 22px;
          background: #FFFFFF;
          border-radius: 10px;
          border: 1px solid #E8E5E0;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .feature-card:hover {
          border-color: #D3D1CB;
          box-shadow: 0 2px 12px rgba(55, 53, 47, 0.06);
          transform: translateY(-2px);
        }
        .feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #F7F6F3;
          border: 1px solid #E8E5E0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .feature-icon svg {
          width: 18px;
          height: 18px;
          stroke: #37352F;
          stroke-width: 1.8;
          fill: none;
        }
        .feature-card h3 {
          font-size: 15px;
          font-weight: 600;
          color: #37352F;
          margin-bottom: 6px;
        }
        .feature-card p {
          font-size: 14px;
          color: #9B9A97;
          line-height: 1.6;
        }

        /* ── Testimonials ── */
        .testimonials-section {
          background: #FFFFFF;
          position: relative;
        }
        .testimonials-section h2 {
          color: #37352F;
          text-align: center;
          margin-bottom: 48px;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }
        .testimonial-card {
          padding: 36px 32px;
          position: relative;
          border-bottom: 1px solid #F1F0EC;
          border-right: 1px solid #F1F0EC;
        }
        .testimonial-card:nth-child(2n) {
          border-right: none;
        }
        .testimonial-card:nth-last-child(-n+2) {
          border-bottom: none;
        }
        .testimonial-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 16px;
        }
        .testimonial-star {
          color: #F5C518;
          font-size: 14px;
        }
        .testimonial-card p {
          font-size: 15px;
          color: #37352F;
          line-height: 1.7;
          font-style: normal;
        }
        @media (max-width: 600px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .testimonial-card {
            border-right: none;
          }
          .testimonial-card:last-child {
            border-bottom: none;
          }
        }

        /* ── Pricing ── */
        .pricing-section {
          background: #F7F6F3;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 36px;
          max-width: 620px;
          margin-left: auto;
          margin-right: auto;
        }
        .pricing-card {
          padding: 32px 26px;
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid #E8E5E0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pricing-card .cta-primary,
        .pricing-card .cta-secondary {
          width: 100%;
          text-align: center;
          justify-content: center;
          font-size: 14px;
          padding: 12px 16px;
        }
        .pricing-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(55, 53, 47, 0.06);
        }
        .pricing-card.pro {
          border: 2px solid #37352F;
          position: relative;
        }
        .pricing-card.pro::before {
          content: "popular";
          position: absolute;
          top: -10px;
          right: 20px;
          padding: 2px 10px;
          background: #37352F;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .pricing-tier {
          font-size: 13px;
          font-weight: 600;
          color: #9B9A97;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
          font-family: 'JetBrains Mono', monospace;
        }
        .pricing-price {
          font-size: 32px;
          font-weight: 700;
          color: #37352F;
          margin-bottom: 22px;
        }
        .pricing-once {
          font-size: 13px;
          font-weight: 400;
          color: #B4B3AF;
        }
        .pricing-list {
          list-style: none;
          margin-bottom: 24px;
          flex: 1;
        }
        .pricing-list li {
          font-size: 14px;
          color: #787774;
          margin-bottom: 9px;
          line-height: 1.5;
        }
        .pricing-list li::before {
          content: "\\2713";
          color: #37352F;
          font-weight: 600;
          margin-right: 8px;
        }

        /* ── FAQ ── */
        .faq-grid {
          margin-top: 28px;
          max-width: 600px;
        }
        .faq-item {
          border-bottom: 1px solid #E8E5E0;
          padding: 18px 0;
          cursor: pointer;
          user-select: none;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          color: #37352F;
          gap: 16px;
        }
        .faq-toggle {
          font-size: 18px;
          color: #B4B3AF;
          flex-shrink: 0;
          font-family: 'JetBrains Mono', monospace;
          transition: transform 0.25s ease, color 0.2s ease;
        }
        .faq-item:hover .faq-toggle {
          color: #37352F;
        }
        .faq-answer {
          margin-top: 0;
          font-size: 14px;
          color: #9B9A97;
          line-height: 1.7;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, margin-top 0.35s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          margin-top: 10px;
          opacity: 1;
        }
        .faq-item.open .faq-toggle {
          transform: rotate(45deg);
        }

        /* ── Final CTA ── */
        .final-cta {
          padding: 88px 24px;
          text-align: center;
          background: #FFFFFF;
          border-top: 1px solid #F1F0EC;
          position: relative;
        }
        .final-cta::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(55, 53, 47, 0.03), transparent 70%);
          pointer-events: none;
        }
        .final-cta h2 {
          text-align: center;
          position: relative;
        }
        .final-cta .body-text {
          margin: 0 auto 28px;
          text-align: center;
          max-width: 440px;
          position: relative;
        }

        /* ── Footer ── */
        .maus-footer {
          padding: 28px 24px;
          border-top: 1px solid #F1F0EC;
          text-align: center;
        }
        .maus-footer p {
          font-size: 13px;
          color: #B4B3AF;
        }
        .maus-footer a {
          color: #9B9A97;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .maus-footer a:hover {
          color: #37352F;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .hero { padding: 56px 20px 28px; }
          .section { padding: 56px 20px; }
          .final-cta { padding: 64px 20px; }
          .cta-row { flex-direction: column; align-items: center; }
          .cta-primary, .cta-secondary { width: 100%; max-width: 300px; text-align: center; }
          .pricing-grid { max-width: 100%; grid-template-columns: 1fr; }
          .problem-section .section-inner { padding-left: 16px; }
        }
      `}</style>

      {/* ─── HEADER ─── */}
      <header className="maus-header">
        <div className="maus-header-icon">
          <Rat size={18} color="#ffffff" />
        </div>
        <span className="maus-header-text">Maus</span>
      </header>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="badge">3MB · No cloud · No fuss</div>
        <h1>
          Appears. Delivers. Gone.<br />
          <span className="accent">Never break your flow.</span>
        </h1>
        <p className="hero-paragraph">
          Maus remembers everything you copy, comes to you right at your cursor, and gets out of your way.
        </p>
        <div className="cta-row">
          <DownloadCTA />
          <a href={PRO_URL} className="cta-secondary">Buy Pro — $6.99</a>
        </div>
        <p className="cta-subtext">macOS 14+ · No account · No trial · Just works</p>

        <div className="hero-image">
  <div className="hero-image-placeholder" style={{ aspectRatio: 'unset', padding: 0 }}>
    <img src="public/main-gif.gif" alt="" style={{ width: '100%', display: 'block', borderRadius: '14px' }} />
  </div>
</div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="proof-bar fade-section">
        <div className="proof-inner">
          <blockquote className="proof-quote">
            {'"'}I{"'"}ve used Alfred, Raycast, PastePal and Maccy.{' '}
            <strong>None come close to how quick-and-easy Maus is.</strong>{'"'}
          </blockquote>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="section problem-section fade-section">
        <div className="section-inner">
          <h2>Stop traveling across your screen 50+ times a day, just to paste.</h2>
          <div className="problem-lines">
            <p className="problem-line">Every time you switch to another window, you break focus.</p>
            <p className="problem-line">A few seconds each time.</p>
            <p className="problem-line">Back to what you were doing.</p>
            <p className="problem-line">A few seconds more.</p>
            <p className="problem-line emphasis">Dozens of times.</p>
            <p className="problem-line emphasis">Every single day.</p>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="section fade-section">
        <div className="section-inner">
          <h2>Three keystrokes. That{"'"}s it.</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Copy things like you always do</h3>
              <p>Maus silently remembers every Cmd+C. Text, images, links, files, colors — everything.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Hit ⌘⇧V and <span className="step-highlight">Maus comes to you</span></h3>
              <p>Right next to your cursor, in whatever app you{"'"}re in. You don{"'"}t switch windows. You don{"'"}t reach for the menubar. Your hands stay where they are.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Find, paste, gone</h3>
              <p>Search, click or keyboard-navigate, paste. Maus disappears. Back to work in under a second.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="section features-section fade-section">
        <div className="section-inner">
          <h2>Small, fast, and stays out of your way</h2>
          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
              </div>
              <h3>Shows up where you are</h3>
              <p>Not a fixed window. Not a menubar popup. Maus opens right at your cursor, in any app.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M6 12h12M6 16h8"/></svg>
              </div>
              <h3>100% keyboard-driven</h3>
              <p>Navigate, search, paste, pin, delete — without ever touching your mouse.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              </div>
              <h3>Multi-paste queue</h3>
              <p>Select multiple items with Cmd+Click, hit Enter, and paste them all in sequence. Magic for forms and spreadsheets.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
              </div>
              <h3>Split text into clips</h3>
              <p>Paste a list or CSV and split it into individual clips. One copy, many pastes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>
              </div>
              <h3>Pin your essentials</h3>
              <p>Email signatures, code snippets, addresses — pinned and always one keystroke away.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
              <h3>Edit before pasting</h3>
              <p>Double-click any clip to edit it. Fix a typo, update a link, trim whitespace.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h3>Everything you copy</h3>
              <p>Text, images, links, files, hex colors. If your Mac can copy it, Maus remembers it.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3>Private. Completely.</h3>
              <p>No cloud. No sync. No account. No analytics. 3MB on your Mac and nowhere else.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section testimonials-section fade-section">
        <div className="section-inner">
          <h2>People switch and don{"'"}t go back</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
              <p>Don{"'"}t compare this app to others. I{"'"}ve tried tons of clipboard managers. This one became my favorite.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
              <p>I ended up purchasing it because it is so damn useful. An unexpected productivity hack.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
              <p>While PastePal is elegant, Maus is crazy quick and straightforward.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
              <p>I freaking love this, well done!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="section pricing-section fade-section">
        <div className="section-inner">
          <h2 style={{ textAlign: 'center' }}>Free forever. Pro if you want more history.</h2>
          <p className="body-text" style={{ textAlign: 'center', margin: '0 auto 14px' }}>No trial. No {'"'}14 days left{'"'}. The free version has every feature, no catches.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Free</div>
              <div className="pricing-price">$0</div>
              <ul className="pricing-list">
                <li>24 hours of clipboard history</li>
                <li>Search across all clips</li>
                <li>Pin your favorites</li>
                <li>Images, files, links, colors, code</li>
                <li>Multipaste queue</li>
                <li>Split text into clips</li>
                <li>Rename clips</li>
                <li>Edit clip content</li>
                <li>Exclude sensitive apps</li>
                <li>Multiple ways to open Maus</li>
                <li>Full keyboard navigation</li>
                <li>Light &amp; Dark mode</li>
              </ul>
              <DownloadCTA />
            </div>
            <div className="pricing-card pro">
              <div className="pricing-tier">Pro</div>
              <div className="pricing-price">$6.99 <span className="pricing-once">one-time, forever</span></div>
              <ul className="pricing-list">
                <li>Everything in Free</li>
                <li>Unlimited history</li>
                <li>Dracula, Solarized &amp; more themes</li>
                <li>All future updates</li>
              </ul>
              <a href={PRO_URL} className="cta-secondary">Buy Pro — $6.99</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section fade-section">
      <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Questions</h2>
          <div className="faq-grid">
            <FaqItem question="Is it actually free?" answer="Yes. Every feature works in the free version. Pro only adds unlimited history (vs 24h) and extra themes. No trial, no expiration, no &quot;upgrade to continue&quot; popups." />
            <FaqItem question="Does my data leave my Mac?" answer="No. Zero cloud. Zero sync. Zero accounts. Your clipboard history stays on your machine and nowhere else." />
            <FaqItem question="Does it work in Terminal?" answer="Yes. Maus works everywhere — Terminal, iTerm2, SSH sessions, any app on your Mac." />
            <FaqItem question="How is it different from Raycast or Maccy?" answer="Maus appears where your cursor is. Not in a fixed window, not in the menubar. Hit the shortcut, and it's right there. That's the difference — it sounds small until you try it." />
            <FaqItem question="Why not the Mac App Store?" answer="Maus uses low-level macOS APIs for speed and reliability that aren't allowed in the App Store. The trade-off is worth it." />
            <FaqItem question="$6.99 one-time? No subscription?" answer="No subscription. Pay once, use forever, updates included. A clipboard manager shouldn't be a recurring bill." />
            <FaqItem question="Can I customize Maus?" answer="Yes. You can choose how to open Maus (shortcut, hotkey, double-tap, key+click), pick a theme, and hide features you don't use — they still work via shortcuts, but the interface stays clean. Some users run Maus with just the clip list and nothing else." />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="final-cta">
        <div className="section-inner">
          <h2>Stop traveling across your screen just to paste.</h2>
          <p className="body-text">Takes 10 seconds to install. 3MB. You{"'"}ll barely know it{"'"}s there — until you need it.</p>
          <div className="cta-row">
            <DownloadCTA />
            <a href={PRO_URL} className="cta-secondary">Buy Pro — $6.99</a>
          </div>
          <p className="cta-subtext">macOS 14+ · No account required</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="maus-footer">
        <p>Made by <a href="mailto:manu@mausformac.com">Manu</a></p>
      </footer>
    </div>
  );
};

export default MausLanding;
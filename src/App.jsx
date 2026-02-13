import React, { useState } from 'react';
import { Rat, Star, ChevronDown, MousePointerClick, Settings2, Search, Keyboard, ListChecks, Pin, Layers, ShieldCheck, Palette, Scissors, Pencil, Move } from 'lucide-react';

const MausLanding = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.mausformac.com').then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'https://www.mausformac.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    });

    // Track the copy event
    const SB = 'https://nxvibvrbhcdwhhefzyej.supabase.co/rest/v1/web_events';
    const KEY = 'sb_publishable_pxHcqc5STbL6lmqspvlOcQ_ztal72Lw';
    fetch(SB, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': KEY,
        'Authorization': 'Bearer ' + KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        event: 'cta_click',
        cta: 'copy_link_mobile',
        referrer: document.referrer || null,
        utm_source: new URLSearchParams(window.location.search).get('utm_source'),
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        device: 'mobile',
        path: window.location.pathname
      })
    }).catch(() => {});
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1a1a1a',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        /* Header */
        .header {
          display: flex;
          align-items: center;
          padding: 20px 40px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .logo-icon {
          width: 36px;
          height: 36px;
          background: #1a1a1a;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-text {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.3px;
        }
        
        /* Main content */
        .main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px;
          gap: 80px;
        }
        
        /* Left side - Hero */
        .hero {
          max-width: 440px;
        }
        
        .hero h1 {
          font-family: 'Inter', sans-serif;
          font-size: 44px;
          font-weight: 600;
          letter-spacing: -1.5px;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        
        .hero .subhero {
          font-size: 18px;
          color: #666;
          margin-bottom: 32px;
          line-height: 1.5;
        }
        
        /* Single primary CTA */
        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 12px;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .cta-button.primary {
          background: #1a1a1a;
          color: #ffffff;
        }
        
        .cta-button.primary:hover {
          background: #333;
        }
        
        .cta-button.secondary {
          background: #ffffff;
          color: #1a1a1a;
          border: 1px solid #e0e0e0;
        }
        
        .cta-button.secondary:hover {
          background: #f5f5f5;
        }
        
        .cta-button svg {
          width: 16px;
          height: 16px;
        }
        
        .cta-meta {
          font-size: 13px;
          color: #888;
        }
        
        /* ============================================ */
        /* SOCIAL PROOF SECTION                         */
        /* ============================================ */
        .social-proof-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 40px 24px 0;
        }
        
        .social-proof-avatars {
          display: flex;
          align-items: center;
        }
        
        .social-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2.5px solid white;
          margin-left: -10px;
          object-fit: cover;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .social-avatar:first-child {
          margin-left: 0;
        }
        
        .social-proof-label {
          font-size: 15px;
          color: #888;
          font-weight: 500;
        }
        
        .mac-only {
          font-size: 13px;
          color: #888;
          margin-top: 16px;
          text-align: center;
        }
        
        .demo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Right side - Demo */
        .demo {
          width: 480px;
          aspect-ratio: 4 / 3;
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .demo video, .demo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Mobile elements - hidden on desktop */
        .mobile-demo,
        .mobile-ctas,
        .mobile-mac-notice {
          display: none;
        }
        
        /* Featured Testimonials */
        .featured-testimonials {
          padding: 32px 24px 0;
        }
        
        .testimonials-row {
          display: flex;
          justify-content: center;
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .featured-testimonial {
          text-align: center;
          flex: 1;
          max-width: 320px;
        }
        
        .stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 12px;
        }
        
        .stars svg {
          width: 18px;
          height: 18px;
          fill: #facc15;
          color: #facc15;
        }
        
        .featured-quote {
          font-size: 15px;
          color: #666;
          font-style: italic;
          line-height: 1.5;
        }

        /* ============================================ */
        /* PROBLEM SECTION                              */
        /* ============================================ */
        .problem-section {
          padding: 100px 40px 80px;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .problem-stat {
          font-family: 'Inter', sans-serif;
          font-size: 64px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .problem-headline {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.8px;
          line-height: 1.3;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .problem-body {
          font-size: 17px;
          color: #666;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
        }

        /* ============================================ */
        /* FEATURES SECTION                             */
        /* ============================================ */
        .features-section {
          padding: 80px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .features-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          text-align: center;
          margin-bottom: 60px;
          color: #1a1a1a;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px 32px;
          justify-items: center;
        }

        .features-grid .feature-card {
          max-width: 100%;
          width: 100%;
        }

        .feature-card {
          text-align: left;
        }

        .feature-visual {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          border-radius: 12px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid #f0f0f0;
        }

        .feature-visual img,
        .feature-visual video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .feature-title {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.3px;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .feature-desc {
          font-size: 14px;
          color: #888;
          line-height: 1.5;
        }

        /* ============================================ */
        /* TESTIMONIALS SECTION                         */
        /* ============================================ */
        .testimonials-section {
          padding: 80px 40px;
          background: #fafafa;
        }

        .testimonials-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          text-align: center;
          margin-bottom: 48px;
          color: #1a1a1a;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 28px;
          border: 1px solid #eee;
        }

        .testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }

        .testimonial-stars svg {
          width: 15px;
          height: 15px;
          fill: #facc15;
          color: #facc15;
        }

        .testimonial-text {
          font-size: 15px;
          color: #444;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 16px;
        }

        .testimonial-author {
          font-size: 13px;
          color: #999;
        }

        .testimonial-author a {
          color: #999;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .testimonial-author a:hover {
          color: #666;
        }

        /* ============================================ */
        /* FAQ SECTION                                  */
        /* ============================================ */
        .faq-section {
          padding: 80px 40px;
          max-width: 640px;
          margin: 0 auto;
          width: 100%;
        }

        .faq-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          text-align: center;
          margin-bottom: 48px;
          color: #1a1a1a;
        }

        .faq-item {
          border-bottom: 1px solid #eee;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #1a1a1a;
          letter-spacing: -0.2px;
        }

        .faq-question:hover {
          color: #444;
        }

        .faq-question svg {
          width: 18px;
          height: 18px;
          color: #999;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .faq-question svg.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          padding-bottom: 20px;
          word-break: break-word;
        }

        /* ============================================ */
        /* FOOTER CTA                                   */
        /* ============================================ */
        .footer-cta-section {
          padding: 80px 40px;
          text-align: center;
          background: #fafafa;
        }

        .footer-cta-headline {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .footer-cta-sub {
          font-size: 17px;
          color: #666;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        .footer-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        
        .footer-cta-meta {
          font-size: 13px;
          color: #999;
        }

        /* ============================================ */
        /* FOOTER                                       */
        /* ============================================ */
        .footer {
          padding: 32px 40px;
          border-top: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #999;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 13px;
          color: #999;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #666;
        }

        /* ============================================ */
        /* MOBILE COPY LINK                              */
        /* ============================================ */
        
        .mobile-mac-notice {
          text-align: center;
          padding: 0;
        }
        
        .mobile-mac-notice p {
          font-size: 14px;
          color: #666;
          font-weight: 500;
          line-height: 1.5;
        }

        /* ============================================ */
        /* MOBILE                                       */
        /* ============================================ */
        @media (max-width: 900px) {
          .main {
            flex-direction: column;
            padding: 24px;
            gap: 32px;
          }
          
          .hero {
            text-align: center;
            max-width: 100%;
          }
          
          .hero h1 {
            font-size: 32px;
          }
          
          .hero .subhero {
            margin-bottom: 24px;
          }
          
          .desktop-only {
            display: none;
          }
          
          .demo-container {
            display: none;
          }
          
          .mobile-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: 32px;
          }
          
          .mobile-demo .demo {
            width: 100%;
            max-width: 400px;
          }
          
          .mobile-ctas {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
          }
          
          .mobile-mac-notice {
            display: block;
            margin-bottom: 8px;
          }

          /* Problem section mobile */
          .problem-section {
            padding: 60px 24px;
          }

          .problem-stat {
            font-size: 48px;
          }

          .problem-headline {
            font-size: 22px;
          }

          /* Features mobile */
          .features-section {
            padding: 60px 24px;
          }

          .features-section-title {
            font-size: 28px;
            margin-bottom: 40px;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px 24px;
          }

          /* Testimonials mobile */
          .testimonials-section {
            padding: 60px 24px;
          }

          .testimonials-section-title {
            font-size: 28px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          /* FAQ mobile */
          .faq-section {
            padding: 60px 24px;
          }

          .faq-section-title {
            font-size: 28px;
          }

          /* Footer CTA mobile */
          .footer-cta-section {
            padding: 60px 24px;
          }

          .footer-cta-headline {
            font-size: 28px;
          }

          .footer-cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          /* Hide desktop footer CTA download on mobile */
          .footer-cta-desktop {
            display: none;
          }
          
          .footer-cta-mobile {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          /* Footer mobile */
          .footer {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            padding: 24px;
          }
        }
        
        @media (min-width: 901px) {
          .footer-cta-mobile {
            display: none;
          }
        }
        
        @media (max-width: 500px) {
          .header {
            padding: 16px 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        {/* ============================================ */}
        {/* HEADER                                       */}
        {/* ============================================ */}
        <header className="header">
          <div className="logo">
            <div className="logo-icon">
              <Rat size={20} color="#ffffff" />
            </div>
            <span className="logo-text">Maus</span>
          </div>
        </header>
        
        {/* ============================================ */}
        {/* FEATURED TESTIMONIALS (top bar)               */}
        {/* ============================================ */}
        <div className="featured-testimonials">
          <div className="testimonials-row">
            <div className="featured-testimonial">
              <div className="stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="featured-quote">
                "So damn useful. An unexpected productivity hack"
              </p>
            </div>
            <div className="featured-testimonial desktop-only">
              <div className="stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="featured-quote">
                "I've used Alfred, Raycast, PastePal and Maccy. None come close"
              </p>
            </div>
            <div className="featured-testimonial desktop-only">
              <div className="stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="featured-quote">
                "I've tried tons of clipboard managers. This one became my favorite"
              </p>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* HERO                                         */}
        {/* ============================================ */}
        <main className="main">
          <div className="hero">
            <h1>A clipboard manager that opens where your cursor is.</h1>
            <p className="subhero">
              Your clipboard only remembers one thing. Maus remembers everything - and appears right where you need it.
            </p>
            
            {/* Desktop: Single primary CTA */}
            <div className="hero-cta desktop-only">
              <a href="/maus/releases/Maus-1.5.5.dmg" className="cta-button primary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download Free for Mac
              </a>
              <span className="cta-meta">Free forever · No account · Takes 10 seconds</span>
            </div>
            

            
            {/* Mobile Demo */}
            <div className="mobile-demo">
              <div className="demo">
                <video autoPlay loop muted playsInline>
                  <source src="/maus-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            
            {/* Mobile: Mac notice + copy link */}
            <div className="mobile-ctas">
              <div className="mobile-mac-notice">
                <p>Maus is a Mac app.</p>
              </div>
              <button className="cta-button primary" onClick={handleCopyLink} style={{width: '100%', maxWidth: 280}}>
                {linkCopied ? '✓ Link copied!' : 'Copy download link'}
              </button>
              <span className="cta-meta">Paste it on your Mac · Free forever · macOS 14+</span>
            </div>
          </div>

          {/* Right - Demo (Desktop only) */}
          <div className="demo-container desktop-only">
            <div className="demo">
              <video autoPlay loop muted playsInline>
                <source src="/maus-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mac-only">Requires macOS 14+</p>
          </div>
        </main>

        {/* ============================================ */}
        {/* SOCIAL PROOF                                 */}
        {/* ============================================ */}
        {/* <section className="social-proof-section">
          <div className="social-proof-avatars">
            <img className="social-avatar" src="/avatar1.jpeg" alt="" />
            <img className="social-avatar" src="/avatar2.jpeg" alt="" />
            <img className="social-avatar" src="https://clusterx.io/avatars/ivy.jpeg" alt="" />
            <img className="social-avatar" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2e/2e9efa3ef0cb5248b0d51aad9bd4cbad4c348173_full.jpg" alt="" />
            <img className="social-avatar" src="https://mockmind-api.uifaces.co/content/human/91.jpg" alt="" />
          </div>
          <p className="social-proof-label">Loved by hundreds Mac users</p>
        </section> */}

        {/* ============================================ */}
        {/* THE PROBLEM                                  */}
        {/* ============================================ */}
        <section className="problem-section">
          <p className="problem-stat">50+</p>
          <h2 className="problem-headline">
            You copy over 50 things a day.<br />
            Without Maus, you lose 49 of them.
          </h2>
          <p className="problem-body">
            Your clipboard only remembers the last thing you copied. Every ⌘C overwrites the previous one. Links, code snippets, addresses, passwords - gone. Maus remembers everything so you don't have to.
          </p>
        </section>

        {/* ============================================ */}
        {/* FEATURES                                     */}
        {/* ============================================ */}
        <section className="features-section">
          <h2 className="features-section-title">Everything you need. Nothing you don't.</h2>
          <div className="features-grid">

            {/* Feature 1: Instant access */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/open-maus.gif" alt="Opening Maus with keyboard shortcut" /> */}
                <MousePointerClick size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Opens where your cursor is</h3>
              <p className="feature-desc">Hit ⌘⇧V and Maus appears right next to your cursor. No dock, no menubar hunting. Open, find, paste, gone.</p>
            </div>

            {/* Feature 2: Multiple open methods */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/open-methods.gif" alt="Multiple ways to open Maus" /> */}
                <Settings2 size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Open it your way</h3>
              <p className="feature-desc">Keyboard shortcut, custom hotkey, Key+Click, or double-tap a modifier. Whatever feels natural.</p>
            </div>

            {/* Feature 3: Window position */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/position.gif" alt="Configurable window position" /> */}
                <Move size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Configurable window position</h3>
              <p className="feature-desc">Set it to appear above or below, left or right. Up to you.</p>
            </div>

            {/* Feature 4: Search */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/search.gif" alt="Searching clipboard history" /> */}
                <Search size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Find anything, instantly</h3>
              <p className="feature-desc">Search across your entire clipboard history. Screenshots, file paths, hex colors, URLs - all searchable.</p>
            </div>

            {/* Feature 5: Keyboard friendly */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/keyboard.gif" alt="Keyboard navigation in Maus" /> */}
                <Keyboard size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">100% keyboard-friendly</h3>
              <p className="feature-desc">Navigate, search, paste, pin, delete - without touching the mouse. Everything has a shortcut.</p>
            </div>

            {/* Feature 6: Multipaste */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/multipaste.gif" alt="Pasting multiple items in sequence" /> */}
                <ListChecks size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Paste multiple items in sequence</h3>
              <p className="feature-desc">Cmd+Click to select multiple items. Hit Enter and they paste one by one, in order.</p>
            </div>

            {/* Feature 7: Pin */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/pin.gif" alt="Pinning important clips" /> */}
                <Pin size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Pin what matters</h3>
              <p className="feature-desc">Keep your most-used snippets permanently pinned at the top. Always one keystroke away.</p>
            </div>

            {/* Feature 8: All content types */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/types.gif" alt="Text, images, files, links, colors" /> */}
                <Layers size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Text, images, links, files, colors</h3>
              <p className="feature-desc">Maus captures everything you copy with rich previews. Not just plain text.</p>
            </div>

            {/* Feature 9: Split */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/split.gif" alt="Splitting text into individual clips" /> */}
                <Scissors size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Split text into clips</h3>
              <p className="feature-desc">Paste a list, a CSV, or a chunk of text and split it into individual clips. Then paste each one separately.</p>
            </div>

            {/* Feature 10: Edit */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/edit.gif" alt="Editing clipboard content in Maus" /> */}
                <Pencil size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Edit what you've copied</h3>
              <p className="feature-desc">Double-click the preview to edit any text or link. Fix a typo, tweak a snippet, save. No need to copy it again.</p>
            </div>

            {/* Feature 11: Privacy */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/privacy.gif" alt="Excluding apps from Maus" /> */}
                <ShieldCheck size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Private by default</h3>
              <p className="feature-desc">Everything stays on your Mac. No cloud, no sync, no account. Exclude sensitive apps like 1Password from being recorded.</p>
            </div>

            {/* Feature 12: Themes */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/themes.gif" alt="Light, Dark, Dracula and Solarized themes" /> */}
                <Palette size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Light, Dark, Dracula, Solarized</h3>
              <p className="feature-desc">Follows your system appearance automatically, or pick a Pro theme. More themes coming soon.</p>
            </div>

          </div>
        </section>

        {/* ============================================ */}
        {/* TESTIMONIALS                                 */}
        {/* ============================================ */}
        <section className="testimonials-section">
          <h2 className="testimonials-section-title">What people are saying</h2>
          <div className="testimonials-grid">

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "No, seriously, don't compare this app to others. I've tried tons of clipboard managers over the years, and this app became my favorite."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "While PastePal is elegant, Maus is crazy quick and straightforward."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "I freaking love this, well done!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "ALSO LOVE HOW RAM EFFICIENT MAUS IS!!! This is the clipboard manager I was looking for!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "The implementation is fantastic! So intuitive."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "This is so much fun (love the brand/name too!)"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "I ended up purchasing it because it is so damn useful. The singular feature to pop up where my cursor already is totally sold me."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "I've used PasteApp, Alfred, Raycast, Droppy, PastePal and Maccy. None come close in terms of how quick-and-easy it is."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "Works like a dream for me, shortcut with Key+Click is super intelligent and smooth."
              </p>
            </div>

            {/* 
              PARA AÑADIR MÁS TESTIMONIOS: 
              Copia este bloque y reemplaza texto:
              
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <Star /><Star /><Star /><Star /><Star />
                </div>
                <p className="testimonial-text">
                  "TEXTO DEL TESTIMONIO AQUÍ"
                </p>
              </div>
            */}

          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ                                          */}
        {/* ============================================ */}
        <section className="faq-section">
          <h2 className="faq-section-title">Questions</h2>

          {[
            {
              q: "Is Maus really free?",
              a: "Yes. Every feature is free - search, pins, multipaste, edit, split, keyboard navigation, exclude apps, all of it. The only limit is 24 hours of history, which is enough for most people. Pro ($6.99 once) removes that limit and adds custom themes. No trial, no expiration, no account."
            },
            {
              q: "What does Pro add?",
              a: "Unlimited clipboard history (instead of 24h) and custom themes like Dracula and Solarized Light. One-time payment of $6.99, updates forever. You can upgrade from inside the app whenever you're ready."
            },
            {
              q: "Does my data leave my Mac?",
              a: "No. Everything is stored locally on your device. There's no cloud sync, no account, and no data collection. Your clipboard history stays on your Mac."
            },
            {
              q: "What about passwords and sensitive data?",
              a: "You can exclude specific apps (like 1Password or your banking app) so nothing from those apps is ever recorded."
            },
            {
              q: "Does it work with Terminal and iTerm2?",
              a: "Yes. Maus works everywhere, including Terminal, iTerm2, and SSH sessions."
            },
            {
              q: "Can I use it with keyboard only?",
              a: "Absolutely. Arrows to navigate, Enter to paste, Cmd+P to pin, Cmd+R to rename, Cmd+Click for multipaste. Every feature has a shortcut."
            },
            {
              q: "How is Maus different from Raycast, Maccy, or Paste?",
              a: "Maus appears exactly where your cursor is - no fixed window, no menubar popup. It's designed to be faster: open, find, paste, gone."
            },
            {
              q: "Can I change the keyboard shortcut?",
              a: "Yes. You can set any custom keyboard shortcut, use Key+Click (like Cmd+Click), or double-tap a modifier key. Whatever feels natural to you."
            },
            /* 
              PARA AÑADIR MÁS PREGUNTAS:
              Copia este formato y añádelo al array:
              
              {
                q: "PREGUNTA AQUÍ",
                a: "RESPUESTA AQUÍ"
              },
            */
          ].map((faq, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-question" onClick={() => toggleFaq(i)}>
                {faq.q}
                <ChevronDown className={openFaq === i ? 'open' : ''} />
              </button>
              {openFaq === i && (
                <p className="faq-answer">{faq.a}</p>
              )}
            </div>
          ))}
        </section>

        {/* ============================================ */}
        {/* FOOTER CTA                                   */}
        {/* ============================================ */}
        <section className="footer-cta-section">
          <h2 className="footer-cta-headline">Stop losing what you copy.</h2>
          <p className="footer-cta-sub">
            Free with every feature · 24h history covers most people. Want unlimited history? Pro is $6.99 once.
          </p>
          
          {/* Desktop footer CTA */}
          <div className="footer-cta-desktop">
            <div className="footer-cta-buttons">
              <a href="/maus/releases/Maus-1.5.5.dmg" className="cta-button primary">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width: 16, height: 16}}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download Free for Mac
              </a>
            </div>
            <p className="footer-cta-meta">No account needed · Takes 10 seconds · macOS 14+</p>
          </div>
          
          {/* Mobile footer CTA */}
          <div className="footer-cta-mobile">
            <button className="cta-button primary" onClick={handleCopyLink} style={{width: '100%', maxWidth: 280}}>
              {linkCopied ? '✓ Link copied!' : 'Copy download link'}
            </button>
            <p className="footer-cta-meta">Paste it on your Mac · macOS 14+</p>
          </div>
        </section>

        {/* ============================================ */}
        {/* FOOTER                                       */}
        {/* ============================================ */}
        <footer className="footer">
          <div className="footer-left">
            <Rat size={16} />
            <span>Maus · 2026</span>
          </div>
          <div className="footer-links">
            <a href="mailto:manu@mausformac.com">Contact</a>
            {/* TODO: Añadir link a privacy policy cuando exista */}
            {/* <a href="/privacy">Privacy</a> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MausLanding;
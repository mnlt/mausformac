import React, { useState } from 'react';
import { Rat, Star, ChevronDown, MousePointerClick, Settings2, Search, Keyboard, ListChecks, Pin, Layers, ShieldCheck, Palette, Scissors, Pencil, Move } from 'lucide-react';

const MausLanding = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
          max-width: 400px;
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
        }
        
        /* CTAs */
        .ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
        }
        
        .cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
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
          background: #ffffff;
          color: #1a1a1a;
          border: 1px solid #e0e0e0;
        }
        
        .cta-button.primary:hover {
          background: #f5f5f5;
        }
        
        .cta-button.secondary {
          background: #1a1a1a;
          color: #ffffff;
        }
        
        .cta-button.secondary:hover {
          background: #333;
        }
        
        .cta-button svg {
          width: 16px;
          height: 16px;
        }
        
        .cta-subtext {
          font-size: 13px;
          color: #888;
        }
        
        .social-proof {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
        }
        
        .avatars {
          display: flex;
          align-items: center;
        }
        
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
          object-fit: cover;
        }
        
        .avatar:first-child {
          margin-left: 0;
        }
        
        .social-proof-text {
          font-size: 13px;
          color: #888;
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
        
        .demo-placeholder {
          color: #bbb;
          font-size: 14px;
        }
        
        /* Mobile elements - hidden on desktop */
        .mobile-social-proof,
        .mobile-demo,
        .mobile-ctas {
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

        .feature-visual-placeholder {
          color: #ccc;
          font-size: 13px;
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
        /* FREE VS PRO SECTION                         */
        /* ============================================ */
        .pricing-section {
          padding: 80px 40px;
          max-width: 900px;
          margin: 0 auto;
        }

        .pricing-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          text-align: center;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .pricing-subtitle {
          text-align: center;
          font-size: 17px;
          color: #666;
          margin-bottom: 48px;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .pricing-card {
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 36px;
          display: flex;
          flex-direction: column;
        }

        .pricing-card.pro {
          border: 2px solid #1a1a1a;
          position: relative;
        }

        .pricing-card-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 16px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .pricing-card-name {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }

        .pricing-card-price {
          font-family: 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 700;
          letter-spacing: -2px;
          margin-bottom: 4px;
          line-height: 1;
        }

        .pricing-card-price-note {
          font-size: 14px;
          color: #888;
          margin-bottom: 28px;
        }

        .pricing-card-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          flex: 1;
        }

        .pricing-card-features li {
          font-size: 15px;
          color: #444;
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pricing-card-features li::before {
          content: '✓';
          font-weight: 600;
          color: #1a1a1a;
          font-size: 14px;
        }

        .pricing-card-features li.highlight {
          font-weight: 500;
          color: #1a1a1a;
        }

        .pricing-card .cta-button {
          width: 100%;
          text-align: center;
          justify-content: center;
        }

        /* ============================================ */
        /* FAQ SECTION                                  */
        /* ============================================ */
        .faq-section {
          padding: 80px 40px;
          max-width: 640px;
          margin: 0 auto;
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
        }

        .footer-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
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
          
          .mobile-social-proof {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            margin-bottom: 32px;
          }
          
          .mobile-social-proof .social-proof-text {
            order: -1;
          }
          
          .mobile-social-proof .avatars {
            justify-content: center;
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
          
          .mobile-ctas .cta-row {
            display: flex;
            align-items: center;
            gap: 16px;
            width: 100%;
            justify-content: center;
          }
          
          .mobile-ctas .cta-button {
            flex: 1;
            max-width: 180px;
          }
          
          .mobile-ctas .cta-subtexts {
            display: flex;
            gap: 16px;
            width: 100%;
            justify-content: center;
          }
          
          .mobile-ctas .cta-subtext {
            flex: 1;
            max-width: 180px;
            text-align: center;
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

          /* Pricing mobile */
          .pricing-section {
            padding: 60px 24px;
          }

          .pricing-section-title {
            font-size: 28px;
          }

          .pricing-cards {
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

          /* Footer mobile */
          .footer {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            padding: 24px;
          }
        }
        
        @media (max-width: 500px) {
          .header {
            padding: 16px 20px;
          }
          
          .mobile-ctas .cta-row {
            flex-direction: column;
            gap: 12px;
          }
          
          .mobile-ctas .cta-button {
            width: 220px;
            max-width: none;
          }
          
          .mobile-ctas .cta-subtexts {
            flex-direction: column;
            gap: 0;
          }
          
          .mobile-ctas .cta-subtext {
            max-width: none;
          }
          
          .mobile-ctas .cta-subtexts .cta-subtext:last-child {
            margin-top: -4px;
          }

          .mobile-ctas .cta-subtexts {
            display: none;
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
                "I ended up purchasing it because it is so damn useful. An unexpected productivity hack."
              </p>
            </div>
            <div className="featured-testimonial desktop-only">
              <div className="stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="featured-quote">
                "I've used Alfred, Raycast, PastePal and Maccy. None come close to how quick-and-easy Maus is."
              </p>
            </div>
            <div className="featured-testimonial desktop-only">
              <div className="stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="featured-quote">
                "Don't compare this app to others. I've tried tons of clipboard managers. This one became my favorite."
              </p>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* HERO                                         */}
        {/* ============================================ */}
        <main className="main">
          <div className="hero">
            <h1>Your copy-paste memory. Always handy.</h1>
            <p className="subhero">
              A clipboard manager that lives where your cursor is.
            </p>
            
            {/* Desktop CTAs */}
            <div className="ctas desktop-only">
              <div className="cta-group">
                <a href="/maus/releases/Maus-2.0.3.dmg" className="cta-button primary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download Free
                </a>
                <span className="cta-subtext">Free forever</span>
              </div>
              
              <div className="cta-group">
                <a href="https://mausformac.lemonsqueezy.com/checkout/buy/fa311099-77f7-4b0d-8d39-eab756710f15" className="cta-button secondary">
                  Get Pro – $6.99
                </a>
                <span className="cta-subtext">One-time · Unlimited history</span>
              </div>
            </div>
            
            {/* Desktop Social Proof */}
            <div className="social-proof desktop-only">
              <div className="avatars">
                <img className="avatar" src="/avatar1.jpeg" alt="" />
                <img className="avatar" src="/avatar2.jpeg" alt="" />
                <img className="avatar" src="https://clusterx.io/avatars/ivy.jpeg" alt="" />
                <img className="avatar" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2e/2e9efa3ef0cb5248b0d51aad9bd4cbad4c348173_full.jpg" alt="" />
                <img className="avatar" src="https://mockmind-api.uifaces.co/content/human/91.jpg" alt="" />
              </div>
              <p className="social-proof-text">Trusted by hundreds of Mac users</p>
            </div>
            
            {/* Mobile Social Proof */}
            <div className="mobile-social-proof">
              <p className="social-proof-text">Trusted by hundreds of Mac users</p>
              <div className="avatars">
                <img className="avatar" src="/avatar1.jpeg" alt="" />
                <img className="avatar" src="/avatar2.jpeg" alt="" />
                <img className="avatar" src="https://clusterx.io/avatars/ivy.jpeg" alt="" />
                <img className="avatar" src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2e/2e9efa3ef0cb5248b0d51aad9bd4cbad4c348173_full.jpg" alt="" />
                <img className="avatar" src="https://mockmind-api.uifaces.co/content/human/91.jpg" alt="" />
              </div>
            </div>
            
            {/* Mobile Demo */}
            <div className="mobile-demo">
              <div className="demo">
                <img src="webzoom.gif" alt="" />
              </div>
              <p className="mac-only">Requires macOS 14+</p>
            </div>
            
            {/* Mobile CTAs */}
            <div className="mobile-ctas">
              <div className="cta-row">
                <a href="/maus/releases/Maus-2.0.3.dmg" className="cta-button primary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download Free
                </a>
                <a href="https://mausformac.lemonsqueezy.com/checkout/buy/fa311099-77f7-4b0d-8d39-eab756710f15" className="cta-button secondary">
                  Get Pro – $6.99
                </a>
              </div>
              <div className="cta-subtexts">
                <span className="cta-subtext">Free forever · 24h history</span>
                <span className="cta-subtext">One-time · Unlimited history</span>
              </div>
            </div>
          </div>

          {/* Right - Demo (Desktop only) */}
          <div className="demo-container">
          <div className="demo">
                <img src="webzoom.gif" alt="" />
              </div>
            <p className="mac-only">Requires macOS 14+</p>
          </div>
        </main>

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
              <p className="feature-desc">Hit ⌘⇧V and Maus appears right next to your cursor. No dock, no menubar hunting. Paste and keep working.</p>
            </div>

            {/* Feature 2: Multiple ways to open */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/open-methods.gif" alt="Multiple ways to open Maus" /> */}
                <Settings2 size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Open it your way</h3>
              <p className="feature-desc">Keyboard shortcut, custom hotkey, Key+Click, or double-tap a modifier. Pick what works for you - everything is customizable.</p>
            </div>

            {/* Feature 3: Window position */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/window-position.gif" alt="Configurable window position" /> */}
                <Move size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Window position, your call</h3>
              <p className="feature-desc">Opens above-right of your cursor by default. Prefer above-left, below-left, or below-right? One setting, done.</p>
            </div>

            {/* Feature 3: Search */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/search.gif" alt="Searching clipboard history in Maus" /> */}
                <Search size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Find anything, instantly</h3>
              <p className="feature-desc">Type to search across your entire clipboard history. Filter by text, links, images, or code. It's all there.</p>
            </div>

            {/* Feature 4: Keyboard-first */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/keyboard.gif" alt="Using Maus with keyboard only" /> */}
                <Keyboard size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">100% keyboard-friendly</h3>
              <p className="feature-desc">Navigate, search, paste, pin, delete - all without touching the mouse. Every feature has a shortcut. Visual chrome can be turned off entirely.</p>
            </div>

            {/* Feature 5: Multipaste queue */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/multipaste.gif" alt="Multipaste queue in Maus" /> */}
                <ListChecks size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Paste multiple items in sequence</h3>
              <p className="feature-desc">⌘+Click to select several items, hit Enter, and paste them one by one in order. Perfect for filling forms or moving data.</p>
            </div>

            {/* Feature 6: Pins */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/pins.gif" alt="Pinning items in Maus" /> */}
                <Pin size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Pin what matters</h3>
              <p className="feature-desc">Keep your most-used snippets, templates, and links permanently pinned at the top. Always one shortcut away.</p>
            </div>

            {/* Feature 7: All content types */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/content-types.gif" alt="Text, images, links, files and colors in Maus" /> */}
                <Layers size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Text, images, links, files, colors</h3>
              <p className="feature-desc">Maus captures everything you copy - not just text. Screenshots, file paths, hex colors, URLs - all searchable.</p>
            </div>

            {/* Feature 8: Split */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/split.gif" alt="Splitting text into individual clips" /> */}
                <Scissors size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Split text into clips</h3>
              <p className="feature-desc">Paste a list, a CSV, or a chunk of text and split it into individual clips. Then paste each one separately.</p>
            </div>

            {/* Feature 9: Edit */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/edit.gif" alt="Editing clipboard content in Maus" /> */}
                <Pencil size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Edit what you've copied</h3>
              <p className="feature-desc">Double-click the preview to edit any text or link. Fix a typo, tweak a snippet, save. No need to copy it again.</p>
            </div>

            {/* Feature 9: Privacy */}
            <div className="feature-card">
              <div className="feature-visual">
                {/* <img src="/features/privacy.gif" alt="Excluding apps from Maus" /> */}
                <ShieldCheck size={32} color="#1a1a1a" />
              </div>
              <h3 className="feature-title">Private by default</h3>
              <p className="feature-desc">Everything stays on your Mac. No cloud, no sync, no account. Exclude sensitive apps like 1Password from being recorded.</p>
            </div>

            {/* Feature 10: Themes */}
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
                "I ended up purchasing it because it is so damn useful. The singular feature to pop up where my cursor already is totally sold me. This app is such an unexpected productivity hack."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-text">
                "I've used PasteApp, Alfred, Raycast, Droppy, PastePal and Maccy. But neither of those come close in terms of how quick-and-easy it is. Maus' tiny window is feature rich and not as interruptive."
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
                "Works like a dream for me, shortcut with Key+Click is super intelligent and smooth."
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
                "This is so much fun (love the brand/name too!)"
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
        {/* FREE VS PRO                                  */}
        {/* ============================================ */}
        <section className="pricing-section">
          <h2 className="pricing-section-title">Free vs Pro</h2>
          <p className="pricing-subtitle">Free is generous. Pro is a no-brainer.</p>

          <div className="pricing-cards">
            {/* FREE card */}
            <div className="pricing-card">
              <h3 className="pricing-card-name">Free</h3>
              <p className="pricing-card-price">$0</p>
              <p className="pricing-card-price-note">Free forever, no account needed</p>
              <ul className="pricing-card-features">
                <li className="highlight">24 hours of clipboard history</li>
                <li>Search across all clips</li>
                <li>Pin your favorites</li>
                <li>Images, files, links, colors</li>
                <li>Multipaste queue</li>
                <li>Split text into clips</li>
                <li>Rename clips</li>
                <li>Edit clip content</li>
                <li>Exclude sensitive apps</li>
                <li>Multiple ways to open Maus</li>
                <li>Full keyboard navigation</li>
                <li>Light &amp; Dark mode</li>
              </ul>
              <a href="/maus/releases/Maus-2.0.3.dmg" className="cta-button primary">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width: 16, height: 16}}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download Free
              </a>
            </div>

            {/* PRO card */}
            <div className="pricing-card pro">
              <span className="pricing-card-badge">Most popular</span>
              <h3 className="pricing-card-name">Pro</h3>
              <p className="pricing-card-price">$6.99</p>
              <p className="pricing-card-price-note">One-time payment · Updates forever</p>
              <ul className="pricing-card-features">
                <li>Everything in Free, plus:</li>
                <li className="highlight">Unlimited clipboard history</li>
                <li className="highlight">Dracula, Solarized Light &amp; more themes coming</li>

              </ul>
              <a href="https://mausformac.lemonsqueezy.com/checkout/buy/fa311099-77f7-4b0d-8d39-eab756710f15" className="cta-button secondary">
                Get Pro – $6.99
              </a>
            </div>
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
              a: "Yes. The free version includes every feature - search, pins, multipaste, all content types, keyboard navigation, customizable shortcuts, exclude apps, and more. The only differences with Pro are the history limit (24h vs unlimited) and custom themes. No trial, no expiration, no account."
            },
            {
              q: "Does it have dark mode?",
              a: "Yes. Maus follows your system appearance automatically. It also has Pro themes like Dracula and Solarized Light, with more coming."
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
              a: "Absolutely. Arrows to navigate, Enter to paste, Cmd+P to pin, Cmd+R to rename, Cmd+Click for multipaste. Every feature has a shortcut. You can also hide all visual UI elements for a minimal, keyboard-only workflow."
            },
            {
              q: "I already use Cmd+Shift+V in another app. Can I change the shortcut?",
              a: "Yes. You can set any custom keyboard shortcut, use Key+Click (like Cmd+Click), or double-tap a modifier key. Whatever feels natural to you."
            },
            {
              q: "Can I edit what I've copied?",
              a: "Yes. Double-click the preview to edit text or links. Click outside or Cmd+Enter to save, Escape to discard."
            },
            {
              q: "How is Maus different from Raycast, Maccy, or Paste?",
              a: "Maus appears exactly where your cursor is - no fixed window, no menubar popup. It's designed to be faster: open, find, paste, gone. It captures images, files, colors, and links with rich previews, and the multipaste queue lets you paste items in sequence."
            },
            {
              q: "Can I hide the menu bar icon?",
              a: "Yes. You can hide it from Preferences. If you need to access Preferences again, you can always get there from the Maus main window."
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
          <p className="footer-cta-sub">Free forever. Pro for $6.99 once. No subscription.</p>
          <div className="footer-cta-buttons">
            <a href="/maus/releases/Maus-2.0.3.dmg" className="cta-button primary">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width: 16, height: 16}}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download Free
            </a>
            <a href="https://mausformac.lemonsqueezy.com/checkout/buy/fa311099-77f7-4b0d-8d39-eab756710f15" className="cta-button secondary">
            One-time payment – $6.99
            </a>
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

// import React, { useEffect, useRef, useState } from 'react';
// import { Rat } from 'lucide-react';

// const DMG_URL = "/maus/releases/Maus-2.0.3.dmg";
// const PRO_URL = "https://mausformac.lemonsqueezy.com/buy/YOUR_ID"; // update with real URL

// const APPLE_PATH = "M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.3-105.9-207.6-105.9-328.2 0-193 125.7-295.3 249.4-295.3 65.7 0 120.5 43.1 161.7 43.1 39.2 0 100.4-45.8 175.1-45.8 28.3 0 130 2.6 197.3 99.6zm-234.1-90.1c31.3-37.1 53.7-88.7 53.7-140.3 0-7.1-.6-14.3-1.9-20.1-51.2 1.9-111.6 34.1-148.4 76.8-26.4 30-55.1 81.6-55.1 134 0 7.8.6 15.7 1.3 18.2 2.6.6 6.4 1.3 10.2 1.3 45.9 0 103.7-30.7 140.2-69.9z";

// const AppleIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor">
//     <path d={APPLE_PATH} />
//   </svg>
// );

// const DownloadCTA = ({ className = "cta-primary" }) => (
//   <a href={DMG_URL} className={className}>
//     <AppleIcon />
//     Free Download for macOS
//   </a>
// );

// const FaqItem = ({ question, answer }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
//       <div className="faq-question">
//         <span>{question}</span>
//         <span className="faq-toggle">+</span>
//       </div>
//       <p className="faq-answer">{answer}</p>
//     </div>
//   );
// };

// const MausLanding = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
//     );
//     document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="maus-landing">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         html {
//           scroll-behavior: smooth;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }

//         body {
//           background: #FFFFFF;
//           color: #37352F;
//           font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
//           line-height: 1.6;
//           overflow-x: hidden;
//         }

//         ::selection {
//           background: #37352F;
//           color: #FFFFFF;
//         }

//         a { text-decoration: none; }

//         /* ── Animations ── */
//         .fade-section {
//           opacity: 0;
//           transform: translateY(24px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .fade-section.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* ── Header ── */
//         .maus-header {
//           max-width: 860px;
//           margin: 0 auto;
//           padding: 20px 24px;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .maus-header-icon {
//           width: 32px;
//           height: 32px;
//           background: #37352F;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .maus-header-text {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 17px;
//           font-weight: 600;
//           color: #37352F;
//           letter-spacing: -0.02em;
//         }

//         /* ── Hero ── */
//         .hero {
//           max-width: 860px;
//           margin: 0 auto;
//           padding: 72px 24px 40px;
//           text-align: center;
//         }

//         .badge {
//           display: inline-block;
//           padding: 5px 14px;
//           border-radius: 100px;
//           border: 1px solid #E8E5E0;
//           color: #9B9A97;
//           font-size: 13px;
//           font-weight: 500;
//           letter-spacing: 0.01em;
//           margin-bottom: 28px;
//           font-family: 'JetBrains Mono', monospace;
//         }

//         .hero h1 {
//           font-size: clamp(30px, 5.2vw, 52px);
//           font-weight: 700;
//           line-height: 1.12;
//           letter-spacing: -0.035em;
//           color: #37352F;
//           margin-bottom: 22px;
//         }

//         .hero h1 .accent {
//           color: #9B9A97;
//         }

//         .hero-paragraph {
//           font-size: 17px;
//           color: #787774;
//           max-width: 520px;
//           margin: 0 auto 36px;
//           line-height: 1.75;
//         }

//         .cta-row {
//           display: flex;
//           gap: 10px;
//           justify-content: center;
//           flex-wrap: wrap;
//           margin-bottom: 14px;
//         }

//         .cta-primary {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           padding: 13px 30px;
//           white-space: nowrap;
//           background: #37352F;
//           color: #FFFFFF;
//           border-radius: 8px;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
//           border: none;
//         }
//         .cta-primary svg {
//           flex-shrink: 0;
//           position: relative;
//           top: -1px;
//         }
//         .cta-primary:hover {
//           transform: translateY(-1px);
//           background: #2F2D28;
//           box-shadow: 0 4px 16px rgba(55, 53, 47, 0.12);
//           color: #FFFFFF;
//         }

//         .cta-secondary {
//           display: inline-block;
//           padding: 13px 30px;
//           background: transparent;
//           color: #37352F;
//           border-radius: 8px;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           border: 1px solid #D3D1CB;
//           transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
//         }
//         .cta-secondary:hover {
//           transform: translateY(-1px);
//           border-color: #37352F;
//           background: #F7F6F3;
//         }

//         .cta-subtext {
//           font-size: 12px;
//           color: #B4B3AF;
//           font-family: 'JetBrains Mono', monospace;
//         }

//         .hero-image {
//           margin-top: 44px;
//           max-width: 720px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .hero-image-placeholder {
//           width: 100%;
//           aspect-ratio: 16/10;
//           background: #F7F6F3;
//           border-radius: 14px;
//           border: 1px solid #E8E5E0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #B4B3AF;
//           font-size: 13px;
//           font-family: 'JetBrains Mono', monospace;
//           padding: 20px;
//           text-align: center;
//         }

//         /* ── Proof bar ── */
//         .proof-bar {
//           padding: 44px 24px;
//           border-top: 1px solid #F1F0EC;
//           border-bottom: 1px solid #F1F0EC;
//           position: relative;
//         }
//         .proof-inner {
//           max-width: 640px;
//           margin: 0 auto;
//           text-align: center;
//           position: relative;
//           padding: 0 48px;
//         }
//         .proof-quote {
//           font-size: clamp(20px, 2.8vw, 26px);
//           font-style: normal;
//           color: #787774;
//           line-height: 1.6;
//           border: none;
//           margin: 0;
//           padding: 0;
//         }
//         .proof-quote strong {
//           color: #37352F;
//           font-style: normal;
//         }
//         .proof-inner::before {
//           content: "\\201C";
//           position: absolute;
//           top: -28px;
//           left: 50%;
//           transform: translateX(-50%);
//           font-size: 64px;
//           line-height: 1;
//           color: #E8E5E0;
//           font-family: Georgia, serif;
//           pointer-events: none;
//         }

//         /* ── Sections ── */
//         .section {
//           padding: 72px 24px;
//         }
//         .section-inner {
//           max-width: 860px;
//           margin: 0 auto;
//         }

//         .maus-landing h2 {
//           font-size: clamp(22px, 3.5vw, 34px);
//           font-weight: 700;
//           line-height: 1.18;
//           letter-spacing: -0.025em;
//           color: #37352F;
//           margin-bottom: 16px;
//         }

//         .body-text {
//           font-size: 16px;
//           color: #787774;
//           line-height: 1.75;
//           margin-bottom: 14px;
//           max-width: 580px;
//         }

//         /* ── Problem ── */
//         .problem-section {
//           background: #F7F6F3;
//           position: relative;
//           overflow: hidden;
//         }
//         .problem-section .section-inner {
//           position: relative;
//           padding-left: 0;
//           border-left: none;
//           max-width: 640px;
//         }
//         .problem-section h2 {
//           color: #37352F;
//           font-size: clamp(32px, 5vw, 52px);
//           margin-bottom: 36px;
//         }
//         .problem-lines {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }
//         .problem-line {
//           font-size: clamp(17px, 2.2vw, 20px);
//           color: #9B9A97;
//           line-height: 1.6;
//         }
//         .problem-line.emphasis {
//           color: #37352F;
//           font-weight: 900;
//           font-size: clamp(19px, 2.5vw, 24px);
//         }

//         /* ── Steps ── */
//         .steps-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 28px;
//           margin-top: 36px;
//         }
//         .step {
//           position: relative;
//         }
//         .step-number {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           background: #37352F;
//           color: #FFFFFF;
//           font-weight: 600;
//           font-size: 14px;
//           margin-bottom: 14px;
//           font-family: 'JetBrains Mono', monospace;
//         }
//         .step-highlight {
//           text-decoration: underline;
//           text-decoration-color: #E8853A;
//           text-decoration-thickness: 3px;
//           text-underline-offset: 4px;
//         }

//         .step h3 {
//           font-size: 16px;
//           font-weight: 600;
//           color: #37352F;
//           margin-bottom: 6px;
//         }
//         .step p {
//           font-size: 14px;
//           color: #9B9A97;
//           line-height: 1.65;
//         }
//         .steps-grid .step:not(:last-child)::after {
//           content: "";
//           position: absolute;
//           top: 16px;
//           right: -14px;
//           width: 28px;
//           height: 2px;
//           background: linear-gradient(90deg, #D3D1CB, transparent);
//           pointer-events: none;
//         }
//         @media (max-width: 700px) {
//           .steps-grid .step::after { display: none; }
//         }

//         /* ── Features ── */
//         .features-section {
//           background: #F7F6F3;
//           position: relative;
//         }
//         .features-section::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(#D3D1CB 0.7px, transparent 0.7px);
//           background-size: 24px 24px;
//           opacity: 0.35;
//           pointer-events: none;
//         }
//         .features-section .section-inner {
//           position: relative;
//           z-index: 1;
//         }
//         .feature-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//           gap: 16px;
//           margin-top: 36px;
//         }
//         .feature-card {
//           padding: 24px 22px;
//           background: #FFFFFF;
//           border-radius: 10px;
//           border: 1px solid #E8E5E0;
//           transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
//         }
//         .feature-card:hover {
//           border-color: #D3D1CB;
//           box-shadow: 0 2px 12px rgba(55, 53, 47, 0.06);
//           transform: translateY(-2px);
//         }
//         .feature-icon {
//           width: 36px;
//           height: 36px;
//           border-radius: 8px;
//           background: #F7F6F3;
//           border: 1px solid #E8E5E0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 14px;
//         }
//         .feature-icon svg {
//           width: 18px;
//           height: 18px;
//           stroke: #37352F;
//           stroke-width: 1.8;
//           fill: none;
//         }
//         .feature-card h3 {
//           font-size: 15px;
//           font-weight: 600;
//           color: #37352F;
//           margin-bottom: 6px;
//         }
//         .feature-card p {
//           font-size: 14px;
//           color: #9B9A97;
//           line-height: 1.6;
//         }

//         /* ── Testimonials ── */
//         .testimonials-section {
//           background: #FFFFFF;
//           position: relative;
//         }
//         .testimonials-section h2 {
//           color: #37352F;
//           text-align: center;
//           margin-bottom: 48px;
//         }
//         .testimonial-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 0;
//           position: relative;
//           z-index: 1;
//           max-width: 720px;
//           margin: 0 auto;
//         }
//         .testimonial-card {
//           padding: 36px 32px;
//           position: relative;
//           border-bottom: 1px solid #F1F0EC;
//           border-right: 1px solid #F1F0EC;
//         }
//         .testimonial-card:nth-child(2n) {
//           border-right: none;
//         }
//         .testimonial-card:nth-last-child(-n+2) {
//           border-bottom: none;
//         }
//         .testimonial-stars {
//           display: flex;
//           gap: 2px;
//           margin-bottom: 16px;
//         }
//         .testimonial-star {
//           color: #F5C518;
//           font-size: 14px;
//         }
//         .testimonial-card p {
//           font-size: 15px;
//           color: #37352F;
//           line-height: 1.7;
//           font-style: normal;
//         }
//         @media (max-width: 600px) {
//           .testimonial-grid {
//             grid-template-columns: 1fr;
//           }
//           .testimonial-card {
//             border-right: none;
//           }
//           .testimonial-card:last-child {
//             border-bottom: none;
//           }
//         }

//         /* ── Pricing ── */
//         .pricing-section {
//           background: #F7F6F3;
//         }
//         .pricing-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 16px;
//           margin-top: 36px;
//           max-width: 620px;
//           margin-left: auto;
//           margin-right: auto;
//         }
//         .pricing-card {
//           padding: 32px 26px;
//           background: #FFFFFF;
//           border-radius: 12px;
//           border: 1px solid #E8E5E0;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }
//         .pricing-card .cta-primary,
//         .pricing-card .cta-secondary {
//           width: 100%;
//           text-align: center;
//           justify-content: center;
//           font-size: 14px;
//           padding: 12px 16px;
//         }
//         .pricing-card:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 4px 16px rgba(55, 53, 47, 0.06);
//         }
//         .pricing-card.pro {
//           border: 2px solid #37352F;
//           position: relative;
//         }
//         .pricing-card.pro::before {
//           content: "popular";
//           position: absolute;
//           top: -10px;
//           right: 20px;
//           padding: 2px 10px;
//           background: #37352F;
//           color: #FFFFFF;
//           font-size: 11px;
//           font-weight: 600;
//           font-family: 'JetBrains Mono', monospace;
//           border-radius: 4px;
//           letter-spacing: 0.04em;
//         }
//         .pricing-tier {
//           font-size: 13px;
//           font-weight: 600;
//           color: #9B9A97;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 6px;
//           font-family: 'JetBrains Mono', monospace;
//         }
//         .pricing-price {
//           font-size: 32px;
//           font-weight: 700;
//           color: #37352F;
//           margin-bottom: 22px;
//         }
//         .pricing-once {
//           font-size: 13px;
//           font-weight: 400;
//           color: #B4B3AF;
//         }
//         .pricing-list {
//           list-style: none;
//           margin-bottom: 24px;
//           flex: 1;
//         }
//         .pricing-list li {
//           font-size: 14px;
//           color: #787774;
//           margin-bottom: 9px;
//           line-height: 1.5;
//         }
//         .pricing-list li::before {
//           content: "\\2713";
//           color: #37352F;
//           font-weight: 600;
//           margin-right: 8px;
//         }

//         /* ── FAQ ── */
//         .faq-grid {
//           margin-top: 28px;
//           max-width: 600px;
//         }
//         .faq-item {
//           border-bottom: 1px solid #E8E5E0;
//           padding: 18px 0;
//           cursor: pointer;
//           user-select: none;
//         }
//         .faq-question {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 15px;
//           font-weight: 600;
//           color: #37352F;
//           gap: 16px;
//         }
//         .faq-toggle {
//           font-size: 18px;
//           color: #B4B3AF;
//           flex-shrink: 0;
//           font-family: 'JetBrains Mono', monospace;
//           transition: transform 0.25s ease, color 0.2s ease;
//         }
//         .faq-item:hover .faq-toggle {
//           color: #37352F;
//         }
//         .faq-answer {
//           margin-top: 0;
//           font-size: 14px;
//           color: #9B9A97;
//           line-height: 1.7;
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.35s ease, margin-top 0.35s ease, opacity 0.3s ease;
//           opacity: 0;
//         }
//         .faq-item.open .faq-answer {
//           max-height: 200px;
//           margin-top: 10px;
//           opacity: 1;
//         }
//         .faq-item.open .faq-toggle {
//           transform: rotate(45deg);
//         }

//         /* ── Final CTA ── */
//         .final-cta {
//           padding: 88px 24px;
//           text-align: center;
//           background: #FFFFFF;
//           border-top: 1px solid #F1F0EC;
//           position: relative;
//         }
//         .final-cta::before {
//           content: "";
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 500px;
//           height: 300px;
//           background: radial-gradient(ellipse, rgba(55, 53, 47, 0.03), transparent 70%);
//           pointer-events: none;
//         }
//         .final-cta h2 {
//           text-align: center;
//           position: relative;
//         }
//         .final-cta .body-text {
//           margin: 0 auto 28px;
//           text-align: center;
//           max-width: 440px;
//           position: relative;
//         }

//         /* ── Footer ── */
//         .maus-footer {
//           padding: 28px 24px;
//           border-top: 1px solid #F1F0EC;
//           text-align: center;
//         }
//         .maus-footer p {
//           font-size: 13px;
//           color: #B4B3AF;
//         }
//         .maus-footer a {
//           color: #9B9A97;
//           text-decoration: underline;
//           text-underline-offset: 3px;
//         }
//         .maus-footer a:hover {
//           color: #37352F;
//         }

//         /* ── Responsive ── */
//         @media (max-width: 600px) {
//           .hero { padding: 56px 20px 28px; }
//           .section { padding: 56px 20px; }
//           .final-cta { padding: 64px 20px; }
//           .cta-row { flex-direction: column; align-items: center; }
//           .cta-primary, .cta-secondary { width: 100%; max-width: 300px; text-align: center; }
//           .pricing-grid { max-width: 100%; grid-template-columns: 1fr; }
//           .problem-section .section-inner { padding-left: 16px; }
//         }
//       `}</style>

//       {/* ─── HEADER ─── */}
//       <header className="maus-header">
//         <div className="maus-header-icon">
//           <Rat size={18} color="#ffffff" />
//         </div>
//         <span className="maus-header-text">Maus</span>
//       </header>

//       {/* ─── HERO ─── */}
//       <section className="hero">
//         <div className="badge">3MB · No cloud · No fuss</div>
//         <h1>
//           Copy. Find. Paste.<br />
//           <span className="accent">Never break your flow.</span>
//         </h1>
//         <p className="hero-paragraph">
//           Maus lives quietly in your Mac. It remembers everything you copy, comes to you, and gets out of your way.
//         </p>
//         <div className="cta-row">
//           <DownloadCTA />
//           <a href={PRO_URL} className="cta-secondary">Buy Pro — $6.99</a>
//         </div>
//         <p className="cta-subtext">macOS 14+ · No account · No trial · Just works</p>

//         <div className="hero-image">
//           <div className="hero-image-placeholder">
//             [ Gif — Maus appearing next to cursor, find, paste, gone ]
//           </div>
//         </div>
//       </section>

//       {/* ─── SOCIAL PROOF ─── */}
//       <section className="proof-bar fade-section">
//         <div className="proof-inner">
//           <blockquote className="proof-quote">
//             {'"'}I{"'"}ve used Alfred, Raycast, PastePal and Maccy.{' '}
//             <strong>None come close to how quick-and-easy Maus is.</strong>{'"'}
//           </blockquote>
//         </div>
//       </section>

//       {/* ─── PROBLEM ─── */}
//       <section className="section problem-section fade-section">
//         <div className="section-inner">
//           <h2>Copy. Tab. Paste. Tab.<br />And repeat.</h2>
//           <div className="problem-lines">
//             <p className="problem-line">You bounce between apps.</p>
//             <p className="problem-line">Break focus.</p>
//             <p className="problem-line">A few seconds each time.</p>
//             <p className="problem-line">Back to what you were doing.</p>
//             <p className="problem-line">A few seconds more.</p>
//             <p className="problem-line emphasis">Dozens of times.</p>
//             <p className="problem-line emphasis">Every single day.</p>
//           </div>
//         </div>
//       </section>

//       {/* ─── HOW IT WORKS ─── */}
//       <section className="section fade-section">
//         <div className="section-inner">
//           <h2>Three keystrokes. That{"'"}s it.</h2>
//           <div className="steps-grid">
//             <div className="step">
//               <div className="step-number">1</div>
//               <h3>Copy things like you always do</h3>
//               <p>Maus silently remembers every Cmd+C. Text, images, links, files, colors — everything.</p>
//             </div>
//             <div className="step">
//               <div className="step-number">2</div>
//               <h3>Hit ⌘⇧V and <span className="step-highlight">Maus comes to you</span></h3>
//               <p>Right next to your cursor, in whatever app you{"'"}re in. You don{"'"}t switch windows. You don{"'"}t reach for the menubar. Your hands stay where they are.</p>
//             </div>
//             <div className="step">
//               <div className="step-number">3</div>
//               <h3>Find, paste, gone</h3>
//               <p>Search, click or keyboard-navigate, paste. Maus disappears. Back to work in under a second.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── FEATURES ─── */}
//       <section className="section features-section fade-section">
//         <div className="section-inner">
//           <h2>Small, fast, and stays out of your way</h2>
//           <div className="feature-grid">

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
//               </div>
//               <h3>Shows up where you are</h3>
//               <p>Not a fixed window. Not a menubar popup. Maus opens right at your cursor, in any app.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M6 12h12M6 16h8"/></svg>
//               </div>
//               <h3>100% keyboard-driven</h3>
//               <p>Navigate, search, paste, pin, delete — without ever touching your mouse.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
//               </div>
//               <h3>Multi-paste queue</h3>
//               <p>Select multiple items with Cmd+Click, hit Enter, and paste them all in sequence. Magic for forms and spreadsheets.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
//               </div>
//               <h3>Split text into clips</h3>
//               <p>Paste a list or CSV and split it into individual clips. One copy, many pastes.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>
//               </div>
//               <h3>Pin your essentials</h3>
//               <p>Email signatures, code snippets, addresses — pinned and always one keystroke away.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
//               </div>
//               <h3>Edit before pasting</h3>
//               <p>Double-click any clip to edit it. Fix a typo, update a link, trim whitespace.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/></svg>
//               </div>
//               <h3>Everything you copy</h3>
//               <p>Text, images, links, files, hex colors. If your Mac can copy it, Maus remembers it.</p>
//             </div>

//             <div className="feature-card">
//               <div className="feature-icon">
//                 <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
//               </div>
//               <h3>Private. Completely.</h3>
//               <p>No cloud. No sync. No account. No analytics. 3MB on your Mac and nowhere else.</p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ─── TESTIMONIALS ─── */}
//       <section className="section testimonials-section fade-section">
//         <div className="section-inner">
//         <h2 style={{ marginBottom: '4px' }}>Designed for macOS</h2>
//         <p className="body-text" style={{ textAlign: 'center', margin: '0 auto 48px' }}>Built and designed to be fast, reliable, and easy to use.</p>
//         <div className="testimonial-grid">
//             <div className="testimonial-card">
//               <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
//               <p>Don{"'"}t compare this app to others. I{"'"}ve tried tons of clipboard managers. This one became my favorite.</p>
//             </div>
//             <div className="testimonial-card">
//               <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
//               <p>I ended up purchasing it because it is so damn useful. An unexpected productivity hack.</p>
//             </div>
//             <div className="testimonial-card">
//               <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
//               <p>While PastePal is elegant, Maus is crazy quick and straightforward.</p>
//             </div>
//             <div className="testimonial-card">
//               <div className="testimonial-stars">{"★★★★★".split("").map((s, i) => <span key={i} className="testimonial-star">{s}</span>)}</div>
//               <p>I freaking love this, well done!</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── PRICING ─── */}
//       <section className="section pricing-section fade-section">
//         <div className="section-inner">
//           <h2 style={{ textAlign: 'center' }}>Free forever. Pro if you want more history.</h2>
//           <p className="problem-line" style={{ textAlign: 'center', margin: '0 auto 14px' }}>No trial. No {'"'}7 days left{'"'}. The free version has every feature, no catches.</p>

//           <div className="pricing-grid">
//             <div className="pricing-card">
//               <div className="pricing-tier">Free</div>
//               <div className="pricing-price">$0</div>
//               <ul className="pricing-list">
//                 <li>24 hours of clipboard history</li>
//                 <li>Search across all clips</li>
//                 <li>Pin your favorites</li>
//                 <li>Images, files, links, colors, code</li>
//                 <li>Multipaste queue</li>
//                 <li>Split text into clips</li>
//                 <li>Rename clips</li>
//                 <li>Edit clip content</li>
//                 <li>Exclude sensitive apps</li>
//                 <li>Multiple ways to open Maus</li>
//                 <li>Full keyboard navigation</li>
//                 <li>Light &amp; Dark mode</li>
//               </ul>
//               <DownloadCTA />
//             </div>
//             <div className="pricing-card pro">
//               <div className="pricing-tier">Pro</div>
//               <div className="pricing-price">$6.99 <span className="pricing-once">one-time, forever</span></div>
//               <ul className="pricing-list">
//                 <li>Everything in Free</li>
//                 <li>Unlimited history</li>
//                 <li>Dracula, Solarized &amp; more themes</li>
//                 <li>All future updates</li>
//               </ul>
//               <a href={PRO_URL} className="cta-secondary">Buy Pro — $6.99</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── FAQ ─── */}
//       <section className="section fade-section">
//         <div className="section-inner">
//           <h2>Questions</h2>
//           <div className="faq-grid">
//             <FaqItem question="Is it actually free?" answer="Yes. Every feature works in the free version. Pro only adds unlimited history (vs 24h) and extra themes. No trial, no expiration, no &quot;upgrade to continue&quot; popups." />
//             <FaqItem question="Does my data leave my Mac?" answer="No. Zero cloud. Zero sync. Zero accounts. Your clipboard history stays on your machine and nowhere else." />
//             <FaqItem question="Does it work in Terminal?" answer="Yes. Maus works everywhere — Terminal, iTerm2, SSH sessions, any app on your Mac." />
//             <FaqItem question="How is it different from Raycast or Maccy?" answer="Maus appears where your cursor is. Not in a fixed window, not in the menubar. Hit the shortcut, and it's right there. That's the difference — it sounds small until you try it." />
//             <FaqItem question="Why not the Mac App Store?" answer="Maus uses low-level macOS APIs for speed and reliability that aren't allowed in the App Store. The trade-off is worth it." />
//             <FaqItem question="$6.99 one-time? No subscription?" answer="No subscription. Pay once, use forever, updates included. A clipboard manager shouldn't be a recurring bill." />
//             <FaqItem question="Can I customize Maus?" answer="Yes. You can choose how to open Maus (shortcut, hotkey, double-tap, key+click), pick a theme, and hide features you don't use — they still work via shortcuts, but the interface stays clean. Some users run Maus with just the clip list and nothing else." />
//           </div>
//         </div>
//       </section>

//       {/* ─── FINAL CTA ─── */}
//       <section className="final-cta">
//         <div className="section-inner">
//           <h2>Stop wasting time every day.</h2>
//           <p className="body-text">Takes 10 seconds to install. 3MB. You{"'"}ll barely know it{"'"}s there — until you need it.</p>
//           <div className="cta-row">
//             <DownloadCTA />
//             <a href={PRO_URL} className="cta-secondary">Buy Pro — $6.99</a>
//           </div>
//           <p className="cta-subtext">macOS 14+ · No account required</p>
//         </div>
//       </section>

//       {/* ─── FOOTER ─── */}
//       <footer className="maus-footer">
//         <p>Maus 2026</p>
//       </footer>
//     </div>
//   );
// };

// export default MausLanding;

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
                <a href="/maus/releases/Maus-2.0.1.dmg" className="cta-button primary">
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
                <video autoPlay loop muted playsInline>
                  <source src="/spotwoutweb.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="mac-only">Requires macOS 14+</p>
            </div>
            
            {/* Mobile CTAs */}
            <div className="mobile-ctas">
              <div className="cta-row">
                <a href="/maus/releases/Maus-2.0.1.dmg" className="cta-button primary">
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
              <video autoPlay loop muted playsInline>
                <source src="/maus-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mac-only">Requires macOS 14+</p>
          </div>
        </main>

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
              <a href="/maus/releases/Maus-2.0.1.dmg" className="cta-button primary">
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
            <a href="/maus/releases/Maus-2.0.1.dmg" className="cta-button primary">
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
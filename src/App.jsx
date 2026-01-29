import React from 'react';
import { Zap, Pin, Search, Link, SlidersHorizontal, Rat, Lock } from 'lucide-react';

const MausLanding = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1a1a1a',
      lineHeight: 1.6,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* Header */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          position: sticky;
          top: 0;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          z-index: 100;
          border-bottom: 1px solid #f0f0f0;
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
          font-size: 18px;
        }
        
        .logo-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 22px;
          letter-spacing: -0.5px;
        }
        
        .header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #7C6BFF;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .header-cta:hover {
          background: #6B5CE7;
        }
        
        .header-cta svg {
          width: 16px;
          height: 16px;
        }
        
        /* Hero Section - Compact */
        .hero-section {
          text-align: center;
          padding: 48px 24px 32px;
          max-width: 640px;
          margin: 0 auto;
        }
        
        .hero h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(36px, 8vw, 52px);
          font-weight: 400;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        
        .hero .subhero {
          font-size: 18px;
          color: #666;
          margin-bottom: 28px;
        }
        
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #7C6BFF;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          margin-bottom: 12px;
        }
        
        .hero-cta:hover {
          background: #6B5CE7;
          transform: translateY(-1px);
        }
        
        .hero-illustration {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          width: 140px;
          height: auto;
          opacity: 0.9;
        }
        
        .hero-wrapper {
          position: relative;
          display: inline-block;
        }
        
        @media (max-width: 700px) {
          .hero-illustration {
            display: none;
          }
        }
        
        .hero-cta svg {
          width: 18px;
          height: 18px;
        }
        
        .mac-only {
          font-size: 13px;
          color: #888;
        }
        
        /* Demo Section - Prominent */
        .demo-section {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .demo-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 12px 48px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .demo-card-header {
          padding: 16px 20px;
          border-bottom: 1px solid #f0f0f0;
          background: #fafafa;
        }
        
        .demo-card-title {
          font-size: 14px;
          font-weight: 500;
          color: #666;
        }
        
        .demo-placeholder {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #bbb;
        }
        
        .demo-placeholder svg {
          width: 56px;
          height: 56px;
          opacity: 0.4;
        }
        
        /* Social Proof */
        .social-proof {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 48px;
          padding: 0 24px;
        }
        
        .avatars {
          display: flex;
          align-items: center;
        }
        
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid white;
          margin-left: -12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          font-weight: 500;
        }
        
        .avatar:first-child {
          margin-left: 0;
        }
        
        .avatar:nth-child(1) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .avatar:nth-child(2) { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .avatar:nth-child(3) { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .avatar:nth-child(4) { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        .avatar:nth-child(5) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        
        .social-proof-text {
          font-size: 14px;
          color: #888;
        }
        
        /* Container for rest of content */
        .container {
          max-width: 720px;
          margin: 0 auto;
          padding: 64px 24px 80px;
        }
        
        /* Feature Cards */
        .features {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 64px;
        }
        
        .feature-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }
        
        .feature-card-header {
          padding: 20px 20px 16px;
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .feature-card-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        
        .feature-card-icon {
          color: #666;
        }
        
        .feature-card-title {
          font-size: 18px;
          font-weight: 500;
          color: #1a1a1a;
        }
        
        .feature-card-subtitle {
          font-size: 14px;
          color: #888;
          font-style: italic;
          padding-left: 30px;
        }
        
        .feature-card-content {
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #bbb;
          padding: 24px;
        }
        
        .feature-card-content svg {
          width: 40px;
          height: 40px;
          opacity: 0.3;
        }
        
        /* Toggle Features Section */
        .toggle-section {
          background: #1a1a1a;
          border-radius: 16px;
          padding: 48px 32px;
          margin: 64px 0;
          text-align: center;
          color: white;
        }
        
        .toggle-section-icon {
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }
        
        .toggle-section h2 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }
        
        .toggle-section p {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          max-width: 440px;
          margin: 0 auto 24px;
        }
        
        .toggle-examples {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }
        
        .toggle-example {
          background: rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.8);
        }
        
        .divider {
          height: 1px;
          background: #e8e8e8;
          margin: 64px 0;
        }
        
        /* More Features */
        .more-features {
          text-align: center;
          padding: 32px 0;
          margin-top: 16px;
        }
        
        .more-features-title {
          font-size: 14px;
          font-weight: 500;
          color: #888;
          margin-bottom: 8px;
        }
        
        .more-features-list {
          font-size: 15px;
          color: #666;
        }
        
        /* Privacy footnote */
        .privacy-note {
          text-align: center;
          font-size: 13px;
          color: #888;
          margin-top: 24px;
          padding: 16px;
          background: #fafafa;
          border-radius: 8px;
        }
        
        /* Pricing */
        .pricing {
          text-align: center;
          padding: 48px 0;
        }
        
        .pricing-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }
        
        @media (max-width: 540px) {
          .pricing-cards {
            grid-template-columns: 1fr;
          }
        }
        
        .pricing-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(0, 0, 0, 0.06);
          padding: 32px 24px;
          text-align: center;
        }
        
        .pricing-card.featured {
          background: #1a1a1a;
          color: white;
        }
        
        .pricing-card-name {
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #888;
          margin-bottom: 8px;
        }
        
        .pricing-card.featured .pricing-card-name {
          color: rgba(255,255,255,0.6);
        }
        
        .pricing-card-price {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 48px;
          letter-spacing: -2px;
          margin-bottom: 8px;
        }
        
        .pricing-card-detail {
          font-size: 14px;
          color: #888;
          margin-bottom: 24px;
        }
        
        .pricing-card.featured .pricing-card-detail {
          color: rgba(255,255,255,0.6);
        }
        
        .pricing-card-feature {
          font-size: 15px;
          color: #666;
          padding: 8px 0;
          border-top: 1px solid #f0f0f0;
        }
        
        .pricing-card.featured .pricing-card-feature {
          color: rgba(255,255,255,0.8);
          border-top-color: rgba(255,255,255,0.1);
        }
        
        .pricing-card-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          margin-top: 24px;
        }
        
        .pricing-card-cta.secondary {
          background: #7C6BFF;
          color: white;
        }
        
        .pricing-card-cta.secondary:hover {
          background: #6B5CE7;
        }
        
        .pricing-card-cta.primary {
          background: #ffffff;
          color: #1a1a1a;
        }
        
        .pricing-card-cta.primary:hover {
          background: #f0f0f0;
        }
        
        .pricing-card-cta svg {
          width: 16px;
          height: 16px;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a1a1a;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .cta-button:hover {
          background: #333;
          transform: translateY(-1px);
        }
        
        .cta-button svg {
          width: 18px;
          height: 18px;
        }
        
        .footer {
          text-align: center;
          padding: 48px 0 32px;
          font-size: 14px;
          color: #999;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <Rat size={20} color="white" />
          </div>
          <span className="logo-text">Maus</span>
        </div>
        <button className="header-cta">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Get Maus free
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero">
          <div className="hero-wrapper">
            <h1>Your copy-paste memory.<br />Always handy.</h1>
            <img 
              src="/maus-illustration.png" 
              alt="Maus mascot" 
              className="hero-illustration"
            />
          </div>
          <p className="subhero">
            Maus is always where your cursor is.
          </p>
          <button className="hero-cta">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Get Maus free
          </button>
          <p className="mac-only">macOS 14+</p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <div className="demo-card">
          <div className="demo-card-header">
            <span className="demo-card-title">See it in action</span>
          </div>
          <div className="demo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>GIF placeholder</span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <div className="avatars">
            <div className="avatar">M</div>
            <div className="avatar">K</div>
            <div className="avatar">J</div>
            <div className="avatar">A</div>
            <div className="avatar">S</div>
          </div>
          <p className="social-proof-text">Trusted by hundreds of Mac users</p>
        </div>
      </section>

      <div className="container">
        {/* Feature Cards - Main 4 */}
        <div className="features">
          
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-title-row">
                <Zap size={18} className="feature-card-icon" />
                <span className="feature-card-title">Appears and disappears</span>
              </div>
              <p className="feature-card-subtitle">"No giant window in the middle of my screen—it pops up at my cursor, I paste, it's gone"</p>
            </div>
            <div className="feature-card-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>GIF placeholder</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-title-row">
                <Link size={18} className="feature-card-icon" />
                <span className="feature-card-title">Back to the source</span>
              </div>
              <p className="feature-card-subtitle">"Jump back to the exact ChatGPT conversation where I copied that snippet"</p>
            </div>
            <div className="feature-card-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>GIF placeholder</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-title-row">
                <Pin size={18} className="feature-card-icon" />
                <span className="feature-card-title">Pin what matters</span>
              </div>
              <p className="feature-card-subtitle">"My email signature, my address, my Zoom link—always at the top"</p>
            </div>
            <div className="feature-card-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>GIF placeholder</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-title-row">
                <Search size={18} className="feature-card-icon" />
                <span className="feature-card-title">Find anything, fast</span>
              </div>
              <p className="feature-card-subtitle">"That tracking number from last week? Found it in 2 seconds"</p>
            </div>
            <div className="feature-card-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>GIF placeholder</span>
            </div>
          </div>

        </div>

        {/* Secondary features */}
        <div className="more-features">
          <p className="more-features-title">And more</p>
          <p className="more-features-list">Rename items · Paste in sequence · Reveal files in Finder · Split text by lines</p>
        </div>

        {/* Toggle Features Section */}
        <div className="toggle-section">
          <div className="toggle-section-icon">
            <SlidersHorizontal size={24} />
          </div>
          <h2>Use only what you need</h2>
          <p>
            Most clipboard managers overwhelm you with features. Maus lets you turn off anything you don't use. Keep it minimal, keep it yours.
          </p>
          <div className="toggle-examples">
            <span className="toggle-example">Double-tap ⌘</span>
            <span className="toggle-example">Paste in sequence</span>
            <span className="toggle-example">Split text</span>
          </div>
        </div>

        <div className="divider" />

        {/* Pricing */}
        <div className="pricing">
          <div className="pricing-cards">
            <div className="pricing-card">
              <p className="pricing-card-name">Free</p>
              <p className="pricing-card-price">$0</p>
              <p className="pricing-card-detail">Free forever</p>
              <p className="pricing-card-feature">All features included</p>
              <p className="pricing-card-feature">24-hour history</p>
              <button className="pricing-card-cta secondary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download Free
              </button>
            </div>
            
            <div className="pricing-card featured">
              <p className="pricing-card-name">Pro</p>
              <p className="pricing-card-price">$6.99</p>
              <p className="pricing-card-detail">One-time purchase</p>
              <p className="pricing-card-feature">All features included</p>
              <p className="pricing-card-feature">Unlimited history</p>
              <button className="pricing-card-cta primary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Get Pro
              </button>
            </div>
          </div>
          
          <p className="mac-only">macOS 14+</p>
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="privacy-note"><Lock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />100% local. Your data never leaves your Mac.</p>
          <p style={{ marginTop: '24px' }}>Made for people who copy a lot.</p>
        </div>
      </div>
    </div>
  );
};

export default MausLanding;
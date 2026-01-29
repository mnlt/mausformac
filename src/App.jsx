import React from 'react';
import { Rat } from 'lucide-react';

const MausLanding = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1a1a1a',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        
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
          padding: 40px;
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
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
        
        .callout {
          margin-top: 32px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        
        .callout-features {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        
        .callout-meta {
          font-size: 13px;
          color: #888;
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
        
        /* Mobile */
        @media (max-width: 900px) {
          .main {
            flex-direction: column;
            padding: 24px;
            gap: 40px;
          }
          
          .hero {
            text-align: center;
            max-width: 100%;
          }
          
          .hero h1 {
            font-size: 32px;
          }
          
          .ctas {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .demo {
            width: 100%;
            max-width: 400px;
          }
          
          .mac-only {
            text-align: center;
          }
        }
        
        @media (max-width: 500px) {
          .header {
            padding: 16px 20px;
          }
          
          .ctas {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 200px;
          }
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="logo-icon">
              <Rat size={20} color="#ffffff" />
            </div>
            <span className="logo-text">Maus</span>
          </div>
        </header>

        {/* Main */}
        <main className="main">
          {/* Left - Hero */}
          <div className="hero">
            <h1>Your copy-paste memory. Always handy.</h1>
            <p className="subhero">
            A clipboard manager that lives where your cursor is.
            </p>
            
            <div className="ctas">
              <div className="cta-group">
                <a href="/maus/releases/Maus-1.0.dmg" className="cta-button primary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download Free
                </a>
                <span className="cta-subtext">Free forever · 24h history</span>
              </div>
              
              <div className="cta-group">
                <a href="https://superpaste.lemonsqueezy.com/buy/5765dfc1-e222-42ad-a04f-5fe4dacc39cb" className="cta-button secondary">
                  Get Pro – $6.99
                </a>
                <span className="cta-subtext">One-time · Unlimited history</span>
              </div>
            </div>
            
            <div className="social-proof">
            <div className="avatars">
              <img className="avatar" src="/avatar1.jpeg" alt="" />
              <img className="avatar" src="/avatar2.jpeg" alt="" />
              <img className="avatar" src="/avatar3.jpeg" alt="" />
              <img className="avatar" src="/avatar4.jpeg" alt="" />
              <img className="avatar" src="/avatar5.jpeg" alt="" />
            </div>
              <p className="social-proof-text">Trusted by hundreds of Mac users</p>
            </div>
            
            {/* <div className="callout">
              <p className="callout-features">
                Pin favorites · Advanced Search · Back to source · Rename · Paste queue · Split texts...
              </p>
              <p className="callout-meta">
                3 MB · 100% private, nothing leaves your Mac
              </p>
            </div> */}
          </div>

          {/* Right - Demo */}
          <div className="demo-container">
          <div className="demo">
  <video autoPlay loop muted playsInline>
    <source src="/maus-demo.mp4" type="video/mp4" />
  </video>
</div>
            <p className="mac-only">Requires macOS 14+</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MausLanding;
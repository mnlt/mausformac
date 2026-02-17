import React, { useState } from 'react';
import { Rat, ChevronDown, Star } from 'lucide-react';

const MausLanding = () => {

  const [linkCopied, setLinkCopied] = useState(false);
  const [activeAtom, setActiveAtom] = useState(0);

  const ATOMS = [
    { id: 'customize', label: 'Make it yours', description: "Shortcut, position, theme, features — every detail is yours to tweak. Make Maus feel like it was built for you.", gif: 'customize.gif' },
    { id: 'history', label: 'Copy paste history', description: "Everything you copy is saved. Open Maus and it's all there — text, images, links, files, colors.", gif: 'history.gif' },
    { id: 'search', label: 'Search', description: "Type to find anything you've ever copied. The more history you have, the more powerful this gets.", gif: 'search.gif' },
    { id: 'pin', label: 'Pins', description: "Addresses, API keys, canned replies — pin them and they're always at the top. One shortcut away.", gif: 'pin.gif' },
    { id: 'queue', label: 'Paste queue', description: 'Select multiple items, hit Enter, and they paste one by one in order. Forms, spreadsheets — done.', gif: 'queue.gif' },
    { id: 'split', label: 'Split', description: 'Paste a list or CSV and split it into individual clips. Then paste each one wherever it needs to go.', gif: 'split.gif' },
    { id: 'edit', label: 'Edit', description: 'See the full content before pasting. Fix a typo, tweak a URL — no need to copy again.', gif: 'edit.gif' },
    { id: 'shortcuts', label: 'Shortcut lovers, welcome', description: 'Navigate, search, paste, pin, delete — all without touching the mouse. Every feature has a shortcut.', gif: 'shortcuts.gif' },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.mausformac.com').then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = 'https://www.mausformac.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    });

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

  const applePath = "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z";

  /* ---------------------------------------------------------- */
  /* USE CASES DATA                                             */
  /* ---------------------------------------------------------- */
  const USE_CASES = [
    {
      before: '',
      keyword: 'Fill forms',
      after: ' in seconds',
      sentence: 'Name, email, phone, address — select them in order, hit Enter, done.',
      features: ['Range select', 'Paste queue'],
      gif: 'fill-forms.gif',
      color: '#FF7237',
    },
    {
      before: '',
      keyword: 'Code',
      after: ' much faster',
      sentence: 'That SSH command from last week? That API key? Search, paste, move on.',
      features: ['Search', 'History'],
      gif: 'code-faster.gif',
      color: '#26CB71',
    },
    {
      before: '',
      keyword: 'Reply',
      after: ' to emails instantly',
      sentence: 'Pin your saved replies. Paste, tweak one word, send.',
      features: ['Pins', 'Edit'],
      gif: 'reply-instantly.gif',
      color: '#C3B6FC',
    },
    {
      before: '',
      keyword: 'Move data',
      after: ' between apps',
      sentence: 'Copy a column, split it into clips, paste them one by one wherever.',
      features: ['Split', 'Paste queue'],
      gif: 'move-data.gif',
      color: '#FF7237',
    },
  ];

  /* (no highlight effect — clean titles) */

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F6F5F4',
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
        
        /* ============================================ */
        /* HEADER — sticky                              */
        /* ============================================ */
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 40px 14px 56px;
          background: #F6F5F4;
          border-bottom: 1px solid #1a1a1a;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .logo-icon {
          width: 32px;
          height: 32px;
          background: #1a1a1a;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.3px;
        }
        
        .header-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          cursor: pointer;
          border: 2px solid #1a1a1a;
          background: #C3B6FC;
          color: #1a1a1a;
          transition: background 0.15s ease, transform 0.1s ease;
        }
        
        .header-cta:hover {
          background: #b5a5f7;
        }
        
        .header-cta:active {
          transform: scale(0.97);
        }
        
        .header-cta svg {
          width: 14px;
          height: 14px;
        }
        
        /* ============================================ */
        /* HERO                                         */
        /* ============================================ */
        .main {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 40px 16px;
        }
        
        .hero {
          max-width: 600px;
          text-align: center;
        }
        
        .hero h1 {
          font-family: 'Inter', sans-serif;
          font-size: 48px;
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
        
        .hero-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
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
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
        }
        
        .cta-button.primary {
          background: #C3B6FC;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
        }
        
        .cta-button.primary:hover {
          background: #b5a5f7;
        }
        
        .cta-button.primary:active {
          transform: scale(0.97);
        }
        
        .cta-button svg {
          width: 16px;
          height: 16px;
        }
        
        .cta-meta {
          font-size: 13px;
          color: #888;
          text-align: center;
        }

        /* ============================================ */
        /* SPOT VIDEO                                   */
        /* ============================================ */
        .spot-section {
          padding: 20px 40px 0;
          max-width: 900px;
          margin: 0 auto;
        }

        .spot-video {
          width: 100%;
          border-radius: 36px;
          display: block;
          border: 4px solid #1a1a1a;
        }

        /* ============================================ */
        /* USE CASES — dark block                       */
        /* ============================================ */
        .usecases-outer {
          padding: 80px 40px 80px 56px;
        }

        .usecases-block {
          max-width: 100%;
          margin: 0 auto;
          background: #1a1a1a;
          border-radius: 60px;
          padding: 72px 80px;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .usecases-header {
          text-align: center;
          margin-bottom: 8px;
        }

        .usecases-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          color: #F6F5F4;
        }

        /* Single use case row */
        .uc-row {
          display: flex;
          align-items: center;
          gap: 56px;
        }

        .uc-row.reverse {
          flex-direction: row-reverse;
        }

        .uc-text {
          flex: 1;
          min-width: 0;
        }

        .uc-gif-wrap {
          flex: 1.2;
          min-width: 0;
        }

        .uc-gif-wrap img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          display: block;
        }

        /* Feature chips */
        .uc-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0px;
          margin-bottom: 18px;
        }

        .uc-chip {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.1px;
        }

        /* Title with organic underline */
        .uc-title {
          font-family: 'Inter', sans-serif;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -0.8px;
          line-height: 1.25;
          color: #F6F5F4;
          margin-bottom: 14px;
        }

        .uc-sentence {
          font-size: 16px;
          color: #999;
          line-height: 1.55;
          letter-spacing: -0.1px;
        }

        /* ============================================ */
        /* SOCIAL PROOF                                 */
        /* ============================================ */
        .testimonials-section {
          padding: 100px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .testimonials-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .testimonials-loved-text {
          font-size: 15px;
          font-weight: 500;
          color: #888;
          letter-spacing: -0.1px;
          margin-bottom: 14px;
        }

        .testimonials-avatars {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonials-avatars img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2.5px solid #F6F5F4;
          margin-left: -10px;
          object-fit: cover;
        }

        .testimonials-avatars img:first-child {
          margin-left: 0;
        }

        /* Testimonial items — organic flow */
        .testimonials-flow {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
        }

        .testimonial-item {
          max-width: 320px;
          text-align: center;
        }

        .testimonial-item-stars {
          display: flex;
          justify-content: center;
          gap: 3px;
          margin-bottom: 12px;
        }

        .testimonial-item-stars svg {
          width: 16px;
          height: 16px;
          fill: #facc15;
          color: #facc15;
        }

        .testimonial-item-text {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: #444;
          line-height: 1.55;
          letter-spacing: -0.2px;
        }
        /* ============================================ */
        /* FEATURES ATOMIC — dark green block            */
        /* ============================================ */
        .features-section {
          padding: 0 40px 100px 56px;
        }

        .features-block {
          background: #024F46;
          border-radius: 60px;
          padding: 72px 64px;
        }

        .features-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .features-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1.2px;
          color: #F6F5F4;
        }

        .features-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 680px;
          margin: 0 auto 40px;
          gap: 10px;
          margin-bottom: 40px;
        }

        .feature-chip {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.1px;
          background: #024F46;
          color: #F6F5F4;
          border: 4px solid #F6F5F4;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
        }

        .feature-chip:hover {
          background: rgba(255, 255, 235, 0.1);
        }

        .feature-chip.active {
          background: #F6F5F4;
          color: #024F46;
        }

        .feature-chip.active-orange {
          background: #FF7237;
          color: #1a1a1a;
          border-color: #1a1a1a;
        }

        .features-gif-container {
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
        }

        .features-gif-container img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Shortcuts cheatsheet (inside features block) */
        .shortcuts-grid {
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .shortcuts-group-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 235, 0.4);
          padding: 20px 0 8px;
        }

        .shortcuts-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 235, 0.1);
        }

        .shortcuts-row:last-child {
          border-bottom: none;
        }

        .shortcuts-label {
          font-size: 14px;
          font-weight: 500;
          color: #FFFFEB;
        }

        .shortcuts-keys {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .shortcuts-kbd {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 26px;
          height: 26px;
          padding: 0 7px;
          border-radius: 5px;
          background: rgba(255, 255, 235, 0.1);
          border: 1px solid rgba(255, 255, 235, 0.2);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
          font-family: 'SF Mono', 'Menlo', monospace;
          font-size: 12px;
          font-weight: 600;
          color: #FFFFEB;
          line-height: 1;
        }

        .features-description {
          text-align: center;
          max-width: 560px;
          margin: 24px auto 0;
          font-size: 17px;
          font-weight: 500;
          color: rgba(255, 255, 235, 0.65);
          line-height: 1.55;
          letter-spacing: -0.2px;
        }

        /* ============================================ */
        /* PRICING                                      */
        /* ============================================ */
        .pricing-section {
          padding: 100px 40px;
          max-width: 680px;
          margin: 0 auto;
        }

        .pricing-title {
          font-family: 'Inter', sans-serif;
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -1.5px;
          color: #1a1a1a;
          margin-bottom: 40px;
          line-height: 1.2;
          text-align: center;
        }

        .pricing-free-chip {
          display: inline-block;
          padding: 4px 20px;
          border-radius: 100px;
          background: #C3B6FC;
          border: 2px solid #1a1a1a;
          transform: rotate(-2deg);
          margin: 0 2px;
        }

        .pricing-content {
          border: 4px solid #1a1a1a;
          border-radius: 20px;
          padding: 40px;
        }

        .pricing-check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .pricing-check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: #1a1a1a;
          letter-spacing: -0.2px;
        }

        .pricing-check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #26CB71;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pricing-check-icon svg {
          width: 13px;
          height: 13px;
          stroke: white;
          stroke-width: 3;
          fill: none;
        }

        .pricing-body {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 400;
          color: #555;
          line-height: 1.7;
          letter-spacing: -0.2px;
          margin-bottom: 20px;
        }

        .pricing-body strong {
          font-weight: 600;
          color: #1a1a1a;
        }

        .pricing-divider {
          border: none;
          border-top: 4px solid #1a1a1a;
          margin: 28px 0;
        }

        .pricing-pro-label {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #888;
          margin-bottom: 16px;
          letter-spacing: -0.2px;
        }

        .pricing-pro {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #888;
          line-height: 1.65;
        }

        .pricing-pro strong {
          font-weight: 600;
          color: #1a1a1a;
        }

        /* ============================================ */
        /* FOOTER CTA — full width, final push          */
        /* ============================================ */
        .footer-cta-section {
          background: #1a1a1a;
          margin: 0 40px 0 56px;
          border-radius: 60px 60px 0 0;
          padding: 80px 40px;
          text-align: center;
        }

        .footer-cta-headline {
          font-family: 'Inter', sans-serif;
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -1.5px;
          color: #F6F5F4;
          margin-bottom: 12px;
          line-height: 1.15;
        }

        .footer-cta-sub {
          font-size: 17px;
          color: #999;
          margin-bottom: 36px;
          line-height: 1.5;
          letter-spacing: -0.2px;
        }

        .footer-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .footer-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
          background: #C3B6FC;
          color: #1a1a1a;
          border: 2px solid #C3B6FC;
        }

        .footer-cta-button:hover {
          background: #b5a5f7;
          border-color: #b5a5f7;
        }

        .footer-cta-button:active {
          transform: scale(0.97);
        }

        .footer-cta-button svg {
          width: 16px;
          height: 16px;
        }

        .footer-cta-meta {
          font-size: 13px;
          color: #666;
        }

        .footer-cta-mobile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
          background: #C3B6FC;
          color: #1a1a1a;
          border: 2px solid #C3B6FC;
          width: 100%;
          max-width: 280px;
        }

        .footer-cta-mobile-btn:hover {
          background: #b5a5f7;
        }

        .footer-cta-mobile-btn:active {
          transform: scale(0.97);
        }

        /* ============================================ */
        /* FOOTER                                       */
        /* ============================================ */
        .footer {
          background: #1a1a1a;
          margin: 0 40px 0 56px;
          padding: 24px 40px;
          border-top: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 0 0 0 0;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #666;
        }

        .footer-left svg {
          color: #666;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 13px;
          color: #666;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #999;
        }

        /* ============================================ */
        .mobile-mac-notice {
          text-align: center;
        }
        
        .mobile-mac-notice p {
          font-size: 14px;
          color: #666;
          font-weight: 500;
          line-height: 1.5;
        }

        .mobile-ctas {
          display: none;
        }

        @media (max-width: 900px) {
          .header {
            padding: 12px 20px 12px 28px;
          }

          .header-cta span {
            display: none;
          }

          .header-cta {
            padding: 9px 14px;
            font-size: 13px;
          }

          .main {
            padding: 40px 24px 24px;
          }
          
          .hero {
            max-width: 100%;
          }
          
          .hero h1 {
            font-size: 32px;
          }
          
          .hero .subhero {
            margin-bottom: 24px;
          }
          
          .desktop-only {
            display: none !important;
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

          .spot-section {
            padding: 16px 16px 0;
          }

          /* Testimonials mobile */
          .testimonials-section {
            padding: 60px 24px;
          }

          .testimonials-section-title {
            font-size: 28px;
          }

          .testimonials-flow {
            gap: 28px;
          }

          .testimonial-item {
            max-width: 100%;
          }

          .testimonial-item-text {
            font-size: 16px;
          }

          /* Use cases mobile */
          .usecases-outer {
            padding: 48px 16px;
          }

          .usecases-block {
            border-radius: 36px;
            padding: 40px 24px;
            gap: 56px;
          }

          .usecases-title {
            font-size: 28px;
          }

          .uc-row,
          .uc-row.reverse {
            flex-direction: column;
            gap: 28px;
          }

          .uc-title {
            font-size: 24px;
          }

          .uc-sentence {
            font-size: 15px;
          }

          /* On mobile, GIF always on top */
          .uc-gif-wrap {
            order: -1;
          }

          /* Features mobile */
          .features-section {
            padding: 0 16px 48px;
          }

          .features-block {
            border-radius: 36px;
            padding: 40px 20px;
          }

          .features-title {
            font-size: 28px;
          }

          .features-chips {
            gap: 8px;
            margin-bottom: 28px;
          }

          .feature-chip {
            padding: 8px 16px;
            font-size: 14px;
            border-width: 3px;
          }

          .features-description {
            font-size: 15px;
          }

          /* Pricing mobile */
          .pricing-section {
            padding: 60px 24px;
          }

          .pricing-title {
            font-size: 32px;
          }

          .pricing-content {
            padding: 28px 24px;
          }

          .pricing-body {
            font-size: 16px;
          }

          /* Footer CTA mobile */
          .footer-cta-section {
            padding: 60px 24px;
            margin: 0 16px;
            border-radius: 36px 36px 0 0;
          }

          .footer-cta-headline {
            font-size: 32px;
          }

          .footer-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .footer-cta-desktop {
            display: none !important;
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
            margin: 0 16px;
          }
        }
        
        @media (min-width: 901px) {
          .mobile-ctas,
          .mobile-mac-notice,
          .footer-cta-mobile {
            display: none;
          }
        }
        
        @media (max-width: 500px) {
          .header {
            padding: 12px 16px 12px 20px;
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
              <Rat size={18} color="#ffffff" />
            </div>
            <span className="logo-text">Maus</span>
          </div>
          <a href="/maus/releases/Maus-1.5.5.dmg" className="header-cta desktop-only">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d={applePath}/></svg>
            <span>Download Free for Mac</span>
          </a>
        </header>

        {/* ============================================ */}
        {/* HERO                                         */}
        {/* ============================================ */}
        <main className="main">
          <div className="hero">
            <h1>Your Mac only remembers the last thing you copied.</h1>
            <p className="subhero">
              Maus remembers everything.<br />Copy-paste history that opens where your mouse is.
            </p>
            
            <div className="hero-cta desktop-only">
              <a href="/maus/releases/Maus-1.5.5.dmg" className="cta-button primary">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d={applePath}/></svg>
                Download Free for Mac
              </a>
              <span className="cta-meta">All features · 24h history · No account</span>
            </div>

            <div className="mobile-ctas">
              <div className="mobile-mac-notice">
                <p>Maus is a Mac app.</p>
              </div>
              <button className="cta-button primary" onClick={handleCopyLink} style={{width: '100%', maxWidth: 280}}>
                {linkCopied ? '✓ Link copied!' : 'Copy download link'}
              </button>
              <span className="cta-meta">Send it to yourself · Free forever · macOS 14+</span>
            </div>
          </div>
        </main>

        {/* ============================================ */}
        {/* SPOT VIDEO                                   */}
        {/* ============================================ */}
        <section className="spot-section">
          <video
            className="spot-video"
            autoPlay
            loop
            muted
            playsInline
            src="spotwoutweb.mp4"
          />
        </section>

        {/* ============================================ */}
        {/* USE CASES                                    */}
        {/* ============================================ */}
        <section className="usecases-outer">
          <div className="usecases-block">
            <div className="usecases-header">
              <h2 className="usecases-title">See it in action</h2>
            </div>

            {USE_CASES.map((uc, i) => {
              const isReverse = i % 2 !== 0;
              return (
                <div className={`uc-row ${isReverse ? 'reverse' : ''}`} key={uc.keyword}>
                  {/* Text side */}
                  <div className="uc-text">
                    <div className="uc-chips">
                      {uc.features.map((f) => (
                        <span
                          key={f}
                          className="uc-chip"
                          style={{
                            background: '#1a1a1a',
                            color: '#F6F5F4',
                            border: `4px solid #F6F5F4`,
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="uc-title">
                      {uc.before}{uc.keyword}{uc.after}
                    </div>
                    <p className="uc-sentence">{uc.sentence}</p>
                  </div>
                  {/* GIF side */}
                  <div className="uc-gif-wrap">
                    <img src={uc.gif} alt={`${uc.keyword}${uc.after}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================ */}
        {/* SOCIAL PROOF                                 */}
        {/* ============================================ */}
        <section className="testimonials-section">
          <div className="testimonials-header">
            <h2 className="testimonials-section-title">What people are saying</h2>
            <p className="testimonials-loved-text">Loved by hundreds of Mac users</p>
            <div className="testimonials-avatars">
              <img src="/avatar1.jpeg" alt="" />
              <img src="/avatar2.jpeg" alt="" />
              <img src="/avatar3.jpeg" alt="" />
              <img src="/avatar4.jpeg" alt="" />
              <img src="/avatar5.jpeg" alt="" />
            </div>
          </div>

          <div className="testimonials-flow">

            <div className="testimonial-item">
              <div className="testimonial-item-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-item-text">
                "Don't compare this app to others. I've tried tons of clipboard managers. This one became my favorite."
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-item-text">
                "I've used Alfred, Raycast, PastePal and Maccy. None come close in terms of how quick-and-easy it is."
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-item-text">
                "While PastePal is elegant, Maus is crazy quick and straightforward."
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-item-text">
                "I ended up purchasing it because it is so damn useful. Pop up where my cursor is totally sold me."
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-item-text">
                "ALSO LOVE HOW RAM EFFICIENT MAUS IS!!!"
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="testimonial-item-text">
                "Works like a dream. Key+Click is super intelligent and smooth."
              </p>
            </div>

          </div>
        </section>

        {/* ============================================ */}
        {/* FEATURES ATOMIC                              */}
        {/* ============================================ */}
        <section className="features-section">
          <div className="features-block">
            <div className="features-header">
              <h2 className="features-title">Here's what's inside</h2>
            </div>

            <div className="features-chips">
              {ATOMS.map((a, i) => (
                <button
                  key={a.id}
                  className={`feature-chip ${activeAtom === i ? (a.id === 'shortcuts' ? 'active-orange' : 'active') : ''}`}
                  onClick={() => setActiveAtom(i)}
                  style={a.id === 'shortcuts' && activeAtom !== i ? { background: '#FF7237', color: '#1a1a1a', borderColor: '#1a1a1a' } : {}}
                >
                  {a.label}
                </button>
              ))}
            </div>

            {ATOMS[activeAtom].id !== 'shortcuts' ? (
              <>
                <div className="features-gif-container">
                  <img src={ATOMS[activeAtom].gif} alt={ATOMS[activeAtom].label} />
                </div>
                <p className="features-description">{ATOMS[activeAtom].description}</p>
              </>
            ) : (
              <div className="shortcuts-grid">
                <div className="shortcuts-group-title">Core</div>
                <div className="shortcuts-row"><span className="shortcuts-label">Paste item</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">Enter</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Search</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">Type…</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Close</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">Esc</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Undo</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">Z</kbd></span></div>

                <div className="shortcuts-group-title">Navigate</div>
                <div className="shortcuts-row"><span className="shortcuts-label">Move up / down</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">↑</kbd><kbd className="shortcuts-kbd">↓</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Jump to first / last</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">↑</kbd><kbd className="shortcuts-kbd">↓</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Show / hide preview</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">→</kbd><kbd className="shortcuts-kbd">←</kbd></span></div>

                <div className="shortcuts-group-title">Actions</div>
                <div className="shortcuts-row"><span className="shortcuts-label">Pin / Unpin</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">P</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Rename</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">R</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Edit content</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">E</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Delete</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">⌫</kbd></span></div>

                <div className="shortcuts-group-title">Multi-select</div>
                <div className="shortcuts-row"><span className="shortcuts-label">Toggle select</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">Enter</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Range select</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">⇧</kbd><kbd className="shortcuts-kbd">⌘</kbd><kbd className="shortcuts-kbd">Enter</kbd></span></div>
                <div className="shortcuts-row"><span className="shortcuts-label">Paste queue</span><span className="shortcuts-keys"><kbd className="shortcuts-kbd">Enter</kbd></span></div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================ */}
        {/* PRICING                                      */}
        {/* ============================================ */}
        <section className="pricing-section">
          <h2 className="pricing-title">
            Wait, really{' '}
            <span className="pricing-free-chip">free</span>?
          </h2>

          <div className="pricing-content">
            <ul className="pricing-check-list">
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><svg viewBox="0 0 12 12"><path d="M2.5 6.5L5 9L9.5 3.5" /></svg></span>
                Yes — you'll never have to stop using it
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><svg viewBox="0 0 12 12"><path d="M2.5 6.5L5 9L9.5 3.5" /></svg></span>
                24h copy paste history (enough for most people)
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><svg viewBox="0 0 12 12"><path d="M2.5 6.5L5 9L9.5 3.5" /></svg></span>
                Every feature included
              </li>
            </ul>

            <hr className="pricing-divider" />

            <p className="pricing-pro-label">Need unlimited history?</p>
            <ul className="pricing-check-list">
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><svg viewBox="0 0 12 12"><path d="M2.5 6.5L5 9L9.5 3.5" /></svg></span>
                $6.99, one time
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><svg viewBox="0 0 12 12"><path d="M2.5 6.5L5 9L9.5 3.5" /></svg></span>
                No subscription, no renewal
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><svg viewBox="0 0 12 12"><path d="M2.5 6.5L5 9L9.5 3.5" /></svg></span>
                Updates forever
              </li>
            </ul>
          </div>
        </section>

        {/* ============================================ */}
        {/* FOOTER CTA                                   */}
        {/* ============================================ */}
        <section className="footer-cta-section">
          <h2 className="footer-cta-headline">Stop losing what you copy.</h2>
          <p className="footer-cta-sub">Takes 10 seconds. 5 MB. No account, no sign-up.</p>
          
          {/* Desktop */}
          <div className="footer-cta-desktop">
            <div className="footer-cta-buttons">
              <a href="/maus/releases/Maus-1.5.5.dmg" className="footer-cta-button">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d={applePath}/></svg>
                Download Free for Mac
              </a>
            </div>
            <p className="footer-cta-meta">No account needed · macOS 14+</p>
          </div>
          
          {/* Mobile */}
          <div className="footer-cta-mobile">
            <button className="footer-cta-mobile-btn" onClick={handleCopyLink}>
              {linkCopied ? '✓ Link copied!' : 'Copy download link'}
            </button>
            <p className="footer-cta-meta">Send it to yourself · macOS 14+</p>
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
          </div>
        </footer>

      </div>
    </div>
  );
};

export default MausLanding;
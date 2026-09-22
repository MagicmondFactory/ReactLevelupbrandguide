import React, { useState } from 'react';
import { Check, X, ShieldAlert, Layers } from 'lucide-react';


export const TheProblemSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const vendors = [
    { num: '01', title: 'Media Buyer Agency', pain: 'High rate card markup & slow execution' },
    { num: '02', title: 'Talent / Athlete Manager', pain: 'Fragmented negotiations & rights hassle' },
    { num: '03', title: 'Creator Network Agency', pain: 'Inconsistent brand alignment & low ROI' },
    { num: '04', title: 'Production House', pain: 'Separate budget, delays & disconnected assets' },
    { num: '05', title: 'Analytics & Reporting Firm', pain: 'Delayed data & unverified delivery metrics' },
  ];

  return (
    <section id="the-problem" className="section-padding" style={{ background: 'var(--deep-navy)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">THE INDUSTRY CHALLENGE</div>
        <h2 className="heading-display">
          FIVE VENDORS. FIVE CONTRACTS. FIVE REPORTS.<br />
          <span style={{ color: 'var(--electric-green-light)' }}>LEVELUP CLOSES THE GAPS.</span>
        </h2>

        {/* Toggle Interaction */}
        <div style={{ margin: '2.5rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setIsCollapsed(false)}
            className={`btn-brand ${!isCollapsed ? 'btn-electric' : 'btn-ghost'}`}
            style={{ fontSize: '0.85rem' }}
          >
            <X size={14} /> Fragmented Legacy Approach (5 Vendors)
          </button>
          <button
            onClick={() => setIsCollapsed(true)}
            className={`btn-brand ${isCollapsed ? 'btn-electric' : 'btn-ghost'}`}
            style={{ fontSize: '0.85rem', background: isCollapsed ? 'var(--pitch-green-mid)' : '', borderColor: isCollapsed ? 'var(--electric-green)' : '' }}
          >
            <Check size={14} /> LevelUp Ecosystem Approach (1 Partner)
          </button>
        </div>

        {/* Dynamic Nodes Container */}
        {!isCollapsed ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', margin: '2rem 0' }}>
            {vendors.map((v) => (
              <div
                key={v.num}
                style={{
                  background: 'rgba(255, 47, 0, 0.06)',
                  border: '1px solid rgba(255, 47, 0, 0.25)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  color: '#fff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.85rem', color: '#ff6655', fontWeight: 700 }}>{v.num}</span>
                  <ShieldAlert size={16} color="#ff6655" />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{v.title}</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: '#ffa8a0' }}>{v.pain}</p>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              background: 'linear-gradient(135deg, var(--bg-card) 0%, #060630 100%)',
              border: '2px solid var(--blue-orchid)',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              boxShadow: '0 20px 50px rgba(51, 67, 255, 0.25)',
              position: 'relative',
              margin: '2rem 0',
              textAlign: 'center',
            }}
          >
            <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--blue-orchid)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', boxShadow: '0 8px 24px rgba(51,67,255,0.4)' }}>
              <Layers size={32} />
            </div>

            <div style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.85rem', color: 'var(--electric-green)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              THE LEVELUP CONNECTED SYSTEM
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              One Ecosystem. All 5 Capabilities Merged.
            </h3>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Instead of managing multiple contracts, misaligned budgets, and conflicting timelines, LevelUp provides owned access and custom execution under one single agreement.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Rights Access', 'Platform Reach', 'Creator Network', 'Athlete Engagement', 'Master Production'].map((cap) => (
                <span key={cap} style={{ background: 'rgba(51, 67, 255, 0.2)', border: '1px solid rgba(51, 67, 255, 0.4)', color: '#fff', padding: '0.4rem 0.9rem', borderRadius: '99px', fontSize: '0.825rem', fontFamily: 'var(--font-numeral)', fontWeight: 600 }}>
                  ✓ {cap}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

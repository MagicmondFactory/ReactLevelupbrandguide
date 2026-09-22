import React, { useState } from 'react';
import { Target, Compass, Sparkles, Layers, ShieldCheck, Zap, Radio, BarChart3, Award } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [selectedCap, setSelectedCap] = useState<number>(0);

  const capabilities = [
    { title: 'Sports Rights', icon: Award, desc: 'Direct owned inventory across premium global cricket & football tournaments.' },
    { title: 'Digital Platforms', icon: Radio, desc: 'Engaged 400M+ sports fans on Score, Media, and Fantasy apps.' },
    { title: 'Creator Ecosystem', icon: Sparkles, desc: 'Top tier sports influencers & digital creators delivering authentic storytelling.' },
    { title: 'Athlete Roster', icon: Target, desc: 'Exclusive access to elite sports stars, legends, and ambassadors.' },
    { title: 'In-House Production', icon: Layers, desc: 'Broadcast-quality studio content, broadcast graphics, and ad suites.' },
    { title: 'Brand Strategy', icon: Compass, desc: 'Objective-led sports consulting replacing static agency rate cards.' },
    { title: 'Experiential', icon: Zap, desc: 'Stadium activations, VIP fan zones, hospitality, and event execution.' },
    { title: 'Distribution', icon: ShieldCheck, desc: 'Multi-platform broadcast, OTT, and social distribution networks.' },
    { title: 'Data & Measurement', icon: BarChart3, desc: 'Transparent conversion tracking, over-delivery metrics, and attribution.' },
  ];

  const current = capabilities[selectedCap];

  return (
    <section id="ecosystem" className="section-padding" style={{ background: '#050524', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">THE CONNECTED ECOSYSTEM</div>
        <h2 className="heading-display">ONE PARTNER. ALL SOLUTIONS.</h2>
        <p className="body-large" style={{ marginBottom: '3.5rem' }}>
          LevelUp brings rights, platforms, creators, athletes, and production together under one connected system. Click any capability node to inspect.
        </p>

        {/* Central Map & Interactive Nodes */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'center' }}>
          {/* Node Grid Stage */}
          <div
            style={{
              background: 'radial-gradient(circle at center, #0e0e54 0%, #050524 80%)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Central U Symbol Mark */}
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: 22,
                background: 'var(--blue-orchid)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(51, 67, 255, 0.6)',
                marginBottom: '2.5rem',
              }}
            >
              <img src="/logos/U_Official.svg" alt="LevelUp U Symbol" style={{ height: '48px', filter: 'brightness(0) invert(1)' }} />
            </div>

            {/* Grid Nodes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', width: '100%' }}>
              {capabilities.map((cap, idx) => {
                const isSelected = selectedCap === idx;
                return (
                  <button
                    key={cap.title}
                    onClick={() => setSelectedCap(idx)}
                    style={{
                      background: isSelected ? 'var(--blue-orchid)' : 'rgba(255,255,255,0.04)',
                      border: isSelected ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '1rem',
                      color: isSelected ? '#ffffff' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontFamily: 'var(--font-subheading)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textAlign: 'left',
                    }}
                  >
                    <cap.icon size={18} color={isSelected ? 'var(--electric-green-light)' : 'var(--blue-orchid-light)'} />
                    <span>{cap.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Detail Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '2.25rem',
              boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(51, 67, 255, 0.2)', border: '1px solid rgba(51, 67, 255, 0.4)', color: 'var(--electric-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <current.icon size={22} />
            </div>

            <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.75rem', color: 'var(--electric-green)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              NODE 0{selectedCap + 1} OF 09
            </span>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: '0.5rem 0 0.85rem 0' }}>
              {current.title}
            </h3>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {current.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

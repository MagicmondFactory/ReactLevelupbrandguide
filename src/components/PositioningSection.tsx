import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PositioningSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(1);

  const pillars = [
    { title: 'One Ecosystem', desc: 'Connecting rights, platforms, creators, athletes and production under one roof.' },
    { title: 'Built Not Bought', desc: 'Owned media channels and direct inventory built from the ground up, not resold.' },
    { title: 'New-Age Media', desc: 'Engaging modern sports fans on mobile score platforms, digital streams, and creator feeds.' },
    { title: 'Proven Delivery', desc: 'Track record of over-delivery and verified commercial results for 150+ brand partners.' },
    { title: 'Owned Access', desc: 'Direct relationships with sports leagues, broadcast networks, and athlete rosters.' },
    { title: 'Custom Inventory', desc: 'Solutions tailored around client objectives rather than rigid rate cards.' },
    { title: 'Right-Sized Entry', desc: 'Flexible, scalable entry points into sports sponsorship for brands of all sizes.' },
  ];

  return (
    <section id="positioning" className="section-padding" style={{ background: 'var(--deep-navy)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">BRAND POSITIONING</div>
        <h2 className="heading-display">BUILT, NOT BOUGHT.</h2>
        <p className="body-large" style={{ marginBottom: '3.5rem' }}>
          LevelUp is defined by 7 key positioning pillars that separate us from traditional agency middlemen.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {pillars.map((p, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={p.title}
                onClick={() => setSelectedPillar(idx)}
                style={{
                  background: isSelected ? 'var(--blue-orchid)' : 'var(--bg-card)',
                  border: isSelected ? '1px solid #ffffff' : '1px solid var(--border-color)',
                  borderRadius: '18px',
                  padding: '1.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 12px 32px rgba(51, 67, 255, 0.4)' : '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.8rem', color: isSelected ? 'var(--electric-green-light)' : 'var(--blue-orchid-light)', fontWeight: 700 }}>
                    PILLAR 0{idx + 1}
                  </span>
                  {isSelected && <CheckCircle2 size={18} color="var(--electric-green-light)" />}
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: isSelected ? '#ffffff' : 'var(--text-muted)', lineHeight: 1.5 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

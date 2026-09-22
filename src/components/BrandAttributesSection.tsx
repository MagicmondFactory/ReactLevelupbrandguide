import React from 'react';
import { Key, Globe, Award, Compass, DoorOpen } from 'lucide-react';

export const BrandAttributesSection: React.FC = () => {
  const attributes = [
    { title: 'ACCESS', icon: Key, desc: 'Premium inventory, exclusive rights and direct access to the moments sports audiences already care about.' },
    { title: 'REACH', icon: Globe, desc: 'Passionate fans, highly engaged cricket & football audiences, fandom, and new-age media consumers.' },
    { title: 'PROOF', icon: Award, desc: 'Over-delivery, measurable results, commercial accountability, data transparency, and verified conversions.' },
    { title: 'STRATEGY', icon: Compass, desc: 'Strategic partnership, objective-led consultancy, custom-built solutions, and constant innovation.' },
    { title: 'ENTRY POINT', icon: DoorOpen, desc: 'Scalable, accessible, and flexible entry points into sports sponsorship without prohibitive rate cards.' },
  ];

  return (
    <section id="brand-attributes" className="section-padding" style={{ background: 'var(--deep-navy)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">BRAND ATTRIBUTES</div>
        <h2 className="heading-display">WHAT LEVELUP STANDS FOR.</h2>
        <p className="body-large" style={{ marginBottom: '3.5rem' }}>
          Value comes from access and judgement, not volume. Five core pillars define the LevelUp advantage.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
          {attributes.map((attr) => (
            <div
              key={attr.title}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 28px rgba(0,0,0,0.3)',
                transition: 'transform 0.25s ease',
              }}
            >
              <attr.icon size={26} color="var(--electric-green)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.65rem' }}>
                {attr.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {attr.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

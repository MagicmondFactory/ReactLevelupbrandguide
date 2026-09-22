import React from 'react';
import { Target, Compass } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission-vision" className="section-padding" style={{ background: '#050524', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">MISSION & VISION</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
          {/* Mission Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--bg-card) 0%, #080842 100%)',
              border: '1px solid var(--blue-orchid)',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              boxShadow: '0 16px 40px rgba(51, 67, 255, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--blue-orchid)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={22} />
              </div>
              <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--blue-orchid-light)', letterSpacing: '0.1em' }}>THE MISSION</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.25 }}>
              To give brands one way into sport — replacing five disconnected vendors with a single 360° ecosystem.
            </h3>
          </div>

          {/* Vision Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--pitch-green) 0%, #02261f 100%)',
              border: '1px solid rgba(165, 227, 95, 0.4)',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              boxShadow: '0 16px 40px rgba(1, 55, 43, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--pitch-green-mid)', border: '1px solid var(--electric-green)', color: 'var(--electric-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={22} />
              </div>
              <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--electric-green)', letterSpacing: '0.1em' }}>THE VISION</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.25 }}>
              To become the definitive gateway to sport in MENA and beyond.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ToneOfVoiceSection: React.FC = () => {
  const comparisons = [
    {
      say: 'We run all five as one.',
      avoid: 'We pride ourselves on offering an integrated approach to campaign delivery.',
    },
    {
      say: "Numbers don't lie.",
      avoid: 'We provide innovative solutions for brands looking to engage audiences.',
    },
    {
      say: 'One partner. All solutions.',
      avoid: 'We are passionate about creating meaningful connections.',
    },
    {
      say: "Sport isn't one door.",
      avoid: 'We offer multi-channel omni-touchpoint brand activation packages.',
    },
    {
      say: 'Built, not bought.',
      avoid: 'We leverage proprietary inventory acquisition models for our clients.',
    },
  ];

  return (
    <section id="tone-of-voice" className="section-padding" style={{ background: 'var(--deep-navy)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">BRAND VOICE & VOCABULARY</div>
        <h2 className="heading-display">SAY IT LIKE IT IS.</h2>
        <p className="body-large" style={{ marginBottom: '3.5rem' }}>
          Direct, confident and intelligent. Never corporate for the sake of sounding corporate.
        </p>

        {/* Comparison Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {comparisons.map((c, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '18px',
                padding: '1.5rem 2rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {/* Preferred Say */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle2 size={22} color="var(--electric-green)" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.75rem', color: 'var(--electric-green)', fontWeight: 700, letterSpacing: '0.08em' }}>SAY THIS</span>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginTop: '0.2rem' }}>"{c.say}"</p>
                </div>
              </div>

              {/* Avoid */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
                <XCircle size={22} color="#ff6655" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.75rem', color: '#ff6655', fontWeight: 700, letterSpacing: '0.08em' }}>AVOID THIS</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#8d92b8', marginTop: '0.2rem' }}>"{c.avoid}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

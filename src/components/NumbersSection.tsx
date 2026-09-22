import React from 'react';

export const NumbersSection: React.FC = () => {
  const stats = [
    { num: '400M+', label: 'Engaged Users', desc: 'Across digital cricket, football, score, and media platforms in MENA & South Asia.' },
    { num: '150+', label: 'Brand Partners', desc: 'Global and regional brands over-delivered across 360° sports campaigns.' },
    { num: '1 Partner', label: 'All Solutions', desc: 'Replacing 5 fragmented agency vendors with 1 unified execution partner.' },
    { num: '100%', label: 'Booked vs Delivered', desc: 'Guaranteed commercial accountability, data transparency, and verified ROI.' },
  ];

  return (
    <section id="numbers" className="section-padding" style={{ background: '#050524', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">PROOF POINTS</div>
        <h2 className="heading-display">NUMBERS DON'T LIE.</h2>
        <p className="body-large" style={{ marginBottom: '4rem' }}>
          We don't sell rate card promises. We deliver measurable access and over-delivered commercial numbers.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
          {stats.map((st) => (
            <div
              key={st.label}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-numeral)',
                  fontSize: 'clamp(2.75rem, 4.5vw, 4rem)',
                  fontWeight: 700,
                  color: 'var(--electric-green-light)',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {st.num}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                {st.label}
              </h3>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

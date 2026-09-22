import React from 'react';

export const PersonalitySection: React.FC = () => {
  return (
    <section
      id="personality"
      className="section-padding"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #0d0d54 0%, #050524 80%)',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center',
      }}
    >
      <div className="site-container" style={{ maxWidth: '1000px' }}>
        <div className="eyebrow" style={{ margin: '0 auto 1.5rem auto' }}>BRAND PERSONALITY</div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: '1.25rem',
          }}
        >
          NOT THE LOUDEST IN THE ROOM.<br />
          <span style={{ color: 'var(--electric-green-light)' }}>BUT THE ONE WHO CAN GET YOU IN IT.</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          Value comes from access, timing, and judgment — not noise. We build solutions around client objectives rather than pushing rate cards.
        </p>

        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          {['Confident', 'Connected', 'Strategic', 'Access-Driven', 'Sports-Native', 'Commercially Intelligent'].map((char) => (
            <span
              key={char}
              style={{
                fontFamily: 'var(--font-numeral)',
                fontSize: '0.825rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

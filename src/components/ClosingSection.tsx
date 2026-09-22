import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { DOWNLOAD_LINKS } from '../data/sections';

export const ClosingSection: React.FC = () => {
  return (
    <section
      id="closing"
      className="section-padding"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #111166 0%, #070732 75%)',
        textAlign: 'center',
        padding: '8rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Geometric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(51, 67, 255, 0.15) 0%, rgba(7, 7, 50, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 10, maxWidth: '960px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <img
            src="/logos/LEVELUP_Official.svg"
            alt="LevelUp Media"
            style={{ height: '48px', margin: '0 auto', filter: 'brightness(0) invert(1)' }}
          />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '1.25rem',
          }}
        >
          CONFIDENT. CONNECTED.<br />
          <span style={{ color: 'var(--electric-green-light)' }}>BUILT FOR SPORTS CULTURE.</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.6,
          }}
        >
          LevelUp brings rights, platforms, creators, athletes and production together under one connected ecosystem.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={DOWNLOAD_LINKS.pdf} target="_blank" rel="noopener noreferrer" className="btn-brand btn-electric" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            <Download size={18} /> Download Brand Book PDF <ExternalLink size={16} />
          </a>
          <a href={DOWNLOAD_LINKS.logo} target="_blank" rel="noopener noreferrer" className="btn-brand btn-ghost" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Download Logo Assets <ExternalLink size={16} />
          </a>
        </div>

        <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-numeral)' }}>
          <span>© 2026 LevelUp Media. All rights reserved.</span>
          <span>Official Brand Manual v1.0</span>
        </div>
      </div>
    </section>
  );
};

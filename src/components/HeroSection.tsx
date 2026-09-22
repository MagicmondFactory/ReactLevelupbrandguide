import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { DOWNLOAD_LINKS } from '../data/sections';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 75% 25%, #12126b 0%, #070732 65%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--nav-height)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      {/* Shifting Geometry Background Art */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '55vw',
          height: '55vw',
          background: 'linear-gradient(135deg, rgba(51, 67, 255, 0.25) 0%, rgba(7, 7, 50, 0) 70%)',
          transform: 'rotate(-25deg)',
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 80%)',
          pointerEvents: 'none',
          animation: 'pulseGlow 8s infinite ease-in-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '40vw',
          height: '40vw',
          background: 'linear-gradient(45deg, rgba(165, 227, 95, 0.08) 0%, rgba(51, 67, 255, 0.05) 100%)',
          transform: 'rotate(15deg)',
          clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Large Watermark Typography */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          bottom: '5%',
          fontSize: '18vw',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.02)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.06em',
          lineHeight: 0.8,
        }}
      >
        CONNECT
      </div>

      <div className="site-container" style={{ position: 'relative', zIndex: 10, padding: '4rem 2.5rem' }}>
        <div style={{ maxWidth: '960px' }}>
          <div className="eyebrow">LEVELUP MEDIA</div>

          <h1
            className="heading-display"
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
              marginBottom: '1rem',
              color: '#ffffff',
            }}
          >
            BUILT FOR SPORTS.<br />
            <span style={{ color: 'var(--blue-orchid-light)' }}>LEVEL UP YOUR GAME.</span>
          </h1>

          <p
            className="body-large"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              maxWidth: '760px',
              color: '#a4a9cf',
              marginBottom: '2.75rem',
              lineHeight: 1.6,
            }}
          >
            A 360° sports marketing ecosystem connecting rights, platforms, creators, athletes and production under one roof.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#ecosystem" className="btn-brand btn-electric" style={{ padding: '0.95rem 2.25rem', fontSize: '0.95rem' }}>
              Explore Ecosystem <ArrowRight size={16} />
            </a>
            <a href={DOWNLOAD_LINKS.pdf} target="_blank" rel="noopener noreferrer" className="btn-brand btn-ghost" style={{ padding: '0.95rem 2.25rem', fontSize: '0.95rem' }}>
              <Download size={16} /> Download Brand Book PDF
            </a>
          </div>
        </div>

        {/* Hero Bottom Metric Strip */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-numeral)', fontSize: '2.25rem', fontWeight: 700, color: 'var(--electric-green-light)' }}>
              400M+
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Audience reach across sports platforms
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-numeral)', fontSize: '2.25rem', fontWeight: 700, color: '#ffffff' }}>
              150+
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Brand partners over-delivered
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-numeral)', fontSize: '2.25rem', fontWeight: 700, color: '#ffffff' }}>
              1 Partner
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Instead of 5 fragmented vendors
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-numeral)', fontSize: '2.25rem', fontWeight: 700, color: 'var(--trophy-gold-light)' }}>
              100%
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Owned access & custom inventory
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

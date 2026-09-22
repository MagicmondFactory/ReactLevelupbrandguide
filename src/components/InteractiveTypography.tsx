import React, { useState } from 'react';
import { TYPOGRAPHY_SPECS } from '../data/brandData';
import { Download, Type, RefreshCw } from 'lucide-react';

export const InteractiveTypography: React.FC = () => {
  const [selectedFontIndex, setSelectedFontIndex] = useState<number>(0);
  const [customText, setCustomText] = useState<string>('LEVELUP BRAND IDENTITIES & DESIGN SYSTEM');
  const [fontSize, setFontSize] = useState<number>(36);

  const currentFont = TYPOGRAPHY_SPECS[selectedFontIndex];

  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: "var(--font-heading)" }}>
            Typography System & Type Specimen Engine
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Brand fonts extracted from guide: Radio Canada Big (Headlines), Space Grotesk (Navigation), Geist (Body & Specs)
          </p>
        </div>

        <a
          href={TYPOGRAPHY_SPECS[0].downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <Download size={14} /> Download Brand Fonts
        </a>
      </div>

      {/* Interactive Live Specimen Controls */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          padding: '1.75rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        {/* Font Selector Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {TYPOGRAPHY_SPECS.map((font, idx) => (
            <button
              key={font.name}
              onClick={() => setSelectedFontIndex(idx)}
              className={`btn ${selectedFontIndex === idx ? 'btn-primary' : 'btn-outline'}`}
              style={{
                fontFamily: font.fontFamily,
                fontSize: '0.9rem',
                padding: '0.5rem 1.15rem',
              }}
            >
              {font.name}
            </button>
          ))}
        </div>

        {/* Specimen Inputs */}
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8c91b5', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-subheading)' }}>
              TYPE CUSTOM SPECIMEN COPY
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="search-input"
              style={{ width: '100%', fontFamily: currentFont.fontFamily }}
            />
          </div>

          <div style={{ width: 220 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#8c91b5', marginBottom: '0.4rem', fontFamily: 'var(--font-subheading)' }}>
              <span>SPECIMEN SIZE</span>
              <span>{fontSize}px</span>
            </div>
            <input
              type="range"
              min="16"
              max="72"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--brand-blue)' }}
            />
          </div>

          <button
            onClick={() => {
              setCustomText('LEVELUP BRAND IDENTITIES & DESIGN SYSTEM');
              setFontSize(36);
            }}
            className="btn btn-outline"
            style={{ marginTop: '1.25rem', padding: '0.55rem' }}
            title="Reset specimen"
          >
            <RefreshCw size={14} />
          </button>
        </div>

        {/* Dynamic Specimen Display */}
        <div
          style={{
            background: '#050524',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '2.5rem',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              fontFamily: currentFont.fontFamily,
              fontSize: `${fontSize}px`,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              lineHeight: 1.15,
            }}
          >
            {customText || 'Type specimen...'}
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            <span>{currentFont.name} · {fontSize}px · {currentFont.role}</span>
            <span style={{ color: 'var(--brand-lime)', fontWeight: 600 }}>{currentFont.usage}</span>
          </div>
        </div>
      </div>

      {/* Font Family Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {TYPOGRAPHY_SPECS.map((spec) => (
          <div
            key={spec.name}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '18px',
              padding: '1.75rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', fontFamily: spec.fontFamily }}>{spec.name}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 600, fontFamily: 'var(--font-subheading)' }}>{spec.role}</span>
              </div>
              <Type size={22} color="var(--brand-blue)" />
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.75rem 0 1.25rem 0', lineHeight: 1.5 }}>
              {spec.usage}
            </p>

            <div style={{ margin: '1rem 0', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {spec.weights.map((w) => (
                <span
                  key={w}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-subheading)',
                  }}
                >
                  {w}
                </span>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#fff', fontFamily: spec.fontFamily, fontStyle: 'italic' }}>
                "{spec.sampleText}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

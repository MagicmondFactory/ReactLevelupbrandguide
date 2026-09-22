import React, { useState } from 'react';
import { BRAND_COLORS } from '../data/brandData';
import type { ColorItem } from '../data/brandData';
import { Copy, Check } from 'lucide-react';

export const InteractiveColorPalette: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)' }}>
            Color System & Specifications
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Extracted from brand manual: Midnight Navy (#070732), Electric Blue (#3343FF), Electric Lime (#DEFFB0)
          </p>
        </div>
        {copiedKey && (
          <div
            style={{
              background: 'var(--brand-lime)',
              color: '#000',
              padding: '0.4rem 1rem',
              borderRadius: '99px',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-subheading)',
            }}
          >
            <Check size={14} color="#000" /> Copied {copiedKey}!
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {BRAND_COLORS.map((color: ColorItem) => {
          const isHexCopied = copiedKey === `${color.name}-hex`;
          return (
            <div
              key={color.name}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Color Swatch Block Header */}
              <div
                onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                style={{
                  height: '140px',
                  backgroundColor: color.hex,
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  position: 'relative',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-subheading)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: color.darkText ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)',
                      background: color.darkText ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.18)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {color.role}
                  </span>

                  <button
                    style={{
                      background: color.darkText ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                      color: color.darkText ? '#000' : '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {isHexCopied ? <Check size={16} color={color.darkText ? '#000' : '#4ade80'} /> : <Copy size={15} />}
                  </button>
                </div>

                <div style={{ color: color.darkText ? '#000' : '#fff' }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-subheading)' }}>{color.hex}</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{color.name}</div>
                </div>
              </div>

              {/* Color Details & Codes */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.825rem' }}>
                <div
                  onClick={() => copyToClipboard(color.hex, `${color.name} HEX`)}
                  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', padding: '0.2rem 0' }}
                >
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>HEX</span>
                  <span style={{ fontWeight: 700, fontFamily: 'monospace', color: '#fff' }}>{color.hex}</span>
                </div>

                <div
                  onClick={() => copyToClipboard(color.rgb, `${color.name} RGB`)}
                  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', padding: '0.2rem 0' }}
                >
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>RGB</span>
                  <span style={{ fontWeight: 600, fontFamily: 'monospace', color: '#d0d4f0' }}>{color.rgb}</span>
                </div>

                <div
                  onClick={() => copyToClipboard(color.cmyk, `${color.name} CMYK`)}
                  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', padding: '0.2rem 0' }}
                >
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>CMYK</span>
                  <span style={{ fontWeight: 600, fontFamily: 'monospace', color: '#d0d4f0' }}>{color.cmyk}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0 0 0', borderTop: '1px dashed rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>PANTONE</span>
                  <span style={{ fontWeight: 700, color: 'var(--brand-lime)', fontFamily: 'var(--font-subheading)' }}>{color.pantone}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

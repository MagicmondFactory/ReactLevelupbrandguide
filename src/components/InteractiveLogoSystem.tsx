import React, { useState } from 'react';
import { LOGO_RULES } from '../data/brandData';
import { DOWNLOAD_LINKS } from '../data/sections';
import { Download, Sun, Moon, Grid, ShieldAlert } from 'lucide-react';

export const InteractiveLogoSystem: React.FC = () => {
  const [backdrop, setBackdrop] = useState<'light' | 'dark' | 'indigo'>('dark');

  const bgStyles = {
    light: { bg: '#ffffff', text: '#070732', filter: 'brightness(0)', border: '#e8e8ee' },
    dark: { bg: '#070732', text: '#ffffff', filter: 'brightness(0) invert(1)', border: 'rgba(255,255,255,0.15)' },
    indigo: { bg: '#3343FF', text: '#ffffff', filter: 'brightness(0) invert(1)', border: '#2232e0' },
  };

  const currentBg = bgStyles[backdrop];

  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)' }}>
            Logo System & Construction Grid
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            LevelUp official vector logos from brand directory (LEVELUP.svg, U.svg, UP.svg)
          </p>
        </div>

        <a
          href={DOWNLOAD_LINKS.logo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <Download size={14} /> Download Logo Assets Pack
        </a>
      </div>

      {/* Interactive Logo Stage */}
      <div
        style={{
          background: currentBg.bg,
          border: `1px solid ${currentBg.border}`,
          borderRadius: '20px',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          position: 'relative',
          marginBottom: '2.5rem',
        }}
      >
        {/* Backdrop Switcher Controls */}
        <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setBackdrop('dark')}
            className={`btn ${backdrop === 'dark' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
          >
            <Moon size={12} /> Dark Stage
          </button>
          <button
            onClick={() => setBackdrop('light')}
            className={`btn ${backdrop === 'light' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', color: backdrop === 'light' ? '#000' : '#fff', background: backdrop === 'light' ? '#fff' : 'rgba(255,255,255,0.1)' }}
          >
            <Sun size={12} /> Light Stage
          </button>
          <button
            onClick={() => setBackdrop('indigo')}
            className={`btn ${backdrop === 'indigo' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', color: '#fff', background: backdrop === 'indigo' ? '#3343FF' : 'rgba(51,67,255,0.2)' }}
          >
            Indigo Stage
          </button>
        </div>

        {/* LevelUp Vector Logo Render */}
        <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <img
            src="/logos/LEVELUP_Official.svg"
            alt="LevelUp Master Full Vector Logo"
            style={{
              maxHeight: '64px',
              maxWidth: '90%',
              objectFit: 'contain',
              filter: currentBg.filter,
              transition: 'filter 0.3s ease',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/logos/U_Official.svg"
                alt="LevelUp U Icon Mark"
                style={{
                  maxHeight: '54px',
                  objectFit: 'contain',
                  filter: currentBg.filter,
                  transition: 'filter 0.3s ease',
                }}
              />
              <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.4rem', color: currentBg.text, opacity: 0.7, fontFamily: 'var(--font-subheading)' }}>U Monogram</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/logos/UP_Official.svg"
                alt="LevelUp UP Lockup Mark"
                style={{
                  maxHeight: '54px',
                  objectFit: 'contain',
                  filter: currentBg.filter,
                  transition: 'filter 0.3s ease',
                }}
              />
              <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.4rem', color: currentBg.text, opacity: 0.7, fontFamily: 'var(--font-subheading)' }}>UP Secondary Mark</span>
            </div>
          </div>
        </div>

        <p style={{ color: currentBg.text, opacity: 0.8, fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-subheading)' }}>
          Official LevelUp Master Logos from Brand Directory
        </p>
      </div>

      {/* Logo Construction & Variations Showcase */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)' }}>
          <Grid size={18} color="var(--brand-lime)" /> Construction Grid & Brand Manual Variations
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Construction Grid Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', fontFamily: 'var(--font-subheading)' }}>
              Primary Logo Construction Grid
            </div>
            <img src="/pages/11.svg" alt="Primary Logo Construction" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
          </div>

          {/* Clear Space Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', fontFamily: 'var(--font-subheading)' }}>
              Clear Space & Safety Margins
            </div>
            <img src="/pages/12.svg" alt="Clear Space Guidelines" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
          </div>

          {/* Variations Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', fontFamily: 'var(--font-subheading)' }}>
              Horizontal & Vertical Variations
            </div>
            <img src="/pages/13.svg" alt="Logo Variations" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
          </div>

          {/* Incorrect Usage Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-lime)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-subheading)' }}>
              <ShieldAlert size={16} /> Incorrect Logo Usage & Restrictions
            </div>
            <img src="/pages/15.svg" alt="Incorrect Logo Usage" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* Logo Rules Checklist */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {LOGO_RULES.map((rule, idx) => (
          <div
            key={rule.title}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ background: 'rgba(51, 67, 255, 0.25)', color: 'var(--brand-lime)', border: '1px solid rgba(51, 67, 255, 0.4)', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem', fontFamily: 'var(--font-subheading)' }}>
                {idx + 1}
              </div>
              <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)' }}>{rule.title}</h5>
            </div>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{rule.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

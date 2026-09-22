import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { BrandStorySection } from './BrandStorySection';
import { TheProblemSection } from './TheProblemSection';
import { EcosystemSection } from './EcosystemSection';
import { BrandAttributesSection } from './BrandAttributesSection';
import { MissionVisionSection } from './MissionVisionSection';
import { PositioningSection } from './PositioningSection';
import { NumbersSection } from './NumbersSection';
import { ToneOfVoiceSection } from './ToneOfVoiceSection';
import { PersonalitySection } from './PersonalitySection';
import { InteractiveColorPalette } from './InteractiveColorPalette';
import { InteractiveTypography } from './InteractiveTypography';
import { InteractiveLogoSystem } from './InteractiveLogoSystem';
import { ApplicationsSection } from './ApplicationsSection';
import { ClosingSection } from './ClosingSection';

import type { BrandPage } from '../data/sections';
import { ArrowRight } from 'lucide-react';

interface PageViewerProps {
  sections: Array<{ id: string; number: string; title: string; description: string; pages: BrandPage[] }>;
  searchQuery: string;
  onOpenPageLightbox: (page: BrandPage) => void;
}

export const PageViewer: React.FC<PageViewerProps> = ({
  sections,
  searchQuery,
  onOpenPageLightbox,
}) => {
  const [showOriginalDoc, setShowOriginalDoc] = useState(false);
  const query = searchQuery.toLowerCase().trim();

  const allCollateralPages = sections
    .filter((s) => s.id === 'collaterals')
    .flatMap((s) => s.pages)
    .filter((p) => !query || p.title.toLowerCase().includes(query));

  return (
    <div style={{ width: '100%', background: 'var(--deep-navy)' }}>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. BRAND STORY */}
      <BrandStorySection />

      {/* 3. THE PROBLEM */}
      <TheProblemSection />

      {/* 4. ECOSYSTEM MAP */}
      <EcosystemSection />

      {/* 5. BRAND ATTRIBUTES */}
      <BrandAttributesSection />

      {/* 6. MISSION & VISION */}
      <MissionVisionSection />

      {/* 7. POSITIONING */}
      <PositioningSection />

      {/* 8. NUMBERS DON'T LIE */}
      <NumbersSection />

      {/* 9. TONE OF VOICE */}
      <ToneOfVoiceSection />

      {/* 10. PERSONALITY */}
      <PersonalitySection />

      {/* 11. COLOUR SYSTEM */}
      <section id="colour-system" className="section-padding" style={{ background: 'var(--deep-navy)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="site-container">
          <div className="eyebrow">THE COLOUR SYSTEM</div>
          <InteractiveColorPalette />
        </div>
      </section>

      {/* 12. TYPOGRAPHY SYSTEM */}
      <section id="typography-system" className="section-padding" style={{ background: '#050524', borderBottom: '1px solid var(--border-color)' }}>
        <div className="site-container">
          <div className="eyebrow">TYPOGRAPHY SYSTEM</div>
          <InteractiveTypography />
        </div>
      </section>

      {/* 13. LOGO SYSTEM */}
      <section id="logo-system" className="section-padding" style={{ background: 'var(--deep-navy)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="site-container">
          <div className="eyebrow">THE LOGO SYSTEM</div>
          <InteractiveLogoSystem />
        </div>
      </section>

      {/* 14. APPLICATIONS */}
      <ApplicationsSection
        pages={allCollateralPages}
        onOpenPageLightbox={onOpenPageLightbox}
      />

      {/* 15. CLOSING */}
      <ClosingSection />

      {/* OPTIONAL EXPAND FOR PDF PAGES STREAM */}
      <div style={{ background: '#03031a', padding: '3rem 2.5rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <button
          onClick={() => setShowOriginalDoc(!showOriginalDoc)}
          className="btn-brand btn-ghost"
          style={{ fontSize: '0.85rem' }}
        >
          {showOriginalDoc ? 'Hide Master PDF Pages Stream' : 'View Master PDF Pages Stream'} <ArrowRight size={14} />
        </button>

        {showOriginalDoc && (
          <div className="site-container" style={{ marginTop: '2.5rem', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Master Brand Book Pages Stream (40 Pages)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {sections.flatMap((s) => s.pages).map((page) => (
                <div key={page.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden' }}>
                  <div style={{ padding: '0.75rem 1rem', background: '#050524', color: '#fff', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600 }}>Page {String(page.pageNumber).padStart(2, '0')} · {page.title}</span>
                    <button onClick={() => onOpenPageLightbox(page)} className="btn-brand btn-ghost" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}>
                      Expand
                    </button>
                  </div>
                  <div onClick={() => onOpenPageLightbox(page)} style={{ cursor: 'pointer', background: '#fff', padding: '0.35rem' }}>
                    <img src={`/pages/${page.file}`} alt={page.title} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

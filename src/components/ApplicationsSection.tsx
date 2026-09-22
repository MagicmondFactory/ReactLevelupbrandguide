import React, { useState } from 'react';
import type { BrandPage } from '../data/sections';
import { Maximize2 } from 'lucide-react';

interface ApplicationsSectionProps {
  pages: BrandPage[];
  onOpenPageLightbox: (page: BrandPage) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  pages,
  onOpenPageLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Applications' },
    { id: 'stationery', label: 'Business Stationery' },
    { id: 'digital', label: 'Digital & Social' },
    { id: 'outdoors', label: 'Stadium & Outdoor' },
  ];

  const getCategory = (title: string): string => {
    const t = title.toLowerCase();
    if (t.includes('card') || t.includes('letterhead') || t.includes('envelope')) return 'stationery';
    if (t.includes('social') || t.includes('banner') || t.includes('ad')) return 'digital';
    return 'outdoors';
  };

  const filteredPages = pages.filter((p) => {
    if (activeCategory === 'all') return true;
    return getCategory(p.title) === activeCategory;
  });

  return (
    <section id="applications" className="section-padding" style={{ background: '#050524', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">BRAND APPLICATIONS</div>
        <h2 className="heading-display">BUILT TO LIVE EVERYWHERE.</h2>
        <p className="body-large" style={{ marginBottom: '3rem' }}>
          From mobile screens to stadium billboards, business stationery, and campaign communications.
        </p>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn-brand ${activeCategory === cat.id ? 'btn-electric' : 'btn-ghost'}`}
              style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {filteredPages.map((page) => (
            <div
              key={page.id}
              onClick={() => onOpenPageLightbox(page)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ padding: '0.9rem 1.15rem', background: '#070732', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{page.title}</span>
                <Maximize2 size={13} style={{ color: 'var(--electric-green)' }} />
              </div>

              <div style={{ background: '#fff', padding: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={`/pages/${page.file}`}
                  alt={page.title}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px', display: 'block' }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

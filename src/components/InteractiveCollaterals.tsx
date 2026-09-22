import React, { useState } from 'react';
import type { BrandPage } from '../data/sections';
import { Maximize2 } from 'lucide-react';

interface InteractiveCollateralsProps {
  pages: BrandPage[];
  onOpenPageLightbox: (page: BrandPage) => void;
}

export const InteractiveCollaterals: React.FC<InteractiveCollateralsProps> = ({
  pages,
  onOpenPageLightbox,
}) => {
  const [filter, setFilter] = useState<'all' | 'stationery' | 'digital' | 'merch'>('all');

  const getCategory = (title: string): 'stationery' | 'digital' | 'merch' => {
    const t = title.toLowerCase();
    if (t.includes('card') || t.includes('letterhead') || t.includes('envelope')) return 'stationery';
    if (t.includes('social') || t.includes('banner') || t.includes('ad')) return 'digital';
    return 'merch';
  };

  const filteredPages = pages.filter((p) => {
    if (filter === 'all') return true;
    return getCategory(p.title) === filter;
  });

  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)' }}>
            Brand Collaterals & Real-World Applications
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Stationery, digital banners, social templates, merchandise, and billboard mockups
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', background: '#050524', padding: '0.3rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', border: 'none' }}
          >
            All ({pages.length})
          </button>
          <button
            onClick={() => setFilter('stationery')}
            className={`btn ${filter === 'stationery' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', border: 'none' }}
          >
            Stationery
          </button>
          <button
            onClick={() => setFilter('digital')}
            className={`btn ${filter === 'digital' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', border: 'none' }}
          >
            Digital
          </button>
          <button
            onClick={() => setFilter('merch')}
            className={`btn ${filter === 'merch' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', border: 'none' }}
          >
            Merch & Packaging
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
            <div style={{ padding: '0.85rem 1.15rem', background: '#050524', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-subheading)' }}>{page.title}</span>
              <Maximize2 size={13} style={{ color: 'var(--brand-lime)' }} />
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
  );
};

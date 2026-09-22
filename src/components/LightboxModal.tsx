import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import type { BrandPage } from '../data/sections';

interface LightboxModalProps {
  page: BrandPage | null;
  allPages: BrandPage[];
  onClose: () => void;
  onNavigate: (page: BrandPage) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  page,
  allPages,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!page) return;
      const currentIndex = allPages.findIndex((p) => p.id === page.id);
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < allPages.length - 1) {
        onNavigate(allPages[currentIndex + 1]);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(allPages[currentIndex - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, allPages, onClose, onNavigate]);

  if (!page) return null;

  const currentIndex = allPages.findIndex((p) => p.id === page.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allPages.length - 1;

  const handleDownloadSVG = () => {
    const link = document.createElement('a');
    link.href = `/pages/${page.file}`;
    link.download = `LevelUp-Page-${page.pageNumber}-${page.title.replace(/\s+/g, '_')}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '1.25rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#fff',
          zIndex: 110,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{page.title}</h3>
          <p style={{ fontSize: '0.8rem', color: '#aaaaaa' }}>
            Page {page.pageNumber} of {allPages.length}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleDownloadSVG}
            className="btn btn-outline"
            style={{ color: '#fff', borderColor: '#444', background: 'rgba(255,255,255,0.1)' }}
          >
            <Download size={14} /> Download SVG
          </button>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={`/pages/${page.file}`}
          alt={page.title}
          className="lightbox-img"
        />
      </div>

      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(allPages[currentIndex - 1]);
          }}
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(allPages[currentIndex + 1]);
          }}
          style={{
            position: 'absolute',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

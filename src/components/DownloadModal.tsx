import React from 'react';
import { X, ExternalLink, Folder, Type, FileText } from 'lucide-react';
import { DOWNLOAD_LINKS } from '../data/sections';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111' }}>LevelUp Brand Assets</h3>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.2rem' }}>Download official brand files, fonts, and guidelines</p>
          </div>
          <button
            onClick={onClose}
            style={{ background: '#f0f0f2', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
          {/* Logo Package */}
          <a
            href={DOWNLOAD_LINKS.logo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid #e5e5eb',
              textDecoration: 'none',
              color: 'inherit',
              background: '#fafafa'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 40, height: 40, background: '#000', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Folder size={20} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Logo Assets Folder</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Vector SVG, PNG, EPS and Master files</p>
              </div>
            </div>
            <ExternalLink size={16} style={{ color: '#888' }} />
          </a>

          {/* Typography Package */}
          <a
            href={DOWNLOAD_LINKS.fonts}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid #e5e5eb',
              textDecoration: 'none',
              color: 'inherit',
              background: '#fafafa'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 40, height: 40, background: '#000', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Type size={20} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Font Family Folder</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>All weights, OTF, TTF and WOFF2 web fonts</p>
              </div>
            </div>
            <ExternalLink size={16} style={{ color: '#888' }} />
          </a>

          {/* PDF Guide */}
          <a
            href={DOWNLOAD_LINKS.pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid #e5e5eb',
              textDecoration: 'none',
              color: 'inherit',
              background: '#fafafa'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 40, height: 40, background: '#000', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <FileText size={20} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Brand Guidelines PDF</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Complete 40-page master PDF brand manual</p>
              </div>
            </div>
            <ExternalLink size={16} style={{ color: '#888' }} />
          </a>
        </div>

        <div style={{ textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-outline" style={{ padding: '0.5rem 1.25rem' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

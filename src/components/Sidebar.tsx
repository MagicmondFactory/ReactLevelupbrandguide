import React from 'react';
import { BRAND_SECTIONS, DOWNLOAD_LINKS } from '../data/sections';
import { Download, ExternalLink, FileText, Type, Image } from 'lucide-react';

interface SidebarProps {
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  onOpenDownloadModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSectionId,
  onSelectSection,
  onOpenDownloadModal,
}) => {
  return (
    <aside className="sidebar">
      <div>
        {/* Brand Header with Official Vector Logo */}
        <a href="#cover" className="sidebar-logo" style={{ display: 'flex', alignItems: 'center', paddingBottom: '0.5rem' }}>
          <img
            src="/logos/LEVELUP_Official.svg"
            alt="LEVELUP Logo"
            style={{ height: '28px', width: 'auto', display: 'block', filter: 'brightness(0)' }}
          />
        </a>

        {/* Section Links */}
        <nav className="sidebar-nav">
          {BRAND_SECTIONS.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection(sec.id);
                }}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                <span>{sec.title}</span>
                <sup>{sec.number}</sup>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Footer / Asset Downloads */}
      <div className="sidebar-footer">
        <a
          onClick={(e) => {
            e.preventDefault();
            onOpenDownloadModal();
          }}
          className="sidebar-footer-link"
          style={{ fontWeight: 600, color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <Download size={14} /> Download assets
        </a>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.4rem' }}>
          <a
            href={DOWNLOAD_LINKS.logo}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-footer-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <Image size={12} /> Logo Assets <ExternalLink size={10} />
          </a>
          <a
            href={DOWNLOAD_LINKS.fonts}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-footer-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <Type size={12} /> Font Family <ExternalLink size={10} />
          </a>
          <a
            href={DOWNLOAD_LINKS.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-footer-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <FileText size={12} /> PDF Guidelines <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </aside>
  );
};

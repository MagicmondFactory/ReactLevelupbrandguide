import React from 'react';
import { Search, Download, FileDown } from 'lucide-react';
import { DOWNLOAD_LINKS } from '../data/sections';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenDownloadModal: () => void;
  totalPages: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenDownloadModal,
  totalPages,
}) => {
  return (
    <header className="top-bar">
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <Search
          size={16}
          style={{ position: 'absolute', left: '0.75rem', color: '#999' }}
        />
        <input
          type="text"
          placeholder={`Search ${totalPages} brand assets & specs...`}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a
          href={DOWNLOAD_LINKS.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <FileDown size={15} /> Download PDF
        </a>

        <button onClick={onOpenDownloadModal} className="btn btn-primary">
          <Download size={15} /> All Brand Assets
        </button>
      </div>
    </header>
  );
};

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PageViewer } from './components/PageViewer';
import { DownloadModal } from './components/DownloadModal';
import { LightboxModal } from './components/LightboxModal';
import { BRAND_SECTIONS, ALL_PAGES } from './data/sections';
import type { BrandPage } from './data/sections';

export function App() {
  const [searchQuery] = useState<string>('');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const [activeLightboxPage, setActiveLightboxPage] = useState<BrandPage | null>(null);

  return (
    <div style={{ background: 'var(--deep-navy)', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      <main>
        <PageViewer
          sections={BRAND_SECTIONS}
          searchQuery={searchQuery}
          onOpenPageLightbox={(page) => setActiveLightboxPage(page)}
        />
      </main>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      <LightboxModal
        page={activeLightboxPage}
        allPages={ALL_PAGES}
        onClose={() => setActiveLightboxPage(null)}
        onNavigate={(page) => setActiveLightboxPage(page)}
      />
    </div>
  );
}

export default App;

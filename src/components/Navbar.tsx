import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { DOWNLOAD_LINKS } from '../data/sections';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { label: 'Brand', href: '#hero' },
    { label: 'Positioning', href: '#positioning' },
    { label: 'Identity', href: '#logo-system' },
    { label: 'Voice', href: '#tone-of-voice' },
    { label: 'Visual System', href: '#colour-system' },
    { label: 'Applications', href: '#applications' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['hero', 'positioning', 'logo-system', 'tone-of-voice', 'colour-system', 'applications'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-brand">
        <img
          src="/logos/LEVELUP_Official.svg"
          alt="LevelUp Media"
          style={{ height: '32px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
        />
      </a>

      <ul className="nav-links">
        {navItems.map((item) => {
          const id = item.href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <li key={item.label}>
              <a href={item.href} className={`nav-link ${isActive ? 'active' : ''}`}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href={DOWNLOAD_LINKS.pdf} target="_blank" rel="noopener noreferrer" className="btn-brand btn-electric" style={{ padding: '0.5rem 1.15rem', fontSize: '0.8rem' }}>
          <Download size={14} /> Brand Assets
        </a>
      </div>
    </nav>
  );
};

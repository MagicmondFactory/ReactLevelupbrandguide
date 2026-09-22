export interface BrandPage {
  id: string;
  title: string;
  file: string;
  pageNumber: number;
  sectionId: string;
}

export interface BrandSection {
  id: string;
  number: string;
  title: string;
  description: string;
  pages: BrandPage[];
}

export const DOWNLOAD_LINKS = {
  fonts: 'https://drive.google.com/drive/folders/19Qi35zTZRyE81GCeW_hcHXEsrM4bGQ7B',
  logo: 'https://drive.google.com/drive/folders/1PDmP39uBiZCaLcdENcvhdE-J_t7abmS2',
  pdf: 'https://drive.google.com/drive/folders/16eII7znDnFO3qGR9hNjNU3g8xGx-0Ao8',
};

export const BRAND_SECTIONS: BrandSection[] = [
  {
    id: 'cover',
    number: '00',
    title: 'Brand Manual Cover',
    description: 'LevelUp Brand Identity & Manual Introduction',
    pages: [
      { id: 'p-cover', title: 'Cover Page', file: 'Cover.svg', pageNumber: 1, sectionId: 'cover' },
      { id: 'p-01', title: 'Introduction', file: '01.svg', pageNumber: 2, sectionId: 'cover' },
      { id: 'p-02', title: 'Table of Contents', file: '02.svg', pageNumber: 3, sectionId: 'cover' },
      { id: 'p-02-1', title: 'Brand Essence Overview', file: '02-1.svg', pageNumber: 4, sectionId: 'cover' },
    ]
  },
  {
    id: 'brand-story',
    number: '01',
    title: 'Brand Story',
    description: 'Core purpose, vision, and origin story of LevelUp',
    pages: [
      { id: 'p-03', title: 'Brand Story & Vision', file: '03.svg', pageNumber: 5, sectionId: 'brand-story' },
      { id: 'p-04', title: 'Mission Statement', file: '4.svg', pageNumber: 6, sectionId: 'brand-story' },
      { id: 'p-05', title: 'Brand Philosophy', file: '05.svg', pageNumber: 7, sectionId: 'brand-story' },
      { id: 'p-06', title: 'Target Audience & Tone', file: '6.svg', pageNumber: 8, sectionId: 'brand-story' },
    ]
  },
  {
    id: 'brand-strategy',
    number: '02',
    title: 'Brand Strategy',
    description: 'Strategic positioning, values, and brand personality',
    pages: [
      { id: 'p-07', title: 'Brand Positioning', file: '7.svg', pageNumber: 9, sectionId: 'brand-strategy' },
      { id: 'p-08', title: 'Core Pillars', file: '8.svg', pageNumber: 10, sectionId: 'brand-strategy' },
      { id: 'p-09', title: 'Voice & Tone', file: '9.svg', pageNumber: 11, sectionId: 'brand-strategy' },
      { id: 'p-10', title: 'Messaging Framework', file: '10.svg', pageNumber: 12, sectionId: 'brand-strategy' },
    ]
  },
  {
    id: 'logo-system',
    number: '03',
    title: 'Logo System',
    description: 'Logo mark, logotype, clear space, and grid specifications',
    pages: [
      { id: 'p-11', title: 'Primary Logo Construction', file: '11.svg', pageNumber: 13, sectionId: 'logo-system' },
      { id: 'p-12', title: 'Clear Space & Minimum Size', file: '12.svg', pageNumber: 14, sectionId: 'logo-system' },
      { id: 'p-13', title: 'Logo Variations', file: '13.svg', pageNumber: 15, sectionId: 'logo-system' },
      { id: 'p-14', title: 'Symbol & Icon Mark', file: '14.svg', pageNumber: 16, sectionId: 'logo-system' },
      { id: 'p-15', title: 'Incorrect Logo Usage', file: '15.svg', pageNumber: 17, sectionId: 'logo-system' },
      { id: 'p-16', title: 'Background Placement Rules', file: '16.svg', pageNumber: 18, sectionId: 'logo-system' },
      { id: 'p-17', title: 'Co-Branding Guidelines', file: '17.svg', pageNumber: 19, sectionId: 'logo-system' },
    ]
  },
  {
    id: 'color-palette',
    number: '04',
    title: 'Color Palette',
    description: 'Primary, secondary, and accent brand colors',
    pages: [
      { id: 'p-18', title: 'Primary Brand Colors', file: '18.svg', pageNumber: 20, sectionId: 'color-palette' },
      { id: 'p-19', title: 'Secondary Color Palette', file: '19.svg', pageNumber: 21, sectionId: 'color-palette' },
      { id: 'p-20', title: 'Color Proportions', file: '20.svg', pageNumber: 22, sectionId: 'color-palette' },
      { id: 'p-21', title: 'Gradients & Blends', file: '21.svg', pageNumber: 23, sectionId: 'color-palette' },
      { id: 'p-22', title: 'Accessibility & Contrast', file: '22.svg', pageNumber: 24, sectionId: 'color-palette' },
    ]
  },
  {
    id: 'typography',
    number: '05',
    title: 'Typography',
    description: 'Brand typefaces, hierarchy, font weights, and spacing',
    pages: [
      { id: 'p-23', title: 'Primary Brand Typeface', file: '23.svg', pageNumber: 25, sectionId: 'typography' },
      { id: 'p-24', title: 'Secondary Typeface', file: '24.svg', pageNumber: 26, sectionId: 'typography' },
      { id: 'p-25', title: 'Typographic Hierarchy', file: '25.svg', pageNumber: 27, sectionId: 'typography' },
      { id: 'p-26', title: 'Heading & Body Styles', file: '26.svg', pageNumber: 28, sectionId: 'typography' },
      { id: 'p-27', title: 'Font Pairings & Usage', file: '27.svg', pageNumber: 29, sectionId: 'typography' },
      { id: 'p-28', title: 'Digital & Print Line Spacing', file: '28.svg', pageNumber: 30, sectionId: 'typography' },
      { id: 'p-29', title: 'Web Fallback Fonts', file: '29.svg', pageNumber: 31, sectionId: 'typography' },
    ]
  },
  {
    id: 'collaterals',
    number: '06',
    title: 'Brand Collaterals',
    description: 'Stationery, social media templates, merchandise, and showcase',
    pages: [
      { id: 'p-30', title: 'Business Cards & Stationery', file: '30.svg', pageNumber: 32, sectionId: 'collaterals' },
      { id: 'p-31', title: 'Letterhead & Envelopes', file: '31.svg', pageNumber: 33, sectionId: 'collaterals' },
      { id: 'p-32', title: 'Social Media Templates', file: '32.svg', pageNumber: 34, sectionId: 'collaterals' },
      { id: 'p-33', title: 'Digital Banners & Ads', file: '33.svg', pageNumber: 35, sectionId: 'collaterals' },
      { id: 'p-34', title: 'Merchandise & Apparel', file: '34.svg', pageNumber: 36, sectionId: 'collaterals' },
      { id: 'p-35', title: 'Packaging Design', file: '35.svg', pageNumber: 37, sectionId: 'collaterals' },
      { id: 'p-36', title: 'Out of Home Mockups', file: '36.svg', pageNumber: 38, sectionId: 'collaterals' },
      { id: 'p-37', title: 'Brand Guidelines Summary', file: '37.svg', pageNumber: 39, sectionId: 'collaterals' },
      { id: 'p-end', title: 'Closing Page', file: 'End.svg', pageNumber: 40, sectionId: 'collaterals' },
    ]
  }
];

export const ALL_PAGES = BRAND_SECTIONS.flatMap(s => s.pages);

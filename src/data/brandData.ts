export interface ColorItem {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone: string;
  darkText: boolean;
}

export interface TypographySpec {
  name: string;
  role: string;
  usage: string;
  fontFamily: string;
  weights: string[];
  sampleText: string;
  downloadUrl: string;
}

export interface LogoVariant {
  title: string;
  type: string;
  description: string;
  svgPath: string;
}

export const BRAND_COLORS: ColorItem[] = [
  {
    name: 'Midnight Navy',
    role: 'Primary Brand Dark Canvas',
    hex: '#070732',
    rgb: 'rgb(7, 7, 50)',
    cmyk: '86, 86, 0, 80',
    pantone: '2768 C',
    darkText: false,
  },
  {
    name: 'Electric Blue',
    role: 'Primary Accent Cobalt',
    hex: '#3343FF',
    rgb: 'rgb(51, 67, 255)',
    cmyk: '80, 74, 0, 0',
    pantone: '2728 C',
    darkText: false,
  },
  {
    name: 'Electric Lime',
    role: 'Vivid Highlight Accent',
    hex: '#DEFFB0',
    rgb: 'rgb(222, 255, 176)',
    cmyk: '13, 0, 31, 0',
    pantone: '381 C',
    darkText: true,
  },
  {
    name: 'Ultramarine Blue',
    role: 'Secondary Color',
    hex: '#114AC9',
    rgb: 'rgb(17, 74, 201)',
    cmyk: '92, 63, 0, 0',
    pantone: '286 C',
    darkText: false,
  },
  {
    name: 'Soft Indigo',
    role: 'Secondary Tint & Badges',
    hex: '#747FFF',
    rgb: 'rgb(116, 127, 255)',
    cmyk: '55, 50, 0, 0',
    pantone: '2715 C',
    darkText: false,
  },
  {
    name: 'Deep Ocean Blue',
    role: 'Secondary Deep Surface',
    hex: '#033059',
    rgb: 'rgb(3, 48, 89)',
    cmyk: '97, 46, 0, 65',
    pantone: '302 C',
    darkText: false,
  },
  {
    name: 'Warm Ochre',
    role: 'Secondary Action Accent',
    hex: '#C96711',
    rgb: 'rgb(201, 103, 17)',
    cmyk: '0, 49, 92, 21',
    pantone: '152 C',
    darkText: false,
  },
  {
    name: 'Pure White',
    role: 'Primary Text & Contrast Mark',
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
    cmyk: '0, 0, 0, 0',
    pantone: 'Opaque White',
    darkText: true,
  },
];

export const TYPOGRAPHY_SPECS: TypographySpec[] = [
  {
    name: 'Radio Canada Big',
    role: 'Primary Display & Headline Typeface',
    usage: 'Used for main headlines, hero banners, section titles, and high-impact brand statements.',
    fontFamily: "'Radio Canada Big', sans-serif",
    weights: ['Medium (500)', 'SemiBold (600)', 'Bold (700)'],
    sampleText: 'LEVELUP YOUR BRAND IDENTITY & EXPERIENCE',
    downloadUrl: 'https://drive.google.com/drive/folders/19Qi35zTZRyE81GCeW_hcHXEsrM4bGQ7B',
  },
  {
    name: 'Space Grotesk',
    role: 'Structural & Navigation Typeface',
    usage: 'Used for section numbers, navigation menus, pill badges, and structured technical data.',
    fontFamily: "'Space Grotesk', sans-serif",
    weights: ['Regular (400)', 'Medium (500)', 'SemiBold (600)', 'Bold (700)'],
    sampleText: 'SECTION 03 — LOGO CONSTRUCTION & CLEAR SPACE RULES',
    downloadUrl: 'https://drive.google.com/drive/folders/19Qi35zTZRyE81GCeW_hcHXEsrM4bGQ7B',
  },
  {
    name: 'Geist',
    role: 'Body & Technical Specimen Typeface',
    usage: 'Used for descriptive paragraphs, interface body copy, code swatches, and technical specifications.',
    fontFamily: "'Geist', sans-serif",
    weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'Bold (700)'],
    sampleText: 'LevelUp elevates identity through athletic precision, vibrant Electric Blue highlights, and relentless attention to visual craftsmanship.',
    downloadUrl: 'https://drive.google.com/drive/folders/19Qi35zTZRyE81GCeW_hcHXEsrM4bGQ7B',
  },
];

export const LOGO_RULES = [
  { title: 'Clear Space Rule', desc: 'Always maintain a minimum clear space equal to 1.5x the height of the LevelUp logotype around all sides.' },
  { title: 'Minimum Size Limit', desc: 'Digital: 24px height. Print: 10mm height to guarantee absolute legibility across all media.' },
  { title: 'Color Placement', desc: 'Use pure white mark on Midnight Navy (#070732) and Electric Blue (#3343FF) backgrounds.' },
  { title: 'Restricted Modifications', desc: 'Do not stretch, distort, alter angle, change color tones, or add drop shadows to any LevelUp logo marks.' }
];

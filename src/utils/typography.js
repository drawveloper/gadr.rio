import './global.css';

import Typography from 'typography';

const t = {
  title: 'Guilherme Rodrigues',
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  scaleRatio: 2.5,
  googleFonts: [
    {
      name: 'PT Serif',
      styles: ['700'],
    },
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['PT Serif'],
  bodyFontFamily: ['Merriweather', 'Georgia', 'serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideThemeStyles: () => ({
    a: {
      color: 'var(--textLink)',
      textDecoration: 'none',
    },
    hr: {
      background: 'var(--hr)',
    },
  }),
};

const typography = new Typography(t);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

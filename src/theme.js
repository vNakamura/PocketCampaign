// @flow

import darken from 'polished/lib/color/darken';

type Palette = {
  text: string,
  canvas: string,
  primary1: string,
  primary2: string,
  accent1: string,
  accent2: string
};
const darkPalette: Palette = {
  text: '#e6e5f1',
  canvas: '#2a2932',
  primary1: '#e05858',
  primary2: '#c73661',
  accent1: '#817b9e',
  accent2: '#443a53'
};
type Fonts = {
  display: string,
  copy: string,
};
const basicFonts = {
  display: 'Dosis',
  copy: 'Open Sans',
};
type Spacing = {
  margin: string,
};
const basicSpacing = {
  margin: '.5rem',
};

export type Theme = {
  palette: Palette,
  fonts: Fonts,
  spacing: Spacing,
  button: {
    color: string,
    focusColor: string,
    activeColor: string,
  },
  sidebar: {
    bg: string,
    width: number,
    breakpoint: number,
    overlayColor: string,
    textColor: string,
    itemHighlight: string,
  },
  topbar: {
    height: string,
    textColor: string,
    invertedTextColor: string,
  },
  chat: {
    speakBorder: string,
    speakBorderRadius: string,
  },
};
const darkTheme: Theme = {
  palette: darkPalette,
  fonts: basicFonts,
  spacing: basicSpacing,
  button: {
    color: darkPalette.accent1,
    focusColor: darkPalette.text,
    activeColor: darkPalette.primary1,
  },
  sidebar: {
    bg: `linear-gradient(11deg, ${darkPalette.canvas} 25%, ${darken(.05, darkPalette.canvas)} 82%);`,
    width: 320,
    breakpoint: 768,
    textColor: darkPalette.text,
    overlayColor: darkPalette.canvas,
    itemHighlight: darkPalette.accent2,
  },
  topbar: {
    height: '3rem',
    textColor: darkPalette.text,
    invertedTextColor: darkPalette.canvas,
  },
  chat: {
    speakBorder: `solid 4px ${darkPalette.accent1}`,
    speakBorderRadius: '16px',
  },
};

export const defaultTheme: Theme = darkTheme;
export default {...defaultTheme};

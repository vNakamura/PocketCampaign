// @flow

import darken from 'polished/lib/color/darken';
import mix from 'polished/lib/color/mix';

type Palette = {
  text: string,
  canvas: string,
  primary1: string,
  primary2: string,
  accent1: string,
  accent2: string,
};
const darkPalette: Palette = {
  text: '#e6e5f1',
  canvas: '#2a2932',
  primary1: '#e05858',
  primary2: '#c73661',
  accent1: '#817b9e',
  accent2: '#443a53',
};
type Fonts = {
  display: string,
  copy: string,
};
const basicFonts = {
  display: 'Dosis',
  copy: '"Open Sans"',
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
    rollResultBg: string,
    rollResultText: string,
    rollModifierBg: string,
    rollModifierText: string,
    rollTotalBg: string,
    rollTotalText: string,
    rollRadius: string,
  },
  inputs: {
    backgroundColor: string,
    textColor: string,
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
    bg: `linear-gradient(11deg, ${darkPalette.canvas} 25%, ${darken(
      0.05,
      darkPalette.canvas,
    )} 82%);`,
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
    border: `1px solid ${mix(0.8, darkPalette.canvas, darkPalette.text)}`,
  },
  chat: {
    speakBorder: `solid 4px ${darkPalette.accent1}`,
    speakBorderRadius: '16px',
    rollResultBg: darkPalette.text,
    rollResultText: darkPalette.canvas,
    rollModifierBg: darkPalette.accent1,
    rollModifierText: darkPalette.text,
    rollTotalBg: darkPalette.primary2,
    rollTotalText: darkPalette.text,
    rollRadius: '8px',
  },
  inputs: {
    backgroundColor: darkPalette.text,
    textColor: darkPalette.canvas,
  },
};

export const mainTheme: Theme = darkTheme;
export default { ...mainTheme };

// @flow

import darken from 'polished/lib/color/darken';

type palette = {
  text: string,
  canvas: string,
  primary1: string,
  primary2: string,
  accent1: string,
  accent2: string
};
const darkPallete: palette = {
  text: '#e6e5f1',
  canvas: '#2a2932',
  primary1: '#e05858',
  primary2: '#c73661',
  accent1: '#4B4E6D',
  accent2: '#6A8D92'
};

export type theme = {
  palette: palette,
  sidebar: {
    bg: string,
    width: number,
    textColor: string,
    itemHighlight: string,
  },
  topbar: {
    height: string,
    textColor: string,
    invertedTextColor: string,
  }
};
const darkTheme: $npm$styledComponents$Theme = {
  palette: darkPallete,
  sidebar: {
    bg: `linear-gradient(11deg, ${darkPallete.canvas} 25%, ${darken(.05, darkPallete.canvas)} 82%);`,
    width: 320,
    textColor: darkPallete.text,
    itemHighlight: darkPallete.accent1,
  },
  topbar: {
    height: '56px',
    textColor: darkPallete.text,
    invertedTextColor: darkPallete.canvas,
  },
};

export default darkTheme;

import {darken} from 'polished';

const palette = {
  text: '#e6e5f1',
  canvas: '#2a2932',
  primary1: '#e05858',
  primary2: '#c73661',
  accent1: '#4B4E6D',
  accent2: '#6A8D92'
};

const theme = {
  palette,
  sidebar: {
    bg: `linear-gradient(11deg, ${palette.canvas} 25%, ${darken(.05, palette.canvas)} 82%);`,
    width: 320,
    textColor: palette.text,
    itemHighlight: palette.accent1,
  },
  topbar: {
    height: '56px',
    textColor: palette.text,
    invertedTextColor: palette.canvas,
  },
};

export default theme;

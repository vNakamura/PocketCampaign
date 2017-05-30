import {darken} from 'polished';

// Palette: https://coolors.co/493548-4b4e6d-6a8d92-80b192-a1e887
const palette = {
  text: '#493548',
  canvas: '#FFFDF7',
  primary1: '#80B192',
  primary2: '#A1E887',
  accent1: '#4B4E6D',
  accent2: '#6A8D92'
};

const theme = {
  palette,
  sidebar: {
    bg: `linear-gradient(11deg, ${palette.text} 25%, ${darken(.15, palette.text)} 82%);`,
    width: 320,
    textColor: palette.canvas,
  },
  topbar: {
    height: '56px',
    textColor: palette.text,
    invertedTextColor: palette.canvas,
  },
};

export default theme;

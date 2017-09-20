import React from 'react';
import { ThemeProvider } from 'styled-components';
/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';
import 'jest-styled-components';
/* eslint-enable import/no-extraneous-dependencies */
import theme from '../theme';

export const applyTheme = content => (
  <ThemeProvider theme={theme}>
    {content}
  </ThemeProvider>
);

export const renderWithTheme = content => renderer.create(
  applyTheme(content),
).toJSON();

export default {
  applyTheme,
  renderWithTheme,
};

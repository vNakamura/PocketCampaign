import React from 'react';

import { CharacterSheet } from './CharacterSheet';
import { renderWithTheme } from '../helpers/jest';

describe('components: Inputs/CharacterSheet', () => {
  it('should render correctly', () => {
    const demo = renderWithTheme(<CharacterSheet char={{}} />);
    expect(demo).toMatchSnapshot();
  });
});

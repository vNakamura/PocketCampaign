import React from 'react';

import Button from './Button';
import { renderWithTheme } from '../../helpers/jest';

describe('components: Buttons/Button', () => {
  it('should render correctly', () => {
    const withoutText = renderWithTheme(<Button />);
    expect(withoutText).toMatchSnapshot();
    const withText = renderWithTheme(<Button text={'abcdef'} />);
    expect(withText).toMatchSnapshot();
  });
});

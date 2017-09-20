import React from 'react';
import Input from './Input';
import { renderWithTheme } from '../../helpers/jest';

describe('components: Inputs/Input', () => {
  it('should render correctly', () => {
    const centered = renderWithTheme(<Input
      value={1}
      size={50}
      type="tel"
      centered
    />);
    expect(centered).toMatchSnapshot();
    const nonCentered = renderWithTheme(<Input
      value={'asd'}
      size={100}
      type="text"
    />);
    expect(nonCentered).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import IconButton from './IconButton';
import { applyTheme, renderWithTheme } from '../../helpers/jest';

describe('components: Buttons/IconButton', () => {
  it('should render correctly', () => {
    const withoutText = renderWithTheme(<IconButton />);
    expect(withoutText).toMatchSnapshot();
    const withText = renderWithTheme(<IconButton text={'abcdef'} />);
    expect(withText).toMatchSnapshot();
  });

  it('shoud have a <span> with the text if the prop is set', () => {
    const withoutText = mount(applyTheme(<IconButton />));
    expect(withoutText.find('span')).toHaveLength(0);
    const withText = mount(applyTheme(<IconButton text={'asdfg'} />));
    expect(withText.find('span')).toHaveLength(1);
  });
});

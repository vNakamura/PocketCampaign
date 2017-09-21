import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { applyTheme, renderWithTheme } from '../helpers/jest';
import { SideBar } from './SideBar';
import Button from './Buttons/Button';

const dispatch = jest.fn();
jest.useFakeTimers();

describe('components: SideBar', () => {
  const sidebar = (<MemoryRouter><SideBar
    currentUser={{
      name: 'User Name',
      key: 'someKey',
    }}
    visible
    dispatch={dispatch}
  /></MemoryRouter>);

  it('should render correctly', () => {
    const avatar = renderWithTheme(sidebar);
    expect(avatar).toMatchSnapshot();
  });

  it('should dispatch an action when close button is pressed', () => {
    const closeButton = mount(applyTheme(sidebar)).find(Button);
    closeButton.simulate('click');
    jest.runOnlyPendingTimers();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should not have a close button if fixed', () => {
    const notFixed = mount(applyTheme(sidebar));
    expect(notFixed.find(Button)).toHaveLength(1);
    const fixed = mount(applyTheme(<MemoryRouter><SideBar
      currentUser={{
        name: 'User Name',
        key: 'someKey',
      }}
      visible
      fixed
      dispatch={dispatch}
    /></MemoryRouter>));
    expect(fixed.find(Button)).toHaveLength(0);
  });
});

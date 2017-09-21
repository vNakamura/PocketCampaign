import React from 'react';
import { mount } from 'enzyme';

import { renderWithTheme } from '../helpers/jest';
import Avatar from './Avatar';

describe('components: Avatar', () => {
  it('should render correctly', () => {
    const avatar = renderWithTheme(<Avatar user={{ key: 'someKey' }} />);
    expect(avatar).toMatchSnapshot();
  });
  it("should use a placeholder image if user doesn't have one", () => {
    const wrapper = mount(<Avatar user={{ avatar: 'avatarPath' }} />);
    expect(wrapper.find('img').prop('src')).toEqual('avatarPath');
    wrapper.setProps({
      user: { key: 'someKey' },
    });
    const src = wrapper.find('img').prop('src');
    expect(src).toEqual(expect.stringContaining('http'));
    expect(src).toEqual(expect.stringContaining('someKey'));
  });
});

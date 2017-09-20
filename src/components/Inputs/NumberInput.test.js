import React from 'react';
import { mount, shallow } from 'enzyme';

import NumberInput from './NumberInput';
import { applyTheme, renderWithTheme } from '../../helpers/jest';

const changeHandler = jest.fn();

describe('components: Inputs/NumberInput', () => {
  it('should render correctly', () => {
    const signed = renderWithTheme(<NumberInput hideSign />);
    expect(signed).toMatchSnapshot();
    const NotSigned = renderWithTheme(<NumberInput />);
    expect(NotSigned).toMatchSnapshot();
  });

  it('should change value when buttons are pressed', () => {
    const wrapper = mount(applyTheme(<NumberInput
      defaultValue={5}
      step={2}
      onChange={changeHandler}
    />));
    const buttons = wrapper.find('button');
    changeHandler.mockClear();
    buttons.at(0).simulate('click');
    expect(changeHandler).toHaveBeenCalledWith(7);
    changeHandler.mockClear();
    buttons.at(1).simulate('click');
    expect(changeHandler).toHaveBeenCalledWith(5);
  });

  it('should change value when up and down keys are pressed', () => {
    const wrapper = mount(applyTheme(<NumberInput
      defaultValue={8}
      step={3}
      onChange={changeHandler}
    />));
    const input = wrapper.find('input');
    changeHandler.mockClear();
    input.simulate('keyDown', { keyCode: 38 });
    expect(changeHandler).toHaveBeenCalledWith(11);
    changeHandler.mockClear();
    input.simulate('keyDown', { keyCode: 40 });
    expect(changeHandler).toHaveBeenCalledWith(8);
  });

  it('should change value if defaultValue prop changes', () => {
    const wrapper = shallow(applyTheme(<NumberInput
      defaultValue={30}
    />)).find(NumberInput).dive();
    expect(wrapper.state('value')).toBe(30);
    wrapper.setProps({ defaultValue: 97 });
    expect(wrapper.state('value')).toBe(97);
  });

  it('should accept only numeric values', () => {
    expect(NumberInput.filterInt(3)).toBe(3);
    expect(NumberInput.filterInt('100')).toBe(100);
    expect(NumberInput.filterInt('-20')).toBe(-20);
    expect(NumberInput.filterInt('a')).toBe(0);
    expect(NumberInput.filterInt('a1')).toBe(0);
  });
});

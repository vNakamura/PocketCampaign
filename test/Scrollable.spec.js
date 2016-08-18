import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Scrollable from '../src/components/Scrollable';

describe('<Scrollable />', function () {
  it('should have a <div> element embracing the component\'s children',
    function () {
      const wrapper = shallow(<Scrollable><img /><p></p></Scrollable>);
      const element = wrapper.find('div');
      expect(element).to.have.length(1);
      expect(element.children('img')).to.have.length(1);
      expect(element.children('p')).to.have.length(1);
    }
  );

});

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Scrollable from '../src/components/Scrollable';

describe('<Scrollable />', function () {
  it('should have a <div> element embracing the component\'s children',
    function () {
      const wrapper = shallow(<Scrollable><img /><p></p></Scrollable>);
      expect(wrapper).to.have.exactly(1).descendants('div');
      const element = wrapper.find('div');
      expect(element).to.have.exactly(1).descendants('img');
      expect(element).to.have.exactly(1).descendants('p');
    }
  );

});

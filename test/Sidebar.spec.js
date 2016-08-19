import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Sidebar from '../src/components/Sidebar';

describe('<Sidebar />', function () {
  it('should have a <Topbar /> component', function () {
    const wrapper = shallow(<Sidebar />);
    const element = wrapper.find('Topbar');
    expect(element).to.have.length(1);
  });

  it('should have props for close button', function () {
    const props = shallow(<Sidebar />).props();
    expect(props.closeButtonAction).to.be.defined;
  });

});

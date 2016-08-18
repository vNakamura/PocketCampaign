import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Content from '../src/components/Content';

describe('<Content />', function () {
  it('should have a <Topbar /> component', function () {
    const wrapper = shallow(<Content />);
    expect(wrapper.find('Topbar')).to.have.length(1);
  });

  it('should have a <Scrollable /> component', function () {
    const wrapper = shallow(<Content />);
    expect(wrapper.find('Scrollable')).to.have.length(1);
  });

  it('should have a <ChatInput /> component', function () {
    const wrapper = shallow(<Content />);
    expect(wrapper.find('ChatInput')).to.have.length(1);
  });

  it('should have props for sidebar visibility and menu button action',
    function () {
      const props = shallow(<Content />).props();
      expect(props.sidebarVisible).to.be.defined;
      expect(props.menuButtonAction).to.be.defined;
    }
  );

});

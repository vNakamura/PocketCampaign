import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Content from '../src/components/Content';

describe('<Content />', function () {
  it('should have a <Topbar /> component', function () {
    const wrapper = shallow(<Content />);
    expect(wrapper).to.have.exactly(1).descendants('Topbar');
  });

  it('should have a <Scrollable /> component', function () {
    const wrapper = shallow(<Content />);
    expect(wrapper).to.have.exactly(1).descendants('Scrollable');
  });

  it('should have a <ChatInput /> component', function () {
    const wrapper = shallow(<Content />);
    expect(wrapper).to.have.exactly(1).descendants('ChatInput');
  });

  it('should have propTypes set', function () {
    expect(Content.propTypes.menuButtonAction).to.be.equal(PropTypes.func);
  });
});

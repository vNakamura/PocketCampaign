import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from '../src/components/App';

describe('<App />', function () {
  it('should have a <Content /> component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.exactly(1).descendants('Content');
  });

  it('should have a <Sidebar /> component if props says so', function () {
    const wrapper = shallow(<App sidebarVisible={true} />);
    expect(wrapper.find('Sidebar')).to.have.length(1);
    wrapper.setProps({ sidebarVisible: false });
    expect(wrapper.find('Sidebar')).to.have.length(0);
  });

  it('should have propTypes set', function () {
    expect(App.propTypes.children).to.be.equal(PropTypes.node);
  });

});

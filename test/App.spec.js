import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../src/components/App';

describe('<App />', function () {
  it('should have a <Content /> component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.exactly(1).descendants('Content');
  });

  it('should have a <Sidebar /> component if state says so', function () {
    const wrapper = shallow(<App />);
    let visibility = wrapper.state('sidebarVisible') ? 1 : 0;
    expect(wrapper.find('Sidebar')).to.have.length(visibility);
    wrapper.setState({sidebarVisible: !visibility});
    visibility = wrapper.state('sidebarVisible') ? 1 : 0;
    expect(wrapper.find('Sidebar')).to.have.length(visibility);
  });

});

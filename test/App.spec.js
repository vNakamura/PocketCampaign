import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import { App } from '../src/components/App';

const firebase = {
  logout: spy()
}

describe('<App />', function () {
  it('should have a <Content /> component', function () {
    const wrapper = shallow(<App
      auth={{ user: true }}
      params={{ id: 'a' }}
      firebase={firebase}
    />);
    expect(wrapper).to.have.exactly(1).descendants('Content');
  });

  it('should have a <Sidebar /> component if props says so', function () {
    const wrapper = shallow(<App
      auth={{ user: true }}
      params={{ id: 'a' }}
      firebase={firebase}
      sidebarVisible={true}
    />);
    expect(wrapper.find('Sidebar')).to.have.length(1);
    wrapper.setProps({ sidebarVisible: false });
    expect(wrapper.find('Sidebar')).to.have.length(0);
  });

});

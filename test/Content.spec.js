import React, { PropTypes, Component } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

import Content from '../src/components/Content';

const child = <Component />

describe('<Content />', function () {
  it('should have a <Topbar /> component', function () {
    const wrapper = shallow(<Content>{child}</Content>);
    expect(wrapper).to.have.exactly(1).descendants('Topbar');
  });

  it('should have a <Scrollable /> component', function () {
    const wrapper = shallow(<Content>{child}</Content>);
    expect(wrapper).to.have.exactly(1).descendants('Scrollable');
  });

  it('should have propTypes set', function () {
    expect(Content.propTypes.menuButtonAction).to.be.equal(PropTypes.func);
    expect(Content.propTypes.modal).to.be.equal(PropTypes.object);
  });
});

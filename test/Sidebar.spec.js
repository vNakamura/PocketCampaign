import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Sidebar from '../src/components/Sidebar';

describe('<Sidebar />', function () {
  it('should have a <Topbar /> component', function () {
    expect(shallow(<Sidebar />)).to.have.exactly(1).descendants('Topbar');
  });

  it('should have propTypes set', function () {
    expect(Sidebar.propTypes.closeButtonAction).to.be.equal(PropTypes.func);
  });

});

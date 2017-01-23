import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import randomatic from 'randomatic';
import { spy } from 'sinon';

import Topbar from '../src/components/Topbar';

describe('<Topbar />', function () {
  it('should have a <h4> element containing the title', function () {
    const title = randomatic('*', 20);
    const wrapper = shallow(<Topbar titleText={title}/>);
    const element = wrapper.find('h4');
    expect(element).to.have.length(1);
    expect(element).to.have.text(title);
  });

  it('should show buttons when set by props', function () {
    let wrapper = shallow(<Topbar />);
    expect(wrapper).to.not.have.descendants('a');
    wrapper.setProps({leftButtonContent: <span>left</span>});
    expect(wrapper).to.have.exactly(1).descendants('button');
    wrapper.setProps({rightButtonContent: <span>right</span>});
    expect(wrapper).to.have.exactly(2).descendants('button');
  });

  it('should accept functions as props to run when buttons are clicked', function () {
    const action = spy();
    const wrapper = shallow(<Topbar
      leftButtonContent={<span>l</span>}
      leftButtonAction={action}
      rightButtonContent={<span>r</span>}
      rightButtonAction={action}
    />);

    const buttons = wrapper.find('button');
    expect(action).to.have.not.been.called;
    buttons.at(0).simulate('click');
    expect(action).to.have.been.calledOnce;
    buttons.at(1).simulate('click');
    expect(action).to.have.been.calledTwice;

  });

  it('should have propTypes set', function () {
    expect(Topbar.propTypes.titleText).to.be.equal(PropTypes.string);
    expect(Topbar.propTypes.leftButtonContent).to.be.equal(PropTypes.element);
    expect(Topbar.propTypes.rightButtonContent).to.be.equal(PropTypes.element);
    expect(Topbar.propTypes.leftButtonAction).to.be.equal(PropTypes.func);
    expect(Topbar.propTypes.rightButtonAction).to.be.equal(PropTypes.func);
  });
});

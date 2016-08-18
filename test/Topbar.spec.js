import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import randomize from 'randomatic';

import Topbar from '../src/components/Topbar';

describe('<Topbar />', function () {
  it('should have a <h4> element containing the title', function () {
    const title = randomize('*', 20);
    const wrapper = shallow(<Topbar titleText={title}/>);
    const element = wrapper.find('h4');
    expect(element).to.have.length(1);
    expect(element.text()).to.equal(title);
  });

  it('should have props for title and buttons', function () {
    const props = shallow(<Topbar />).props();
    expect(props.titleText).to.be.defined;
    expect(props.leftButtonContent).to.be.defined;
    expect(props.rightButtonContent).to.be.defined;
    expect(props.leftButtonAction).to.be.defined;
    expect(props.rightButtonAction).to.be.defined;
  });

  it('should show buttons when set by props', function () {
    let wrapper = shallow(<Topbar />);
    expect(wrapper.find('a')).to.have.length(0);
    wrapper = wrapper.setProps({leftButtonContent: <span>left</span>});
    expect(wrapper.find('a')).to.have.length(1);
    wrapper = wrapper.setProps({rightButtonContent: <span>right</span>});
    expect(wrapper.find('a')).to.have.length(2);
  });

  it('should accept functions as props to run when buttons are clicked', function () {
    let count = 0;
    const increaseCount = function() {
      count++;
    }
    const wrapper = shallow(<Topbar
      leftButtonContent={<span>l</span>}
      leftButtonAction={increaseCount}
      rightButtonContent={<span>r</span>}
      rightButtonAction={increaseCount}
    />);

    expect(count).to.be.equal(0);
    wrapper.find('a').at(0).simulate('click');
    expect(count).to.be.equal(1);
    wrapper.find('a').at(1).simulate('click');
    expect(count).to.be.equal(2);
  });

});

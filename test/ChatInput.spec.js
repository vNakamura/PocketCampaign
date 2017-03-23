import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import TextareaAutoresize from 'react-textarea-autosize';
import { ChatInput } from '../src/components/ChatInput';

const firebase = {
  push: spy()
}
const match = {
  params: {
    id: 'asd'
  }
}

describe('<ChatInput />', function () {

  it('should have a <TextareaAutoresize /> component', function () {
    const wrapper = shallow(<ChatInput />);
    expect(wrapper).to.have.exactly(1).descendants(TextareaAutoresize);
  });

  it('should have a send button only if text input has content', function () {
    const wrapper = shallow(<ChatInput />);
    expect(wrapper.childAt(2)).to.not.match('button');
    wrapper.setState({ text: 'abc' });
    expect(wrapper.childAt(2)).to.match('button');
  });

  it('should trim the message before sending and then clean the input field', function () {
    const wrapper = shallow(<ChatInput match={match} firebase={firebase} />);
    wrapper.setState({ text: ' ab c \n' });
    wrapper.childAt(2).simulate('click');
    expect(wrapper).to.have.state('text').equal('');
  });

  it('should push data to firebase', function () {
    firebase.push.reset();
    const wrapper = shallow(<ChatInput match={match} firebase={firebase} />);
    wrapper.childAt(2).simulate('click');
    wrapper.setState({ text: ' ab c \n' });
    wrapper.childAt(2).simulate('click');
    expect(firebase.push).to.have.been.calledOnce;
  });

});

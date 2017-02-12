import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import randomatic from 'randomatic';
import moment from 'moment';
import TimeAgo from 'react-timeago';

import ChatItem from '../src/components/ChatItem';

describe('<ChatItem />', function () {
  const author = {
    image: randomatic('*', 20),
    name: randomatic('*', 20),
  };
  const content = {
    text: randomatic('*', 150),
    timestamp: moment().valueOf(),
  };

  it('should have an Avatar component', function () {
    const wrapper = shallow(<ChatItem author={author} content={content} />);
    expect(wrapper).to.have.exactly(1).descendants('Avatar');
    const avatar = wrapper.find('Avatar').first();
    expect(avatar).to.have.prop('image').equal(author.image);
    expect(avatar).to.have.prop('name').equal(author.name);
  });

  it('should have elements containing the author name and message text', function () {
    const wrapper = shallow(<ChatItem author={author} content={content} />);
    const name = wrapper.find('author').first();
    expect(name).to.have.text().equal(`${author.name}`);
    const message = wrapper.find('message').first();
    expect(message).to.have.text().equal(`${content.text}`);
  });

  it('should have an TimeAgo component if time prop is set', function () {
    const wrapper = shallow(<ChatItem author={author} content={{text: content.text}} />);
    expect(wrapper).to.not.have.descendants(TimeAgo);
    wrapper.setProps({ content });
    expect(wrapper).to.have.exactly(1).descendants(TimeAgo);
  });

  it('should have propTypes set', function () {
    expect(ChatItem.propTypes.content).to.be.equal(PropTypes.object.isRequired);
    expect(ChatItem.propTypes.author).to.be.equal(PropTypes.object.isRequired);
  });

});

import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import randomatic from 'randomatic';
import moment from 'moment';
import TimeAgo from 'react-timeago';

import Message from '../src/components/Message';

describe('<Message />', function () {
  const author = {
    image: randomatic('*', 20),
    name: randomatic('*', 20),
  };
  const text = randomatic('*', 150);
  const time = moment().valueOf();

  it('should have an Avatar component', function () {
    const wrapper = shallow(<Message author={author} text={text} />);
    expect(wrapper).to.have.exactly(1).descendants('Avatar');
    const avatar = wrapper.find('Avatar').first();
    expect(avatar).to.have.prop('image').equal(author.image);
    expect(avatar).to.have.prop('name').equal(author.name);
  });

  it('should have an p element containing the author name and message text', function () {
    const wrapper = shallow(<Message author={author} text={text} />);
    expect(wrapper).to.have.exactly(2).descendants('p');
    const p = wrapper.find('p').first();
    expect(p).to.have.text().equal(`${author.name}${text}`);
  });

  it('should have an TimeAgo component if time prop is set', function () {
    const wrapper = shallow(<Message author={author} text={text} />);
    expect(wrapper).to.not.have.descendants(TimeAgo);
    wrapper.setProps({ time });
    expect(wrapper.find('p').last()).to.have.exactly(1).descendants(TimeAgo);
  });

  it('should have propTypes set', function () {
    expect(Message.propTypes.text).to.be.equal(PropTypes.string.isRequired);
    expect(Message.propTypes.author).to.be.equal(PropTypes.object.isRequired);
    expect(Message.propTypes.time).to.be.equal(PropTypes.number);
  });

});

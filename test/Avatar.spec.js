import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import randomatic from 'randomatic';
import md5 from 'md5';

import Avatar from '../src/components/Avatar';

describe('<Avatar />', function () {
  const imageURL = randomatic('*', 20);
  const name = randomatic('*', 20);

  it('should have a image', function () {
    const wrapper = shallow(<Avatar image={imageURL} name={name} />);
    expect(wrapper).to.have.exactly(1).descendants('img');
    expect(wrapper.find('img').first()).to.have.prop('src').equal(imageURL);
  });

  it('should have adorable.io fallback if image is not set', function () {
    const wrapper = shallow(<Avatar name={name} />);
    expect(wrapper).to.have.exactly(1).descendants('img');
    expect(wrapper.find('img').first()).to.have
      .prop('src').equal(`https://api.adorable.io/avatars/128/${md5(name)}`);
  });

  it('should have propTypes set', function () {
    expect(Avatar.propTypes.image).to.be.equal(PropTypes.string);
    expect(Avatar.propTypes.name).to.be.equal(PropTypes.string.isRequired);
  });

});

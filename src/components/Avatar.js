import React, { PropTypes } from 'react';
import isNil from 'lodash/isNil';
import md5 from 'md5';

import style from './Avatar.styl';

function getImageSrc(props) {
  const { name, image } = props;

  if (isNil(image)) {
    return `https://api.adorable.io/avatars/128/${md5(name)}`;
  }
  return image;
}

const Avatar = (props) =>
  <img
    className={style.avatar}
    title={props.name}
    role="presentation"
    src={getImageSrc(props)}
    style={props.style}
  />;

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  style: PropTypes.object,
};

export default Avatar;

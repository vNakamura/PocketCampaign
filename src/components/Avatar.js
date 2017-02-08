import React, { PropTypes } from 'react';
import md5 from 'md5';

import style from './Avatar.styl';

function getImageSrc(name, image) {
  if (image == null) {
    return `https://api.adorable.io/avatars/128/${md5(name)}`;
  }
  return image;
}

const Avatar = props =>
  <div className={props.className}><img
    className={style.avatar}
    title={props.name}
    alt=""
    src={getImageSrc(props.name, props.image)}
    style={props.style}
  /></div>;

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};
Avatar.defaultProps = {
  image: null,
  style: {},
  className: '',
};

export default Avatar;

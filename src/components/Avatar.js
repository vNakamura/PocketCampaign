import React, { PropTypes } from 'react';
import md5 from 'md5';

import style from './Avatar.styl';

function getImageSrc(props) {
  const { name, image } = props;

  if (image == null) {
    return `https://api.adorable.io/avatars/128/${md5(name)}`;
  }
  return image;
}

const Avatar = (props) =>
  <div className={props.className}><img
    className={style.avatar}
    title={props.name}
    role="presentation"
    src={getImageSrc(props)}
    style={props.style}
  /></div>;

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Avatar;

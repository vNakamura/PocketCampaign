import React, { PropTypes } from 'react';
import isNil from 'lodash/isNil';
import TimeAgo from 'react-timeago';

import style from './Message.styl';
import Avatar from './Avatar';

function timeFormatter(value, unit) {
  if (value > 1) {
    return `${value} ${unit}s`;
  }
  return `${value} ${unit}`;
}

const Message = (props) =>
  <div className={style.container}>
    <Avatar className={style.avatar} {... props.author} />
    <div className={style.line} />
    <div className={style.text}>
      <p className={style.speach}>
        <span className={style.name}>{props.author.name}</span><br />
        {props.text}
      </p>
      <p className={style.time}>
        {isNil(props.time) ?
          '\u00A0' :
          (<TimeAgo date={props.time} formatter={timeFormatter} />)
        }
      </p>
    </div>
  </div>;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  time: PropTypes.number,
};

export default Message;

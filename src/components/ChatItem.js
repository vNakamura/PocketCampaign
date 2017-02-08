import React, { PropTypes } from 'react';
import TimeAgo from 'react-timeago';

import style from './ChatItem.styl';
import Avatar from './Avatar';

function timeFormatter(value, unit) {
  if (value > 1) {
    return `${value} ${unit}s`;
  }
  return `${value} ${unit}`;
}

const ChatItem = props =>
  <div className={style.container}>
    <Avatar className={style.avatar} {... props.author} />
    <div className={style.line} />
    <div className={style.text}>
      <p className={style.speach}>
        <span className={style.name}>{props.author.name}</span><br />
        {props.content.text}
      </p>
      <p className={style.time}>
        {props.content.time == null ?
          '\u00A0' :
          (<TimeAgo date={props.content.time} formatter={timeFormatter} />)
        }
      </p>
    </div>
  </div>;

ChatItem.propTypes = {
  content: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default ChatItem;

import React, { PropTypes } from 'react';
import TimeAgo from 'react-timeago';
import classnames from 'classnames';

import style from './ChatItem.styl';
import Avatar from './Avatar';

function timeFormatter(value, unit) {
  if (value > 1) {
    return `${value} ${unit}s`;
  }
  return `${value} ${unit}`;
}


const renderSpeach = content => (
  <div className={style.text}>
    <div className={style.line} />
    <div className={style.speach}>
      <p>{content.text}</p>
    </div>
  </div>
);

const renderTime = content => (
  <div className={style.time}>
    {content.timestamp == null ?
      '\u00A0' :
      (<TimeAgo date={content.timestamp} formatter={timeFormatter} />)
    }
  </div>
);

const getConteinarClasses = user => classnames(
  style.container,
  { [`${style.me}`]: user === "anUserID" }
);

const ChatItem = props =>
  <div className={getConteinarClasses(props.content.user)}>
    <Avatar className={style.avatar} {... props.author} />
    <div className={style.content}>
      <div className={style.name}>{props.author.name}</div>
      {renderSpeach(props.content)}
      {renderTime(props.content)}
    </div>
    <div className={style.spacer} />
  </div>;

ChatItem.propTypes = {
  content: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default ChatItem;

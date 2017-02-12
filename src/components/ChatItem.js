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
    <message className={style.speach}>
      <p>{content && content.text}</p>
    </message>
  </div>
);

const renderTime = content => (
  <div className={style.time}>
    {content == null || content.timestamp == null ?
      '\u00A0' :
      (<TimeAgo date={content.timestamp} formatter={timeFormatter} />)
    }
  </div>
);

const getConteinarClasses = content => classnames(
  style.container,
  { [`${style.me}`]: content && content.user && content.user === 'anUserID' },
);

const ChatItem = props =>
  <div className={getConteinarClasses(props.content)}>
    <Avatar className={style.avatar} {... props.author} />
    <div className={style.content}>
      <author className={style.name}>{props.author.name}</author>
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

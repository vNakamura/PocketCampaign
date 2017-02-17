import React, { PropTypes } from 'react';
import TimeAgo from 'react-timeago';
import classnames from 'classnames';
import droll from 'droll';
import seedrandom from 'seedrandom';

import style from './ChatItem.styl';
import Avatar from './Avatar';

const timeFormatter = (value, unit) => {
  if (value > 1) {
    return `${value} ${unit}s`;
  }
  return `${value} ${unit}`;
};

const roll = (notation, seed) => {
  seedrandom(seed, { global: true });
  return droll.roll(notation).toString();
};

const renderSpeach = content => (
  <div className={style.text}>
    <div className={style.line} />
    <message className={style.speach}>
      <p>{content && content.text}</p>
    </message>
  </div>
);

const renderDiceRoll = content => (
  <div className={style.text}>
    <div className={style.line} />
    <message className={style.speach}>
      <p><strong>Rolled:</strong> {content && content.notation}</p>
      <p>{roll(content.notation, content.timestamp)}</p>
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

const renderByType = (content) => {
  switch (content.type) {
    case 'text':
      return renderSpeach(content);
    case 'roll':
      return renderDiceRoll(content);
    default:
      return <p>Invalid type</p>;
  }
};

const getConteinarClasses = content => classnames(
  style.container,
  { [`${style.me}`]: content && content.user && content.user === 'anUserID' },
);

const ChatItem = props =>
  <div className={getConteinarClasses(props.content)}>
    <Avatar className={style.avatar} {... props.author} />
    <div className={style.content}>
      <author className={style.name}>{props.author.name}</author>
      {renderByType(props.content)}
      {renderTime(props.content)}
    </div>
    <div className={style.spacer} />
  </div>;

ChatItem.propTypes = {
  content: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default ChatItem;

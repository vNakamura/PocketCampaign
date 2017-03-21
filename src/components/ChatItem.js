import React, { PropTypes } from 'react';
import TimeAgo from 'react-timeago';
import classnames from 'classnames';
import droll from 'droll';
import seedrandom from 'seedrandom';
import replace from 'string-replace-to-array';

import style from './ChatItem.styl';
import Avatar from './Avatar';
import NotationLink from './NotationLink';

const timeFormatter = (value, unit) => {
  if (value > 1) {
    return `${value} ${unit}s`;
  }
  return `${value} ${unit}`;
};

const diceNotationRegex = /\b([1-9]\d*)?d([1-9]\d*)([+-]\d+)?\b/gi;
const addLinksToText = (text) => {
  let i = 0;
  const result = replace(
    text,
    diceNotationRegex,
    (notation, numDice, numSides) => {
      i += 1;
      if (numSides > 1) return <NotationLink key={i} notation={notation} />;
      return notation;
    },
  );
  return result;
};

const parseRoll = (notation) => {
  const p = droll.parse(notation);
  if (!p) return { ok: false, message: 'Invalid dice notation' };
  if (p.numDice > 100) return { ok: false, message: 'Invalid dice notation. Too many dice!' };
  if (p.numSides > 1000) return { ok: false, message: 'Invalid dice notation. Too many sides!' };
  if (p.numSides < 2) return { ok: false, message: 'Invalid dice notation. Too few sides!' };
  return { ok: true };
};

const roll = (notation, seed) => {
  const p = parseRoll(notation);
  if (!p.ok) return p.message;

  seedrandom(seed, { global: true });
  const result = droll.roll(notation);
  const styledResult = [];
  if (result.rolls.length > 1 || result.modifier !== 0) {
    result.rolls.forEach((r, i) => {
      if (i > 0) {
        styledResult.push(<span
          key={styledResult.length}
          className={style.signal}
        >+</span>);
      }
      styledResult.push(<span key={styledResult.length} className={style.result}>{r}</span>);
    });
    if (result.modifier !== 0) {
      styledResult.push(<span key={styledResult.length} className={style.signal}>
        {result.modifier > 0 ? '+' : '-'}
      </span>);
      styledResult.push(<span
        key={styledResult.length}
        className={style.modifier}
      >{Math.abs(result.modifier)}</span>);
    }
    styledResult.push(<span
      key={styledResult.length}
      className={style.signal}
    >=</span>);
  }
  styledResult.push(<span key={styledResult.length} className={style.total}>{result.total}</span>);
  return styledResult;
};

const renderSpeach = content => (
  <div className={style.text}>
    <div className={style.line} />
    <message className={style.speach}>
      <p>{content && addLinksToText(content.text)}</p>
    </message>
  </div>
);

const renderDiceRoll = content => (
  <div className={style.text}>
    <div className={style.line} />
    <message className={style.roll}>
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

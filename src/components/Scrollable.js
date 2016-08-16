import React, { PropTypes } from 'react';
import style from './Scrollable.styl';

const Scrollable = (props) =>
  <div className={style.scrollable}>
    {props.children}
  </div>;

Scrollable.propTypes = {
  children: PropTypes.node,
};

export default Scrollable;

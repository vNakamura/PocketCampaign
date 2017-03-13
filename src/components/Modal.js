import React, { PropTypes } from 'react';
import style from './Modal.styl';

const Modal = props =>
  <div className={style.overlay}>
    <div className={style.content}>
      <div className={style.title}>
        {props.title || '\u00a0'}
      </div>
      {props.children}
    </div>
  </div>;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Modal.defaultProps = {
  title: null,
};

export default Modal;

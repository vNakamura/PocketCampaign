import React, { PropTypes } from 'react';
import style from './Modal.styl';

const Modal = props =>
  <div className={style.overlay}>
    <div className={style.content}>
      {props.children}
    </div>
  </div>;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;

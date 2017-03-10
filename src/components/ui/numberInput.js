import React, { PropTypes } from 'react';

import style from './numberInput.styl';

const NumberInput = props =>
  <div className={style.container}>
    {/* <button>+</button> */}
    <input type="text" defaultValue={props.value} />
    {/* <button>-</button> */}
  </div>;

NumberInput.propTypes = {
  value: PropTypes.number,
};

NumberInput.defaultProps = {
  value: 0,
};

export default NumberInput;

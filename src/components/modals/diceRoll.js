import React from 'react';

import style from './diceRoll.styl';
import NumberInput from '../ui/numberInput';

/* eslint-disable react/style-prop-object */
const DiceRollModal = () =>
  <div className={style.notation}>
    <NumberInput className={style.numberInput} min={1} max={20} style={false} value={1} />
    d
    <NumberInput className={style.numberInput} min={2} max={100} style={false} value={2} />
    +
    <NumberInput className={style.numberInput} min={-100} max={100} style={false} value={0} />

  </div>;
/* eslint-enable react/style-prop-object */
export default DiceRollModal;

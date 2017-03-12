import React from 'react';
import droll from 'droll';

import style from './diceRoll.styl';
import NumberInput from '../ui/numberInput';

export default class DiceRollModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numDice: 1,
      numSides: 6,
      modifier: 0,
      notation: '1d6',
    };
    this.handleNumDiceUpdate = this.handleNumDiceUpdate.bind(this);
    this.handleNumSidesUpdate = this.handleNumSidesUpdate.bind(this);
    this.handleModifierUpdate = this.handleModifierUpdate.bind(this);
    this.updateNotation = this.updateNotation.bind(this);
  }

  handleNumDiceUpdate(value) {
    this.setState({ numDice: value }, this.updateNotation);
  }

  handleNumSidesUpdate(value) {
    this.setState({ numSides: value }, this.updateNotation);
  }

  handleModifierUpdate(value) {
    this.setState({ modifier: value }, this.updateNotation);
  }

  updateNotation() {
    const { numDice, numSides, modifier } = this.state;
    let notation = `${numDice}d${numSides}`;
    if (modifier > 0) notation += `+${modifier}`;
    if (modifier < 0) notation += modifier;
    this.setState({ notation });
  }

  render() {
    const { numDice, numSides, modifier, notation } = this.state;
    const { maxResult, minResult } = droll.parse(notation);
    return (
      <div>
        <div className={style.notation}>
          <NumberInput
            className={style.numberInput}
            min={1}
            max={20}
            onChange={this.handleNumDiceUpdate}
            defaultValue={numDice}
          />
          d
          <NumberInput
            className={style.numberInput}
            min={2}
            max={100}
            onChange={this.handleNumSidesUpdate}
            defaultValue={numSides}
          />
          {modifier < 0 ? '-' : '+'}
          <NumberInput
            className={style.numberInput}
            min={-100}
            max={100}
            onChange={this.handleModifierUpdate}
            hideSign
            defaultValue={modifier}
          />
        </div>
        <p>
          Min: {minResult}<br />
          Max: {maxResult}<br />
          Avg: {(minResult + maxResult) / 2}
        </p>
        <div className={style.buttonsRow}>
          <button>Cancel</button>
          <button>Roll</button>
        </div>
      </div>
    );
  }
}

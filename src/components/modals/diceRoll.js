import React, { PropTypes } from 'react';
import droll from 'droll';
import { ServerValue } from 'firebase/database';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeModal } from '../../actions/actionCreators';
import style from './diceRoll.styl';
import NumberInput from '../ui/numberInput';

export class DiceRollModal extends React.Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  }

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

  handleRoll = (e) => {
    const { firebase, params } = this.props;
    if (e) e.preventDefault();
    const notation = this.state.notation;
    if (droll.validate(notation)) {
      firebase.push(`chats/${params.id}`, {
        type: 'roll',
        notation,
        timestamp: ServerValue.TIMESTAMP,
      });
      this.props.onSend();
      this.props.closeModal();
    }
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
          <button
            onClick={this.props.closeModal}
          >Cancel</button>
          <button
            onClick={this.handleRoll}
          >Roll</button>
        </div>
      </div>
    );
  }
}

export default firebaseConnect([])(
  connect(
    null,
    dispatch => bindActionCreators({ closeModal }, dispatch),
  )(DiceRollModal),
);

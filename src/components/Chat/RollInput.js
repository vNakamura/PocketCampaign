// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import droll from 'droll';
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';

import { notationLimits } from '../../helpers/dice';
import NumberInput from '../Inputs/NumberInput';
import IconButton from '../Buttons/IconButton';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: ${props => props.theme.spacing.margin};
`;

const Notation = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: baseline;
  font-size: 1.4em;
`;

const Label = styled.div`
  cursor: default;
`;
const ToggleableLabel = styled(Label)`
  cursor: pointer;
`;

type State = {
  currentNotation: string,
  numDice: number,
  numSides: number,
  modifier: number,
};
type Props = {
  defaultNotation: string,
  onSend: (notation: string) => *,
};
export default class RollInput extends Component {
  static defaultProps = {
    defaultNotation: '1d6',
  }
  constructor(props: Props) {
    super(props);
    const parsed = droll.parse(this.props.defaultNotation);
    if (parsed) {
      this.state = {
        currentNotation: this.props.defaultNotation,
        numDice: parsed.numDice,
        numSides: parsed.numSides,
        modifier: parsed.modifier,
      };
    }
  }
  state: State;
  props: Props;
  updateNotation = () => {
    this.setState((prevState: State) => {
      let modifier:string = prevState.modifier === 0 ? '' : `${prevState.modifier}`;
      if (prevState.modifier > 0) modifier = `+${modifier}`;
      return {
        currentNotation: `${prevState.numDice}d${prevState.numSides}${modifier}`,
      };
    });
  }
  handleNumDiceChange = (newValue: number): void => {
    this.setState({ numDice: newValue }, this.updateNotation);
  }
  handleNumSidesChange = (newValue: number): void => {
    this.setState({ numSides: newValue }, this.updateNotation);
  }
  handleModifierChange = (newValue: number): void => {
    this.setState({ modifier: newValue }, this.updateNotation);
  }
  handleModifierSignClick = (): void => {
    this.setState((prevState: State) => ({ modifier: -prevState.modifier }), this.updateNotation);
  }
  handleSend = () => {
    if (this.props.onSend) this.props.onSend(this.state.currentNotation);
  }
  render() {
    return (
      <Container>
        <Notation>
          <NumberInput
            defaultValue={this.state.numDice}
            min={notationLimits.minNumDice}
            max={notationLimits.maxNumDice}
            onChange={this.handleNumDiceChange}
          />
          <Label>d</Label>
          <NumberInput
            defaultValue={this.state.numSides}
            min={notationLimits.minNumSides}
            max={notationLimits.maxNumSides}
            onChange={this.handleNumSidesChange}
          />
          <ToggleableLabel onClick={this.handleModifierSignClick}>
            {this.state.modifier >= 0 ? '+' : '−'}
          </ToggleableLabel>
          <NumberInput
            defaultValue={this.state.modifier}
            min={notationLimits.minModifier}
            max={notationLimits.maxModifier}
            onChange={this.handleModifierChange}
            hideSign
          />
        </Notation>
        <IconButton onClick={this.handleSend} text="Send" icon={<FaArrowCircleUp />} />
      </Container>
    );
  }
}

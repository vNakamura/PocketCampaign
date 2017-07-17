// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

import Input from './Input';
import Button from '../Buttons/Button';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  padding: .2em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledInput = styled(Input)`
  font-size: 1em;
  margin: 0;
  padding: .1em .4em;
`;

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.inputs.backgroundColor};
  color: ${props => props.theme.inputs.textColor};
  margin: 0;
  padding: .1em .4em;

  &:hover {
    background-color: ${props => props.theme.palette.primary1}
  }
`;

type Props = {
  defaultValue: number,
  step: number,
  min: number,
  max: number,
  onChange: ?(value: number) => void,
  hideSign: boolean,
};

export default class NumberInput extends Component {
  static defaultProps = {
    defaultValue: 0,
    step: 1,
    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
    max: Number.MAX_SAFE_INTEGER || 9007199254740991,
    hideSign: false,
  };

  static filterInt(value: string | number): number {
    const adjustedValue = String(value);
    if (/^(-|\+)?([0-9]+)$/.test(adjustedValue)) return Number(adjustedValue);
    return 0;
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      defaultValue: props.defaultValue,
      value: props.defaultValue,
    };
  }
  state: {
    defaultValue: number,
    value: number,
  };

  componentWillReceiveProps = (nextProps: Props) => {
    if (nextProps.defaultValue !== this.state.defaultValue) {
      this.setState({
        defaultValue: nextProps.defaultValue,
        value: nextProps.defaultValue,
      });
    }
  }

  props: Props;

  applyValue = (value: string | number, modifier: number = 0): void => {
    const { max, min, onChange } = this.props;
    let adjustedValue = NumberInput.filterInt(value) + modifier;
    adjustedValue = Math.min(max, adjustedValue);
    adjustedValue = Math.max(min, adjustedValue);
    this.setState({ value: adjustedValue });
    if (onChange) onChange(adjustedValue);
  };

  handleChange = (e: Event): void => {
    const target: EventTarget = e.currentTarget;
    if (target instanceof HTMLInputElement) this.applyValue(target.value);
  };

  handleKeyDown = (e: KeyboardEvent): void => {
    const { step } = this.props;
    if (e.keyCode === 38) {
      // Up
      e.preventDefault();
      this.applyValue(this.state.value, e.ctrlKey || e.metaKey || e.shiftKey ? 10 * step : step);
    } else if (e.keyCode === 40) {
      // Down
      e.preventDefault();
      this.applyValue(this.state.value, e.ctrlKey || e.metaKey || e.shiftKey ? -10 * step : -step);
    }
  };

  increase = (): void => {
    this.applyValue(this.state.value, this.props.step);
  };

  decrease = (): void => {
    this.applyValue(this.state.value, -this.props.step);
  };

  render() {
    const { hideSign } = this.props;
    const value = hideSign ? Math.abs(this.state.value) : this.state.value;
    return (
      <Container>
        <StyledInput
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          size={value.toString().length}
          type="tel"
          centered
        />
        <ButtonsContainer>
          <StyledButton onClick={this.increase} tabIndex="-1">
            <FaAngleUp />
          </StyledButton>
          <StyledButton onClick={this.decrease} tabIndex="-1">
            <FaAngleDown />
          </StyledButton>
        </ButtonsContainer>
      </Container>
    );
  }
}

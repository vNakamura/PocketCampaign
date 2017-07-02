// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from '../Buttons/Button';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

type Props = {
  defaultValue: number,
  step: number,
  min: number,
  max: number,
  onChange?: (value: number) => void,
  hideSign: bool,
};

export default class NumberInput extends Component {
  props: Props;

  state: {
    value: number,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
  };

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
  };

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
    if(target instanceof HTMLInputElement) this.applyValue(target.value);
  };

  handleKeyDown = (e: KeyboardEvent): void => {
    const { step } = this.props;
    if (e.keyCode === 38) { // Up
      e.preventDefault();
      this.applyValue(
        this.state.value,
        e.ctrlKey || e.metaKey || e.shiftKey ? 10 * step : step,
      );
    } else if (e.keyCode === 40) { // Down
      e.preventDefault();
      this.applyValue(
        this.state.value,
        e.ctrlKey || e.metaKey || e.shiftKey ? -10 * step : -step,
      );
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
        <Button
          onClick={this.increase}
          tabIndex="-1"
        >+</Button>
        <Input
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          size={value.toString().length}
        />
        <Button
          onClick={this.decrease}
          tabIndex="-1"
        >-</Button>
      </Container>
    );
  }
};

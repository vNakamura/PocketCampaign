import React, { PropTypes } from 'react';

import style from './numberInput.styl';

export default class NumberInput extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    defaultValue: 0,
    step: 1,
    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
    max: Number.MAX_SAFE_INTEGER || 9007199254740991,
    onChange: null,
  }

  static filterInt(value) {
    const adjustedValue = value;
    if (/^(-|\+)?([0-9]+)$/.test(adjustedValue)) return Number(adjustedValue);
    return 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
    this.applyValue = this.applyValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  applyValue(value, modifier = 0) {
    const { max, min, onChange } = this.props;
    let adjustedValue = NumberInput.filterInt(value) + modifier;
    adjustedValue = Math.min(max, adjustedValue);
    adjustedValue = Math.max(min, adjustedValue);
    this.setState({ value: adjustedValue });
    if (onChange) onChange(adjustedValue);
  }

  handleChange(e) {
    this.applyValue(e.currentTarget.value);
  }

  handleKeyDown(e) {
    const { step } = this.props;
    if (e.keyCode === 38) { // Up
      e.preventDefault();
      this.increase(
        this.state.value,
        e.ctrlKey || e.metaKey || e.shiftKey ? 10 * step : step,
      );
    } else if (e.keyCode === 40) { // Down
      e.preventDefault();
      this.decrease(
        this.state.value,
        e.ctrlKey || e.metaKey || e.shiftKey ? -10 * step : -step,
      );
    }
  }

  increase() {
    this.applyValue(this.state.value, this.props.step);
  }

  decrease() {
    this.applyValue(this.state.value, -this.props.step);
  }

  render() {
    const { value } = this.state;
    return (
      <div className={style.container}>
        <button
          className={style.increase}
          onClick={this.increase}
        >+</button>
        <input
          type="text"
          className={style.field}
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          size={value.toString().length}
        />
        <button
          className={style.decrease}
          onClick={this.decrease}
        >-</button>
      </div>
    );
  }
}

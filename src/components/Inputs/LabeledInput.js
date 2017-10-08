// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import camelCase from 'lodash/camelCase';

import Input from './Input';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
  margin: ${props => props.theme.spacing.margin};
`;

type Props = {
  inputProps: *,
  label: string,
  flex: number,
  onChange: (string, string) => void,
};
class LabeledInput extends Component {
  static defaultProps = {
    flex: 1,
  };
  props: Props;

  handleChange = (e: Event) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      this.props.onChange(camelCase(this.props.label), target.value);
    }
  }

  render() {
    const { inputProps, label, flex } = this.props;
    return (
      <Box flex={flex}>
        {label}
        <Input {...inputProps} onChange={this.handleChange} />
      </Box>
    );
  }
}
export default LabeledInput;

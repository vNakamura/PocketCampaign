// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { rollDice } from '../../actions/chat';

const StyledAnchor = styled.a`
  color: ${props => props.theme.palette.text};
`;

class NotationLink extends Component {
  props: {
    notation: string,
    dispatch: Function
  }
  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    this.props.dispatch(rollDice('asd', this.props.notation));
  };
  render() {
    return (
      <StyledAnchor href="#roll" onClick={this.handleClick}>{this.props.notation}</StyledAnchor>
    );
  }
}

export default connect()(NotationLink);

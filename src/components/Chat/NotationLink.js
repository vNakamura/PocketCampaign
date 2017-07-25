// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { rollDice } from '../../actions/chat';
import type { State, UserState } from '../../types/State';

const StyledAnchor = styled.a`
  color: ${props => props.theme.palette.text};
`;

class NotationLink extends Component {
  props: {
    notation: string,
    dispatch: Function,
    currentUser: UserState,
  }
  handleClick = (e: MouseEvent) => {
    e.preventDefault();
    this.props.dispatch(rollDice('tutorial', this.props.notation, this.props.currentUser.key));
  };
  render() {
    return (
      <StyledAnchor href="#roll" onClick={this.handleClick}>{this.props.notation}</StyledAnchor>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { currentUser } = state;

  return {
    currentUser,
  };
};
export default connect(mapStateToProps)(NotationLink);

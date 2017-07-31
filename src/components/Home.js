// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setContentTitle } from '../actions/ui';
import Logo from '../logo-mono';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    g {fill: ${props => props.theme.palette.accent2};}
    width: 100%;
    max-width: 300px;

  }
`;

class Home extends Component {
  componentWillMount = () => {
    this.props.dispatch(setContentTitle(''));
  }
  props: {
    dispatch: Function,
  }
  render() {
    return (
      <Container>
        <Logo />
      </Container>
    );
  }
}

export default connect()(Home);

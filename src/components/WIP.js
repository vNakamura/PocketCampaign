// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setContentTitle } from '../actions/ui';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

class WIP extends Component {
  componentWillMount = () => {
    this.props.dispatch(setContentTitle('W.I.P.'));
  }
  props: {
    dispatch: Function,
  }
  render() {
    return (
      <Container>
        Not Available for this demo.
      </Container>
    );
  }
}

export default connect()(WIP);

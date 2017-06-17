// @flow

import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export default class Scrollable extends Component {
  container: *;
  props: {
    children?: React.Element<*>,
    startFromBottom: boolean
  };
  static defaultProps = {
    startFromBottom: false
  }

  componentDidMount = () => {
    if(this.props.startFromBottom) this.goToBottom();
  }

  goToBottom = () => {
    window.requestAnimationFrame(() => {
      const node = findDOMNode(this.container);
      if (node instanceof HTMLElement) {
        node.scrollTop = node.scrollHeight;
      }
    });
  }

  render() {
    return (
      <Container ref={(container: *) => {this.container = container;}}>
        {this.props.children}
      </Container>
    );
  }
}

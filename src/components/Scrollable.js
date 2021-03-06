// @flow

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: ${props => (props.isFlex ? 'flex' : 'block')};
  flex-direction: column;
`;

export default class Scrollable extends Component {
  static defaultProps = {
    startFromBottom: false,
    autoScroll: false,
    children: undefined,
  };

  componentDidMount = () => {
    if (this.props.startFromBottom) this.goToBottom();
  };

  componentDidUpdate = () => {
    if (this.props.autoScroll) this.goToBottom();
  };

  props: {
    children?: React.Element<*>,
    startFromBottom?: boolean,
    autoScroll?: boolean,
  };
  container: *;

  goToBottom = () => {
    if (window && window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        const node = findDOMNode(this.container);
        if (node instanceof HTMLElement) {
          const intervalId = setInterval(() => {
            node.scrollTop += Math.ceil((
              node.scrollHeight - (node.scrollTop + node.offsetHeight)
            ) / 2);
            if ((node.scrollTop + node.offsetHeight) >= node.scrollHeight) {
              clearInterval(intervalId);
            }
          }, 20);
        }
      });
    }
  };

  render() {
    return (
      <Container
        ref={(container: *) => {
          this.container = container;
        }}
        isFlex={this.props.startFromBottom}
      >
        {this.props.children}
      </Container>
    );
  }
}

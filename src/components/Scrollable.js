// @flow

import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: ${props => props.isFlex? 'flex': 'block'};
  flex-direction: column;
`;

export default class Scrollable extends Component {
  container: *;
  props: {
    children?: React.Element<*>,
    startFromBottom?: boolean,
    autoScroll?: boolean,
  };
  static defaultProps = {
    startFromBottom: false,
    autoScroll: false,
  }

  componentDidMount = () => {
    if(this.props.startFromBottom) this.goToBottom();
  }

  componentDidUpdate = () => {
    if(this.props.autoScroll) this.goToBottom();
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
      <Container
        ref={(container: *) => {this.container = container;}}
        isFlex={this.props.startFromBottom}
      >
        {this.props.children}
      </Container>
    );
  }
}

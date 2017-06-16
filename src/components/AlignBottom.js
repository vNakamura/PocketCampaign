// @flow

import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
`;

class AlignBottom extends Component {
  container: *;
  props: {
    children?: React.Element<*>
  };
  componentDidMount = () => {
    window.requestAnimationFrame(() => {
      const node = findDOMNode(this.container);
      if (node instanceof HTMLElement) {
        console.log(node);
        node.parentNode.scrollTop = node.parentNode.scrollHeight;
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

export default AlignBottom;

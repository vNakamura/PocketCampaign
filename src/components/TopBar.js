// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import type { ReactChildren } from 'react-flow-types';
import type { Theme } from '../theme';

type Props = {
  theme: Theme,
  marginTop: number,
};
const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: ${(props: Props) => props.theme.topbar.height};
  margin-top: ${(props: Props) => props.marginTop}px;
`;
const Title = styled.h2`
  text-align: center;
  line-height: 2;
  margin: 0;
  color: ${(props: Props) =>
    (props.inverted ? props.theme.topbar.invertedTextColor : props.theme.topbar.textColor)};
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;
const Spacer = styled.div`
  flex: 1 0 0;
  align-items: center;
  text-align: ${props => (props.right ? 'right' : 'left')};
`;

class TopBar extends Component {

  static defaultProps = {
    text: '',
    inverted: false,
  };
  state = {
    marginTop: 0,
  };

  componentWillMount = () => {
    if ('standalone' in window.navigator && window.navigator.standalone) {
      this.setState({
        marginTop: 20,
      });
    }
  };
  props: {
    text: string,
    /* eslint-disable react/require-default-props */
    leftContent?: ReactChildren,
    rightContent?: ReactChildren,
    /* eslint-enable react/require-default-props */
    inverted: boolean,
  };

  render() {
    const {
      text,
      leftContent,
      rightContent,
      inverted,
    } = this.props;
    return (
      <Container marginTop={this.state.marginTop}>
        <Spacer>{leftContent}</Spacer>
        <Title inverted={inverted}>
          {text}
        </Title>
        <Spacer right>{rightContent}</Spacer>
      </Container>
    );
  }
}

export default TopBar;

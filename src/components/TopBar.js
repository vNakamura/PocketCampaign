// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

import type {Theme} from '../theme';
import Button from './Buttons/Button'

type Props = {
  theme: Theme,
  iOSSafariHack: ?boolean,
};
const Container = styled.div `
  display: flex;
  align-items: center;
  min-height: ${(props: Props) => props.theme.topbar.height};
`;
const Title = styled.h2 `
  text-align: center;
  line-height: 2;
  flex: 1;
  margin: 0;
  color: ${(props: Props) => props.inverted ? props.theme.topbar.invertedTextColor : props.theme.topbar.textColor};
`;

class TopBar extends Component {
  props: {
    text: string,
    leftButtonContent: ?React$Element<*>,
    rightButtonContent: ?React$Element<*>,
    leftButtonAction: ?Function,
    rightButtonAction: ?Function,
    inverted: boolean,
    iOSSafariHack: boolean,
  }

  static defaultProps = {
    text: '',
    leftButtonContent: null,
    rightButtonContent: null,
    leftButtonAction: null,
    rightButtonAction: null,
    inverted: false,
    iOSSafariHack: false,
  }

  render() {
    const {text, leftButtonAction, leftButtonContent, rightButtonAction, rightButtonContent, inverted} = this.props;
    return (
      <Container iOSSafariHack={this.props.iOSSafariHack}>
        {leftButtonAction && <Button onClick={leftButtonAction} >{leftButtonContent}</Button>}
        <Title inverted={inverted}>{text}</Title>
        {rightButtonAction && <Button onClick={rightButtonAction} >{rightButtonContent}</Button>}

      </Container>
    );
  }
}

export default TopBar;

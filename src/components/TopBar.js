// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

import type {Theme} from '../theme';
import Button from './Buttons/Button'

type Props = {
  theme: Theme,
  marginTop: number,
};
const Container = styled.div `
  display: flex;
  align-items: center;
  min-height: ${(props: Props) => props.theme.topbar.height};
  margin-top: ${(props: Props) => props.marginTop}px;
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
  }

  static defaultProps = {
    text: '',
    leftButtonContent: null,
    rightButtonContent: null,
    leftButtonAction: null,
    rightButtonAction: null,
    inverted: false,
  }
  state = {
    marginTop: 0,
  }

  componentWillMount = () => {
    if("standalone" in window.navigator && window.navigator.standalone)
      this.setState({
        marginTop: 20,
      });
  };

  render() {
    const {text, leftButtonAction, leftButtonContent, rightButtonAction, rightButtonContent, inverted} = this.props;
    return (
      <Container marginTop={this.state.marginTop}>
        {leftButtonAction && <Button onClick={leftButtonAction} >{leftButtonContent}</Button>}
        <Title inverted={inverted}>{text}</Title>
        {rightButtonAction && <Button onClick={rightButtonAction} >{rightButtonContent}</Button>}

      </Container>
    );
  }
}

export default TopBar;

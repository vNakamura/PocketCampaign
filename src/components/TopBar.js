import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Buttons/Button'

const getTopPadding = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    if (("standalone" in window.navigator) && !window.navigator.standalone) return 70; // Safari
    return 26 // Saved to Home Screen
  }
  return 0;
}

const Container = styled.div `
  display: flex;
  align-items: center;
  min-height: ${props => props.theme.topbar.height};
  padding-top: ${getTopPadding()}px;
`;
const Title = styled.h2 `
  text-align: center;
  flex: 1;
  margin: 0;
  color: ${props => props.inverted ? props.theme.topbar.invertedTextColor : props.theme.topbar.textColor};
`;

class TopBar extends Component {
  static propTypes = {
    text: PropTypes.string,
    leftButtonContent: PropTypes.element,
    rightButtonContent: PropTypes.element,
    leftButtonAction: PropTypes.func,
    rightButtonAction: PropTypes.func,
    inverted: PropTypes.bool,
  }

  static defaultProps = {
    text: '',
    leftButtonContent: null,
    rightButtonContent: null,
    leftButtonAction: null,
    rightButtonAction: null,
    inverted: false,
  }

  render() {
    const {text, leftButtonAction, leftButtonContent, rightButtonAction, rightButtonContent, inverted} = this.props;
    return (
      <Container>
        {leftButtonAction && <Button onClick={leftButtonAction} >{leftButtonContent}</Button>}
        <Title inverted={inverted}>{text}</Title>
        {rightButtonAction && <Button onClick={rightButtonAction} >{rightButtonContent}</Button>}

      </Container>
    );
  }
}

export default TopBar;

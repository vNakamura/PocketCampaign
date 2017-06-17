import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'Button'

const Container = styled.div `
  display: flex;
  align-items: center;
  height: ${props => props.theme.topbar.height};
`;
const Title = styled.h2 `
  text-align: center;
  flex: 1;
  color: ${props => props.inverted ? props.theme.topbar.invertedTextColor : props.theme.topbar.textColor};
`;

class TopBar extends Component {
  static propTypes = {
    text: PropTypes.string,
    leftButtonContent: PropTypes.element,
    rightButtonContent: PropTypes.element,
    leftButtonAction: PropTypes.func,
    rightButtonAction: PropTypes.func,
    inverted: PropTypes.boolean,
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

// @flow

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.active? props.theme.button.activeColor : props.theme.button.color};
  font-family: ${props => props.theme.fonts.display};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
  &:hover, &:focus {
    color: ${props => props.theme.button.focusColor};
  }
`;
const handleMouseUp = (e: MouseEvent) => {
  const target: EventTarget = e.currentTarget;
  if (target instanceof HTMLInputElement) target.blur();
}

const Button = (props: *) => <StyledButton {...props} onMouseUp={handleMouseUp} />;

export default Button;

import React from 'react';
import styled from 'styled-components';
import type {Theme} from '../../theme';

const StyledButton = styled.button `
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.active? props.theme.palette.primary1 : props.theme.palette.accent1};
  font-family: ${props => props.theme.fonts.display};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
  &:hover, &:focus {
    color: ${props => props.theme.palette.text};
  }
`;
const handleMouseUp = (e) => {
  const target: EventTarget = e.currentTarget;
  if (target instanceof HTMLInputElement) target.blur();
}

const Button = props => <StyledButton {...props} onMouseUp={handleMouseUp} />;

export default Button;

// @flow

import React from 'react';
import styled from 'styled-components';

import type { Theme } from '../../theme';

type Props = {
  active?: boolean,
};
type StyledProps = Props & { theme: Theme };

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props: StyledProps) => (
      props.active ? props.theme.button.activeColor : props.theme.button.color
    )};
  font-family: ${(props: StyledProps) => props.theme.fonts.display};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    color: ${(props: StyledProps) => props.theme.button.focusColor};
  }
`;
const handleMouseUp = (e: MouseEvent): void => {
  const target: EventTarget = e.currentTarget;
  if (target instanceof HTMLButtonElement) target.blur();
};

const Button = (props: Props) => <StyledButton {...props} onMouseUp={handleMouseUp} />;

Button.defaultProps = {
  active: false,
};

export default Button;

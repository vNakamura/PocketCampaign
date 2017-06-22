// @flow

import React from 'react';
import styled from 'styled-components';
import FaQuestion from 'react-icons/lib/fa/question';

import type {Theme} from '../../theme';
import Button from './Button';

const Container = styled(Button) `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
    font-size: .8rem;
  }
  svg {
    font-size: 1.6rem;
    margin: 4px;
  }
  transition: color .5s, border-color .5s;
`;

type Props = {
  text: string,
  active?: boolean,
  theme?: Theme,
  icon?: *,
  onClick?: () => void,
}

export const IconButton = (props: Props) => (
  <Container
    active={props.active}
    onClick={props.onClick}
  >
    {props.icon}
    <span>{props.text}</span>
  </Container>
);
IconButton.defaultProps = {
  icon: <FaQuestion/>,
};

export default IconButton;

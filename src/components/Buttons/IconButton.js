// @flow

import React from 'react';
import styled from 'styled-components';
import FaQuestion from 'react-icons/lib/fa/question';

import type { ReactChildren } from 'react-flow-types';

import Button from './Button';

const StyledButton = styled(Button)`
  flex: ${props => props.flex};
  transition: color .5s, border-color .5s;
`;
const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.textAtSide ? 'row' : 'column')};
  align-items: center;
  span {
    display: block;
    font-size: .8rem;
  }
  svg {
    font-size: ${props => (props.textAtSide ? '1rem' : '1.6rem')};
    margin: 4px;
  }
`;

type Props = {
  text?: string,
  active?: boolean,
  icon?: ReactChildren,
  flex?: number,
  onClick?: () => void,
  textAtSide?: boolean,
};

const IconButton = (props: Props) =>
  (<StyledButton flex={props.flex}><Container
    active={props.active}
    onClick={props.onClick}
    textAtSide={props.textAtSide}
  >
    {props.icon}
    {props.text ? <span>{props.text}</span> : null}
  </Container></StyledButton>);
IconButton.defaultProps = {
  icon: <FaQuestion />,
  flex: 0,
  active: false,
  onClick: undefined,
  text: undefined,
  textAtSide: false,
};

export default IconButton;

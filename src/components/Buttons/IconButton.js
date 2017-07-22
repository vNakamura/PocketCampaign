// @flow

import React from 'react';
import styled from 'styled-components';
import FaQuestion from 'react-icons/lib/fa/question';

import type { ReactChildren } from 'react-flow-types';

import Button from './Button';

const Container = styled(Button)`
  flex: ${props => props.flex};
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
  transition: color .5s, border-color .5s;
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
  (<Container
    active={props.active}
    onClick={props.onClick}
    flex={props.flex}
    textAtSide={props.textAtSide}
  >
    {props.icon}
    {props.text ? <span>{props.text}</span> : null}
  </Container>);
IconButton.defaultProps = {
  icon: <FaQuestion />,
  flex: 0,
  active: false,
  onClick: undefined,
  text: undefined,
  textAtSide: false,
};

export default IconButton;

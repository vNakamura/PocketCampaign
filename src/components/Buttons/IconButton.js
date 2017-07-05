// @flow

import React from 'react';
import styled from 'styled-components';
import FaQuestion from 'react-icons/lib/fa/question';

import Button from './Button';

const Container = styled(Button)`
  flex: ${props => props.flex};
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
  icon?: *,
  flex?: number,
  onClick?: () => void,
};

const IconButton = (props: Props) =>
  (<Container active={props.active} onClick={props.onClick} flex={props.flex}>
    {props.icon}
    <span>
      {props.text}
    </span>
  </Container>);
IconButton.defaultProps = {
  icon: <FaQuestion />,
  flex: 0,
};

IconButton.defaultProps = {
  active: false,
  onClick: undefined,
};

export default IconButton;

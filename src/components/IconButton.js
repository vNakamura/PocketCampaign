import React from 'react';
import styled from 'styled-components';
import FaQuestion from 'react-icons/lib/fa/question';

import Button from 'Button';

const Container = styled(Button) `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
  }
  svg {
    font-size: 1.6rem;
    margin: 4px;
  }
  transition: color .5s, border-color .5s;
  border-bottom: solid 2px ${props => props.active ? props.theme.sidebar.itemHighlight : 'transparent'};
`;
export const IconButton = props => <Container active={props.active}>
  {props.icon? props.icon : <FaQuestion/>}
  <span>{props.text}</span>
</Container>

export default IconButton;

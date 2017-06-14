import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MenuItem = props => {
  return (<StyledLink to={props.to}>
    {props.icon}
    {props.text}
  </StyledLink>);
};

const StyledLink = styled(Link) `
  color: ${props => props.theme.sidebar.textColor};
  display: block;
  padding: .8rem;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.sidebar.itemHighlight}
  }
`;

export default MenuItem;

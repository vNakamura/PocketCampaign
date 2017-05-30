import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MenuItem = props => {
  return (<Link to={props.to}>
    <Text>{props.text}</Text>
  </Link>);
};

const Text = styled.span `
  color: ${props => props.theme.sidebar.textColor};
  display: block;
`;

export default MenuItem;

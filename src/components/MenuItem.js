// @flow

import React from 'react';
import typeof {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import type {theme} from '../theme';

const MenuItem = (props: {to: string, text: string, icon?: Component}) => {
  return (<StyledLink to={props.to}>
    {props.icon? React.createElement(props.icon): null}
    {props.text}
  </StyledLink>);
};

const StyledLink = styled(Link) `
  color: ${(props: {theme: theme}) => props.theme.sidebar.textColor};
  display: block;
  padding: .8rem;
  text-decoration: none;

  &:hover {
    background-color: ${(props: {theme: {sidebar: {itemHighlight: string}}}) => props.theme.sidebar.itemHighlight}
  }
`;

export default MenuItem;

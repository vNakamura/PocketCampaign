// @flow

import React from 'react';
import typeof {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BlankIcon from 'react-icon-base';

import type {Theme} from '../theme';

const MenuItem = (props: {to: string, text: string, icon?: Component}) => {
  return (<StyledLink to={props.to}>
    {React.createElement(props.icon? props.icon: BlankIcon)}
    {props.text}
  </StyledLink>);
};

const StyledLink = styled(Link) `
  color: ${(props: {theme: Theme}) => props.theme.sidebar.textColor};
  display: block;
  padding: .8rem;
  text-decoration: none;

  &:hover {
    background-color: ${(props: {theme: {sidebar: {itemHighlight: string}}}) => props.theme.sidebar.itemHighlight}
  }

  svg {
    font-size: 1.2em;
    margin-right: .5em;
  }
`;

export default MenuItem;

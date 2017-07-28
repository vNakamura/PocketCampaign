// @flow

import React from 'react';
import styled from 'styled-components';

import Logo from '../logo-mono';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    g {fill: ${props => props.theme.palette.accent2};}
    width: 100%;
    max-width: 300px;

  }
`;

const Home = () => (<Container>
  <Logo />
</Container>);

export default Home;

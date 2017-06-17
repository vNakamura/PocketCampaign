// @flow

import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import defaultTheme from '../theme';
import type {theme} from '../theme';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ChatBar from './ChatBar';
import Scrollable from './Scrollable';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <Container>
            <SideBar />
            <Content>
              <TopBar text="Chat" />
              <Scrollable></Scrollable>
              <ChatBar />
            </Content>
          </Container>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;

const Content = styled.div`
  background-color: ${(props: {theme: theme}) => props.theme.palette.canvas};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

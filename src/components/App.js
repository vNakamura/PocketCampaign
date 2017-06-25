// @flow

import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import defaultTheme from '../theme';
import type {Theme} from '../theme';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ChatBar from './Chat/ChatBar';
import Scrollable from './Scrollable';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: ${props => props.theme.palette.text}
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <Container>
            <SideBar breakpoint={defaultTheme.sidebar.breakpoint} />
            <Content>
              <TopBar text="Chat" />
              <Scrollable>{window.navigator.userAgent}</Scrollable>
              <ChatBar />
            </Content>
          </Container>
        </ThemeProvider>
      </Router>
    );
  };
}

export default App;

const Content = styled.div`
  background-color: ${(props: {theme: Theme}) => props.theme.palette.canvas};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

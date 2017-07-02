// @flow

import React, {Component} from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import defaultTheme from '../theme';
import type {Theme} from '../theme';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ChatContainer from './Chat/ChatContainer';

injectGlobal `
  html {
    box-sizing: border-box;
    user-select: none;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: hidden;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family:  'Dosis', sans-serif;
    font-weight: 400;
  }
`;

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
              <ChatContainer room="asd" />
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

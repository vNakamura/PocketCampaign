// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux';

import FaChevronLeft from 'react-icons/lib/fa/chevron-left';

import { history } from '../config/store';
import { toggleSidebar } from '../actions/ui';
import theme, { type Theme } from '../theme';
import SideBar from './SideBar';
import TopBar from './TopBar';
import IconButton from './Buttons/IconButton';
import ChatContainer from './Chat/ChatContainer';

// eslint-disable-next-line
injectGlobal`
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
  color: ${props => props.theme.palette.text};
`;

class App extends Component {
  static defaultProps = {
    sidebarFixed: false,
  };
  props: {
    dispatch: Function,
    sidebarFixed?: boolean,
  }
  handleMenuClick = (): void => this.props.dispatch(toggleSidebar(true));

  render() {
    return (
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Container>
            <SideBar breakpoint={theme.sidebar.breakpoint} />
            <Content>
              <TopBar
                text="Introduction Tutorial"
                leftContent={
                  this.props.sidebarFixed ? undefined
                  : <IconButton
                    text={'Menu'}
                    icon={<FaChevronLeft />}
                    onClick={this.handleMenuClick}
                    flex={1}
                    textAtSide
                  />}
              />
              <ChatContainer room="tutorial" />
            </Content>
          </Container>
        </ThemeProvider>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { fixed: sidebarFixed } = state.ui.sidebar;

  return {
    sidebarFixed,
  };
};
export default connect(mapStateToProps)(App);

const Content = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.palette.canvas};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import startsWith from 'lodash/startsWith';

import { toggleSidebar } from '../actions/actionCreators';
import style from './App.styl';

// Components
import Sidebar from './Sidebar';
import Content from './Content';

export const App = (props) =>
  <div className={style.fullHeight}>
    {props.sidebarVisible ?
      <Sidebar closeButtonAction={props.toggleSidebar} /> : null
    }
    <Content
      menuButtonAction={props.sidebarVisible ?
        null : props.toggleSidebar
      }
      chatInputVisible={props.chatInputVisible}
    >
      {props.children}
    </Content>
  </div>;

App.propTypes = {
  children: PropTypes.node,
  sidebarVisible: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  chatInputVisible: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    sidebarVisible: state.sidebarVisible,
    chatInputVisible: startsWith(state.routing.locationBeforeTransitions.pathname, '/chat/'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

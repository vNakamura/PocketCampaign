import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    >
      {props.children}
    </Content>
  </div>;

App.propTypes = {
  children: PropTypes.node,
  sidebarVisible: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    sidebarVisible: state.sidebarVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

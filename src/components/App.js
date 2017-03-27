import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pathToJS, firebaseConnect } from 'react-redux-firebase';

import { toggleSidebar } from '../actions/actionCreators';
import style from './App.styl';
import sidebarStyle from './Sidebar.styl';

// Components
import Sidebar from './Sidebar';
import Content from './Content';
import LoginForm from './LoginForm';

function renderLoginForm() {
  return (
    <div className={style.fullHeight}>
      <LoginForm />
    </div>
  );
}

export class App extends Component {
  static propTypes = {
    sidebarVisible: PropTypes.bool,
    toggleSidebar: PropTypes.func,
    modal: PropTypes.object,
    auth: PropTypes.object,
  }
  static defaultProps = {
    sidebarVisible: false,
    toggleSidebar: null,
    modal: null,
    auth: null,
  }

  componentWillMount = () => {
    const mql = window.matchMedia('(min-width: 800px)');
    mql.addListener(this.mediaQueryChanged);
    this.setState({
      mql,
      sidebarDocked: mql.matches,
    });
  }

  componentWillUnmount = () => {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({
      sidebarDocked: this.state.mql.matches,
    });
  }

  renderSidebar = () => {
    if (this.state.sidebarDocked || this.props.sidebarVisible) {
      const cba = this.state.sidebarDocked ? null : this.props.toggleSidebar;
      return (
        <Sidebar
          key="sb"
          closeButtonAction={cba}
        />
      );
    }
    return null;
  }

  renderApp() {
    return (
      <Router>
        <div className={style.fullHeight}>
          <ReactCSSTransitionGroup
            transitionName={sidebarStyle}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={200}
          >
            {this.renderSidebar()}
          </ReactCSSTransitionGroup>
          <Content
            menuButtonAction={this.props.sidebarVisible || this.state.sidebarDocked ?
              null : this.props.toggleSidebar
            }
            modal={this.props.modal}
          />
        </div>
      </Router>
    );
  }

  render() {
    if (this.props.auth) {
      return this.renderApp();
    }
    return renderLoginForm();
  }
}

function mapStateToProps({ firebase, sidebarVisible, modal }) {
  return {
    sidebarVisible,
    modal,
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(firebaseConnect()(App));

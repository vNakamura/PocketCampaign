import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    children: PropTypes.node,
    sidebarVisible: PropTypes.bool,
    toggleSidebar: PropTypes.func,
    chatInputVisible: PropTypes.bool,
    modal: PropTypes.object,
    auth: PropTypes.object,
    params: PropTypes.object.isRequired,
    firebase: PropTypes.shape({
      logout: PropTypes.func.isRequired,
    }).isRequired,
  }
  static defaultProps = {
    children: null,
    sidebarVisible: false,
    toggleSidebar: null,
    chatInputVisible: false,
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
          signOutAction={this.props.firebase.logout}
        />
      );
    }
    return null;
  }

  renderApp() {
    return (
      <div className={style.fullHeight}>
        <ReactCSSTransitionGroup
          transitionName={sidebarStyle}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          {this.renderSidebar()}
        </ReactCSSTransitionGroup>
        <Content
          params={this.props.params}
          menuButtonAction={this.props.sidebarVisible || this.state.sidebarDocked ?
            null : this.props.toggleSidebar
          }
          chatInputVisible={this.props.chatInputVisible}
          modal={this.props.modal}
        >
          {this.props.children}
        </Content>
      </div>
    );
  }

  render() {
    if (this.props.auth) {
      return this.renderApp();
    }
    return renderLoginForm();
  }
}

function mapStateToProps({ firebase, sidebarVisible, routing, modal }) {
  return {
    sidebarVisible,
    chatInputVisible: /^\/chat\//i.test(routing.locationBeforeTransitions.pathname),
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

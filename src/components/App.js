import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import startsWith from 'lodash/startsWith';

import { toggleSidebar } from '../actions/actionCreators';
import style from './App.styl';
import sidebarStyle from './Sidebar.styl';

// Components
import Sidebar from './Sidebar';
import Content from './Content';

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    sidebarVisible: PropTypes.bool,
    toggleSidebar: PropTypes.func,
    chatInputVisible: PropTypes.bool,
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
      return <Sidebar key="sb" closeButtonAction={cba} />;
    }
    return null;
  }

  render() {
    return (
      <div className={style.fullHeight}>
        <ReactCSSTransitionGroup
          transitionName={sidebarStyle}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.renderSidebar()}
        </ReactCSSTransitionGroup>
        <Content
          menuButtonAction={this.props.sidebarVisible || this.state.sidebarDocked ?
            null : this.props.toggleSidebar
          }
          chatInputVisible={this.props.chatInputVisible}
        >
          {this.props.children}
        </Content>
      </div>
    );
  }
}

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

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import style from './App.styl';

// Components
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={style.fullHeight}>
        {this.props.sidebarVisible ?
          <Sidebar closeButtonAction={this.props.toggleSidebar} /> : null
        }
        <Content
          menuButtonAction={this.props.sidebarVisible ?
            null : this.props.toggleSidebar
          }
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

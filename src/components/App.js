import React, { PropTypes } from 'react';
import style from './App.styl';

// Components
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = { sidebarVisible: true }

  toggleSidebarVisibility = (e) => {
    e.preventDefault();
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  render() {
    return (
      <div className={style.fullHeight}>
        {this.state.sidebarVisible ?
          <Sidebar closeButtonAction={this.toggleSidebarVisibility} /> : null
        }
        <Content
          menuButtonAction={this.state.sidebarVisible ?
            null : this.toggleSidebarVisibility
          }
        >
          {this.props.children}
        </Content>
      </div>
    );
  }
}

export default App;

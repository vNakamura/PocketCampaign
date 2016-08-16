import React from 'react';
import style from './App.styl';

// Components
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarVisible: true };

    // Binds
    this.toggleSidebarVisibility = this.toggleSidebarVisibility.bind(this);
  }

  toggleSidebarVisibility(e) {
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
          sidebarVisible={this.state.sidebarVisible}
          menuButtonAction={this.toggleSidebarVisibility}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import style from './App.styl';
import classNames from 'classnames';

//Components
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible : true
    }
  }

  toggleSidebarVisibility(e) {
    e.preventDefault();
    this.setState({sidebarVisible: !this.state.sidebarVisible});
  }

  render() {
    return (
      <div className={style.fullHeight}>
        {this.state.sidebarVisible? <Sidebar closeButtonAction={this.toggleSidebarVisibility.bind(this)}/>: ""}
        <Content
          sidebarVisible={this.state.sidebarVisible}
          menuButtonAction={this.toggleSidebarVisibility.bind(this)}
        />
      </div>
    );
  }
}

export default App;

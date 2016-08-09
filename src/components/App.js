import React from 'react';
import style from './App.styl';
import classNames from 'classnames';

//Components
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <div className={style.fullHeight}>
        <Sidebar/>
        <Content/>
      </div>
    );
  }
}

export default App;

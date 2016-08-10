import React, { PropTypes } from 'react';
import style from './Content.styl';

// Components
import KitchenSink from './KitchenSink';
import Topbar from './Topbar';

class Content extends React.Component {
  render () {
    return(<div className={style.content}>
      <Topbar showMenuButton={true} titleText="A really long title that would make the line break on a small screen"/>
      <div className={style.scrollable}>
        <KitchenSink/>
      </div>
    </div>);
  }
}

export default Content;

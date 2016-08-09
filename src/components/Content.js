import React, { PropTypes } from 'react'
import style from './Content.styl';

import KitchenSink from './KitchenSink';

class Content extends React.Component {
  render () {
    return(<div className={style.content}>
      <KitchenSink/>
    </div>);
  }
}

export default Content;

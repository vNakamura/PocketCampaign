import React, { PropTypes } from 'react';
import style from './Content.styl';

// Components
import KitchenSink from './KitchenSink';
import Topbar from './Topbar';
import { TiThMenu } from 'react-icons/lib/ti';
import Scrollable from './Scrollable';
import ChatInput from './ChatInput';

class Content extends React.Component {
  render () {
    return(<div className={style.content}>
      <Topbar
        leftButtonContent={this.props.sidebarVisible? null : <TiThMenu/>}
        leftButtonAction={this.props.menuButtonAction}
        titleText="A really long title that would make the line break on a small screen"
      />
      <Scrollable>
        <KitchenSink/>
      </Scrollable>
      <ChatInput/>
    </div>);
  }
}

Content.propTypes = {
  sidebarVisible:   PropTypes.bool,
  menuButtonAction: PropTypes.func
}

export default Content;

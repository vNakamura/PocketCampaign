import React, { PropTypes } from 'react';
import { TiThMenu } from 'react-icons/lib/ti';
import style from './Content.styl';

// Components
import KitchenSink from './KitchenSink';
import Topbar from './Topbar';
import Scrollable from './Scrollable';
import ChatInput from './ChatInput';

class Content extends React.Component {
  static propTypes = {
    sidebarVisible: PropTypes.bool,
    menuButtonAction: PropTypes.func,
  }

  sendAction(message) {
    console.log(message);
  }

  render() {
    return (<div className={style.content}>
      <Topbar
        leftButtonContent={this.props.sidebarVisible ? null : <TiThMenu />}
        leftButtonAction={this.props.menuButtonAction}
        titleText="A really long title that would make the line break on a small screen"
      />
      <Scrollable>
        <KitchenSink />
      </Scrollable>
      <ChatInput sendAction={this.sendAction} />
    </div>);
  }
}

export default Content;

import React, { PropTypes } from 'react';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import isNil from 'lodash/isNil';
import style from './Content.styl';

// Components
import Topbar from './Topbar';
import Scrollable from './Scrollable';
import ChatInput from './ChatInput';

class Content extends React.Component {
  static propTypes = {
    menuButtonAction: PropTypes.func,
    children: PropTypes.node,
  }

  sendAction(message) {
    console.log(message);
  }

  render() {
    return (<div className={style.content}>
      <Topbar
        leftButtonContent={isNil(this.props.menuButtonAction) ? null : <TiThMenu />}
        leftButtonAction={this.props.menuButtonAction}
        titleText="A really long title that would make the line break on a small screen"
      />
      <Scrollable>
        {this.props.children}
      </Scrollable>
      <ChatInput />
    </div>);
  }
}

export default Content;

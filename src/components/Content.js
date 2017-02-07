import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import style from './Content.styl';

// Components
import Topbar from './Topbar';
import Scrollable from './Scrollable';
import ChatInput from './ChatInput';

class Content extends Component {
  static propTypes = {
    menuButtonAction: PropTypes.func,
    chatInputVisible: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    chatInputVisible: false,
  }

  handleSend = () => {
    const node = findDOMNode(this.scrollable);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    return (
      <div className={style.content}>
        <Topbar
          leftButtonContent={
            this.props.menuButtonAction == null ?
            null : <TiThMenu />
          }
          leftButtonAction={this.props.menuButtonAction}
          titleText="A really long title that would make the line break on a small screen"
        />
        <Scrollable ref={(c) => { this.scrollable = c; }}>
          {this.props.children}
        </Scrollable>
        {this.props.chatInputVisible ? <ChatInput onSend={this.handleSend} /> : ""}
      </div>
    );
  }
}

export default Content;

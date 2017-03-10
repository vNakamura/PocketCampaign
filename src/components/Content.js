import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import style from './Content.styl';

// Components
import Topbar from './Topbar';
import Scrollable from './Scrollable';
import ChatInput from './ChatInput';
import Modal from './Modal';

class Content extends Component {
  static propTypes = {
    menuButtonAction: PropTypes.func,
    chatInputVisible: PropTypes.bool,
    children: PropTypes.node,
    modalContent: PropTypes.node,
    params: PropTypes.object.isRequired,
  }

  static defaultProps = {
    menuButtonAction: null,
    chatInputVisible: false,
    children: null,
    modalContent: null,
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
        {this.props.chatInputVisible ?
          <ChatInput params={this.props.params} onSend={this.handleSend} /> :
          null}
        {this.props.modalContent ? <Modal>{this.props.modalContent}</Modal> : null}
      </div>
    );
  }
}

export default Content;

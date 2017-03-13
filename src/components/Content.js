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
    modal: PropTypes.object,
    params: PropTypes.object.isRequired,
  }

  static defaultProps = {
    menuButtonAction: null,
    chatInputVisible: false,
    children: null,
    modal: null,
  }
  handleSend() {
    const node = findDOMNode(this.scrollable);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    const {
      menuButtonAction,
      children,
      chatInputVisible,
      params,
      modal,
    } = this.props;
    return (
      <div className={style.content}>
        <Topbar
          leftButtonContent={
            menuButtonAction == null ?
            null : <TiThMenu />
          }
          leftButtonAction={menuButtonAction}
          titleText="A really long title that would make the line break on a small screen"
        />
        <Scrollable ref={(c) => { this.scrollable = c; }}>
          {children}
        </Scrollable>
        {chatInputVisible ?
          <ChatInput params={params} onSend={this.handleSend} /> :
          null}
        {
          (modal && modal.content) ?
            <Modal title={modal.title}>
              {modal.content}
            </Modal>
          : null
        }
      </div>
    );
  }
}

export default Content;

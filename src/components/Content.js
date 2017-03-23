import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Route } from 'react-router-dom';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import style from './Content.styl';

// Components
import Topbar from './Topbar';
import Scrollable from './Scrollable';
import Chat from './Chat';
import ChatInput from './ChatInput';
import Modal from './Modal';
import KitchenSink from './KitchenSink';

class Content extends Component {
  static propTypes = {
    menuButtonAction: PropTypes.func,
    modal: PropTypes.object,
  }

  static defaultProps = {
    menuButtonAction: null,
    modal: null,
  }

  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    window.requestAnimationFrame(() => {
      const node = findDOMNode(this.scrollable);
      if (node !== undefined) {
        node.scrollTop = node.scrollHeight;
      }
    });
  }

  childrenChat = ({ match }) => match && <Chat
    params={match.params}
    onUpdate={this.scrollDown}
  />;

  childrenModal = ({ match }) => {
    const { modal } = this.props;
    return modal && modal.content && match && <Modal
      title={modal.title}
    >
      {React.cloneElement(modal.content, { params: match.params })}
    </Modal>;
  }

  render() {
    const {
      menuButtonAction,
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
          <Route exact path="/" component={KitchenSink} />
          <Route path="/chat/:id" children={this.childrenChat} />
        </Scrollable>
        <Route path="/chat/:id" component={ChatInput} />
        <Route path="/chat/:id" children={this.childrenModal} />
      </div>
    );
  }
}

export default Content;

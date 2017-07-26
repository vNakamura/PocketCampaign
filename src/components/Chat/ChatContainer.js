// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ChatBar from './ChatBar';
import Scrollable from '../Scrollable';
import PushToBottom from '../PushToBottom';
import Speak from './Speak';
import { speak, clearTutorialHistory } from '../../actions/chat';
import { tutorialMaster } from '../../reducers/users';
import DiceRoll from './DiceRoll';
import type { State, UserState, UserList } from '../../types/State';
import type { Message } from '../../types/Chat';
import tutorial from '../../tutorial';

const renderMessageComponent = (
  message: Message,
  key: string,
  hideAvatar: boolean,
  byMe: boolean,
  user: UserState,
) => {
  switch (message.kind) {
    case 'speak':
      return (<Speak
        key={key}
        message={message}
        byMe={byMe}
        hideAvatar={hideAvatar}
        user={user}
      />);
    case 'roll':
      return (<DiceRoll
        key={key}
        message={message}
        byMe={byMe}
        hideAvatar={hideAvatar}
        user={user}
      />);
    default:
      return null;
  }
};

const renderMessages = (
  messages: {[key: string]: Message},
  currentUser: UserState,
  users: UserList,
) => {
  const elements = [];
  let lastUser: string;
  let lastKind: string;
  Object.keys(messages).forEach((key:string) => {
    const message: Message = messages[key];
    const author: UserState = users[message.author];
    const byMe: boolean = currentUser && message.author === currentUser.key;
    const hideAvatar = lastUser === message.author && lastKind === message.kind;
    const component = renderMessageComponent(message, key, hideAvatar, byMe, author);
    if (component) {
      elements.push(component);
      lastUser = message.author;
      lastKind = message.kind;
    }
  });
  return elements;
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LimitWidth = styled(PushToBottom)`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

type Props = {
  messages: { [key: string]: Message },
  currentUser: UserState,
  dispatch: Function,
  users: UserList,
};
class ChatContainer extends Component {
  componentWillMount = () => {
    this.props.dispatch(clearTutorialHistory);
  }
  componentDidMount = () => {
    tutorial(this.tutorialSpeak);
  }

  props: Props;

  tutorialSpeak = (text: string) => {
    this.props.dispatch(speak('tutorial', text, tutorialMaster.key));
  };

  render() {
    return (<Container>
      <Scrollable startFromBottom autoScroll>
        <LimitWidth>
          {this.props.messages
            ? renderMessages(
              this.props.messages,
              this.props.currentUser,
              this.props.users,
            ) : null}
        </LimitWidth>
      </Scrollable>
      <ChatBar />
    </Container>);
  }
}

const mapStateToProps = (state: State, ownProps: { room: string }) => ({
  messages: state.chat[ownProps.room] || {},
  currentUser: state.currentUser,
  users: state.users,
});

export default connect(mapStateToProps)(ChatContainer);

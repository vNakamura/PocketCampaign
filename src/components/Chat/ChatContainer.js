// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ChatBar from './ChatBar';
import Scrollable from '../Scrollable';
import PushToBottom from '../PushToBottom';
import Speak from './Speak';
import DiceRoll from './DiceRoll';
import type { State, UserState } from '../../types/State';
import type { Message } from '../../types/Chat';


const renderMessageComponent = (message: Message, key: string, byMe: boolean) => {
  switch (message.kind) {
    case 'speak':
      return (<Speak
        key={key}
        message={message}
        byMe={byMe}
      />);
    case 'roll':
      return (<DiceRoll
        key={key}
        message={message}
        byMe={byMe}
      />);
    default:
      return null;
  }
};

const renderMessages = (messages: {[key: string]: Message}, currentUser: UserState) => {
  const elements = [];
  Object.keys(messages).forEach((key:string) => {
    const message: Message = messages[key];
    const byMe: boolean = currentUser && message.author === currentUser.key;
    const component = renderMessageComponent(message, key, byMe);
    if (component) elements.push(component);
  });
  return elements;
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

type Props = {
  messages: { [key: string]: Message },
  currentUser: UserState,
};
const ChatContainer = (props: Props) => (
  <Container>
    <Scrollable startFromBottom autoScroll>
      <PushToBottom>
        {props.messages ? renderMessages(props.messages, props.currentUser) : null}
      </PushToBottom>
    </Scrollable>
    <ChatBar />
  </Container>
);

const mapStateToProps = (state: State, ownProps: { room: string }) => ({
  messages: state.chat[ownProps.room] || {},
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(ChatContainer);

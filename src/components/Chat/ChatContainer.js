// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ChatBar from './ChatBar';
import Scrollable from '../Scrollable';
import PushToBottom from '../PushToBottom';
import Speak from './Speak';
import DiceRoll from './DiceRoll';
import type { State } from '../../types/State';
import type { Message } from '../../types/Chat';

const renderMessageComponent = (message: Message, key: string) => {
  switch (message.kind) {
    case 'speak':
      return (<Speak
        key={key}
        message={message}
      />);
    case 'roll':
      return (<DiceRoll
        key={key}
        message={message}
      />);
    default:
      return null;
  }
};

const renderMessages = (messages: {[key: string]: Message}) => {
  const elements = [];
  Object.keys(messages).forEach((key:string) => {
    const message: Message = messages[key];
    const component = renderMessageComponent(message, key);
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
};
const ChatContainer = (props: Props) => (
  <Container>
    <Scrollable startFromBottom autoScroll>
      <PushToBottom>
        {props.messages ? renderMessages(props.messages) : null}
      </PushToBottom>
    </Scrollable>
    <ChatBar />
  </Container>
);

const mapStateToProps = (state: State, ownProps: { room: string }) => ({
  messages: state.chat[ownProps.room] || [],
});

export default connect(mapStateToProps)(ChatContainer);

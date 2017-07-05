// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ChatBar from './ChatBar';
import Scrollable from '../Scrollable';
import PushToBottom from '../PushToBottom';
import Speak from './Speak';
import type { State } from '../../types/State';
import type { Message } from '../../types/Chat';

const renderMessages = (messages: Message[]): React.Element<*>[] =>
  messages.map((message, index: number) => {
    const MessageComponent = Speak;
    return (
      <MessageComponent
        key={message.createdAt}
        content={message.content}
        byMe={index % 2 > 0}
      />
    );
  });

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

type Props = {
  messages: Message[],
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

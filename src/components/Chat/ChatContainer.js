// @flow

import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import ChatBar from './ChatBar';
import Scrollable from '../Scrollable';
import PushToBottom from '../PushToBottom';
import Speak from './Speak';
import type {State} from '../../types/State';
import type {Message} from '../../types/Chat';

const renderMessages = (messages: Message[]):React$Element<*>[] => {
  return messages.map((message, index: number) => {
    const MessageComponent = Speak;
    return (
      <MessageComponent key={index} content={message.content} />
    );
  });
};

const Container = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

class ChatContainer extends Component {
  props: {
    room: string,
    messages: Message[]
  };

  render() {
    return (
      <Container>
        <Scrollable startFromBottom autoScroll>
          <PushToBottom>
            {this.props.messages? renderMessages(this.props.messages) : null}
          </PushToBottom>
        </Scrollable>
        <ChatBar />
      </Container>
    );
  };
};

const mapStateToProps = (state: State, ownProps: {room: string}) => {
  return {
    messages: state.chat[ownProps.room] || [],
  };
};

export default connect(mapStateToProps)(ChatContainer);

// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';

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

class ChatContainer extends Component {
  props: {
    room: string,
    messages: Message[]
  };

  render() {
    return (
      <PushToBottom>
        {this.props.messages? renderMessages(this.props.messages) : null}
      </PushToBottom>
    );
  };
};

const mapStateToProps = (state: State, ownProps: {room: string}) => {
  return {
    messages: state.chat[ownProps.room] || [],
  };
};

export default connect(mapStateToProps)(ChatContainer);

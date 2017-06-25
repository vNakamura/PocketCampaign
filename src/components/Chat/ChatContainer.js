// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';

import PushToBottom from '../PushToBottom';
import type {State} from '../../types/State';
import type {Message} from '../../types/Chat';

const renderMessages = (messages: Message[]):React$Element<*>[] => {
  console.log(messages);
  return messages.map((message, index: number) => {
    return (
      <p key={index}>{message.content.text}</p>
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

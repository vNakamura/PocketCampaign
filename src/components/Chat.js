import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Message from './Message';

const author = {
  name: 'Author Name',
};

function renderMessages(messages) {
  return messages.map((message, index) =>
    <Message text={message} key={index} author={author} />
  );
}

export const Chat = (props) =>
  <div>
    {renderMessages(props.messages)}
  </div>;

Chat.propTypes = {
  messages: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps)(Chat);

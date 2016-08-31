import React from 'react';
import { bindToCollection } from 'firebase-3-react';

import Message from './Message';

const author = {
  name: 'Author Name',
};

function renderMessages(messages) {
  return Object.keys(messages).map((key, id) => {
    const message = messages[key];
    return <Message text={message.text} key={key} id={id} author={author} />;
  });
}

export const Chat = () =>
  <MessagesContainer
    firebaseRef="/messages"
    cacheLocally
  />;

const MessagesContainer = bindToCollection((props) =>
  <div>
    {renderMessages(props.data)}
  </div>
);

export default Chat;

import React, { PropTypes } from 'react';
import style from './ChatInput.styl';
import TextareaAutoresize from 'react-textarea-autosize';

class ChatInput extends React.Component {
  render () {
    return (
      <div className={style.container}>
        <TextareaAutoresize maxRows={4} className={style.textInput} placeholder="Your message"></TextareaAutoresize>
        <a className={style.sendButton} href="#">Send</a>
      </div>
    );
  }
}

export default ChatInput;

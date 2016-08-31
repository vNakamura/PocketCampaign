import React, { PropTypes } from 'react';
import TextareaAutoresize from 'react-textarea-autosize';
import trim from 'lodash/trim';
import MouseTrap from 'mousetrap';
import classNames from 'classnames';
import { database } from 'firebase-3-react';
import { ServerValue } from 'firebase/database';

import style from './ChatInput.styl';

const hotkeys = [
  'command+enter',
  'command+return',
  'ctrl+enter',
  'ctrl+return',
];

export class ChatInput extends React.Component {
  static propTypes = {
    onSend: PropTypes.func.isRequired,
  }

  state = { text: '' }

  handleTextChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  }

  handleSend = (e) => {
    if (e) e.preventDefault();
    const text = trim(this.state.text);
    if (text.length > 0) {
      database().ref('/messages').push({
        text,
        time: ServerValue.TIMESTAMP,
      });
      this.props.onSend();
      this.setState({ text: '' });
    }
  }

  handleFocus = () => {
    MouseTrap.bind(hotkeys, this.handleSend);
  }
  handleBlur() {
    MouseTrap.unbind(hotkeys);
  }

  render() {
    const textAreaClass = classNames('mousetrap', style.textInput);
    return (
      <div className={style.container}>
        <TextareaAutoresize
          maxRows={4}
          className={textAreaClass}
          placeholder="Your message"
          onChange={this.handleTextChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.text}
        />
        {
          (trim(this.state.text).length > 0) ?
            <button
              className={style.sendButton}
              onClick={this.handleSend}
            >Send</button>
          : null
        }
      </div>
    );
  }
}

export default ChatInput;

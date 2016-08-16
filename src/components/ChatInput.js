import React, { PropTypes } from 'react';
import TextareaAutoresize from 'react-textarea-autosize';
import { trim } from 'lodash';
import MouseTrap from 'mousetrap';
import classNames from 'classnames';
import style from './ChatInput.styl';

const hotkeys = [
  'command+enter',
  'command+return',
  'ctrl+enter',
  'ctrl+return',
];

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleTextChange(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleSend(e) {
    e.preventDefault();
    const message = trim(this.state.text);
    if (message.length > 0) {
      this.props.sendAction(message);
      this.setState({ text: '' });
    }
  }

  handleFocus() {
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
            <a
              className={style.sendButton}
              onClick={this.handleSend}
              href="#send"
            >Send</a>
          : null
        }
      </div>
    );
  }
}

ChatInput.propTypes = {
  sendAction: PropTypes.func.isRequired,
};

export default ChatInput;

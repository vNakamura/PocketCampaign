import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextareaAutoresize from 'react-textarea-autosize';
import trim from 'lodash/trim';
import MouseTrap from 'mousetrap';
import classNames from 'classnames';
import style from './ChatInput.styl';

import { sendMessage } from '../actions/actionCreators';

const hotkeys = [
  'command+enter',
  'command+return',
  'ctrl+enter',
  'ctrl+return',
];

export class ChatInput extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
  }

  state = { text: '' }

  handleTextChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  }

  handleSend = (e) => {
    if (e) e.preventDefault();
    const message = trim(this.state.text);
    if (message.length > 0) {
      this.props.sendMessage(message);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChatInput);

import React, { PropTypes } from 'react';
import TextareaAutoresize from 'react-textarea-autosize';
import MouseTrap from 'mousetrap';
import classNames from 'classnames';
import { ServerValue } from 'firebase/database';
import { firebaseConnect } from 'react-redux-firebase';

import style from './ChatInput.styl';
import DiceIcon from './icons/Dice';


const hotkeys = [
  'command+enter',
  'command+return',
  'ctrl+enter',
  'ctrl+return',
];

export class ChatInput extends React.Component {
  static propTypes = {
    onSend: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired,
  }

  static handleRoll = (e) => {
    if (e) e.preventDefault();
  }
  static handleBlur() {
    MouseTrap.unbind(hotkeys);
  }

  state = { text: '' }

  handleTextChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  }

  handleSend = (e) => {
    const { firebase } = this.props;
    if (e) e.preventDefault();
    const text = this.state.text.trim();
    if (text.length > 0) {
      firebase.push('/messages', {
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

  render() {
    const textAreaClass = classNames('mousetrap', style.textInput);
    return (
      <div className={style.container}>
        <div className={style.toolsButtons}>
          <button
            className={style.rollButton}
            onClick={ChatInput.handleRoll}
          ><DiceIcon /></button>
        </div>
        <TextareaAutoresize
          maxRows={4}
          className={textAreaClass}
          placeholder="Your message"
          onChange={this.handleTextChange}
          onFocus={this.handleFocus}
          onBlur={ChatInput.handleBlur}
          value={this.state.text}
        />
        {
          (this.state.text.trim().length > 0) ?
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

export default firebaseConnect([])(ChatInput);
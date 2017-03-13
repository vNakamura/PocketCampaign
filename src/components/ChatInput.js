import React, { PropTypes } from 'react';
import TextareaAutoresize from 'react-textarea-autosize';
import MouseTrap from 'mousetrap';
import classNames from 'classnames';
import { ServerValue } from 'firebase/database';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setModal } from '../actions/actionCreators';
import style from './ChatInput.styl';
import DiceIcon from './icons/Dice';
import DiceRollModal from './modals/diceRoll';

const hotkeys = [
  'command+enter',
  'command+return',
  'ctrl+enter',
  'ctrl+return',
];

export class ChatInput extends React.Component {
  static propTypes = {
    onSend: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  }

  static handleBlur() {
    MouseTrap.unbind(hotkeys);
  }

  state = { text: '' }

  handleRoll = (e) => {
    if (e) e.preventDefault();
    this.props.setModal(<DiceRollModal
      params={this.props.params}
      onSend={this.props.onSend}
    />);
  }

  handleTextChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  }

  handleSend = (e) => {
    const { firebase, params } = this.props;
    if (e) e.preventDefault();
    const text = this.state.text.trim();
    if (text.length > 0) {
      firebase.push(`chats/${params.id}`, {
        type: 'text',
        text,
        timestamp: ServerValue.TIMESTAMP,
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
            onClick={this.handleRoll}
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

export default firebaseConnect([])(
  connect(
    null,
    dispatch => bindActionCreators({ setModal }, dispatch),
  )(ChatInput),
);

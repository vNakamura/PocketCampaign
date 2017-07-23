// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FaComment from 'react-icons/lib/fa/comment';
import FaUser from 'react-icons/lib/fa/user';
import DiceIcon from '../Icons/DiceIcon';

import IconButton from '../Buttons/IconButton';
import SpeakInput from './SpeakInput';
import RollInput from './RollInput';
import { speak, rollDice } from '../../actions/chat';
import { changeChatInput, saveLastNotation } from '../../actions/ui';
import type { State } from '../../types/State';

const Container = styled.div``;
const IconsBar = styled.div`
  display: flex;
  align-items: stretch;
  border-top: ${props => props.theme.topbar.border};
`;

type InputType = 'speak' | 'roll';

class ChatBar extends Component {
  setInput = (input: InputType): void => {
    this.props.dispatch(changeChatInput(input));
  };

  props: {
    dispatch: Function,
    currentInput: InputType,
    lastNotation: string,
  };

  handleSpeakClick = (): void => this.setInput('speak');
  handleSpeakSend = (text: string): void => {
    this.props.dispatch(speak('asd', text));
  };
  handleRollClick = (): void => this.setInput('roll');
  handleRollSend = (notation: string): void => {
    this.props.dispatch(rollDice('asd', notation));
    this.props.dispatch(saveLastNotation(notation));
  };

  renderInput = (input: InputType): ?React.Element<any> => {
    switch (input) {
      case 'speak':
        return <SpeakInput onSend={this.handleSpeakSend} />;
      case 'roll':
        return (
          <RollInput
            onSend={this.handleRollSend}
            defaultNotation={this.props.lastNotation}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <Container>
        <IconsBar>
          <IconButton
            icon={<FaComment />}
            active={this.props.currentInput === 'speak'}
            text={'Talk'}
            onClick={this.handleSpeakClick}
            flex={1}
          />
          <IconButton
            icon={<DiceIcon />}
            active={this.props.currentInput === 'roll'}
            text={'Roll'}
            onClick={this.handleRollClick}
            flex={1}
          />
          <IconButton icon={<FaUser />} text={'Char'} flex={1} />
        </IconsBar>
        {this.renderInput(this.props.currentInput)}
      </Container>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { currentInput, lastNotation } = state.ui.chatbar;

  return {
    currentInput,
    lastNotation,
  };
};
export default connect(mapStateToProps)(ChatBar);

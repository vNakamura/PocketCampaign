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

const Container = styled.div``;
const IconsBar = styled.div`
  display: flex;
  align-items: stretch;
  border-top: ${props => props.theme.topbar.border};
`;

type InputType = 'speak' | 'roll';
type State = {
  currentInput: InputType,
};

class ChatBar extends Component {
  state: State = {
    currentInput: 'speak',
  };

  setInput = (input: InputType): void => {
    this.setState({ currentInput: input });
  };

  props: {
    dispatch: Function,
  };

  handleSpeakClick = (): void => this.setInput('speak');
  handleSpeakSend = (text: string): void => {
    this.props.dispatch(speak('asd', text));
  };
  handleRollClick = (): void => this.setInput('roll');
  handleRollSend = (notation: string): void => {
    this.props.dispatch(rollDice('asd', notation));
  };

  renderInput = (input: InputType): ?React.Element<any> => {
    switch (input) {
      case 'speak':
        return <SpeakInput onSend={this.handleSpeakSend} />;
      case 'roll':
        return <RollInput onSend={this.handleRollSend} />;
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
            active={this.state.currentInput === 'speak'}
            text={'Talk'}
            onClick={this.handleSpeakClick}
            flex={1}
          />
          <IconButton
            active={this.state.currentInput === 'roll'}
            icon={<DiceIcon />}
            text={'Roll'}
            onClick={this.handleRollClick}
            flex={1}
          />
          <IconButton icon={<FaUser />} text={'Char'} flex={1} />
        </IconsBar>
        {this.renderInput(this.state.currentInput)}
      </Container>
    );
  }
}

export default connect()(ChatBar);

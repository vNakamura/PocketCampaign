// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaComment from 'react-icons/lib/fa/comment';
import FaUser from 'react-icons/lib/fa/user';

import IconButton from '../Buttons/IconButton';
import SpeakInput from './SpeakInput';
import {toggle_sidebar} from '../../actions/ui';
import {send_message} from '../../actions/chat';

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

  handleMenuClick = (): void => this.props.dispatch(toggle_sidebar(true));
  handleSpeakSend = (text: string): void => {
    this.props.dispatch(send_message('asd', text));
  };

  setInput = (input: InputType): void => {
    this.setState({currentInput: input});
  };
  handleSpeakClick = (): void => this.setInput('speak');
  handleRollClick = (): void => this.setInput('roll');

  renderInput = (input: InputType): ?React.Element<any> => {
    switch (input) {
      case 'speak':
        return <SpeakInput onSend={this.handleSpeakSend} />;
      case 'roll':
        return <p>Teste</p>;
      default:
        return null;
    }
  }

  render() {
    return (
      <Container>
        <IconsBar>
          {this.props.sidebarFixed ? null : <IconButton
            icon={<FaChevronLeft/>}
            text={"Menu"}
            onClick={this.handleMenuClick}
            flex={1}
          />}
          <IconButton
            icon={<FaComment/>}
            active={this.state.currentInput === 'speak'}
            text={"Talk"}
            onClick={this.handleSpeakClick}
            flex={1}
          />
          <IconButton
            active={this.state.currentInput === 'roll'}
            text={"Roll"}
            onClick={this.handleRollClick}
            flex={1}
          />
          <IconButton icon={<FaUser/>} text={"Char"} flex={1} />
        </IconsBar>
        {this.renderInput(this.state.currentInput)}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {fixed: sidebarFixed} = state.ui.sidebar;

  return {
    sidebarFixed,
  };
};
export default connect(mapStateToProps)(ChatBar);

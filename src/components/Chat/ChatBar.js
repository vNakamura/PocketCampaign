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
`;

class ChatBar extends Component {
  handleMenuClick = () => this.props.dispatch(toggle_sidebar(true));
  handleSpeakSend = (text: string) => {
    this.props.dispatch(send_message('asd', text));
  };
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
          <IconButton icon={<FaComment/>} active text={"Talk"} flex={1} />
          <IconButton text={"Roll"} flex={1} />
          <IconButton icon={<FaUser/>} text={"Char"} flex={1} />
        </IconsBar>
        <SpeakInput onSend={this.handleSpeakSend} />
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

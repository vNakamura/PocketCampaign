// @flow

import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import debounce from 'lodash/debounce';

import FaCog from 'react-icons/lib/fa/cog';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaClose from 'react-icons/lib/fa/close'

import TopBar from './TopBar';
import Scrollable from './Scrollable';
import PushToBottom from './PushToBottom';
import Avatar from './Avatar';
import Button from './Buttons/Button';
import MenuItem from './MenuItem';
import {toggle_sidebar, fix_sidebar} from '../actions/ui';
import type {State} from '../types/State';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.sidebar.bg};
  width: ${props => props.theme.sidebar.width}px;
  color: ${props => props.theme.sidebar.textColor};
`;

class SideBar extends Component {
  updateDimensions = debounce(() => {
    const shouldBeFixed: boolean = window.innerWidth > this.props.breakpoint;
    if(this.props.fixed !== shouldBeFixed) {
      this.props.dispatch(fix_sidebar(shouldBeFixed));
    }
  }, 100);
  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleClose = () => {
    this.props.dispatch(toggle_sidebar(false));
  };
  render() {
    if(!this.props.visible && !this.props.fixed) return null;
    return (
      <Container>
        <TopBar
          text="Pocket Campaign"
        />
        <Scrollable startFromBottom={true}>
          <PushToBottom>
            <MenuItem to="sign-out" icon={FaSignOut} text="Sign Out"/>
            <MenuItem to="settings" icon={FaCog} text="Settings"/>
            <MenuItem to="asd" text="Asd"/>
            <MenuItem to="asd" text="Asd"/>
          </PushToBottom>
        </Scrollable>
        <UserBar>
          <Avatar src="https://api.adorable.io/avatars/128/asd"/>
          <Name>Nome do Usuário</Name>
          {this.props.fixed ? null : <Button onClick={this.handleClose}><FaClose /></Button>}
        </UserBar>
      </Container>
    );
  };
}
const mapStateToProps = (state: State) => {
  const {visible, fixed} = state.ui.sidebar;

  return {
    visible,
    fixed,
  };
};
export default connect(mapStateToProps)(SideBar);


const UserBar = styled.div `
  display: flex;
  align-items: center;
`;

const Name = styled.h4 `
  flex: 1;
`;

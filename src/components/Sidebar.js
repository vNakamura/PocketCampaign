import React, {Component} from 'react';
import styled from 'styled-components';

import TopBar from './TopBar';
import {Scrollable, Avatar, Button} from './Common';
import MenuItem from './MenuItem';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.sidebar.bg};
  width: ${props => props.theme.sidebar.width}px;
  color: ${props => props.theme.sidebar.textColor};
`;

class App extends Component {
  render() {
    return (
      <Container>
        <TopBar inverted={true} text="Pocket Campaign"/>
        <Scrollable>
          <MenuItem to="asd" text="Asd"/>
          <MenuItem to="asd" text="Asd"/>
          <MenuItem to="asd" text="Asd"/>
          <MenuItem to="asd" text="Asd"/>
        </Scrollable>
        <UserBar>
          <Avatar src="https://api.adorable.io/avatars/128/asd"/>
          <Name>Nome do Usuário</Name>
          <Button>X</Button>
        </UserBar>
      </Container>
    );
  }
}

export default App;


const UserBar = styled.div `
  display: flex;
  align-items: center;
`;

const Name = styled.h4 `
  flex: 1;
`;

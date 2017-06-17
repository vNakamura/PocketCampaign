import React, {Component} from 'react';
import styled from 'styled-components';

import FaBars from 'react-icons/lib/fa/bars';
import FaComment from 'react-icons/lib/fa/comment';
import FaUser from 'react-icons/lib/fa/user';

import IconButton from 'IconButton';

export default class ChatBar extends Component {
  render() {
    return (
      <Container>
        <IconsBar>
          <IconButton icon={<FaBars/>} text={"Menu"} />
          <IconButton icon={<FaComment/>} active text={"Talk"} />
          <IconButton text={"Roll"} />
          <IconButton icon={<FaUser/>} text={"Char"} />
        </IconsBar>
      </Container>
    );
  }
}

const Container = styled.div`

`;
const IconsBar = styled.div`
  display: flex;
  align-items: stretch;
`;

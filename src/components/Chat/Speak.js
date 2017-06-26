// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

import type {SpeakMessage} from '../../types/Chat';
import Avatar from '../Avatar';

const Container = styled.div `
  display: flex;
  margin: ${props => props.theme.spacing.margin};
`;

const AvatarAtBottom = styled(Avatar) `
  align-self: flex-end;
`;

const Line = styled.div `
  border-right: ${props => props.theme.chat.speakBorder};
  border-bottom-right-radius: ${props => props.theme.chat.speakBorderRadius};
  width: ${props => props.theme.chat.speakBorderRadius};
  margin: 0 ${props => props.theme.spacing.margin} ${props => props.theme.chat.speakBorderRadius} 0;
`;

const Text = styled.p `
  margin: 0 0 ${props => props.theme.chat.speakBorderRadius} 0;
  padding-bottom: ${props => props.theme.chat.speakBorderRadius};
  white-space: pre-line;
  flex: 8;
`;

const Margin = styled.div `
  flex: 1;
`;

export default class Speak extends Component {
  props: {
    content: SpeakMessage,
  };
  render() {
    return (
      <Container>
        <AvatarAtBottom src="https://api.adorable.io/avatars/128/asd"/>
        <Line />
        <Text>{this.props.content.text}</Text>
        <Margin />
      </Container>
    );
  };
};

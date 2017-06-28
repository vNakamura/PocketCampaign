// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

import type {SpeakMessage} from '../../types/Chat';
import Avatar from '../Avatar';

const Container = styled.div `
  display: flex;
  margin: ${props => props.theme.spacing.margin};
  flex-direction: ${props => props.byMe? 'row-reverse' : 'row'};
`;

const AvatarAtBottom = styled(Avatar) `
  align-self: flex-end;
`;

const Line = styled.div `
  border-right: ${props => props.byMe? 0 : props.theme.chat.speakBorder};
  border-left: ${props => props.byMe? props.theme.chat.speakBorder : 0};
  border-bottom-right-radius: ${props => props.byMe? 0 : props.theme.chat.speakBorderRadius};
  border-bottom-left-radius: ${props => props.byMe? props.theme.chat.speakBorderRadius : 0};
  width: ${props => props.theme.chat.speakBorderRadius};
  margin: 0 ${props => props.byMe? 0 : props.theme.spacing.margin} ${props => props.theme.chat.speakBorderRadius} ${props => props.byMe? props.theme.spacing.margin : 0};
`;

const Text = styled.p `
  margin: 0 0 ${props => props.theme.chat.speakBorderRadius} 0;
  padding-bottom: ${props => props.theme.chat.speakBorderRadius};
  white-space: pre-line;
  flex: 8;
  text-align: ${props => props.byMe? 'right' : 'left'};
`;

const Margin = styled.div `
  flex: 1;
`;

export default class Speak extends Component {
  props: {
    content: SpeakMessage,
    byMe: boolean,
  };
  render() {
    return (
      <Container byMe={this.props.byMe}>
        <AvatarAtBottom src="https://api.adorable.io/avatars/128/asd"/>
        <Line byMe={this.props.byMe} />
        <Text byMe={this.props.byMe}>{this.props.content.text}</Text>
        <Margin byMe={this.props.byMe} />
      </Container>
    );
  };
};

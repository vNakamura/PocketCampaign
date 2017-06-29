// @flow

import React, {Component} from 'react';
import styled from 'styled-components';

import type {SpeakMessage} from '../../types/Chat';
import type {Theme} from '../../theme';
import Avatar from '../Avatar';

type Props = {
  byMe: ?boolean,
  theme: Theme,
};

const Container = styled.div `
  display: flex;
  margin: ${(props: Props) => props.theme.spacing.margin};
  flex-direction: ${(props: Props) => props.byMe? 'row-reverse' : 'row'};
`;

const AvatarAtBottom = styled(Avatar) `
  align-self: flex-end;
`;

const Line = styled.div `
  border-right: ${(props: Props) => props.byMe? 0 : props.theme.chat.speakBorder};
  border-left: ${(props: Props) => props.byMe? props.theme.chat.speakBorder : 0};
  border-bottom-right-radius: ${(props: Props) => props.byMe? 0 : props.theme.chat.speakBorderRadius};
  border-bottom-left-radius: ${(props: Props) => props.byMe? props.theme.chat.speakBorderRadius : 0};
  width: ${(props: Props) => props.theme.chat.speakBorderRadius};
  margin: 0 ${(props: Props) => props.byMe? 0 : props.theme.spacing.margin} ${(props: Props) => props.theme.chat.speakBorderRadius} ${(props: Props) => props.byMe? props.theme.spacing.margin : 0};
`;

const Text = styled.p `
  margin: 0 0 ${(props: Props) => props.theme.chat.speakBorderRadius} 0;
  padding-bottom: ${(props: Props) => props.theme.chat.speakBorderRadius};
  white-space: pre-line;
  flex: 8;
  text-align: ${(props: Props) => props.byMe? 'right' : 'left'};
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

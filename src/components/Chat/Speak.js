// @flow

import React from 'react';
import styled from 'styled-components';

import type { SpeakMessage } from '../../types/Chat';
import { addLinksToText } from '../../helpers/dice';
import type { Theme } from '../../theme';
import CommonLayoutWithAvatar from './CommonLayoutWithAvatar';

type Props = {
  byMe: ?boolean,
  theme: Theme,
};

const Container = styled.div`
  display: flex;
  flex-direction: ${(props: Props) => (props.byMe ? 'row-reverse' : 'row')};
`;

const Line = styled.div`
  border-right: ${(props: Props) => (props.byMe ? 0 : props.theme.chat.speakBorder)};
  border-left: ${(props: Props) => (props.byMe ? props.theme.chat.speakBorder : 0)};
  border-bottom-right-radius: ${(props: Props) =>
    (props.byMe ? 0 : props.theme.chat.speakBorderRadius)};
  border-bottom-left-radius: ${(props: Props) =>
    (props.byMe ? props.theme.chat.speakBorderRadius : 0)};
  width: ${(props: Props) => props.theme.chat.speakBorderRadius};
  margin: 0 ${(props: Props) => (props.byMe ? 0 : props.theme.spacing.margin)}
    ${(props: Props) => props.theme.chat.speakBorderRadius}
    ${(props: Props) => (props.byMe ? props.theme.spacing.margin : 0)};
`;

const Text = styled.p`
  margin: 0 0 ${(props: Props) => props.theme.chat.speakBorderRadius} 0;
  padding-bottom: ${(props: Props) => props.theme.chat.speakBorderRadius};
  white-space: pre-line;
  flex: 8;
  text-align: ${(props: Props) => (props.byMe ? 'right' : 'left')};
`;


const Speak = (props: {message: SpeakMessage, byMe: boolean}) => (
  <CommonLayoutWithAvatar byMe={props.byMe}>
    <Container byMe={props.byMe}>
      <Line byMe={props.byMe} />
      <Text byMe={props.byMe}>
        {addLinksToText(props.message.text)}
      </Text>
    </Container>
  </CommonLayoutWithAvatar>
);

export default Speak;

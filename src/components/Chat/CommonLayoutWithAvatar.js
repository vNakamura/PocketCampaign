// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

import type { Theme } from '../../theme';
import type { UserState } from '../../types/State';
import Avatar, { EmptyAvatar } from '../Avatar';
import PushToBottom from '../PushToBottom';

type Props = {
  byMe: ?boolean,
  theme: Theme,
};

const scaleY = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;
const scaleBoth = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  margin: ${(props: Props) => props.theme.spacing.margin};
  margin-top: ${(props: Props) => (
    props.hideAvatar
    ? `-${props.theme.spacing.margin}`
    : props.theme.spacing.margin
  )};
  flex-direction: ${(props: Props) => (props.byMe ? 'row-reverse' : 'row')};
`;

const ChildrenContainer = styled.div`
  flex: 9;
  transform-origin: bottom;
  animation: ${scaleY} .2s ease-in-out;
  animation-delay: .1s;
  animation-fill-mode: both;
`;

const AnimatedAvatar = styled(Avatar)`
  animation: ${scaleBoth} .3s ease-in-out;
`;

const Margin = styled.div`flex: 1;`;

type CompProps = {
  byMe: boolean,
  hideAvatar?: boolean,
  user: UserState,
  children: *,
};
const CommonLayoutWithAvatar = (props: CompProps) => (
  <Container byMe={props.byMe} hideAvatar={props.hideAvatar}>
    <PushToBottom flex={0}>{
      props.hideAvatar ? <EmptyAvatar /> :
      <AnimatedAvatar user={props.user} />
    }</PushToBottom>

    <ChildrenContainer>{props.children}</ChildrenContainer>
    <Margin byMe={props.byMe} />
  </Container>
);

CommonLayoutWithAvatar.defaultProps = {
  hideAvatar: false,
};

export default CommonLayoutWithAvatar;

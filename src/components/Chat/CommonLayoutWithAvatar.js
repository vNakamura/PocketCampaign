// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

import type { Theme } from '../../theme';
import Avatar from '../Avatar';

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
  flex-direction: ${(props: Props) => (props.byMe ? 'row-reverse' : 'row')};
`;

const ChildrenContainer = styled.div`
  flex: 9;
  transform-origin: bottom;
  animation: ${scaleY} .2s ease-in-out;
  animation-delay: .1s;
  animation-fill-mode: both;
`;

const AvatarAtBottom = styled(Avatar)`
  align-self: flex-end;
  animation: ${scaleBoth} .3s ease-in-out;
`;

const Margin = styled.div`flex: 1;`;

const CommonLayoutWithAvatar = (props: {byMe: boolean, children: *}) => (
  <Container byMe={props.byMe}>
    <AvatarAtBottom src="https://api.adorable.io/avatars/128/asd" />
    <ChildrenContainer>{props.children}</ChildrenContainer>
    <Margin byMe={props.byMe} />
  </Container>
);

export default CommonLayoutWithAvatar;

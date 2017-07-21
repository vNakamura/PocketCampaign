// @flow

import React from 'react';
import styled from 'styled-components';

import type { Theme } from '../../theme';
import Avatar from '../Avatar';

type Props = {
  byMe: ?boolean,
  theme: Theme,
};

const Container = styled.div`
  display: flex;
  margin: ${(props: Props) => props.theme.spacing.margin};
  flex-direction: ${(props: Props) => (props.byMe ? 'row-reverse' : 'row')};
`;

const ChildrenContainer = styled.div`
  flex: 9;
`;

const AvatarAtBottom = styled(Avatar)`
  align-self: flex-end;
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

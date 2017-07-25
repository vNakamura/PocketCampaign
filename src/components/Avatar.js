// @flow
import React from 'react';
import styled from 'styled-components';

import type { UserState } from '../types/State';

const AvatarImg = styled.img`
  width: 10vmin;
  max-width: 50px;
  height: 10vmin;
  max-height: 50px;
  border-radius: 50%;
  margin: .4rem;
`;

export const EmptyAvatar = styled.div`
  display: inline-block;
  width: 10vmin;
  max-width: 50px;
  margin: .4rem;
`;

const Avatar = (props: {user: UserState}) => {
  const path: string = props.user.avatar || `https://api.adorable.io/avatars/128/${props.user.key}`;
  return (<AvatarImg src={path} />);
};

export default Avatar;

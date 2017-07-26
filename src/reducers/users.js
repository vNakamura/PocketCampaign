// @flow

import type { UserState, UserList } from '../types/State';
import type { UserAction } from '../actions/user';

export const demoUser: UserState = {
  key: 'demoUser',
  name: 'Demo User',
  avatar: './demoUser.png', // https://api.adorable.io/avatars/128/asd
};

export const currentUser = (state: UserState = demoUser, action: UserAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const tutorialMaster: UserState = {
  key: 'tutorialMaster',
  name: 'Tutorial Master',
  avatar: './tutorialMaster.png', // https://robohash.org/tutorialMaster?size=128x128&bgset=bg2
};

const initialUsers: UserList = {
  [demoUser.key]: demoUser,
  [tutorialMaster.key]: tutorialMaster,
};

export default (state: UserList = initialUsers, action: UserAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

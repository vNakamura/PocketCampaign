// @flow

import type { UserState } from '../types/State';
import type { UserAction } from '../actions/user';

const initialState = {
  key: 'demoUser',
  name: 'Demo User',
};

export default (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

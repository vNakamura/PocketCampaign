// @flow

import type { ChatAction } from '../actions/chat';
import type { ChatState } from '../types/State';

const initialState: ChatState = {};

const updateState = (kind: string, state: ChatState, action: ChatAction): ChatState => ({
  ...state,
  [action.room]: {
    ...state[action.room],
    [Date.now().toString(36)]: action.message,
  },
});

export default (state: ChatState = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'SPEAK':
      return updateState('speak', state, action);
    case 'ROLL_DICE':
      return updateState('roll', state, action);
    default:
      return state;
  }
};

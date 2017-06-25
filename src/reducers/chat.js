// @flow

import {SEND_MESSAGE} from '../actions/chat';
import type {ChatAction} from '../actions/chat';
import type {ChatState} from '../types/State';

const initialState: ChatState = {
  asd: []
};

export default (state: ChatState = initialState, action: ChatAction): ChatState => {
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        [action.room]: [...state[action.room], {
          kind: 'speach',
          content: action.content,
        }]
      };
    default:
      return state;
  }
};

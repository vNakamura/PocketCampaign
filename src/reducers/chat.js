// @flow

import {SEND_MESSAGE} from '../actions/chat';
import type {State} from '../types/State';

const initialState: State = {
  asd: []
};

type uiAction = {
  type: string,
  room: string,
  text: string,
}
export default (state: State = initialState, action: uiAction): State => {
  switch(action.type) {
    case SEND_MESSAGE:
      const newState: State = {...state};
      newState[action.room].push({text: action.text});
      return newState;
    default:
      return state;
  }
};

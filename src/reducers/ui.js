// @flow

import type { UIState } from '../types/State';
import type { UIAction } from '../actions/ui';

const initialState: UIState = {
  sidebar: {
    visible: false,
    fixed: false,
  },
  chatbar: {
    currentInput: 'speak',
    lastNotation: '1d6',
  },
};

export default (state: UIState = initialState, action: UIAction): * => {
  switch (action.type) {
    case 'FIX_SIDEBAR':
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          fixed: action.fixed === undefined ? !state.sidebar.visible : action.fixed,
        },
      };
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          visible: action.visible === undefined ? !state.sidebar.visible : action.visible,
        },
      };
    case 'CHANGE_CHAT_INPUT':
      return {
        ...state,
        chatbar: {
          ...state.chatbar,
          currentInput: action.input,
        },
      };
    case 'SAVE_LAST_NOTATION':
      return {
        ...state,
        chatbar: {
          ...state.chatbar,
          lastNotation: action.notation,
        },
      };
    default:
      return state;
  }
};

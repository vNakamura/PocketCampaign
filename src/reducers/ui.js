// @flow

import {TOGGLE_SIDEBAR, FIX_SIDEBAR} from '../actions/ui';
import type {State} from '../types/State';

const initialState: State = {
  sidebar: {
    visible: false,
    fixed: true,
  },
};

type uiAction = {
  type: string,
  visible: ?boolean,
  fixed: ?boolean,
}
export default (state: State = initialState, action: uiAction): State => {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          visible: action.visible === undefined ? !state.sidebar.visible : action.visible,
        },
      };
    case FIX_SIDEBAR:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          fixed: action.fixed,
        },
      };
    default:
      return state;
  }
};

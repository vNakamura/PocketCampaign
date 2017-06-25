// @flow

import {TOGGLE_SIDEBAR, FIX_SIDEBAR} from '../actions/ui';
import type {UIState} from '../types/State';
import type {SideBarAction} from '../actions/ui';

const initialState: UIState = {
  sidebar: {
    visible: false,
    fixed: false,
  },
};

export default (state: UIState = initialState, action: SideBarAction): * => {
  switch(action.type) {
  case FIX_SIDEBAR:
    return {
      ...state,
      sidebar: {
        ...state.sidebar,
        fixed: action.fixed === undefined ? !state.sidebar.visible : action.fixed,
      },
    };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          visible: action.visible === undefined ? !state.sidebar.visible : action.visible,
        },
      };
    default:
      return state;
  }
};

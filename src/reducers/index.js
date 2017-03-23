import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';

import sidebarVisible from './sidebar';
import modal from './modal';

const rootReducer = combineReducers({
  sidebarVisible,
  modal,
  firebase: firebaseStateReducer,
});

export default rootReducer;

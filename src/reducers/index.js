import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';

import sidebarVisible from './sidebar';
import modal from './modal';

const rootReducer = combineReducers({
  sidebarVisible,
  modal,
  routing: routerReducer,
  firebase: firebaseStateReducer,
});

export default rootReducer;

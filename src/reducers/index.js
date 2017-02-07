import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';

import sidebarVisible from './sidebar';

const rootReducer = combineReducers({
  sidebarVisible,
  routing: routerReducer,
  firebase: firebaseStateReducer,
});

export default rootReducer;

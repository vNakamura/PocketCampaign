import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';

import sidebarVisible from './sidebar';
import modalContent from './modal';

const rootReducer = combineReducers({
  sidebarVisible,
  modalContent,
  routing: routerReducer,
  firebase: firebaseStateReducer,
});

export default rootReducer;

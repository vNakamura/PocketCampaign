import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ui from './ui';
import chat from './chat';
import users, { currentUser } from './users';

export default combineReducers({
  ui,
  chat,
  currentUser,
  users,
  router: routerReducer,
});

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ui from './ui';
import chat from './chat';
import users, { currentUser } from './users';
import chars from './chars';

export default combineReducers({
  ui,
  chat,
  currentUser,
  users,
  chars,
  router: routerReducer,
});

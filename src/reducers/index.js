import { combineReducers } from 'redux';

import ui from './ui';
import chat from './chat';
import user from './user';

export default combineReducers({
  ui,
  chat,
  currentUser: user,
});

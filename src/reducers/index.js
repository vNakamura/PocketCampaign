import {combineReducers} from 'redux';

import ui from './ui';
import chat from './chat';

export default combineReducers({
  ui,
  chat,
});

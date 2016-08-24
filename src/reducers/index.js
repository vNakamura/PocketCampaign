import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sidebarVisible from './sidebar';
import messages from './messages';

const rootReducer = combineReducers({
  sidebarVisible,
  messages,
  routing: routerReducer,
});

export default rootReducer;

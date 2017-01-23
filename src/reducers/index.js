import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sidebarVisible from './sidebar';

const rootReducer = combineReducers({
  sidebarVisible,
  routing: routerReducer,
});

export default rootReducer;

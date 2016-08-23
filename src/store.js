import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  sidebarVisible: true,
};

const store = createStore(
  rootReducer,
  defaultState,
  window.devToolsExtension && window.devToolsExtension()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

import { createStore } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {
  sidebarVisible: false,
};

const store = createStore(
  rootReducer,
  defaultState,
  (process.env.NODE_ENV === 'production') ?
    undefined :
    window.devToolsExtension && window.devToolsExtension(),
);

export default store;

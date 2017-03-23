import { render } from 'react-dom';
import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import config from './config';
import rootReducer from './reducers/index';
import App from './components/App';

const defaultState = {
  sidebarVisible: false,
};

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    reactReduxFirebase(config.firebase),
    (
      process.env.NODE_ENV === 'production' ?
      f => f :
      (window.devToolsExtension ? window.devToolsExtension() : f => f)
    ),
  ),
);
// const history = syncHistoryWithStore(browserHistory, store);

require('./global.styl');

const router = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(router, document.getElementById('root'));

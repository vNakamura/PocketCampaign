import { render } from 'react-dom';
import React from 'react';
import { createStore, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import config from './config';
import rootReducer from './reducers/index';
import App from './components/App';
import Chat from './components/Chat';
import KitchenSink from './components/KitchenSink';

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
const history = syncHistoryWithStore(browserHistory, store);

require('./global.styl');

const router = (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={KitchenSink} />
        <Route path="chat/:id" component={Chat} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

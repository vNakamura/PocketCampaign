import { render } from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { init } from 'firebase-3-react';

import { firebase } from './config';
import store, { history } from './store';
import App from './components/App';
import Chat from './components/Chat';
import KitchenSink from './components/KitchenSink';

init(firebase);
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

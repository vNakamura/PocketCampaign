import { render } from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';
import App from './components/App';
import KitchenSink from './components/KitchenSink';

require('./global.styl');

const router = (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={KitchenSink} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

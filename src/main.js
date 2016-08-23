import { render } from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import KitchenSink from './components/KitchenSink';

require('./global.styl');

const router = (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={KitchenSink} />
    </Route>
  </Router>
);

render(router, document.getElementById('root'));

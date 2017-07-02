import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import store from './config/store';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render((
    <Provider store={store}>
      <Component/>
    </Provider>
  ), document.getElementById('root'));
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}

registerServiceWorker();

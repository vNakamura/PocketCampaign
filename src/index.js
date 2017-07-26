import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import { Provider } from 'react-redux';

import store from './config/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
}

initReactFastclick();
render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}

registerServiceWorker();

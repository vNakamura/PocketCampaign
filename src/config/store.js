// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

import reducer from '../reducers';

export const history = createHistory();
const middleware: Array<mixed> = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));


import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './rootReducers'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)

const store = createStore(
  reducers,
  applyMiddleware(
    middleware,
    logger,
    promiseMiddleware()
  ),
);

export default store

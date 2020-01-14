import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import customHistory from 'lib/history';
import * as modules from './modules';

// TODO: middlewares like redux-logger have to be loaded
import rootSaga from 'sagas';

const reducers = combineReducers(modules);

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

export default function configure(preloadedState) {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      history: customHistory
    }
  });
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducers, preloadedState, composeEnhancers(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga);
  return store;
}
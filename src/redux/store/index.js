import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/';
import promiseMiddleware from '../promiseMiddleware';

const configureStore = () => {
  /** Setup middleware  */
  const middlewares = [];

  /** Inject middleware */
  middlewares.push(promiseMiddleware);

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

export default configureStore;

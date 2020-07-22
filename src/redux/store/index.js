import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/';

const configureStore = () => {
  /** Setup middleware  */
  const middlewares = [];

  /** Custom middleware */
  const promiseMiddleware = (store) => (next) => (action) => {
    const { type, promise } = action;

    if (promise === undefined) {
      next(action);
    }

    if (typeof promise === 'function') {
      next({
        type: `${type}_STARTING`,
      });

      promise()
        .then((response) => {
          response.json().then((res) => {
            return next({
              type: `${type}_SUCCESS`,
              payload: res.data,
            });
          });
        })
        .catch((err) => {
          return next({ type: `${type}_FAIL`, payload: err });
        });
    }

    return next(action);
  };

  middlewares.push(promiseMiddleware);

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

export default configureStore;

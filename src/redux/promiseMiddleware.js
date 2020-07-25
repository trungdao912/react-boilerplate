export default (store) => (next) => (action) => {
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

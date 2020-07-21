export default (
  state = {
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_ITEMS_STARTING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

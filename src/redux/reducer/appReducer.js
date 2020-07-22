export default (
  state = {
    loading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_ITEMS_STARTING':
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      }

    case 'FETCH_ITEMS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

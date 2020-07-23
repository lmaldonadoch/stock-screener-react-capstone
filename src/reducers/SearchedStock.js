const searchedStockReducer = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return action.fetch;
    default:
      return state;
  }
};

export default searchedStockReducer;

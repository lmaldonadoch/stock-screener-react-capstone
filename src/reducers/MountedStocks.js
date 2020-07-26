const initialState = {
  isFetching: false,
  didInvalidate: false,
  stocks: [],
};

const searchedStockReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHING_MOUNTED_STOCKS':
      return {
        ...state,
        isFetching: true,
      };
    case 'ERROR_FETCHING_MOUNTED_STOCKS_DATA':
      return {
        ...state,
        isFetching: false,
      };
    case 'RECEIVED_MOUNTED_STOCKS':
      return {
        ...state,
        isFetching: false,
        stocks: payload,
      };
    default:
      return state;
  }
};

export default searchedStockReducer;

const initialState = {
  isFetching: false,
  didInvalidate: false,
  mostActive: {},
  mostGainer: {},
  mostLoser: {},
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
        mostActive: payload[0],
        mostGainer: payload[1],
        mostLoser: payload[2],
      };
    default:
      return state;
  }
};

export default searchedStockReducer;

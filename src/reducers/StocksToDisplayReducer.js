const initialState = {
  stocksToDisplay: [],
  page: 1,
  per: 30,
  scrolling: false,
};

const stocksToDisplayReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(payload, 'reducer');

  switch (type) {
    case 'UPDATE_STOCKS':
      return {
        ...state,
        stocksToDisplay: payload,
      };
    default:
      return state;
  }
};

export default stocksToDisplayReducer;

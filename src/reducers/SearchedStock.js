import moment from 'moment';
const initialState = {
  isFetching: false,
  didInvalidate: false,
  data: {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: 'rgba(232,89,0, 0.4)',
        borderColor: 'rgba(232,89,0, 1)',
        pointBorderColor: 'rgba(232,89,0, 0.5)',
      },
    ],
  },
  stockInfo: {},
};

const searchedStockReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHING_STOCK':
      return {
        ...state,
        isFetching: true,
      };
    case 'ERROR_FETCHING_DATA':
      return {
        ...state,
        isFetching: false,
      };
    case 'RECEIVED_STOCK':
      let price = [];
      let labels = [];
      for (let i = 0; i < 253; i += 1) {
        price.unshift(payload[0].historical[i].close);
        labels.unshift(moment(payload[0].historical[i].date).format('l'));
      }
      return {
        ...state,
        isFetching: false,
        data: {
          labels: labels,
          datasets: [
            {
              label: payload[0].symbol,
              data: price,
              backgroundColor: 'rgba(232,89,0, 0.4)',
              borderColor: 'rgba(232,89,0, 1)',
              pointBorderColor: 'transparent',
            },
          ],
        },
        stockInfo: payload[1][0],
      };
    default:
      return state;
  }
};

export default searchedStockReducer;

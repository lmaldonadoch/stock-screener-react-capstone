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
};

const searchedStockReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHING_STOCK':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_FETCHING_DATA':
      return {
        ...state,
        loading: false,
      };
    case 'RECEIVED_STOCK':
      let price = [];
      let labels = [];
      console.log(payload.historical);
      for (let i = 0; i < 253; i += 1) {
        price.unshift(payload.historical[i].close);
        labels.unshift(moment(payload.historical[i].date).format('l'));
      }
      return {
        ...state,
        loading: false,
        data: {
          labels: labels,
          datasets: [
            {
              label: payload.symbol,
              data: price,
              backgroundColor: 'rgba(232,89,0, 0.4)',
              borderColor: 'rgba(232,89,0, 1)',
              pointBorderColor: 'rgba(232,89,0, 0.5)',
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default searchedStockReducer;

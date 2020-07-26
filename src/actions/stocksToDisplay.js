export const updateStocksToDisplay = (stocks, index) => (dispatch) => {
  //let pay = stocks.slice(index, index + 30);
  let pay = index;
  console.log(stocks, index);
  dispatch({
    type: 'UPDATE_STOCKS',
    payload: pay ? pay : [],
  });
};

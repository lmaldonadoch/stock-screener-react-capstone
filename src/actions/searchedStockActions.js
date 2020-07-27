const requestStockInfo = data => async dispatch => {
  try {
    dispatch({
      type: 'FETCHING_STOCK',
    });

    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${data}?serietype=line&apikey=c2c4f86e8fdaf8e06c133e66dc69debd`,
    );
    const info = await response.json();

    const response2 = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${data}?apikey=c2c4f86e8fdaf8e06c133e66dc69debd`,
    );
    const info2 = await response2.json();

    await dispatch({
      type: 'RECEIVED_STOCK',
      payload: [info, info2],
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_DATA',
      payload: error,
    });
  }
};

export default requestStockInfo;

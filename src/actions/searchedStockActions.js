const requestStockInfo = data => async dispatch => {
  try {
    dispatch({
      type: 'FETCHING_STOCK',
    });

    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${data}?serietype=line&apikey=e9d127c8a783333e2c776289a4f0d487`,
    );
    const info = await response.json();

    const response2 = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${data}?apikey=e9d127c8a783333e2c776289a4f0d487`,
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

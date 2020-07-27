const requestMountedStocksInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_MOUNTED_STOCKS',
    });

    const response = await fetch(
      'https://financialmodelingprep.com/api/v3/stock/list?apikey=e9d127c8a783333e2c776289a4f0d487'
    );
    const data = await response.json();

    await dispatch({
      type: 'RECEIVED_MOUNTED_STOCKS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_MOUNTED_STOCKS_DATA',
      payload: error,
    });
  }
};

export default requestMountedStocksInfo;

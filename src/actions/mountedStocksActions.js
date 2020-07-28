const requestMountedStocksInfo = () => async dispatch => {
  try {
    dispatch({
      type: 'FETCHING_MOUNTED_STOCKS',
    });

    const response = await fetch(
      'https://financialmodelingprep.com/api/v3/stock/list?apikey=fd5ccaaa835e962f809f6ad5ac53c6c7',
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

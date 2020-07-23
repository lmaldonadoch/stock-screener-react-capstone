export const requestInitialData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_STOCK',
    });

    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${data}?serietype=line&apikey=8970289895f882c7feb57a20ed908314`
    );
    const info = await response.json();
    console.log(info);
    await dispatch({
      type: 'RECEIVED_STOCK',
      payload: info,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_DATA',
      payload: error,
    });
  }
};

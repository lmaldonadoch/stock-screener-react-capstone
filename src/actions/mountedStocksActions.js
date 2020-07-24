export const requestMountedStocksInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_MOUNTED_STOCKS',
    });

    const responseMostActive = await fetch(
      `https://financialmodelingprep.com/api/v3/actives?apikey=2d556769d7598ca278b16bc77d65e332`
    );
    const mostActive = await responseMostActive.json();

    const responseMostGainers = await fetch(
      `https://financialmodelingprep.com/api/v3/gainers?apikey=2d556769d7598ca278b16bc77d65e332`
    );
    const mostGainers = await responseMostGainers.json();

    const responseMostLosers = await fetch(
      `https://financialmodelingprep.com/api/v3/losers?apikey=2d556769d7598ca278b16bc77d65e332`
    );
    const mostLosers = await responseMostLosers.json();
    console.log(mostActive);

    await dispatch({
      type: 'RECEIVED_MOUNTED_STOCKS',
      payload: [mostActive, mostGainers, mostLosers],
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_MOUNTED_STOCKS_DATA',
      payload: error,
    });
  }
};

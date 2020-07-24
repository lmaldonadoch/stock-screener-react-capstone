import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMountedStocksInfo } from '../actions/mountedStocksActions';

function StocksList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mountedStocks);

  // useEffect(() => {
  //   if (state.mostActive.length === undefined)
  //     dispatch(requestMountedStocksInfo());
  // }, []);

  return (
    <div>
      {state.isFetching && <p>Please wait...</p>}
      <div></div>
    </div>
  );
}

export default StocksList;

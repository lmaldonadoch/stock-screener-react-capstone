import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { requestInitialData } from '../actions/searchedStockActions';
import StocksForm from '../containers/StocksForm';

function Details() {
  const dispatch = useDispatch();
  const [stock, setStock] = React.useState('AAPL');
  const state = useSelector((state) => state.searchedStock);

  const fetchData = (data) => {
    setStock(data);
    dispatch(requestInitialData(stock.toLocaleUpperCase()));
  };

  return (
    <div className="Details">
      <StocksForm clickHandler={fetchData} />
      {state.isFetching && <p>Please wait...</p>}
      <Line data={state.data} />
    </div>
  );
}

export default Details;

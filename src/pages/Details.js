import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { requestInitialData } from '../actions/searchedStockActions';

function Details() {
  const dispatch = useDispatch();
  const [stock, setStock] = React.useState('AAPL');
  const state = useSelector((state) => state.searchedStock);
  const data = {
    labels: ['11:00', '12:00'],
    datasets: [
      {
        label: 'AAPL',
        data: [200, 210],
        backgroundColor: 'rgba(232,89,0, 0.4)',
        borderColor: 'rgba(232,89,0, 1)',
        pointBorderColor: 'rgba(232,89,0, 0.5)',
      },
    ],
  };

  const fetchData = (e) => {
    e.preventDefault();
    dispatch(requestInitialData(stock.toLocaleUpperCase()));
  };

  return (
    <div className="Details">
      <form className="books-form" onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Book Title"
          className="title-input"
          name="title"
          onChange={(e) => setStock(e.target.value)}
        />
        <input type="submit" value="Search Stock" />
      </form>
      {state.isFetching && <p>Please wait...</p>}
      <Line data={state.data} />
    </div>
  );
}

export default Details;

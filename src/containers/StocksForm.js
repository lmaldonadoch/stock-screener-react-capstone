import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import requestStockInfo from '../actions/searchedStockActions';

function StocksForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [stock, setStock] = React.useState('AAPL');

  const fetchData = e => {
    e.preventDefault();
    dispatch(requestStockInfo(stock.toLocaleUpperCase()));
    if (location.pathname !== '/details') {
      history.push('/details');
    }
  };

  return (
    <form className="books-form" onSubmit={fetchData}>
      <input
        type="text"
        placeholder="Search Symbol"
        className="title-input"
        name="title"
        onChange={e => setStock(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-chart-line" />
      </button>
    </form>
  );
}

export default StocksForm;

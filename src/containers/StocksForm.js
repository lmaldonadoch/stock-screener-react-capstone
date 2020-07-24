import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStockInfo } from '../actions/searchedStockActions';

function StocksForm() {
  const dispatch = useDispatch();
  const [stock, setStock] = React.useState('AAPL');
  const state = useSelector((state) => state.searchedStock);

  const fetchData = (e) => {
    e.preventDefault();
    dispatch(requestStockInfo(stock.toLocaleUpperCase()));
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
        <input type="submit" />
      </form>
    </div>
  );
}

export default StocksForm;

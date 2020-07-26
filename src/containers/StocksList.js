import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMountedStocksInfo } from '../actions/mountedStocksActions';
import Stock from '../components/Stock';

function StocksList({ size = 14000 }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mountedStocks);
  const filterState = useSelector((state) => state.filter);

  const [stocksToDisplay, setStocksToDisplay] = useState({
    page: 0,
    stocksToDisplay: [],
  });

  const [isBottom, setIsBottom] = useState(false);

  // useEffect(() => {
  //   if (state.stocks.length === 0) dispatch(requestMountedStocksInfo());
  // }, []);

  function handleScroll() {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      console.log('bottom!');
      setIsBottom(true);
    }
  }

  console.log(filterState.filter);

  const addItems = () => {
    if (state.stocks.length !== 0) {
      console.log(state.stocks.slice(1, 5));
      setStocksToDisplay((prevState) => ({
        page: prevState.page + 1,
        stocksToDisplay: prevState.stocksToDisplay.concat(
          state.stocks.slice(
            (prevState.page + 1) * 30,
            (prevState.page + 1) * 30 + 30
          )
        ),
      }));
      setIsBottom(false);
    }
  };

  useEffect(() => {
    if (!state.isFetching) {
      addItems();
    }
  }, [state.isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom) {
      addItems();
    }
  }, [isBottom]);

  return (
    <div className="StockList">
      {state.isFetching && <p>Please wait...</p>}

      <h3>Stocks List</h3>
      <div className="main-info-container">
        {stocksToDisplay.stocksToDisplay
          .slice(0, Math.min(size, stocksToDisplay.stocksToDisplay.length))
          .map((stock) => {
            if (
              stock.exchange === filterState.filter ||
              [null, 'Reset filters'].includes(filterState.filter)
            ) {
              return <Stock stock={stock} key={stock.symbol} />;
            }
            return false;
          })}
      </div>
    </div>
  );
}

export default StocksList;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import requestMountedStocksInfo from '../actions/mountedStocksActions';
import Stock from '../components/Stock';

function StocksList({ size = 14000 }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mountedStocks);
  const filterState = useSelector((state) => state.filter);

  const [stocksToDisplay, setStocksToDisplay] = useState({
    page: -1,
    stocksToDisplay: [],
  });

  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    if (state.stocks.length === 0) dispatch(requestMountedStocksInfo());
  }, []);

  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  }

  const addItems = () => {
    if (state.stocks.length !== 0) {
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
      <div className="main-info-container">
        {stocksToDisplay.stocksToDisplay
          .slice(0, Math.min(size, stocksToDisplay.stocksToDisplay.length))
          .map((stock) => {
            if ([null, 'Reset filters'].includes(filterState.filter)) {
              return <Stock stock={stock} key={stock.symbol} />;
            }
            if (
              filterState.filter === 'NYSE' &&
              [
                'NYSE Arca',
                'NYSE American',
                'NYSE',
                'New York Stock Exchange',
                'NYSEArca',
              ].includes(stock.exchange)
            ) {
              return <Stock stock={stock} key={stock.symbol} />;
            }
            if (
              filterState.filter === 'NASDAQ' &&
              [
                'Nasdaq Global Select',
                'NASDAQ Global Market',
                'NASDAQ Capital Market',
                'Nasdaq',
                'NasdaqGM',
                'NasdaqCM',
                'NasdaqGS',
              ].includes(stock.exchange)
            ) {
              return <Stock stock={stock} key={stock.symbol} />;
            }
            if (
              filterState.filter === 'Foreign Exchanges' &&
              [
                'Paris',
                'Amsterdam',
                'Brussels',
                'Lisbon',
                'Toronto',
                'Swiss',
              ].includes(stock.exchange)
            ) {
              return <Stock stock={stock} key={stock.symbol} />;
            }
            if (
              filterState.filter === 'Other' &&
              ['BATS Exchange', 'Other OTC', 'YHD', 'BATS', 'MCX'].includes(
                stock.exchange
              )
            ) {
              return <Stock stock={stock} key={stock.symbol} />;
            }
            return false;
          })}
      </div>
    </div>
  );
}

StocksList.propTypes = {
  size: PropTypes.number.isRequired,
};

export default StocksList;

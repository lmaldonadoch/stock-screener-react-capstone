import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMountedStocksInfo } from '../actions/mountedStocksActions';
import { Link } from 'react-router-dom';
import Stock from '../components/Stock';

function StocksList({ size }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mountedStocks);
  const filterState = useSelector((state) => state.filter);

  useEffect(() => {
    if (state.mostActive.length === 0) dispatch(requestMountedStocksInfo());
  }, []);

  let interestingStockSize = -1;

  if (size === 2) {
    interestingStockSize = 2;
  }

  return (
    <div className="StockList">
      {state.isFetching && <p>Please wait...</p>}

      <h3>Most Active Stocks</h3>

      <div className="main-info-container">
        {state.mostActive.slice(0, size).map((stock) => {
          if (stock.changesPercentage[1] === '+') {
            return (
              <Stock
                stock={stock}
                class={'green'}
                key={stock.ticker}
                source={'most-active'}
              />
            );
          }
          return (
            <Stock
              stock={stock}
              class={'red'}
              key={stock.ticker}
              source={'most-active'}
            />
          );
        })}
      </div>

      <h3>Biggest Percentage Gainers</h3>

      <div className="main-info-container">
        {state.mostGainer.slice(0, size).map((stock) => {
          return (
            <Stock
              stock={stock}
              class={'green'}
              key={stock.ticker}
              source={'most-gainer'}
            />
          );
        })}
      </div>

      <h3>Biggest Percentage Losers</h3>
      <div className="main-info-container">
        {state.mostLoser.slice(0, size).map((stock) => {
          return (
            <Stock
              stock={stock}
              class={'red'}
              key={stock.ticker}
              source={'most-loser'}
            />
          );
        })}
      </div>

      <h3>Top NYSE, NASDAQ, and AMEX stocks</h3>
      <div className="main-info-container interesting-stocks-container">
        {state.interestingStocks.slice(0, interestingStockSize).map((stock) => {
          const formatted_stock = {
            ticker: stock.symbol,
            companyName: stock.name,
            price: stock.price,
            changesPercentage:
              stock.changesPercentage > 0
                ? `(+${stock.changesPercentage}%)`
                : `(${stock.changesPercentage}%)`,
          };
          if (formatted_stock.changesPercentage[1] === '+') {
            return (
              <Stock
                stock={formatted_stock}
                class={'green'}
                key={formatted_stock.ticker}
                source={'interesting-stocks'}
              />
            );
          }
          return (
            <Stock
              stock={formatted_stock}
              class={'red'}
              key={formatted_stock.ticker}
              source={'interesting-stocks'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StocksList;

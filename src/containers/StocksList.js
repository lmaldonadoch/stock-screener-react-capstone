import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMountedStocksInfo } from '../actions/mountedStocksActions';
import { Link } from 'react-router-dom';

function StocksList({ size }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mountedStocks);

  // useEffect(() => {
  //   if (state.mostActive.length === 0) dispatch(requestMountedStocksInfo());
  // }, []);

  return (
    <div className="StockList">
      {state.isFetching && <p>Please wait...</p>}

      <h3>Most Active Stocks</h3>

      <div className="main-info-container">
        {state.mostActive.slice(0, size).map((stock) => {
          if (stock.changesPercentage[1] === '+') {
            return (
              <div
                className="info-box most-active-box"
                key={stock.ticker}
                id={stock.ticker}
              >
                <Link to={`/details/${stock.ticker}`}>
                  <p className="info-box-company" id={stock.ticker}>
                    {stock.companyName}
                  </p>
                  <p className="info-box-ticker" id={stock.ticker}>
                    {stock.ticker}
                  </p>
                  <div className="info-box-price-container" id={stock.ticker}>
                    <span className="info-box-price green" id={stock.ticker}>
                      ${stock.price}
                    </span>
                    <span className="info-box-change green" id={stock.ticker}>
                      {stock.changesPercentage}
                    </span>
                  </div>
                </Link>
              </div>
            );
          }
          return (
            <div
              className="info-box most-active-box"
              key={stock.ticker}
              id={stock.ticker}
            >
              <Link to={`/details/${stock.ticker}`}>
                <p className="info-box-company" id={stock.ticker}>
                  {stock.companyName}
                </p>
                <p className="info-box-ticker" id={stock.ticker}>
                  {stock.ticker}
                </p>
                <div className="info-box-price-container" id={stock.ticker}>
                  <span className="info-box-price red" id={stock.ticker}>
                    ${stock.price}
                  </span>
                  <span className="info-box-change red" id={stock.ticker}>
                    {stock.changesPercentage}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <h3>Biggest Percentage Gainers</h3>

      <div className="main-info-container">
        {state.mostGainer.slice(0, size).map((stock) => {
          if (stock.changesPercentage[1] === '+') {
            return (
              <div
                className="info-box most-gainer-box"
                key={stock.ticker}
                id={stock.ticker}
              >
                <Link to={`/details/${stock.ticker}`}>
                  <p className="info-box-company" id={stock.ticker}>
                    {stock.companyName}
                  </p>
                  <p className="info-box-ticker">{stock.ticker}</p>
                  <div className="info-box-price-container" id={stock.ticker}>
                    <span className="info-box-price green" id={stock.ticker}>
                      ${stock.price}
                    </span>
                    <span className="info-box-change green" id={stock.ticker}>
                      {stock.changesPercentage}
                    </span>
                  </div>
                </Link>
              </div>
            );
          }
          return (
            <div
              className="info-box most-gainer-box"
              key={stock.ticker}
              id={stock.ticker}
            >
              <Link to={`/details/${stock.ticker}`}>
                <p className="info-box-company" id={stock.ticker}>
                  {stock.companyName}
                </p>
                <p className="info-box-ticker" id={stock.ticker}>
                  {stock.ticker}
                </p>
                <div className="info-box-price-container" id={stock.ticker}>
                  <span className="info-box-price red" id={stock.ticker}>
                    ${stock.price}
                  </span>
                  <span className="info-box-change red" id={stock.ticker}>
                    {stock.changesPercentage}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <h3>Biggest Percentage Losers</h3>
      <div className="main-info-container">
        {state.mostLoser.slice(0, size).map((stock) => {
          if (stock.changesPercentage[1] === '+') {
            return (
              <div
                className="info-box most-loser-box"
                key={stock.ticker}
                id={stock.ticker}
              >
                <Link to={`/details/${stock.ticker}`}>
                  <p className="info-box-company" id={stock.ticker}>
                    {stock.companyName}
                  </p>
                  <p className="info-box-ticker" id={stock.ticker}>
                    {stock.ticker}
                  </p>
                  <div className="info-box-price-container" id={stock.ticker}>
                    <span className="info-box-price green" id={stock.ticker}>
                      ${stock.price}
                    </span>
                    <span className="info-box-change green" id={stock.ticker}>
                      {stock.changesPercentage}
                    </span>
                  </div>
                </Link>
              </div>
            );
          }
          return (
            <div
              className="info-box most-loser-box"
              key={stock.ticker}
              id={stock.ticker}
            >
              <Link to={`/details/${stock.ticker}`}>
                <p className="info-box-company" id={stock.ticker}>
                  {stock.companyName}
                </p>
                <p className="info-box-ticker" id={stock.ticker}>
                  {stock.ticker}
                </p>
                <div className="info-box-price-container" id={stock.ticker}>
                  <span className="info-box-price red" id={stock.ticker}>
                    ${stock.price}
                  </span>
                  <span className="info-box-change red" id={stock.ticker}>
                    {stock.changesPercentage}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StocksList;

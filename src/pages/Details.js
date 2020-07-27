import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import StocksForm from '../containers/StocksForm';
import StocksList from '../containers/StocksList';
import requestStockInfo from '../actions/searchedStockActions';

function Details({ match }) {
  const state = useSelector((state) => state.searchedStock);
  const dispatch = useDispatch();

  useEffect(() => {
    if (match.params.stock) {
      if (
        Object.keys(state.stockInfo).length === 0 ||
        match.params.stock !== state.data.datasets[0].label
      )
        dispatch(requestStockInfo(match.params.stock.toLocaleUpperCase()));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [match]);

  if (Object.keys(state.stockInfo).length !== 0) {
    return (
      <div className="Details">
        <div className="form-container-details">
          <StocksForm />
        </div>
        <div className="main-info-container">
          <div className="info-box main-info">
            <p className="info-box-data">{state.stockInfo.name}</p>
            <p className="info-box-title"> Company Name </p>
          </div>

          <div className="info-box main-info">
            <p className="info-box-data">
              {state.stockInfo.changesPercentage}%
            </p>
            <p className="info-box-title"> Change (%) </p>
          </div>

          <div className="info-box main-info">
            <p className="info-box-data">${state.stockInfo.previousClose}</p>
            <p className="info-box-title"> Previous Day Close </p>
          </div>

          <div className="info-box main-info">
            <p className="info-box-data">{state.stockInfo.volume}</p>
            <p className="info-box-title"> Previous Day Volume </p>
          </div>
        </div>

        {state.isFetching && <p>Please wait...</p>}

        <div className="chart-container">
          <Line data={state.data} />
        </div>

        <div className="chart-info-wrapper">
          <div className="info-wrapper">
            <p className="info-title">Ticker information</p>
            <p className="last-price">${state.stockInfo.price}</p>
            <div className="info-container border-bottom">
              <span className="info-text">Change ($)</span>
              <span className="info-data">${state.stockInfo.change}</span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Previous Day High</span>
              <span className="info-data">${state.stockInfo.dayHigh}</span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Previous Day Low</span>
              <span className="info-data">${state.stockInfo.dayLow}</span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Year High</span>
              <span className="info-data">${state.stockInfo.yearHigh}</span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Year Low</span>
              <span className="info-data">${state.stockInfo.yearLow}</span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Next Earnings</span>
              <span className="info-data">
                {moment(state.stockInfo.earningsAnnouncement).format('LLL')}
              </span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Market Capitalization</span>
              <span className="info-data">${state.stockInfo.marketCap}</span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">Shares Outstanding</span>
              <span className="info-data">
                {state.stockInfo.sharesOutstanding}
              </span>
            </div>

            <div className="info-container border-bottom">
              <span className="info-text">EPS</span>
              <span className="info-data">{state.stockInfo.eps}</span>
            </div>

            <div className="info-container">
              <span className="info-text">PE</span>
              <span className="info-data">{state.stockInfo.pe}</span>
            </div>
          </div>
          <div className="StocksList-container">
            <h3>Also take a look at</h3>
            <StocksList size={10} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="Details">
      <div className="form-container-details">
        <StocksForm />
      </div>

      {state.isFetching && <p>Please wait...</p>}
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Details;
